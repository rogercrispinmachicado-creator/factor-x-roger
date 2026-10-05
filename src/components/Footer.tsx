import React from 'react';
import { FactorXIcon, BoliviaFlagBadge } from './BrandLogos.tsx';
import { openWhatsApp } from '../config.ts';

export function Footer() {
  return (
    <footer className="bg-[#08090d] border-t border-white/10 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <FactorXIcon className="w-8 h-8" />
              <span className="font-heading font-black text-lg tracking-tight">
                FACTOR X <span className="text-[#FBC102]">ROGER</span>
              </span>
            </div>
            <p className="text-xs text-neutral-300 italic">
              “Transformando el mundo una vida a la vez”
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Plataforma informativa oficial de Factor X Company Bolivia, Roger Crispín Machicado y el Sistema de Liderazgo UNDERDOG-DIAMOND.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
              <BoliviaFlagBadge className="w-4 h-3" />
              <span>Operaciones Oficiales en Bolivia &middot; 2026</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#roger" className="hover:text-white transition-colors">Roger Crispín</a></li>
              <li><a href="#factor-x" className="hover:text-white transition-colors">Factor X Company</a></li>
              <li><a href="#productos" className="hover:text-white transition-colors">Catálogo de Productos</a></li>
              <li><a href="#underdog" className="hover:text-white transition-colors">Underdog-Diamond</a></li>
              <li><a href="#plan" className="hover:text-white transition-colors">Plan de Negocio</a></li>
              <li><a href="#agenda" className="hover:text-white transition-colors">Agenda Presencial & Zoom</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Pagos Informativos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Formas de Pago
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-neutral-300">📱 QR Simple Interbancario</span></li>
              <li><span className="text-neutral-300">🏦 Transferencia Bancaria</span></li>
              <li><span className="text-neutral-300">💵 Efectivo en Oficina</span></li>
              <li><span className="text-neutral-300">💳 Tarjeta Débito / Crédito</span></li>
            </ul>
            <div className="pt-2">
              <button
                onClick={() => openWhatsApp('Hola Roger 👋 Quiero consultar sobre métodos de pago y cuentas bancarias.')}
                className="text-[11px] text-[#00A6A6] hover:underline block"
              >
                Consultar cuentas por WhatsApp &rarr;
              </button>
            </div>
          </div>

          {/* Legal & Transparencia */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Avisos Legales
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-white transition-colors">Términos del Sitio</a></li>
              <li><a href="#inicio" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#plan" className="hover:text-white transition-colors">Descargo de Responsabilidad</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Canal de Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; 2026 FACTOR X ROGER. Todos los derechos reservados.
          </div>
          <div className="text-[11px] text-neutral-500 text-center sm:text-right">
            Esta landing web no procesa pagos en línea de forma automática. Todas las ventas y asesorías se coordinan directamente vía WhatsApp.
          </div>
        </div>
      </div>
    </footer>
  );
}
