export interface Product {
  id: string;
  name: string;
  category: 'nutricion' | 'cafe' | 'colageno' | 'moringa' | 'bienestar';
  categoryLabel: string;
  presentation: string;
  priceBs: number;
  priceUsd: number;
  memberPriceBs: number;
  wholesalePriceBs: number;
  points: number;
  highlight: string;
  benefits: string[];
  ingredients: string[];
  recommendation: string;
  accentColor: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "cln-xx",
    name: "CLN-XX",
    category: "nutricion",
    categoryLabel: "Nutrición & Digestión",
    presentation: "Caja con 28 sachets de 8g (o Doypack 14u)",
    priceBs: 376.30,
    priceUsd: 37.63,
    memberPriceBs: 316.09,
    wholesalePriceBs: 254.00,
    points: 16,
    highlight: "Limpieza Intestinal & Salud del Colon",
    benefits: [
      "Optimiza y regula integralmente el tránsito y proceso digestivo",
      "Funciones limpiadoras y regeneradoras de la mucosa intestinal",
      "Mantiene los intestinos libres de desechos tóxicos acumulados",
      "Eficiente y gentil en casos de estreñimiento crónico o digestión lenta",
      "Endulzado de forma natural con Stevia sin azúcar añadida"
    ],
    ingredients: [
      "Pitahaya",
      "Tamarindo",
      "Ciruela",
      "Dátiles",
      "Mora",
      "Té Verde",
      "Garcinia Cambogia",
      "Stevia natural"
    ],
    recommendation: "Disuelva el contenido de 1 stick (8g) en una taza con 180 ml de agua caliente antes de acostarse durante 7 días o según requerimiento.",
    accentColor: "#00923F"
  },
  {
    id: "slm-factor",
    name: "SLM Factor",
    category: "nutricion",
    categoryLabel: "Nutrición & Control de Peso",
    presentation: "Caja con 24 sobres de 10g",
    priceBs: 423.70,
    priceUsd: 42.37,
    memberPriceBs: 355.91,
    wholesalePriceBs: 286.00,
    points: 26,
    highlight: "Metabolizador de Grasa & Control Metabólico",
    benefits: [
      "Estimula de forma natural la oxidación y pérdida de tejido graso",
      "Coadyuvante contra hígado graso y niveles elevados de colesterol",
      "Contribuye a regular la presión arterial y disminuir el estrés/cortisol",
      "Fortalece el sistema inmunológico aportando antioxidantes activos",
      "Favorece la circulación sanguínea y previene la pesadez vascular"
    ],
    ingredients: [
      "Garcinia Cambogia",
      "Toronja",
      "Camu Camu",
      "Maracuyá",
      "Té Verde",
      "Té Negro",
      "L-Carnitina",
      "Vitamina C",
      "Stevia"
    ],
    recommendation: "Disolver 1 sachet en 200 ml de agua fría o tibia antes del entrenamiento o por la mañana.",
    accentColor: "#E41E26"
  },
  {
    id: "coffee-capuccino-12en1",
    name: "Coffee Factor X Capuccino 12 en 1",
    category: "cafe",
    categoryLabel: "Café Gourmet Funcional",
    presentation: "Caja con 20 sachets de 18g (o Doypack 10u)",
    priceBs: 423.70,
    priceUsd: 42.37,
    memberPriceBs: 355.91,
    wholesalePriceBs: 286.00,
    points: 26,
    highlight: "Fórmula Maestra 12 en 1 con Hongos Adaptógenos",
    benefits: [
      "Café natural liofilizado fortificado con calcio biodisponible",
      "La algarrobina aporta taninos con efecto regenerador gastrointestinal",
      "Contiene calostro, cúrcuma y hongo Chaga para defensas de élite",
      "Aporta probióticos y prebióticos para el equilibrio de la microbiota",
      "Eleva la energía vital sin alterar los nervios ni provocar insomnio"
    ],
    ingredients: [
      "Café natural liofilizado",
      "Algarrobina",
      "Leche de Coco liofilizada",
      "Ganoderma Lucidum",
      "Extracto de Moringa",
      "Calostro bovino",
      "Cúrcuma",
      "Hongo Chaga",
      "Probióticos y Prebióticos",
      "Calcio y Stevia"
    ],
    recommendation: "Disuelva un stick en 180 ml de agua caliente para disfrutar de un capuccino cremoso, aromático y saludable.",
    accentColor: "#FBC102"
  },
  {
    id: "coffee-mokaccino",
    name: "Coffee Factor X Mokaccino",
    category: "cafe",
    categoryLabel: "Café Gourmet Funcional",
    presentation: "Caja con 20 sobres de 20g",
    priceBs: 423.70,
    priceUsd: 42.37,
    memberPriceBs: 355.91,
    wholesalePriceBs: 286.00,
    points: 26,
    highlight: "Cacao Orgánico & Ganoderma sin Lactosa",
    benefits: [
      "100% libre de lactosa: ideal para personas con intolerancia digestiva",
      "Favorece la concentración, agilidad mental y memoria",
      "Alto contenido de polifenoles antioxidantes para la protección celular",
      "Genera saciedad prolongada y energía física constante",
      "Excelente sabor a moka fino con cacao puro y leche de coco"
    ],
    ingredients: [
      "Café natural liofilizado",
      "Cacao orgánico puro",
      "Leche de coco liofilizada",
      "Extracto de Moringa",
      "Ganoderma Lucidum",
      "Stevia y Yacón"
    ],
    recommendation: "Tomar 1 sachet en agua caliente a media mañana o en la merienda para un impulso energético reconfortante.",
    accentColor: "#F39200"
  },
  {
    id: "coffee-black-premium",
    name: "Coffee Black Premium 5 en 1",
    category: "cafe",
    categoryLabel: "Café Gourmet Funcional",
    presentation: "Caja con 24 sticks de 4g",
    priceBs: 385.20,
    priceUsd: 38.52,
    memberPriceBs: 323.57,
    wholesalePriceBs: 260.01,
    points: 22,
    highlight: "Desintoxicante con Uña de Gato y Sangre de Grado",
    benefits: [
      "Café negro orgánico con cero azúcar añadida y cero acidez gástrica",
      "Acción cicatrizante y antiinflamatoria en gastritis y reflujo",
      "Con Sangre de Grado y Uña de Gato amazónica de alta pureza",
      "Estimula el sistema nervioso central aumentando el estado de alerta",
      "Potente apoyo al sistema inmunológico y depuración celular"
    ],
    ingredients: [
      "Café orgánico liofilizado",
      "Café verde",
      "Ganoderma",
      "Uña de Gato",
      "Sangre de Grado",
      "Extracto de Moringa"
    ],
    recommendation: "Disolver 1 stick de 4g en una taza con 180 ml de agua caliente o helada. Disfrutar puro sin azúcar.",
    accentColor: "#424242"
  },
  {
    id: "energy-full",
    name: "Energy Full Guaraná",
    category: "bienestar",
    categoryLabel: "Energía & Rendimiento",
    presentation: "Caja con 24 sachets de 10g",
    priceBs: 348.00,
    priceUsd: 34.80,
    memberPriceBs: 292.32,
    wholesalePriceBs: 234.90,
    points: 20,
    highlight: "Energía Natural de Acción Inmediata",
    benefits: [
      "Brinda energía limpia y estimula el sistema nervioso central",
      "Propiedades cardiovasculares que mejoran la oxigenación muscular",
      "Reduce la pesadez estomacal y mejora el tono físico diario",
      "Aporte equilibrado de Complejo B, Vitamina C, Sodio y Calcio",
      "Sensación refrescante e hidratante para deportistas y ejecutivos"
    ],
    ingredients: [
      "Guaraná liofilizada",
      "Camu Camu liofilizado",
      "Fresa liofilizada",
      "Complejo Vitamínico B y C",
      "Calcio y Sodio"
    ],
    recommendation: "Mezclar 1 sachet en 300 ml de agua fresca para un rendimiento de alta potencia en trabajo o ejercicio.",
    accentColor: "#F39200"
  },
  {
    id: "smart-factor-xxx",
    name: "Smart Factor XXX",
    category: "bienestar",
    categoryLabel: "Vitalidad & Fuerza",
    presentation: "Doypack con 12/24 sachets de 8g",
    priceBs: 178.10,
    priceUsd: 17.81,
    memberPriceBs: 149.60,
    wholesalePriceBs: 120.22,
    points: 8,
    highlight: "Vigor Masculino & Vitalidad Andina",
    benefits: [
      "Estimula el vigor físico y la resistencia ante el agotamiento crónico",
      "Cuidado de la función prostática y salud urinaria",
      "Mejora el tono circulatorio vascular y la oxigenación periférica",
      "Combinación milenaria de Maca Negra, Tarwi, Mashua y Coca",
      "Eleva la claridad mental y el rendimiento integral diario"
    ],
    ingredients: [
      "Maca Negra",
      "Mashua",
      "Tarwi",
      "Algarrobina",
      "Hoja de Coca",
      "Miel de Abeja pura",
      "Cacao",
      "Guaraná",
      "Espárragos y Piña"
    ],
    recommendation: "Tomar 1 sobre disuelto en agua o jugo por la mañana o antes de jornadas de alta demanda física.",
    accentColor: "#FBC102"
  },
  {
    id: "moringa-xph-plus",
    name: "Moringa XPH Plus",
    category: "moringa",
    categoryLabel: "Moringa & Equilibrio Alcalino",
    presentation: "Caja con 26 sachets de 7g",
    priceBs: 423.70,
    priceUsd: 42.37,
    memberPriceBs: 355.91,
    wholesalePriceBs: 286.00,
    points: 26,
    highlight: "Alcalinizante Celular con Guanábana y Jengibre",
    benefits: [
      "Reduce la absorción intestinal excesiva de grasas y colesterol",
      "Efecto vasodilatador natural para regular la presión arterial",
      "Propiedades desinflamatorias gracias al jengibre y guanábana",
      "Retrasa el envejecimiento celular neutralizando radicales libres",
      "Equilibra el pH corporal y optimiza el metabolismo celular"
    ],
    ingredients: [
      "Limón liofilizado",
      "Hojas seleccionadas de Moringa",
      "Jengibre",
      "Guanábana",
      "Carbonato de Sodio",
      "Magnesio"
    ],
    recommendation: "Tomar 1 sachet en ayunas disuelto en agua tibia para alcalinizar y energizar el organismo.",
    accentColor: "#00923F"
  },
  {
    id: "colageno-maiz-morado",
    name: "Colágeno Hidrolizado Maíz Morado",
    category: "colageno",
    categoryLabel: "Colágeno & Longevidad",
    presentation: "Doypack 15 sachets de 10g (y Pote 400g)",
    priceBs: 251.90,
    priceUsd: 25.19,
    memberPriceBs: 211.60,
    wholesalePriceBs: 170.03,
    points: 14,
    highlight: "Antocianinas Andinas & Cartílago de Tiburón",
    benefits: [
      "Protege y regenera articulaciones, ligamentos y cartílagos",
      "Mayor elasticidad y firmeza en la piel reduciendo líneas de expresión",
      "Poderoso escudo antioxidante gracias a las antocianinas del maíz morado",
      "Fortalece la raíz capilar y previene la fragilidad de las uñas",
      "Aporte de Magnesio, Hierro, Calcio biodisponible y Vitamina C"
    ],
    ingredients: [
      "Colágeno Hidrolizado puro",
      "Maíz Morado andino",
      "Cartílago de Tiburón",
      "Piña liofilizada",
      "Zinc",
      "Magnesio y Calcio",
      "Vitamina C"
    ],
    recommendation: "Disolver 1 stick (10g) en 180 ml de agua, 1 por la mañana y otro antes de dormir para resultados visibles en 15 a 60 días.",
    accentColor: "#4B2E83"
  },
  {
    id: "colageno-aguaje",
    name: "Colágeno Hidrolizado Aguaje",
    category: "colageno",
    categoryLabel: "Colágeno & Belleza Femenina",
    presentation: "Caja con 25 sachets de 10g",
    priceBs: 423.70,
    priceUsd: 42.37,
    memberPriceBs: 355.91,
    wholesalePriceBs: 286.00,
    points: 26,
    highlight: "Fitoestrógenos Amazónicos & Belleza Integral",
    benefits: [
      "Nutrición específica para la firmeza de la piel y tonicidad corporal",
      "Rico en fitoestrógenos naturales que equilibran el bienestar femenino",
      "Nutre y suaviza el cabello devolviendo el brillo natural",
      "Protege contra el fotoenvejecimiento por radiación solar",
      "Exquisito sabor a maracuyá y aguaje con Stevia natural"
    ],
    ingredients: [
      "Colágeno Hidrolizado",
      "Extracto atomizado de Aguaje amazónico",
      "Aguaje liofilizado",
      "Maracuyá liofilizado",
      "Vitamina A y C",
      "Stevia"
    ],
    recommendation: "1 stick de 10g por la mañana o noche en un vaso con agua o batido nutritivo.",
    accentColor: "#E4005A"
  },
  {
    id: "moringa-c-ultra",
    name: "Moringa C-Ultra Concentrado",
    category: "moringa",
    categoryLabel: "Moringa & Longevidad",
    presentation: "Frasco con 60 cápsulas de 500mg",
    priceBs: 229.60,
    priceUsd: 22.96,
    memberPriceBs: 192.86,
    wholesalePriceBs: 154.98,
    points: 12,
    highlight: "El Árbol Milagroso + Cúrcuma Antiinflamatoria",
    benefits: [
      "Regula los niveles de glucosa en sangre y apoya el metabolismo",
      "Potente acción antiinflamatoria en molestias articulares y musculares",
      "Rico en vitaminas A, B, C y minerales de alta asimilación",
      "Defensa natural frente al estrés oxidativo y cansancio crónico",
      "Fórmula combinada con raíz de cúrcuma de 2,000 años de tradición"
    ],
    ingredients: [
      "Moringa Oleifera en extracto estandarizado",
      "Cúrcuma pura",
      "Polifenoles y antioxidantes activos"
    ],
    recommendation: "Tomar 2 cápsulas al día con agua tibia, preferentemente con las comidas.",
    accentColor: "#00923F"
  },
  {
    id: "omefac",
    name: "Omefac Omega 3, 6 y 9",
    category: "bienestar",
    categoryLabel: "Salud Cardiovascular & Celular",
    presentation: "Frasco con 60 cápsulas blandas de 500mg",
    priceBs: 237.00,
    priceUsd: 23.70,
    memberPriceBs: 199.08,
    wholesalePriceBs: 159.98,
    points: 12,
    highlight: "Ácidos Grasos Esenciales EPA & DHA",
    benefits: [
      "Salud cardiovascular y regulación del perfil de lípidos en sangre",
      "Nutrición fundamental para la memoria y agilidad mental",
      "Mejora la elasticidad de las membranas celulares del organismo",
      "Grasas buenas indispensables no producidas por el cuerpo",
      "Cápsulas blandas de fácil digestión y rápida absorción"
    ],
    ingredients: [
      "Ácidos grasos Omega 3 (DHA y EPA)",
      "Omega 6",
      "Omega 9 de origen vegetal y marino purificado"
    ],
    recommendation: "Tomar 1 a 2 cápsulas blandas diarias junto a los alimentos.",
    accentColor: "#00A6A6"
  },
  {
    id: "hepa-fx",
    name: "Hepa FX Factor X",
    category: "bienestar",
    categoryLabel: "Protección & Salud Hepática",
    presentation: "Frasco con 60 cápsulas de 500mg",
    priceBs: 177.80,
    priceUsd: 17.78,
    memberPriceBs: 149.35,
    wholesalePriceBs: 120.02,
    points: 6,
    highlight: "Cardo Mariano & Silimarina Concentrada",
    benefits: [
      "Protección activa del hígado contra toxinas, medicamentos y alcohol",
      "La silimarina estimula la regeneración natural del tejido hepático",
      "Facilita la digestión de comidas pesadas y metabolización de grasas",
      "Refuerza las membranas externas de los hepatocitos",
      "Sensación de ligereza, purificación y bienestar general"
    ],
    ingredients: [
      "Extracto concentrado de Cardo Mariano",
      "Semillas de Silimarina purificada",
      "Nutrientes hepatoprotectores"
    ],
    recommendation: "Tomar 1 a 2 cápsulas diarias según requerimiento después de las comidas principales.",
    accentColor: "#0066B3"
  }
];
