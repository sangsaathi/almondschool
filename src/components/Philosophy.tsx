import React, { useState } from 'react';
import { Compass, Sparkles, Smile, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const dimensions = [
    {
      title: 'Discovering Who I Am',
      summary: 'Self-awareness, emotional grounding & joyful autonomy',
      description:
        'Children learn to recognize their emotions, express their choices, identify their unique interests, and build an unshakable sense of belonging.',
      icon: Smile,
      outcome: 'Confidence in their own thoughts and feelings'
    },
    {
      title: 'Exploring What I Can Do',
      summary: 'Curiosity, motor coordination & fearless experimentation',
      description:
        'Through trial, tinkering, building, and creating, children realize their hands can mold clay, assemble towers, cultivate plants, and solve real puzzles.',
      icon: Sparkles,
      outcome: 'A natural "I can do it!" problem-solving mindset'
    },
    {
      title: 'Embracing the World',
      summary: 'Nature, community, empathy & active communication',
      description:
        'Learning to listen with empathy, share laughter with friends, respect living creatures, and marvel at the physical wonders of nature.',
      icon: HeartHandshake,
      outcome: 'Kindness, cooperative communication, and worldly wonder'
    }
  ];

  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
            A Happy Beginning Starts Here
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight text-balance">
            The early years are not just about learning ABCs and 123s.
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 font-serif italic text-balance">
            They are about discovering who I am, what I can do and how wonderful the world around me can be.
          </p>
        </div>

        {/* Narrative & Core Manifesto Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base text-stone-600 leading-relaxed">
              At The Almond School, we provide a warm and stimulating environment where children feel safe, valued, heard and encouraged.
            </p>
            <p className="text-base text-stone-600 leading-relaxed">
              Through play-based learning, creative activities, hands-on experiences and meaningful interactions, we help children develop the skills they need for life — not just for the classroom.
            </p>

            {/* Standout Quote Card */}
            <div className="p-6 rounded-2xl bg-stone-100/80 border border-stone-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
                <Compass className="w-3.5 h-3.5 text-stone-600" />
                Our Core Promise
              </div>
              <blockquote className="text-lg font-medium text-stone-900 leading-snug">
                “We don't just prepare children for the next class. We help prepare them for the world.”
              </blockquote>
              <p className="text-xs text-stone-500">
                Foundational habits of curiosity, empathy, and resilience that last a lifetime.
              </p>
            </div>
          </div>

          {/* Interactive Dimensions Tab Showcase */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                The 3 Exploratory Dimensions
              </span>
              <span className="text-xs text-stone-400">Click to explore each facet</span>
            </div>

            {/* Tabs */}
            <div className="grid grid-cols-3 gap-2 p-1 bg-stone-100 rounded-xl">
              {dimensions.map((dim, idx) => {
                const Icon = dim.icon;
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={dim.title}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center justify-center gap-2 py-2.5 px-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                      isSelected
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-stone-900' : 'text-stone-400'}`} />
                    <span className="hidden sm:inline truncate">{dim.title.replace('Discovering ', '').replace('Exploring ', '').replace('Embracing ', '')}</span>
                    <span className="sm:hidden truncate">0{idx + 1}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Details */}
            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-stone-900">
                  {dimensions[activeTab].title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-stone-500">
                  {dimensions[activeTab].summary}
                </p>
              </div>

              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                {dimensions[activeTab].description}
              </p>

              <div className="pt-3 border-t border-stone-100 flex items-center gap-2 text-xs font-medium text-stone-700">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span><strong className="text-stone-900">Enduring Outcome:</strong> {dimensions[activeTab].outcome}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
