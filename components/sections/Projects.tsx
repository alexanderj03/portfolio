'use client';

import { useTheme } from '@/context/ThemeContext';

const projects = [
  {
    title: 'TO-DO List Website',
    desc: 'A full-stack task management app with Firebase authentication, real-time data syncing, and secure payment integration for premium features',
    tech: ['React', 'Firebase', 'Tailwind', 'Javascript'],
    icon: '🛒',
  },
  {
    title: 'Personal Website',
    desc: 'An intelligent expense tracking application powered by OpenAI that categorizes spending, generates insights, and helps users manage their finances',
    tech: ['React', 'TypeScript', 'Tailwind', 'HTML'],
    icon: '✓',
  },
  {
    title: 'Budget Tracker',
    desc: 'AI-powered portfolio website generator for developers',
    tech: ['TypeScript', 'OpenAI', 'Node.js'],
    icon: '🎨',
  },
  {
    title: 'AirBRB Website',
    desc: 'An Airbnb clone featuring property listings, advanced search and filters, booking management, guest reviews, and host analytics dashboard',
    tech: ['JavaScript', 'CSS', 'HTML', 'React', 'Webdesign', 'HTTP'],
    icon: '📊',
  },
];

export default function Projects() {
  const { isDarkMode } = useTheme();

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-slate-800 to-slate-900'
                  : 'bg-white shadow-lg'
              }`}
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center text-4xl">
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}