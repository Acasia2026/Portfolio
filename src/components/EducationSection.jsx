import React from 'react';

export default function EducationSection() {
  const educationList = [
    {
      degree: 'Bachelors in Computer Applications (BCA)',
      institution: 'IGNOU',
      period: '2022 - 2025',
      iconUrl: 'https://img.icons8.com/color/96/graduation-cap.png',
    },
    {
      degree: 'Senior Secondary School',
      institution: 'CBSE',
      period: '2019 - 2020',
      iconUrl: 'https://img.icons8.com/color/96/school.png',
    },
  ];

  const certificationsList = [
    {
      title: 'Google Data Analytics',
      provider: 'Google / Coursera',
      year: '2025',
      iconUrl: 'https://img.icons8.com/color/96/google-logo.png',
    },
    {
      title: 'Data Analytics Certificate',
      provider: 'Professional',
      year: '2024',
      iconUrl: 'https://img.icons8.com/color/96/analytics.png',
    },
    {
      title: 'Computec Web Development',
      provider: 'Computec Institute',
      year: '2023',
      iconUrl: 'https://img.icons8.com/color/96/source-code.png',
    },
  ];

  return (
    <div id="education" className="paper-card h-full flex flex-col justify-between relative">
      <div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2">

          {/* Left Column: Education */}
          <div>
            <h3 className="font-handwriting font-bold text-3xl text-[#2d2424] mb-4 flex items-center gap-2">
              <span>🎓</span> Education
            </h3>

            <div className="space-y-3.5">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-[#eadecf] bg-[#fffdf9] hover:bg-white hover:border-[#e06d53]/40 transition-all duration-200 group flex items-start justify-between gap-3 shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#fbebe8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <img src={edu.iconUrl} alt={edu.degree} className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#2d2424] group-hover:text-[#e06d53] transition-colors leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-[#6e5e5e] font-medium mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#8a762c] bg-[#fef8db] px-2.5 py-0.5 rounded-full shrink-0">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div>
            <h3 className="font-handwriting font-bold text-3xl text-[#2d2424] mb-4 flex items-center gap-2">
              <span>🎗️</span> Certifications
            </h3>

            <div className="space-y-3">
              {certificationsList.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-[#eadecf] bg-[#fffdf9] hover:bg-white hover:border-[#e06d53]/40 transition-all duration-200 group flex items-center justify-between gap-3 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#eaf2ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <img src={cert.iconUrl} alt={cert.title} className="w-5 h-5 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#2d2424] group-hover:text-[#e06d53] transition-colors leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#6e5e5e]">
                        {cert.provider}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#6e5e5e] bg-[#faf5ef] px-2.5 py-0.5 rounded-full shrink-0">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
