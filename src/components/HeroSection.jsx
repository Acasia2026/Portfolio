import React from 'react';
import { Download, Eye, Sparkles, Heart, Star, ArrowDownRight, Paperclip } from './Icons';

export default function HeroSection({ onOpenContact, onOpenCV }) {
  return (
    <section id="home" className="py-4 md:py-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Polaroid Avatar Card (Centered on Mobile/Tablet, Left-aligned on Desktop) */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
          <div className="relative w-full max-w-[260px] sm:max-w-[280px]">
            {/* Washi Tape on top left */}
            <div className="washi-tape washi-tape-top-left"></div>

            {/* Glassmorphic Polaroid Frame */}
            <div className="polaroid-card glass-card bg-white/75 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 pb-2 shadow-xl border border-white/80 transform -rotate-2 hover:rotate-0 transition-all duration-300">
              {/* Polaroid Image Container */}
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-tr from-[#fceade] via-[#f7d6c8] to-[#f9e5d8] relative flex items-center justify-center border border-[#ebdcd0] shadow-inner">
                {/* Real Photo of Renuka */}
                <img
                  src="/renuka-profile.jpg"
                  alt="Renuka"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-2.5 text-center border-t border-[#eadecf]/60 pt-2">
                <div className="font-sans font-black text-xs sm:text-sm tracking-widest text-[#4a3b32] uppercase py-1.5 px-3 bg-[#fef8ed] rounded-xl border border-[#f5e2ad] block shadow-xs">
                  WEB DEVELOPER
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Intro Card */}
        <div className="lg:col-span-8 flex flex-col justify-center space-y-4 sm:space-y-5 text-center lg:text-left py-5 px-5 sm:px-8 bg-white/70 backdrop-blur-md rounded-3xl border border-white/90 shadow-sm">
          {/* Cursive Hello */}
          <div className="inline-block relative">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#6e5e5e] block">
              Hello, I'm
            </span>
          </div>

          {/* Bold Name Header */}
          <div>
            <h1 className="font-sans font-bold text-4xl sm:text-6xl lg:text-6xl text-[#2d2424] tracking-tight leading-none">
              Renuka
            </h1>
          </div>

          {/* Role Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
            <span className="bg-[#fde5d2] text-[#c8553d] font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#f3c8b4] shadow-xs tracking-wide">
              Developer
            </span>
            <span className="bg-[#fef4d8] text-[#b87614] font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#f5e2ad] shadow-xs tracking-wide">
              Creator
            </span>
            <span className="bg-[#fcebeb] text-[#d95d39] font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#f8c9c9] shadow-xs tracking-wide">
              Problem Solver
            </span>
          </div>

          {/* Bio Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#6e5e5e] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans pt-1">
            Full stack developer building scalable web apps with Django, React, Next.js, and Node.js. I handle the whole stack from database design and sleek UI components to cloud deployment turning ideas into production-ready code that just works.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
            <a href="#projects" className="btn-primary w-full sm:w-auto text-center justify-center group">
              <span>View My Work</span>
            </a>

            <a
              href="/resume.pdf"
              download="Renuka_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-full sm:w-auto text-center justify-center group"
            >
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
