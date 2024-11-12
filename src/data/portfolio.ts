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
    title: "Zephyr UI",
    techs: ["TypeScript", "React", "AI", "TailwindCSS", "Framer Motion"],
    link: "#",
    description:
      "Zephyr UI is a modern React UI library that provides a collection of customizable components for building web applications. The library is designed with accessibility and performance in mind, and includes support for dark mode, animations, and more.",
    isComingSoon: true,
  },
  {
    title: "React Shadcn Codex",
    techs: [
      "React",
      "shadcn",
      "Framer Motion",
      "Lucide React",
      "Hugging Face",
      "Datasets",
    ],
    description:
      "The React Shadcn Codex is a curated collection of over 3,000 React components that utilize shadcn, Framer Motion, and Lucide React. This dataset provides a valuable resource for developers looking to understand and implement modern React UI components with these popular libraries.",
    link: "https://huggingface.co/datasets/valentin-marquez/react-shadcn-codex",
    blogUrl:
      "https://nozz.dev/posts/creando-react-shadcn-codex-dataset-parte-1",
    startDate: new Date("2024-09-07T03:00:43.000Z"),
  },
  {
    title: "Arkz",
    description:
      "ARKZ is a community-driven web application designed to be a comprehensive database of teams for Nikke: Goddess of Victory. Our platform allows players to search, share, and discover effective team compositions for various game modes.",
    techs: ["TypeScript", "React", "Next.js", "TailwindCSS"],
    link: "https://github.com/valentin-marquez/arkz",
    blogUrl: "https://nozz.dev/posts/arkz-plataforma-comunitaria-nikke",
    startDate: new Date("2024-07-08T20:02:00.000Z"),
  },
  {
    title: "Pix",
    description:
      "🎨 Pix es una librería Node.js para extraer colores dominantes de imágenes.",
    techs: ["TypeScript", "Node.js"],
    link: "https://github.com/valentin-marquez/pix",
    blogUrl: "https://nozz.dev/posts/creando-librerias-para-node-con-rust",
    startDate: new Date("2024-02-19T17:28:00.000Z"),
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
