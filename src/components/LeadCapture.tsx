import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Sparkles, AlertCircle } from 'lucide-react';
import { leadWhatsApp, APP_CONFIG } from '../config.ts';
import { BoliviaFlagBadge, FactorXIcon } from './BrandLogos.tsx';

export function LeadCapture() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [interest, setInterest] = useState('Negocio');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const interests = [
    'Negocio',
    'Producto',
    'Agenda presencial',
    'Zoom',
    'Underdog-Diamond',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Por favor ingresa tu nombre completo.');
      return;
    }

    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      setErrorMessage('Por favor ingresa un número de WhatsApp válido.');
      return;
    }

    if (!city.trim()) {
      setErrorMessage('Por favor indica tu ciudad.');
      return;
    }

    setStatus('submitting');

    const leadData = {
      name: fullName.trim(),
      phone: phone.trim(),
      city: city.trim(),
      interest: interest,
      date: new Date().toISOString(),
      source: 'Landing Web Factor X Roger 2026',
    };

    // Optional Google Sheets integration (Never blocks user if empty or fails)
    if (APP_CONFIG.GOOGLE_SHEETS_URL && APP_CONFIG.GOOGLE_SHEETS_URL.trim().length > 0) {
      try {
        await fetch(APP_CONFIG.GOOGLE_SHEETS_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadData),
        });
      } catch (err) {
        console.warn('Google Sheets integration sync skipped:', err);
      }
    }

    setStatus('success');

    // Open WhatsApp directly with prepared lead message
    leadWhatsApp({
      name: leadData.name,
      city: leadData.city,
      interest: leadData.interest,
      phone: leadData.phone,
    });
  };

  return (
    <section id="contacto" className="relative py-24 bg-[#0b0c10] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#E41E26]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-[#F39200] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ATENCIÓN Y ASESORÍA PERSONALIZADA</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            🚀 QUIERO RECIBIR INFORMACIÓN
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Completa tus datos para recibir asesoramiento directo de Roger Crispín o su equipo sobre productos, membresías o capacitaciones.
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded-3xl glass-card border border-white/10 shadow-2xl relative">
          {status === 'success' ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#00923F]/20 text-[#7AC143] flex items-center justify-center mx-auto border border-[#00923F]/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">
                ¡Información Preparada con Éxito!
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Se ha generado tu solicitud de contacto para Roger Crispín. Si la ventana de WhatsApp no se abrió automáticamente, pulsa el botón a continuación.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() =>
                    leadWhatsApp({
                      name: fullName,
                      city: city,
                      interest: interest,
                      phone: phone,
                    })
                  }
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#00923F] hover:bg-[#007934] text-white text-xs font-bold rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ABRIR MI MENSAJE EN WHATSAPP</span>
                </button>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFullName('');
                    setPhone('');
                    setCity('');
                  }}
                  className="px-5 py-3 bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 text-xs font-semibold rounded-xl"
                >
                  Enviar otra consulta
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center gap-2 text-xs text-red-200">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nombre */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Nombre Completo <span className="text-[#E41E26]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FBC102] transition-colors"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    WhatsApp con Código de País <span className="text-[#E41E26]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej. +591 70000000"
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FBC102] transition-colors"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <BoliviaFlagBadge className="w-4 h-3" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Ciudad */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Ciudad / Departamento <span className="text-[#E41E26]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ej. La Paz, Santa Cruz, Cochabamba..."
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FBC102] transition-colors"
                  />
                </div>

                {/* Interés */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Área de Principal Interés <span className="text-[#E41E26]">*</span>
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-[#161824] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#FBC102] transition-colors"
                  >
                    {interests.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#161824] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#E41E26] via-[#F39200] to-[#FBC102] hover:opacity-95 text-white font-heading font-black text-sm tracking-wider uppercase rounded-xl shadow-xl transition-all active:scale-98 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>ENVIAR INFORMACIÓN &middot; HABLAR CON ROGER</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-400">
                🔒 Tus datos se tratan con estricta confidencialidad para coordinar tu contacto directo.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
