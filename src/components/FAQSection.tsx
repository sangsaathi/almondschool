import React, { useState } from 'react';
import { FAQS } from '../data/schoolData';
import { ChevronDown, HelpCircle, PhoneCall, MessageSquare } from 'lucide-react';
import { SCHOOL_PHONE, FORMATTED_PHONE } from '../data/schoolData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const whatsappUrl = `https://wa.me/91${SCHOOL_PHONE}?text=${encodeURIComponent(
    'Hello The Almond School, I have a question regarding admissions for my child.'
  )}`;

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-stone-500">
            <HelpCircle className="w-4 h-4 text-stone-600" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto">
            Everything you need to know about our approach, admissions, and day-to-day care at The Almond School.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-stone-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-stone-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-stone-100/80 border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-800 shrink-0 border border-stone-200 shadow-2xs">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-stone-900">Have a specific question about your child?</div>
              <div className="text-[11px] sm:text-xs text-stone-500">Our admissions coordinators are available for a friendly chat.</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${SCHOOL_PHONE}`}
              className="px-3.5 py-2 text-xs font-medium text-stone-900 bg-white hover:bg-stone-50 rounded-xl border border-stone-300 transition-colors whitespace-nowrap"
            >
              Call {FORMATTED_PHONE}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
