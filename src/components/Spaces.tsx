import { BookOpen, Youtube, DraftingCompass } from 'lucide-react';

export default function Spaces() {
  const spaces = [
    {
      icon: BookOpen,
      name: "Research Hub",
      description: "Academic research tools and collaboration space",
      link: "https://researchhub.forcreator.space",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Youtube,
      name: "YouTube Space (Coming Soon !)",
      description: "Everything you need for video content creation",
      link: "https://youtube.forcreator.space",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: DraftingCompass,
      name: "Designer Tools ( Coming Soon !)",
      description: "Design tools for Designers",
      link: "https://designer.forcreator.space",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="spaces" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Creator Spaces
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <a
              key={index}
              href={space.link}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${space.gradient} opacity-90 transition-opacity group-hover:opacity-100`} />
              <div className="relative p-8">
                <space.icon className="w-12 h-12 text-white mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{space.name}</h3>
                <p className="text-white text-opacity-90">{space.description}</p>
                <div className="mt-6 inline-flex items-center text-white">
                  Learn more
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}