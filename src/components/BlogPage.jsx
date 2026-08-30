import React, { useState } from 'react';
import BlogSection from './BlogSection';
import LearningSection from './LearningSection';
import { ArrowRight, BookOpen } from './Icons';

export default function BlogPage({ onOpenBlogPost, onNavigateHome }) {
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="py-8 md:py-12 animate-fade-in relative min-h-screen">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        {/* 2-Column Main Layout: Left = Blog Section, Right = Currently Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Main Column: Blog Posts */}
          <div className="lg:col-span-8">
            <BlogSection onOpenBlogPost={onOpenBlogPost} />
          </div>

          {/* Sidebar Column: Currently Learning Section */}
          <div className="lg:col-span-4 space-y-6">
            {/* Currently Learning Section Component */}
            <LearningSection />

            {/* Extra Scrapbook Side Note */}
            <div className="sticky-note bg-[#fef8db] p-5 rounded-xl border border-[#eee1ad] shadow-md transform rotate-1 hover:rotate-0 transition-transform">
              <div className="washi-tape -top-3 left-6"></div>
              <h4 className="font-handwriting text-2xl text-[#5c4d18] font-bold mb-1">
                Got a Topic Suggestion?
              </h4>
              <p className="text-xs text-[#8a762c] leading-relaxed">
                I'm always writing about modern web development, Django, React, and system architecture. Reach out if you'd like me to write about a specific topic!
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
