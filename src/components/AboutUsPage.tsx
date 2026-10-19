import React from 'react';
import {
  Heart,
  Sparkles,
  Smile,
  ShieldCheck,
  Compass,
  ArrowRight,
  Phone,
  MessageSquare,
  Users,
  Lightbulb,
  CheckCircle2,
  TreePine,
  Award,
  MapPin,
  GraduationCap,
  Quote
} from 'lucide-react';
import {
  SCHOOL_PHONE,
  FORMATTED_PHONE,
  ACADEMIC_YEAR,
  PILLARS,
  SCHOOL_ADDRESS,
  DIRECTOR_NAME,
  HEADMISTRESS_NAME
} from '../data/schoolData';
import schoolLogo from './logo.webp';
import directorImage from './director.webp';
import { INITIAL_GALLERY_IMAGES } from '../data/galleryData';

interface AboutUsPageProps {
  onNavigateCurriculum?: () => void;
  onNavigateContact?: () => void;
  onNavigateGallery?: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onNavigateCurriculum,
  onNavigateContact,
  onNavigateGallery
}) => {
  const whatsappUrl = `https://wa.me/91${SCHOOL_PHONE}?text=${encodeURIComponent(
    'Hello The Almond School, I would like to know more about your philosophy and admissions for 2026–27.'
  )}`;

  const confidenceSteps = [
    {
      step: '01',
      title: 'Raising a Little Hand',
      desc: 'Encouraging curiosity without hesitation in a welcoming group circle.'
    },
    {
      step: '02',
      title: 'Making a First Friend',
      desc: 'Sharing materials, learning gentle words, and celebrating together.'
    },
    {
      step: '03',
      title: 'Exploring Without Fear',
      desc: 'Trying unfamiliar textures, paints, and open-ended questions safely.'
    },
    {
      step: '04',
      title: 'Stepping Onto the Stage',
      desc: 'Reciting rhymes, wearing fun costume props, and feeling heard.'
    },
    {
      step: '05',
      title: 'Saying "I Can Do It!"',
      desc: 'The joyful self-belief that stays with them throughout life.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5] space-y-16 lg:space-y-24">
      
      {/* 1. Page Header & Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
            <TreePine className="w-3.5 h-3.5 text-amber-700" />
            <span>About The Almond School</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Nurturing Minds, Shaping Futures
          </h1>

          <p className="text-lg sm:text-xl text-stone-700 font-serif italic">
            “Where little beginnings grow into beautiful possibilities.”
          </p>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal pt-2">
            A place where children learn, explore, express and grow — with a smile. At The Almond School, we believe the first years of education should be filled with joy, curiosity, confidence and meaningful experiences.
          </p>
        </div>
      </section>

      {/* 2. 🎓 SCHOOL LEADERSHIP & MENTORSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-stone-900 text-stone-100">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span>School Leadership</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Guided by Vision, Devotion &amp; Care
          </h2>

          <p className="text-xs sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            At The Almond School, our leadership team is dedicated to shaping an inspiring, emotionally safe, and enriching environment for every child.
          </p>
        </div>

        {/* Leadership Grid: Director & Headmistress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Director Card with director.webp */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
                <div className="relative shrink-0">
                  <img
                    src={directorImage}
                    alt={DIRECTOR_NAME}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border-2 border-amber-200 shadow-md bg-stone-100"
                  />
                  <span className="absolute -bottom-2 sm:-bottom-2 left-1/2 sm:left-auto sm:right-0 -translate-x-1/2 sm:translate-x-0 bg-stone-900 text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                    Director
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                    School Leadership
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                    {DIRECTOR_NAME}
                  </h3>
                  <p className="text-xs font-medium text-stone-500">
                    Director, The Almond School
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 text-xs sm:text-sm text-stone-700 leading-relaxed italic space-y-2">
                <Quote className="w-4 h-4 text-amber-600/60 inline-block mr-1 -mt-1" />
                <span>
                  &ldquo;We don&apos;t just prepare children for the next class. We help prepare them for the world. Every child is born with natural curiosity, and when provided with genuine love, thoughtful guidance, and freedom to explore, their true potential flourishes without limits.&rdquo;
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Leading the strategic vision and foundational excellence of The Almond School, ensuring state-of-the-art early education standards, safety, and holistic growth for every learner.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="flex items-center gap-1.5 font-medium text-stone-700">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>Director&apos;s Desk</span>
              </span>
              <span>The Almond School</span>
            </div>
          </div>

          {/* Headmistress Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-amber-50 text-amber-900 flex flex-col items-center justify-center border-2 border-amber-200 shadow-md shrink-0">
                  <GraduationCap className="w-10 h-10 text-amber-700 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                    Leadership
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-semibold text-rose-800 uppercase tracking-wider">
                    Academic &amp; Student Well-being
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                    {HEADMISTRESS_NAME}
                  </h3>
                  <p className="text-xs font-medium text-stone-500">
                    Headmistress, The Almond School
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 text-xs sm:text-sm text-stone-700 leading-relaxed italic space-y-2">
                <Quote className="w-4 h-4 text-rose-600/60 inline-block mr-1 -mt-1" />
                <span>
                  &ldquo;A warm smile in the morning, a listening ear during circle time, and celebrating small everyday victories — this is how children build lasting confidence. Our teachers and I ensure each child feels cherished and heard every single day.&rdquo;
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Overseeing child developmental milestones, mindful settling-in routines, teacher mentorship, and everyday joyful classroom curriculum from Playgroup to Senior KG.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="flex items-center gap-1.5 font-medium text-stone-700">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Academic &amp; Pastoral Head</span>
              </span>
              <span>The Almond School</span>
            </div>
          </div>

        </div>

        {/* Campus Location & Visit Note */}
        <div className="p-5 sm:p-6 rounded-2xl bg-stone-100/80 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-white text-stone-800 flex items-center justify-center shrink-0 shadow-2xs">
              <MapPin className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <div className="text-xs font-bold text-stone-900">Campus Location:</div>
              <div className="text-xs text-stone-600 leading-relaxed">
                {SCHOOL_ADDRESS}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${SCHOOL_PHONE}`}
              className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              Call Campus Desk
            </a>
            {onNavigateContact && (
              <button
                onClick={onNavigateContact}
                className="px-4 py-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                Book Walkthrough →
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. 🌱 A HAPPY BEGINNING STARTS HERE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 lg:p-14 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              🌱 Our Early Years Philosophy
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-snug">
              A Happy Beginning Starts Here
            </h2>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                The early years are not just about learning ABCs and 123s. They are about discovering who I am, what I can do and how wonderful the world around me can be.
              </p>
              <p>
                At The Almond School, we provide a warm and stimulating environment where children feel <strong>safe, valued, heard and encouraged</strong>.
              </p>
              <p>
                Through play-based learning, creative activities, hands-on experiences and meaningful interactions, we help children develop the skills they need for life — not just for the classroom.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border-l-4 border-amber-600 text-stone-800 text-sm font-medium">
              We don&apos;t just prepare children for the next class. We help prepare them for the world.
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Play-Based Foundations
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Individualized Pace
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Warm Teacher Bonding
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden border border-stone-200 shadow-md">
              <img
                src={INITIAL_GALLERY_IMAGES[0]?.src}
                alt="Children exploring in nature"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-xs text-stone-600 space-y-1">
              <div className="font-semibold text-stone-900">Joyful Natural Learning</div>
              <p>Sensory exploration and tactile discoveries in our peaceful classrooms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 💛 WHY CHOOSE THE ALMOND SCHOOL? (7 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            💛 Seven Guiding Pillars
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900">
            Why Choose The Almond School?
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Everything we do is designed around the emotional, social, physical, and cognitive growth of young learners.
          </p>
        </div>

        {/* Sliding on mobile, responsive grid on desktop */}
        <div className="flex overflow-x-auto pb-4 gap-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible snap-x">
          {PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="w-[82vw] max-w-[340px] shrink-0 snap-start sm:w-auto p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-md hover:border-stone-400 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-stone-400 text-xs font-mono">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-xl">
                    {idx === 0 && '🌈'}
                    {idx === 1 && '🌱'}
                    {idx === 2 && '🎨'}
                    {idx === 3 && '🗣️'}
                    {idx === 4 && '🤝'}
                    {idx === 5 && '🧠'}
                    {idx === 6 && '🌟'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-serif">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-semibold text-stone-500">
                {pillar.highlight}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 🌟 GROWING CONFIDENCE, ONE LITTLE STEP AT A TIME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 space-y-10 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-800 text-amber-300 border border-stone-700">
              <Sparkles className="w-3.5 h-3.5" />
              Nurturing Child Confidence
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Growing Confidence, One Little Step at a Time
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              We believe confidence doesn&apos;t appear overnight. It grows when a child is encouraged to raise their hand, answer a question, make a new friend, try something for the first time, stand on a stage or simply say, <span className="text-amber-200 font-semibold">&ldquo;I can do it!&rdquo;</span>
            </p>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              At The Almond School, we create opportunities for children to participate, express themselves and celebrate their little achievements.
            </p>

            <div className="text-base sm:text-lg font-serif italic text-amber-200">
              Small steps today. Confident strides tomorrow.
            </div>
          </div>

          {/* Horizontal Step sequence */}
          <div className="flex overflow-x-auto pb-4 gap-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:overflow-visible snap-x">
            {confidenceSteps.map((s) => (
              <div
                key={s.step}
                className="w-[65vw] max-w-[220px] shrink-0 snap-start sm:w-auto p-5 rounded-2xl bg-stone-800/80 border border-stone-700 space-y-2"
              >
                <div className="text-xl font-mono font-bold text-amber-400">
                  {s.step}
                </div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {s.title}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 💫 OUR BELIEF & 🏫 A SCHOOL WHERE CHILDREN LOVE TO COME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Our Belief Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-amber-50/60 border border-amber-200 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-amber-900 border border-amber-200">
            💫 Our Guiding Belief
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight">
            Every Child is Unique. Every Child Can Learn. Every Child Deserves to Shine.
          </h3>

          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            We don&apos;t compare children. We encourage them to become the best version of themselves. Every little milestone is acknowledged, and every spark of wonder is celebrated.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <span className="w-8 h-px bg-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
              The Almond School Promise
            </span>
          </div>
        </div>

        {/* A School Where Children Love To Come Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200">
            🏫 A School Children Love
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight">
            &ldquo;I Can&apos;t Wait to Go to School!&rdquo;
          </h3>

          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            We want your child&apos;s school experience to be more than just &ldquo;going to school.&rdquo; A place where children look forward to seeing their teachers, meeting their friends, trying new activities, and sharing their little stories when they return home.
          </p>

          <p className="text-xs sm:text-sm text-stone-500 italic">
            Because when children are happy, comfortable and curious, learning becomes a beautiful journey.
          </p>
        </div>

      </section>

      {/* 6. 💕 FOR PARENTS, PEACE OF MIND MATTERS TOO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 bg-stone-100 px-3 py-1 rounded-full">
              💕 For Parents, Peace of Mind Matters Too
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              A Warm Partnership With Every Family
            </h3>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Choosing your child&apos;s first school is a big decision. You want a place where your child is not just taught, but understood. A place where their questions are welcomed, their efforts are appreciated, and their little achievements are celebrated.
            </p>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
              At The Almond School, we build a warm partnership with parents, because a child&apos;s growth is strongest when school and home work together.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${SCHOOL_PHONE}`}
                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Admissions: {FORMATTED_PHONE}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              {onNavigateGallery && (
                <button
                  onClick={onNavigateGallery}
                  className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-colors"
                >
                  View Photo Gallery →
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 space-y-3 text-xs text-stone-700">
            <h4 className="font-bold text-sm text-stone-900">Our Everyday Commitments:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Open-door coordinator & teacher communication</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Gentle, anxiety-free settling-in period</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>High hygiene, child-safe infrastructure & CCTV</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Transparent developmental updates & portfolios</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Bottom Callout: Little Beginnings. Big Possibilities. */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-amber-50/80 border border-amber-200 space-y-4 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Little Beginnings. Big Possibilities.
          </h3>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            Your child&apos;s journey begins with the first step. Let that step be filled with joy, discovery, confidence and care.
          </p>
          <div className="pt-2 text-xs font-semibold text-stone-500">
            Admissions Open | Academic Session {ACADEMIC_YEAR} · Playgroup • Nursery • Junior KG • Senior KG
          </div>
        </div>
      </section>

    </div>
  );
};
