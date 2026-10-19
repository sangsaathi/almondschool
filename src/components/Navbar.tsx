import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare, Camera } from 'lucide-react';
import { SCHOOL_PHONE, FORMATTED_PHONE } from '../data/schoolData';
import schoolLogo from './logo.webp';

export type PageId = 'home' | 'about' | 'curriculum' | 'gallery' | 'faq' | 'contact';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'curriculum', label: 'Curriculum & Programs' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const whatsappUrl = `https://wa.me/91${SCHOOL_PHONE}?text=${encodeURIComponent(
    'Hello The Almond School, I would like to enquire about admissions for the 2026–27 session.'
  )}`;

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-18">
          
          {/* Zone 1: Brand title & logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left tracking-tight text-stone-900 whitespace-nowrap shrink-0 group cursor-pointer focus:outline-none"
          >
            <img
              src={schoolLogo}
              alt="The Almond School Logo"
              className="h-10 sm:h-11 w-auto max-w-[120px] object-contain group-hover:opacity-90 transition-opacity"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-tight">
                The Almond School
              </span>
              <span className="text-[10px] text-stone-500 font-sans tracking-wide hidden sm:inline">
                Nurturing Minds, Shaping Futures
              </span>
            </div>
          </button>

          {/* Zone 2: Page Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs sm:text-sm font-medium text-stone-600">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1.5 px-1 whitespace-nowrap shrink-0 cursor-pointer transition-colors flex items-center gap-1.5 focus:outline-none ${
                    isActive
                      ? 'text-stone-950 font-bold'
                      : 'hover:text-stone-950 text-stone-600'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-900 font-semibold">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Direct Phone & Admissions Call-to-Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${SCHOOL_PHONE}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-950 transition-colors px-2 py-1"
              title="Call School Office"
            >
              <Phone className="w-3.5 h-3.5 text-stone-500" />
              <span className="tabular-nums font-mono">{FORMATTED_PHONE}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 text-xs sm:text-sm font-semibold text-stone-50 bg-stone-900 hover:bg-stone-800 active:scale-[0.98] transition-all rounded-xl whitespace-nowrap shrink-0 shadow-2xs flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Admissions 2026–27</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-950 transition-colors rounded-xl focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF8F5] px-6 py-5 space-y-4 shadow-xl animate-in fade-in duration-150">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm font-semibold py-2 px-3 rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-stone-800 text-amber-300' : 'bg-amber-100 text-amber-900'}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
            <a
              href={`tel:${SCHOOL_PHONE}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-stone-800 bg-stone-100 rounded-xl hover:bg-stone-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-stone-600" />
              <span>Call Desk: {FORMATTED_PHONE}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-stone-900 rounded-xl hover:bg-stone-800 transition-colors text-center"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
