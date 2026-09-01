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

        {/* Experience Timeline Cards: 1 Column on Mobile/Tablet (<1024px), 3 Columns on Desktop (>1024px) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 relative">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-[#eadecf] bg-[#fffdf9] hover:bg-white hover:border-[#e06d53]/40 transition-all duration-200 group flex flex-col justify-between relative shadow-xs"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h4 className="font-bold text-base text-[#2d2424] group-hover:text-[#e06d53] transition-colors leading-snug">
                    {exp.role}
                  </h4>
                  <span className="text-[11px] font-semibold text-[#e06d53] bg-[#fbebe8] px-2.5 py-0.5 rounded-full shrink-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs font-semibold text-[#6e5e5e] mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e06d53]"></span>
                  {exp.company}
                </p>

                <p className="text-xs text-[#6e5e5e] leading-relaxed">
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
