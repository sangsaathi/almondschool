import React from 'react';
import { ArrowRight, Phone, MessageSquare, Compass, Sun, Camera, Sparkles, BookOpen } from 'lucide-react';
import { SCHOOL_PHONE, FORMATTED_PHONE, ACADEMIC_YEAR } from '../data/schoolData';
import schoolLogo from './logo.webp';
import { INITIAL_GALLERY_IMAGES } from '../data/galleryData';

interface HeroProps {
  onNavigate?: (page: 'about' | 'curriculum' | 'gallery' | 'contact' | 'faq') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/91${SCHOOL_PHONE}?text=${encodeURIComponent(
    'Hello The Almond School, I would like to enquire about admissions for the 2026–27 session.'
  )}`;

  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typographic & Proposition Flow */}
          <div className="lg:col-span-7 space-y-7">
            {/* Logo + Unboxed metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-stone-600">
              <img
                src={schoolLogo}
                alt="The Almond School Emblem"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <span className="text-stone-900 font-semibold tracking-normal">The Almond School</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Admissions Open {ACADEMIC_YEAR}</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Playgroup to Senior KG</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-stone-900 leading-[1.15] text-balance font-serif">
                Where little beginnings grow into <span className="italic font-normal text-stone-700">beautiful possibilities.</span>
              </h1>
              <p className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed text-balance">
                A place where children learn, explore, express and grow — with a smile.
              </p>
            </div>

            {/* Philosophy Narrative */}
            <p className="text-stone-600 leading-relaxed max-w-2xl text-base">
              At The Almond School, we believe the first years of education should be filled with joy, curiosity, confidence and meaningful experiences. Our nurturing environment encourages children to learn naturally through play, exploration and discovery.
            </p>

            {/* 5 Cornerstones unboxed inline typography */}
            <div className="py-2.5 px-4 bg-stone-100/70 rounded-xl inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-medium text-stone-700 border border-stone-200/60">
              <span className="text-emerald-800">🌱</span>
              <span className="hover:text-stone-950 transition-colors">Play</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="hover:text-stone-950 transition-colors">Explore</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="hover:text-stone-950 transition-colors">Create</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="hover:text-stone-950 transition-colors">Express</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="hover:text-stone-950 transition-colors">Grow</span>
            </div>

            {/* Direct Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 active:scale-[0.98] transition-all rounded-xl shadow-xs whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Enquire for Admission</span>
              </a>

              <a
                href={`tel:${SCHOOL_PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 active:scale-[0.98] transition-all rounded-xl border border-stone-200/80 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-stone-600" />
                <span>Call {FORMATTED_PHONE}</span>
              </a>

              {onNavigate && (
                <>
                  <button
                    onClick={() => onNavigate('curriculum')}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-50 border border-stone-200 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Curriculum &amp; Programs →</span>
                  </button>

                  <button
                    onClick={() => onNavigate('gallery')}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100/80 border border-amber-200 rounded-xl transition-colors cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5 text-amber-700" />
                    <span>Photo Gallery</span>
                  </button>
                </>
              )}
            </div>

            {/* Quick trust reassurance */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Admissions Desk: {FORMATTED_PHONE}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                Playgroup • Nursery • Junior KG • Senior KG
              </span>
            </div>
          </div>

          {/* Right Column: Serene Environment Showcase with School Logo & Real Gallery Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-white p-6 sm:p-7 border border-stone-200 shadow-sm space-y-5">
              
              {/* Header with school logo */}
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={schoolLogo}
                    alt="The Almond School"
                    className="h-10 sm:h-11 w-auto object-contain"
                  />
                  <div className="space-y-0.5">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-stone-400">
                      The Almond School
                    </div>
                    <div className="text-sm font-semibold text-stone-900">
                      Nurturing Minds, Shaping Futures
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center text-xs">
                  🌱
                </div>
              </div>

              {/* Real Classroom photo from gallery - clean, no text on photo */}
              <div
                onClick={() => onNavigate && onNavigate('gallery')}
                className="relative aspect-4/3 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 group cursor-pointer"
              >
                <img
                  src={INITIAL_GALLERY_IMAGES[0]?.src}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>


              {/* Quick Jump Bar */}
              {onNavigate && (
                <div className="pt-2 flex items-center justify-between text-xs text-stone-600 border-t border-stone-100">
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-stone-950 font-medium"
                  >
                    About Us →
                  </button>
                  <button
                    onClick={() => onNavigate('curriculum')}
                    className="hover:text-stone-950 font-medium"
                  >
                    Curriculum →
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="hover:text-stone-950 font-medium text-emerald-700"
                  >
                    Contact Desk →
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Full-width credential strip */}
        <div className="mt-14 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-600 text-xs sm:text-sm">
          <div className="space-y-1">
            <div className="font-serif font-bold text-lg sm:text-xl text-stone-900">Play-First</div>
            <p className="text-stone-500 text-xs">Joyful hands-on discovery</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif font-bold text-lg sm:text-xl text-stone-900">Nurturing Care</div>
            <p className="text-stone-500 text-xs">Safe, valued &amp; encouraged</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif font-bold text-lg sm:text-xl text-stone-900">Life Skills</div>
            <p className="text-stone-500 text-xs">Beyond textbooks &amp; worksheets</p>
          </div>
          <div className="space-y-1">
            <div className="font-serif font-bold text-lg sm:text-xl text-stone-900">Session 2026–27</div>
            <p className="text-stone-500 text-xs">Playgroup to Senior KG</p>
          </div>
        </div>

      </div>
    </section>
  );
};
