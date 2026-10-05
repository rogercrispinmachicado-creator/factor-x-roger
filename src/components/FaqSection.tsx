import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../config.ts';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Con cuánto puedo iniciar?',
      a: 'Puedes iniciar desde el Pack Consumidor por Bs 1.068 (78 Factor), el Pack Emprendedor por Bs 3.560 (260 Factor), o el Pack Embajador VIP por Bs 7.120 (520 Factor). En cada paquete recibes productos liofilizados oficiales a tu elección y tu código oficial de socio.'
    },
    {
      q: '¿Necesito experiencia previa?',
      a: 'No. El sistema UNDERDOG-DIAMOND fue diseñado específicamente para enseñar desde cero: prospección, mentalidad, oratoria, redes sociales y liderazgo con capacitaciones presenciales y online de lunes a viernes.'
    },
    {
      q: '¿Cómo realizo mi pedido?',
      a: 'La compra no se realiza mediante un carrito web automático. Puedes elegir tus productos en nuestro catálogo y pulsar el botón "Consultar por WhatsApp" para coordinar directamente la entrega y el pago con Roger o su equipo.'
    },
    {
      q: '¿Qué formas de pago existen?',
      a: 'Contamos con 4 modalidades informadas: Pago mediante QR Simple bancario boliviano, transferencia interbancaria, pago en efectivo (al retirar o en entrega personal) y tarjeta de crédito/débito previa consulta de disponibilidad.'
    },
    {
      q: '¿Puedo pagar por QR?',
      a: 'Sí. El pago por QR Simple es el método más rápido en Bolivia. Puedes escanear el código QR proporcionado desde cualquier banco nacional autorizado (BMSC, BCP, BNB, Banco Unión, etc.).'
    },
    {
      q: '¿Puedo pagar por transferencia?',
      a: 'Sí. Contamos con cuentas bancarias en moneda nacional (Bolivianos). Solo debes solicitar los datos actualizados por WhatsApp y remitir tu comprobante de transferencia para despachar tu producto o registrar tu paquete.'
    },
    {
      q: '¿Puedo pagar en efectivo?',
      a: 'Sí. El pago en efectivo está disponible directamente en nuestra oficina corporativa en Bolivia o contra entrega según la coordinación logística de tu ciudad.'
    },
    {
      q: '¿Aceptan tarjeta?',
      a: 'Sí, previa coordinación para generar un enlace de cobro seguro o pasar por terminal POS en los eventos u oficinas habilitadas.'
    },
    {
      q: '¿Cómo recibo mi pedido?',
      a: 'Hacemos envíos coordinados a todo el territorio nacional (La Paz, Santa Cruz, Cochabamba, Oruro, Potosí, Chuquisaca, Tarija, Beni y Pando) mediante empresas de encomienda o entrega en oficinas corporativas.'
    },
    {
      q: '¿Cómo participo en Zoom?',
      a: 'Nuestras salas virtuales de Zoom se abren de lunes a viernes a las 10:00 PM. Puedes pulsar el botón "Quiero el link de Zoom" en la sección de Agenda o escribirnos por WhatsApp para recibir el enlace de acceso diario gratuito.'
    },
    {
      q: '¿Dónde es la capacitación presencial?',
      a: 'Las capacitaciones presenciales se llevan a cabo de lunes a viernes a las 4:00 PM en nuestra Oficina Corporativa Torre AGM. Puedes reservar tu asistencia con antelación vía WhatsApp.'
    },
    {
      q: '¿Cómo puedo hablar con Roger?',
      a: 'Muy fácil: pulsa cualquiera de los botones "Hablar con Roger" en la página o el botón flotante permanente en la esquina inferior. Se abrirá una conversación directa en WhatsApp para resolver todas tus inquietudes.'
    }
  ];

  return (
    <section id="faq" className="relative py-24 bg-[#0b0c10] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-[#00A6A6] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>RESPUESTAS CLARAS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Todo lo que necesitas saber antes de dar el siguiente paso en Factor X Bolivia.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-card border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm font-bold text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#FBC102]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-neutral-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-white">¿Tienes otra consulta en particular?</div>
            <div className="text-xs text-neutral-400">Roger Crispín o su equipo te responderán con gusto.</div>
          </div>
          <button
            onClick={() => openWhatsApp('Hola Roger 👋 Tengo una pregunta sobre Factor X que no encontré en la sección FAQ.')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00923F] hover:bg-[#007934] text-white text-xs font-bold rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>CONSULTAR POR WHATSAPP</span>
          </button>
        </div>
      </div>
    </section>
  );
}
