import React from 'react';
import { Download, Eye, Sparkles, Heart, Star, ArrowDownRight, Paperclip } from './Icons';

export default function HeroSection({ onOpenContact, onOpenCV }) {
  return (
    <section id="home" className="py-4 md:py-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* MOBILE VIEW (<768px): Exact Mockup Design */}
        <div className="md:hidden">
          <div className="bg-white/75 backdrop-blur-md rounded-3xl border border-white/90 p-5 shadow-sm space-y-4">
            
            {/* Top Row: Polaroid Photo (Left) + Intro Header & Badges (Right) */}
            <div className="flex flex-row items-center gap-3.5">
              {/* Left: Polaroid Avatar Photo Card */}
              <div className="relative shrink-0 w-32">
                {/* Washi Tape */}
                <div className="washi-tape washi-tape-top-left -top-2 -left-2 scale-75"></div>

                {/* Polaroid Frame */}
                <div className="polaroid-card glass-card bg-white/90 backdrop-blur-md rounded-xl p-1.5 pb-1 shadow-md border border-white/90 transform -rotate-2">
                  <div className="w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-tr from-[#fceade] via-[#f7d6c8] to-[#f9e5d8] relative flex items-center justify-center border border-[#ebdcd0] shadow-inner">
                    <img
                      src="/renuka-profile.jpg"
                      alt="Renuka"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="mt-1 text-center border-t border-[#eadecf]/60 pt-1">
                    <div className="font-sans font-black text-[9px] tracking-wider text-[#4a3b32] uppercase py-1 px-1 bg-[#fef8ed] rounded-md border border-[#f5e2ad] block shadow-2xs truncate">
                      WEB DEVELOPER
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Hello I'm + Renuka + Role Badges */}
              <div className="flex-1 min-w-0 space-y-1 text-left">
                <span className="font-handwriting text-xl text-[#6e5e5e] block">
                  Hello, I'm
                </span>

                <h1 className="font-sans font-bold text-3xl text-[#2d2424] tracking-tight leading-tight">
                  Renuka
                </h1>

                <div className="flex flex-wrap items-center gap-1 pt-0.5">
                  <span className="bg-[#fde5d2] text-[#c8553d] font-semibold text-[10px] px-2.5 py-0.5 rounded-full border border-[#f3c8b4] shadow-2xs tracking-wide">
                    Developer
                  </span>
                  <span className="bg-[#fef4d8] text-[#b87614] font-semibold text-[10px] px-2.5 py-0.5 rounded-full border border-[#f5e2ad] shadow-2xs tracking-wide">
                    Creator
                  </span>
                  <span className="bg-[#fcebeb] text-[#d95d39] font-semibold text-[10px] px-2 py-0.5 rounded-full border border-[#f8c9c9] shadow-2xs tracking-wide">
                    Problem Solver
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Row: Bio Description */}
            <div className="text-left pt-1">
              <p className="text-xs text-[#6e5e5e] leading-relaxed font-sans">
                Full stack developer building scalable web apps with Django, React, Next.js, and Node.js. I handle the whole stack from database design and sleek UI components to cloud deployment turning ideas into production-ready code that just works.
              </p>
            </div>

            {/* Bottom Row: Stacked Buttons */}
            <div className="flex flex-col gap-2.5 pt-1">
              <a href="#projects" className="btn-primary w-full py-3 text-center justify-center text-xs font-semibold shadow-md">
                <span>View My Work</span>
              </a>

              <a
                href="/resume.pdf"
                download="Renuka_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-full py-3 text-center justify-center text-xs font-semibold shadow-xs"
              >
                <span>Download CV</span>
              </a>
            </div>

          </div>
        </div>

        {/* DESKTOP VIEW (>=768px): Spacious Side-by-Side Layout */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Polaroid Avatar Card */}
          <div className="md:col-span-4 flex flex-col items-center justify-center relative">
            <div className="relative w-[280px]">
              {/* Washi Tape on top left */}
              <div className="washi-tape washi-tape-top-left"></div>

              {/* Glassmorphic Polaroid Frame */}
              <div className="polaroid-card glass-card bg-white/85 backdrop-blur-md rounded-2xl p-3 pb-2 shadow-xl border border-white/90 transform -rotate-2 hover:rotate-0 transition-all duration-300">
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-tr from-[#fceade] via-[#f7d6c8] to-[#f9e5d8] relative flex items-center justify-center border border-[#ebdcd0] shadow-inner">
                  <img
                    src="/renuka-profile.jpg"
                    alt="Renuka"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="mt-2.5 text-center border-t border-[#eadecf]/60 pt-2">
                  <div className="font-sans font-black text-sm tracking-widest text-[#4a3b32] uppercase py-1.5 px-3 bg-[#fef8ed] rounded-xl border border-[#f5e2ad] block shadow-xs">
                    WEB DEVELOPER
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Intro Card */}
          <div className="md:col-span-8 flex flex-col justify-center space-y-5 text-left py-6 px-8 bg-white/75 backdrop-blur-md rounded-3xl border border-white/90 shadow-sm">
            <div>
              <span className="font-handwriting text-3xl text-[#6e5e5e] block">
                Hello, I'm
              </span>
            </div>

            <div>
              <h1 className="font-sans font-bold text-6xl text-[#2d2424] tracking-tight leading-none">
                Renuka
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="bg-[#fde5d2] text-[#c8553d] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#f3c8b4] shadow-xs tracking-wide">
                Developer
              </span>
              <span className="bg-[#fef4d8] text-[#b87614] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#f5e2ad] shadow-xs tracking-wide">
                Creator
              </span>
              <span className="bg-[#fcebeb] text-[#d95d39] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#f8c9c9] shadow-xs tracking-wide">
                Problem Solver
              </span>
            </div>

            <p className="text-base md:text-lg text-[#6e5e5e] leading-relaxed font-sans pt-1">
              Full stack developer building scalable web apps with Django, React, Next.js, and Node.js. I handle the whole stack from database design and sleek UI components to cloud deployment turning ideas into production-ready code that just works.
            </p>

            <div className="flex flex-row items-center gap-4 pt-2">
              <a href="#projects" className="btn-primary group">
                <span>View My Work</span>
              </a>

              <a
                href="/resume.pdf"
                download="Renuka_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary group"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
