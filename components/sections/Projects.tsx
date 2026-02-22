'use client';

import { useTheme } from '@/context/ThemeContext';

const projects = [
  {
    title: 'Full-Stack Budget Tracker',
    desc: 'A full-stack budget tracking web application enabling users to manage income, expenses, and financial goals, with AI-powered insights that analyse spending patterns and generate personalised budgeting recommendations.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'OpenAI API'],
    icon: '💰',
  },
  {
    title: 'Personal Website',
    desc: 'Developed and deployed a full-stack personal portfolio website using Next.js and React, with responsive UI components and interactive features including custom navigation and dynamic content.',
    tech: ['React', 'TypeScript', 'Tailwind', 'HTML'],
    icon: '✓',
  },
  {
    title: 'Stronger Brains App',
    desc: 'Collaborated in a team using agile practices to design and develop a mobile/web application for Stronger Brains, focused on improving user engagement and accessibility, with a React front-end and custom database backend.',
    tech: ['JavaScript', 'React', 'SQL', 'BrainHQ API'],
    icon: '🧠',
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