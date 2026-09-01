import React from 'react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'MIS Executive',
      company: 'Go Delivery Pvt Ltd',
      period: 'Dec 2025 - Present',
      desc: 'Managed and maintained large dataset. Monitored and maintained transactional datasets to ensure accurate reporting and analysis.',
      iconUrl: 'https://img.icons8.com/color/48/briefcase.png',
    },
    {
      role: 'Data Analyst',
      company: 'Unisoft Healthcare Pvt Ltd',
      period: 'Aug 2025 - Dec 2025',
      desc: 'Developed interactive dashboards, bridging the gap between raw data and user-friendly visual interfaces.',
      iconUrl: 'https://img.icons8.com/color/48/analytics.png',
    },
    {
      role: 'Data Analyst',
      company: 'Amaze Consulting Services',
      period: 'Sep 2024 - July 2025',
      desc: 'Built interactive data visualizations and wrote extensive technical documentation detailing system logic.',
      iconUrl: 'https://img.icons8.com/color/48/combo-chart.png',
    },
  ];

  return (
    <div id="experience" className="paper-card h-full flex flex-col justify-between relative">
      <div>
        <h3 className="font-handwriting font-bold text-3xl text-[#2d2424] mt-0.5 mb-6 flex items-center gap-2">
          <span>💼</span> Work Experience
        </h3>

        {/* 1 Experience Card Per Row Stack */}
        <div className="flex flex-col gap-4 sm:gap-5 relative">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl border border-[#eadecf] bg-[#fffdf9] hover:bg-white hover:border-[#e06d53]/40 transition-all duration-200 group flex flex-col justify-between relative shadow-xs"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-base sm:text-xl text-[#2d2424] group-hover:text-[#e06d53] transition-colors leading-snug">
                    {exp.role}
                  </h4>
                  <span className="text-xs font-semibold text-[#e06d53] bg-[#fbebe8] px-3 py-1 rounded-full shrink-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-[#6e5e5e] mb-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e06d53]"></span>
                  {exp.company}
                </p>

                <p className="text-xs sm:text-sm text-[#5c4e4e] leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
