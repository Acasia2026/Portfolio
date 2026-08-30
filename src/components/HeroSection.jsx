import React from 'react';
import { Download, Eye, Sparkles, Heart, Star, ArrowDownRight, Paperclip } from './Icons';

export default function HeroSection({ onOpenContact, onOpenCV }) {
  return (
    <section id="home" className="py-4 md:py-6 relative overflow-hidden">

      <div className="absolute bottom-12 right-12 text-[#e06d53] opacity-40 animate-pulse-slow pointer-events-none">
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Polaroid Avatar Card */}
        <div className="lg:col-span-5 flex flex-col items-center relative">
          <div className="relative w-full max-w-sm">
            {/* Washi Tape on top left */}
            <div className="washi-tape washi-tape-top-left"></div>

            {/* Glassmorphic Polaroid Frame */}
            <div className="polaroid-card glass-card bg-white/75 backdrop-blur-md rounded-2xl p-3 sm:p-4 pb-2 shadow-2xl border border-white/80 transform -rotate-2 hover:rotate-0 transition-all duration-300">
              {/* Polaroid Image Container */}
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-tr from-[#fceade] via-[#f7d6c8] to-[#f9e5d8] relative flex items-center justify-center border border-[#ebdcd0] shadow-inner">

                {/* Real Photo of Renuka */}
                <img
                  src="/renuka-profile.jpg"
                  alt="Renuka"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />

              </div>

              <div className="mt-3 text-center border-t border-[#eadecf]/60 pt-2.5">
                <div className="font-sans font-black text-xl sm:text-2xl tracking-widest text-[#4a3b32] uppercase py-2 px-4 bg-[#fef8ed] rounded-xl border border-[#f5e2ad] block shadow-sm">
                  WEB DEVELOPER
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Handwritten Greeting & Bio */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-center lg:text-left py-4 px-5 sm:px-7 bg-white/70 backdrop-blur-md rounded-3xl border border-white/90 shadow-sm">
          {/* Cursive Hello */}
          <div className="inline-block relative">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#6e5e5e] block">
              Hello, I'm
            </span>
          </div>

          {/* Large Clean Bold Name Header */}
          <div>
            <h1 className="font-sans font-bold text-5xl sm:text-6xl md:text-7xl lg:text-6xl text-[#2d2424] tracking-tight leading-none">
              Renuka
            </h1>
          </div>

          {/* Soft Role Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
            <span className="bg-[#fde5d2] text-[#c8553d] font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-[#f3c8b4] shadow-sm tracking-wide">
              Developer
            </span>
            <span className="bg-[#fef4d8] text-[#b87614] font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-[#f5e2ad] shadow-sm tracking-wide">
              Creator
            </span>
            <span className="bg-[#fcebeb] text-[#d95d39] font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-[#f8c9c9] shadow-sm tracking-wide">
              Problem Solver
            </span>
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#6e5e5e] max-w-xl mx-auto lg:mx-0 leading font-sans pt-1">
            Full Stack Developer skilled in Django, React, Node.js, and cloud deployment. Experienced across the full development lifecycle, transforming complex ideas into clean, scalable, and production-ready web applications.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
            <a href="#projects" className="btn-primary group">
              <span>View My Work</span>
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              download="Renuka_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary group"
            >
              <Paperclip className="w-4 h-4 text-[#6e5e5e] group-hover:rotate-12 transition-transform" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
