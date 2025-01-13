
import { Target, Workflow, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Simplifying workflows for creators using free tools and curated spaces, enabling you to focus on what matters most - creating amazing content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: Target,
              title: "Focused Spaces",
              description: "Dedicated environments tailored to different creator types"
            },
            {
              icon: Workflow,
              title: "Streamlined Workflows",
              description: "Optimized processes to enhance your productivity"
            },
            {
              icon: Users,
              title: "Creator Community",
              description: "Connect with like-minded creators and share experiences"
            }
          ].map((item, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <item.icon className="w-8 h-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold flex items-center justify-center text-gray-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}