import { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { InstagramFeed } from './components/InstagramFeed';
import { HomeGalleryPreview } from './components/HomeGalleryPreview';
import { ParentsPeaceOfMind } from './components/ParentsPeaceOfMind';
import { AboutUsPage } from './components/AboutUsPage';
import { CurriculumPage } from './components/CurriculumPage';
import { PhotoGallery } from './components/PhotoGallery';
import { FAQPage } from './components/FAQPage';
import { ContactUsPage } from './components/ContactUsPage';
import { Footer } from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';
import { SCHOOL_PHONE } from './data/schoolData';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');

  // Sync state with browser location hash for native URL routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'curriculum', 'gallery', 'faq', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/91${SCHOOL_PHONE}?text=${encodeURIComponent(
    'Hello The Almond School, I would like to enquire about admissions for the 2026–27 session.'
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-100 selection:text-stone-900">
      {/* 3-Zone Top Navigation with Logo & Page Routing */}
      <Navbar activePage={activePage} onNavigate={navigateTo} />

      {/* Main Content Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            {/* 1. Hero Section with Call/WhatsApp and page navigation */}
            <Hero onNavigate={navigateTo} />

            {/* 2. Campus Photo Gallery Preview (with button to Photo Gallery page) */}
            <HomeGalleryPreview onNavigate={navigateTo} />

            {/* 3. Live Instagram Feed (@thealmondschool with Developer Tool Integration) */}
            <InstagramFeed />

            {/* 4. A School Where Children Love To Come & Peace of Mind */}
            <ParentsPeaceOfMind />
          </>
        )}

        {/* Dedicated About Us Page */}
        {activePage === 'about' && (
          <AboutUsPage
            onNavigateCurriculum={() => navigateTo('curriculum')}
            onNavigateContact={() => navigateTo('contact')}
            onNavigateGallery={() => navigateTo('gallery')}
          />
        )}

        {/* Dedicated Curriculum & Programs Page */}
        {activePage === 'curriculum' && (
          <CurriculumPage
            onNavigateContact={() => navigateTo('contact')}
            onNavigateGallery={() => navigateTo('gallery')}
          />
        )}

        {/* Dedicated Photo Gallery Page with all 11 images from src/components/gallery */}
        {activePage === 'gallery' && (
          <PhotoGallery onNavigateContact={() => navigateTo('contact')} />
        )}

        {/* Dedicated FAQ Page */}
        {activePage === 'faq' && (
          <FAQPage onNavigateContact={() => navigateTo('contact')} />
        )}

        {/* Dedicated Contact Us Page */}
        {activePage === 'contact' && (
          <ContactUsPage />
        )}
      </main>

      {/* Footer across all views */}
      <Footer onNavigate={navigateTo} />

      {/* Discrete Mobile Floating Action Bar */}
      <aside
        aria-label="Quick contact"
        className="sm:hidden fixed bottom-3 left-3 right-3 z-30 flex items-center gap-2 p-1.5 bg-stone-900/95 backdrop-blur-md text-white rounded-2xl shadow-xl border border-stone-800"
      >
        <a
          href={`tel:${SCHOOL_PHONE}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-stone-200 hover:text-white transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>Call Desk</span>
        </a>
        <div className="w-px h-5 bg-stone-700" />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
