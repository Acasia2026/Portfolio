import React from 'react';
import { Github, ExternalLink, Heart, Sparkles } from './Icons';

export default function ProjectsPage({ onOpenProjectDemo, onNavigateHome }) {
  const projects = [
    {
      id: 1,
      badge: '01',
      title: 'Celestia - E-Commerce Store',
      description: 'A modern e-commerce web platform featuring curated fashion & lifestyle collections with category filters, shop views, and product details.',
      tags: ['React', 'E-Commerce', 'JavaScript', 'CSS3'],
      githubUrl: 'https://github.com/Acasia01',
      liveUrl: 'https://celestia.example.com',
      coverImage: '/Celestia/celestia website images.png',
      gallery: [
        '/Celestia/celestia website images.png',
        '/Celestia/shop page.png',
        '/Celestia/shop page 2.png',
        '/Celestia/category section.png',
        '/Celestia/about use.png',
      ],
    },
    {
      id: 2,
      badge: '02',
      title: 'Vehicle & Fleet Booking System',
      description: 'Comprehensive fleet management & vehicle booking app with customer reservations, fleet admin panels, booking ledgers, and vehicle tracking.',
      tags: ['Django', 'React', 'SQL', 'Node.js'],
      githubUrl: 'https://github.com/Acasia01',
      liveUrl: 'https://booking-system.example.com',
      coverImage: '/Booking System/Homepage.png',
      gallery: [
        '/Booking System/Homepage.png',
        '/Booking System/fleet page.png',
        '/Booking System/Booking Details page.png',
        '/Booking System/Admin Booking page.png',
        '/Booking System/Admin Fleet page.png',
        '/Booking System/vechiles page.png',
        '/Booking System/Customer Bookings.png',
        '/Booking System/Booking History.png',
        '/Booking System/Cusetomer Legder.png',
      ],
    },
    {
      id: 3,
      badge: '03',
      title: 'Project Manager & Team Dashboard',
      description: 'Productivity & project management workspace with interactive Gantt charts, activity logs, calendar views, team boards, and analytics reports.',
      tags: ['TypeScript', 'Next.js', 'System Design', 'Tailwind'],
      githubUrl: 'https://github.com/Acasia01',
      liveUrl: 'https://project-manager.example.com',
      coverImage: '/Project Manager Images/Homepage.png',
      gallery: [
        '/Project Manager Images/Homepage.png',
        '/Project Manager Images/Dashboard.png',
        '/Project Manager Images/Gantt Chart - Calender Page.png',
        '/Project Manager Images/Project Page.png',
        '/Project Manager Images/Activity Page.png',
        '/Project Manager Images/Reports Page.png',
        '/Project Manager Images/Calender Page.png',
        '/Project Manager Images/Team Page.png',
        '/Project Manager Images/Admin Panel.png',
        '/Project Manager Images/Notification Page.png',
      ],
    },
    {
      id: 4,
      badge: '04',
      title: 'Restu - Restaurant & Product Platform',
      description: 'Restaurant ordering & food product management system with interactive food catalogs, item customization options, and sales dashboards.',
      tags: ['React', 'Express.js', 'SQL', 'CSS3'],
      githubUrl: 'https://github.com/Acasia01',
      liveUrl: 'https://restu-app.example.com',
      coverImage: '/Restu Images/Product Page.png',
      gallery: [
        '/Restu Images/Product Page.png',
        '/Restu Images/Dashboard.png',
      ],
    },
  ];

  return (
    <div className="py-8 md:py-12 animate-fade-in relative min-h-screen">
      <div className="max-w-6xl mx-auto px-4 space-y-8">

        {/* 3 Projects per Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="polaroid-card bg-white rounded-xl p-4 shadow-lg border border-[#efe5da] flex flex-col justify-between group"
            >
              {/* Washi Tape */}
              <div className="washi-tape washi-tape-top-center"></div>

              {/* Top Badge Number */}
              <div className="flex items-center justify-between mb-2.5">
                <span className="bg-[#e06d53] text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                  {project.badge}
                </span>
                <Heart className="w-3.5 h-3.5 text-[#e06d53] fill-[#e06d53] opacity-60" />
              </div>

              {/* Card Screenshot Mockup Frame */}
              <div
                onClick={() => onOpenProjectDemo(project)}
                className="w-full aspect-[4/3] rounded-lg bg-gray-100 overflow-hidden relative cursor-pointer group-hover:shadow-md transition-all flex flex-col border border-black/5"
              >
                {/* Browser Bar */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#faf5ef] border-b border-[#eadecf] text-xs font-mono text-gray-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                  <span className="ml-2 truncate text-[11px] text-gray-500 font-mono">
                    {project.title.split(' ')[0].toLowerCase()}.app
                  </span>
                </div>

                {/* Real Screenshot Preview */}
                <div className="flex-1 relative overflow-hidden bg-white">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#2d2424]/60 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2">
                    <span className="text-white font-semibold text-xs bg-[#e06d53] px-3.5 py-1.5 rounded-full shadow-lg text-center">
                      View Screenshots ({project.gallery.length})
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-[#2d2424] group-hover:text-[#e06d53] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#6e5e5e] mt-1.5 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#f0e6dc]">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#6e5e5e] hover:text-[#2d2424] flex items-center gap-1.5 font-medium"
                    title="GitHub Code"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  <button
                    onClick={() => onOpenProjectDemo(project)}
                    className="text-xs text-[#e06d53] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>View Gallery</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
