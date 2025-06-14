export default {
  nav: {
    home: 'Inicio',
    archives: 'Archivos',
    search: 'Búsqueda',
    otherSites: 'Mis Otros Sitios',
    talks: 'Mis Charlas',
    podcast: 'Podcast',
    resume: 'Currículum',
    darkMode: 'Modo Oscuro',
    connects: 'Conexiones',
    surveys: 'Encuestas',
    categories: 'Categorías',
  },
  routes: {
    home: '/',
    archives: '/archivos',
    search: '/busqueda',
    podcast: '/podcast',
    resume: '/curriculum',
    connects: '/conexiones',
    surveys: '/encuestas',
  },
  categories: {
    articles: 'Artículos',
    howTos: 'Tutoriales',
    humor: 'Humor',
    podcast: 'Podcast Into the Hopper',
    links: 'Enlaces',
  },
  search: {
    title: 'Búsqueda Global',
    description: 'Encuentra proyectos, artículos, información del perfil y conversaciones',
    placeholder: 'Buscar en todo el contenido...',
    filters: 'Filtros:',
    loading: 'Buscando...',
    noResults: 'No se encontraron resultados',
    types: {
      project: 'Proyecto',
      projects: 'Proyectos',
      article: 'Artículo',
      articles: 'Artículos',
      profile: 'Perfil',
      chat: 'Chat',
      conversations: 'Conversaciones'
    },
    mockData: {
      project1: {
        title: 'Dashboard de E-commerce',
        description: 'Sistema de análisis financiero con React y TypeScript',
        content: 'Dashboard completo para análisis de ventas, inventario y métricas de rendimiento. Implementado con React, TypeScript, y integración con APIs de pago.'
      },
      article1: {
        title: 'Cómo los Desarrolladores están Usando LLMs',
        description: 'Explorando las formas innovadoras en que los desarrolladores aprovechan los modelos de lenguaje',
        content: 'Los desarrolladores están adoptando LLMs para automatizar tareas, generar código y mejorar la productividad. Este artículo explora las mejores prácticas.'
      },
      profile1: {
        title: 'Experiencia Profesional',
        description: 'Más de 5 años en desarrollo de software',
        content: 'Desarrollador full-stack con experiencia en React, TypeScript, Node.js, Python. Especializado en soluciones de AI/ML y desarrollo web moderno.'
      },
      chat1: {
        title: 'Conversación sobre proyectos',
        description: 'Discusión sobre desarrollo de aplicaciones móviles',
        content: 'Usuario preguntó sobre experiencia en React Native y desarrollo móvil. Conversación sobre mejores prácticas y herramientas.'
      },
      project2: {
        title: 'App de Monitoreo de Salud',
        description: 'Aplicación móvil para monitoreo de salud',
        content: 'App desarrollada con React Native para tracking de actividad física, monitoreo de signos vitales y sincronización con dispositivos wearables.'
      }
    }
  },
  errors: {
    pageNotFound: 'Página no encontrada',
  },
  accessibility: {
    scrollLeft: 'Desplazar a la izquierda',
    scrollRight: 'Desplazar a la derecha',
  },
  footer: {
    copyright: '© 2020 - 2025',
    builtWith: 'Construido con',
    theme: 'Tema',
    designedBy: 'diseñado por',
  },
  profile: {
    greeting: '¡Hola, soy Richard García!',
    description: 'Soy un desarrollador de software y diseñador con experiencia. Puedes ver',
    experience: 'Durante más de 5 años, he ayudado a empresas a resolver problemas de negocio con soluciones innovadoras en dominios como finanzas, tecnología, salud y educación.',
  },
  chat: {
    welcome: "¡Hola! 👋 Soy el asistente personal de Richard. Puedo informarte sobre:\n\n📊 Experiencia y proyectos realizados\n💻 Tecnologías y habilidades\n💰 Tarifas por hora (desde $20 para proyectos freelance)\n📝 Artículos y contenido\n\nPuedes preguntarme sobre cualquiera de estos temas o escribir 'precios' para ver las tarifas detalladas. ¿En qué puedo ayudarte?",
    input_placeholder: "Escribe tu mensaje aquí...",
    assistant_status: "Asistente personal",
    error_message: "Lo siento, ha ocurrido un error. Por favor, intenta de nuevo.",
    rate_limit_error: "Has excedido el límite de mensajes por minuto. Por favor, espera un momento.",
    auth_error: "Error de autenticación. Por favor, contacta al administrador.",
    openai_rate_limit: "Se ha excedido el límite de la API de OpenAI. Por favor, intenta más tarde.",
    server_error: "Error en el servidor. Por favor, intenta más tarde.",
    empty_message: "El mensaje no puede estar vacío.",
    invalid_response: "No se recibió una respuesta válida del servidor.",
    responses: {
      experience: 'Tengo más de 5 años de experiencia en desarrollo de software, trabajando en diversos sectores como finanzas, tecnología, salud y educación. Me especializo en desarrollo web moderno con React, TypeScript, Python para análisis de datos, y tecnologías blockchain como Solidity, Besu y Web3.js.',
      projects: 'He trabajado en múltiples proyectos incluyendo dashboards empresariales, aplicaciones móviles de salud, sistemas de e-learning, plataformas de análisis financiero y aplicaciones descentralizadas (dApps). Puedes ver algunos de mis trabajos en la sección de artículos y categorías.',
      tech: 'Mi stack tecnológico incluye React, TypeScript, Node.js, Python para análisis de datos, PostgreSQL, MongoDB, y herramientas de AI/ML. También trabajo con tecnologías blockchain como Solidity, Besu, Ethereum y Web3.js, además de frameworks como Next.js, Express y Django, y tecnologías cloud como AWS y Docker.',
      collaboration: 'Estoy disponible para proyectos freelance, consultoría técnica y colaboraciones. Puedes contactarme a través de la sección "Conexiones" donde encontrarás más información sobre oportunidades actuales y cómo trabajar conmigo.',
      articles: 'Escribo regularmente sobre desarrollo de software, inteligencia artificial, blockchain y tecnologías emergentes. Mis artículos recientes incluyen temas como el uso de LLMs en desarrollo, integración de AI en e-commerce, y análisis de datos con Python.',
      greeting: '¡Hola! Es un placer conocerte. Soy un desarrollador apasionado por crear soluciones innovadoras. ¿Te interesa conocer más sobre algún proyecto específico o mi experiencia en alguna tecnología en particular?',
      default: 'Gracias por tu pregunta. Como desarrollador full-stack con experiencia en AI/ML y blockchain, estoy aquí para ayudarte con cualquier consulta sobre desarrollo de software, proyectos tecnológicos o oportunidades de colaboración. ¿Hay algo específico que te gustaría saber?'
    }
  },
  language: {
    en: 'Inglés',
    es: 'Español',
  },
  cta: {
    connect: 'Conecta conmigo',
    hireMe: 'Contrátame',
    viewProject: 'Ver proyecto',
    readMore: 'Leer más',
  },
  podcast: {
    title: 'Podcast Tech Talks',
    subtitle: 'Conversaciones sobre desarrollo, innovación y experiencias en el mundo tech',
    comingSoon: {
      title: '🎙️ Próximamente',
      description: 'Estamos preparando contenido increíble para compartir contigo'
    },
    suggestTopic: {
      title: 'Sugiere un Tema',
      description: '¿Qué te gustaría escuchar? Comparte tus ideas y ayúdanos a crear contenido relevante.',
      placeholder: 'Describe el tema que te gustaría que cubramos...',
      submitButton: 'Enviar Sugerencia',
      successMessage: '¡Gracias por tu sugerencia! La revisaremos pronto.'
    },
    notifications: {
      title: 'Notificaciones',
      description: 'Sé el primero en saber cuando lancemos el podcast y recibe actualizaciones exclusivas.',
      emailPlaceholder: 'tu@email.com',
      subscribeButton: 'Suscribirse',
      successTitle: '¡Suscrito!',
      successMessage: 'Te notificaremos cuando el podcast esté disponible.'
    },
    suggestedTopics: {
      title: 'Temas Propuestos por la Comunidad',
      topics: [
        {
          title: 'Desarrollo Web Moderno',
          description: 'React, TypeScript, y las últimas tendencias en frontend',
          category: 'Desarrollo'
        },
        {
          title: 'Desarrollo Móvil con React Native',
          description: 'Experiencias y mejores prácticas en desarrollo móvil',
          category: 'Mobile'
        },
        {
          title: 'Emprendimiento en Tech',
          description: 'Cómo iniciar y escalar startups tecnológicas',
          category: 'Emprendimiento'
        },
        {
          title: 'Inteligencia Artificial en el Desarrollo',
          description: 'Cómo la IA está transformando la programación',
          category: 'AI/ML'
        },
        {
          title: 'Experiencias como Freelancer',
          description: 'Consejos y lecciones aprendidas trabajando independiente',
          category: 'Carrera'
        },
        {
          title: 'Innovación y Tendencias Tech',
          description: 'Las tecnologías emergentes que están cambiando el mundo',
          category: 'Innovación'
        }
      ],
      votingInfo: 'Los temas más votados serán priorizados para los primeros episodios'
    }
  },
  articles: {
    title: 'Artículos',
    description: 'Explorando ideas, compartiendo conocimiento y discutiendo tecnología.',
    filters: {
      title: 'Filtrar por categoría',
      all: 'Todos',
      articles: 'Artículos',
      howTos: 'Tutoriales',
      reviews: 'Reviews'
    },
    featured: [
      {
        title: '¿Cómo los LLMs están (literalmente) salvando mi vida como dev? 🤖',
        description: 'Un vistazo honesto y algo irónico a cómo los modelos de lenguaje están cambiando la forma en que programamos. Spoiler: ya no memorizo documentación 😅',
        date: '2024-03-15',
        category: 'Artículos',
        slug: 'llms-dev-life-savior',
        imageSrc: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'Cómo los Desarrolladores están Usando LLMs',
        description: 'Explorando las formas innovadoras en que los desarrolladores aprovechan los modelos de lenguaje en sus flujos de trabajo y aplicaciones.',
        date: '11 Mar 2025',
        category: 'Artículos',
        slug: 'how-developers-using-llms',
        imageSrc: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'Escribiendo un Libro de Matemáticas con Claude',
        description: 'Mi experiencia colaborando con IA para escribir un libro de matemáticas completo para estudiantes.',
        date: '18 Ene 2025',
        category: 'Tutoriales',
        slug: 'writing-math-textbook-claude',
        imageSrc: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'El Sony A7 III después de 5 años',
        description: 'Una revisión a largo plazo de la cámara mirrorless Sony A7 III después de usarla profesionalmente durante cinco años.',
        date: '12 Ene 2025',
        category: 'Reseñas',
        slug: 'sony-a7-iii-after-5-years',
        imageSrc: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  connects: {
    title: 'Conexiones',
    connectionHub: {
      title: 'Centro de Conexiones',
      description: 'Conéctate conmigo para oportunidades freelance, colaboraciones o simplemente para charlar sobre tecnología.',
      buttons: {
        connectGlobally: 'Conectar Globalmente',
        scheduleMeeting: 'Agendar Reunión',
        joinCommunity: 'Unirse a la Comunidad'
      }
    },
    availableFor: {
      title: 'Disponible Para:',
      items: {
        freelance: 'Proyectos Freelance',
        consulting: 'Consultoría Técnica',
        speaking: 'Charlas y Conferencias',
        fulltime: 'Oportunidades de Tiempo Completo'
      }
    },
    tabs: {
      opportunities: 'Oportunidades',
      clients: 'Clientes Anteriores',
      connect: 'Conectar'
    },
    opportunities: {
      title: 'Oportunidades Actuales',
      labels: {
        new: 'Nuevo',
        featured: 'Destacado',
        timeAgo: 'hace 1 semana',
        budget: 'Presupuesto:',
        applyNow: 'Aplicar Ahora'
      },
      projects: {
        websiteRedesign: {
          title: 'Proyecto de Rediseño Web',
          description: 'Buscando un desarrollador front-end experimentado para rediseñar un sitio web corporativo con React y principios de diseño moderno.',
          skills: ['React', 'UI/UX', 'Responsive']
        },
        aiIntegration: {
          title: 'Integración de IA para E-commerce',
          description: 'Buscando un especialista en IA para implementar recomendaciones inteligentes de productos y funcionalidad de búsqueda para una plataforma de e-commerce.',
          skills: ['Python', 'AI/ML', 'API']
        },
        mobileApp: {
          title: 'Desarrollo de App Móvil',
          description: 'Buscando un desarrollador móvil para crear una aplicación de seguimiento fitness multiplataforma con React Native.',
          skills: ['React Native', 'Mobile', 'Firebase']
        }
      }
    },
    clients: {
      title: 'Clientes Anteriores',
      companies: {
        techCorp: {
          name: 'TechCorp Inc.',
          description: 'Rediseño de dashboard empresarial'
        },
        healthTrack: {
          name: 'HealthTrack',
          description: 'App móvil de monitoreo de salud'
        },
        eduLearn: {
          name: 'Plataforma EduLearn',
          description: 'Desarrollo de sistema e-learning'
        },
        finTrack: {
          name: 'FinTrack Solutions',
          description: 'Dashboard de análisis financiero'
        }
      },
      testimonials: {
        title: 'Testimonios',
        sarah: {
          name: 'Sarah Johnson',
          role: 'CTO, TechCorp Inc.'
        }
      }
    },
    contact: {
      title: 'Conectemos',
      description: '¿Interesado en trabajar juntos? Completa el formulario a continuación y me pondré en contacto contigo pronto.',
      form: {
        fullName: 'Nombre Completo',
        emailAddress: 'Correo Electrónico',
        companyOrg: 'Empresa/Organización',
        projectType: {
          label: 'Tipo de Proyecto',
          options: {
            webDev: 'Desarrollo Web',
            mobileDev: 'Desarrollo de App Móvil',
            uiDesign: 'Diseño UI/UX',
            consulting: 'Consultoría Técnica',
            other: 'Otro'
          }
        },
        projectDetails: {
          label: 'Detalles del Proyecto',
          placeholder: 'Por favor proporciona detalles sobre tu proyecto, cronograma y presupuesto.'
        },
        privacyPolicy: 'Acepto la política de privacidad y los términos de servicio',
        submitButton: 'Enviar Solicitud'
      }
    }
  },
  surveys: {
    title: "Encuestas y Sondeos",
    progressText: "Paso {0} de {1}",
    percentComplete: "{0}% Completado",
    professionalExperience: {
      title: "Encuesta de Experiencia Profesional",
      description: "Por favor, comparte tu experiencia profesional para ayudarnos a entender mejor a nuestra audiencia.",
      yearsOfExperience: {
        label: "Años de Experiencia",
        options: {
          lessThanOne: "Menos de 1 año",
          oneToThree: "1-3 años",
          threeToFive: "3-5 años",
          fiveToTen: "5-10 años",
          tenPlus: "Más de 10 años"
        }
      },
      industry: {
        label: "Industria Principal",
        options: {
          technology: "Tecnología",
          finance: "Finanzas",
          healthcare: "Salud",
          education: "Educación",
          retail: "Comercio Minorista",
          manufacturing: "Manufactura",
          other: "Otra"
        }
      },
      jobRole: {
        label: "Puesto de Trabajo",
        placeholder: "ej. Desarrollador de Software, Diseñador, Gerente de Producto"
      }
    },
    technicalSkills: {
      title: "Habilidades Técnicas",
      description: "Cuéntanos sobre tu experiencia técnica y preferencias.",
      programmingLanguages: {
        label: "Lenguajes de Programación (Selecciona todos los que apliquen)",
        options: {
          javascript: "JavaScript",
          python: "Python",
          java: "Java",
          csharp: "C#",
          go: "Go",
          rust: "Rust"
        }
      },
      frontendFrameworks: {
        label: "Frameworks Frontend (Selecciona todos los que apliquen)",
        options: {
          react: "React",
          vue: "Vue",
          angular: "Angular",
          svelte: "Svelte"
        }
      },
      aiExperience: {
        label: "Años de Experiencia con IA/ML",
        scale: {
          start: "0",
          middle: "5",
          end: "10+"
        }
      }
    },
    contentPreferences: {
      title: "Preferencias de Contenido",
      description: "Ayúdanos a entregar el contenido que más te interesa.",
      topics: {
        label: "¿Qué temas te interesan más? (Selecciona todos los que apliquen)",
        options: {
          softwareDev: "Desarrollo de Software",
          machineLearning: "Machine Learning",
          designSystems: "Sistemas de Diseño",
          careerDev: "Desarrollo Profesional",
          techNews: "Noticias de la Industria Tech"
        }
      },
      discovery: {
        label: "¿Cómo encontraste mi portafolio?"
      }
    },
    navigation: {
      next: "Siguiente",
      previous: "Anterior",
      submit: "Enviar Encuesta"
    }
  },
  resume: {
    title: "Currículum Vitae",
    description: "Solicita acceso a mi CV completo con experiencia detallada, proyectos y referencias profesionales.",
    requestForm: {
      title: "Solicitar CV Completo",
      email: {
        label: "Correo Electrónico",
        placeholder: "tu@empresa.com"
      },
      company: {
        label: "Empresa/Organización",
        placeholder: "Nombre de tu empresa"
      },
      reason: {
        label: "Motivo de la solicitud",
        placeholder: "Describe brevemente el motivo de tu solicitud (oportunidad laboral, colaboración, etc.)"
      },
      privacy: {
        title: "Política de Privacidad",
        description: "Tu información será utilizada únicamente para enviar el CV solicitado. No compartimos datos personales con terceros."
      },
      submit: {
        button: "Enviar Solicitud",
        sending: "Enviando..."
      }
    },
    success: {
      title: "¡Solicitud Enviada con Éxito!",
      message: "Gracias por tu interés. Recibirás el CV en breve en tu correo electrónico.",
      note: "Por favor, revisa tu carpeta de spam si no ves el correo en tu bandeja de entrada."
    }
  },
  newsletter: {
    title: '📬 ¡Mantente Actualizado!',
    description: 'Suscríbete para recibir los últimos artículos, tutoriales y conocimientos tecnológicos directamente en tu bandeja de entrada.',
    emailPlaceholder: 'Tu dirección de email',
    sending: 'Suscribiendo...',
    subscribeButton: 'Suscribirse',
    success: '🎉 ¡Suscripción exitosa! Revisa tu email para la confirmación.',
    error: '❌ ¡Ups! Algo salió mal. Por favor, inténtalo de nuevo.',
    legal: 'Al suscribirte, aceptas recibir emails de newsletter. Puedes darte de baja en cualquier momento.'
  },
};