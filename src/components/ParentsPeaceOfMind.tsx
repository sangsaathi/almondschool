import React from 'react';
import { Heart, Smile, ShieldCheck, MessageCircle, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { SCHOOL_PHONE, FORMATTED_PHONE, ACADEMIC_YEAR } from '../data/schoolData';
import schoolLogo from './logo.webp';

export const ParentsPeaceOfMind: React.FC = () => {
  const parentPromises = [
    {
      title: 'Understood, Not Just Taught',
      desc: 'Educators who observe your child’s emotional subtleties, preferences, and developmental milestones with tenderness.'
    },
    {
      title: 'Welcomed Questions',
      desc: 'No inquiry is silly or dismissed. Every curiosity is treated as a doorway to deeper scientific and life understanding.'
    },
    {
      title: 'Appreciated Efforts',
      desc: 'Celebrating the courage to try, stumble, and rise again — building resilience before perfection.'
    },
    {
      title: 'Transparent Partnership',
      desc: 'Daily developmental snapshots, open-door access to teachers, and collaborative guidance between home and school.'
    }
  ];

  const whatsappUrl = `https://wa.me/91${SCHOOL_PHONE}?text=${encodeURIComponent(
    `Hello The Almond School, I would like to schedule a campus visit for the ${ACADEMIC_YEAR} academic session.`
  )}`;

  return (
    <section id="parents" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Top Split: Child's Joy vs Parent's Peace of Mind */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: A School Where Children Love To Come */}
          <div className="bg-white rounded-3xl p-6 sm:p-9 border border-stone-200/80 shadow-xs flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-stone-500">
                <Smile className="w-4 h-4 text-amber-600" />
                <span>The Child's Experience</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-stone-900 leading-tight">
                A school where children love to come.
              </h3>

              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-100/80 border border-stone-200/70 text-base sm:text-lg font-serif italic text-stone-900">
                “I can't wait to go to school!”
              </div>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                We want your child's school experience to be more than just "going to school." A place where children look forward to seeing their teachers, meeting their friends, trying new activities and sharing their little stories when they return home.
              </p>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Because when children are happy, comfortable and curious, learning becomes a beautiful journey.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-medium text-stone-500">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Smiles at arrival, joyful stories at dismissal</span>
            </div>
          </div>

          {/* Card 2: For Parents, Peace of Mind Matters Too */}
          <div className="bg-stone-100/70 rounded-3xl p-6 sm:p-9 border border-stone-200/90 shadow-xs flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-stone-500">
                <Heart className="w-4 h-4 text-rose-600" />
                <span>For Parents</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-stone-900 leading-tight">
                Peace of mind matters too.
              </h3>

              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                Choosing your child's first school is a big decision. You want a place where your child is not just taught, but understood.
              </p>

              {/* Horizontal sliding track on mobile for the 4 promises */}
              <div className="flex overflow-x-auto pb-2 snap-x snap-mandatory gap-3 -mx-2 px-2 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 sm:overflow-visible">
                {parentPromises.map((item) => (
                  <div
                    key={item.title}
                    className="w-[66vw] max-w-[210px] shrink-0 snap-start sm:w-auto p-3.5 rounded-xl bg-white/90 border border-stone-200/60 space-y-1"
                  >
                    <div className="text-xs font-semibold text-stone-900 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </div>
                    <div className="text-[11px] text-stone-600 leading-relaxed line-clamp-3">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-stone-600 text-xs leading-relaxed">
                At The Almond School, we build a warm partnership with parents, because a child's growth is strongest when school and home work together.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                Open communication always
              </span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-stone-900 hover:text-stone-700 underline underline-offset-4 flex items-center gap-1"
              >
                <span>WhatsApp Coordinator →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Big Finale CTA Block: Little Beginnings. Big Possibilities. */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-stone-300 shadow-xs relative overflow-hidden">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={schoolLogo}
                alt="The Almond School Logo"
                className="h-9 w-auto object-contain"
              />
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Little Beginnings · Big Possibilities
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-stone-900 leading-tight">
              Your child's journey begins with the first step.
            </h2>

            <p className="text-base sm:text-lg font-serif italic text-stone-700">
              Let that step be filled with joy, discovery, confidence and care.
            </p>

            <div className="text-stone-600 text-xs sm:text-sm leading-relaxed space-y-1">
              <p className="font-semibold text-stone-900 text-base">THE ALMOND SCHOOL</p>
              <p>Nurturing Minds, Shaping Futures.</p>
              <p className="text-xs text-stone-500">
                Admissions Open | {ACADEMIC_YEAR} · Playgroup · Nursery · Junior KG · Senior KG
              </p>
            </div>

            {/* Direct Action Buttons without Forms */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 active:scale-[0.98] transition-all rounded-xl shadow-xs whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Enquire for Admission on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-stone-300" />
              </a>

              <a
                href={`tel:${SCHOOL_PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-medium text-stone-900 bg-stone-100 hover:bg-stone-200 active:scale-[0.98] transition-all rounded-xl border border-stone-300 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-stone-700" />
                <span>Call {FORMATTED_PHONE}</span>
              </a>
            </div>

            <p className="text-xs text-stone-500 pt-1">
              Come, discover a happy beginning for your child. Campus walkthroughs open Monday – Saturday.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
