import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Search as SearchIcon, Filter, Calendar, User, MessageSquare, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: string;
  type: 'project' | 'article' | 'profile' | 'chat';
  title: string;
  description: string;
  content: string;
  date?: string;
  category?: string;
  url?: string;
}

export default function Search() {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>(['project', 'article', 'profile', 'chat']);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for search results
  const mockData: SearchResult[] = [
    {
      id: '1',
      type: 'project',
      title: t('search.mockData.project1.title', 'E-commerce Dashboard'),
      description: t('search.mockData.project1.description', 'Sistema de análisis financiero con React y TypeScript'),
      content: t('search.mockData.project1.content', 'Dashboard completo para análisis de ventas, inventario y métricas de rendimiento. Implementado con React, TypeScript, y integración con APIs de pago.'),
      date: '2024-12-15',
      category: 'Web Development',
      url: '/projects/ecommerce-dashboard'
    },
    {
      id: '2',
      type: 'article',
      title: t('search.mockData.article1.title', 'How Developers are Using LLMs'),
      description: t('search.mockData.article1.description', 'Exploring the innovative ways developers are leveraging large language models'),
      content: t('search.mockData.article1.content', 'Los desarrolladores están adoptando LLMs para automatizar tareas, generar código y mejorar la productividad. Este artículo explora las mejores prácticas.'),
      date: '2025-03-11',
      category: 'AI/ML',
      url: '/articles/developers-using-llms'
    },
    {
      id: '3',
      type: 'profile',
      title: t('search.mockData.profile1.title', 'Experiencia Profesional'),
      description: t('search.mockData.profile1.description', 'Más de 5 años en desarrollo de software'),
      content: t('search.mockData.profile1.content', 'Desarrollador full-stack con experiencia en React, TypeScript, Node.js, Python. Especializado en soluciones de AI/ML y desarrollo web moderno.'),
      category: 'About'
    },
    {
      id: '4',
      type: 'chat',
      title: t('search.mockData.chat1.title', 'Conversación sobre proyectos'),
      description: t('search.mockData.chat1.description', 'Discusión sobre desarrollo de aplicaciones móviles'),
      content: t('search.mockData.chat1.content', 'Usuario preguntó sobre experiencia en React Native y desarrollo móvil. Conversación sobre mejores prácticas y herramientas.'),
      date: '2025-01-15'
    },
    {
      id: '5',
      type: 'project',
      title: t('search.mockData.project2.title', 'Health Monitoring App'),
      description: t('search.mockData.project2.description', 'Aplicación móvil para monitoreo de salud'),
      content: t('search.mockData.project2.content', 'App desarrollada con React Native para tracking de actividad física, monitoreo de signos vitales y sincronización con dispositivos wearables.'),
      date: '2024-11-20',
      category: 'Mobile Development',
      url: '/projects/health-app'
    }
  ];

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      const filteredResults = mockData.filter(item => {
        const matchesQuery = 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.content.toLowerCase().includes(query.toLowerCase());
        
        const matchesFilter = activeFilters.includes(item.type);
        
        return matchesQuery && matchesFilter;
      });
      
      setResults(filteredResults);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, activeFilters]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'project': return <FileText size={16} className="text-primary-400" />;
      case 'article': return <FileText size={16} className="text-accent-400" />;
      case 'profile': return <User size={16} className="text-success-400" />;
      case 'chat': return <MessageSquare size={16} className="text-warning-400" />;
      default: return <FileText size={16} />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'project': return t('search.types.project');
      case 'article': return t('search.types.article');
      case 'profile': return t('search.types.profile');
      case 'chat': return t('search.types.chat');
      default: return type;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-medium mb-4">{t('search.title')}</h1>
        <p className="text-gray-400">{t('search.description')}</p>
      </div>

      {/* Search Bar */}
      <div className="bg-dark-800 rounded-card p-6 mb-6">
        <div className="relative mb-4">
          <SearchIcon size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search.placeholder')}
            className="w-full bg-dark-700 border border-dark-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-400 mr-2">{t('search.filters')}</span>
          {[
            { key: 'project', label: t('search.types.projects'), icon: FileText },
            { key: 'article', label: t('search.types.articles'), icon: FileText },
            { key: 'profile', label: t('search.types.profile'), icon: User },
            { key: 'chat', label: t('search.types.conversations'), icon: MessageSquare }
          ].map(filter => (
            <button
              key={filter.key}
              onClick={() => toggleFilter(filter.key)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                activeFilters.includes(filter.key)
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
              }`}
            >
              <filter.icon size={14} />
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {isLoading && (
          <div className="bg-dark-800 rounded-card p-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce delay-200" />
            </div>
            <p className="text-gray-400 mt-2">{t('search.loading')}</p>
          </div>
        )}

        {!isLoading && results.length === 0 && query.trim() !== '' && (
          <div className="bg-dark-800 rounded-card p-6 text-center">
            <p className="text-gray-400">{t('search.noResults')}</p>
          </div>
        )}

        <AnimatePresence>
          {results.map((result) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-800 rounded-card p-6 hover:bg-dark-700 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getTypeIcon(result.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-400">{getTypeLabel(result.type)}</span>
                    {result.date && (
                      <>
                        <span className="text-gray-600">•</span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(result.date).toLocaleDateString(i18n.language === 'es' ? 'es-ES' : 'en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1">{result.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{result.description}</p>
                  <p className="text-gray-500 text-sm line-clamp-2">{result.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}