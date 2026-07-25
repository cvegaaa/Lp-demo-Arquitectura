import sectorData from "../demo-arquitectura/config/datos-sector.json";

export interface ContactInfo {
  telefono: string;
  whatsapp: string;
  direccion: string;
  horario: string;
  email: string;
}

export interface SectorData {
  sector: string;
  nombre_generico: string;
  eslogan_sugerido: string;
  servicios: string[];
  problema_tipo: string;
  cta_principal: string;
  datos_contacto_placeholder: ContactInfo;
  hero_imagenes: string[];
}

export const data: SectorData = sectorData as SectorData;

export const serviceDescriptions: string[] = [
  "Vivienda unifamiliar y multifamiliar con propuesta arquitectónica integral, materiales y memoria de obra.",
  "Locales, oficinas y retail con diseño orientado a experiencia, flujo y rentabilidad del espacio.",
  "Intervención de espacios existentes con diagnóstico previo, propuesta y dirección de obra.",
  "Acompañamiento técnico, levantamiento y supervisión para que lo construido cumpla el diseño.",
  "Diseño interior con selección de mobiliario, iluminación y paleta de materiales coherente."
];

export const serviceIcons: string[] = [
  '<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 40 L24 12 L40 40"/><path d="M16 40 L24 28 L32 40"/><path d="M8 40 L40 40"/></svg>',
  '<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="10" width="32" height="28" rx="1"/><path d="M8 22 L40 22"/><path d="M22 10 L22 38"/></svg>',
  '<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 38 L10 18 L24 8 L38 18 L38 38"/><path d="M20 38 L20 26 L28 26 L28 38"/></svg>',
  '<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="24" cy="24" r="14"/><path d="M24 10 L24 38 M10 24 L38 24"/></svg>',
  '<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 38 L12 16 L24 10 L36 16 L36 38"/><path d="M12 38 L36 38"/><path d="M18 38 L18 24 L30 24 L30 38"/></svg>'
];

export const testimonials = [
  {
    text: "El estudio nos entregó planos claros y un cronograma real. La obra salió sin sobresaltos.",
    who: "Cliente residencial",
    tag: "Casa familiar"
  },
  {
    text: "Pasamos de cotizar por WhatsApp a tener un documento técnico. La diferencia se nota.",
    who: "Cliente comercial",
    tag: "Local retail"
  },
  {
    text: "Acompañaron cada fase, desde el brief hasta la entrega. Profesionalismo de principio a fin.",
    who: "Cliente reforma",
    tag: "Remodelación"
  }
];
