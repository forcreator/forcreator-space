import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#e6d5bc]/80 dark:bg-gray-900 border-t border-[#8b5e3c]/20 dark:border-gray-800">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium tracking-tight text-[#42291c]/90 dark:text-white">
              ForCreator.Space
            </h3>
            <p className="text-base font-light leading-relaxed text-[#744631]/80 dark:text-gray-400 tracking-wide">
              Empowering creators with innovative tools and dedicated spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-serif font-medium tracking-tight text-[#42291c]/90 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#tools" className="text-base font-light text-[#744631]/80 dark:text-gray-400 hover:text-[#42291c] dark:hover:text-white transition-colors tracking-wide">
                  Tools
                </a>
              </li>
              <li>
                <a href="#spaces" className="text-base font-light text-[#744631]/80 dark:text-gray-400 hover:text-[#42291c] dark:hover:text-white transition-colors tracking-wide">
                  Spaces
                </a>
              </li>
              <li>
                <a href="#about" className="text-base font-light text-[#744631]/80 dark:text-gray-400 hover:text-[#42291c] dark:hover:text-white transition-colors tracking-wide">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-base font-serif font-medium tracking-tight text-[#42291c]/90 dark:text-white">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:forcreatorspace@gmail.com" className="text-base font-light text-[#744631]/80 dark:text-gray-400 hover:text-[#42291c] dark:hover:text-white transition-colors tracking-wide inline-flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  forcreatorspace@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-base font-serif font-medium tracking-tight text-[#42291c]/90 dark:text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/forcreator"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#f3e8d5]/80 dark:bg-gray-800 flex items-center justify-center
                text-[#744631]/80 dark:text-gray-400 hover:bg-[#ede0cf]/80 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/forcreator"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#f3e8d5]/80 dark:bg-gray-800 flex items-center justify-center
                text-[#744631]/80 dark:text-gray-400 hover:bg-[#ede0cf]/80 dark:hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#8b5e3c]/10 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base font-light text-[#744631]/80 dark:text-gray-400 tracking-wide">
              © {new Date().getFullYear()} ForCreator.Space. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="/privacy" className="text-base font-light text-[#744631]/80 dark:text-gray-400 hover:text-[#42291c] dark:hover:text-white transition-colors tracking-wide">
                Privacy Policy
              </a>
              <a href="/terms" className="text-base font-light text-[#744631]/80 dark:text-gray-400 hover:text-[#42291c] dark:hover:text-white transition-colors tracking-wide">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}