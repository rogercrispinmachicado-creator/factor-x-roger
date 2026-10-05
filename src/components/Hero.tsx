import React from 'react';
import { Play, MessageCircle, ArrowRight, Sparkles, Flame, ShieldAlert } from 'lucide-react';
import { openWhatsApp, APP_CONFIG } from '../config.ts';
import { BoliviaFlagBadge, FactorXIcon } from './BrandLogos.tsx';

interface HeroProps {
  onOpenVideo: (title: string, url?: string) => void;
}

export function Hero({ onOpenVideo }: HeroProps) {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 pb-16">
      {/* Background Graphic / Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cinematic Background Image with Dark Contrast Scrim */}
        <img
          src="/src/assets/images/factor_x_hero_cinematic_1790715029319.jpg"
          alt="Factor X Roger Bolivia Master Elite"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter saturate-120"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/80 to-[#0b0c10]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E41E26]/20 via-transparent to-transparent" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#00923F]/15 blur-3xl" />
        <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[#F39200]/15 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Subtle Category Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-neutral-300 mb-6 backdrop-blur-md">
          <BoliviaFlagBadge className="w-4 h-3" />
          <span>FACTOR X BOLIVIA</span>
          <span className="text-neutral-500">·</span>
          <span className="text-[#FBC102]">MASTER ELITE SUPREMO 2026</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 max-w-4xl [text-wrap:balance]">
          ROGER CRISPÍN ES{' '}
          <span className="bg-gradient-to-r from-[#E41E26] via-[#F39200] to-[#FBC102] bg-clip-text text-transparent">
            FACTOR X BOLIVIA
          </span>
        </h1>

        {/* Powerful Quote Card */}
        <div className="relative max-w-3xl mx-auto p-5 sm:p-7 rounded-2xl glass-card border border-white/10 text-left mb-6 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F39200] mb-3">
            <Flame className="w-4 h-4 text-[#E41E26] shrink-0" />
            <span>Manifiesto de Liderazgo</span>
          </div>
          <blockquote className="text-sm sm:text-base text-neutral-200 leading-relaxed italic">
            “¡Si tienes una visión en la mente, agárrala con garra y... ¡Síguela sin mirar atrás! Arriésgalo todo, quema los barcos, conquista lo imposible y sueña a lo grande, con el fuego en la mirada. ¡Porque jugar en pequeño es un insulto directo al talento brutal que se te ha dado! ¡Despierta, levántate y venimos a dominar el juego por completo!”
          </blockquote>
          <div className="mt-3 flex items-center justify-between text-xs font-semibold text-neutral-400">
            <span className="text-white font-bold tracking-wide">— Roger Crispín Machicado</span>
            <span className="text-[#FBC102] font-mono">LÍDER &middot; FUNDADOR &middot; MENTOR</span>
          </div>
        </div>

        {/* Subtitle Description */}
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8 [text-wrap:balance]">
          Un ecosistema de productos, educación, liderazgo, emprendimiento y herramientas digitales para personas que quieren aprender, crecer y construir.
        </p>

        {/* Primary CTAs & Video Hero Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-xl">
          <a
            href="#underdog"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#E41E26] to-[#F39200] hover:from-[#c81920] hover:to-[#db8400] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            <span>CONOCER UNDERDOG-DIAMOND</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => openWhatsApp('Hola Roger 👋 Vengo de la landing web y quiero conocer más de Factor X.')}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00923F] hover:bg-[#007934] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>HABLAR CON ROGER</span>
          </button>

          <button
            onClick={() => onOpenVideo('Presentación Factor X Roger Hero', APP_CONFIG.VIDEOS.HERO)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-neutral-200 text-xs sm:text-sm font-semibold rounded-xl transition-all active:scale-95"
          >
            <Play className="w-4 h-4 text-[#FBC102] fill-[#FBC102]" />
            <span>VER VIDEO HERO</span>
          </button>
        </div>

        {/* Notice: No E-Commerce / Direct Conversation Channel */}
        <div className="mt-10 flex items-center gap-2 text-xs text-neutral-400">
          <FactorXIcon className="w-4 h-4" />
          <span>Plataforma informativa oficial de Factor X Bolivia · Contacto y asesoramiento personalizado</span>
        </div>
      </div>
    </section>
  );
}
