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
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>(['project', 'article', 'profile', 'chat']);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for search results
  const mockData: SearchResult[] = [
    {
      id: '1',
      type: 'project',
      title: 'E-commerce Dashboard',
      description: 'Sistema de análisis financiero con React y TypeScript',
      content: 'Dashboard completo para análisis de ventas, inventario y métricas de rendimiento. Implementado con React, TypeScript, y integración con APIs de pago.',
      date: '2024-12-15',
      category: 'Web Development',
      url: '/projects/ecommerce-dashboard'
    },
    {
      id: '2',
      type: 'article',
      title: 'How Developers are Using LLMs',
      description: 'Exploring the innovative ways developers are leveraging large language models',
      content: 'Los desarrolladores están adoptando LLMs para automatizar tareas, generar código y mejorar la productividad. Este artículo explora las mejores prácticas.',
      date: '2025-03-11',
      category: 'AI/ML',
      url: '/articles/developers-using-llms'
    },
    {
      id: '3',
      type: 'profile',
      title: 'Experiencia Profesional',
      description: 'Más de 5 años en desarrollo de software',
      content: 'Desarrollador full-stack con experiencia en React, TypeScript, Node.js, Python. Especializado en soluciones de AI/ML y desarrollo web moderno.',
      category: 'About'
    },
    {
      id: '4',
      type: 'chat',
      title: 'Conversación sobre proyectos',
      description: 'Discusión sobre desarrollo de aplicaciones móviles',
      content: 'Usuario preguntó sobre experiencia en React Native y desarrollo móvil. Conversación sobre mejores prácticas y herramientas.',
      date: '2025-01-15'
    },
    {
      id: '5',
      type: 'project',
      title: 'Health Monitoring App',
      description: 'Aplicación móvil para monitoreo de salud',
      content: 'App desarrollada con React Native para tracking de actividad física, monitoreo de signos vitales y sincronización con dispositivos wearables.',
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
      case 'project': return 'Proyecto';
      case 'article': return 'Artículo';
      case 'profile': return 'Perfil';
      case 'chat': return 'Chat';
      default: return type;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-medium mb-4">Búsqueda Global</h1>
        <p className="text-gray-400">Encuentra proyectos, artículos, información del perfil y conversaciones</p>
      </div>

      {/* Search Bar */}
      <div className="bg-dark-800 rounded-card p-6 mb-6">
        <div className="relative mb-4">
          <SearchIcon size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar en todo el contenido..."
            className="w-full bg-dark-700 border border-dark-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-400 mr-2">Filtros:</span>
          {[
            { key: 'project', label: 'Proyectos', icon: FileText },
            { key: 'article', label: 'Artículos', icon: FileText },
            { key: 'profile', label: 'Perfil', icon: User },
            { key: 'chat', label: 'Conversaciones', icon: MessageSquare }
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
            <p className="text-gray-400 mt-2">Buscando...</p>
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
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">
                      {getTypeLabel(result.type)}
                    </span>
                    {result.date && (
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar size={12} />
                        {new Date(result.date).toLocaleDateString()}
                      </div>
                    )}
                    {result.category && (
                      <span className="text-xs text-gray-400">• {result.category}</span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-medium text-white mb-2 hover:text-primary-400 transition-colors">
                    {result.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-3">{result.description}</p>
                  
                  <div className="bg-dark-700 rounded-lg p-3">
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {result.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {query && !isLoading && results.length === 0 && (
          <div className="bg-dark-800 rounded-card p-8 text-center">
            <SearchIcon size={48} className="mx-auto text-gray-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-300 mb-2">No se encontraron resultados</h3>
            <p className="text-gray-400">
              Intenta con diferentes términos de búsqueda o ajusta los filtros
            </p>
          </div>
        )}

        {!query && (
          <div className="bg-dark-800 rounded-card p-8 text-center">
            <SearchIcon size={48} className="mx-auto text-gray-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-300 mb-2">Comienza a buscar</h3>
            <p className="text-gray-400">
              Escribe algo en la barra de búsqueda para encontrar contenido relevante
            </p>
          </div>
        )}
      </div>
    </div>
  );
}