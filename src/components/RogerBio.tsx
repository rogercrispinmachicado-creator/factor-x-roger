import React from 'react';
import { Play, Sparkles, CheckCircle, ArrowRight, Award, Compass, HeartHandshake } from 'lucide-react';
import { APP_CONFIG } from '../config.ts';
import { UnderdogDiamondIcon } from './BrandLogos.tsx';

interface RogerBioProps {
  onOpenVideo: (title: string, url?: string) => void;
}

export function RogerBio({ onOpenVideo }: RogerBioProps) {
  const timelineSteps = [
    {
      step: '01',
      title: 'ORIGEN',
      desc: 'Raíces forjadas en la humildad andina y el valor inquebrantable del trabajo honesto.',
      tag: 'Los cimientos',
      color: '#E41E26'
    },
    {
      step: '02',
      title: 'NECESIDAD',
      desc: 'El hambre de progreso real y la decisión irrevocable de romper con la escasez.',
      tag: 'El despertar',
      color: '#F39200'
    },
    {
      step: '03',
      title: 'VENTAS',
      desc: 'La escuela de la calle y el comercio directo: aprender a escuchar, conectar y servir.',
      tag: 'El terreno',
      color: '#FBC102'
    },
    {
      step: '04',
      title: 'EMPRENDIMIENTO',
      desc: 'Creando proyectos propios, asumiendo riesgos calculados y superando fracasos temporales.',
      tag: 'La forja',
      color: '#00923F'
    },
    {
      step: '05',
      title: 'NETWORK MARKETING',
      desc: 'El descubrimiento del vehículo más democrático de apalancamiento, productos y regalías.',
      tag: 'El vehículo',
      color: '#00A6A6'
    },
    {
      step: '06',
      title: 'DESARROLLO PERSONAL',
      desc: 'Inmersión profunda en mentalidad, hábitos millonarios, oratoria y liderazgo transformacional.',
      tag: 'La mente',
      color: '#0066B3'
    },
    {
      step: '07',
      title: 'LIDERAZGO',
      desc: 'Guiar con el ejemplo en tarima y en el campo: formando equipos de alto impacto en Bolivia.',
      tag: 'El ejemplo',
      color: '#E4005A'
    },
    {
      step: '08',
      title: 'MENTORÍA',
      desc: 'Empoderando a hombres y mujeres para que despierten su grandeza y multipliquen sus ingresos.',
      tag: 'El legado',
      color: '#4B2E83'
    },
    {
      step: '09',
      title: 'UNDERDOG-DIAMOND',
      desc: 'El sistema de duplicación definitiva: herramientas y método paso a paso para el retador.',
      tag: 'La cumbre',
      color: '#FFD700'
    },
  ];

  return (
    <section id="roger" className="relative py-24 bg-[#0e1017] border-t border-white/5 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#00923F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-[#F39200] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            LÍDER · FUNDADOR · MENTOR · EMPRENDEDOR
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            ¿QUIÉN ES ROGER CRISPÍN?
          </h2>
          <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FBC102] max-w-2xl mx-auto">
            DEL HAMBRE A LA ABUNDANCIA &middot; DEL AMBULANTE AL LÍDER &middot; DEL SOBREVIVIENTE AL MENTOR
          </p>
        </div>

        {/* Grid: Mentor Card & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl group">
              <img
                src="/src/assets/images/roger_crispin_portrait_1790715038656.jpg"
                alt="Roger Crispín Machicado - Líder Factor X Bolivia"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover object-top transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-[#0e1017]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-1">
                  <UnderdogDiamondIcon className="w-6 h-6" />
                  <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider">
                    Sistema UNDERDOG-DIAMOND
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Roger Crispín Machicado
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Constructor de redes, formador de equipos y conferencista en Bolivia.
                </p>
              </div>
            </div>

            {/* Video CTA Box */}
            <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">
                  Conoce mi Historia en Video
                </h4>
                <p className="text-xs text-neutral-400">
                  El testimonio del camino recorrido y la visión hacia 2026.
                </p>
              </div>
              <button
                onClick={() => onOpenVideo('Historia de Roger Crispín', APP_CONFIG.VIDEOS.ROGER)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#E41E26] to-[#F39200] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95 shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>VER VIDEO</span>
              </button>
            </div>

            {/* 3 Pillars Quick Badges */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Award className="w-5 h-5 text-[#FBC102] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-white">Liderazgo</div>
                <div className="text-[10px] text-neutral-400">Con el ejemplo</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Compass className="w-5 h-5 text-[#00A6A6] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-white">Visión</div>
                <div className="text-[10px] text-neutral-400">Sin mirar atrás</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <HeartHandshake className="w-5 h-5 text-[#00923F] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-white">Duplicación</div>
                <div className="text-[10px] text-neutral-400">En equipo</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Timeline */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl glass-card border border-white/10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h3 className="text-base font-bold text-white tracking-tight">
                  La Línea de Evolución del Retador
                </h3>
                <span className="text-xs text-[#00A6A6] font-mono">9 ETAPAS</span>
              </div>

              <div className="space-y-4 relative before:absolute before:top-2 before:bottom-2 before:left-[19px] before:w-[2px] before:bg-gradient-to-b before:from-[#E41E26] before:via-[#00923F] before:to-[#FFD700]">
                {timelineSteps.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 group">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 border border-white/20 bg-[#161823] shadow-md group-hover:scale-110 transition-transform"
                      style={{ borderColor: step.color }}
                    >
                      <span className="text-xs font-mono font-bold" style={{ color: step.color }}>
                        {step.step}
                      </span>
                    </div>

                    <div className="flex-1 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-xs font-bold text-white tracking-wide">
                          {step.title}
                        </h4>
                        <span className="text-[10px] font-semibold text-neutral-400 uppercase">
                          {step.tag}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 text-center">
                <a
                  href="#underdog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00923F] to-[#00A6A6] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-lg transition-all active:scale-95"
                >
                  <UnderdogDiamondIcon className="w-4 h-4" />
                  <span>CONOCER EL SISTEMA UNDERDOG-DIAMOND</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
