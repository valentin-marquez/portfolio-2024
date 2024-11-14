// Tipos base para información más específica
export type ProjectStatus =
  | "in-development"
  | "completed"
  | "archived"
  | "coming-soon";

export type ProjectContributor = {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
};

export type ProjectMetrics = {
  stars?: number;
  forks?: number;
  downloads?: number;
  users?: number;
  performance?: {
    lighthouse?: number;
    coreWebVitals?: {
      lcp?: number; // Largest Contentful Paint
      fid?: number; // First Input Delay
      cls?: number; // Cumulative Layout Shift
    };
  };
};

export type ProjectMedia = {
  thumbnail?: string;
  screenshots: string[];
  demoVideo?: string;
  demoUrl?: string;
};

export type ProjectDocs = {
  readme?: string;
  documentation?: string;
  api?: string;
  architecture?: string;
};

export type ProjectVersion = {
  version: string;
  releaseDate: Date;
  changelog: string;
  isStable: boolean;
};

// Tipo Project mejorado
export type Project = {
  // Información básica
  title: string;
  description: string;
  shortDescription?: string; // Descripción corta para previews
  slug?: string; // URL-friendly identifier

  // Fechas importantes
  startDate?: Date;
  lastUpdate?: Date;
  releaseDate?: Date;
  endDate?: Date;

  // Estado y visibilidad
  status: ProjectStatus;
  visibility: "public" | "private" | "archived";
  isArchived?: boolean;
  isComingSoon?: boolean;
  isFeatured?: boolean;

  // Tecnologías y categorías
  techs: {
    name: string;
    version?: string;
    category?: "frontend" | "backend" | "database" | "devops" | "other";
  }[];
  categories: string[]; // e.g., ['web', 'mobile', 'ai', 'opensource']

  // Enlaces
  links: {
    production?: string;
    staging?: string;
    github?: string;
    blog?: string;
    docs?: string;
    npm?: string;
    pip?: string;
  };

  // Recursos y medios
  media?: ProjectMedia;
  documentation?: ProjectDocs;

  // Equipo y colaboración
  team?: {
    owner: ProjectContributor;
    contributors?: ProjectContributor[];
    openForContributions?: boolean;
  };

  // Métricas y estadísticas
  metrics?: ProjectMetrics;

  // Información de versiones
  versions?: ProjectVersion[];

  // Requisitos y compatibilidad
  requirements?: {
    node?: string;
    npm?: string;
    platforms?: string[];
    browsers?: string[];
  };

  // Licencia y cumplimiento
  license?: {
    type: string;
    url?: string;
  };

  // Metadata adicional
  metadata?: {
    tags?: string[];
    keywords?: string[];
    language?: string;
    complexity?: "beginner" | "intermediate" | "advanced";
    estimatedTime?: string; // e.g., "2 months"
    budget?: string;
    client?: string;
  };
};

export const projects: Project[] = [
  {
    title: "Ofertas-Chile ",
    shortDescription:
      "Pagina web local para obtener ofertas de tiendas chilenas.",
    description:
      "Ofertas Chile es una aplicación desarrollada en Python con el propósito de facilitar el acceso a las mejores ofertas de tiendas en Chile. Esta herramienta realiza un seguimiento automatizado de los descuentos en múltiples tiendas populares, actualizando la información de forma periódica para que los usuarios puedan estar siempre al tanto de las últimas promociones.",
    status: "archived",
    visibility: "public",
    isComingSoon: false,
    techs: [
      {
        name: "Python",
        category: "frontend",
      },
      {
        name: "Flask",
        category: "frontend",
      },
      {
        name: "grequests",
        category: "frontend",
      },
      {
        name: "lxml",
        category: "frontend",
      },
      {
        name: "BeautifulSoup4",
        category: "frontend",
      },
    ],
    categories: [
      "Web Scraping",
      "Web Development",
      "E-commerce and Deals",
      "Automation",
    ],
    links: {
      production: "",
      github: "https://github.com/valentin-marquez/Ofertas-Chile",
      blog: "",
    },
    startDate: new Date("2024-10-13"),
    media: {
      screenshots: [
        "https://camo.githubusercontent.com/7206e59167ebaab164310f8afb9dfb8251055f4f741ba717110a24b5310f59d6/68747470733a2f2f692e696d6775722e636f6d2f6433386e7769362e706e67",
        "https://camo.githubusercontent.com/e6e08231a1ab949a97edd62f18ae35f8a6136c53559324397e40d84eb8ea044e/68747470733a2f2f692e696d6775722e636f6d2f5976623553496b2e706e67",
      ],
    },

    license: {
      type: "Eclipse Public License 2.0",
      url: "https://opensource.org/licenses/EPL-2.0",
    },

    versions: [
      {
        version: "1.0.0",
        releaseDate: new Date("2024-10-13"),
        changelog: "Initial release",
        isStable: false,
      },
    ],
    metadata: {
      tags: ["python", "web-scraping", "flask", "automation"],
      keywords: ["web scraping", "automation", "deals", "python"],
      language: "Python",
      complexity: "intermediate",
      estimatedTime: "6 days",
      budget: "low",
      client: "personal",
    },
  },
  {
    title: "EasyFX-2.9",
    shortDescription: "",
    description: "A port of EasyFX addon (by Rymdnisse.net) for Blender 2.9+\n",
    status: "completed",
    visibility: "public",
    isComingSoon: false,
    techs: [
      {
        name: "Python",
        category: "frontend",
      },
      {
        name: "Blender",
        category: "frontend",
      },
    ],
    categories: [],
    links: {
      production: "",
      github: "https://github.com/valentin-marquez/EasyFX-2.9",
      blog: "",
    },
    startDate: new Date("2023-01-07"),
    team: {
      owner: {
        name: "valentin-marquez",
        role: "Owner",
        github: "https://github.com/valentin-marquez",
      },
    },
    versions: [
      {
        version: "1.2.1",
        releaseDate: new Date("2023-01-07"),
        changelog: "Initial release",
        isStable: true,
      },
    ],
    metadata: {
      tags: ["blender", "addon", "python"],
      keywords: ["blender", "addon", "python"],
      language: "Python",
      complexity: "intermediate",
      estimatedTime: "1 days",
      budget: "low",
      client: "personal",
    },
  },
  {
    title: "ARenderApi",
    shortDescription:
      "API básica que utiliza el modelo de segmentación de anime entrenado para eliminar el fondo de las imágenes de anime.",
    description:
      "El repositorio ARenderApi proporciona una API básica que utiliza un modelo entrenado de segmentación de anime para eliminar el fondo de las imágenes de anime. Está desarrollado principalmente en Python y hace uso de varias librerías y frameworks, incluyendo opencv-python-headless para procesamiento de imágenes, onnxruntime para la ejecución de modelos, fastapi para la creación de la API, uvicorn como servidor ASGI, SQLAlchemy para manejo de bases de datos y jwt para autenticación. Este proyecto está categorizado bajo API, procesamiento de imágenes e inteligencia artificial, debido a su enfoque en la creación de una API que facilita la eliminación de fondos en imágenes de anime utilizando técnicas avanzadas de IA.",
    status: "archived",
    visibility: "public",
    isComingSoon: false,
    startDate: new Date("2023-01-22"),
    techs: [
      {
        name: "Python",
        category: "frontend",
      },
      {
        name: "Librerías y frameworks",
        category: "frontend",
      },
    ],
    categories: ["API", "Procesamiento de Imágenes", "Inteligencia Artificial"],
    links: {
      production: "",
      github: "https://github.com/valentin-marquez/ARenderApi",
      blog: "",
    },

    team: {
      owner: {
        name: "valentin-marquez",
        role: "Owner",
        github: "https://github.com/valentin-marquez",
      },
    },

    versions: [
      {
        version: "1.0.0",
        releaseDate: new Date("2023-01-22"),
        changelog: "Initial release",
        isStable: true,
      },
    ],

    metadata: {
      tags: ["api", "image-processing", "ai"],
      keywords: ["api", "image processing", "ai"],
      language: "Python",
      complexity: "intermediate",
      estimatedTime: "5 days",
      budget: "low",
      client: "personal",
    },
  },
  {
    title: "rut.py",
    shortDescription:
      "rut.py: Librería Python para el manejo de RUTs chilenos.",
    description:
      "Rut.py es una librería escrita en Python para manejar RUTs (Rol Único Tributario) chilenos. Proporciona funciones para limpiar, validar, obtener el dígito verificador, formatear y generar RUTs. Basada en la librería JavaScript rut.js de jlobos, esta librería tiene como objetivo brindar funcionalidades similares a los desarrolladores Python que trabajan con RUTs chilenos. Se puede instalar fácilmente usando pip y ofrece una serie de funciones útiles para manipular RUTs en aplicaciones Python.",
    status: "completed",
    visibility: "public",
    isComingSoon: false,
    techs: [
      {
        name: "Python",
        category: "frontend",
      },
    ],
    categories: ["Librería de Validación", "Procesamiento de Datos"],
    links: {
      production: "",
      github: "https://github.com/valentin-marquez/rut.py",
      blog: "",
    },
    startDate: new Date("2023-06-05"),

    team: {
      owner: {
        name: "valentin-marquez",
        role: "Owner",
        github: "https://github.com/valentin-marquez",
      },
    },

    versions: [
      {
        version: "1.0.2",
        releaseDate: new Date("2023-06-05"),
        changelog: "Initial release",
        isStable: true,
      },
    ],
  },
  {
    title: "ruka-discord-web",
    shortDescription:
      "Ruka Discord Web es un repositorio que proporciona una interfaz web para visualizar las cartas disponibles en el bot de Discord llamado Ruka, así como el estado actual del bot. Este proyecto se ha desarrollado utilizando el framework Django.",
    description:
      "El repositorio Ruka Discord Web proporciona una interfaz web para visualizar las cartas disponibles en el bot de Discord llamado Ruka, así como el estado actual del bot. Este proyecto se ha desarrollado utilizando el framework Django. La interfaz web está construida utilizando tecnologías como CSS, JavaScript y HTML, mientras que el backend está desarrollado en Python con el framework Django. Además, utiliza varias librerías de Python, incluyendo psycopg2, requests, djangorestframework, markdown y django-filter. El repositorio está categorizado bajo interfaz web, bot de Discord y backend framework, debido a su enfoque en proporcionar una interfaz web interactiva y funcional para usuarios del bot de Discord Ruka.",
    status: "archived",
    visibility: "public",
    isComingSoon: false,
    techs: [
      {
        name: "CSS",
        category: "frontend",
      },
      {
        name: "Javascript",
        category: "frontend",
      },
      {
        name: "HTML",
        category: "frontend",
      },
      {
        name: "Python",
        category: "frontend",
      },
      {
        name: "Frameworks y Librerías",
        category: "frontend",
      },
      {
        name: "Django",
        category: "frontend",
      },
    ],
    categories: ["Interfaz Web", "Bot de Discord", "Backend Framework"],
    links: {
      production: "",
      github: "https://github.com/valentin-marquez/ruka-discord-web",
      blog: "",
    },
    startDate: new Date("2021-05-25"),
  },
  {
    title: "topgg-voter",
    shortDescription:
      "Top.gg Voter es una aplicación de escritorio simple que permite votar por tus bots de Discord favoritos en Top.gg.",
    description:
      "El repositorio Top.gg Voter es una aplicación de escritorio que facilita el proceso de votar por bots de Discord en Top.gg. Desarrollada principalmente en JavaScript, con componentes adicionales en CSS, HTML, WebAssembly y Python, esta herramienta automatiza el proceso de votación para los usuarios. Utiliza tecnologías de automatización como Selenium para interactuar con el sitio web de Top.gg, proporcionando una interfaz de usuario sencilla y eficiente. El proyecto está categorizado bajo aplicaciones de escritorio y automatización debido a su objetivo de simplificar y automatizar el proceso de votación en Top.gg.",
    status: "in-development",
    visibility: "public",
    isComingSoon: false,
    techs: [
      {
        name: "JavaScript",
        category: "frontend",
      },
      {
        name: "CSS",
        category: "frontend",
      },
      {
        name: "HTML",
        category: "frontend",
      },
      {
        name: "WebAssembly",
        category: "frontend",
      },
      {
        name: "Python",
        category: "frontend",
      },
    ],
    categories: ["Aplicación de Escritorio", "Automatización"],
    links: {
      production: "",
      github: "https://github.com/valentin-marquez/topgg-voter",
      blog: "",
    },
    startDate: new Date("2023-02-26"),
  },
  {
    title: "Babidi",
    shortDescription:
      "Babidi es una plataforma de intercambio de artículos personales que fomenta la reutilización y la sostenibilidad. Facilitamos la conexión entre usuarios para cambiar productos de forma sencilla y amigable. Únete a Babidi y comienza a intercambiar hoy mismo.",
    description:
      "Babidi es una plataforma de intercambio de artículos personales diseñada para fomentar la reutilización y la sostenibilidad. Facilita la conexión entre usuarios, permitiéndoles intercambiar productos de manera sencilla y amigable. Desarrollada principalmente en TypeScript y Astro, con componentes adicionales en JavaScript y CSS, Babidi ofrece una interfaz moderna y eficiente para el intercambio de artículos. La plataforma está categorizada como una solución de intercambio sostenible y amigable con el medio ambiente, promoviendo la reutilización de productos y la reducción de residuos.",
    status: "archived",
    visibility: "public",
    isComingSoon: false,
    techs: [
      {
        name: "TypeScript",
        category: "frontend",
      },
      {
        name: "Astro",
        category: "frontend",
      },
      {
        name: "JavaScript",
        category: "frontend",
      },
      {
        name: "CSS",
        category: "frontend",
      },
    ],
    categories: ["Plataforma de Intercambio", "Sostenibilidad"],
    links: {
      production: "",
      github: "https://github.com/valentin-marquez/Babidi",
      blog: "",
    },
    startDate: new Date("2023-11-11"),
  },
  {
    title: "Lethal Missions",
    shortDescription:
      "Lethal Missions es un mod para el juego Lethal Company que añade misiones al juego.",
    description:
      "Lethal Missions es un mod para el juego Lethal Company que introduce una amplia variedad de misiones, ofreciendo desafíos y objetivos diversos a los jugadores. Estas misiones van desde escapar de situaciones peligrosas hasta presenciar eventos celestiales, y están diseñadas para integrarse sin problemas con las mecánicas existentes del juego, facilitando a los jugadores la obtención de recompensas. El mod incluye soporte multilingüe en inglés y español, comandos de terminal para acceder fácilmente a las misiones, notificaciones en el juego y un menú de misiones configurable. Desarrollado en C#, este mod promueve la inmersión y la rejugabilidad en Lethal Company.",
    status: "completed",
    visibility: "public",
    isComingSoon: false,
    techs: [
      {
        name: "C#",
        category: "frontend",
      },
    ],
    categories: ["Mod de Juego", "Integración y Automatización"],
    links: {
      production:
        "https://thunderstore.io/c/lethal-company/p/Nozz/Lethal_Missions/",
      github: "https://github.com/valentin-marquez/LethalMissions",
      blog: "",
    },
    startDate: new Date("2023-12-10"),
  },
  {
    title: "ghoster",
    shortDescription:
      "📦🔍 Ghoster - Descubre y resalta esas dependencias fantasmales que rondan tu package.json sin ser usadas. ¡Atrápalas antes de que espanten tu código! 👻",
    description:
      "Ghoster es una extensión para Visual Studio Code que ayuda a descubrir y resaltar aquellas dependencias fantasmas que se encuentran en tu archivo package.json sin ser utilizadas. Desarrollada principalmente en TypeScript y JavaScript, esta herramienta permite identificar y gestionar de manera eficiente las dependencias en proyectos de software, asegurando que tu código se mantenga limpio y libre de dependencias innecesarias. Ghoster facilita la detección de estos elementos redundantes antes de que afecten el rendimiento y la calidad de tu código.",
    status: "in-development",
    visibility: "public",
    isComingSoon: false,
    techs: [
      {
        name: "TypeScript",
        category: "frontend",
      },
      {
        name: "JavaScript",
        category: "frontend",
      },
    ],
    categories: ["Vscode Extension", "Dependencia de Software"],
    links: {
      production:
        "https://marketplace.visualstudio.com/items?itemName=valentin-marquez.ghoster",
      github: "https://github.com/valentin-marquez/ghoster",
      blog: "",
    },
    startDate: new Date("2024-07-22"),
  },
  {
    title: "pix",
    shortDescription:
      "🎨 Pix es una librería Node.js para extraer colores dominantes de imágenes.",
    description:
      "Pix es una biblioteca Node.js diseñada para extraer colores predominantes de las imágenes. Principalmente desarrollada en TypeScript y JavaScript, Pix facilita el procesamiento de imágenes y la gestión de paletas de colores. Esta herramienta es ideal para desarrolladores que buscan mejorar la estética visual de sus aplicaciones mediante el uso de colores predominantes extraídos de imágenes.",
    status: "in-development",
    visibility: "public",
    isComingSoon: false,
    techs: [
      {
        name: "TypeScript",
        category: "frontend",
      },
      {
        name: "JavaScript",
        category: "frontend",
      },
    ],
    categories: ["Color Palette", "Image Processing", "Predominant Colors"],
    links: {
      production: "",
      github: "https://github.com/valentin-marquez/pix",
      blog: "",
    },
    startDate: new Date("2024-02-11"),
  },
  {
    title: "Pokemon Phantom",
    shortDescription:
      "Fanmade de pokemon basado en pokemon de gba, el proyecto usa pokeemerald como base para poder ser emulado en gba.",
    description:
      "Fanmade de pokemon basado en pokemon de gba, el proyecto usa pokeemerald como base para poder ser emulado en gba.",
    status: "coming-soon",
    visibility: "public",
    isComingSoon: false,
    techs: [
      {
        name: "C",
        category: "frontend",
      },
      {
        name: "Assembly",
        category: "frontend",
      },
      {
        name: "C++",
        category: "frontend",
      },
      {
        name: "Other",
        category: "frontend",
      },
    ],
    categories: ["Game Development", "Reverse Engineering"],
    links: {
      production: "",
      github: "https://github.com/valentin-marquez/pokemon-phantom",
      blog: "",
    },
    startDate: new Date("2024-10-20"),
  },
  {
    title: "nozz-ui",
    shortDescription: "Biblioteca moderna de componentes React.",
    description:
      "nozz-ui es una biblioteca moderna de componentes React que combina Radix UI, Tailwind CSS y Framer Motion, optimizada con el espacio de color OKLAB para una mejor percepción y accesibilidad del color. Facilita la implementación rápida y personalizable de componentes UI.",
    status: "in-development",
    visibility: "public",
    isComingSoon: true,
    techs: [
      {
        name: "Astro",
        category: "frontend",
      },
      {
        name: "TypeScript",
        category: "frontend",
      },
      {
        name: "CSS",
        category: "frontend",
      },
      {
        name: "JavaScript",
        category: "frontend",
      },
    ],
    categories: ["Component Library", "Frontend Development"],
    links: {
      production: "https://ui.nozz.dev/",
      github: "https://github.com/valentin-marquez/nozz-ui",
      blog: "",
    },
    startDate: new Date("2024-11-12"),
  },
  {
    title: "Arkz",
    shortDescription:
      "ARKZ: La base de datos definitiva de equipos para NIKKE. Explora y comparte las mejores composiciones de equipo compartidas por la comunidad.",
    description:
      "ARKZ es una plataforma web dedicada a NIKKE, que permite a los jugadores compartir y descubrir las mejores composiciones de equipo. Desarrollada con tecnologías modernas como Next.js, TypeScript y Tailwind CSS, la plataforma ofrece una interfaz intuitiva para explorar estrategias para diversos modos de juego, incluyendo Story Mode y Tribe Tower. La aplicación incluye funcionalidades de filtrado avanzado, sistema de votación, y una API robusta para gestionar las contribuciones de la comunidad.",
    status: "in-development",
    visibility: "public",
    isComingSoon: true,
    techs: [
      {
        name: "Next.js",
        category: "frontend",
      },
      {
        name: "TypeScript",
        category: "frontend",
      },
      {
        name: "Tailwind CSS",
        category: "frontend",
      },
      {
        name: "Supabase",
        category: "backend",
      },
      {
        name: "PostgreSQL",
        category: "database",
      },
    ],
    categories: ["Web Development", "Gaming", "Community Platform"],
    links: {
      production: "https://arkz.tech/",
      github: "https://github.com/arkz-tech/arkz",
    },
    startDate: new Date("2024-10-8"),
  },
  {
    title: "NIKKE OCR",
    shortDescription:
      "Una herramienta no invasiva diseñada para capturar y registrar información de personajes del juego móvil NIKKE: Goddess of Victory utilizando tecnología OCR.",
    description:
      "NIKKE OCR es una herramienta no invasiva diseñada para capturar y registrar información de personajes del juego móvil NIKKE: Goddess of Victory. Este programa utiliza tecnología de reconocimiento óptico de caracteres (OCR) para extraer datos de capturas de pantalla del juego, asegurando que no haya interferencia con los archivos o procesos del juego. La herramienta automatiza el escaneo de personajes NIKKE, extrae atributos de personajes incluyendo nombre, rareza, elemento, tipo de arma, escuadrón, tipo de ráfaga y poder de combate, almacena la información de personajes en una base de datos local y proporciona una interfaz amigable con registro en tiempo real. Soporta múltiples idiomas (inglés y español) y opera tomando capturas de pantalla de la ventana del juego sin interacción directa con los archivos del juego.",
    status: "in-development",
    visibility: "public",
    isComingSoon: false,
    techs: [
      {
        name: "Python",
        category: "backend",
      },
      {
        name: "OCR",
        category: "other",
      },
    ],
    categories: [
      "Gaming",
      "Image Processing",
      "Data Extraction",
      "Desktop Application",
    ],
    links: {
      github: "https://github.com/arkz-tech/nikke-ocr",
    },
    startDate: new Date("2024-10-15"),
    versions: [
      {
        version: "1.0.3",
        releaseDate: new Date("2024-10-15"),
        changelog: "Stable release",
        isStable: true,
      },
    ],
    metadata: {
      tags: [
        "windows",
        "ocr",
        "gaming",
        "tool",
        "image-processing",
        "data-extraction",
        "nikke",
      ],
      language: "Python",
      complexity: "intermediate",
      estimatedTime: "2 months",
      client: "personal",
    },
  },

  {
    title: "Arkz-Scripts",
    shortDescription:
      "Conjunto de herramientas PowerShell para mejorar tu experiencia en 'Nikke: Goddess of Victory'. ¡Un solo comando para gobernarlos a todos!",
    description:
      "Arkz-Scripts es una colección de scripts PowerShell diseñados para optimizar y mejorar varios aspectos del juego 'Nikke: Goddess of Victory'. Los scripts están específicamente diseñados para usuarios de Windows y se pueden ejecutar con un solo comando. La herramienta proporciona utilidades diversas para mejorar la experiencia de juego, manteniendo un enfoque en la facilidad de uso y la accesibilidad. Todo el conjunto de scripts se puede ejecutar mediante una simple línea de comando, permitiendo a los usuarios acceder rápidamente a todas las utilidades disponibles.",
    status: "in-development",
    visibility: "public",
    isComingSoon: false,
    techs: [
      {
        name: "PowerShell",
        category: "backend",
      },
    ],
    categories: ["Gaming Tools", "Automation", "Utility Scripts"],
    links: {
      production: "https://scripts.arkz.tech",
      github: "https://github.com/arkz-tech/arkz-scripts",
    },
    startDate: new Date("2024-08-24"),
    metadata: {
      tags: [
        "windows",
        "automation",
        "powershell",
        "game-scripts",
        "utility-scripts",
        "nikke",
      ],
      language: "PowerShell",
      complexity: "intermediate",
      estimatedTime: "1 month",
      client: "personal",
    },
  },
];
