import React, { useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { Product } from '../data/products.ts';
import { productWhatsApp } from '../config.ts';
import { FactorXIcon, BoliviaFlagBadge } from './BrandLogos.tsx';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenVideo?: (title: string) => void;
}

export function ProductDetailModal({
  product,
  onClose,
  onOpenVideo,
}: ProductDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#12141d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161823] shrink-0">
          <div className="flex items-center gap-3">
            <FactorXIcon className="w-5 h-5 shrink-0" />
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F39200]">
                {product.categoryLabel}
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {product.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Cerrar ficha"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body - Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Top Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <div>
              <div className="text-xs text-neutral-400">Presentación Oficial</div>
              <div className="text-sm font-semibold text-white">{product.presentation}</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-neutral-400">Precio Público</div>
                <div className="text-base font-extrabold text-[#FBC102] tabular-nums">
                  Bs {product.priceBs.toFixed(2)}
                </div>
              </div>
              <div className="px-2.5 py-1 rounded-md bg-[#00923F]/20 border border-[#00923F]/40 text-[#7AC143] text-xs font-bold tabular-nums">
                {product.points} Pts Factor
              </div>
            </div>
          </div>

          {/* Pricing Tier Table (From Official Bolivian Price Sheet) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <BoliviaFlagBadge className="w-4 h-3" />
                Escala de Precios Bolivia (Oficial)
              </h4>
              <span className="text-[11px] text-neutral-500">Tipo de cambio Bs 10</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="text-neutral-400 text-[11px]">Público</div>
                <div className="text-white font-bold mt-0.5 tabular-nums">Bs {product.priceBs.toFixed(2)}</div>
                <div className="text-[10px] text-neutral-500 mt-0.5">${product.priceUsd.toFixed(2)} USD</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0066B3]/10 border border-[#0066B3]/30">
                <div className="text-[#00A6A6] text-[11px] font-semibold">Afiliación (16%)</div>
                <div className="text-white font-bold mt-0.5 tabular-nums">Bs {product.memberPriceBs.toFixed(2)}</div>
                <div className="text-[10px] text-neutral-400 mt-0.5">Única vez</div>
              </div>
              <div className="p-3 rounded-lg bg-[#00923F]/10 border border-[#00923F]/30">
                <div className="text-[#7AC143] text-[11px] font-semibold">Mayorista (32.5%)</div>
                <div className="text-white font-bold mt-0.5 tabular-nums">Bs {product.wholesalePriceBs.toFixed(2)}</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">Máximo ahorro</div>
              </div>
            </div>
          </div>

          {/* Highlights & Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FBC102]" />
              Beneficios Funcionales Principales
            </h4>
            <ul className="space-y-2">
              {product.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#00923F] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ingredients list */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A6A6]" />
              Ingredientes & Activos Liofilizados
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {product.ingredients.map((ing, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/10 text-neutral-300"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
              Modo de Consumo Sugerido
            </h5>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {product.recommendation}
            </p>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="p-4 px-6 bg-[#161823] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {onOpenVideo && (
            <button
              onClick={() => {
                onClose();
                onOpenVideo(product.name);
              }}
              className="text-xs text-neutral-400 hover:text-white transition-colors"
            >
              🎬 Ver Video Demostrativo
            </button>
          )}
          <button
            onClick={() => productWhatsApp(product.name)}
            className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00923F] to-[#00A6A6] hover:from-[#007934] hover:to-[#008f8f] text-white text-xs font-bold rounded-lg shadow-lg transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
