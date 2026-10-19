import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, MessageSquare, Instagram, Camera } from 'lucide-react';
import { SCHOOL_PHONE, FORMATTED_PHONE, ACADEMIC_YEAR, SCHOOL_ADDRESS } from '../data/schoolData';
import schoolLogo from './logo.webp';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
    }
    scrollToTop();
  };

  const whatsappUrl = `https://wa.me/91${SCHOOL_PHONE}?text=${encodeURIComponent(
    'Hello The Almond School, I would like to enquire about admission.'
  )}`;

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left cursor-pointer focus:outline-none"
            >
              <img
                src={schoolLogo}
                alt="The Almond School Logo"
                className="h-11 w-auto object-contain bg-white rounded-xl p-1 shadow-sm"
              />
              <div>
                <span className="text-xl font-bold tracking-tight text-stone-50 font-serif block">
                  The Almond School
                </span>
                <span className="text-xs text-stone-400">Nurturing Minds, Shaping Futures</span>
              </div>
            </button>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Where little beginnings grow into beautiful possibilities. A place where children learn, explore, express and grow — with a smile.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div className="text-stone-300 font-medium">Admissions Open · Academic Session {ACADEMIC_YEAR}</div>
              <div className="text-stone-400">Playgroup • Nursery • Junior KG • Senior KG</div>
            </div>
          </div>

          {/* Page Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              Pages &amp; Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-stone-400 hover:text-stone-50 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-stone-400 hover:text-stone-50 transition-colors cursor-pointer"
                >
                  About Us &amp; Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('curriculum')}
                  className="text-stone-400 hover:text-stone-50 transition-colors cursor-pointer"
                >
                  Curriculum &amp; Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="text-amber-200 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Camera className="w-3.5 h-3.5 text-amber-400" />
                  <span>Photo Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="text-stone-400 hover:text-stone-50 transition-colors cursor-pointer"
                >
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-stone-400 hover:text-stone-50 transition-colors cursor-pointer"
                >
                  Contact Admissions Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              Direct Contact &amp; Campus Desk
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-stone-400">Enquire for Admission</span>
                  <a
                    href={`tel:${SCHOOL_PHONE}`}
                    className="text-stone-100 hover:text-white font-medium font-mono text-sm"
                  >
                    {FORMATTED_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-stone-400">Visiting Hours</span>
                  <span>Monday to Saturday: 9:00 AM – 3:30 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-stone-400">Campus Location</span>
                  <span className="leading-relaxed">{SCHOOL_ADDRESS}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Admission</span>
              </a>

              <a
                href="https://instagram.com/thealmondschool"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-xs font-medium bg-stone-800 text-stone-300 rounded-xl hover:bg-stone-700 hover:text-stone-100 transition-colors"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4 text-rose-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} The Almond School. All rights reserved. Nurturing Minds, Shaping Futures.
          </div>

          <div className="flex items-center gap-4">
            <span>Come, discover a happy beginning for your child.</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-200 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
