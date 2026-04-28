import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { COMIC_PAGES } from '../data/comicData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ComicReaderProps {
  pageId: string;
  onNavigate: (id: string) => void;
}

export default function ComicReader({ pageId, onNavigate }: ComicReaderProps) {
  if (COMIC_PAGES.length === 0) {
    return <div className="text-[#444] font-mono p-10">Initializing starmaps...</div>;
  }

  const page = COMIC_PAGES.find(p => p.id === pageId) || COMIC_PAGES[0];
  const currentIndex = COMIC_PAGES.findIndex(p => p.id === page.id);
  const prevPage = currentIndex > 0 ? COMIC_PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < COMIC_PAGES.length - 1 ? COMIC_PAGES[currentIndex + 1] : null;

  // Jump to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageId]);

  return (
    <div className="flex flex-col items-center">
      {/* Optional Title */}
      {page.title && (
        <h2 className="text-2xl font-bold mb-6 text-white text-center lowercase tracking-tight">
          {page.title}
        </h2>
      )}

      {/* Comic Media Wrapper */}
      <div 
        className={`bg-[#000] border border-[#222] shadow-2xl overflow-hidden relative`}
        style={{ 
          width: '100%', 
          maxWidth: '650px',
          aspectRatio: page.aspectRatio === '4:3' ? '650/450' : '1/1'
        }}
      >
        {page.videoUrl ? (
          <iframe
            src={page.videoUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={page.title || "Comic Video"}
          />
        ) : page.image ? (
          <img 
            src={page.image} 
            alt={page.title || "Comic Page"}
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#222] font-black italic text-6xl">
            NO MEDIA
          </div>
        )}
      </div>

      {/* Comic Text */}
      <div className="mt-8 max-w-2xl w-full text-center space-y-4">
        <div className="text-lg leading-relaxed whitespace-pre-wrap px-4 font-medium text-[#eee]">
          {page.text}
        </div>
      </div>

      {/* Compact Navigation Buttons */}
      <div className="mt-10 w-full max-w-2xl flex justify-center items-center gap-4">
        {prevPage ? (
          <button 
            onClick={() => onNavigate(prevPage.id)}
            className="px-6 py-2 bg-[#111] border border-[#222] hover:border-[#444] text-[#888] hover:text-white font-bold text-sm rounded-sm transition-all flex items-center gap-2 group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Previous
          </button>
        ) : (
          <div className="px-6 py-2 border border-transparent text-[#222] font-bold text-sm flex items-center gap-2 opacity-50 cursor-default">
            <ChevronLeft size={16} />
            Previous
          </div>
        )}

        {nextPage ? (
          <button 
            onClick={() => onNavigate(nextPage.id)}
            className="px-8 py-2 bg-[#1a1a1a] border border-[#333] hover:border-[#bb8afb] hover:bg-[#222] text-[#bb8afb] font-bold text-sm rounded-sm transition-all flex items-center gap-2 group"
          >
            Next
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        ) : (
          <div className="px-8 py-2 border border-transparent text-[#222] font-bold text-sm opacity-50 cursor-default">
            Next
          </div>
        )}
      </div>

      <div className="mt-4">
        <button 
          onClick={() => onNavigate(COMIC_PAGES[0].id)}
          className="text-[10px] text-[#444] hover:text-white transition-colors uppercase tracking-[0.2em]"
        >
          Start Over
        </button>
      </div>

      {/* Footer Info */}
      <div className="mt-12 w-full max-w-2xl border-t border-[#1a1a1a] pt-4 text-center">
        <span className="text-[9px] text-[#222] uppercase tracking-[0.4em]">
          Entry {page.id} / {COMIC_PAGES[COMIC_PAGES.length - 1].id}
        </span>
      </div>
    </div>
  );
}
