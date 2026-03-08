'use client';

import { useTheme } from '@/context/ThemeContext';

const workExperience = [
  {
    company: 'Optus',
    period: 'April 2024 - Present',
    role: 'Sale Associate',
    description:
      'As an Optus Sales Associate, I am responsible for promoting and selling Optus products and services. I am able to create a relationship with the customer by providing tailored solutions and delivering excellent customer service. As a result, I have developed strong communication and teamwork skills, allowing me to effectively collaborate with colleagues to engage with customers in a professional manner.',
    side: 'left',
  },
  {
    company: 'Elevate Tuition',
    period: 'Jan 2022 - Dec 2024',
    role: 'Team Leader',
    description:
      'Team leader at Elevate Tuition where my role is to delegate tasks such as class timetables and programs. As a result I have developed critical thinking skills based on company goals.',
    side: 'right',
  },
  {
    company: 'Woolworths Group',
    period: 'Feb 2022 - Aug 2023',
    role: 'Team Leader',
    description:
      'This role allowed me to develop strong adaptability skills by working efficiently in a fast-paced and changing environment. As a result I have developed strong customer service and communication skills by working in a large team and learning different store operations.',
    side: 'left',
  },
  {
    company: 'Australian Electoral Commission',
    period: 'Jan 2022 - Dec 2023',
    role: 'Team Member',
    description:
      'Worked part of a large team by organising voting information allowing for counting votes to go smoothly. In addition this role has allowed me to develop strong communication and team working skills in order to work together efficiently.',
    side: 'right',
  },
];

const education = [
  {
    institution: 'UNSW',
    period: '2022 - Present',
    degree: 'Bachelor of Computer Science',
    description:
      'Graduated with a Bachelor of Computer Science, developing a strong foundation in software development, algorithms, and system design. I have a keen interest in problem-solving and building practical, efficient solutions that create real value.',
    side: 'left',
  },
  {
    institution: 'Higher School Certificate',
    period: '2016 - 2021',
    degree: '',
    description: 'Successfully completed the Higher School Certificate (HSC) at Canley Vale High School.',
    side: 'right',
  },
];

export default function Experience() {
  const { isDarkMode } = useTheme();

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Resume</h2>
        <p className={`text-center mb-16 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Here are my work experiences and education.
        </p>

        {/* Work Experience */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Work Experience
          </h3>
          <Timeline items={workExperience} icon="💼" isDarkMode={isDarkMode} type="work" />
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
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
  description: string;
  side: string;
};

type EducationItem = {
  institution: string;
  period: string;
  degree: string;
  description: string;
  side: string;
};

type TimelineProps = {
  items: (WorkItem | EducationItem)[];
  icon: string;
  isDarkMode: boolean;
  type: 'work' | 'education';
};

function Timeline({ items, icon, isDarkMode, type }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line — on mobile sits left-aligned, on desktop centered */}
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
              {/* ── MOBILE layout: icon left, card right ── */}
              <div className="flex md:hidden items-start gap-4">
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <span className="text-lg">{icon}</span>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 p-5 rounded-2xl shadow-lg ${
                    isDarkMode
                      ? 'bg-gradient-to-br from-slate-800 to-slate-900'
                      : 'bg-white'
                  }`}
                >
                  <h4 className="text-xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {title}
                  </h4>
                  <p className={`text-xs mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {item.period}
                  </p>
                  {subtitle && (
                    <p className="text-base font-semibold mb-2">{subtitle}</p>
                  )}
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* ── DESKTOP layout: alternating left/right ── */}
              <div className={`hidden md:flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Card */}
                <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div
                    className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? 'bg-gradient-to-br from-slate-800 to-slate-900'
                        : 'bg-white'
                    }`}
                  >
                    <h4 className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {title}
                    </h4>
                    <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {item.period}
                    </p>
                    {subtitle && (
                      <p className="text-lg font-semibold mb-3">{subtitle}</p>
                    )}
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <span className="text-xl">{icon}</span>
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-5/12" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}