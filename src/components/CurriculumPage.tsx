import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Sprout,
  Clock,
  Users,
  Check,
  ChevronRight,
  Phone,
  MessageSquare,
  Palette,
  Music,
  Puzzle,
  Drama,
  Activity,
  PartyPopper,
  GraduationCap
} from 'lucide-react';
import { PROGRAMS, EXPERIENCES, SCHOOL_PHONE, FORMATTED_PHONE, ACADEMIC_YEAR } from '../data/schoolData';
import { Experience } from '../types';
import { INITIAL_GALLERY_IMAGES } from '../data/galleryData';

interface CurriculumPageProps {
  onNavigateContact?: () => void;
  onNavigateGallery?: () => void;
}

export const CurriculumPage: React.FC<CurriculumPageProps> = ({
  onNavigateContact,
  onNavigateGallery
}) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>('playgroup');
  const [selectedExp, setSelectedExp] = useState<Experience>(EXPERIENCES[0]);

  const activeProgram = PROGRAMS.find((p) => p.id === selectedProgramId) || PROGRAMS[0];

  const whatsappUrl = `https://wa.me/91${SCHOOL_PHONE}?text=${encodeURIComponent(
    `Hello The Almond School, I would like to enquire about the ${activeProgram.name} curriculum for academic session ${ACADEMIC_YEAR}.`
  )}`;

  const getExpIcon = (id: string) => {
    switch (id) {
      case 'plantation-nature': return Sprout;
      case 'science-experiments': return Sparkles;
      case 'art-creative': return Palette;
      case 'stories-language': return BookOpen;
      case 'music-movement': return Music;
      case 'puzzles-problemsolving': return Puzzle;
      case 'roleplay-stage': return Drama;
      case 'social-group': return Users;
      case 'motor-skills': return Activity;
      case 'celebrations-events': return PartyPopper;
      default: return Sparkles;
    }
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] space-y-16 lg:space-y-24">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
            <span>Academic Session {ACADEMIC_YEAR}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Curriculum &amp; Developmental Focus
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Where little beginnings grow into beautiful possibilities. Our age-appropriate, play-first pedagogy balances academic discovery with joyful personal expression.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-stone-600">
            <span className="px-3 py-1 bg-white rounded-lg border border-stone-200">Playgroup (1.5 – 2.5 yrs)</span>
            <span className="px-3 py-1 bg-white rounded-lg border border-stone-200">Nursery (2.5 – 3.5 yrs)</span>
            <span className="px-3 py-1 bg-white rounded-lg border border-stone-200">Junior KG (3.5 – 4.5 yrs)</span>
            <span className="px-3 py-1 bg-white rounded-lg border border-stone-200">Senior KG (4.5 – 5.5 yrs)</span>
          </div>
        </div>
      </section>

      {/* 2. 📚 OUR PROGRAMS · ACADEMIC SESSION 2026–27 */}
      <section id="programs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Structured Early Education
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              Our Programs · Academic Session {ACADEMIC_YEAR}
            </h2>
          </div>
          <div className="text-xs text-stone-500 font-medium">
            Admissions Open · Individual Attention · Nurturing Faculty
          </div>
        </div>

        {/* Program Tabs */}
        <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none">
          {PROGRAMS.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setSelectedProgramId(prog.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer flex items-center gap-2 ${
                selectedProgramId === prog.id
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <span>{prog.name}</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                selectedProgramId === prog.id ? 'bg-stone-800 text-amber-300' : 'bg-stone-100 text-stone-500'
              }`}>
                {prog.ageRange}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Program Showcase Card */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                <span>{activeProgram.ageRange}</span>
                <span>•</span>
                <span>{activeProgram.batchSize}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                {activeProgram.name}
              </h3>
              <p className="text-base text-stone-700 font-medium italic">
                {activeProgram.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              {activeProgram.description}
            </p>

            {/* Curriculum Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Curriculum Highlights &amp; Daily Routine:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeProgram.curriculumHighlights.map((hl) => (
                  <div
                    key={hl}
                    className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200/80 text-xs text-stone-800 flex items-start gap-2"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Developmental Outcomes */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Key Developmental Milestones:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProgram.keyOutcomes.map((ko) => (
                  <span
                    key={ko}
                    className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-medium"
                  >
                    ✦ {ko}
                  </span>
                ))}
              </div>
            </div>

            {/* Timings and Action */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <Clock className="w-4 h-4 text-stone-500" />
                <span><strong>Timings:</strong> {activeProgram.timings}</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${SCHOOL_PHONE}`}
                  className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call: {FORMATTED_PHONE}</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>

          {/* Program Visual & Overview Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="aspect-4/3 rounded-2xl overflow-hidden border border-stone-200 shadow-sm relative">
              <img
                src={
                  selectedProgramId === 'playgroup'
                    ? INITIAL_GALLERY_IMAGES[0]?.src
                    : selectedProgramId === 'nursery'
                    ? INITIAL_GALLERY_IMAGES[1]?.src
                    : selectedProgramId === 'junior-kg'
                    ? INITIAL_GALLERY_IMAGES[2]?.src
                    : INITIAL_GALLERY_IMAGES[3]?.src
                }
                alt={activeProgram.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-stone-950/75 backdrop-blur-md text-white text-xs font-medium">
                Active Classroom Focus
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2 text-xs text-stone-700">
              <div className="font-bold text-stone-900 text-sm">Every Child Matters in Our Classrooms:</div>
              <p className="leading-relaxed">
                We understand that every child is different. We respect individual interests, abilities, personalities and learning pace.
              </p>
              <div className="pt-1 text-[11px] text-stone-500 italic">
                “Small steps today. Confident strides tomorrow.”
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ✨ MORE THAN JUST A CLASSROOM (10 Experiential Learning Methods) */}
      <section id="experiences" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            ✨ Hands-on Experiential Learning
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900">
            More Than Just a Classroom
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            At The Almond School, every day brings a new opportunity to discover something wonderful. Because sometimes the most meaningful lessons happen outside the textbook.
          </p>
        </div>

        {/* 10 Experiences Grid / Sliding on Mobile */}
        <div className="flex overflow-x-auto pb-4 gap-3.5 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:overflow-visible snap-x">
          {EXPERIENCES.map((exp, idx) => {
            const IconComponent = getExpIcon(exp.id);
            const isSelected = selectedExp.id === exp.id;
            return (
              <div
                key={exp.id}
                onClick={() => setSelectedExp(exp)}
                className={`w-[75vw] max-w-[260px] shrink-0 snap-start sm:w-auto p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-white border-stone-900 shadow-md ring-2 ring-stone-900/10'
                    : 'bg-white border-stone-200 hover:border-stone-400 hover:shadow-xs'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
                    <span>Exp {String(idx + 1).padStart(2, '0')}</span>
                    <IconComponent className={`w-4 h-4 ${isSelected ? 'text-stone-900' : 'text-stone-500'}`} />
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 leading-snug">
                    {exp.title}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {exp.shortDescription}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-medium">
                  <span>{exp.tag}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Experience Drawer / Feature Banner */}
        <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-800">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>In-Depth Focus · {selectedExp.tag}</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-stone-900">
              {selectedExp.title}
            </h3>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              {selectedExp.detailedInsight || selectedExp.shortDescription}
            </p>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/80 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Skills &amp; Milestones Developed:
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-stone-700">
                {selectedExp.skillsDeveloped.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-md bg-white border border-stone-200">
                    • {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <div className="aspect-4/3 rounded-2xl overflow-hidden border border-stone-200 shadow-xs">
              <img
                src={INITIAL_GALLERY_IMAGES[4]?.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {onNavigateGallery && (
              <button
                onClick={onNavigateGallery}
                className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors text-center cursor-pointer"
              >
                Browse Photo Gallery →
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 4. Bottom Contact & Admissions Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-stone-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Admissions Open 2026–27
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Give Your Child A Confident, Joyful Start
            </h3>
            <p className="text-sm text-stone-300 max-w-xl">
              Playgroup • Nursery • Junior KG • Senior KG. Inquire today for seat availability and personalized campus walkthroughs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${SCHOOL_PHONE}`}
              className="px-5 py-3 rounded-xl bg-white text-stone-900 hover:bg-stone-100 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call: {FORMATTED_PHONE}</span>
            </a>
            {onNavigateContact && (
              <button
                onClick={onNavigateContact}
                className="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                Contact Admissions Office →
              </button>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
