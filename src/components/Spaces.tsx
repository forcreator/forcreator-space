import React from 'react';
import { 
  BookOpen, 
  Youtube, 
  Palette
} from 'lucide-react';

export default function Spaces() {
  const spaces = [
    {
      icon: BookOpen,
      title: "Research Hub",
      description: "AI-powered research & insights",
      status: "Coming Soon",
      url: "https://researchhub.forcreator.space",
      gradient: "from-emerald-100/30 to-teal-200/30",
      iconGradient: "from-emerald-200 to-teal-300",
      darkGradient: "from-emerald-900/30 to-teal-800/30",
      darkIconGradient: "from-emerald-800 to-teal-700",
      statusGradient: "from-emerald-200/30 to-teal-200/30",
      darkStatusGradient: "from-emerald-900/30 to-teal-800/30",
      statusText: "text-emerald-700 dark:text-emerald-200",
      iconColor: "text-emerald-700 dark:text-emerald-300"
    },
    {
      icon: Youtube,
      title: "Shorts Lab",
      description: "Quick video creation & editing",
      status: "Beta",
      url: "https://shorts.forcreator.space",
      gradient: "from-rose-100/30 to-orange-200/30",
      iconGradient: "from-rose-200 to-orange-300",
      darkGradient: "from-rose-900/30 to-orange-800/30",
      darkIconGradient: "from-rose-800 to-orange-700",
      statusGradient: "from-rose-200/30 to-orange-200/30",
      darkStatusGradient: "from-rose-900/30 to-orange-800/30",
      statusText: "text-rose-700 dark:text-rose-200",
      iconColor: "text-rose-700 dark:text-rose-300"
    },
    {
      icon: Palette,
      title: "Design Studio",
      description: "AI-assisted visual creation",
      status: "Alpha",
      url: "https://design.forcreator.space",
      gradient: "from-violet-100/30 to-purple-200/30",
      iconGradient: "from-violet-200 to-purple-300",
      darkGradient: "from-violet-900/30 to-purple-800/30",
      darkIconGradient: "from-violet-800 to-purple-700",
      statusGradient: "from-violet-200/30 to-purple-200/30",
      darkStatusGradient: "from-violet-900/30 to-purple-800/30",
      statusText: "text-violet-700 dark:text-violet-200",
      iconColor: "text-violet-700 dark:text-violet-300"
    }
  ];

  return (
    <section id="spaces" className="py-24 bg-texture">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#42291c]/90 dark:text-white mb-4 tracking-tight">
            Dedicated Spaces
          </h2>
          <p className="text-lg font-light text-[#744631]/80 dark:text-gray-400 tracking-wide">
            Specialized environments for focused creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${space.gradient} dark:${space.darkGradient}
              backdrop-blur-sm border border-white/20 dark:border-gray-700/20
              p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#8b5e3c]/20 dark:hover:shadow-black/10
              hover:-translate-y-1 hover:scale-[1.02]`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${space.iconGradient} dark:${space.darkIconGradient}
              flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 
              transition-all duration-300 shadow-lg mb-6`}>
                <space.icon className={`w-8 h-8 ${space.iconColor}`} />
              </div>

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-serif font-medium text-[#42291c]/90 dark:text-white tracking-tight">
                  {space.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-light tracking-wide
                bg-gradient-to-r ${space.statusGradient} dark:${space.darkStatusGradient}
                ${space.statusText}`}>
                  {space.status}
                </span>
              </div>

              <p className="text-base font-light text-[#42291c]/90 dark:text-gray-400 mb-6 tracking-wide">
                {space.description}
              </p>

              <a
                href={space.url}
                className="inline-flex items-center text-base font-light text-[#42291c] dark:text-gray-400 
                hover:text-[#42291c]/80 dark:hover:text-white transition-colors tracking-wide"
              >
                Visit Space
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}