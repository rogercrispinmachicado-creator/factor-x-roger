import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { openWhatsApp } from '../config.ts';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Tooltip Badge */}
      {showTooltip && (
        <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#161824] border border-white/10 text-white text-xs shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium">¿Necesitas ayuda? Hablar con Roger</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white p-0.5 ml-1"
            aria-label="Cerrar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => openWhatsApp('Hola Roger 👋 Estoy en la landing web Factor X Roger y me gustaría conversar contigo.')}
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#00923F] hover:bg-[#007934] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Hablar con Roger por WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-transparent" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FBC102] ring-2 ring-[#00923F]" />
        </div>
        <span className="font-heading font-black text-xs tracking-wider uppercase hidden sm:inline">
          HABLAR CON ROGER
        </span>
      </button>
    </div>
  );
}
