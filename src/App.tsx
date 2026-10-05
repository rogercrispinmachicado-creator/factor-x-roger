import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { RogerBio } from './components/RogerBio.tsx';
import { FactorXCompany } from './components/FactorXCompany.tsx';
import { ProductsCatalog } from './components/ProductsCatalog.tsx';
import { UnderdogDiamond } from './components/UnderdogDiamond.tsx';
import { BusinessPlan } from './components/BusinessPlan.tsx';
import { AgendaSection } from './components/AgendaSection.tsx';
import { PaymentMethods } from './components/PaymentMethods.tsx';
import { LeadCapture } from './components/LeadCapture.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { CtaFinal } from './components/CtaFinal.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { VideoModal } from './components/VideoModal.tsx';
import { ProductDetailModal } from './components/ProductDetailModal.tsx';
import { Product } from './data/products.ts';

export default function App() {
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    title: string;
    url?: string;
  }>({
    isOpen: false,
    title: '',
    url: '',
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenVideo = (title: string, url?: string) => {
    setVideoModal({
      isOpen: true,
      title,
      url: url || '',
    });
  };

  const handleCloseVideo = () => {
    setVideoModal({
      isOpen: false,
      title: '',
      url: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f3f4f6] selection:bg-[#E41E26] selection:text-white flex flex-col font-sans">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Cinematográfico */}
        <Hero onOpenVideo={handleOpenVideo} />

        {/* 2. ¿Quién es Roger Crispín? */}
        <RogerBio onOpenVideo={handleOpenVideo} />

        {/* 3. Factor X Company (Infraestructura, Misión, Liofilización) */}
        <FactorXCompany onOpenVideo={handleOpenVideo} />

        {/* 4. Catálogo de Productos Liofilizados Bolivia 2026 */}
        <ProductsCatalog
          onSelectProduct={(p) => setSelectedProduct(p)}
          onOpenVideo={handleOpenVideo}
        />

        {/* 5. Sistema UNDERDOG-DIAMOND */}
        <UnderdogDiamond onOpenVideo={handleOpenVideo} />

        {/* 6. Plan de Negocio & Formas de Ganar */}
        <BusinessPlan onOpenVideo={handleOpenVideo} />

        {/* 7. Agenda Presencial & Online Zoom */}
        <AgendaSection onOpenVideo={handleOpenVideo} />

        {/* 8. Formas de Pago Informativas */}
        <PaymentMethods />

        {/* 9. Captación de Leads Directa */}
        <LeadCapture />

        {/* 10. Experiencias & Testimonios */}
        <TestimonialsSection onOpenVideo={handleOpenVideo} />

        {/* 11. FAQ Acordeón */}
        <FaqSection />

        {/* 12. CTA Final de Alto Impacto */}
        <CtaFinal onOpenVideo={handleOpenVideo} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Video Lightbox Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideo}
        title={videoModal.title}
        videoUrl={videoModal.url}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenVideo={(title) => handleOpenVideo(`Demostración: ${title}`)}
      />
    </div>
  );
}
