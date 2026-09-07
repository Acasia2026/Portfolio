import React from 'react';
import { ArrowRight, BookOpen } from './Icons';

export default function BlogSection({ onOpenBlogPost }) {
  const posts = [
    {
      id: 1,
      title: 'Practice Makes Person Perfect',
      date: 'Aug 30, 2026',
      tag: 'Life',
      readTime: '5 min read',
      snippet: 'The timeless adage highlights how sustained dedication converts effort into expertise.',
      content: `The timeless adage "practice makes perfect" highlights how sustained dedication converts effort into expertise. When you consistently practice a skill, neuroplasticity physically rewires your brain, strengthening neural pathways and transforming awkward initial steps into automatic muscle memory. However, simple repetition is not enough; reaching high proficiency requires **deliberate practice**, which involves actively targeting your weaknesses and seeking immediate feedback to correct mistakes before they turn into bad habits. Pushing beyond your comfort zone during these sessions is what truly accelerates growth and refines your abilities. Beyond building technical skill, the daily commitment to improvement fosters essential character traits like discipline, patience, and resilience in the face of setbacks. Perfection itself is rarely a permanent destination, but rather an ongoing commitment to personal refinement. Ultimately, talent is far less about innate ability and much more about the cumulative power of small, intentional daily efforts compounding over time.`,
    },
    {
      id: 2,
      title: '5 Things I Learned While Building React Apps',
      date: 'July 10, 2026',
      tag: 'React',
      readTime: '4 min read',
      snippet: 'Key architectural insights on state management, custom hooks, and rendering optimizations for front-end developers.',
      content: `Building modern React applications has taught me that modular component architecture and clean state boundaries are paramount. Here are 5 key takeaways:
      
      1. Keep component state local until it truly needs to be global.
      2. Custom hooks make business logic reusable and easy to test.
      3. Memoization (useMemo/useCallback) should be applied thoughtfully, not blindly.
      4. Folder structures grouped by feature scale much better than grouping by file type.
      5. Consistent UI design tokens lead to faster development speed.`,
    },
    {
      id: 3,
      title: 'Tips for Writing Cleaner & Better Code',
      date: 'July 5, 2026',
      tag: 'Tips',
      readTime: '3 min read',
      snippet: 'Simple principles like single responsibility, descriptive variable names, and early returns that transform code clarity.',
      content: `Clean code is code that is easy to read, easy to reason about, and easy to maintain. Here are practical tips:

      1. Use descriptive, self-documenting variable and function names.
      2. Favor early returns over deeply nested if-else blocks.
      3. Write small functions that do one thing and do it exceptionally well.
      4. Keep side effects predictable and isolated.
      5. Code reviews are for learning, not just finding bugs.`,
    },
    {
      id: 4,
      title: 'Tools I am using in 2026',
      date: 'September 5, 2026',
      tag: 'Tools , AI , WebDev',
      readTime: '5 min read',
      snippet: 'These tools that can make our work faster and efficient and we should use them instead of coding from scratch',
      content: `Hey guys, I just want to share about the tools that I’m using to build projects faster nowadays. Instead of spending hours on every small task, I can now move from idea → research → design → MVP → code → testing much faster.
      Here’s the workflow and tools I currently use:-

      👉 Idea Sharpening
      - ChatGPT
      👉Research
      - Claude
      👉Design & Inspiration
      - Dribbble
      - Mobbin
      - Pinterest
      - Stitch
      - Nano Banana
      👉MVP & Planning
      - Lovable
      - Eraser
      👉Coding
      - Claude
      - Codex
      👉API Testing
      - Postman
      👉AI Models
      - Gemini
      - Hugging Face
      👉Security / Code Review
      - CodeRabbit

      But there’s one thing I’ve learned while using all these tools that you can generate an entire application with AI, but there are still many things that require proper engineering decisions and manual attention:
      • Database architecture
      • Authentication & authorization
      • Security measures
      • API design
      • Scalability
      • Performance optimization
      • Error handling
      • Testing
      • Deployment & monitoring
      • Cost optimization

      The future isn't “AI vs developers.”
      I think it's going to be:
      Developers who know how to use AI and understand engineering fundamentals
      Also, Please share your recommendations and any tools that you use that are better than the ones I mentioned. 🙂 `,
    },
  ];

  return (
    <div id="blog" className="paper-card h-full flex flex-col justify-between">
      <div>
        <h3 className="font-handwriting font-bold text-3xl text-[#2d2424] mt-1 mb-5">
          Notes From My Desk
        </h3>

        {/* Blog Post Cards */}
        <div className="space-y-3.5">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => onOpenBlogPost(post)}
              className="p-3.5 rounded-xl border border-[#eadecf] bg-[#fffdf9] hover:bg-white hover:border-[#e06d53]/40 cursor-pointer transition-all duration-200 group"
            >
              <div className="flex items-center justify-between text-[11px] text-[#6e5e5e] mb-1.5">
                <span>{post.date}</span>
                <span className="tag-pill-coral">{post.tag}</span>
              </div>
              <h4 className="font-bold text-sm text-[#2d2424] group-hover:text-[#e06d53] transition-colors leading-snug">
                {post.title}
              </h4>
              <div className="flex items-center gap-1 text-xs text-[#e06d53] font-medium mt-2">
                <span>Read More</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
