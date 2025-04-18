import React from 'react';
import { Target, Workflow, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Focused Creation",
      description: "Specialized environments for every creative need",
      gradient: "from-cyan-100/40 via-teal-100/40 to-emerald-100/40",
      iconGradient: "from-cyan-400 to-teal-500",
      darkGradient: "from-cyan-900/40 via-teal-900/40 to-emerald-900/40",
      darkIconGradient: "from-cyan-600 to-teal-700",
      iconColor: "text-white",
      hoverEffect: "hover:shadow-cyan-200/20"
    },
    {
      icon: Workflow,
      title: "Smart Workflows",
      description: "AI-powered tools to enhance productivity",
      gradient: "from-violet-100/40 via-purple-100/40 to-indigo-100/40",
      iconGradient: "from-violet-400 to-purple-500",
      darkGradient: "from-violet-900/40 via-purple-900/40 to-indigo-900/40",
      darkIconGradient: "from-violet-600 to-purple-700",
      iconColor: "text-white",
      hoverEffect: "hover:shadow-violet-200/20"
    },
    {
      icon: Users,
      title: "Creator Community",
      description: "Connect and grow with fellow creators",
      gradient: "from-amber-100/40 via-orange-100/40 to-rose-100/40",
      iconGradient: "from-amber-400 to-orange-500",
      darkGradient: "from-amber-900/40 via-orange-900/40 to-rose-900/40",
      darkIconGradient: "from-amber-600 to-orange-700",
      iconColor: "text-white",
      hoverEffect: "hover:shadow-amber-200/20"
    }
  ];

  return (
    <section id="about" className="py-24 bg-texture relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e6d5bc]/90 via-[#ede0cf]/80 to-[#f3e8d5]/70 dark:from-gray-900/90 dark:to-gray-800/90" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight bg-gradient-to-r from-[#42291c] via-[#5c3828] to-[#744631] dark:from-white dark:via-gray-100 dark:to-gray-200 bg-clip-text text-transparent mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl font-light text-[#42291c]/80 dark:text-gray-300 leading-relaxed tracking-wide">
            Empowering creators with intelligent tools and focused spaces.
            <span className="block mt-3 text-base text-[#744631]/90 dark:text-gray-400 tracking-wide">
              Create more, worry less.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl bg-gradient-to-br from-[#f3e8d5]/60 via-[#ede0cf]/50 to-[#e6d5bc]/40
              dark:${feature.darkGradient} backdrop-blur-sm
              border border-[#8b5e3c]/20 dark:border-gray-700/20
              p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#8b5e3c]/20 
              dark:hover:shadow-black/10 hover:-translate-y-1 hover:scale-[1.02]`}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br 
              from-[#8b5e3c] to-[#a67b4f]
              flex items-center justify-center transform group-hover:scale-110 
              group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-[#f3e8d5]" />
              </div>
              
              <h3 className="text-xl font-serif font-medium tracking-tight text-[#42291c]/90 dark:text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-base font-light leading-relaxed text-[#744631]/80 dark:text-gray-400 tracking-wide">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#8b5e3c]/10 dark:bg-[#8b5e3c]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#a67b4f]/10 dark:bg-[#a67b4f]/5 rounded-full blur-3xl" />
    </section>
  );
}