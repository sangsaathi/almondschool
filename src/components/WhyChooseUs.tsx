import React, { useRef } from 'react';
import { PILLARS } from '../data/schoolData';
import { Heart, Sparkles, Smile, MessageCircle, Shield, Lightbulb, Users, ChevronLeft, ChevronRight } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const iconMap: Record<string, React.ReactNode> = {
    '01': <Sparkles className="w-5 h-5 text-amber-700" />,
    '02': <Heart className="w-5 h-5 text-rose-700" />,
    '03': <Lightbulb className="w-5 h-5 text-amber-600" />,
    '04': <Smile className="w-5 h-5 text-emerald-700" />,
    '05': <Users className="w-5 h-5 text-indigo-700" />,
    '06': <MessageCircle className="w-5 h-5 text-teal-700" />,
    '07': <Shield className="w-5 h-5 text-stone-800" />,
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
              Why Choose The Almond School?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 tracking-tight text-balance">
              Seven pillars of thoughtful early childhood care.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed text-balance">
              Everything we do is designed to make learning intuitive, gentle, and deeply rewarding for your child.
            </p>
          </div>

          {/* Mobile Swipe / Arrow Controls */}
          <div className="flex md:hidden items-center gap-2 self-end shrink-0">
            <span className="text-xs text-stone-400">Swipe</span>
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-lg bg-stone-200/80 hover:bg-stone-300 text-stone-700 transition-colors"
              aria-label="Previous pillar"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-lg bg-stone-200/80 hover:bg-stone-300 text-stone-700 transition-colors"
              aria-label="Next pillar"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal sliding track on mobile, Grid on desktop */}
        <div
          ref={scrollRef}
          className="mt-8 sm:mt-12 flex overflow-x-auto pb-4 pt-1 snap-x snap-mandatory gap-4 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 lg:grid-cols-12 md:gap-6 md:overflow-visible scroll-smooth"
        >
          {PILLARS.map((pillar, idx) => {
            const isWide = idx === 0 || idx === 6;
            const desktopSpan = isWide ? 'lg:col-span-6' : 'lg:col-span-4';

            return (
              <div
                key={pillar.id}
                className={`w-[82vw] max-w-[310px] sm:max-w-none shrink-0 snap-start md:w-auto md:shrink ${desktopSpan} bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between group`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-stone-400 tracking-wider">
                      {pillar.number}
                    </span>
                    <div className="p-2 rounded-lg bg-stone-50 border border-stone-100 group-hover:bg-stone-100 transition-colors">
                      {iconMap[pillar.number]}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-stone-900 tracking-tight group-hover:text-stone-950 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 text-[11px] sm:text-xs font-medium text-stone-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300 group-hover:bg-stone-900 transition-colors" />
                  <span className="truncate">{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
