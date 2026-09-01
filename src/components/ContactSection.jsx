import React, { useState } from 'react';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'acasiadl01@gmail.com';

    // Copy email to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).catch(() => { });
    }

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);

    // Open web Gmail compose in a new tab
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);
      formData.append("_subject", `Portfolio Message from ${formState.name}`);
      formData.append("_captcha", "false");

      await fetch("https://formsubmit.co/ajax/acasiadl01@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
    } catch (err) {
      console.error("Submission fallback", err);
    } finally {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <div id="contact" className="paper-card h-full flex flex-col justify-between relative">
      <div>
        {/* Badge & Heading */}
        <h3 className="font-handwriting font-bold text-3xl text-[#2d2424] mt-0.5 mb-3 flex items-center gap-2">
          <span>✉️</span> Get in Touch
        </h3>

        {/* Contact Form */}
        {isSent ? (
          <div className="bg-[#e8f5e9] border border-[#a5d6a7] text-[#2d6a4f] p-4 rounded-xl text-center text-xs font-semibold space-y-1 my-3 animate-fade-in">
            <p className="text-base">✨ Message Sent to acasiadl01@gmail.com!</p>
            <p className="font-normal text-[#4e6e58]">Thank you for reaching out. I'll get back to you soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2.5 mb-4">
            <div>
              <label className="block text-[14px] font-bold text-[#2d2424] mb-1">
                Name
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#eadecf] bg-[#fffdf9] focus:outline-none focus:border-[#e06d53] focus:ring-1 focus:ring-[#e06d53] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[14px] font-bold text-[#2d2424] mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="your.email@example.com"
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#eadecf] bg-[#fffdf9] focus:outline-none focus:border-[#e06d53] focus:ring-1 focus:ring-[#e06d53] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[14px] font-bold text-[#2d2424] mb-1">
                Message
              </label>
              <textarea
                rows="2"
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Let's build something great..."
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-[#eadecf] bg-[#fffdf9] focus:outline-none focus:border-[#e06d53] focus:ring-1 focus:ring-[#e06d53] transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-2 text-xs font-bold justify-center shadow-md disabled:opacity-60"
            >
              {isSubmitting ? 'Sending to acasiadl01@gmail.com...' : 'Send Message'}
            </button>
          </form>
        )}

        {/* Direct Connect Buttons: Stack vertically on Mobile (<640px), 3-col on Tablet/Desktop */}
        <div className="pt-3 border-t border-[#f0e6dc] space-y-2">
          <span className="block text-[10px] font-bold text-[#6e5e5e] uppercase tracking-wider text-center">
            Or Connect Directly
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <a
              href="mailto:acasiadl01@gmail.com"
              onClick={handleEmailClick}
              className={`btn-secondary py-2 px-3 text-xs justify-center text-center transition-all ${isCopied ? 'bg-[#e8f5e9] text-[#2d6a4f] border-[#a5d6a7]' : ''
                }`}
              title="Click to copy email & open Gmail"
            >
              <img src="https://img.icons8.com/color/48/gmail-new.png" alt="Email" className="w-4 h-4 object-contain shrink-0" />
              <span>{isCopied ? 'Copied! ✨' : 'Email'}</span>
            </a>

            <a
              href="https://www.linkedin.com/in/renuka-dhoundiyal01/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary py-2 px-3 text-xs justify-center text-center"
              title="LinkedIn"
            >
              <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" className="w-4 h-4 object-contain shrink-0" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Acasia01"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary py-2 px-3 text-xs justify-center text-center"
              title="GitHub"
            >
              <img src="https://img.icons8.com/color/48/github--v1.png" alt="GitHub" className="w-4 h-4 object-contain shrink-0" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Coffee Cup & Plant Graphic */}
      <div className="mt-4 pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#6e5e5e]">
        <div className="flex items-center gap-1.5 bg-[#fcebeb] px-3 py-1 rounded-full text-[#c8553d] font-medium text-xs">
          <img src="https://img.icons8.com/color/48/coffee.png" alt="Coffee" className="w-3.5 h-3.5 object-contain" />
          <span>Always up for coffee & code</span>
        </div>
        <span className="text-lg hidden sm:inline">🪴</span>
      </div>
    </div>
  );
}
