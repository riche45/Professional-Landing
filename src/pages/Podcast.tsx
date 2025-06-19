import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mic, Send, Bell, ThumbsUp, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface SuggestedTopic {
  title: string;
  description: string;
  category: string;
}

export default function Podcast() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [topicSuggestion, setTopicSuggestion] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);
  const [loading, setLoading] = useState<'none' | 'suggest' | 'subscribe'>('none');

  const suggestedTopics = (t('podcast.suggestedTopics.topics', { returnObjects: true }) as SuggestedTopic[]).map((topic: SuggestedTopic, index: number) => ({
    ...topic,
    votes: Math.floor(Math.random() * 30) + 10 // Simulando votos aleatorios
  }));

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading('subscribe');
    const language = i18n.language;
    const message = `
      <h2>${language === 'en' ? 'Podcast Notification Subscription' : 'Suscripción a notificaciones del Podcast'}</h2>
      <table class="info-table">
        <tr><th>Email</th><td>${email}</td></tr>
        <tr><th>Idioma</th><td>${language}</td></tr>
      </table>
      <p>${language === 'en' ? 'New podcast notification subscription from your portfolio.' : 'Nueva suscripción a notificaciones del podcast desde tu portafolio.'}</p>
    `;
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        language === 'es'
          ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ES
          : import.meta.env.VITE_EMAILJS_TEMPLATE_ID_EN,
        { message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      alert('Error al suscribirse. Intenta de nuevo.');
    }
    setLoading('none');
  };

  const handleSuggestTopic = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicSuggestion.trim()) return;
    setLoading('suggest');
    const language = i18n.language;
    const message = `
      <h2>${language === 'en' ? 'Podcast Topic Suggestion' : 'Sugerencia de Tema para el Podcast'}</h2>
      <table class="info-table">
        <tr><th>${language === 'en' ? 'Suggestion' : 'Sugerencia'}</th><td>${topicSuggestion}</td></tr>
        <tr><th>Idioma</th><td>${language}</td></tr>
      </table>
      <p>${language === 'en' ? 'New podcast topic suggestion from your portfolio.' : 'Nueva sugerencia de tema para el podcast desde tu portafolio.'}</p>
    `;
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        language === 'es'
          ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ES
          : import.meta.env.VITE_EMAILJS_TEMPLATE_ID_EN,
        { message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSuggestionSubmitted(true);
      setTopicSuggestion('');
      setTimeout(() => setSuggestionSubmitted(false), 3000);
    } catch (err) {
      alert('Error al enviar la sugerencia. Intenta de nuevo.');
    }
    setLoading('none');
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
          
          <h1 className="text-4xl font-medium mb-4">{t('podcast.title')}</h1>
          <p className="text-xl text-gray-300 mb-6">
            {t('podcast.subtitle')}
          </p>
          
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-medium mb-2">{t('podcast.comingSoon.title')}</h2>
            <p className="text-lg opacity-90">
              {t('podcast.comingSoon.description')}
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
            {t('podcast.suggestTopic.title')}
          </h3>
          
          <p className="text-gray-400 mb-6">
            {t('podcast.suggestTopic.description')}
          </p>
          
          <form onSubmit={handleSuggestTopic} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t('podcast.suggestTopic.title')}</label>
              <textarea
                value={topicSuggestion}
                onChange={(e) => setTopicSuggestion(e.target.value)}
                placeholder={t('podcast.suggestTopic.placeholder')}
                className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all h-24 resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              disabled={loading === 'suggest'}
            >
              <Send size={18} />
              {t('podcast.suggestTopic.submitButton')}
            </button>
          </form>
          
          {suggestionSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-success-600/20 border border-success-600/30 rounded-lg text-success-400 text-sm"
            >
              {t('podcast.suggestTopic.successMessage')}
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
            {t('podcast.notifications.title')}
          </h3>
          
          <p className="text-gray-400 mb-6">
            {t('podcast.notifications.description')}
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('podcast.notifications.emailPlaceholder')}
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                disabled={loading === 'subscribe'}
              >
                <Bell size={18} />
                {t('podcast.notifications.subscribeButton')}
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
              <h4 className="text-lg font-medium text-success-400 mb-2">{t('podcast.notifications.successTitle')}</h4>
              <p className="text-gray-400">{t('podcast.notifications.successMessage')}</p>
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
          {t('podcast.suggestedTopics.title')}
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
            <span>{t('podcast.suggestedTopics.votingInfo')}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}