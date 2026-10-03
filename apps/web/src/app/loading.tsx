import { Skeleton } from '@karigar/ui';

export default function RootLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 animate-pulse">
      {/* Editorial Header Skeleton */}
      <div className="space-y-4 max-w-xl">
        <Skeleton className="h-4 w-32 bg-[#E6E0D6]" />
        <Skeleton className="h-12 w-full bg-[#DED7CB]" />
        <Skeleton className="h-6 w-3/4 bg-[#E6E0D6]" />
      </div>

      {/* Hero Visual Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6 space-y-4">
          <Skeleton className="h-8 w-2/3 bg-[#DED7CB]" />
          <Skeleton className="h-4 w-full bg-[#E6E0D6]" />
          <Skeleton className="h-4 w-5/6 bg-[#E6E0D6]" />
          <Skeleton className="h-10 w-44 bg-[#DED7CB]" />
        </div>
        <div className="md:col-span-6">
          <Skeleton className="aspect-[4/3] w-full rounded-sm bg-[#DED7CB]" />
        </div>
      </div>

      {/* Grid Skeletons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="aspect-[3/4] w-full bg-[#DED7CB]" />
            <Skeleton className="h-4 w-3/4 bg-[#E6E0D6]" />
            <Skeleton className="h-4 w-1/2 bg-[#E6E0D6]" />
          </div>
        ))}
      </div>
    </div>
  );
}
