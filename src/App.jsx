import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ProcessSection from './components/ProcessSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import BlogPage from './components/BlogPage';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';
import Modals from './components/Modals';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeProject, setActiveProject] = useState(null);
  const [activePost, setActivePost] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#fbebe8] selection:text-[#e06d53]">
      {/* Sticky Scrapbook Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 space-y-2">
        {currentPage === 'projects' ? (
          /* Dedicated Projects Showcase Page */
          <ProjectsPage
            onOpenProjectDemo={(proj) => setActiveProject(proj)}
            onNavigateHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentPage === 'blog' ? (
          /* Dedicated Blog & Currently Learning Page */
          <BlogPage
            onOpenBlogPost={(post) => setActivePost(post)}
            onNavigateHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          /* Portfolio Home View */
          <>
            {/* Section 01: Hero Section */}
            <HeroSection
              onOpenContact={() => setIsContactOpen(true)}
              onOpenCV={() => setIsCVOpen(true)}
            />

            {/* Section 02: Skills */}
            <SkillsSection />

            {/* Section 03: Projects */}
            <ProjectsSection
              onOpenProjectDemo={(proj) => setActiveProject(proj)}
              onNavigateProjects={() => {
                setCurrentPage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 04: Process */}
            <section className="py-4 md:py-6 relative">
              <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <ProcessSection />
              </div>
            </section>

            {/* Section 04: Work Experience */}
            <section className="py-4 md:py-6 relative">
              <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <ExperienceSection />
              </div>
            </section>

            {/* Section 05: Education & Certifications */}
            <section className="py-4 md:py-6 relative">
              <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <EducationSection />
              </div>
            </section>

            {/* Section 06: Contact Form & Connect */}
            <section className="py-4 md:py-6 relative">
              <div className="max-w-6xl mx-auto px-4 sm:px-8">
                <ContactSection onOpenContact={() => setIsContactOpen(true)} />
              </div>
            </section>
          </>
        )}
      </main>

      {/* Scrapbook Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Modals */}
      <Modals
        activeProject={activeProject}
        onCloseProject={() => setActiveProject(null)}
        activePost={activePost}
        onClosePost={() => setActivePost(null)}
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
        isCVOpen={isCVOpen}
        onCloseCV={() => setIsCVOpen(false)}
      />
    </div>
  );
}
