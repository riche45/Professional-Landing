import { useTranslation } from 'react-i18next';
import { Bot, Zap, Users, BookOpen, Code, Database, MessageSquare, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIServices() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      titleKey: 'aiServices.services.training.title',
      descriptionKey: 'aiServices.services.training.description',
      priceKey: 'aiServices.services.training.price',
      durationKey: 'aiServices.services.training.duration',
      color: 'text-blue-400'
    },
    {
      icon: <Users className="w-8 h-8" />,
      titleKey: 'aiServices.services.consulting.title',
      descriptionKey: 'aiServices.services.consulting.description',
      priceKey: 'aiServices.services.consulting.price',
      durationKey: 'aiServices.services.consulting.duration',
      color: 'text-green-400'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      titleKey: 'aiServices.services.automation.title',
      descriptionKey: 'aiServices.services.automation.description',
      priceKey: 'aiServices.services.automation.price',
      durationKey: 'aiServices.services.automation.duration',
      color: 'text-purple-400'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      titleKey: 'aiServices.services.courses.title',
      descriptionKey: 'aiServices.services.courses.description',
      priceKey: 'aiServices.services.courses.price',
      durationKey: 'aiServices.services.courses.duration',
      color: 'text-orange-400'
    }
  ];

  const products = [
    {
      icon: <Code className="w-6 h-6" />,
      titleKey: 'aiServices.products.templates.title',
      descriptionKey: 'aiServices.products.templates.description'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      titleKey: 'aiServices.products.scripts.title',
      descriptionKey: 'aiServices.products.scripts.description'
    },
    {
      icon: <Bot className="w-6 h-6" />,
      titleKey: 'aiServices.products.chatbots.title',
      descriptionKey: 'aiServices.products.chatbots.description'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      titleKey: 'aiServices.products.saas.title',
      descriptionKey: 'aiServices.products.saas.description'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full">
            <Bot className="w-12 h-12 text-primary-400" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">{t('aiServices.title')}</h1>
        <p className="text-xl text-primary-400 mb-4">{t('aiServices.subtitle')}</p>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          {t('aiServices.description')}
        </p>
      </div>

      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Servicios Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-dark-800 rounded-card p-8 border border-dark-600 hover:border-primary-500/50 transition-colors">
              <div className={`${service.color} mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-400 mb-4">
                {t(service.descriptionKey)}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-primary-400 font-semibold">
                  {t(service.priceKey)}
                </span>
                <span className="text-sm text-gray-500">
                  {t(service.durationKey)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">{t('aiServices.products.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-dark-800 rounded-card p-6 border border-dark-600 hover:border-primary-500/50 transition-colors text-center">
              <div className="text-primary-400 mb-3 flex justify-center">
                {product.icon}
              </div>
              <h3 className="font-semibold mb-2 text-white">
                {t(product.titleKey)}
              </h3>
              <p className="text-gray-400 text-sm">
                {t(product.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Local AI Services Section */}
      <div className="mb-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-card p-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full">
              <Database className="w-12 h-12 text-green-400" />
            </div>
          </div>
          <h2 className="text-3xl font-semibold mb-4">{t('aiServices.localServices.title')}</h2>
          <p className="text-xl text-green-400 mb-4">{t('aiServices.localServices.subtitle')}</p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {t('aiServices.localServices.description')}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2 text-white">{t('aiServices.localServices.advantages.privacy.title')}</h3>
            <p className="text-gray-400 text-sm">{t('aiServices.localServices.advantages.privacy.description')}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-semibold mb-2 text-white">{t('aiServices.localServices.advantages.costs.title')}</h3>
            <p className="text-gray-400 text-sm">{t('aiServices.localServices.advantages.costs.description')}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2 text-white">{t('aiServices.localServices.advantages.speed.title')}</h3>
            <p className="text-gray-400 text-sm">{t('aiServices.localServices.advantages.speed.description')}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-semibold mb-2 text-white">{t('aiServices.localServices.advantages.compliance.title')}</h3>
            <p className="text-gray-400 text-sm">{t('aiServices.localServices.advantages.compliance.description')}</p>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">{t('aiServices.localServices.useCases.title')}</h3>
          
          {/* Microempresas */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-6 text-center text-green-400">Pequeños Negocios</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/ai-services/restaurants" className="bg-dark-800/50 rounded-card p-6 border border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="text-2xl mb-3">🏪</div>
                <h4 className="font-semibold mb-2 text-white">{t('aiServices.localServices.useCases.restaurant.title')}</h4>
                <p className="text-gray-400 mb-2 text-sm">{t('aiServices.localServices.useCases.restaurant.service')}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-400 font-semibold">{t('aiServices.localServices.useCases.restaurant.price')}</span>
                </div>
                <p className="text-green-300 text-sm italic">{t('aiServices.localServices.useCases.restaurant.benefit')}</p>
              </Link>
              <Link to="/ai-services/medical" className="bg-dark-800/50 rounded-card p-6 border border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="text-2xl mb-3">🏥</div>
                <h4 className="font-semibold mb-2 text-white">{t('aiServices.localServices.useCases.medical.title')}</h4>
                <p className="text-gray-400 mb-2 text-sm">{t('aiServices.localServices.useCases.medical.service')}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-400 font-semibold">{t('aiServices.localServices.useCases.medical.price')}</span>
                </div>
                <p className="text-green-300 text-sm italic">{t('aiServices.localServices.useCases.medical.benefit')}</p>
              </Link>
              <div className="bg-dark-800/50 rounded-card p-6 border border-green-500/20">
                <div className="text-2xl mb-3">🏢</div>
                <h4 className="font-semibold mb-2 text-white">{t('aiServices.localServices.useCases.accounting.title')}</h4>
                <p className="text-gray-400 mb-2 text-sm">{t('aiServices.localServices.useCases.accounting.service')}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-400 font-semibold">{t('aiServices.localServices.useCases.accounting.price')}</span>
                </div>
                <p className="text-green-300 text-sm italic">{t('aiServices.localServices.useCases.accounting.benefit')}</p>
              </div>
              <div className="bg-dark-800/50 rounded-card p-6 border border-green-500/20">
                <div className="text-2xl mb-3">🏠</div>
                <h4 className="font-semibold mb-2 text-white">{t('aiServices.localServices.useCases.realestate.title')}</h4>
                <p className="text-gray-400 mb-2 text-sm">{t('aiServices.localServices.useCases.realestate.service')}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-400 font-semibold">{t('aiServices.localServices.useCases.realestate.price')}</span>
                </div>
                <p className="text-green-300 text-sm italic">{t('aiServices.localServices.useCases.realestate.benefit')}</p>
              </div>
              <Link to="/ai-services/dental" className="bg-dark-800/50 rounded-card p-6 border border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="text-2xl mb-3">🦷</div>
                <h4 className="font-semibold mb-2 text-white">{t('aiServices.localServices.useCases.dental.title')}</h4>
                <p className="text-gray-400 mb-2 text-sm">{t('aiServices.localServices.useCases.dental.service')}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-400 font-semibold">{t('aiServices.localServices.useCases.dental.price')}</span>
                </div>
                <p className="text-green-300 text-sm italic">{t('aiServices.localServices.useCases.dental.benefit')}</p>
              </Link>
              <Link to="/ai-services/fitness" className="bg-dark-800/50 rounded-card p-6 border border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="text-2xl mb-3">💪</div>
                <h4 className="font-semibold mb-2 text-white">{t('aiServices.localServices.useCases.fitness.title')}</h4>
                <p className="text-gray-400 mb-2 text-sm">{t('aiServices.localServices.useCases.fitness.service')}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-400 font-semibold">{t('aiServices.localServices.useCases.fitness.price')}</span>
                </div>
                <p className="text-green-300 text-sm italic">{t('aiServices.localServices.useCases.fitness.benefit')}</p>
              </Link>
            </div>
          </div>

          {/* Servicios Premium */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-center text-yellow-400">Servicios Premium</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-800/50 rounded-card p-6 border border-purple-500/20">
                <div className="text-2xl mb-3">🚀</div>
                <h4 className="font-semibold mb-2 text-white">{t('aiServices.localServices.useCases.startup.title')}</h4>
                <p className="text-gray-400 mb-2 text-sm">{t('aiServices.localServices.useCases.startup.service')}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-400 font-semibold">{t('aiServices.localServices.useCases.startup.price')}</span>
                </div>
                <p className="text-purple-300 text-sm italic">{t('aiServices.localServices.useCases.startup.benefit')}</p>
              </div>
              <div className="bg-dark-800/50 rounded-card p-6 border border-yellow-500/20">
                <div className="text-2xl mb-3">🏦</div>
                <h4 className="font-semibold mb-2 text-white">{t('aiServices.localServices.useCases.financial.title')}</h4>
                <p className="text-gray-400 mb-2 text-sm">{t('aiServices.localServices.useCases.financial.service')}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-semibold">{t('aiServices.localServices.useCases.financial.price')}</span>
                </div>
                <p className="text-yellow-300 text-sm italic">{t('aiServices.localServices.useCases.financial.benefit')}</p>
              </div>
              <div className="bg-dark-800/50 rounded-card p-6 border border-blue-500/20">
                <div className="text-2xl mb-3">⚖️</div>
                <h4 className="font-semibold mb-2 text-white">{t('aiServices.localServices.useCases.legal.title')}</h4>
                <p className="text-gray-400 mb-2 text-sm">{t('aiServices.localServices.useCases.legal.service')}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-400 font-semibold">{t('aiServices.localServices.useCases.legal.price')}</span>
                </div>
                <p className="text-blue-300 text-sm italic">{t('aiServices.localServices.useCases.legal.benefit')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Options */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">{t('aiServices.localServices.deployment.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-800/50 rounded-card p-6 border border-blue-500/20 text-center">
              <div className="text-3xl mb-4">🖥️</div>
              <h4 className="font-semibold mb-2 text-white">{t('aiServices.localServices.deployment.local.title')}</h4>
              <p className="text-gray-400 mb-4 text-sm">{t('aiServices.localServices.deployment.local.description')}</p>
              <span className="text-blue-400 font-semibold">{t('aiServices.localServices.deployment.local.price')}</span>
            </div>
            <div className="bg-dark-800/50 rounded-card p-6 border border-blue-500/20 text-center">
              <div className="text-3xl mb-4">☁️</div>
              <h4 className="font-semibold mb-2 text-white">{t('aiServices.localServices.deployment.cloud.title')}</h4>
              <p className="text-gray-400 mb-4 text-sm">{t('aiServices.localServices.deployment.cloud.description')}</p>
              <span className="text-blue-400 font-semibold">{t('aiServices.localServices.deployment.cloud.price')}</span>
            </div>
            <div className="bg-dark-800/50 rounded-card p-6 border border-blue-500/20 text-center">
              <div className="text-3xl mb-4">🔄</div>
              <h4 className="font-semibold mb-2 text-white">{t('aiServices.localServices.deployment.hybrid.title')}</h4>
              <p className="text-gray-400 mb-4 text-sm">{t('aiServices.localServices.deployment.hybrid.description')}</p>
              <span className="text-blue-400 font-semibold">{t('aiServices.localServices.deployment.hybrid.price')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="mb-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-card p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Metodología de Implementación</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Fase 1: Análisis</h3>
            <p className="text-gray-400">Evaluación de necesidades y arquitectura base del sistema</p>
          </div>
          <div>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Fase 2: Desarrollo</h3>
            <p className="text-gray-400">Entrenamiento especializado y optimización de modelos</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Fase 3: Implementación</h3>
            <p className="text-gray-400">Deploy, testing y puesta en producción</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-dark-800 rounded-card p-12 border border-primary-500/20">
        <h2 className="text-3xl font-semibold mb-4">{t('aiServices.cta.title')}</h2>
        <p className="text-gray-400 mb-8 text-lg">
          {t('aiServices.cta.description')}
        </p>
        <Link 
          to="/connects"
          className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
        >
          <Bot className="w-5 h-5 mr-2" />
          {t('aiServices.cta.button')}
        </Link>
      </div>
    </div>
  );
} 