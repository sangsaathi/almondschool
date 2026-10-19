import React, { useState } from 'react';
import { PROGRAMS, SCHOOL_PHONE, FORMATTED_PHONE } from '../data/schoolData';
import { Check, Clock, Users, CalendarCheck2, MessageSquare, Phone } from 'lucide-react';

export const Programs: React.FC = () => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>('playgroup');
  const [childAgeInput, setChildAgeInput] = useState<number>(2.5);

  const activeProgram = PROGRAMS.find((p) => p.id === selectedProgramId) || PROGRAMS[0];

  const getSuggestedProgram = (age: number) => {
    if (age < 2.5) return 'playgroup';
    if (age < 3.5) return 'nursery';
    if (age < 4.5) return 'junior-kg';
    return 'senior-kg';
  };

  const handleAgeChange = (val: number) => {
    setChildAgeInput(val);
    const suggested = getSuggestedProgram(val);
    setSelectedProgramId(suggested);
  };

  const whatsappProgramUrl = `https://wa.me/91${SCHOOL_PHONE}?text=${encodeURIComponent(
    `Hello The Almond School, I would like to enquire about admissions for the ${activeProgram.name} program for the 2026–27 session.`
  )}`;

  return (
    <section id="programs" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
            Our Programs · Academic Session 2026–27
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 tracking-tight text-balance">
            Four gentle stages of early childhood education.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-balance">
            Designed to match each stage of development, from first steps away from home to confident strides into primary school.
          </p>
        </div>

        {/* Interactive Age Matcher Tool */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-stone-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-1 max-w-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
              <CalendarCheck2 className="w-4 h-4 text-emerald-700" />
              <span>Program Recommendation Tool</span>
            </div>
            <div className="text-sm sm:text-base font-semibold text-stone-900">
              How old will your child be as of June 2026?
            </div>
            <p className="text-xs text-stone-500">
              Slide to match your child's age with their ideal early learning milestone group.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="w-full sm:w-60 space-y-1">
              <div className="flex justify-between text-xs font-medium text-stone-600">
                <span>1.5 yrs</span>
                <span className="text-stone-900 font-semibold tabular-nums">{childAgeInput.toFixed(1)} Years Old</span>
                <span>6+ yrs</span>
              </div>
              <input
                type="range"
                min="1.5"
                max="6"
                step="0.5"
                value={childAgeInput}
                onChange={(e) => handleAgeChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-900"
              />
            </div>

            <div className="px-3.5 py-1.5 bg-stone-100 rounded-xl text-xs font-medium text-stone-700 border border-stone-200/60 whitespace-nowrap">
              Recommended: <strong className="text-stone-950 capitalize">{activeProgram.name}</strong>
            </div>
          </div>
        </div>

        {/* Horizontal sliding track on mobile for program selector cards */}
        <div className="flex overflow-x-auto pb-2 snap-x snap-mandatory gap-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible">
          {PROGRAMS.map((prog) => {
            const isSelected = prog.id === selectedProgramId;
            return (
              <button
                key={prog.id}
                onClick={() => setSelectedProgramId(prog.id)}
                className={`w-[68vw] max-w-[240px] shrink-0 snap-start sm:w-auto text-left p-4 sm:p-5 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-stone-900 text-stone-100 border-stone-900 shadow-sm'
                    : 'bg-white text-stone-800 border-stone-200/80 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                <div className="space-y-1">
                  <span className={`text-[11px] font-mono tracking-wider ${isSelected ? 'text-stone-400' : 'text-stone-400'}`}>
                    {prog.ageRange}
                  </span>
                  <div className={`text-base sm:text-lg font-semibold tracking-tight ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                    {prog.name}
                  </div>
                </div>
                <p className={`mt-2 text-xs line-clamp-2 leading-relaxed ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  {prog.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Program Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 border border-stone-200/80 shadow-xs space-y-7">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-stone-100 pb-7">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3 text-xs font-medium text-stone-500">
                <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 font-semibold">
                  Age: {activeProgram.ageRange}
                </span>
                <span aria-hidden="true">·</span>
                <span>Admissions 2026–27 Open</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-stone-900">
                {activeProgram.name}
              </h3>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {activeProgram.description}
              </p>
            </div>

            {/* Direct Contact Buttons (No Form) */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <a
                href={whatsappProgramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 active:scale-[0.98] transition-all rounded-xl shadow-xs whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href={`tel:${SCHOOL_PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-xl border border-stone-200 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-stone-600" />
                <span>Call {FORMATTED_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Curriculum & Key Outcomes Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
            
            {/* Highlights */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                Curriculum & Developmental Focus
              </div>
              <ul className="space-y-2">
                {activeProgram.curriculumHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Outcomes & Daily Log */}
            <div className="lg:col-span-5 space-y-5">
              
              <div className="bg-stone-50/80 rounded-2xl p-4 sm:p-5 border border-stone-200/70 space-y-3">
                <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                  Key Milestones Reached
                </div>
                <div className="space-y-2">
                  {activeProgram.keyOutcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Classroom Logistics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/60">
                  <Clock className="w-4 h-4 text-stone-500 shrink-0" />
                  <div>
                    <div className="text-[10px] text-stone-500 font-medium">Timings</div>
                    <div className="text-xs font-semibold text-stone-900">{activeProgram.timings}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/60">
                  <Users className="w-4 h-4 text-stone-500 shrink-0" />
                  <div>
                    <div className="text-[10px] text-stone-500 font-medium">Attention Ratio</div>
                    <div className="text-xs font-semibold text-stone-900">{activeProgram.batchSize}</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
