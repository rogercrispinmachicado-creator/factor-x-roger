import React from 'react';
import { Star, Play, Sparkles, Quote, Video } from 'lucide-react';
import { APP_CONFIG } from '../config.ts';

interface TestimonialsSectionProps {
  onOpenVideo: (title: string, url?: string) => void;
}

export function TestimonialsSection({ onOpenVideo }: TestimonialsSectionProps) {
  return (
    <section className="relative py-24 bg-[#0e1017] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-[#FBC102] mb-3">
            <Star className="w-3.5 h-3.5 fill-[#FBC102]" />
            <span>VOCES DE LA COMUNIDAD</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            ⭐ EXPERIENCIAS & LIDERAZGO
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Historias auténticas de superación, educación y trabajo constante construidas junto al equipo de Factor X en Bolivia.
          </p>
        </div>

        {/* Video Testimonials Spotlight Box */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 text-center max-w-3xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#E41E26]/20 to-[#F39200]/20 border border-white/10 flex items-center justify-center mx-auto mb-6">
            <Video className="w-8 h-8 text-[#FBC102]" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono font-semibold text-neutral-400 mb-3">
            DOCUMENTAL EN PRODUCCIÓN
          </span>

          <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
            🎬 TESTIMONIOS PRÓXIMAMENTE
          </h3>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-lg mx-auto mb-8">
            Estamos compilando y masterizando las entrevistas y vivencias reales de líderes y familias bolivianas que han transformado su bienestar físico y económico con Factor X y el Sistema Underdog.
          </p>

          <button
            onClick={() => onOpenVideo('Testimonios Oficiales de Liderazgo Factor X', APP_CONFIG.VIDEOS.TESTIMONIOS)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-bold rounded-xl transition-all active:scale-95"
          >
            <Play className="w-4 h-4 text-[#FBC102] fill-[#FBC102]" />
            <span>VER ADELANTO AUDIOVISUAL</span>
          </button>
        </div>
      </div>
    </section>
  );
}
