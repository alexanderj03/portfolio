'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  const { isDarkMode } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {isMounted && [...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-purple-500'}`}
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

      <div
        className="text-center z-10 px-6"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: 1 - scrollY / 500,
        }}
      >
        <h2 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Alexander 
          </span>
        </h2>
        <p className={`text-xl md:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Computer Science Graduate | Software Developer | Problem Solver
        </p>
        <button
          onClick={() => scrollToSection('projects')}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
        >
          View My Work
        </button>
      </div>
    </section>
  );
}