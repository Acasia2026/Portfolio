import React, { useState } from 'react';
import { Menu, X, Heart } from './Icons';

export default function Navbar({ currentPage = 'home', onNavigate, onOpenContact }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', targetPage: 'home', href: '#home' },
    { name: 'Skills', targetPage: 'home', href: '#skills' },
    { name: 'Projects', targetPage: 'projects', href: '#projects' },
    { name: 'Blog', targetPage: 'blog', href: '#blog' },
    { name: 'Contact', targetPage: 'home', href: '#contact' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (link.targetPage === 'blog') {
      onNavigate('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.targetPage === 'projects') {
      onNavigate('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentPage !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 py-3.5 px-6 backdrop-blur-md bg-[#faf5ef]/85 border-b border-[#eadecf]/50 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Desktop Navigation Links (Left Side) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-sm font-medium text-[#6e5e5e] hover:text-[#e06d53] active:text-[#e06d53] focus:text-[#e06d53] relative transition-colors group py-1 tracking-wide"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e06d53] transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full rounded-full"></span>
            </a>
          ))}
        </nav>

        {/* Right CTA Actions: LinkedIn + Let's Connect */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/renuka-dhoundiyal01/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-xs py-2 px-3.5 flex items-center gap-1.5 shadow-sm"
            title="LinkedIn Profile"
          >
            <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" className="w-4 h-4 object-contain shrink-0" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={onOpenContact}
            className="btn-primary text-sm py-2 px-5"
          >
            Let's Connect
          </button>
        </div>

        {/* Mobile Layout: Let's Connect on Left, Hamburger Menu on Right */}
        <div className="md:hidden flex items-center justify-between w-full">
          <button
            onClick={onOpenContact}
            className="btn-primary text-xs py-1.5 px-3.5 shadow-sm"
          >
            Let's Connect
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#2d2424] hover:text-[#e06d53] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 p-4 bg-[#fffdf9] border border-[#eadecf] rounded-2xl shadow-xl flex flex-col gap-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setMobileOpen(false);
                handleLinkClick(e, link);
              }}
              className="text-base font-medium text-[#2d2424] hover:text-[#e06d53] py-2 px-3 rounded-lg hover:bg-[#faf5ef] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-2 mt-2">
            <a
              href="https://www.linkedin.com/in/renuka-dhoundiyal01/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary flex-1 py-2.5 text-center text-sm justify-center"
            >
              <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" className="w-4 h-4 object-contain shrink-0" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenContact();
              }}
              className="btn-primary flex-1 py-2.5 text-center text-sm justify-center"
            >
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
