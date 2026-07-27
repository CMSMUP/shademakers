import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';
import { PRODUCTS_SEED } from '@/src/data/products';

const PRODUCT_CONTEXT = PRODUCTS_SEED.map(p =>
  `${p.name}: ${p.short_description}. Models: ${p.models.map(m => m.name).join(', ')}. From AED ${p.base_price_per_sqm}/m².`
).join('\n');

const SYSTEM_PROMPT = `You are a friendly sales assistant for Office Blinds Dubai, a premium commercial blinds company in Dubai, UAE.

Your role:
- Help customers find the right blinds for their office
- Answer questions about products, pricing, installation
- Guide customers to use the free quote calculator at /estimate
- Encourage booking a free site visit
- Be concise, helpful, and friendly

Products available:
${PRODUCT_CONTEXT}

Key info:
- Free quotes available online at /estimate
- Free site visits included
- Professional installation by certified team
- 5-year warranty on all products
- Serving all areas of Dubai
- 5% UAE VAT applies to all quotes

If you cannot answer a question, offer to connect them with a human team member.`;

export async function POST(req: NextRequest) {
  try {
    const { message, session_id, email } = await req.json();
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const supabase = createServerSupabaseClient();

    // Get or create conversation
    let conversationId: string | null = null;

    if (email) {
      const { data: customer } = await supabase
        .from('customers')
        .select('id')
        .eq('email', email)
        .single();

      if (customer) {
        // Find active conversation
        const { data: existingConv } = await supabase
          .from('conversations')
          .select('id')
          .eq('customer_id', customer.id)
          .eq('is_active', true)
          .single();

        if (existingConv) {
          conversationId = existingConv.id;
        } else {
          const { data: newConv } = await supabase
            .from('conversations')
            .insert({
              customer_id: customer.id,
              session_id,
              is_active: true,
            })
            .select('id')
            .single();
          conversationId = newConv?.id || null;
        }
      }
    }

    if (!conversationId) {
      // Anonymous session
      const { data: newConv } = await supabase
        .from('conversations')
        .insert({ session_id, is_active: true })
        .select('id')
        .single();
      conversationId = newConv?.id || null;
    }

    // Save user message
    if (conversationId) {
      await supabase.from('messages').insert({
        conversation_id: conversationId,
        sender_type: 'customer',
        content: message,
      });
    }

    // Get conversation history for context
    let historyContext = '';
    if (conversationId) {
      const { data: recentMessages } = await supabase
        .from('messages')
        .select('sender_type, content')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: false })
        .limit(10);

      if (recentMessages) {
        const msgs = recentMessages.reverse();
        historyContext = msgs.map(m =>
          `${m.sender_type === 'customer' ? 'Customer' : 'AI'}: ${m.content}`
        ).join('\n');
      }
    }

    // Build AI prompt
    const _fullPrompt = `${SYSTEM_PROMPT}\n\nConversation history:\n${historyContext}\n\nCustomer: ${message}\n\nAssistant:`;

    // Call AI (using OpenAI-compatible API via OpenRouter, or fallback to keyword responses)
    let reply: string;
    let escalated = false;

    try {
      const aiRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY || ''}`,
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-v4-flash',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...(historyContext ? historyContext.split('\n').map((line: string) => {
              const [role, ...contentParts] = line.split(': ');
              return { role: role === 'Customer' ? 'user' : 'assistant', content: contentParts.join(': ') };
            }) : []),
            { role: 'user', content: message },
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (aiRes.ok) {
        const data = await aiRes.json();
        reply = data.choices?.[0]?.message?.content?.trim() || 'Thank you for your message. I can help you with that.';
      } else {
        throw new Error('AI API error');
      }
    } catch {
      // Fallback response
      const msg = message.toLowerCase();
      if (msg.includes('price') || msg.includes('cost') || msg.includes('how much')) {
        reply = 'Our prices start from AED 60/m² for flyscreen blinds up to AED 185/m² for smart motorized blinds. Get an accurate quote using our free online calculator at /estimate!';
      } else if (msg.includes('install') || msg.includes('how long')) {
        reply = 'Most office installations are completed within 1–3 days. Our certified team works with minimal disruption to your operations.';
      } else if (msg.includes('sample') || msg.includes('fabric') || msg.includes('visit')) {
        reply = 'We offer free site visits! Our team will bring fabric samples, take measurements, and help you choose the perfect blinds. You can request a visit from your dashboard after getting a quote.';
      } else if (msg.includes('motor') || msg.includes('smart') || msg.includes('automate')) {
        reply = 'Our smart motorized blinds work with app control, voice commands (Alexa/Google Home), and automated scheduling. Available across all our blind types!';
      } else if (msg.includes('warranty')) {
        reply = 'All our products come with a 5-year warranty. Smart motor components have a separate 5-year motor warranty.';
      } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        reply = 'Hello! Welcome to Office Blinds Dubai. How can I help you today? You can ask about our products, get a quick quote, or request a site visit!';
      } else {
        reply = 'Thank you for reaching out! I can help with product information, pricing, or connect you with our team for a personalized consultation. Could you tell me a bit more about what you need?';
        escalated = true;
      }
    }

    // Save AI response
    if (conversationId) {
      await supabase.from('messages').insert({
        conversation_id: conversationId,
        sender_type: escalated ? 'admin' : 'ai',
        content: reply,
      });
    }

    return NextResponse.json({ reply, escalated });
  } catch (error: unknown) {
    console.error('Chat error:', error);
    return NextResponse.json({
      reply: 'Thank you for your message. A team member will get back to you shortly.',
      escalated: true,
    });
  }
}