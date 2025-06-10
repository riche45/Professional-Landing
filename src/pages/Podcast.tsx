import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mic, Send, Bell, ThumbsUp, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Podcast() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [topicSuggestion, setTopicSuggestion] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);

  const suggestedTopics = [
    {
      title: 'Desarrollo Web Moderno',
      description: 'React, TypeScript, y las últimas tendencias en frontend',
      votes: 24,
      category: 'Desarrollo'
    },
    {
      title: 'Desarrollo Móvil con React Native',
      description: 'Experiencias y mejores prácticas en desarrollo móvil',
      votes: 18,
      category: 'Mobile'
    },
    {
      title: 'Emprendimiento en Tech',
      description: 'Cómo iniciar y escalar startups tecnológicas',
      votes: 31,
      category: 'Emprendimiento'
    },
    {
      title: 'Inteligencia Artificial en el Desarrollo',
      description: 'Cómo la IA está transformando la programación',
      votes: 42,
      category: 'AI/ML'
    },
    {
      title: 'Experiencias como Freelancer',
      description: 'Consejos y lecciones aprendidas trabajando independiente',
      votes: 15,
      category: 'Carrera'
    },
    {
      title: 'Innovación y Tendencias Tech',
      description: 'Las tecnologías emergentes que están cambiando el mundo',
      votes: 28,
      category: 'Innovación'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const handleSuggestTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (topicSuggestion.trim()) {
      setSuggestionSubmitted(true);
      setTopicSuggestion('');
      setTimeout(() => setSuggestionSubmitted(false), 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="bg-dark-800 rounded-card p-12 mb-8">
          <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mic size={48} className="text-white" />
          </div>
          
          <h1 className="text-4xl font-medium mb-4">Podcast Tech Talks</h1>
          <p className="text-xl text-gray-300 mb-6">
            Conversaciones sobre desarrollo, innovación y experiencias en el mundo tech
          </p>
          
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-medium mb-2">🎙️ Próximamente</h2>
            <p className="text-lg opacity-90">
              Estamos preparando contenido increíble para compartir contigo
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Topic Suggestion Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-800 rounded-card p-6"
        >
          <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
            <Send size={20} className="text-primary-400" />
            Sugiere un Tema
          </h3>
          
          <p className="text-gray-400 mb-6">
            ¿Qué te gustaría escuchar? Comparte tus ideas y ayúdanos a crear contenido relevante.
          </p>
          
          <form onSubmit={handleSuggestTopic} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Tu sugerencia</label>
              <textarea
                value={topicSuggestion}
                onChange={(e) => setTopicSuggestion(e.target.value)}
                placeholder="Describe el tema que te gustaría que cubramos..."
                className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all h-24 resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Enviar Sugerencia
            </button>
          </form>
          
          {suggestionSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-success-600/20 border border-success-600/30 rounded-lg text-success-400 text-sm"
            >
              ¡Gracias por tu sugerencia! La revisaremos pronto.
            </motion.div>
          )}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-800 rounded-card p-6"
        >
          <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
            <Bell size={20} className="text-accent-400" />
            Notificaciones
          </h3>
          
          <p className="text-gray-400 mb-6">
            Sé el primero en saber cuando lancemos el podcast y recibe actualizaciones exclusivas.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Correo electrónico</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Bell size={18} />
                Suscribirse
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-success-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-medium text-success-400 mb-2">¡Suscrito!</h4>
              <p className="text-gray-400">Te notificaremos cuando el podcast esté disponible.</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Suggested Topics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-dark-800 rounded-card p-6"
      >
        <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
          <Users size={20} className="text-primary-400" />
          Temas Propuestos por la Comunidad
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suggestedTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-dark-700 rounded-lg p-4 hover:bg-dark-600 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-1 text-xs rounded-full bg-primary-600/20 text-primary-400">
                  {topic.category}
                </span>
                <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  <ThumbsUp size={14} />
                  {topic.votes}
                </button>
              </div>
              
              <h4 className="font-medium text-white mb-2">{topic.title}</h4>
              <p className="text-sm text-gray-400">{topic.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-dark-700 rounded-lg">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock size={16} />
            <span>Los temas más votados serán priorizados para los primeros episodios</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}