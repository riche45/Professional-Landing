// Tipos de respuesta y utilidades
export interface BotResponse {
  content: string;
  content_en?: string;  // Versión en inglés
  category: string;
  keywords: string[];
}

// Sistema de respuestas del bot
const botResponses: BotResponse[] = [
  {
    content: `¡Hola! 👋 Soy el asistente personal de Richard. Puedo informarte sobre:

📊 Experiencia y proyectos destacados (incluyendo este portafolio profesional desarrollado con React, Vite, TypeScript, Tailwind CSS, Supabase, chat personalizado, newsletter, internacionalización y más).
💻 Tecnologías y habilidades modernas (Full Stack, IA, blockchain, automatización, etc.).
🤝 Colaboraciones, proyectos freelance y oportunidades de conexión.
📝 Artículos, tutoriales y recursos personalizados.

Pregunta por cualquier proyecto, tecnología, sección o servicio. ¿En qué puedo ayudarte?`,
    content_en: `Hi! 👋 I'm Richard's personal assistant. I can tell you about:

📊 Experience and featured projects (including this professional portfolio built with React, Vite, TypeScript, Tailwind CSS, Supabase, custom chat, newsletter, internationalization, and more).
💻 Modern technologies and skills (Full Stack, AI, blockchain, automation, etc.).
🤝 Collaborations, freelance projects, and connection opportunities.
📝 Articles, tutorials, and personalized resources.

Ask me about any project, technology, section, or service. How can I help you?`,
    category: "greeting",
    keywords: ["hola", "hey", "saludos", "buenos días", "buenas tardes", "buenas noches", "hi", "hello", "ey", "hello", "good morning", "good afternoon", "good evening", "greetings"]
  },
  {
    content: `He trabajado en proyectos como:
- Portafolio Personal 2025 (este sitio): Full Stack, moderno, internacionalizado, con chat y newsletter.
- Gestión Financiera con IA: modelo de activos con Python, TensorFlow, scikit-learn, cifrado AES.
- Bots, paneles de control, blockchain, automatización y más.

¿Te gustaría saber más sobre algún proyecto específico o tecnología?`,
    content_en: `I've worked on projects such as:
- Personal Portfolio 2025 (this site): Full Stack, modern, internationalized, with chat and newsletter.
- Financial Management with AI: asset model with Python, TensorFlow, scikit-learn, AES encryption.
- Bots, dashboards, blockchain, automation, and more.

Would you like to know more about a specific project or technology?`,
    category: "projects",
    keywords: ["proyectos", "trabajos", "portfolio", "aplicaciones", "sistemas", "proyecto", "portafolio", "apps", "aplicación", "projects", "works", "applications", "systems", "apps", "portfolio"]
  },
  {
    content: `Mi stack incluye: React, React Native, Vite, TypeScript, Tailwind CSS, Supabase, OpenAI, Python, Django, Node.js, blockchain, IA/ML, i18n, y más. Experiencia en desarrollo web y móvil, automatización, y soluciones personalizadas.`,
    content_en: `My stack includes: React, React Native, Vite, TypeScript, Tailwind CSS, Supabase, OpenAI, Python, Django, Node.js, blockchain, AI/ML, i18n, and more. Experience in web and mobile development, automation, and custom solutions.`,
    category: "skills",
    keywords: ["tecnologías", "stack", "herramientas", "react", "typescript", "python", "node", "blockchain", "tecnología", "programación", "lenguajes", "frameworks", "technologies", "tools", "programming", "languages", "skills", "tech stack"]
  },
  {
    content: `Este portafolio está completamente internacionalizado (español/inglés), con diseño moderno, secciones personalizadas (memes, podcast, links, portfolio, freelance, colaboraciones) y funcionalidades avanzadas como chat y newsletter.`,
    content_en: `This portfolio is fully internationalized (Spanish/English), with modern design, custom sections (memes, podcast, links, portfolio, freelance, collaborations), and advanced features like chat and newsletter.`,
    category: "about_portfolio",
    keywords: ["internacionalización", "personalización", "idiomas", "secciones", "portfolio", "about", "internationalization", "custom", "languages", "sections"]
  },
  {
    content: "Estoy disponible para proyectos freelance, consultoría técnica y colaboraciones. Puedes encontrar más información en la sección de 'Conexiones'.",
    content_en: "I'm available for freelance projects, technical consulting, and collaborations. You can find more information in the 'Connects' section.",
    category: "availability",
    keywords: ["disponible", "disponibilidad", "contratar", "freelance", "trabajo", "contactar", "colaborar", "contratación", "available", "availability", "hire", "contact", "collaborate", "hiring", "work with"]
  },
  {
    content: "Escribo regularmente sobre desarrollo de software, inteligencia artificial y tecnologías emergentes. Puedes encontrar mis artículos en la sección de 'Artículos'.",
    content_en: "I regularly write about software development, artificial intelligence, and emerging technologies. You can find my articles in the 'Articles' section.",
    category: "content",
    keywords: ["artículos", "escribes", "blog", "contenido", "publicaciones", "artículo", "blogs", "escribir", "posts", "articles", "write", "content", "publications", "posts", "blog"]
  },
  {
    content: "Me especializo en desarrollo web moderno, especialmente en React y TypeScript. También tengo experiencia en desarrollo móvil con React Native y backend con Node.js y Python.",
    content_en: "I specialize in modern web development, especially with React and TypeScript. I also have experience in mobile development with React Native and backend development with Node.js and Python.",
    category: "expertise",
    keywords: ["especialidad", "especializas", "mejor", "fuerte", "especialización", "experto", "dominas", "enfoque", "specialty", "specialize", "best", "strong", "specialization", "expert", "master", "focus"]
  },
  {
    content: "Puedes encontrar mis proyectos y código en mi GitHub (@riche45). También comparto actualizaciones y contenido técnico en Twitter (@codeand0).",
    category: "social",
    keywords: ["github", "twitter", "redes", "sociales", "contacto", "seguir", "código", "code", "repositorio", "repos", "repository", "ver código", "ver", "donde", "perfil"]
  },
  {
    content: "Las tarifas varían según el tipo de proyecto y su complejidad. Para desarrollo web tradicional, la tarifa base es de $20/hora, ideal para landing pages y aplicaciones web sencillas.\n\n👉 Para obtener un presupuesto detallado, haz clic aquí: [Solicitar Presupuesto](/conexiones)",
    content_en: "Rates vary depending on the project type and complexity. For traditional web development, the base rate is $20/hour, ideal for landing pages and simple web applications.\n\n👉 To get a detailed quote, click here: [Request Quote](/connects)",
    category: "pricing_basic",
    keywords: ["precio", "precios", "costo", "costos", "tarifa", "tarifas", "cobras", "cobro", "valor", "cuanto", "cuánto", "web", "página", "pagina", "landing", "price", "prices", "cost", "costs", "rate", "rates", "charge", "value", "how much", "website", "page", "landing"]
  },
  {
    content: "Para proyectos de Inteligencia Artificial y Machine Learning, las tarifas oscilan entre $30-$50/hora, dependiendo de la complejidad del modelo y los requisitos de procesamiento de datos.\n\n👉 Discutamos tu proyecto: [Solicitar Consulta](/conexiones)",
    content_en: "For Artificial Intelligence and Machine Learning projects, rates range from $30-$50/hour, depending on model complexity and data processing requirements.\n\n👉 Let's discuss your project: [Request Consultation](/connects)",
    category: "pricing_ai",
    keywords: ["ia", "ai", "machine learning", "ml", "inteligencia artificial", "modelo", "neural", "precio ia", "costo ia", "tarifa ia", "artificial intelligence", "model", "neural", "ai price", "ai cost", "ai rate"]
  },
  {
    content: "Los proyectos blockchain tienen una tarifa especializada de $60-$90/hora, reflejando la complejidad técnica y las medidas de seguridad necesarias.\n\n👉 Obtén una cotización detallada: [Contactar Ahora](/conexiones)",
    content_en: "Blockchain projects have a specialized rate of $60-$90/hour, reflecting the technical complexity and necessary security measures.\n\n👉 Get a detailed quote: [Contact Now](/connects)",
    category: "pricing_blockchain",
    keywords: ["blockchain", "crypto", "web3", "smart contract", "precio blockchain", "costo blockchain", "ethereum", "defi", "blockchain price", "blockchain cost"]
  },
  {
    content: "Como asesor tecnológico, puedo ofrecerte un análisis detallado de costos basado en tus necesidades específicas.\n\n👉 Agenda una consultoría personalizada: [Agendar Consulta](/conexiones)",
    content_en: "As a technology advisor, I can offer you a detailed cost analysis based on your specific needs.\n\n👉 Schedule a personalized consultation: [Schedule Consultation](/connects)",
    category: "pricing_consultation",
    keywords: ["asesoría", "asesoria", "consulta", "presupuesto", "cotización", "cotizacion", "estimación", "estimacion", "inversión", "inversion", "precio proyecto", "costo proyecto", "consulting", "consultation", "quote", "quotation", "estimate", "estimation", "investment", "project price", "project cost"]
  },
  {
    content: "Ofrezco planes flexibles de facturación: por hora, por proyecto completo o retainer mensual.\n\n👉 Explora las opciones de colaboración: [Ver Planes](/conexiones)",
    content_en: "I offer flexible billing plans: hourly, per complete project, or monthly retainer.\n\n👉 Explore collaboration options: [View Plans](/connects)",
    category: "pricing_plans",
    keywords: ["plan", "planes", "facturación", "facturacion", "pago", "pagos", "modalidad", "mensual", "hora", "retainer", "términos", "terminos", "plans", "billing", "payment", "payments", "monthly", "hourly", "retainer", "terms"]
  },
  {
    content: "Lo siento, no entiendo completamente tu pregunta. ¿Podrías reformularla o ser más específico sobre qué te gustaría saber?",
    content_en: "I'm sorry, I don't completely understand your question. Could you rephrase it or be more specific about what you'd like to know?",
    category: "fallback",
    keywords: []
  }
];

// Función para encontrar la mejor respuesta basada en palabras clave
const findBestResponse = (message: string): BotResponse => {
  const normalizedMessage = message.toLowerCase().trim();
  let bestMatch: BotResponse | null = null;
  let highestScore = 0;

  // Primero intentamos encontrar coincidencias exactas
  for (const response of botResponses) {
    let score = 0;
    for (const keyword of response.keywords) {
      const keywordLower = keyword.toLowerCase();
      // Coincidencia exacta vale más puntos
      if (normalizedMessage === keywordLower) {
        score += 3;
      }
      // Coincidencia parcial con prioridad para términos de precio
      else if (normalizedMessage.includes(keywordLower)) {
        score += keywordLower.includes('precio') || keywordLower.includes('costo') ? 2 : 1;
      }
      // Coincidencia de palabras similares
      else if (normalizedMessage.split(' ').some(word => 
        keywordLower.includes(word) || word.includes(keywordLower)
      )) {
        score += 0.5;
      }
    }

    // Dar prioridad a respuestas de precios si la pregunta incluye términos relacionados
    if (normalizedMessage.includes('precio') || 
        normalizedMessage.includes('costo') || 
        normalizedMessage.includes('tarifa')) {
      score *= 1.5;
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = response;
    }
  }

  // Si no hay coincidencias o el puntaje es muy bajo, usar respuesta por defecto
  return bestMatch && highestScore > 0
    ? bestMatch
    : botResponses.find(r => r.category === "fallback") || botResponses[5];
};

export const generateChatResponse = async (message: string, language: string = 'es'): Promise<string> => {
  if (!message.trim()) {
    throw new Error(language === 'es' ? "El mensaje no puede estar vacío" : "Message cannot be empty");
  }

  const response = findBestResponse(message);
  return language === 'en' && response.content_en ? response.content_en : response.content;
}; 