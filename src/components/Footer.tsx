import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">ForCreator.Space</h3>
            <p className="mt-2">Empowering creators worldwide !</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/forcreator" className="hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:forcreatorspace@gmail.com" className="hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} forcreator.space. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}