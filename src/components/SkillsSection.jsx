import React, { useState } from 'react';
import { Code, Sparkles } from './Icons';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillsData = [
    {
      id: 1,
      name: 'HTML5',
      category: 'Frontend',
      desc: 'Building structured web experiences.',
      color: '#e06d53',
      bgColor: '#fbebe8',
      iconUrl: 'https://img.icons8.com/color/96/html-5--v1.png'
    },
    {
      id: 2,
      name: 'CSS3',
      category: 'Frontend',
      desc: 'Styling beautiful user interfaces.',
      color: '#4285f4',
      bgColor: '#eaf2ff',
      iconUrl: 'https://img.icons8.com/color/96/css3.png'
    },
    {
      id: 3,
      name: 'JavaScript',
      category: 'Frontend',
      desc: 'Adding interactivity & logic.',
      color: '#e69a48',
      bgColor: '#fdf4e7',
      iconUrl: 'https://img.icons8.com/color/96/javascript--v1.png'
    },
    {
      id: 4,
      name: 'TypeScript',
      category: 'Frontend',
      desc: 'Type-safe JavaScript for scalable web apps.',
      color: '#3178c6',
      bgColor: '#e8f2ff',
      iconUrl: 'https://img.icons8.com/color/96/typescript.png'
    },
    {
      id: 5,
      name: 'React',
      category: 'Frontend',
      desc: 'Building reusable UI components.',
      color: '#00b4d8',
      bgColor: '#e6f8fc',
      iconUrl: 'https://img.icons8.com/color/96/react-native.png'
    },
    {
      id: 6,
      name: 'Next.js',
      category: 'Frontend',
      desc: 'Server-side rendering & full-stack React.',
      color: '#2d2424',
      bgColor: '#f4f4f5',
      iconUrl: 'https://img.icons8.com/color/96/nextjs.png'
    },
    {
      id: 7,
      name: 'Django',
      category: 'Backend',
      desc: 'Powerful backend with Django.',
      color: '#2d6a4f',
      bgColor: '#e8f5e9',
      iconUrl: 'https://img.icons8.com/color/96/django.png'
    },
    {
      id: 8,
      name: 'Node.js',
      category: 'Backend',
      desc: 'Scalable server-side JavaScript.',
      color: '#52b788',
      bgColor: '#e9f7ef',
      iconUrl: 'https://img.icons8.com/color/96/nodejs.png'
    },
    {
      id: 9,
      name: 'Express.js',
      category: 'Backend',
      desc: 'Fast, minimal web framework for Node.',
      color: '#353535',
      bgColor: '#f0f0f2',
      iconUrl: 'https://img.icons8.com/color/96/express-js.png'
    },
    {
      id: 10,
      name: 'SQL',
      category: 'Backend',
      desc: 'Relational data & database design.',
      color: '#4a4e69',
      bgColor: '#f0f0f5',
      iconUrl: 'https://img.icons8.com/color/96/sql.png'
    },
    {
      id: 11,
      name: 'System Design',
      category: 'Backend',
      desc: 'Architecting scalable & resilient web systems.',
      color: '#6366f1',
      bgColor: '#eef2ff',
      iconUrl: 'https://img.icons8.com/color/96/flow-chart.png'
    },
    {
      id: 12,
      name: 'Git & GitHub',
      category: 'Tools',
      desc: 'Version control & team collaboration.',
      color: '#f3722c',
      bgColor: '#fdeee6',
      iconUrl: 'https://img.icons8.com/color/96/git.png'
    },
    {
      id: 13,
      name: 'CI/CD',
      category: 'Tools',
      desc: 'Automated build, test & deployment pipelines.',
      color: '#059669',
      bgColor: '#ecfdf5',
      iconUrl: 'https://img.icons8.com/color/96/continuous-integration.png'
    },
    {
      id: 14,
      name: 'AI Integration',
      category: 'Tools',
      desc: 'Integrating LLMs, APIs & AI features.',
      color: '#8b5cf6',
      bgColor: '#f5f3ff',
      iconUrl: 'https://img.icons8.com/color/96/artificial-intelligence.png'
    },
    {
      id: 15,
      name: 'AWS/Azure',
      category: 'Tools',
      desc: 'Cloud infrastructure & serverless deployment.',
      color: '#ff9900',
      bgColor: '#fff4e5',
      iconUrl: 'https://img.icons8.com/color/96/amazon-web-services.png'
    }
  ];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-4 md:py-6 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5">
          <div>
            <h2 className="font-handwriting font-bold text-4xl sm:text-5xl text-[#2d2424] mt-1">
              Skills
            </h2>

          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 mt-3 md:mt-0 overflow-x-auto whitespace-nowrap pb-2 max-w-full">
            {['All', 'Frontend', 'Backend', 'Tools'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shrink-0 transition-all ${activeCategory === cat
                  ? 'bg-[#e06d53] text-white shadow-md'
                  : 'bg-[#fffdf9] text-[#6e5e5e] border border-[#eadecf] hover:border-[#e06d53]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Decorative Background Label */}
        <div className="relative">
          <div className="absolute -top-16 right-4 text-6xl sm:text-8xl md:text-9xl font-display font-black text-[#e69a48]/10 pointer-events-none select-none tracking-widest overflow-hidden">
            SKILLS ✦
          </div>

          {/* Cards Grid: Exactly 2 cards per row on mobile (grid-cols-2), 4 on desktop (grid-cols-4) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 relative z-10">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="skills-static-card group p-3 sm:p-4"
              >
                <div className="flex items-start gap-2.5 sm:gap-3.5">
                  <div
                    className="p-2 sm:p-2.5 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white/90 transition-all duration-300"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <img src={skill.iconUrl} alt={skill.name} className="w-7 h-7 sm:w-9 sm:h-9 object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-sm sm:text-base text-[#2d2424] group-hover:text-white transition-colors duration-300 leading-snug">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#6e5e5e] group-hover:text-white/90 mt-1 leading-snug transition-colors duration-300 line-clamp-2">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
