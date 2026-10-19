import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  Mail,
  Send,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { SCHOOL_PHONE, FORMATTED_PHONE, ACADEMIC_YEAR, SCHOOL_ADDRESS } from '../data/schoolData';
import schoolLogo from './logo.webp';

export const ContactUsPage: React.FC = () => {
  const [tourDate, setTourDate] = useState('');
  const [tourTime, setTourTime] = useState('10:00 AM');
  const [childProgram, setChildProgram] = useState('Nursery');
  const [parentNote, setParentNote] = useState('');
  const [scheduled, setScheduled] = useState(false);

  const baseWhatsappUrl = `https://wa.me/91${SCHOOL_PHONE}`;

  const handleQuickTour = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello The Almond School, I would like to schedule a campus tour on ${tourDate || 'this week'} at ${tourTime} for ${childProgram} admissions (Session ${ACADEMIC_YEAR}). ${parentNote ? `Note: ${parentNote}` : ''}`;
    const directUrl = `${baseWhatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(directUrl, '_blank');
    setScheduled(true);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
            <MapPin className="w-3.5 h-3.5 text-stone-600" />
            <span>Connect with The Almond School</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Contact Admissions &amp; Campus Desk
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            We welcome parents to visit our classrooms, walk our gardens, and observe how our children learn and thrive. We are here to answer your questions.
          </p>
        </div>

        {/* Primary Contact Channels 3-Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Phone */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-serif">
                Admissions Helpline
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Direct telephonic consultation for admissions, eligibility criteria, and fee structure.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${SCHOOL_PHONE}`}
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {FORMATTED_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-serif">
                Instant WhatsApp Desk
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Get syllabus, program brochures, and admissions guidance sent instantly to your WhatsApp.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`${baseWhatsappUrl}?text=${encodeURIComponent('Hello The Almond School, I would like to enquire about admissions for 2026–27.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Visiting Hours */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-800 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-serif">
                Campus Visiting Hours
              </h3>
              <div className="text-xs text-stone-600 space-y-1">
                <div><strong>Mon – Fri:</strong> 8:30 AM – 3:30 PM</div>
                <div><strong>Saturday:</strong> 9:00 AM – 1:00 PM</div>
                <div className="text-stone-400">Sunday &amp; Gazetted Holidays: Closed</div>
              </div>
            </div>

            <div className="pt-2">
              <div className="py-2.5 px-3 rounded-xl bg-[#FAF8F5] border border-stone-200 text-center text-xs text-stone-700 font-medium">
                Academic Session {ACADEMIC_YEAR} Enquiries
              </div>
            </div>
          </div>

        </div>

        {/* Plan a Campus Walkthrough & School Location Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Quick Tour Dispatcher */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xs space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Personalized Walkthrough
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Plan a Campus Visit
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Select your preferred day and time. We will arrange a dedicated one-on-one session with our academic director.
              </p>
            </div>

            <form onSubmit={handleQuickTour} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={tourDate}
                    onChange={(e) => setTourDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-[#FAF8F5] text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Preferred Timing Slot
                  </label>
                  <select
                    value={tourTime}
                    onChange={(e) => setTourTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-[#FAF8F5] text-stone-900 focus:outline-none focus:border-stone-900"
                  >
                    <option value="9:30 AM">9:30 AM (Classroom Observation)</option>
                    <option value="11:00 AM">11:00 AM (Activity & Outdoor Session)</option>
                    <option value="1:30 PM">1:30 PM (Afternoon Parent Consultation)</option>
                    <option value="Saturday 10:00 AM">Saturday 10:00 AM (Weekend Tour)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Program of Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Playgroup', 'Nursery', 'Junior KG', 'Senior KG'].map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setChildProgram(p)}
                      className={`py-2 px-3 rounded-xl border text-xs font-medium transition-colors ${
                        childProgram === p
                          ? 'bg-stone-900 text-white border-stone-900'
                          : 'bg-[#FAF8F5] text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Optional Questions or Specific Notes
                </label>
                <textarea
                  rows={2}
                  value={parentNote}
                  onChange={(e) => setParentNote(e.target.value)}
                  placeholder="e.g. Inquiring for child born June 2023, asking about bus transport..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-[#FAF8F5] text-stone-900 focus:outline-none focus:border-stone-900 text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Confirm Visit Request on WhatsApp</span>
                </button>
              </div>

              {scheduled && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Visit request dispatched! Our coordinator will confirm your slot shortly.</span>
                </div>
              )}
            </form>
          </div>

          {/* Right: School Location & Directions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <img src={schoolLogo} alt="The Almond School" className="h-10 w-auto object-contain" />
                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900">
                    The Almond School
                  </h3>
                  <div className="text-xs text-stone-500">
                    Nurturing Minds, Shaping Futures
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-stone-600 pt-2 border-t border-stone-100">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-800">Campus Address:</strong>
                    <p className="mt-0.5 text-stone-600 leading-relaxed">
                      {SCHOOL_ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-800">Direct Desk:</strong>
                    <p className="mt-0.5 text-stone-600 font-mono">
                      +91 97178 67308 / 9717867308
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-800">Admissions Email:</strong>
                    <p className="mt-0.5 text-stone-600">
                      admissions@thealmondschool.edu
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Card */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-800">
                  <span>Getting Here</span>
                  <span className="text-[10px] text-stone-400">Google Maps Navigation</span>
                </div>
                <p className="text-xs text-stone-500">
                  Located near Shaheen Masjid in Jamia Nagar. Dedicated visitor parking and reception assistance are available upon arrival.
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('The Almond School, F-180, Shaheen Bagh, Near Shaheen Masjid, Jamia Nagar, Okhla, New Delhi 110025')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-amber-700 transition-colors pt-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
