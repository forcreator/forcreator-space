import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Spaces from './components/Spaces';
import Stats from './components/Stats';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f3e8d5] text-[#42291c] dark:bg-gray-900 dark:text-white transition-all duration-300">
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>
        <main className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d4b595]/40 via-[#e6d0b5]/30 to-transparent dark:from-gray-800/50 dark:via-gray-900/25 dark:to-transparent -z-10" />
          <Hero />
          <Spaces />
          <Tools />
          <About />
          <Stats />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;