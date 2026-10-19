import React, { useState } from 'react';
import {
  HelpCircle,
  Search,
  ChevronDown,
  Phone,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Clock,
  Heart
} from 'lucide-react';
import { FAQS, SCHOOL_PHONE, FORMATTED_PHONE, ACADEMIC_YEAR } from '../data/schoolData';

interface FAQPageProps {
  onNavigateContact?: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigateContact }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { label: 'All', value: 'All' },
    { label: 'Admissions', value: 'admissions' },
    { label: 'Academics & Methods', value: 'academics' },
    { label: 'Care & Settling In', value: 'care' },
    { label: 'General Care', value: 'general' }
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const whatsappUrl = `https://wa.me/91${SCHOOL_PHONE}?text=${encodeURIComponent(
    'Hello The Almond School, I have a few questions regarding admissions for 2026–27.'
  )}`;

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
            <HelpCircle className="w-3.5 h-3.5 text-stone-600" />
            <span>Parent Support &amp; Clarity</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Choosing your child&apos;s early education is an important milestone. Here are answers to common questions about our admissions, settling routines, safety, and philosophy.
          </p>
        </div>

        {/* Search Bar & Filters */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic (e.g., age, settling in, teacher ratio, safety, timings)..."
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-stone-200 rounded-2xl text-stone-900 text-sm focus:outline-none focus:border-stone-900 shadow-2xs placeholder:text-stone-400"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-stone-900 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-2xs transition-all hover:border-stone-300"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 font-serif">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`p-1.5 rounded-full bg-stone-100 text-stone-600 shrink-0 mt-1 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-stone-200 text-stone-900' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100 space-y-3 animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-white rounded-2xl border border-stone-200 text-stone-500 text-sm">
              No questions found matching &ldquo;{searchQuery}&rdquo;. Call our desk directly at {FORMATTED_PHONE}.
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">
              Have a question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Our early childhood coordinators are happy to speak with you directly and assist with any details.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${SCHOOL_PHONE}`}
              className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {FORMATTED_PHONE}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
