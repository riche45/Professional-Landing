import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function IntegratedChat() {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '¡Hola! Soy Richard García, desarrollador de software con más de 5 años de experiencia. Puedo contarte sobre mis proyectos, experiencia profesional, artículos técnicos y colaboraciones. ¿En qué puedo ayudarte?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('experiencia') || lowerMessage.includes('experience')) {
      return 'Tengo más de 5 años de experiencia en desarrollo de software, trabajando en diversos sectores como finanzas, tecnología, salud y educación. Me especializo en desarrollo web moderno con React, TypeScript, y tecnologías de machine learning con Python.';
    }
    
    if (lowerMessage.includes('proyecto') || lowerMessage.includes('project')) {
      return 'He trabajado en múltiples proyectos incluyendo dashboards empresariales, aplicaciones móviles de salud, sistemas de e-learning y plataformas de análisis financiero. Puedes ver algunos de mis trabajos en la sección de artículos y categorías.';
    }
    
    if (lowerMessage.includes('tecnología') || lowerMessage.includes('technology') || lowerMessage.includes('stack')) {
      return 'Mi stack tecnológico incluye React, TypeScript, Node.js, Python, PostgreSQL, MongoDB, y herramientas de AI/ML. También trabajo con frameworks como Next.js, Express, Django y tecnologías cloud como AWS y Docker.';
    }
    
    if (lowerMessage.includes('colabora') || lowerMessage.includes('trabajo') || lowerMessage.includes('hire')) {
      return 'Estoy disponible para proyectos freelance, consultoría técnica y colaboraciones. Puedes contactarme a través de la sección "Connects" donde encontrarás más información sobre oportunidades actuales y cómo trabajar conmigo.';
    }
    
    if (lowerMessage.includes('artículo') || lowerMessage.includes('blog') || lowerMessage.includes('escribes')) {
      return 'Escribo regularmente sobre desarrollo de software, inteligencia artificial, y tecnologías emergentes. Mis artículos recientes incluyen temas como el uso de LLMs en desarrollo, integración de AI en e-commerce, y reviews de herramientas tecnológicas.';
    }
    
    if (lowerMessage.includes('hola') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return '¡Hola! Es un placer conocerte. Soy un desarrollador apasionado por crear soluciones innovadoras. ¿Te interesa conocer más sobre algún proyecto específico o mi experiencia en alguna tecnología en particular?';
    }
    
    return 'Gracias por tu pregunta. Como desarrollador full-stack con experiencia en AI/ML, estoy aquí para ayudarte con cualquier consulta sobre desarrollo de software, proyectos tecnológicos o oportunidades de colaboración. ¿Hay algo específico que te gustaría saber?';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateResponse(userMessage.content),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="bg-white dark:bg-dark-800 rounded-card overflow-hidden border border-gray-200 dark:border-transparent shadow-sm dark:shadow-none transition-colors duration-300">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-dark-600">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-primary-600 flex items-center justify-center">
            <Bot size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-medium text-gray-900 dark:text-white">👋 {t('profile.greeting')}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Asistente Virtual • Siempre disponible</p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-2">{t('profile.description')} <a href="#" className="text-blue-600 dark:text-primary-400 hover:underline">resume.richardgarcia.com</a>.</p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{t('profile.experience')}</p>
      </div>

      {/* Messages Area */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-dark-900/50">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-primary-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot size={16} className="text-white" />
                </div>
              )}
              
              <div className={`max-w-[80%] ${message.role === 'user' ? 'order-1' : ''}`}>
                <div
                  className={`p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-blue-600 dark:bg-primary-600 text-white ml-auto'
                      : 'bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-transparent'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 px-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>

              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-dark-600 flex items-center justify-center flex-shrink-0 mt-1 order-2">
                  <User size={16} className="text-gray-600 dark:text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 justify-start"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-primary-600 flex items-center justify-center flex-shrink-0 mt-1">
              <Bot size={16} className="text-white" />
            </div>
            <div className="bg-white dark:bg-dark-700 p-3 rounded-lg border border-gray-200 dark:border-transparent">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 dark:border-dark-600 bg-white dark:bg-dark-800">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Pregúntame sobre mi experiencia, proyectos o tecnologías..."
              className="w-full bg-gray-100 dark:bg-dark-700 border border-gray-300 dark:border-dark-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-primary-500 focus:border-transparent transition-all"
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-3 bg-blue-600 dark:bg-primary-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center min-w-[48px]"
          >
            <Send size={18} />
          </button>
        </form>
        
        <div className="flex items-center justify-between mt-3 text-xs text-gray-500 dark:text-gray-500">
          <span>Presiona Enter para enviar, Shift + Enter para nueva línea</span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 dark:bg-success-500 rounded-full"></div>
            En línea
          </span>
        </div>
      </div>
    </div>
  );
}