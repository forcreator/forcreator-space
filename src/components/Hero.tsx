import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-texture overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e6d5bc]/90 via-[#ede0cf]/80 to-[#f3e8d5]/70 dark:from-gray-900/90 dark:to-gray-800/90" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#42291c]/90 dark:text-white mb-6 tracking-tight leading-tight">
            Create.
            <span className="bg-gradient-to-r from-[#8b5e3c] to-[#a67b4f] dark:from-brown-200 dark:to-brown-400 bg-clip-text text-transparent">
              {" "}Innovate.{" "}
            </span>
            Share.
          </h1>
          
          <p className="text-lg md:text-xl font-light text-[#744631]/80 dark:text-gray-300 mb-12 leading-relaxed tracking-wide">
            Your all-in-one creative toolkit for the modern content creator
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tools"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#8b5e3c] to-[#a67b4f] 
              text-[#f3e8d5] font-light text-base tracking-wide hover:shadow-lg hover:shadow-[#8b5e3c]/20 
              transition-all duration-300 hover:-translate-y-1"
            >
              Explore Tools
            </a>
            <a
              href="#spaces"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#f3e8d5] to-[#ede0cf] dark:from-gray-800 dark:to-gray-700
              text-[#42291c]/90 dark:text-white font-light text-base tracking-wide border border-[#8b5e3c]/20 dark:border-gray-700/20
              hover:shadow-lg hover:shadow-[#8b5e3c]/10 dark:hover:shadow-black/20
              transition-all duration-300 hover:-translate-y-1"
            >
              View Spaces
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#f3e8d5] dark:to-gray-900" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#8b5e3c]/10 dark:bg-brown-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a67b4f]/10 dark:bg-brown-600/10 rounded-full blur-3xl" />
    </section>
  );
}