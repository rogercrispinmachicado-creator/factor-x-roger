import React from 'react';
import { Play, Sparkles, Brain, Target, Smartphone, MessagesSquare, Users2, Repeat2, ArrowRight, ShieldCheck } from 'lucide-react';
import { openWhatsApp, APP_CONFIG } from '../config.ts';
import { UnderdogDiamondIcon } from './BrandLogos.tsx';

interface UnderdogDiamondProps {
  onOpenVideo: (title: string, url?: string) => void;
}

export function UnderdogDiamond({ onOpenVideo }: UnderdogDiamondProps) {
  const pillars = [
    {
      title: 'Mentalidad Imparable',
      icon: Brain,
      color: '#FFD700',
      desc: 'Quemar los barcos, reprogramar el subconsciente para la abundancia y erradicar la mentalidad de escasez.'
    },
    {
      title: 'Prospección Calificada',
      icon: Target,
      color: '#00923F',
      desc: 'Atracción magnética de emprendedores en redes sociales y prospección presencial de alta efectividad.'
    },
    {
      title: 'Tecnología Digital',
      icon: Smartphone,
      color: '#00A6A6',
      desc: 'Apalancamiento con herramientas web, automatización por WhatsApp y presentaciones audiovisuales.'
    },
    {
      title: 'Comunicación de Élite',
      icon: MessagesSquare,
      color: '#0066B3',
      desc: 'Storytelling de alto impacto, oratoria en tarima y cierres directos basados en solucionar problemas.'
    },
    {
      title: 'Liderazgo & Servicio',
      icon: Users2,
      color: '#E4005A',
      desc: 'Forjar un carácter a prueba de crisis, guiar con el ejemplo y elevar el potencial de cada miembro del equipo.'
    },
    {
      title: 'Duplicación Científica',
      icon: Repeat2,
      color: '#F39200',
      desc: 'Estructurar pasos tan claros y sencillos que cualquier persona comprometida pueda duplicar los resultados.'
    },
  ];

  const abcdSteps = [
    {
      letter: 'A',
      title: 'TOMA UNA DECISIÓN',
      desc: 'El éxito comienza con un solo paso decidido. ¡Haz que cuente y no mires atrás!',
      color: '#0066B3'
    },
    {
      letter: 'B',
      title: 'CONSUME Y COMPARTE',
      desc: 'Disfruta los productos liofilizados, vive la transformación y ayuda a otros a hacerlo también.',
      color: '#E41E26'
    },
    {
      letter: 'C',
      title: 'CAPACÍTATE',
      desc: 'El conocimiento aplicado es el camino a la maestría. Conéctate al sistema educativo diario.',
      color: '#4B2E83'
    },
    {
      letter: 'D',
      title: 'DUPLICA EL SISTEMA',
      desc: 'Sigue los pasos probados, replica la estrategia con tu organización y expande tu impacto sin límites.',
      color: '#00923F'
    },
  ];

  return (
    <section id="underdog" className="relative py-24 bg-[#0b0d13] border-t border-white/5 overflow-hidden">
      {/* Background Emerald Ambient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00923F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00923F]/15 border border-[#00923F]/30 text-xs font-semibold text-[#7AC143] mb-4">
            <UnderdogDiamondIcon className="w-4 h-4" />
            <span>SISTEMA EDUCATIVO OFICIAL</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
            UNDERDOG-DIAMOND
          </h2>
          <p className="font-heading text-sm font-bold tracking-widest text-[#FFD700] uppercase mb-4">
            EL ADN DEL RETADOR &middot; CAPACÍTATE &middot; APRENDE &middot; CRECE &middot; DUPLICA
          </p>
          <p className="text-sm sm:text-base text-neutral-300 font-medium italic max-w-xl mx-auto">
            “EMPEZAR DESDE ABAJO NO DETERMINA HASTA DÓNDE PUEDES LLEGAR.”
          </p>
        </div>

        {/* Hero Banner Showcase: Merch / Book & Video Trigger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 p-6 sm:p-8 rounded-2xl glass-card border border-white/10 shadow-2xl">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FFD700] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Metodología Registrada
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              La Mente del Diamante: El Sistema Underdog
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Basado en la visión de Roger Crispín Machicado. Un sistema creado para transformar al que empieza con desventaja en un líder con resultados medibles, ingresos residuales sólidos y maestría personal.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenVideo('Presentación del Sistema UNDERDOG-DIAMOND', APP_CONFIG.VIDEOS.UNDERDOG)}
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#E41E26] to-[#F39200] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>VER VIDEO UNDERDOG-DIAMOND</span>
              </button>

              <button
                onClick={() => openWhatsApp('Hola Roger 👋 Quiero conocer más sobre el sistema educativo UNDERDOG-DIAMOND.')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#00923F] hover:bg-[#007934] text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
              >
                <span>QUIERO CONOCER EL SISTEMA UD</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <img
                src="/src/assets/images/underdog_diamond_mastery_1790715047754.jpg"
                alt="La Mente del Diamante - Sistema Underdog"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <div className="flex items-center gap-3">
                  <UnderdogDiamondIcon className="w-8 h-8" />
                  <div>
                    <div className="text-xs font-bold text-white">Edición Oficial 2026</div>
                    <div className="text-[11px] text-[#FFD700]">Gorra, Libro y Mentoría Presencial</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Los 6 Pilares Underdog */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Los 6 Pilares del Retador
            </h3>
            <span className="text-xs text-neutral-400 font-mono">ESTRUCTURA DE FORMACIÓN</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-card border border-white/5 hover:border-white/20 transition-all space-y-3"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: `${pillar.color}20`, color: pillar.color }}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sistema ABCD (Bienvenido al Éxito) */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#171a26] to-[#12141d] border border-white/10 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold text-[#FBC102] uppercase tracking-wider">
              Metodología de Duplicación Sencilla
            </span>
            <h3 className="text-2xl font-extrabold text-white tracking-tight mt-1">
              El Sistema ABCD de 4 Pasos
            </h3>
            <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
              Has dado el primer paso hacia un futuro extraordinario. Ahora, es momento de avanzar con determinación y hacer que cada acción cuente. ¡El éxito está en tus manos!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {abcdSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 relative"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-heading font-black text-lg text-white shadow-md"
                  style={{ backgroundColor: step.color }}
                >
                  {step.letter}
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-[#00923F]" />
              <span>Acceso exclusivo a socios activos de Factor X Bolivia</span>
            </div>
            <button
              onClick={() => openWhatsApp('Hola Roger 👋 Quiero conocer el Sistema ABCD y capacitarme con Underdog-Diamond.')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00923F] hover:bg-[#007934] text-white text-xs font-bold rounded-lg shadow-md transition-all active:scale-95"
            >
              <span>HABLAR CON ROGER SOBRE EL SISTEMA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
