import React, { useState } from 'react';
import { Play, Calendar, MapPin, Video, Clock, ArrowRight, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { presencialWhatsApp, zoomWhatsApp, APP_CONFIG } from '../config.ts';
import { BoliviaFlagBadge } from './BrandLogos.tsx';

interface AgendaSectionProps {
  onOpenVideo: (title: string, url?: string) => void;
}

export function AgendaSection({ onOpenVideo }: AgendaSectionProps) {
  const [activeTab, setActiveTab] = useState<'presencial' | 'online'>('presencial');

  const presencialSchedule = [
    {
      day: 'LUNES',
      time: '4:00 PM',
      title: 'Mentalidad & Liderazgo',
      hook: 'Blindaje Mental & Estándares de Éxito',
      desc: 'Formación profunda en reprogramación de creencias, manejo de objeciones y liderazgo transformacional con Roger Crispín.',
      color: '#E41E26'
    },
    {
      day: 'MARTES',
      time: '4:00 PM',
      title: 'Negocio & Operaciones',
      hook: 'Estructuración de Equipos & Finanzas',
      desc: 'Capacitación operativa: cómo estructurar tu binario quincenal, manejo de inventario y aceleración de volumen.',
      color: '#F39200'
    },
    {
      day: 'MIÉRCOLES',
      time: '4:00 PM',
      title: 'Presentación de Negocio',
      hook: 'Presentación Abierta de Alto Impacto',
      desc: 'Lleva a tus invitados a la oficina corporativa para vivir la visión de la empresa con degustación de productos liofilizados.',
      color: '#FBC102'
    },
    {
      day: 'JUEVES',
      time: '4:00 PM',
      title: 'Productos & Liofilización',
      hook: 'La Ciencia Detrás de los Superalimentos',
      desc: 'Explicación detallada de la tecnología de deshidrocongelación al vacío a -50°C, fitonutrientes y testimonios de salud.',
      color: '#00923F'
    },
    {
      day: 'VIERNES',
      time: '4:00 PM',
      title: 'Redes Sociales & Meta Ads',
      hook: 'Prospección Digital & Automatización',
      desc: 'Taller práctico con computadoras y smartphones: campañas en Meta Ads, WhatsApp Business y creación de marca personal.',
      color: '#00A6A6'
    },
  ];

  const onlineSchedule = [
    {
      day: 'LUNES',
      time: '10:00 PM',
      title: 'Presentación de Producto',
      hook: 'Salud, Bienestar & Nutrición Celular',
      desc: 'Transmisión en vivo por Zoom sobre las líneas de liofilizados, cómo tomarlos y beneficios de salud en la familia.',
      color: '#0066B3'
    },
    {
      day: 'MARTES',
      time: '10:00 PM',
      title: 'Presentación Ecuador',
      hook: 'Expansión Internacional de Equipos',
      desc: 'Conexión especial con líderes y prospectos de Ecuador para presentar el modelo de negocio y productos.',
      color: '#E4005A'
    },
    {
      day: 'MIÉRCOLES',
      time: '10:00 PM',
      title: 'Presentación Bolivia + Escuela',
      hook: 'Noche Central de Negocio & Academia',
      desc: 'La reunión más concurrida de la semana: presentación de negocio nacional y entrenamiento élite de la escuela de negocios.',
      color: '#FBC102'
    },
    {
      day: 'JUEVES',
      time: '10:00 PM',
      title: 'Presentación de Producto',
      hook: 'Enfoque Clínico y Experiencias Reales',
      desc: 'Resuelve dudas sobre productos, dosificación y testimonios de impacto real con los productos Factor X.',
      color: '#00923F'
    },
    {
      day: 'VIERNES',
      time: '10:00 PM',
      title: 'Presentación de Negocio',
      hook: 'Cierre de Semana & Proyección Quincenal',
      desc: 'Estrategias para alcanzar nuevos rangos, sumar puntos al binario y cerrar el periodo con resultados positivos.',
      color: '#F39200'
    },
  ];

  const handleZoomClick = () => {
    if (APP_CONFIG.ZOOM_LINK && APP_CONFIG.ZOOM_LINK.trim().length > 0) {
      window.open(APP_CONFIG.ZOOM_LINK, '_blank', 'noopener,noreferrer');
    } else {
      zoomWhatsApp();
    }
  };

  return (
    <section id="agenda" className="relative py-24 bg-[#0b0c10] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-[#00A6A6] mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>CALENDARIO DE FORMACIÓN & NEGOCIOS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            AGENDA SEMANAL DE ACTIVIDADES
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Participa de nuestras capacitaciones presenciales en la oficina corporativa y conéctate a las salas de Zoom desde cualquier ciudad.
          </p>
        </div>

        {/* Video Agenda Banner */}
        <div className="mb-10 p-5 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00923F]/20 text-[#7AC143] flex items-center justify-center shrink-0">
              <Play className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                Video de Capacitación & Escuela de Negocios
              </h3>
              <p className="text-xs text-neutral-400">
                Observa la energía, el ambiente y el aprendizaje en vivo de nuestros eventos.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenVideo('Video de Capacitaciones Factor X', APP_CONFIG.VIDEOS.AGENDA_PRESENCIAL)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#E41E26] to-[#F39200] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95 shrink-0"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>VER VIDEO CAPACITACIÓN</span>
          </button>
        </div>

        {/* Switcher Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="p-1 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center gap-2">
            <button
              onClick={() => setActiveTab('presencial')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'presencial'
                  ? 'bg-gradient-to-r from-[#E41E26] to-[#F39200] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>📍 AGENDA PRESENCIAL (4:00 PM)</span>
            </button>
            <button
              onClick={() => setActiveTab('online')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'online'
                  ? 'bg-gradient-to-r from-[#0066B3] to-[#00A6A6] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>🎥 AGENDA ONLINE ZOOM (10:00 PM)</span>
            </button>
          </div>
        </div>

        {/* PRESENCIAL CARDS */}
        {activeTab === 'presencial' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 text-[#E41E26]" />
                <span className="font-bold">Lugar:</span>
                <span className="text-neutral-300">{APP_CONFIG.PRESENTIAL_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2 text-[#FBC102]">
                <Clock className="w-4 h-4" />
                <span className="font-bold">Horario fijo: 4:00 PM (Hora de Bolivia)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {presencialSchedule.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-card border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-black text-white" style={{ backgroundColor: item.color }}>
                        {item.day}
                      </span>
                      <span className="text-xs font-mono font-semibold text-neutral-400">
                        {item.time}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white tracking-tight mt-2 mb-1">
                      {item.title}
                    </h4>

                    <div className="text-xs font-semibold text-[#F39200] mb-2">
                      {item.hook}
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => presencialWhatsApp()}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-white/[0.04] hover:bg-[#00923F] text-neutral-200 hover:text-white text-xs font-bold rounded-xl border border-white/10 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#E41E26] group-hover:text-white" />
                    <span>QUIERO ASISTIR</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ONLINE CARDS */}
        {activeTab === 'online' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-white">
                <Video className="w-4 h-4 text-[#00A6A6]" />
                <span className="font-bold">Plataforma:</span>
                <span className="text-blue-300">Sala Oficial Zoom Factor X (Capacidad ampliada)</span>
              </div>
              <div className="flex items-center gap-2 text-[#FBC102]">
                <Clock className="w-4 h-4" />
                <span className="font-bold">Horario: 10:00 PM (Bolivia / Ecuador)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {onlineSchedule.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-card border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-black text-white" style={{ backgroundColor: item.color }}>
                        {item.day}
                      </span>
                      <span className="text-xs font-mono font-semibold text-neutral-400">
                        {item.time}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white tracking-tight mt-2 mb-1">
                      {item.title}
                    </h4>

                    <div className="text-xs font-semibold text-[#00A6A6] mb-2">
                      {item.hook}
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={handleZoomClick}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-[#0066B3] to-[#00A6A6] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>QUIERO EL LINK DE ZOOM</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
