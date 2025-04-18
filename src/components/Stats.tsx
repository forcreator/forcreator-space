import React from 'react';
import Newsletter from './Newsletter';

export default function Stats() {
  return (
    <section className="py-24 bg-texture relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brown-200/80 via-sand-200/70 to-brown-100/60 dark:from-gray-900/90 dark:to-gray-800/90" />
      
      <div className="container relative z-10">
        <div className="max-w-xl mx-auto mb-16">
          <Newsletter />
        </div>

        <div className="flex items-center justify-center gap-8 text-[#744631]/80 dark:text-gray-400">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-serif font-medium tracking-tight bg-gradient-to-r from-[#42291c] via-[#5c3828] to-[#744631] dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <div className="text-base font-light tracking-wide">Creative Tools</div>
          </div>
          <div className="h-8 w-px bg-[#8b5e3c]/10 dark:bg-gray-700" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-serif font-medium tracking-tight bg-gradient-to-r from-[#42291c] via-[#5c3828] to-[#744631] dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
              3
            </div>
            <div className="text-base font-light tracking-wide">Creator Spaces</div>
          </div>
          <div className="h-8 w-px bg-[#8b5e3c]/10 dark:bg-gray-700" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-serif font-medium tracking-tight bg-gradient-to-r from-[#42291c] via-[#5c3828] to-[#744631] dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-base font-light tracking-wide">Availability</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-300/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-300/10 dark:bg-violet-500/5 rounded-full blur-3xl" />
    </section>
  );
} 