import React from 'react';
import { Heart, Coffee, Sparkles } from './Icons';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="mt-20 pt-12 pb-8 border-t border-[#eadecf] bg-[#fffdf9]/70 relative">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Brand Bio */}
        <div className="md:col-span-4 space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="font-handwriting font-bold text-3xl text-[#2d2424]">
              Renuka
            </h3>
            <Heart className="w-4 h-4 fill-[#e06d53] text-[#e06d53]" />
          </div>
          <p className="text-xs font-semibold text-[#e06d53] tracking-wide uppercase">
            Developer · Creator · Problem Solver
          </p>
          <p className="text-xs text-[#6e5e5e] max-w-sm leading-relaxed">
            Building digital experiences with passion and purpose. Focused on clean code and delightful design.
          </p>
          <div className="flex items-center gap-2 pt-2 text-xl">
          </div>
        </div>

        {/* Center Column: Quick Links */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-bold text-sm text-[#2d2424] uppercase tracking-wider">
            Quick Links
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-[#6e5e5e]">
            <a href="#home" className="hover:text-[#e06d53] transition-colors">Home</a>
            <a href="#projects" className="hover:text-[#e06d53] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#e06d53] transition-colors">Skills</a>
            <a href="/resume.pdf" download="Renuka_Resume.pdf" target="_blank" rel="noreferrer" className="hover:text-[#e06d53] transition-colors font-semibold text-[#e06d53]">Download CV</a>
            <button onClick={onOpenContact} className="text-left hover:text-[#e06d53] transition-colors">Contact</button>
          </div>
        </div>

        {/* Right Column: Sticky Note Footer Badge */}
        <div className="md:col-span-4 flex justify-start md:justify-end">
          <div className="sticky-note bg-[#fef6d8] p-4 rounded-lg border border-[#eee1ad] shadow-sm max-w-xs transform rotate-2 hover:rotate-0 transition-transform">
            <div className="washi-tape -top-3 left-4"></div>
            <p className="font-handwriting text-xl text-[#5c4d18] font-bold leading-snug">
              Built with code, coffee & curiosity
            </p>
            <p className="text-[10px] text-[#8a762c] mt-2">
              Connect: acasiadl01@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
