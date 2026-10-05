import React, { useEffect } from 'react';
import { X, Play, Clock, Sparkles } from 'lucide-react';
import { FactorXIcon } from './BrandLogos.tsx';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoUrl?: string;
  categoryLabel?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  title,
  videoUrl,
  categoryLabel = "Factor X Media",
}: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Detect video provider if url is present
  const isYouTube = videoUrl && (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be'));
  const isVimeo = videoUrl && videoUrl.includes('vimeo.com');

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
    }
    if (url.includes('watch?v=')) {
      const id = url.split('watch?v=')[1]?.split('&')[0];
      return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
    }
    if (url.includes('vimeo.com/')) {
      const id = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    return url;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#12141d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161823]">
          <div className="flex items-center gap-3">
            <FactorXIcon className="w-5 h-5 shrink-0" />
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F39200]">
                {categoryLabel}
              </span>
              <h3 className="text-base font-bold text-white tracking-tight line-clamp-1">
                {title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Cerrar reproductor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          {videoUrl && videoUrl.trim().length > 0 ? (
            isYouTube || isVimeo ? (
              <iframe
                src={getEmbedUrl(videoUrl)}
                title={title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Tu navegador no soporta la reproducción de video HTML5.
              </video>
            )
          ) : (
            /* Elegant Placeholder when video URL is not configured yet */
            <div className="flex flex-col items-center justify-center text-center p-8 max-w-md">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#E41E26]/20 via-[#F39200]/20 to-[#00923F]/20 border border-white/10 flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-[#FBC102] ml-1" />
                </div>
                <div className="absolute -top-1 -right-1 p-1 bg-[#212121] rounded-full border border-white/20">
                  <Clock className="w-3.5 h-3.5 text-[#00A6A6]" />
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#FBC102]" />
                Producción Audiovisual Oficial
              </span>

              <h4 className="text-xl font-bold text-white mb-2">
                🎬 VIDEO PRÓXIMAMENTE
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                El material audiovisual de <span className="text-white font-medium">"{title}"</span> está en proceso de edición y masterización en alta definición.
              </p>

              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-gradient-to-r from-[#E41E26] to-[#F39200] hover:from-[#c2181f] hover:to-[#d87f00] text-white text-xs font-semibold rounded-lg shadow-md transition-all active:scale-95"
              >
                Entendido / Continuar
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#0f1118] border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
          <span>FACTOR X COMPANY & UNDERDOG-DIAMOND</span>
          <span>Presiona ESC o clic afuera para cerrar</span>
        </div>
      </div>
    </div>
  );
}
