'use client';

import { useTheme } from '@/context/ThemeContext';

export default function About() {
  const { isDarkMode } = useTheme();

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">About Me</h2>
        <div className="grid md:grid-cols-[300px_1fr] gap-16 items-start">
          {/* Profile Card with Tags */}
          <div className="space-y-6">
            <div className="relative w-full mx-auto md:mx-0 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl"></div>
              <div className={`relative m-[2px] py-12 px-8 rounded-2xl ${isDarkMode ? 'bg-slate-900' : 'bg-white'} flex items-center justify-center min-h-[320px]`}>
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>

            {/* Quick Stats/Tags */}
            <div className="grid grid-cols-2 gap-3">
              <span className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap text-center ${isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                Problem Solver
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap text-center ${isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                Analytical Thinker
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap text-center ${isDarkMode ? 'bg-purple-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                Team Player
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap text-center ${isDarkMode ? 'bg-blue-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                Adaptable
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-gray-50'} p-6 rounded-xl border ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Background</h3>
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I am a Computer Science graduate with a strong analytical mindset and a passion for solving complex problems. 
                Throughout my studies, I developed a solid foundation in programming, systems thinking, and data analysis.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-gray-50'} p-6 rounded-xl border ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Approach</h3>
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I enjoy breaking down problems, identifying patterns, and developing practical solutions that create real value. 
                I bring attention to detail, adaptability, and a continuous learning mindset to everything I do.
                As I begin my professional career, I am eager to apply my technical knowledge, analytical skills, 
                and problem-solving abilities across a range of technology-driven roles where I can contribute meaningfully and continue to grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}