import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { Bot, CheckCircle, DollarSign, Shield, Zap, Clock } from 'lucide-react';
import { useEffect } from 'react';
import { updateMetaTags, trackPageView, trackCTAClick } from '../utils/seo';

// Declaración para Google Analytics
declare global {
  function gtag(...args: any[]): void;
}

interface VerticalConfig {
  icon: string;
  heroTitle: string;
  heroSubtitle: string;
  painPoints: string[];
  solution: string;
  benefits: string[];
  pricing: string;
  cta: string;
  // SEO específico
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  testimonial?: {
    name: string;
    business: string;
    quote: string;
  };
}

const verticalConfigs: Record<string, VerticalConfig> = {
  restaurants: {
    icon: '🏪',
    heroTitle: 'Automatiza los Pedidos de tu Restaurante con IA',
    heroSubtitle: 'Chatbot inteligente que gestiona pedidos, reservas y consultas 24/7. Sin dependencias externas.',
    painPoints: [
      'Llamadas perdidas durante horas pico',
      'Errores en pedidos telefónicos',
      'Personal ocupado atendiendo consultas básicas',
      'Costos de personal nocturno/fines de semana'
    ],
    solution: 'Bot de IA local que maneja pedidos, consulta menú, gestiona reservas y responde preguntas frecuentes.',
    benefits: [
      'Reduce llamadas perdidas en 80%',
      'Elimina errores de pedidos',
      'Disponible 24/7 sin costos extra',
      'Integración directa con tu sistema POS'
    ],
    pricing: '€180-450/mes',
    cta: 'Demo Gratuito para Restaurantes',
    metaTitle: 'Automatiza los Pedidos de tu Restaurante con IA',
    metaDescription: 'Chatbot inteligente que gestiona pedidos, reservas y consultas 24/7. Sin dependencias externas.',
    keywords: ['restaurante', 'IA', 'pedidos', 'reservas', 'consultas'],
    testimonial: {
      name: 'CPA María Rodríguez',
      business: 'Rodríguez & Asociados',
      quote: 'El bot maneja 90% de las consultas rutinarias. Ahora puedo enfocarme en casos complejos y estrategia fiscal.'
    }
  },
  medical: {
    icon: '🏥',
    heroTitle: 'Asistente de IA para tu Consultorio Médico',
    heroSubtitle: 'Gestión inteligente de citas y consultas. 100% GDPR compliant, datos seguros.',
    painPoints: [
      'Recepcionista saturada con llamadas',
      'Pacientes que no confirman citas',
      'Consultas básicas que consumen tiempo',
      'Preocupaciones por privacidad de datos'
    ],
    solution: 'Asistente de IA que programa citas, envía recordatorios y responde consultas básicas de forma segura.',
    benefits: [
      'Reduce no-shows en 70%',
      'Libera tiempo de recepción',
      'GDPR compliant automático',
      'Datos nunca salen de tu servidor'
    ],
    pricing: '€270-720/mes',
    cta: 'Consulta Médica Gratuita',
    metaTitle: 'Asistente de IA para tu Consultorio Médico',
    metaDescription: 'Gestión inteligente de citas y consultas. 100% GDPR compliant, datos seguros.',
    keywords: ['consultorio', 'IA', 'citas', 'consultas', 'GDPR'],
    testimonial: {
      name: 'Lic. Ana Martínez',
      business: 'Martínez Legal',
      quote: 'El asistente hace el 70% del trabajo inicial. Llego a las consultas ya conociendo el caso y optimizo mi tiempo.'
    }
  },
  dental: {
    icon: '🦷',
    heroTitle: 'Optimiza tu Clínica Dental con IA',
    heroSubtitle: 'Gestión automática de citas, recordatorios y consultas. Reduce no-shows significativamente.',
    painPoints: [
      'Alto índice de no-shows',
      'Agenda desorganizada',
      'Tiempo perdido en llamadas de confirmación',
      'Consultas sobre precios y tratamientos'
    ],
    solution: 'Bot especializado en odontología que gestiona agenda, envía recordatorios y educa sobre tratamientos.',
    benefits: [
      'Reduce no-shows en 75%',
      'Optimiza agenda automáticamente',
      'Educa pacientes sobre tratamientos',
      'Genera leads para tratamientos premium'
    ],
    pricing: '€180-450/mes',
    cta: 'Demo para Clínicas Dentales',
    metaTitle: 'Optimiza tu Clínica Dental con IA',
    metaDescription: 'Gestión automática de citas, recordatorios y consultas. Reduce no-shows significativamente.',
    keywords: ['clínica', 'IA', 'odontología', 'citas', 'tratamientos'],
    testimonial: {
      name: 'Lic. Carlos Vega',
      business: 'Vega Propiedades',
      quote: 'Desde que tengo el bot, mis ventas nocturnas y de fin de semana aumentaron 40%. Es como tener un asistente que nunca duerme.'
    }
  },
  fitness: {
    icon: '💪',
    heroTitle: 'Entrenador Personal de IA para tu Gimnasio',
    heroSubtitle: 'Planes personalizados, seguimiento automático y motivación 24/7 para tus clientes.',
    painPoints: [
      'Clientes sin seguimiento personalizado',
      'Abandono después del primer mes',
      'Entrenadores saturados',
      'Falta de motivación entre sesiones'
    ],
    solution: 'Asistente de IA que crea planes personalizados, hace seguimiento y motiva a los clientes.',
    benefits: [
      'Aumenta retención en 60%',
      'Seguimiento automático 24/7',
      'Planes personalizados escalables',
      'Motivación constante entre sesiones'
    ],
    pricing: '€270-630/mes',
    cta: 'Demo para Gimnasios',
    metaTitle: 'Entrenador Personal de IA para tu Gimnasio',
    metaDescription: 'Planes personalizados, seguimiento automático y motivación 24/7 para tus clientes.',
    keywords: ['gimnasio', 'IA', 'planes', 'seguimiento', 'motivación'],
    testimonial: {
      name: 'Alex Chen',
      business: 'TechFlow Startup',
      quote: 'Tener el código fuente nos permitió adaptar la IA exactamente a nuestro producto. Ahora es parte integral de nuestra plataforma.'
    }
  },
  accounting: {
    icon: '🏢',
    heroTitle: 'Asistente Fiscal de IA para tu Despacho Contable',
    heroSubtitle: 'Consultas automáticas sobre impuestos, deadlines y documentación. Datos 100% confidenciales.',
    painPoints: [
      'Clientes llamando por consultas básicas',
      'Fechas límite que se olvidan',
      'Documentación incompleta de clientes',
      'Tiempo perdido en consultas repetitivas'
    ],
    solution: 'Bot especializado en normativa fiscal que responde consultas, recuerda deadlines y guía documentación.',
    benefits: [
      'Reduce consultas básicas en 85%',
      'Recordatorios automáticos de fechas límite',
      'Guía paso a paso para documentos',
      'Disponible 24/7 para urgencias fiscales'
    ],
    pricing: '€360-900/mes',
    cta: 'Demo para Contadores',
    metaTitle: 'Asistente Fiscal de IA para tu Despacho Contable',
    metaDescription: 'Consultas automáticas sobre impuestos, deadlines y documentación. Datos 100% confidenciales.',
    keywords: ['despacho', 'IA', 'impuestos', 'deadlines', 'documentación'],
    testimonial: {
      name: 'CPA María Rodríguez',
      business: 'Rodríguez & Asociados',
      quote: 'El bot maneja 90% de las consultas rutinarias. Ahora puedo enfocarme en casos complejos y estrategia fiscal.'
    }
  },
  realestate: {
    icon: '🏠',
    heroTitle: 'Agente Inmobiliario de IA 24/7',
    heroSubtitle: 'Atiende prospectos, programa visitas y califica leads automáticamente. Nunca pierdas una oportunidad.',
    painPoints: [
      'Llamadas fuera de horario laboral',
      'Prospectos que no califican perdiendo tiempo',
      'Información repetitiva sobre propiedades',
      'Seguimiento manual de leads'
    ],
    solution: 'Asistente de IA que califica leads, programa visitas y proporciona información detallada de propiedades.',
    benefits: [
      'Atiende prospectos 24/7',
      'Califica leads automáticamente',
      'Programa visitas sin intervención',
      'Información instantánea de propiedades'
    ],
    pricing: '€225-540/mes',
    cta: 'Demo para Inmobiliarias',
    metaTitle: 'Agente Inmobiliario de IA 24/7',
    metaDescription: 'Atiende prospectos, programa visitas y califica leads automáticamente. Nunca pierdas una oportunidad.',
    keywords: ['inmobiliario', 'IA', 'prospectos', 'visitas', 'calificación'],
    testimonial: {
      name: 'Lic. Carlos Vega',
      business: 'Vega Propiedades',
      quote: 'Desde que tengo el bot, mis ventas nocturnas y de fin de semana aumentaron 40%. Es como tener un asistente que nunca duerme.'
    }
  },
  legal: {
    icon: '⚖️',
    heroTitle: 'Asistente Legal de IA para tu Despacho',
    heroSubtitle: 'Consultas iniciales, programación de citas y orientación legal básica. Confidencialidad absoluta.',
    painPoints: [
      'Consultas iniciales que consumen tiempo',
      'Clientes sin orientación sobre tipo de caso',
      'Agenda saturada con consultas básicas',
      'Preocupaciones por confidencialidad'
    ],
    solution: 'Bot legal que hace consultas iniciales, orienta sobre tipos de casos y programa citas especializadas.',
    benefits: [
      'Filtra casos según especialidad',
      'Consultas iniciales automatizadas',
      'Confidencialidad garantizada localmente',
      'Agenda optimizada para casos complejos'
    ],
    pricing: '€450-1080/mes',
    cta: 'Demo para Abogados',
    metaTitle: 'Asistente Legal de IA para tu Despacho',
    metaDescription: 'Consultas iniciales, programación de citas y orientación legal básica. Confidencialidad absoluta.',
    keywords: ['despacho', 'IA', 'consultas', 'programación', 'orientación'],
    testimonial: {
      name: 'Lic. Ana Martínez',
      business: 'Martínez Legal',
      quote: 'El asistente hace el 70% del trabajo inicial. Llego a las consultas ya conociendo el caso y optimizo mi tiempo.'
    }
  },
  startup: {
    icon: '🚀',
    heroTitle: 'Asistente de IA Open Source para tu Startup',
    heroSubtitle: 'Solución completamente personalizable y escalable. Código abierto, cero vendor lock-in.',
    painPoints: [
      'Presupuesto limitado para herramientas',
      'Necesidad de customización extrema',
      'Vendor lock-in con proveedores grandes',
      'Escalabilidad impredecible de costos'
    ],
    solution: 'Plataforma de IA completamente open source, modificable y desplegable en tu infraestructura.',
    benefits: [
      'Código fuente completo incluido',
      'Personalización ilimitada',
      'Escalabilidad predecible',
      'Comunidad de desarrolladores'
    ],
    pricing: '€720-1800/mes',
    cta: 'Demo para Startups',
    metaTitle: 'Asistente de IA Open Source para tu Startup',
    metaDescription: 'Solución completamente personalizable y escalable. Código abierto, cero vendor lock-in.',
    keywords: ['startup', 'IA', 'open source', 'personalizable', 'escalable'],
    testimonial: {
      name: 'Alex Chen',
      business: 'TechFlow Startup',
      quote: 'Tener el código fuente nos permitió adaptar la IA exactamente a nuestro producto. Ahora es parte integral de nuestra plataforma.'
    }
  },
  financial: {
    icon: '🏦',
    heroTitle: 'IA Financiera con Máxima Seguridad',
    heroSubtitle: 'Cumplimiento MiFID II automático, auditorías integradas y seguridad bancaria. Cero riesgo de filtración.',
    painPoints: [
      'Regulaciones estrictas (MiFID II, GDPR)',
      'Auditorías constantes y costosas',
      'Riesgo de filtración de datos sensibles',
      'Latencia inaceptable en operaciones'
    ],
    solution: 'Sistema de IA con cumplimiento regulatorio automático, auditorías integradas y seguridad nivel bancario.',
    benefits: [
      'MiFID II compliance automático',
      'Auditorías en tiempo real',
      'Latencia sub-milisegundo',
      'Cifrado nivel militar'
    ],
    pricing: '€1350-4500/mes',
    cta: 'Demo para Instituciones Financieras',
    metaTitle: 'IA Financiera con Máxima Seguridad',
    metaDescription: 'Cumplimiento MiFID II automático, auditorías integradas y seguridad bancaria. Cero riesgo de filtración.',
    keywords: ['IA', 'financiera', 'MiFID II', 'auditorías', 'seguridad'],
    testimonial: {
      name: 'María Elena Vásquez',
      business: 'Banco Regional',
      quote: 'La primera IA que pasa todas nuestras auditorías sin modificaciones. Reducimos costos de compliance en 80%.'
    }
  }
};

export default function VerticalLanding() {
  const { vertical } = useParams<{ vertical: string }>();
  
  const config = vertical ? verticalConfigs[vertical] : null;
  
  // SEO dinámico y Analytics
  useEffect(() => {
    if (config) {
      // Actualizar meta tags
      updateMetaTags(config.metaTitle, config.metaDescription, config.keywords);
      
      // Track page view
      trackPageView(vertical!, config);
    }
  }, [config, vertical]);
  
  if (!config) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl">Vertical no encontrado</h1>
        <Link to="/ai-services" className="text-primary-400 underline">
          Volver a Servicios de IA
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="text-6xl mb-6">{config.icon}</div>
        <h1 className="text-4xl font-bold mb-4">{config.heroTitle}</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          {config.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/connects"
            className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
          >
            <Bot className="w-5 h-5 mr-2" />
            {config.cta}
          </Link>
        </div>
      </div>

      {/* Pain Points */}
      <div className="mb-16 bg-red-500/10 rounded-card p-8">
        <h2 className="text-3xl font-semibold mb-8 text-center">¿Te suena familiar?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.painPoints.map((pain, index) => (
            <div key={index} className="flex items-start">
              <div className="text-red-400 mr-3 mt-1">❌</div>
              <p className="text-gray-300">{pain}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solution */}
      <div className="mb-16 bg-green-500/10 rounded-card p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">La Solución</h2>
        <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
          {config.solution}
        </p>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Beneficios Comprobados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start bg-dark-800 rounded-card p-6">
              <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={24} />
              <p className="text-gray-300">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-16 bg-primary-500/10 rounded-card p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Inversión</h2>
        <div className="text-4xl font-bold text-primary-400 mb-4">{config.pricing}</div>
        <p className="text-gray-400 mb-6">Incluye instalación, configuración y soporte técnico</p>
        <Link 
          to="/connects"
          className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
        >
          <Clock className="w-5 h-5 mr-2" />
          Consulta Gratuita de 30 min
        </Link>
      </div>

      {/* Final CTA */}
      <div className="text-center bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-card p-12">
        <h2 className="text-3xl font-semibold mb-4">¿Listo para automatizar tu negocio?</h2>
        <p className="text-gray-400 mb-8 text-lg">
          Agenda una consulta gratuita y descubre cómo la IA puede transformar tu negocio
        </p>
        <Link 
          to="/connects"
          className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors text-lg"
        >
          <Bot className="w-6 h-6 mr-2" />
          {config.cta}
        </Link>
      </div>
    </div>
  );
} 