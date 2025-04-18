import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-2 rounded-full 
        ${isDarkMode 
          ? 'bg-gray-800 text-blue-400 hover:bg-gray-700 hover:text-blue-300' 
          : 'bg-brown-100 text-brown-700 hover:bg-brown-200 hover:text-brown-800'
        } 
        transition-all duration-200 shadow-lg`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}