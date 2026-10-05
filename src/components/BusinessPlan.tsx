import React, { useState } from 'react';
import { Play, Sparkles, TrendingUp, Award, Car, Building, Plane, AlertTriangle, ArrowRight, Check, DollarSign } from 'lucide-react';
import { openWhatsApp, APP_CONFIG } from '../config.ts';
import { BoliviaFlagBadge, FactorXIcon } from './BrandLogos.tsx';

interface BusinessPlanProps {
  onOpenVideo: (title: string, url?: string) => void;
}

export function BusinessPlan({ onOpenVideo }: BusinessPlanProps) {
  const [activeTab, setActiveTab] = useState<'packs' | 'bonos' | 'rangos'>('packs');

  const startPacks = [
    {
      name: 'FACTOR CONSUMIDOR',
      priceBs: 1068,
      points: 78,
      ref: '3 cappuccinos referenciales',
      sponsorBonus: 179.40,
      badge: 'Pack Inicial',
      color: '#00A6A6',
      features: [
        'Adquisición de productos a elección hasta 78 Factor',
        'Acceso a precio de afiliado con descuento',
        'Oficina virtual y herramientas digitales',
        'Bono patrocinio de Bs 179.40 para quien patrocina',
        'Puntos acumulables para binario'
      ]
    },
    {
      name: 'FACTOR EMPRENDEDOR',
      priceBs: 3560,
      points: 260,
      ref: '10 cappuccinos referenciales',
      sponsorBonus: 910.00,
      badge: 'Más Popular',
      popular: true,
      color: '#F39200',
      features: [
        'Adquisición de productos a elección hasta 260 Factor',
        'Mayor margen de comercialización directa',
        'Bono patrocinio de Bs 910.00',
        'Acceso a capacitaciones de liderazgo intermedias',
        'Posición óptima para construcción de equipos'
      ]
    },
    {
      name: 'FACTOR EMBAJADOR VIP',
      priceBs: 7120,
      points: 520,
      ref: '20 cappuccinos referenciales',
      sponsorBonus: 1820.00,
      badge: 'Máximo Apalancamiento',
      color: '#E41E26',
      features: [
        '350% de rendimiento base en 520 Factor',
        'Bono patrocinio élite de Bs 1.820.00',
        'Stock para distribución inmediata y muestras',
        'Mentoría VIP directa con líderes Diamante',
        'Elegibilidad acelerada a bonos de auto y liderazgo'
      ]
    },
  ];

  const leadershipRanks = [
    { rank: 'Oro', fortnightly: 875, monthly: 1750, color: '#FBC102' },
    { rank: 'Zafiro', fortnightly: 1312.5, monthly: 2625, color: '#0066B3' },
    { rank: 'Platino', fortnightly: 1750, monthly: 3500, color: '#A0A0A0' },
    { rank: 'Diamante', fortnightly: 4900, monthly: 9800, color: '#00A6A6' },
    { rank: 'Doble Diamante', fortnightly: 7875, monthly: 15750, color: '#7AC143' },
    { rank: 'D. Embajador Corona', fortnightly: 13125, monthly: 26250, color: '#E4005A' },
    { rank: 'Factor X Millonario', fortnightly: 15750, monthly: 31500, color: '#FFD700' },
  ];

  return (
    <section id="plan" className="relative py-24 bg-[#0e1017] border-t border-white/5 overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#F39200]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-[#FBC102] mb-3">
            <FactorXIcon className="w-3.5 h-3.5" />
            <span>MODELO DE NEGOCIO INTELIGENTE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            CONOCE EL PLAN DE NEGOCIO
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Descubre todas las formas de multiplicar tus ingresos mediante distribución inteligente, apalancamiento en equipo y regalías residuales.
          </p>
        </div>

        {/* Video Explicativo Banner */}
        <div className="mb-12 p-6 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#E41E26]/20 to-[#F39200]/20 flex items-center justify-center text-[#FBC102] shrink-0">
              <Play className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Video Explicativo: Plan de Compensación Factor X
              </h3>
              <p className="text-xs text-neutral-400">
                Aprende en minutos cómo funcionan los bonos quincenales y residuales.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenVideo('Plan de Negocio Factor X Bolivia', APP_CONFIG.VIDEOS.PLAN_NEGOCIO)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E41E26] to-[#F39200] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95 shrink-0"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>VER VIDEO EXPLICATIVO</span>
          </button>
        </div>

        {/* Segmented Sub-Navigation for Business Plan */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-1.5 p-1.5 bg-white/[0.03] border border-white/10 rounded-2xl">
            <button
              onClick={() => setActiveTab('packs')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'packs'
                  ? 'bg-gradient-to-r from-[#00923F] to-[#00A6A6] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              1. Packs de Afiliación
            </button>
            <button
              onClick={() => setActiveTab('bonos')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'bonos'
                  ? 'bg-gradient-to-r from-[#00923F] to-[#00A6A6] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              2. Formas de Ganar
            </button>
            <button
              onClick={() => setActiveTab('rangos')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'rangos'
                  ? 'bg-gradient-to-r from-[#00923F] to-[#00A6A6] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              3. Residuales & Rangos
            </button>
          </div>
        </div>

        {/* TAB 1: PACKS DE AFILIACIÓN */}
        {activeTab === 'packs' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {startPacks.map((pack, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl glass-card p-6 flex flex-col justify-between transition-all duration-300 ${
                  pack.popular
                    ? 'border-2 border-[#F39200] shadow-2xl scale-102 bg-[#171a26]'
                    : 'border border-white/5'
                }`}
              >
                {pack.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#E41E26] to-[#F39200] text-white text-[10px] font-extrabold uppercase rounded-full shadow-md tracking-wider">
                    Recomendado para Emprender
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      {pack.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[11px] font-mono font-bold text-[#FBC102]">
                      {pack.points} Factor
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white tracking-tight mb-2">
                    {pack.name}
                  </h3>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-white tabular-nums tracking-tight">
                        Bs {pack.priceBs.toLocaleString()}
                      </span>
                      <span className="text-xs text-neutral-400 font-semibold">BOB</span>
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      Referencia: {pack.ref}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300 mb-5">
                    <span className="font-bold text-white">Gana de Bono Patrocinio: </span>
                    <span className="font-extrabold text-[#7AC143] tabular-nums">
                      Bs {pack.sponsorBonus.toFixed(2)}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-neutral-300 mb-6">
                    {pack.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#00923F] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openWhatsApp(`Hola Roger 👋 Quiero conocer más sobre el paquete de afiliación *${pack.name}* (Bs ${pack.priceBs}).`)}
                  className="w-full py-3 bg-[#00923F] hover:bg-[#007934] text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
                >
                  QUIERO ESTE PACK
                </button>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: FORMAS DE GANAR */}
        {activeTab === 'bonos' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Distribución Directa */}
              <div className="p-6 rounded-2xl glass-card border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F39200] uppercase">
                  <DollarSign className="w-4 h-4" />
                  01. Distribución Directa (Ventas)
                </div>
                <h3 className="text-lg font-bold text-white">Margen hasta el 32.5%</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Por cada caja de producto que comercializas directamente ganas <strong className="text-white">Bs 137.70</strong> de utilidad limpia (Precio Público: Bs 423.70 - Precio Socio: Bs 286.00).
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 text-center">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] text-neutral-400">1 al día:</div>
                    <div className="text-base font-extrabold text-[#7AC143] tabular-nums mt-0.5">Bs 4,131 / mes</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] text-neutral-400">2 al día:</div>
                    <div className="text-base font-extrabold text-[#FBC102] tabular-nums mt-0.5">Bs 8,262 / mes</div>
                  </div>
                </div>
              </div>

              {/* Bono Patrocinio */}
              <div className="p-6 rounded-2xl glass-card border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00A6A6] uppercase">
                  <TrendingUp className="w-4 h-4" />
                  02. Bono de Patrocinio (5 Niveles)
                </div>
                <h3 className="text-lg font-bold text-white">Hasta 730% en 5 Niveles</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Recibe comisiones inmediatas cada vez que un nuevo miembro se incorpora a tu equipo en cualquiera de los packs:
                </p>
                <ul className="space-y-1.5 text-xs text-neutral-300 pt-1">
                  <li>&bull; <strong className="text-white">Nivel 1 (Directos):</strong> 350% = <strong className="text-[#7AC143]">Bs 1,820</strong> por nuevo Embajador</li>
                  <li>&bull; <strong className="text-white">Niveles 2 al 5:</strong> 95% = <strong className="text-neutral-200">Bs 494</strong> en cada nivel por socio</li>
                </ul>
              </div>

              {/* Residual Binario */}
              <div className="p-6 rounded-2xl glass-card border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00923F] uppercase">
                  <Sparkles className="w-4 h-4" />
                  03. Residual Equipo Binario
                </div>
                <h3 className="text-lg font-bold text-white">60% a 90% Quincenal</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Se calcula de manera quincenal sobre el brazo menor de tu organización, pagado directamente en forma global y hasta el infinito.
                </p>
              </div>

              {/* Residual Multinivel & Ahorro Familia */}
              <div className="p-6 rounded-2xl glass-card border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#E4005A] uppercase">
                  <Award className="w-4 h-4" />
                  04. Residual Multinivel & Ahorro Familia
                </div>
                <h3 className="text-lg font-bold text-white">70% Residual + 4.375% Familiar</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Gana desde el 70% del volumen general de factor hasta el infinito. Además, la compañía te paga el <strong className="text-white">4.375% de Residual Ahorro Familia</strong> acumulado al final del año pensando en el patrimonio de tus seres queridos.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: RESIDUALES DE LIDERAZGO & RANGOS */}
        {activeTab === 'rangos' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Tabla de Residual de Liderazgo Quincenal */}
            <div className="p-6 rounded-2xl glass-card border border-white/10">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Residual de Liderazgo Quincenal
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Gana todas las quincenas por mantener y superar rangos
                  </p>
                </div>
                <BoliviaFlagBadge className="w-5 h-3.5" />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-neutral-400 font-semibold uppercase text-[10px]">
                      <th className="py-2.5 px-3">Rango de Liderazgo</th>
                      <th className="py-2.5 px-3 text-right">Quincena 1</th>
                      <th className="py-2.5 px-3 text-right">Quincena 2</th>
                      <th className="py-2.5 px-3 text-right text-white">Total al Mes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono">
                    {leadershipRanks.map((r, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-2.5 px-3 font-sans font-bold text-white flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: r.color }} />
                          {r.rank}
                        </td>
                        <td className="py-2.5 px-3 text-right text-neutral-300">
                          Bs {r.fortnightly.toLocaleString()}
                        </td>
                        <td className="py-2.5 px-3 text-right text-neutral-300">
                          Bs {r.fortnightly.toLocaleString()}
                        </td>
                        <td className="py-2.5 px-3 text-right font-extrabold text-[#7AC143]">
                          Bs {r.monthly.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bonos de Estilo de Vida: Auto, Departamento y Viaje */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Auto */}
              <div className="p-5 rounded-2xl glass-card border border-white/5 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#00923F]/20 text-[#7AC143] flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Residual Auto Mensual</h4>
                <p className="text-xs text-neutral-300">
                  Para rangos Platino (Bs 1,750), Diamante (Bs 2,625) y Doble Diamante (Bs 3,150) mensuales para adquirir tu vehículo cero kilómetros.
                </p>
              </div>

              {/* Departamento */}
              <div className="p-5 rounded-2xl glass-card border border-white/5 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0066B3]/20 text-[#00A6A6] flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Residual Departamento</h4>
                <p className="text-xs text-neutral-300">
                  Para Diamante Embajador Corona (Bs 5,250/mes) y Factor X Millonario (Bs 7,875/mes) destinado a tu departamento propio.
                </p>
              </div>

              {/* Viajes */}
              <div className="p-5 rounded-2xl glass-card border border-white/5 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#F39200]/20 text-[#FBC102] flex items-center justify-center">
                  <Plane className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Bono de Viaje Cusco</h4>
                <p className="text-xs text-neutral-300">
                  Experiencias todo pagado para reconocer el esfuerzo y liderazgo en destinos históricos de Sudamérica junto a los mejores líderes.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Legal Disclaimer Box */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-neutral-400">
          <AlertTriangle className="w-4 h-4 text-[#FBC102] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-neutral-300">Aviso de Transparencia y Buenas Prácticas:</strong> Los resultados pueden variar según actividad, ventas, dedicación, habilidades personales, mercado y otros factores. Factor X Bolivia promueve el esfuerzo genuino, la formación profesional y el consumo ético de productos. Ningún ingreso o rango es garantizado sin trabajo y compromiso.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <button
            onClick={() => openWhatsApp('Hola Roger 👋 Quiero conocer el Plan de Negocio detallado de Factor X y comenzar con mi equipo.')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#00923F] to-[#00A6A6] hover:opacity-95 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all active:scale-95"
          >
            <span>QUIERO CONOCER EL PLAN COMPLETO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
