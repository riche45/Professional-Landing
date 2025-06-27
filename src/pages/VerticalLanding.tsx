import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { Bot, CheckCircle, DollarSign, Shield, Zap, Clock } from 'lucide-react';

interface VerticalConfig {
  icon: string;
  heroTitle: string;
  heroSubtitle: string;
  painPoints: string[];
  solution: string;
  benefits: string[];
  pricing: string;
  cta: string;
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
    pricing: '$200-500/mes',
    cta: 'Demo Gratuito para Restaurantes'
  },
  medical: {
    icon: '🏥',
    heroTitle: 'Asistente de IA para tu Consultorio Médico',
    heroSubtitle: 'Gestión inteligente de citas y consultas. 100% HIPAA compliant, datos seguros.',
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
      'HIPAA compliant automático',
      'Datos nunca salen de tu servidor'
    ],
    pricing: '$300-800/mes',
    cta: 'Consulta Médica Gratuita'
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
    pricing: '$200-500/mes',
    cta: 'Demo para Clínicas Dentales'
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
    pricing: '$300-700/mes',
    cta: 'Demo para Gimnasios'
  }
};

export default function VerticalLanding() {
  const { vertical } = useParams<{ vertical: string }>();
  
  const config = vertical ? verticalConfigs[vertical] : null;
  
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