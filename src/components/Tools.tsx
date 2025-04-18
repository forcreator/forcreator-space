import { 
  FileText, 
  Timer, 
  Calculator, 
  Ruler,
  Dice6,
  Image,
  Palette,
  Grid,
  Box,
  Eraser,
  FileSearch
} from 'lucide-react';

export default function Tools() {
  const tools = [
    {
      icon: Image,
      name: "Image Generator",
      description: "AI-powered image creation",
      url: "https://imgen.forcreator.space",
      gradient: "from-cyan-100/40 via-teal-100/40 to-emerald-100/40",
      iconGradient: "from-cyan-400 to-teal-500",
      darkGradient: "from-cyan-900/40 via-teal-900/40 to-emerald-900/40",
      darkIconGradient: "from-cyan-600 to-teal-700",
      iconColor: "text-white",
      hoverEffect: "hover:shadow-cyan-200/20"
    },
    {
      icon: FileSearch,
      name: "PDF Reader",
      description: "Smart PDF viewer & analyzer",
      url: "https://pdfreader.forcreator.space",
      gradient: "from-indigo-100/40 via-blue-100/40 to-sky-100/40",
      iconGradient: "from-indigo-400 to-blue-500",
      darkGradient: "from-indigo-900/40 via-blue-900/40 to-sky-900/40",
      darkIconGradient: "from-indigo-600 to-blue-700",
      iconColor: "text-white",
      hoverEffect: "hover:shadow-indigo-200/20"
    },
    {
      icon: Eraser,
      name: "BG Remover",
      description: "One-click background removal",
      url: "https://backgroundremover.forcreator.space",
      gradient: "from-amber-100/40 via-yellow-100/40 to-orange-100/40",
      iconGradient: "from-amber-400 to-yellow-500",
      darkGradient: "from-amber-900/40 via-yellow-900/40 to-orange-900/40",
      darkIconGradient: "from-amber-600 to-yellow-700",
      iconColor: "text-white",
      hoverEffect: "hover:shadow-amber-200/20"
    },
    {
      icon: Palette,
      name: "Painter",
      description: "Digital art made simple",
      url: "https://painter.forcreator.space",
      gradient: "from-rose-100/40 via-red-100/40 to-orange-100/40",
      iconGradient: "from-rose-400 to-red-500",
      darkGradient: "from-rose-900/40 via-red-900/40 to-orange-900/40",
      darkIconGradient: "from-rose-600 to-red-700",
      iconColor: "text-white",
      hoverEffect: "hover:shadow-rose-200/20"
    },
    {
      icon: Grid,
      name: "Pixel Art Studio",
      description: "Retro art & sprite creation",
      url: "https://pixelartstudio.forcreator.space",
      gradient: "from-lime-100/40 via-green-100/40 to-emerald-100/40",
      iconGradient: "from-lime-400 to-green-500",
      darkGradient: "from-lime-900/40 via-green-900/40 to-emerald-900/40",
      darkIconGradient: "from-lime-600 to-green-700",
      iconColor: "text-white",
      hoverEffect: "hover:shadow-lime-200/20"
    },
    {
      icon: Box,
      name: "FreeCAD",
      description: "3D design simplified",
      url: "https://freecad.forcreator.space",
      gradient: "from-blue-100/40 via-indigo-100/40 to-violet-100/40",
      iconGradient: "from-blue-400 to-indigo-500",
      darkGradient: "from-blue-900/40 via-indigo-900/40 to-violet-900/40",
      darkIconGradient: "from-blue-600 to-indigo-700",
      iconColor: "text-white",
      hoverEffect: "hover:shadow-blue-200/20"
    },
    {
      icon: Calculator,
      name: "Age Calculator",
      description: "Quick & precise age calculations",
      url: "https://agecalculator.forcreator.space",
      gradient: "from-sky-100/40 via-blue-100/40 to-indigo-100/40",
      iconGradient: "from-sky-400 to-blue-500",
      darkGradient: "from-sky-900/40 via-blue-900/40 to-indigo-900/40",
      darkIconGradient: "from-sky-600 to-blue-700",
      iconColor: "text-white",
      hoverEffect: "hover:shadow-sky-200/20"
    },
    {
      icon: Ruler,
      name: "Unit Converter",
      description: "Instant unit conversions",
      url: "https://unitconverter.forcreator.space",
      gradient: "from-amber-100/40 via-orange-100/40 to-red-100/40",
      iconGradient: "from-amber-400 to-orange-500",
      darkGradient: "from-amber-900/40 via-orange-900/40 to-red-900/40",
      darkIconGradient: "from-amber-600 to-orange-700",
      iconColor: "text-white",
      hoverEffect: "hover:shadow-amber-200/20"
    },
    {
      icon: Timer,
      name: "Timer",
      description: "Simple countdown & stopwatch",
      url: "https://timer.forcreator.space",
      gradient: "from-emerald-100/40 via-green-100/40 to-teal-100/40",
      iconGradient: "from-emerald-400 to-green-500",
      darkGradient: "from-emerald-900/40 via-green-900/40 to-teal-900/40",
      darkIconGradient: "from-emerald-600 to-green-700",
      iconColor: "text-white",
      hoverEffect: "hover:shadow-emerald-200/20"
    },
    {
      icon: FileText,
      name: "Notepad",
      description: "Clean, distraction-free notes",
      url: "https://notepad.forcreator.space",
      gradient: "from-violet-100/40 via-purple-100/40 to-indigo-100/40",
      iconGradient: "from-violet-400 to-purple-500",
      darkGradient: "from-violet-900/40 via-purple-900/40 to-indigo-900/40",
      darkIconGradient: "from-violet-600 to-purple-700",
      iconColor: "text-white",
      hoverEffect: "hover:shadow-violet-200/20"
    }
  ];

  return (
    <section id="tools" className="py-24 bg-texture">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Essential Creator Tools
          </h2>
          <p className="text-lg font-light text-gray-600 dark:text-gray-400">
            Powerful tools. Zero complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl bg-gradient-to-br ${tool.gradient} 
              dark:${tool.darkGradient} backdrop-blur-sm
              border border-white/20 dark:border-gray-700/20
              p-8 transition-all duration-300 hover:shadow-xl ${tool.hoverEffect} 
              dark:hover:shadow-black/10 hover:-translate-y-1 hover:scale-[1.02]`}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br 
              ${tool.iconGradient} dark:${tool.darkIconGradient}
              flex items-center justify-center transform group-hover:scale-110 
              group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <tool.icon className={`w-8 h-8 ${tool.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-serif font-medium text-[#42291c]/90 dark:text-white mb-3 tracking-tight text-center">
                {tool.name}
              </h3>
              
              <p className="text-base font-light text-[#42291c]/80 dark:text-gray-400 text-center tracking-wide">
                {tool.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://tools.forcreator.space" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r 
            from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-700/50 
            backdrop-blur-sm border border-white/20 dark:border-gray-700/20
            text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white 
            font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/10 
            dark:hover:shadow-black/10 hover:-translate-y-1"
          >
            View all tools
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}