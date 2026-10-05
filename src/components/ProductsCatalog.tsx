import React, { useState, useMemo } from 'react';
import { Search, Play, MessageCircle, Info, Sparkles, Filter } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products.ts';
import { productWhatsApp, APP_CONFIG } from '../config.ts';
import { BoliviaFlagBadge, FactorXIcon } from './BrandLogos.tsx';

interface ProductsCatalogProps {
  onSelectProduct: (product: Product) => void;
  onOpenVideo: (title: string, url?: string) => void;
}

export function ProductsCatalog({ onSelectProduct, onOpenVideo }: ProductsCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { key: 'todos', label: 'Todos' },
    { key: 'nutricion', label: 'Nutrición' },
    { key: 'cafe', label: 'Café' },
    { key: 'colageno', label: 'Colágeno' },
    { key: 'moringa', label: 'Moringa' },
    { key: 'bienestar', label: 'Bienestar' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === 'todos' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.presentation.toLowerCase().includes(query) ||
        item.highlight.toLowerCase().includes(query) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="productos" className="relative py-24 bg-[#0e1017] border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-[#00923F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-[#F39200] mb-3">
            <FactorXIcon className="w-3.5 h-3.5" />
            <span>CATÁLOGO OFICIAL BOLIVIA 2026</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            CONOCE NUESTROS PRODUCTOS
          </h2>
          <p className="text-sm text-neutral-400">
            Explora el catálogo de nutrición celular y superalimentos liofilizados Factor X
          </p>
        </div>

        {/* Video General de Productos Banner */}
        <div className="mb-10 p-5 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E41E26]/20 to-[#F39200]/20 flex items-center justify-center text-[#FBC102] shrink-0">
              <Play className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                Video Presentación: Conoce Nuestros Productos
              </h3>
              <p className="text-xs text-neutral-400">
                Observa los procesos de liofilización, ingredientes y modo de preparación.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenVideo('Presentación General de Productos Factor X', APP_CONFIG.VIDEOS.PRODUCTOS)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#E41E26] to-[#F39200] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95 shrink-0"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>VER VIDEO CATÁLOGO</span>
          </button>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs (Segmented Buttons) */}
          <div className="w-full md:w-auto flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/5 rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-[#00923F] to-[#00A6A6] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar producto, activo..."
              className="w-full pl-9 pr-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FBC102] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Results Counter & Bolivia Price Notice */}
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-6 px-1">
          <div className="flex items-center gap-2">
            <BoliviaFlagBadge className="w-4 h-3" />
            <span>Precios oficiales en Bolivianos (Bs) &middot; {filteredProducts.length} productos listados</span>
          </div>
          <span className="hidden sm:inline text-neutral-500">
            Asesoría directa y pedidos vía WhatsApp oficial
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl glass-card border border-white/5">
            <Filter className="w-8 h-8 text-neutral-500 mx-auto mb-3" />
            <p className="text-sm font-semibold text-white mb-1">
              No se encontraron productos con ese filtro
            </p>
            <p className="text-xs text-neutral-400 mb-4">
              Intenta con otro término o selecciona "Todos"
            </p>
            <button
              onClick={() => {
                setActiveCategory('todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-lg"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative rounded-2xl glass-card border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl"
              >
                {/* Top Accent Strip */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: product.accentColor }}
                />

                {/* Card Header & Content */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Category & Points Pill */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      {product.categoryLabel}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono font-bold text-[#FBC102]">
                      {product.points} Factor
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white tracking-tight mb-1 group-hover:text-[#FBC102] transition-colors">
                    {product.name}
                  </h3>

                  {/* Presentation */}
                  <p className="text-xs text-neutral-400 mb-3">
                    {product.presentation}
                  </p>

                  {/* Highlight feature */}
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-neutral-300 mb-3 leading-snug">
                    <span className="text-[#00A6A6] font-semibold">✨ Destacado: </span>
                    {product.highlight}
                  </div>

                  {/* Benefits mini list (2 key benefits) */}
                  <ul className="space-y-1.5 text-xs text-neutral-300 mb-4 flex-1">
                    {product.benefits.slice(0, 2).map((b, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 line-clamp-2">
                        <span className="text-[#00923F] font-bold">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing Box */}
                  <div className="pt-3 border-t border-white/10 flex items-baseline justify-between mb-4">
                    <div>
                      <div className="text-[10px] uppercase text-neutral-400">Precio Público</div>
                      <div className="text-lg font-black text-white tabular-nums tracking-tight">
                        Bs {product.priceBs.toFixed(2)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-neutral-400">Socio Mayorista</div>
                      <div className="text-xs font-bold text-[#7AC143] tabular-nums">
                        Bs {product.wholesalePriceBs.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={() => productWhatsApp(product.name)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-[#00923F] to-[#00A6A6] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>CONSULTAR POR WHATSAPP</span>
                    </button>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 bg-white/[0.03] hover:bg-white/[0.08] text-neutral-300 hover:text-white text-xs font-semibold rounded-xl border border-white/5 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5 text-[#FBC102]" />
                      <span>Ver Ficha Técnica Completa</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
