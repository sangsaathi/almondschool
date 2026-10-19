import React, { useRef } from 'react';
import { Sparkles, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export const ConfidenceBelief: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const confidenceSteps = [
    {
      step: '01',
      title: 'Raising a Little Hand',
      desc: 'Encouraging the curiosity to ask questions without any hesitation.'
    },
    {
      step: '02',
      title: 'Making a First Friend',
      desc: 'Learning the gentle joy of sharing, cooperating, and listening.'
    },
    {
      step: '03',
      title: 'Trying Something New',
      desc: 'Exploring unfamiliar textures, puzzles, and colors with joy.'
    },
    {
      step: '04',
      title: 'Standing on Stage',
      desc: 'Reciting a poem or showing a favorite craft with a beaming smile.'
    },
    {
      step: '05',
      title: 'Saying "I Can Do It!"',
      desc: 'Building an internal fountain of genuine, lasting self-belief.'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Confidence Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                Growing Confidence, One Little Step at a Time
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 tracking-tight text-balance">
                We believe confidence doesn't appear overnight.
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-balance">
                It grows when a child is encouraged to raise their hand, answer a question, make a new friend, try something for the first time, stand on a stage or simply say, “I can do it!”
              </p>
            </div>

            {/* Mobile Swipe Buttons */}
            <div className="flex sm:hidden items-center gap-1.5 self-end shrink-0">
              <span className="text-xs text-stone-400">Swipe</span>
              <button
                onClick={() => scroll('left')}
                className="p-1.5 rounded-lg bg-stone-200/80 text-stone-700"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-1.5 rounded-lg bg-stone-200/80 text-stone-700"
                aria-label="Next step"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stepped milestones container: Horizontal sliding on mobile */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-4 snap-x snap-mandatory gap-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-4 sm:overflow-visible scroll-smooth"
          >
            {confidenceSteps.map((item) => (
              <div
                key={item.step}
                className="w-[72vw] max-w-[260px] shrink-0 snap-start sm:w-auto bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-stone-400 transition-colors"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs font-semibold text-stone-400">
                    Step {item.step}
                  </span>
                  <h3 className="text-base font-semibold text-stone-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-medium text-emerald-800 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-700" />
                  <span>Celebrated achievement</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <p className="text-base sm:text-lg font-serif italic text-stone-800">
              “Small steps today. Confident strides tomorrow.”
            </p>
          </div>
        </div>

        {/* Our Belief Banner */}
        <div className="rounded-3xl bg-stone-900 text-stone-100 p-7 sm:p-12 lg:p-14 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl mx-auto text-center space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-stone-400">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              <span>Our Sacred Belief</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-stone-50 leading-snug text-balance">
              Every child is unique. Every child can learn. Every child deserves to shine.
            </h3>

            <div className="w-12 h-px bg-stone-700 mx-auto" />

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              We don't compare children. We encourage them to become the best version of themselves.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-stone-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                No comparative rankings
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Unconditional encouragement
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Respect for individual pace
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
