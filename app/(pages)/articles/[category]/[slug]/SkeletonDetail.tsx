import React from "react";

// 1. The Single Card Skeleton
export const CardSkeleton = () => (
  <div className="rounded-xl p-0.5 h-full animate-pulse bg-[#22223C]">
    {/* Match the bg-[#050A29] and p-5 of your actual cards */}
    <div className="bg-[#050A29] p-5 h-[320px] rounded-xl flex flex-col justify-between">
      <div className="space-y-6">
        {/* Icon placeholder - No space-x-6 here to prevent horizontal pushing */}
        <div className="w-14 h-14 bg-white/10 rounded-lg" />
        
        <div className="space-y-3">
          {/* Title placeholder */}
          <div className="h-7 w-3/4 bg-white/10 rounded" />
          {/* Description lines */}
          <div className="space-y-2">
            <div className="h-3 w-full bg-white/5 rounded" />
            <div className="h-3 w-full bg-white/5 rounded" />
            <div className="h-3 w-4/6 bg-white/5 rounded" />
          </div>
        </div>
      </div>
      
      {/* Footer placeholder */}
      <div className="flex items-center justify-between w-full pt-4">
        <div className="h-4 w-24 bg-white/10 rounded" />
        <div className="w-6 h-6 bg-white/10 rounded-full" />
      </div>
    </div>
  </div>
);

// 2. The Detailed Page Skeleton
const SkeletonDetail = () => {
  return (
    <div className="min-h-screen bg-[#00031C] animate-pulse">
      <div className="max-w-[1440px] m-auto px-5 sm:px-10 lg:px-20 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar */}
          <div className="hidden lg:block lg:col-span-3 space-y-4">
            <div className="h-4 w-24 bg-white/10 rounded mb-8"></div>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-10 w-full bg-white/5 rounded-lg"></div>
            ))}
          </div>

          {/* Center Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="h-4 w-48 bg-white/10 rounded mb-10"></div>
            <div className="h-12 w-3/4 bg-white/10 rounded-md mb-4"></div>
            <div className="h-4 w-32 bg-white/5 rounded mb-12"></div>
            
            <div className="space-y-4">
              <div className="h-4 w-full bg-white/5 rounded"></div>
              <div className="h-4 w-full bg-white/5 rounded"></div>
              <div className="h-4 w-[90%] bg-white/5 rounded"></div>
              <div className="h-4 w-[40%] bg-white/5 rounded"></div>
            </div>

            <div className="pt-10 space-y-4">
              <div className="h-8 w-1/2 bg-white/10 rounded"></div>
              <div className="h-4 w-full bg-white/5 rounded"></div>
              <div className="h-32 w-full bg-white/5 rounded-xl"></div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block lg:col-span-2 space-y-4">
            <div className="h-5 w-32 bg-white/10 rounded mb-6"></div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 w-full bg-white/5 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContentSkeleton = () => (
  <div className="animate-pulse space-y-8">
    <div className="h-10 w-3/4 bg-white/10 rounded-md mb-6" />
    <div className="space-y-3">
      <div className="h-4 w-full bg-white/5 rounded" />
      <div className="h-4 w-full bg-white/5 rounded" />
      <div className="h-4 w-2/3 bg-white/5 rounded" />
    </div>
    <div className="my-8 border-t border-[#FFFFFF1F] w-full max-w-[600px]" />
    <div className="space-y-4">
      <div className="h-6 w-1/2 bg-white/10 rounded" />
      <div className="h-32 w-full bg-white/5 rounded-xl" />
    </div>
  </div>
);

export default SkeletonDetail;