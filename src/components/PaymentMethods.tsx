import React, { useState } from 'react';
import { QrCode, Building, Banknote, CreditCard, Copy, Check, MessageCircle, AlertCircle } from 'lucide-react';
import { APP_CONFIG, paymentWhatsApp } from '../config.ts';
import { BoliviaFlagBadge } from './BrandLogos.tsx';

export function PaymentMethods() {
  const [copiedAccount, setCopiedAccount] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(APP_CONFIG.BANK_ACCOUNT);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  return (
    <section id="pagos" className="relative py-24 bg-[#0e1017] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-[#FBC102] mb-3">
            <BoliviaFlagBadge className="w-4 h-3" />
            <span>MÉTODOS HABILITADOS EN BOLIVIA</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            💳 FORMAS DE PAGO DISPONIBLES
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Esta sección es estrictamente informativa. Puedes coordinar tu orden o membresía y validar la acreditación de forma segura por WhatsApp oficial.
          </p>
        </div>

        {/* Payment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* 1. Simple QR */}
          <div className="p-6 rounded-2xl glass-card border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#00923F]/20 text-[#7AC143] flex items-center justify-center mb-4">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                📱 Pago por QR Simple
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                Paga al instante desde cualquier aplicación bancaria boliviana (BMSC, BCP, BNB, Banco Unión, etc.).
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center justify-center text-center aspect-square mb-4">
                {APP_CONFIG.QR_IMAGE && APP_CONFIG.QR_IMAGE.trim().length > 0 ? (
                  <img
                    src={APP_CONFIG.QR_IMAGE}
                    alt="Código QR Factor X Roger"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-neutral-400 text-xs space-y-2">
                    <QrCode className="w-12 h-12 text-neutral-500 mx-auto" />
                    <div className="font-medium text-white">QR disponible próximamente</div>
                    <p className="text-[10px] text-neutral-500">
                      Solicita el código QR dinámico de tu pedido por WhatsApp.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => paymentWhatsApp('Código QR Simple')}
              className="w-full py-2.5 bg-white/[0.04] hover:bg-[#00923F] text-xs font-bold text-neutral-200 hover:text-white rounded-xl transition-colors"
            >
              Consultar Pago por QR
            </button>
          </div>

          {/* 2. Transferencia Bancaria */}
          <div className="p-6 rounded-2xl glass-card border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0066B3]/20 text-[#00A6A6] flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                🏦 Transferencia
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                Transferencias interbancarias directas y depósitos en ventanilla bancaria.
              </p>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs space-y-2 mb-4 font-sans">
                <div>
                  <div className="text-[10px] uppercase text-neutral-500 font-semibold">Banco</div>
                  <div className="text-white font-bold">{APP_CONFIG.BANK_NAME}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-neutral-500 font-semibold">Titular</div>
                  <div className="text-white font-medium">{APP_CONFIG.BANK_OWNER}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-neutral-500 font-semibold">Nro de Cuenta</div>
                  <div className="text-[#FBC102] font-mono font-bold">{APP_CONFIG.BANK_ACCOUNT}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-neutral-500 font-semibold">Tipo / CI</div>
                  <div className="text-neutral-300">{APP_CONFIG.BANK_ACCOUNT_TYPE} · CI: {APP_CONFIG.BANK_ID}</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleCopyAccount}
                className="w-full flex items-center justify-center gap-1.5 py-2 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-neutral-300 rounded-xl transition-colors"
              >
                {copiedAccount ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Datos Bancarios</span>
                  </>
                )}
              </button>
              <button
                onClick={() => paymentWhatsApp('Transferencia Bancaria')}
                className="w-full py-2.5 bg-white/[0.04] hover:bg-[#0066B3] text-xs font-bold text-neutral-200 hover:text-white rounded-xl transition-colors"
              >
                Confirmar Transferencia
              </button>
            </div>
          </div>

          {/* 3. Efectivo */}
          <div className="p-6 rounded-2xl glass-card border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F39200]/20 text-[#FBC102] flex items-center justify-center mb-4">
                <Banknote className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                💵 Efectivo
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                Pago en efectivo disponible según coordinación directa y punto de entrega personal o en la oficina corporativa.
              </p>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-neutral-300 space-y-2 mb-4">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span>🏢 Oficina Corporativa</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Entrega contra entrega o retiro en oficina previa coordinación de stock con el equipo de Roger.
                </p>
              </div>
            </div>

            <button
              onClick={() => paymentWhatsApp('Efectivo / Entrega')}
              className="w-full py-2.5 bg-white/[0.04] hover:bg-[#F39200] text-xs font-bold text-neutral-200 hover:text-white rounded-xl transition-colors"
            >
              Coordinar Pago en Efectivo
            </button>
          </div>

          {/* 4. Tarjeta */}
          <div className="p-6 rounded-2xl glass-card border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E4005A]/20 text-[#E4005A] flex items-center justify-center mb-4">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                💳 Tarjeta Débito / Crédito
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                Consulta disponibilidad de pago con tarjeta mediante link seguro o terminal POS en oficina.
              </p>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-neutral-300 space-y-2 mb-4">
                <div className="text-neutral-400 text-[11px] leading-relaxed">
                  {APP_CONFIG.PAYMENT_CARD_INFO}
                </div>
              </div>
            </div>

            <button
              onClick={() => paymentWhatsApp('Tarjeta Débito/Crédito')}
              className="w-full py-2.5 bg-white/[0.04] hover:bg-[#E4005A] text-xs font-bold text-neutral-200 hover:text-white rounded-xl transition-colors"
            >
              Consultar Pago con Tarjeta
            </button>
          </div>
        </div>

        {/* Security & Coordination Notice */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between flex-wrap gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#00A6A6]" />
            <span>Todos los comprobantes de depósito deben enviarse al WhatsApp oficial para confirmación inmediata de pedido.</span>
          </div>
          <button
            onClick={() => paymentWhatsApp('General')}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#00923F] hover:bg-[#007934] text-white font-bold rounded-lg text-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>HABLAR CON ROGER SOBRE PAGOS</span>
          </button>
        </div>
      </div>
    </section>
  );
}
