import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 
        dark:from-purple-900/70 dark:via-blue-900/70 dark:to-purple-900/70 z-10" />
      <div className="absolute inset-0 bg-white/20 dark:bg-transparent z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] 
        opacity-20 dark:opacity-10 bg-cover bg-center" />
      <div className="container relative z-20 mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-8 animate-fade-in">
          Empowering Creators with Tools to
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 
            text-transparent bg-clip-text">
            {" "}Build, Research, and Innovate!
          </span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Unlock your creative potential with our suite of powerful tools and dedicated spaces designed for every type of creator.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://tools.forcreator.space"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white/90 dark:bg-white 
              text-purple-900 font-semibold hover:bg-opacity-100 transition-all transform hover:scale-105 
              shadow-lg hover:shadow-xl"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Explore Free Tools
          </a>
          <button
            onClick={() => document.getElementById('spaces')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 rounded-full bg-purple-600 text-white 
              font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 
              shadow-lg hover:shadow-xl"
          >
            Discover Creator Spaces
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}