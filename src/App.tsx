import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Spaces from './components/Spaces';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <Hero />
      <Spaces />
      <Tools />
      <About />
      <Footer />
    </div>
  );
}

export default App;