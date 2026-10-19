import React, { useState, useRef } from 'react';
import { EXPERIENCES } from '../data/schoolData';
import { Experience } from '../types';
import {
  Sprout,
  Sparkles,
  Palette,
  BookOpen,
  Music,
  Puzzle,
  Drama,
  Users,
  Activity,
  PartyPopper,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const Experiences: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-emerald-800" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-700" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-rose-700" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-indigo-700" />;
      case 'Music':
        return <Music className="w-5 h-5 text-purple-700" />;
      case 'Puzzle':
        return <Puzzle className="w-5 h-5 text-teal-700" />;
      case 'Drama':
        return <Drama className="w-5 h-5 text-orange-700" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-700" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-green-700" />;
      case 'PartyPopper':
        return <PartyPopper className="w-5 h-5 text-amber-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-stone-700" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All 10' },
    { id: 'creative', label: 'Art & Stories' },
    { id: 'inquiry', label: 'Nature & Science' },
    { id: 'motor', label: 'Logic & Body' },
    { id: 'social', label: 'Social & Stage' }
  ];

  const filterExperience = (exp: Experience) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'creative') return ['art', 'stories', 'music'].includes(exp.id);
    if (activeCategory === 'inquiry') return ['plantation', 'science'].includes(exp.id);
    if (activeCategory === 'motor') return ['puzzles', 'movement'].includes(exp.id);
    if (activeCategory === 'social') return ['roleplay', 'social', 'celebrations'].includes(exp.id);
    return true;
  };

  const filtered = EXPERIENCES.filter(filterExperience);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="experiences" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
              More Than Just A Classroom
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 tracking-tight text-balance">
              Every day brings a new opportunity to discover something wonderful.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-balance">
              Because sometimes the most meaningful lessons happen outside the textbook.
            </p>
          </div>

          {/* Interactive Category Filters & Mobile Nav */}
          <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
            <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 rounded-xl border border-stone-200/80">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Mobile swipe arrows */}
            <div className="flex sm:hidden items-center gap-1">
              <button
                onClick={() => scroll('left')}
                className="p-1.5 rounded-lg bg-stone-200/80 text-stone-700"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-1.5 rounded-lg bg-stone-200/80 text-stone-700"
                aria-label="Next card"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal sliding track on mobile, responsive grid on desktop */}
        <div
          ref={scrollRef}
          className="mt-8 flex overflow-x-auto pb-4 snap-x snap-mandatory gap-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-4 sm:overflow-visible scroll-smooth"
        >
          {filtered.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedExperience(item)}
              className="w-[74vw] max-w-[270px] shrink-0 snap-start sm:w-auto cursor-pointer bg-white rounded-2xl p-5 border border-stone-200/80 hover:border-stone-400 hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-100 group-hover:bg-stone-100 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-medium text-stone-400 font-mono">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-medium text-stone-500 uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <h3 className="text-base font-semibold text-stone-900 leading-snug group-hover:text-stone-950">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {item.shortDescription}
                </p>
              </div>

              <div className="pt-3.5 mt-3.5 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-700">
                <span className="text-stone-500 group-hover:text-stone-900 transition-colors">
                  View insights
                </span>
                <span className="text-stone-400 group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal Drawer for Selected Experience */}
        {selectedExperience && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-[#FAF8F5] rounded-2xl border border-stone-300 max-w-lg w-full p-6 sm:p-8 shadow-xl space-y-6 relative">
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white border border-stone-200">
                  {getIcon(selectedExperience.iconName)}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    {selectedExperience.tag}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    {selectedExperience.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                  Daily Classroom Reality
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {selectedExperience.shortDescription}
                </p>
              </div>

              <div className="space-y-2 bg-white rounded-xl p-4 border border-stone-200/80">
                <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                  Why It Matters
                </div>
                <p className="text-sm text-stone-700 leading-relaxed font-serif italic">
                  “{selectedExperience.detailedInsight}”
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                  Key Skills Fostered
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.skillsDeveloped.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-100 text-xs font-medium text-stone-800 border border-stone-200/60"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="px-5 py-2 text-xs sm:text-sm font-medium text-stone-800 bg-stone-200 hover:bg-stone-300 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
