'use client';

import { useTheme } from '@/context/ThemeContext';

const workExperience = [
  {
    company: 'Optus',
    period: 'April 2024 - Present',
    role: 'Sales Associate',
    bullets: [
      'Consistently achieved and exceeded monthly sales and service KPIs through consultative selling and tailored technology solutions.',
      'Delivered high customer satisfaction by resolving complex billing, device, and plan-related issues in a fast-paced retail environment.',
      'Recognised as a reliable team contributor trusted to manage escalated customer concerns and difficult service cases.',
      'Collaborated with team members to meet store revenue targets and maintain strong sales performance.',
      'Strengthened problem-solving and communication skills by translating technical product features into clear customer solutions.',
    ],
    side: 'left',
  },
  {
    company: 'Elevate Tuition',
    period: 'Jan 2022 - Dec 2024',
    role: 'Team Leader',
    bullets: [
      'Led and mentored a team of tutors, ensuring consistent academic improvement and positive learning outcomes for students.',
      'Coordinated tutor schedules and program operations to ensure efficient class delivery across multiple subjects.',
      'Developed tailored learning strategies to improve student engagement, academic performance, and parent satisfaction.',
      'Acted as the primary point of contact for resolving academic and operational challenges.',
      'Strengthened leadership, organisation, and decision-making skills while managing team responsibilities.',
    ],
    side: 'right',
  },
  {
    company: 'Woolworths Group',
    period: 'Feb 2022 - Aug 2023',
    role: 'Team Member',
    bullets: [
      'Worked in a fast-paced retail environment delivering consistent customer service during high-volume trading periods.',
      'Assisted customers with product inquiries and purchases, helping maintain a positive shopping experience.',
      'Collaborated closely with team members to ensure shelves were stocked, organised, and store standards were maintained.',
    ],
    side: 'left',
  },
  {
    company: 'Australian Electoral Commission',
    period: 'Jan 2022 - Dec 2023',
    role: 'Team Member',
    bullets: [
      'Organised voting information to ensure smooth vote counting operations',
      'Collaborated within a large team requiring strong communication and coordination',
    ],
    side: 'right',
  },
];

const education = [
  {
    institution: 'UNSW',
    period: '2022 - Present',
    degree: 'Bachelor of Computer Science',
    bullets: [
      'Developed a strong foundation in software development, data structures, and algorithms.',
      'Applied problem-solving and analytical thinking to design efficient technical solutions.',
      'Worked on collaborative programming projects using modern development tools and workflows.',
      'Gained experience in multiple programming languages including Java, Python, and JavaScript.',
      'Built full-stack applications using technologies such as React, SQL, and Next.js.',
    ],
    side: 'left',
  },
  {
    institution: 'Canley Vale High School',
    period: '2016 - 2021',
    degree: 'Higher School Certificate (HSC)',
    bullets: [
      'Successfully completed the Higher School Certificate',
    ],
    side: 'right',
  },
];

export default function Experience() {
  const { isDarkMode } = useTheme();

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center">Resume</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
        </div>
        <p className={`text-center mb-16 text-sm tracking-widest uppercase font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Here are my work experiences and education.
        </p>

        {/* Work Experience */}
        <div className="mb-20">
          <h3 className={`text-2xl md:text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-cyan-200 to-pink-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.9)]' : 'from-cyan-800 to-pink-900'}`}>
            Work Experience
          </h3>
          <Timeline items={workExperience} icon="💼" isDarkMode={isDarkMode} type="work" />
        </div>

        {/* Education */}
        <div>
          <h3 className={`text-2xl md:text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-cyan-200 to-pink-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.9)]' : 'from-cyan-800 to-pink-900'}`}>
            Education
          </h3>
          <Timeline items={education} icon="🎓" isDarkMode={isDarkMode} type="education" />
        </div>
      </div>
    </section>
  );
}

// timeline sub-component

type WorkItem = {
  company: string;
  period: string;
  role: string;
  bullets: string[];
  side: string;
};

type EducationItem = {
  institution: string;
  period: string;
  degree: string;
  bullets: string[];
  side: string;
};

type TimelineProps = {
  items: (WorkItem | EducationItem)[];
  icon: string;
  isDarkMode: boolean;
  type: 'work' | 'education';
};

function BulletList({ bullets, isDarkMode }: { bullets: string[]; isDarkMode: boolean }) {
  return (
    <ul className="space-y-1">
      {bullets.map((point, i) => (
        <li key={i} className={`flex items-start gap-2 text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
          {point}
        </li>
      ))}
    </ul>
  );
}

function Timeline({ items, icon, isDarkMode, type }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className={`absolute left-5 md:left-1/2 md:-translate-x-1/2 w-1 h-full ${
          isDarkMode ? 'bg-slate-700' : 'bg-gray-300'
        }`}
      />

      <div className="space-y-10 md:space-y-12">
        {items.map((item, idx) => {
          const isLeft = item.side === 'left';
          const title =
            type === 'work'
              ? (item as WorkItem).company
              : (item as EducationItem).institution;
          const subtitle =
            type === 'work'
              ? (item as WorkItem).role
              : (item as EducationItem).degree;

          return (
            <div key={idx}>
              {/* MOBILE layout */}
              <div className="flex md:hidden items-start gap-4">
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <span className="text-lg">{icon}</span>
                </div>
                <div className={`flex-1 p-5 rounded-2xl shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-white'}`}>
                  <h4 className="text-xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {title}
                  </h4>
                  <p className={`text-xs mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.period}</p>
                  {subtitle && <p className="text-base font-semibold mb-3">{subtitle}</p>}
                  <BulletList bullets={item.bullets} isDarkMode={isDarkMode} />
                </div>
              </div>

              {/* DESKTOP layout */}
              <div className={`hidden md:flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-white'}`}>
                    <h4 className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {title}
                    </h4>
                    <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.period}</p>
                    {subtitle && <p className="text-lg font-semibold mb-3">{subtitle}</p>}
                    <div className={isLeft ? 'text-left' : 'text-left'}>
                      <BulletList bullets={item.bullets} isDarkMode={isDarkMode} />
                    </div>
                  </div>
                </div>

                <div className="w-2/12 flex justify-center">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <span className="text-xl">{icon}</span>
                  </div>
                </div>

                <div className="w-5/12" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}