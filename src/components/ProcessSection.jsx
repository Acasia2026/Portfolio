import React, { useState } from 'react';
import { Lightbulb, FileText, Code, CheckCircle, Rocket, Sparkles, ArrowRight } from './Icons';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      detail: 'Analyzing project goals, defining the target audience, gathering requirements, and mapping core user needs to ensure you are solving the right problem.',
      icon: <Lightbulb className="w-4 h-4 text-[#e69a48]" />,
      tipEmoji: '💡',
      loopBackTo: null,
    },
    {
      num: '02',
      title: 'Plan & Design',
      detail: 'Structuring the scope, creating wireframes & UI/UX prototypes, mapping architecture diagrams, allocating resources, and setting milestones to establish a clear roadmap.',
      icon: <FileText className="w-4 h-4 text-[#e06d53]" />,
      tipEmoji: '📐',
      loopBackTo: null,
    },
    {
      num: '03',
      title: 'Build',
      detail: 'Turning requirements and designs into actual code, software, or physical products through development and implementation with continuous testing.',
      icon: <Code className="w-4 h-4 text-[#4285f4]" />,
      tipEmoji: '⚡',
      loopBackTo: null,
    },
    {
      num: '04',
      title: 'Test',
      detail: 'Running quality assurance (QA), checking for bugs, verifying performance, and ensuring the product meets initial requirements before release.',
      icon: <CheckCircle className="w-4 h-4 text-[#2d6a4f]" />,
      tipEmoji: '🧪',
      loopBackTo: 'Feedback loop back to 03 Build',
    },
    {
      num: '05',
      title: 'Launch',
      detail: 'Deploying the product to production, executing marketing campaigns, and making it accessible to end-users.',
      icon: <Rocket className="w-4 h-4 text-[#d95d39]" />,
      tipEmoji: '🚀',
      loopBackTo: null,
    },
    {
      num: '06',
      title: 'Measure & Iterate',
      detail: 'Monitoring post-launch analytics, gathering user feedback, and planning continuous updates to drive ongoing product refinement.',
      icon: <Sparkles className="w-4 h-4 text-[#b87614]" />,
      tipEmoji: '🔄',
      loopBackTo: 'Iterative feedback back to 01 Discover',
    },
  ];

  return (
    <div className="paper-card h-full flex flex-col justify-between">
      <div>
        <h3 className="font-handwriting font-bold text-3xl text-[#2d2424] mt-1 mb-6">
          From Idea → Final Product
        </h3>

        {/* Process Steps Flow: Grid on Mobile (<768px), Horizontal Pipeline on Desktop (>=768px) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row md:items-center md:justify-between gap-3 md:gap-2 text-center relative py-2">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <button
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`flex flex-col items-center p-2.5 sm:p-3 md:p-0 rounded-xl md:rounded-none transition-all cursor-pointer focus:outline-none flex-1 ${
                  activeStep === idx
                    ? 'bg-[#fdf4e7] md:bg-transparent border border-[#f3d4a0] md:border-none shadow-xs md:shadow-none'
                    : 'bg-[#fffdf9] md:bg-transparent border border-[#eadecf]/60 md:border-none hover:bg-[#faf5ef] md:hover:bg-transparent'
                }`}
              >
                {/* Step Circle with Icon */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-1.5 transition-all shadow-xs ${activeStep === idx
                    ? 'scale-110 bg-[#e06d53] ring-4 ring-[#fde5d2]'
                    : 'bg-[#fde5d2] border border-[#f3c8b4] group-hover:scale-105 group-hover:bg-[#fbd3c0]'
                    }`}
                >
                  {activeStep === idx
                    ? React.cloneElement(step.icon, { className: 'w-4 h-4 text-white' })
                    : step.icon}
                </div>

                {/* Number Badge */}
                <span
                  className={`text-[10px] font-bold uppercase transition-colors ${activeStep === idx ? 'text-[#e06d53]' : 'text-[#8e7b7b]'
                    }`}
                >
                  {step.num}
                </span>

                {/* Step Title */}
                <span
                  className={`font-bold text-xs mt-0.5 transition-colors ${activeStep === idx ? 'text-[#e06d53]' : 'text-[#2d2424] group-hover:text-[#e06d53]'
                    }`}
                >
                  {step.title}
                </span>
              </button>

              {/* Arrow Connector between steps (Hidden on Mobile/Tablet <768px) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-[#d8c4b0] shrink-0 -mt-6">
                  <ArrowRight className="w-4 h-4 text-[#e06d53]/50" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Dynamic Process Details Box */}
        <div className="mt-6 p-4 bg-[#fdf4e7] rounded-xl border border-[#f3d4a0] text-xs text-[#6e5e5e] flex items-start gap-3 transition-all animate-fade-in shadow-xs">
          <span className="text-xl shrink-0 p-1.5 bg-white/80 rounded-lg border border-[#f3d4a0]/60 shadow-2xs">
            {steps[activeStep].tipEmoji}
          </span>
          <div className="space-y-1.5 text-left flex-1">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="font-bold text-[#2d2424] text-xs">
                Step {steps[activeStep].num}: {steps[activeStep].title}
              </span>
              {steps[activeStep].loopBackTo && (
                <span className="text-[10px] font-semibold text-[#c8553d] bg-[#fde5d2] px-2.5 py-0.5 rounded-full border border-[#f8c9c9] flex items-center gap-1">
                  <span>🔄</span> {steps[activeStep].loopBackTo}
                </span>
              )}
            </div>
            <p className="text-xs text-[#5c4e4e] leading-relaxed">
              {steps[activeStep].detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
