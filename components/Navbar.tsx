'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

const NAV_ITEMS = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

function scrollToSection(sectionId: string) {
  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      let maxVisibility = 0;
      let current = 'home';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const visibleTop = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(0, rect.top));
          const visibility = visibleTop / viewportHeight;
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBg = scrollY > 50
    ? isDarkMode
      ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg'
      : 'bg-white/95 backdrop-blur-sm shadow-lg'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>

      {/* DESKTOP: single row */}
      <div className="hidden md:flex max-w-6xl mx-auto px-6 py-4 justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Alexander Jiw
        </h1>
        <div className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`hover:text-blue-400 transition-colors ${
                activeSection === item.toLowerCase()
                  ? 'text-blue-400'
                  : isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </div>

      {/* MOBILE: name + theme toggle on top, pill links below */}
      <div className="flex md:hidden flex-col px-4 pt-3 pb-2 gap-2">
        {/* Row 1: name + theme toggle */}
        <div className="flex w-full justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Alexander Jiw
          </h1>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Row 2: pill-style nav links */}
        <div className="flex items-center justify-center gap-1 flex-wrap">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm px-3 py-1 rounded-full transition-all duration-200 ${
                activeSection === item.toLowerCase()
                  ? isDarkMode
                    ? 'text-blue-400 bg-blue-400/20'
                    : 'text-blue-500 bg-blue-100'
                  : isDarkMode
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-white/10'
                  : 'text-gray-600 hover:text-blue-500 hover:bg-gray-100'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

    </nav>
  );
}