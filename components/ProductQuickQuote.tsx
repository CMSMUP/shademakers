'use client';

import dynamic from 'next/dynamic';

const QuickQuote = dynamic(() => import('@/components/quote/QuickQuote'), { ssr: false });

interface Props {
  slug: string;
  className?: string;
  compact?: boolean;
}

export default function ProductQuickQuote({ slug, className, compact }: Props) {
  return (
    <div className={className}>
      <QuickQuote defaultProductSlug={slug} compact={compact} />
    </div>
  );
}