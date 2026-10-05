import React from 'react';
import { Play, Sparkles, Building2, Eye, Compass, ShieldCheck, Snowflake, Cpu, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../config.ts';
import { FactorXIcon, BoliviaFlagBadge } from './BrandLogos.tsx';

interface FactorXCompanyProps {
  onOpenVideo: (title: string, url?: string) => void;
}

export function FactorXCompany({ onOpenVideo }: FactorXCompanyProps) {
  const corporateOffices = [
    {
      country: 'Bolivia',
      title: 'Sede Corporativa Bolivia',
      place: 'Torre AGM',
      detail: 'Centro de operaciones nacionales, capacitaciones y liderazgo.',
      badge: 'Sede Oficial'
    },
    {
      country: 'Perú',
      title: 'Planta Industrial Propia',
      place: 'Lima · Perú',
      detail: 'Investigación, formulación y cámara de liofilización de alta tecnología.',
      badge: 'Manufactura Propia'
    },
    {
      country: 'Perú',
      title: 'Sede Corporativa Perú',
      place: 'San Isidro · Lima',
      detail: 'Oficina ejecutiva principal de expansión andina.',
      badge: 'Oficina Ejecutiva'
    },
    {
      country: 'Ecuador',
      title: 'Sede Corporativa Ecuador',
      place: 'Guayaquil · Ecuador',
      detail: 'Centro de distribución y desarrollo de equipos ecuatorianos.',
      badge: 'Hub Internacional'
    },
  ];

  const freezeDryingSteps = [
    {
      num: '1',
      title: 'Congelación Rápida al Vacío',
      desc: 'Frutas frescas y botánicos andino-amazónicos se congelan a ultra-baja temperatura y se introducen en una cámara de vacío de grado farmacéutico.'
    },
    {
      num: '2',
      title: '96.7% de Humedad Eliminada',
      desc: 'Por sublimación directa a temperaturas de hasta -50 °C, el hielo pasa directamente a vapor sin pasar por el estado líquido, sin romper las células.'
    },
    {
      num: '3',
      title: 'Sellado Hermético Total',
      desc: 'Se envasa en sachets herméticos multicapa que garantizan máxima protección contra la luz y la humedad, preservando el 100% de los nutrientes vivos.'
    },
    {
      num: '4',
      title: 'Rehidratación Instantánea',
      desc: 'Al agregar agua caliente o fría, los fitonutrientes recuperan instantáneamente su aroma, sabor fresco, enzimas y bioactividad original.'
    },
  ];

  return (
    <section id="factor-x" className="relative py-24 bg-[#0b0c10] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#00A6A6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-[#00A6A6] mb-3">
            <FactorXIcon className="w-4 h-4" />
            <span>RUMBO A LA EXCELENCIA</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            FACTOR X COMPANY
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed [text-wrap:balance]">
            Somos Factor X Company una empresa Latina, dedicada a la investigación y desarrollo en la tecnología de liofilizado e impulsamos el conocimiento milenario de nuestras comunidades nativas causando un impacto positivo en la salud y la economía familiar.
          </p>
        </div>

        {/* Video Corporativo Trigger Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl glass-card border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FBC102]">
              Conoce la Compañía
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1 mb-2">
              Presentación Corporativa Oficial Factor X
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Descubre nuestra visión continental, infraestructura y el respaldo de una empresa con planta propia e investigación biotecnológica.
            </p>
          </div>
          <button
            onClick={() => onOpenVideo('Presentación Corporativa Factor X', APP_CONFIG.VIDEOS.CORPORATIVO)}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#E41E26] to-[#F39200] hover:opacity-95 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all active:scale-95 shrink-0"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>VER VIDEO CORPORATIVO</span>
          </button>
        </div>

        {/* Misión, Visión & Liderazgo Fundador */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Misión */}
          <div className="p-6 rounded-2xl glass-card border-t-2 border-t-[#00923F] border-x border-b border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#00923F]/15 flex items-center justify-center text-[#7AC143]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">Nuestra Misión</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              A través de un sistema educativo no tradicional llevamos un mensaje de salud física, emocional y espiritual alcanzando así una excelencia de vida.
            </p>
          </div>

          {/* Visión */}
          <div className="p-6 rounded-2xl glass-card border-t-2 border-t-[#0066B3] border-x border-b border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#0066B3]/15 flex items-center justify-center text-[#00A6A6]">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">Nuestra Visión</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Nuestro objetivo es marcar la diferencia en la industria de redes de mercadeo con tecnología e innovación.
            </p>
          </div>

          {/* CEO & Fundador */}
          <div className="p-6 rounded-2xl glass-card border-t-2 border-t-[#E41E26] border-x border-b border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E41E26]/15 flex items-center justify-center text-[#E41E26]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                Dirección Corporativa
              </span>
              <h3 className="text-base font-bold text-white tracking-tight">
                Ronald Bellido
              </h3>
              <p className="text-xs text-[#FBC102] font-semibold mt-0.5">
                CEO &middot; Fundador
              </p>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Presidente del Directorio, empresario desde su juventud y networker apasionado con visión de servicio y solidez industrial.
            </p>
          </div>
        </div>

        {/* Tecnología de Liofilización (La Ciencia) */}
        <div className="p-8 rounded-2xl bg-gradient-to-b from-[#131622] to-[#0e1017] border border-white/10 shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00A6A6] uppercase tracking-wider mb-1">
                <Snowflake className="w-4 h-4" />
                Tecnología Exclusiva
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Nuestro Principal Factor: La Liofilización
              </h3>
            </div>
            <p className="text-xs text-neutral-400 max-w-md">
              Deshidrocongelación al vacío a -50 °C: la preservación celular que mantiene intactos los nutrientes y bioactivos sin conservantes químicos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {freezeDryingSteps.map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="inline-block text-xs font-mono font-bold text-[#FBC102] px-2 py-0.5 rounded-md bg-[#FBC102]/10 border border-[#FBC102]/20">
                  Etapa 0{step.num}
                </span>
                <h4 className="text-xs font-bold text-white">{step.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300 flex items-center gap-3">
            <span className="text-xl">🏔️</span>
            <span>
              <strong>Herencia Ancestral:</strong> La liofilización fue descubierta originalmente por los pueblos indígenas de los Andes sudamericanos, preservando alimentos a la intemperie en las montañas (evidenciado con el chuño milenario).
            </span>
          </div>
        </div>

        {/* Sedes Corporativas */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#F39200]" />
              Sedes e Infraestructura Corporativa
            </h3>
            <span className="text-xs text-neutral-400">Presencia Internacional</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {corporateOffices.map((office, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl glass-card border border-white/5 hover:border-white/20 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A6A6]">
                    {office.badge}
                  </span>
                  {office.country === 'Bolivia' && <BoliviaFlagBadge className="w-4 h-3" />}
                </div>
                <h4 className="text-sm font-bold text-white">{office.title}</h4>
                <div className="text-xs font-medium text-[#FBC102]">{office.place}</div>
                <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                  {office.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Products */}
        <div className="mt-12 text-center">
          <a
            href="#productos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-bold rounded-xl transition-all"
          >
            <span>EXPLORAR CATÁLOGO DE PRODUCTOS LIOFILIZADOS</span>
            <ArrowRight className="w-4 h-4 text-[#FBC102]" />
          </a>
        </div>
      </div>
    </section>
  );
}
