/**
 * Factor X Roger - Global Configuration File
 *
 * All editable contact, banking, video, and integration settings are centralized here.
 * Sensitive tokens, private API keys, and passwords must NEVER be placed in client-side code.
 */

export interface VideoConfig {
  HERO: string;
  ROGER: string;
  CORPORATIVO: string;
  PRODUCTOS: string;
  UNDERDOG: string;
  PLAN_NEGOCIO: string;
  AGENDA_PRESENCIAL: string;
  AGENDA_ONLINE: string;
  TESTIMONIOS: string;
}

export interface AppConfig {
  SITE_NAME: string;
  WHATSAPP_NUMBER: string; // e.g. "59170000000" (leave empty if not configured yet)
  GOOGLE_SHEETS_URL: string; // Optional Google Apps Script webhook URL
  QR_IMAGE: string; // QR code image URL or path
  BANK_NAME: string;
  BANK_ACCOUNT: string;
  BANK_OWNER: string;
  BANK_ID: string;
  BANK_ACCOUNT_TYPE: string;
  PAYMENT_CARD_INFO: string;
  ZOOM_LINK: string; // Zoom room URL
  PRESENTIAL_ADDRESS: string;
  ADMIN_EMAIL: string;
  VIDEOS: VideoConfig;
}

export const APP_CONFIG: AppConfig = {
  SITE_NAME: "FACTOR X ROGER",
  // Configure WhatsApp phone number with country code (e.g. 591... for Bolivia). If empty, users will be prompted gracefully.
  WHATSAPP_NUMBER: "", 
  GOOGLE_SHEETS_URL: "", // Leave empty if not using Google Sheets
  QR_IMAGE: "", // Path or URL to QR payment image
  
  // Banking Data (Bolivia)
  BANK_NAME: "[CONFIGURAR BANCO]",
  BANK_ACCOUNT: "[CONFIGURAR CUENTA]",
  BANK_OWNER: "ROGER CRISPÍN MACHICADO",
  BANK_ID: "[CONFIGURAR CI]",
  BANK_ACCOUNT_TYPE: "Caja de Ahorro en Bolivianos (Bs)",
  PAYMENT_CARD_INFO: "Consulta con el equipo la disponibilidad para cobro mediante link o POS de tarjeta.",
  
  // Event Links & Locations
  ZOOM_LINK: "", // e.g. "https://zoom.us/j/..."
  PRESENTIAL_ADDRESS: "Oficina Corporativa Factor X, Torre AGM, La Paz / Santa Cruz, Bolivia",
  ADMIN_EMAIL: "rogercrispinmachicado@gmail.com",
  
  // Video URLs (YouTube URL, embed, or MP4). If empty, high-aesthetic "VIDEO PRÓXIMAMENTE" preview is shown.
  VIDEOS: {
    HERO: "",
    ROGER: "",
    CORPORATIVO: "",
    PRODUCTOS: "",
    UNDERDOG: "",
    PLAN_NEGOCIO: "",
    AGENDA_PRESENCIAL: "",
    AGENDA_ONLINE: "",
    TESTIMONIOS: "",
  },
};

/**
 * Universal WhatsApp Link Generator
 */
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  if (APP_CONFIG.WHATSAPP_NUMBER && APP_CONFIG.WHATSAPP_NUMBER.trim().length > 0) {
    const cleanNumber = APP_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, "");
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  }
  // If number is not configured, fall back to universal api.whatsapp.com with text parameter
  return `https://api.whatsapp.com/send?text=${encoded}`;
}

export function openWhatsApp(message: string): void {
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

export function productWhatsApp(productName: string): void {
  openWhatsApp(`Hola Roger 👋\nEstoy interesado en ${productName}.\nQuiero conocer disponibilidad, precio y detalles.`);
}

export function businessWhatsApp(): void {
  openWhatsApp(`Hola Roger 👋\nQuiero conocer el negocio Factor X.`);
}

export function zoomWhatsApp(): void {
  openWhatsApp(`Hola Roger 👋\nQuiero recibir el enlace de Zoom.`);
}

export function presencialWhatsApp(): void {
  openWhatsApp(`Hola Roger 👋\nQuiero asistir a la capacitación presencial.`);
}

export function paymentWhatsApp(methodName: string): void {
  openWhatsApp(`Hola Roger 👋\nQuiero realizar un pago mediante ${methodName}. ¿Podrías confirmarme los datos de acreditación?`);
}

export function leadWhatsApp(data: { name: string; city: string; interest: string; phone: string }): void {
  openWhatsApp(
    `Hola Roger 👋\nMi nombre es *${data.name}* de *${data.city}*.\n` +
    `Estoy interesado en: *${data.interest}*.\n` +
    `Mi WhatsApp de contacto es: ${data.phone}.\n` +
    `¡Me gustaría recibir información detallada!`
  );
}
