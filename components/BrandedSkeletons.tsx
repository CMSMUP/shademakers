/**
 * Branded loading skeleton component.
 * Uses the brand orange for the shimmer effect.
 */
export function ProductCardSkeleton() {
  return (
    <div className="card overflow-hidden animate-shimmer">
      <div className="w-full aspect-[4/3] bg-white/[0.03]" />
      <div className="p-5 space-y-3">
        <div className="h-4 w-3/4 rounded-lg bg-white/[0.05]" />
        <div className="h-3 w-full rounded-lg bg-white/[0.03]" />
        <div className="h-3 w-2/3 rounded-lg bg-white/[0.03]" />
        <div className="h-8 w-1/2 rounded-lg bg-brand-500/10 mt-2" />
      </div>
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="animate-shimmer space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="aspect-[4/3] rounded-2xl bg-white/[0.03]" />
        <div className="space-y-4">
          <div className="h-8 w-2/3 rounded-lg bg-white/[0.05]" />
          <div className="h-4 w-full rounded-lg bg-white/[0.03]" />
          <div className="h-4 w-5/6 rounded-lg bg-white/[0.03]" />
          <div className="h-12 w-1/3 rounded-lg bg-brand-500/10 mt-4" />
          <div className="space-y-2 mt-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 rounded-xl bg-white/[0.03]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="animate-shimmer space-y-12">
      {/* Hero skeleton */}
      <div className="h-[40vh] rounded-3xl bg-white/[0.03]" />
      {/* Content blocks */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <div className="h-6 w-1/4 rounded-lg bg-white/[0.05]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, j) => (
              <div key={j} className="aspect-[4/3] rounded-2xl bg-white/[0.03]" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}