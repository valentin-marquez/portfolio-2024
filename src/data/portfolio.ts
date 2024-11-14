// Types
export type Project = {
  title: string;
  techs: string[];
  link: string;
  description: string;
  blogUrl?: string;
  isComingSoon?: boolean;
  isArchived?: boolean;
  startDate?: Date;
  githubUrl?: string;
};

export type WorkExperience = {
  company: string;
  role: string;
  type: string;
  period: string;
  description: string;
};

// Data
export const socialLinks = [
  { name: "github", url: "https://github.com/valentin-marquez" },
  { name: "discord", url: "https://discord.com/users/234432421427281920/" },
  { name: "email", url: "mailto:valentin13.mail@gmail.com" },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/valentin-marquez-7b0b7b1b7/",
  },
];

export const projects: Project[] = [
  {
    title: "nozz-ui",
    techs: ["Astro", "TypeScript", "CSS", "JavaScript"],
    link: "https://ui.nozz.dev/",
    description:
      "nozz-ui es una biblioteca moderna de componentes React que combina Radix UI, Tailwind CSS y Framer Motion, optimizada con el espacio de color OKLAB para una mejor percepción y accesibilidad del color. Facilita la implementación rápida y personalizable de componentes UI.",
    isComingSoon: true,
    isArchived: false,
    startDate: new Date("2024-11-12"),
    githubUrl: "https://github.com/valentin-marquez/nozz-ui",
  },
  {
    title: "Arkz",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    link: "https://arkz.tech/",
    description:
      "ARKZ es una plataforma web dedicada a NIKKE, que permite a los jugadores compartir y descubrir las mejores composiciones de equipo. Desarrollada con tecnologías modernas como Next.js, TypeScript y Tailwind CSS, la plataforma ofrece una interfaz intuitiva para explorar estrategias para diversos modos de juego, incluyendo Story Mode y Tribe Tower. La aplicación incluye funcionalidades de filtrado avanzado, sistema de votación, y una API robusta para gestionar las contribuciones de la comunidad.",
    isComingSoon: false,
    isArchived: false,
    startDate: new Date("2024-10-08"),
    githubUrl: "https://github.com/arkz-tech/arkz",
  },
  {
    title: "NIKKE OCR",
    techs: ["Python", "OCR"],
    link: "",
    description:
      "NIKKE OCR es una herramienta no invasiva diseñada para capturar y registrar información de personajes del juego móvil NIKKE: Goddess of Victory. Este programa utiliza tecnología de reconocimiento óptico de caracteres (OCR) para extraer datos de capturas de pantalla del juego, asegurando que no haya interferencia con los archivos o procesos del juego. La herramienta automatiza el escaneo de personajes NIKKE, extrae atributos de personajes incluyendo nombre, rareza, elemento, tipo de arma, escuadrón, tipo de ráfaga y poder de combate, almacena la información de personajes en una base de datos local y proporciona una interfaz amigable con registro en tiempo real.",
    isComingSoon: false,
    isArchived: false,
    startDate: new Date("2024-10-15"),
    githubUrl: "https://github.com/arkz-tech/nikke-ocr",
  },
];

export const workExperience: WorkExperience[] = [
  {
    company: "Expedio Ltda",
    role: "Ingeniero informático",
    type: "Developer",
    period: "marzo de 2024 - mayo de 2024 (3 meses)",
    description:
      "Lideré el desarrollo de aplicaciones logísticas para la gestión de scooters y delivery de última milla. Diseñé e implementé Babidi Supply, una solución integral que automatiza el proceso de reportes y nóminas. Desarrollé sistemas de monitoreo en tiempo real para prevención de robos y gestión proactiva de incidencias, mejorando la eficiencia operativa.",
  },
  {
    company: "Bipsolar",
    role: "Desarrollador Front-end",
    type: "Developer",
    period: "marzo de 2024 - mayo de 2024 (3 meses)",
    description:
      "Desarrollé aplicaciones web de alto rendimiento utilizando Next.js y TypeScript, implementando arquitecturas escalables y patrones de diseño modernos. Lideré la optimización de interfaces de usuario con enfoque en métricas Core Web Vitals y accesibilidad. Establecí flujos de CI/CD en Vercel, reduciendo el tiempo de desarrollo en un 40% y mejorando la calidad del código mediante pruebas automatizadas.",
  },
];

// Utility functions
export function formatDate(date: Date | string) {
  const dateObject = typeof date === "string" ? new Date(date) : date;
  return dateObject.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
  });
}
