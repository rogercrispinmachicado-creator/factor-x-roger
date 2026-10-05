import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { FactorXIcon } from './BrandLogos.tsx';
import { openWhatsApp } from '../config.ts';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Roger', href: '#roger' },
    { label: 'Factor X', href: '#factor-x' },
    { label: 'Productos', href: '#productos' },
    { label: 'Underdog', href: '#underdog' },
    { label: 'Plan', href: '#plan' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Single element wordmark & icon */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity shrink-0"
        >
          <FactorXIcon className="w-8 h-8" />
          <span className="font-heading font-black text-lg tracking-tight whitespace-nowrap">
            FACTOR X <span className="text-[#FBC102]">ROGER</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links (single line, desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#FBC102] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => openWhatsApp('Hola Roger 👋 Quiero conversar contigo sobre Factor X y Underdog-Diamond.')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00923F] to-[#00A6A6] hover:from-[#007934] hover:to-[#008f8f] text-white text-xs font-bold rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">HABLAR CON ROGER</span>
            <span className="sm:hidden">CONTACTAR</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#12141e] border-b border-white/10 px-4 py-5 space-y-3 animate-in fade-in duration-150">
          <div className="grid grid-cols-2 gap-2 text-xs uppercase font-semibold text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.08] hover:text-[#FBC102] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp('Hola Roger 👋 Quiero conversar contigo.');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#00923F] hover:bg-[#007934] text-white text-xs font-bold rounded-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>HABLAR CON ROGER POR WHATSAPP</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
