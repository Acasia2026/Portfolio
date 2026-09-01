import React from 'react';
import { Github, ExternalLink, Heart, Sparkles, FolderGit2 } from './Icons';

export default function ProjectsSection({ onOpenProjectDemo, onNavigateProjects }) {
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
  ];

  return (
    <section id="projects" className="py-4 md:py-6 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="font-handwriting font-bold text-4xl sm:text-5xl text-[#2d2424] mt-1">
              Things I've Built ♡
            </h2>
          </div>
          <button
            onClick={onNavigateProjects}
            className="text-sm font-semibold text-[#e06d53] hover:underline flex items-center gap-1 group focus:outline-none"
          >
            <span>View All Projects</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Responsive Grid: Mobile (1-col), Tablet (2-col), Desktop (3-col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="polaroid-card bg-white rounded-xl p-3.5 shadow-lg border border-[#efe5da] flex flex-col justify-between group"
            >
              {/* Washi Tape on Top Center */}
              <div className="washi-tape washi-tape-top-center"></div>

              {/* Top Badge Number */}
              <div className="flex items-center justify-between mb-2">
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
                {/* Browser Bar Mockup */}
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#faf5ef] border-b border-[#eadecf] text-xs font-mono text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="ml-1.5 truncate text-[10px] text-gray-500 font-mono">
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
                    <span className="text-white font-semibold text-xs bg-[#e06d53] px-3 py-1.5 rounded-full shadow-lg text-center">
                      View Screenshots ✨
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-[#2d2424] group-hover:text-[#e06d53] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#6e5e5e] mt-1 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill text-[10px] px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#f0e6dc]">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#6e5e5e] hover:text-[#2d2424] flex items-center gap-1 font-medium"
                    title="GitHub Code"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                  <button
                    onClick={() => onOpenProjectDemo(project)}
                    className="text-xs text-[#e06d53] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Gallery</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
