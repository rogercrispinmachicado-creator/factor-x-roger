# 🚀 FACTOR X ROGER | MASTER ELITE SUPREMO 2026

Landing Web Premium desarrollada para presentar:
- **Factor X Company Bolivia**
- **Roger Crispín Machicado** (Líder · Fundador · Mentor · Emprendedor)
- **Sistema UNDERDOG-DIAMOND**
- **Catálogo Oficial de Productos Liofilizados 2026**
- **Plan de Negocio y Compensación**
- **Agenda Presencial y Online (Zoom)**
- **Formas de Pago Informativas**
- **Captación de Prospectos y Conexión Directa a WhatsApp**

---

## 📌 Principio Fundamental del Proyecto

Esta web es una **LANDING WEB INFORMATIVA Y DE CONVERSIÓN**.  
❌ **NO es una tienda online / e-commerce.**  
❌ No contiene carritos, checkouts ni pasarelas de pago automáticas.

El objetivo estratégico es:
$$\text{VISITAR} \longrightarrow \text{VER} \longrightarrow \text{CONOCER} \longrightarrow \text{APRENDER} \longrightarrow \text{INTERESARSE} \longrightarrow \text{CONTACTAR POR WHATSAPP}$$

---

## 🎨 Paleta de Color Oficial Factor X
- **Negro Base:** `#000000` / `#0b0c10`
- **Rojo:** `#E41E26`
- **Naranja:** `#F39200`
- **Amarillo / Oro:** `#FBC102`
- **Verde Esmeralda:** `#00923F`
- **Cian:** `#00A6A6`
- **Azul Corporativo:** `#0066B3`
- **Magenta:** `#E4005A`
- **Morado:** `#4B2E83`

---

## ⚙️ Configuración Personalizable (`src/config.ts` y `/config.js`)

Todos los datos de contacto, enlaces y cuentas están centralizados:

```javascript
// WhatsApp oficial (sin signo +, solo código de país y número)
WHATSAPP_NUMBER: "59170000000",

// URL de Google Apps Script para almacenar prospectos (Opcional)
GOOGLE_SHEETS_URL: "",

// Imagen o enlace del código QR
QR_IMAGE: "",

// Cuentas bancarias para Bolivia
BANK_NAME: "Banco Mercantil Santa Cruz / Banco Unión",
BANK_ACCOUNT: "1234567890",
BANK_OWNER: "ROGER CRISPÍN MACHICADO",

// Enlace permanente a sala Zoom
ZOOM_LINK: "https://zoom.us/j/...",

// Videos (YouTube, Vimeo o archivo MP4)
VIDEOS: {
  HERO: "",
  ROGER: "",
  CORPORATIVO: "",
  PRODUCTOS: "",
  UNDERDOG: "",
  PLAN_NEGOCIO: "",
  AGENDA_PRESENCIAL: "",
  AGENDA_ONLINE: "",
  TESTIMONIOS: ""
}
```

*Si un video o dato no está configurado, la plataforma muestra de forma automática elegantes estados informativos como "🎬 VIDEO PRÓXIMAMENTE" sin romper la experiencia del usuario.*

---

## 🌐 Instrucciones de Despliegue Gratuito

### Opción 1: Cloudflare Pages (Recomendado - 100% Gratis)
1. Sube este repositorio a tu cuenta de **GitHub**.
2. Entra a [Cloudflare Dashboard](https://dash.cloudflare.com/) &rarr; **Workers & Pages**.
3. Selecciona **Create application** &rarr; **Pages** &rarr; **Connect to Git**.
4. En Build command coloca: `npm run build`
5. En Output directory coloca: `dist`
6. ¡Listo! Tendrás tu dominio SSL gratuito en menos de 2 minutos.

### Opción 2: GitHub Pages
1. En tu repositorio de GitHub, ve a **Settings** &rarr; **Pages**.
2. Configura el GitHub Action para construir con Vite (`npm run build`) y publicar la carpeta `dist`.

---

## 📄 Estructura del Código

```
/
├── index.html                   # HTML con metadatos SEO y tipografías
├── config.js                    # Configuración estática universal
├── package.json                 # Dependencias y scripts
├── src/
│   ├── main.tsx                 # Entrada React 19
│   ├── App.tsx                  # Componente principal
│   ├── index.css                # Tailwind CSS v4 & utilidades de cristal
│   ├── config.ts                # Configuración tipada y helpers de WhatsApp
│   ├── data/
│   │   └── products.ts          # Base de datos oficial de productos Bolivia
│   ├── components/
│   │   ├── BrandLogos.tsx       # Vectores SVG Factor X, Underdog Diamond y bandera
│   │   ├── Navbar.tsx           # Barra superior fija responsive
│   │   ├── Hero.tsx             # Hero cinematográfico con manifiesto de Roger
│   │   ├── RogerBio.tsx         # Biografía y timeline de 9 etapas
│   │   ├── FactorXCompany.tsx   # Misión, visión, Ronald Bellido y liofilización
│   │   ├── ProductsCatalog.tsx  # Catálogo con buscador, filtros y precios BOB
│   │   ├── UnderdogDiamond.tsx  # Sistema ABCD y los 6 pilares del retador
│   │   ├── BusinessPlan.tsx     # Packs, bonos quincenales y residuales
│   │   ├── AgendaSection.tsx    # Agenda presencial 4PM y Zoom 10PM
│   │   ├── PaymentMethods.tsx   # QR, Transferencia, Efectivo y Tarjeta
│   │   ├── LeadCapture.tsx      # Formulario conectado a WhatsApp y Sheets
│   │   ├── TestimonialsSection.tsx # Espacio documental de liderazgo
│   │   ├── FaqSection.tsx       # Acordeón de 12 preguntas resueltas
│   │   ├── CtaFinal.tsx         # Llamado a la acción final
│   │   ├── Footer.tsx           # Pie de página y descargos legales
│   │   ├── FloatingWhatsApp.tsx # Botón flotante permanente
│   │   ├── VideoModal.tsx       # Reproductor lightbox responsive
│   │   └── ProductDetailModal.tsx # Ficha técnica con tabla de precios
```

---

© 2026 FACTOR X ROGER. Todos los derechos reservados.
