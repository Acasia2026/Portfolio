import React, { useState } from 'react';
import { X, Send, Download, ExternalLink, Github, CheckCircle2, Heart, Sparkles } from './Icons';

export default function Modals({
  activeProject,
  onCloseProject,
  activePost,
  onClosePost,
  isContactOpen,
  onCloseContact,
  isCVOpen,
  onCloseCV,
}) {
  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Project Gallery Selected Image State
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/acasiadl01@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Contact Modal Message from ${formState.name}`
        })
      });
    } catch (err) {
      console.error("Modal form submit error", err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormState({ name: '', email: '', message: '' });
        onCloseContact();
      }, 2000);
    }
  };

  return (
    <>
      {/* 1. PROJECT DEMO MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#fffdf9] border border-[#eadecf] rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[92vh]">
            {/* Header */}
            <div className="p-4 bg-[#faf5ef] border-b border-[#eadecf] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="bg-[#e06d53] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {activeProject.badge}
                </span>
                <h3 className="font-bold text-lg text-[#2d2424]">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  setSelectedImgIndex(0);
                  onCloseProject();
                }}
                className="p-1.5 text-[#6e5e5e] hover:text-[#2d2424] rounded-full hover:bg-[#eadecf]/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Interactive Image Gallery Window */}
            <div className="p-5 overflow-y-auto space-y-5 flex-1">
              <div className="border border-[#eadecf] rounded-xl overflow-hidden bg-white shadow-sm">
                {/* Browser Title Bar */}
                <div className="bg-[#faf5ef] px-4 py-2 border-b border-[#eadecf] flex items-center justify-between text-xs font-mono text-[#6e5e5e]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    <span className="ml-2 font-semibold text-[#2d2424] truncate">
                      {activeProject.gallery?.[selectedImgIndex]?.split('/').pop().replace('.png', '').replace('.jpg', '') || activeProject.title}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#6e5e5e]">
                    {selectedImgIndex + 1} of {activeProject.gallery?.length || 1} Screenshots
                  </span>
                </div>

                {/* Main Full Screenshot View */}
                <div className="bg-[#f7f2eb] p-3 flex justify-center items-center min-h-[300px] max-h-[440px] overflow-y-auto">
                  <img
                    src={activeProject.gallery?.[selectedImgIndex] || activeProject.coverImage}
                    alt={activeProject.title}
                    className="max-h-[420px] w-auto max-w-full object-contain rounded-lg border border-[#eadecf] shadow-md"
                  />
                </div>

                {/* Gallery Thumbnails */}
                {activeProject.gallery && activeProject.gallery.length > 1 && (
                  <div className="p-3 bg-[#faf5ef] border-t border-[#eadecf] flex items-center gap-2.5 overflow-x-auto">
                    {activeProject.gallery.map((imgUrl, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImgIndex(i)}
                        className={`relative rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                          selectedImgIndex === i
                            ? 'border-[#e06d53] scale-105 shadow-sm'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                        title={imgUrl.split('/').pop().replace('.png', '')}
                      >
                        <img
                          src={imgUrl}
                          alt=""
                          className="w-20 h-14 object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div>
                <h4 className="font-bold text-base text-[#2d2424]">Project Highlights</h4>
                <p className="text-sm text-[#6e5e5e] mt-1 leading-relaxed">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-4 bg-[#faf5ef] border-t border-[#eadecf] flex items-center justify-between">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-xs py-2 px-4"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
              <button onClick={onCloseProject} className="btn-primary text-xs py-2 px-4">
                Done Viewing
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. CONTACT FORM MODAL */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#fffdf9] border border-[#eadecf] rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative">
            <div className="washi-tape washi-tape-top-center"></div>

            <div className="p-6 pt-8 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="section-badge">LET'S CHAT</span>
                  <h3 className="font-handwriting font-bold text-3xl text-[#2d2424]">
                    Send a Message ♡
                  </h3>
                </div>
                <button
                  onClick={onCloseContact}
                  className="p-1.5 text-[#6e5e5e] hover:text-[#2d2424] rounded-full hover:bg-[#eadecf]/50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {isSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                  <h4 className="font-bold text-lg text-[#2d2424]">Message Sent!</h4>
                  <p className="text-xs text-[#6e5e5e]">
                    Thanks for reaching out! Renuka will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#2d2424] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#eadecf] bg-[#faf5ef]/60 focus:outline-none focus:border-[#e06d53] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2d2424] mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#eadecf] bg-[#faf5ef]/60 focus:outline-none focus:border-[#e06d53] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2d2424] mb-1">Message</label>
                    <textarea
                      required
                      rows="3"
                      placeholder="Hi Renuka, I'd love to talk about..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#eadecf] bg-[#faf5ef]/60 focus:outline-none focus:border-[#e06d53] focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3 justify-center text-sm mt-2 shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. BLOG POST READER MODAL */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#fffdf9] border border-[#eadecf] rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="p-6 bg-[#faf5ef] border-b border-[#eadecf] flex items-center justify-between">
              <div>
                <span className="tag-pill-coral mb-2 inline-block">{activePost.tag}</span>
                <h3 className="font-bold text-xl text-[#2d2424]">{activePost.title}</h3>
                <p className="text-xs text-[#6e5e5e] mt-1">{activePost.date} · {activePost.readTime}</p>
              </div>
              <button
                onClick={onClosePost}
                className="p-1.5 text-[#6e5e5e] hover:text-[#2d2424] rounded-full hover:bg-[#eadecf]/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto font-sans text-sm text-[#2d2424] space-y-4 leading-relaxed whitespace-pre-line">
              {activePost.content}
            </div>
            <div className="p-4 bg-[#faf5ef] border-t border-[#eadecf] text-right">
              <button onClick={onClosePost} className="btn-primary text-xs py-2 px-4">
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. CV / RESUME MODAL */}
      {isCVOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#fffdf9] border border-[#eadecf] rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 bg-[#faf5ef] border-b border-[#eadecf] flex items-center justify-between">
              <div>
                <span className="section-badge">CURRICULUM VITAE</span>
                <h3 className="font-bold text-2xl text-[#2d2424]">Renuka — Web Developer</h3>
              </div>
              <button
                onClick={onCloseCV}
                className="p-1.5 text-[#6e5e5e] hover:text-[#2d2424] rounded-full hover:bg-[#eadecf]/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#2d2424]">
              {/* Summary */}
              <div>
                <h4 className="font-bold text-base text-[#e06d53] mb-1">Professional Summary</h4>
                <p className="text-xs text-[#6e5e5e] leading-relaxed">
                  Passionate web developer specializing in React, JavaScript, HTML5, CSS3, and Django. Experienced in building responsive, user-centric web applications with clean code and modern scrap-book UI designs.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-bold text-base text-[#e06d53] mb-2">Technical Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Django', 'SQL / Postgres', 'Git & GitHub', 'REST APIs', 'Responsive Design'].map((s) => (
                    <span key={s} className="tag-pill">{s}</span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h4 className="font-bold text-base text-[#e06d53] mb-2">Projects & Experience</h4>
                <div className="space-y-3">
                  <div className="border-l-2 border-[#e06d53] pl-3">
                    <h5 className="font-bold text-xs">Recipe Finder Web App</h5>
                    <p className="text-[11px] text-[#6e5e5e]">React, REST APIs, CSS Grid</p>
                  </div>
                  <div className="border-l-2 border-[#e69a48] pl-3">
                    <h5 className="font-bold text-xs">Task Management Dashboard</h5>
                    <p className="text-[11px] text-[#6e5e5e]">React, Django, SQL</p>
                  </div>
                  <div className="border-l-2 border-[#2d6a4f] pl-3">
                    <h5 className="font-bold text-xs">Full-Stack E-Commerce Store</h5>
                    <p className="text-[11px] text-[#6e5e5e]">Django, JavaScript, HTML/CSS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#faf5ef] border-t border-[#eadecf] flex items-center justify-between">
              <a
                href="/resume.pdf"
                download="Renuka_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2 px-4 shadow-sm inline-flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF CV</span>
              </a>
              <button onClick={onCloseCV} className="btn-secondary text-xs py-2 px-4">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
