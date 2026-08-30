import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Web Development',
      desc: 'Building modern and responsive websites.',
      iconUrl: 'https://img.icons8.com/color/96/monitor.png',
      bg: 'bg-[#fbebe8]',
    },
    {
      title: 'Frontend Development',
      desc: 'Creating beautiful and interactive interfaces.',
      iconUrl: 'https://img.icons8.com/color/96/source-code.png',
      bg: 'bg-[#fdf4e7]',
    },
    {
      title: 'Backend Development',
      desc: 'Building secure and scalable backends.',
      iconUrl: 'https://img.icons8.com/color/96/server.png',
      bg: 'bg-[#e8f5e9]',
    },
    {
      title: 'Responsive Design',
      desc: 'Making websites work perfectly everywhere.',
      iconUrl: 'https://img.icons8.com/color/96/smart-phone.png',
      bg: 'bg-[#eaf2ff]',
    },
  ];

  return (
    <div className="paper-card h-full flex flex-col justify-between">
      <div>
        <span className="section-badge">05 - WHAT I CAN DO</span>
        <h3 className="font-handwriting font-bold text-3xl text-[#2d2424] mt-1 mb-6">
          How I Can Help
        </h3>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-3.5 rounded-xl border border-[#eadecf] bg-[#fffdf9] hover:bg-white hover:border-[#e06d53]/40 transition-all duration-200 group"
            >
              <div className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center mb-2 group-hover:scale-105 transition-transform`}>
                <img src={item.iconUrl} alt={item.title} className="w-5 h-5 object-contain" />
              </div>
              <h4 className="font-bold text-sm text-[#2d2424] group-hover:text-[#e06d53] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-[#6e5e5e] mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
