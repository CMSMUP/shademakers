'use client';

import { useState, useRef, useEffect } from 'react';
import { findFAQ, searchFAQs, getFAQsByCategory, FAQ_CATEGORIES } from '@/src/data/faq-knowledge-base';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isCategory?: boolean;
  isFAQ?: boolean;
  categoryId?: string;
}

const GREETING = `Hi! 👋 Welcome to Curtain Makers.

I can help you with:
• **Pricing & Quotes** — curtain costs, free estimates, discounts
• **Fabrics & Styles** — types, blackout vs sheer, what suits Abu Dhabi
• **Ordering & Installation** — how to order, process, timing
• **Services** — free design visits, areas we serve, commercial projects
• **Blinds** — types, office solutions, motorized options

Or just type your question below!`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '0', role: 'assistant', content: GREETING },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [open, messages]);

  const addMsg = (content: string, role: 'user' | 'assistant', extra?: Partial<Message>) => {
    setMessages(prev => [...prev, { id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, role, content, ...extra }]);
  };

  const handleCategoryClick = (catId: string) => {
      const faqs = getFAQsByCategory(catId);
      if (faqs.length === 0) {
        addMsg(`I don't have specific answers for that category yet. Try asking a specific question!`, 'assistant');
        return;
      }
      const cat = FAQ_CATEGORIES.find(c => c.id === catId);
      const reply = `Here are common questions about **${cat?.label || catId}**:\n\n` +
        faqs.slice(0, 5).map((f, i) => `${i + 1}. **${f.question}**\n   ${f.answer.split('.')[0]}.`).join('\n\n') +
        `\n\nType your question for more details!`;
      addMsg(reply, 'assistant');
    };

  const handleSend = () => {
    if (!input.trim()) return;
    const query = input.trim();
    addMsg(query, 'user');
    setInput('');

    const faq = findFAQ(query);
    if (faq) {
      addMsg(faq.answer, 'assistant');
    } else {
      const searchResults = searchFAQs(query);
      if (searchResults.length > 0) {
        const reply = `I found ${searchResults.length} relevant answer${searchResults.length > 1 ? 's' : ''}:\n\n` +
          searchResults.slice(0, 3).map((f, i) =>
            `${i + 1}. **${f.question}**\n   ${f.answer.split('.')[0]}.`
          ).join('\n\n') +
          `\n\nCan you tell me more so I can give you the exact answer?`;
        addMsg(reply, 'assistant');
      } else {
        addMsg(`I couldn't find an exact answer to your question. Here's what I suggest:\n\n` +
          `1. **Book a Free Design Visit** — our experts will answer everything in person\n` +
          `2. **Call us** Sat-Thu 9am-6pm\n` +
          `3. **WhatsApp us** for quick help\n\n` +
          `Or try rephrasing your question!`, 'assistant');
      }
    }
  };

  return (
    <>
      {/* Chat bubble */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-500 text-navy-950 shadow-xl hover:scale-105 transition-all animate-pulse-glow flex items-center justify-center"
        aria-label="Chat with us"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-10rem)] rounded-2xl bg-white border border-deep-200 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="p-4 border-b border-deep-200" style={{ backgroundColor: 'var(--color-navy-900)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-navy-950 font-bold text-sm">CM</div>
              <div>
                <p className="text-white text-sm font-semibold">Curtain Makers</p>
                <p className="text-deep-300 text-xs">AI-powered support</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth" style={{ backgroundColor: 'var(--color-deep-50)' }}>
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.role === 'user'
                    ? 'bg-brand-500 text-navy-950 rounded-br-md'
                    : 'bg-white border border-deep-200 text-navy-700 rounded-bl-md shadow-sm'
                }`}>
                  <div className="whitespace-pre-line leading-relaxed">{msg.content}</div>
                  {msg.isCategory && msg.categoryId && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {FAQ_CATEGORIES.slice(0, 6).map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => handleCategoryClick(cat.id)}
                          className="text-xs px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-600 hover:bg-brand-500/20 transition-colors font-medium"
                        >
                          {cat.icon} {cat.label}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="text-[10px] mt-1 text-deep-400">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick action buttons */}
          <div className="px-3 py-2 border-t border-deep-200 flex flex-wrap gap-1.5" style={{ backgroundColor: 'var(--color-deep-50)' }}>
            <button onClick={() => handleCategoryClick('Pricing')} className="text-xs px-2 py-1 rounded-full bg-brand-500/10 text-brand-600 hover:bg-brand-500/20 transition-colors">💰 Pricing</button>
            <button onClick={() => handleCategoryClick('Fabrics')} className="text-xs px-2 py-1 rounded-full bg-brand-500/10 text-brand-600 hover:bg-brand-500/20 transition-colors">🧵 Fabrics</button>
            <button onClick={() => { addMsg('How do I order curtains in Abu Dhabi?', 'user'); const faq = { question: '', answer: 'Ordering is simple: 1) Book a free design visit. 2) Select fabrics at home. 3) We install within 3 days. You can also use our online calculator for an instant estimate.' }; addMsg(faq.answer, 'assistant'); }} className="text-xs px-2 py-1 rounded-full bg-brand-500/10 text-brand-600 hover:bg-brand-500/20 transition-colors">📋 How to Order</button>
            <button onClick={() => { addMsg('Do you offer free curtain design visits?', 'user'); addMsg('Yes! Our curtain experts come to your home with catalogs and samples. Free measurement, advice, and instant quote — no obligation. Covers all of Abu Dhabi and Dubai.', 'assistant'); }} className="text-xs px-2 py-1 rounded-full bg-brand-500/10 text-brand-600 hover:bg-brand-500/20 transition-colors">🏠 Free Visit</button>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-deep-200 bg-white">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                placeholder="Ask about curtains, pricing, fabrics..."
                className="flex-1 rounded-xl px-4 py-2.5 text-sm bg-deep-50 border border-deep-200 text-navy-900 placeholder-deep-400 outline-none focus:border-brand-500 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-brand-500 text-navy-950 flex items-center justify-center disabled:opacity-40 hover:scale-105 transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-deep-400 text-[10px] mt-1.5 text-center">Powered by Curtain Makers knowledge base</p>
          </div>
        </div>
      )}
    </>
  );
}