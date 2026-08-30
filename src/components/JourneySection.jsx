import React from 'react';

export default function JourneySection() {
  const journeyData = [
    {
      year: '2021',
      title: 'Started Learning',
      desc: 'Began my coding journey with HTML, CSS & JavaScript.',
    },
    {
      year: '2022',
      title: 'Exploring Frameworks',
      desc: 'Dived into React and started building interactive web apps.',
    },
    {
      year: '2023',
      title: 'Backend Development',
      desc: 'Learned Django, SQL and built full stack projects.',
    },
    {
      year: '2024+',
      title: 'Building & Growing',
      desc: 'Working on real world projects and continuously leveling up.',
    },
  ];

  return (
    <div className="paper-card h-full flex flex-col justify-between">
      <div>
        <span className="section-badge">04 - MY JOURNEY</span>
        <h3 className="font-handwriting font-bold text-3xl text-[#2d2424] mt-1 mb-6">
          My Journey
        </h3>

        {/* Timeline Items */}
        <div className="space-y-5 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-[#eadecf]">
          {journeyData.map((item, index) => (
            <div key={index} className="flex gap-4 relative items-start group">
              {/* Year Pill Badge */}
              <div className="bg-[#fef4d8] text-[#b87614] border border-[#f5e2ad] font-bold text-xs px-2.5 py-1 rounded-full shrink-0 z-10 shadow-xs group-hover:bg-[#e06d53] group-hover:text-white group-hover:border-[#e06d53] transition-colors">
                {item.year}
              </div>

              {/* Step Content */}
              <div>
                <h4 className="font-bold text-sm text-[#2d2424] group-hover:text-[#e06d53] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#6e5e5e] mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
