import React from 'react';
import { Camera, ArrowRight, Maximize2 } from 'lucide-react';
import { INITIAL_GALLERY_IMAGES } from '../data/galleryData';
import { PageId } from './Navbar';

interface HomeGalleryPreviewProps {
  onNavigate: (page: PageId) => void;
}

export const HomeGalleryPreview: React.FC<HomeGalleryPreviewProps> = ({ onNavigate }) => {
  // Show 4 featured photos on the homepage
  const featured = INITIAL_GALLERY_IMAGES.slice(0, 4);

  return (
    <section className="py-10 sm:py-16 bg-white border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header Lockup - Clean, without photo counts */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Camera className="w-3.5 h-3.5 text-amber-700" />
              <span>Campus Moments</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-stone-900">
              Life at The Almond School
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              Everyday smiles, discoveries, hands-on learning, and outdoor play.
            </p>
          </div>

          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs shrink-0 self-start sm:self-auto cursor-pointer"
          >
            <span>View Photo Gallery</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

        {/* Pure Photos Grid - Mobile Responsive (2 cols on mobile, 4 on desktop) */}
        {/* NO TEXT, NO BADGES, JUST THE PHOTOS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {featured.map((img) => (
            <div
              key={img.id}
              onClick={() => onNavigate('gallery')}
              className="group relative cursor-pointer aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-2xs hover:shadow-md transition-all active:scale-[0.98]"
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
