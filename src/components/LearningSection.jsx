import React from 'react';

export default function LearningSection() {
  const topics = [
    { title: 'DSA', desc: 'Improving code quality', color: '#3178c6', bg: '#e8f2ff' },
    { title: 'UI/UX Design', desc: 'Designing better user experiences', color: '#db2777', bg: '#fce7f3' },
  ];

  return (
    <div className="paper-card h-full flex flex-col justify-between relative overflow-hidden">
      {/* Paper Plane Graphic */}
      <div className="absolute top-4 right-4 opacity-40 transform rotate-12 pointer-events-none">
        <img src="https://img.icons8.com/color/96/paper-plane.png" alt="Paper plane" className="w-10 h-10 object-contain" />
      </div>

      <div>
        <h3 className="font-handwriting font-bold text-3xl text-[#2d2424] mt-1 mb-5">
          What's Next
        </h3>

        {/* Paper Slips Grid */}
        <div className="grid grid-cols-2 gap-3">
          {topics.map((item, index) => (
            <div
              key={index}
              className="p-3 rounded-lg border border-[#eadecf] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-rotate-1"
              style={{ backgroundColor: item.bg }}
            >
              <h4 className="font-bold text-sm" style={{ color: item.color }}>
                {item.title}
              </h4>
              <p className="text-[11px] text-[#6e5e5e] mt-0.5 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote / Sub-text */}
      <div className="mt-4 pt-3 border-t border-[#f0e6dc] text-xs text-[#6e5e5e] italic font-handwriting text-base text-center">
        "Never stop learning, because life never stops teaching." ✨
      </div>
    </div>
  );
}
