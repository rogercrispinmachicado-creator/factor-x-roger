import React from 'react';
import { Play, ArrowRight, MessageCircle, Calendar, Package, Sparkles } from 'lucide-react';
import { openWhatsApp, APP_CONFIG } from '../config.ts';
import { FactorXIcon, UnderdogDiamondIcon } from './BrandLogos.tsx';

interface CtaFinalProps {
  onOpenVideo: (title: string, url?: string) => void;
}

export function CtaFinal({ onOpenVideo }: CtaFinalProps) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0e1017] via-[#141724] to-[#0b0c10] border-t border-white/10 overflow-hidden">
      {/* Background glowing rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#E41E26]/10 via-[#F39200]/10 to-[#00923F]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-2xl">
          <FactorXIcon className="w-10 h-10" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-[#FBC102] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>EL MOMENTO ES AHORA</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 [text-wrap:balance]">
          ¿LISTO PARA CONOCER{' '}
          <span className="bg-gradient-to-r from-[#E41E26] via-[#F39200] to-[#FBC102] bg-clip-text text-transparent">
            FACTOR X?
          </span>
        </h2>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10 [text-wrap:balance]">
          Da el paso definitivo hacia tu salud celular, tu libertad financiera y el desarrollo de un liderazgo inquebrantable en Bolivia.
        </p>

        {/* 5 Impact Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-3xl mx-auto">
          <button
            onClick={() => openWhatsApp('Hola Roger 👋 Estoy listo para comenzar en Factor X y quiero hablar contigo.')}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00923F] hover:bg-[#007934] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xl transition-all active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>HABLAR CON ROGER</span>
          </button>

          <a
            href="#underdog"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#E41E26] to-[#F39200] hover:opacity-95 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xl transition-all active:scale-95 whitespace-nowrap"
          >
            <UnderdogDiamondIcon className="w-4 h-4" />
            <span>CONOCER UNDERDOG-DIAMOND</span>
          </a>

          <a
            href="#productos"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/10 transition-colors whitespace-nowrap"
          >
            <Package className="w-4 h-4 text-[#FBC102]" />
            <span>CONOCER PRODUCTOS</span>
          </a>

          <a
            href="#agenda"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/10 transition-colors whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-[#00A6A6]" />
            <span>VER AGENDA</span>
          </a>

          <button
            onClick={() => onOpenVideo('Presentación General Factor X Roger', APP_CONFIG.VIDEOS.CORPORATIVO)}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/10 transition-colors whitespace-nowrap"
          >
            <Play className="w-4 h-4 text-[#E41E26] fill-[#E41E26]" />
            <span>VER PRESENTACIÓN</span>
          </button>
        </div>
      </div>
    </section>
  );
}
