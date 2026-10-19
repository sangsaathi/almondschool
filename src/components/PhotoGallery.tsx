import React, { useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  Phone
} from 'lucide-react';
import { INITIAL_GALLERY_IMAGES } from '../data/galleryData';
import { SCHOOL_PHONE, FORMATTED_PHONE } from '../data/schoolData';

interface PhotoGalleryProps {
  onNavigateContact?: () => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onNavigateContact }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const images = INITIAL_GALLERY_IMAGES;

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + images.length) % images.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % images.length);
    }
  };

  const activeImage = activeImageIndex !== null ? images[activeImageIndex] : null;

  return (
    <div className="py-8 sm:py-14 lg:py-18 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
        
        {/* Minimal Header - No photos count, no upload button, no filter buttons */}
        <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3 px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
            <Camera className="w-3.5 h-3.5 text-stone-600" />
            <span>Campus Gallery</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Photo Gallery
          </h1>

          <p className="text-xs sm:text-base text-stone-600 font-normal">
            A glimpse into everyday learning, exploration, and play at The Almond School.
          </p>
        </div>

        {/* Pure Photos Grid - Mobile Responsive 2 cols on mobile, 3 on tablet, 4 on desktop */}
        {/* NO TEXT, NO BADGES, JUST THE PHOTOS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden bg-stone-200 border border-stone-200 shadow-2xs hover:shadow-md transition-all active:scale-[0.98]"
            >
              <img
                src={image.src}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />

              {/* Subtle hover icon for desktop */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-md">
                  <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Photo Popup Modal - NO DOWNLOAD OPTION, NO TEXT, JUST THE PHOTO */}
        {activeImage && activeImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-150"
            onClick={() => setActiveImageIndex(null)}
          >
            <div
              className="relative max-w-5xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveImageIndex(null)}
                className="absolute -top-12 right-2 sm:top-2 sm:right-2 z-30 p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
                aria-label="Close photo"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Prev button */}
              <button
                onClick={handlePrev}
                className="absolute left-1 sm:left-4 z-30 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next button */}
              <button
                onClick={handleNext}
                className="absolute right-1 sm:right-4 z-30 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Pure photo with no text and no download button */}
              <div className="max-h-[85vh] sm:max-h-[90vh] w-full flex items-center justify-center p-1 sm:p-2">
                <img
                  src={activeImage.src}
                  alt=""
                  className="max-h-[82vh] sm:max-h-[88vh] w-auto max-w-full rounded-lg sm:rounded-2xl object-contain shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}

        {/* Minimal Campus Visit Bar at Bottom */}
        <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-stone-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-base sm:text-xl font-serif font-bold text-stone-900">
              Experience Our School In Person
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              We welcome parents for personalized campus tours from Monday to Saturday.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <a
              href={`tel:${SCHOOL_PHONE}`}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call {FORMATTED_PHONE}</span>
            </a>
            {onNavigateContact && (
              <button
                onClick={onNavigateContact}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Campus Visit →
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
