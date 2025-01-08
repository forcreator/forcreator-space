import { Pencil, Timer, Calculator } from 'lucide-react';

export default function Tools() {
  const tools = [
    {
      icon: Pencil,
      name: "Notepad",
      description: "Simple and clean online notepad for quick notes",
      link: "https://notepad.forcreator.space"
    },
    {
      icon: Timer,
      name: "Timer",
      description: "Easy to use countdown timer and stopwatch",
      link: "https://timer.forcreator.space"
    },
    {
      icon: Calculator,
      name: "Unit Converter",
      description: "Convert between different units of measurement",
      link: "https://unitconverter.forcreator.space"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 sm:mb-16">
          Free Tools for Creators
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900 
              transition-all transform hover:-translate-y-2 flex flex-col items-center text-center
              shadow-lg hover:shadow-xl dark:shadow-none"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-purple-100 dark:bg-purple-800 
              flex items-center justify-center group-hover:bg-purple-200 
              dark:group-hover:bg-purple-700 transition-colors">
                <tool.icon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {tool.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {tool.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <a 
            href="tools.forcreator.space" 
            className="inline-flex items-center text-purple-600 dark:text-purple-400 
            hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-sm sm:text-base"
          >
            Explore more tools
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}