import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Total90ImageCarouselProps {
  isEnglish?: boolean;
}

const Total90ImageCarousel: React.FC<Total90ImageCarouselProps> = ({ isEnglish = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Configuración de las imágenes con descripciones
  const images = [
    {
      src: '/images/articles/total90/total90-1.png',
      titleES: 'Pantalla Principal - Dashboard de TOTAL 90',
      titleEN: 'Main Screen - TOTAL 90 Dashboard',
      descriptionES: 'Interfaz principal con navegación y opciones de análisis',
      descriptionEN: 'Main interface with navigation and analysis options'
    },
    {
      src: '/images/articles/total90/total90-2.png',
      titleES: 'Selección de Liga y Equipos',
      titleEN: 'League and Team Selection',
      descriptionES: 'Sistema de filtros para elegir liga y equipos a analizar',
      descriptionEN: 'Filter system to choose league and teams to analyze'
    },
    {
      src: '/images/articles/total90/total90-3.png',
      titleES: 'Predicciones 1X2',
      titleEN: '1X2 Predictions',
      descriptionES: 'Probabilidades para Victoria Local, Empate, Victoria Visitante',
      descriptionEN: 'Probabilities for Home Win, Draw, Away Win'
    },
    {
      src: '/images/articles/total90/total90-4.png',
      titleES: 'Análisis de Goles - Over/Under',
      titleEN: 'Goals Analysis - Over/Under',
      descriptionES: 'Predicciones de total de goles y análisis Over/Under',
      descriptionEN: 'Total goals predictions and Over/Under analysis'
    },
    {
      src: '/images/articles/total90/total90-5.png',
      titleES: 'Análisis BTTS (Both Teams To Score)',
      titleEN: 'BTTS Analysis (Both Teams To Score)',
      descriptionES: 'Probabilidad de que ambos equipos marquen',
      descriptionEN: 'Probability that both teams will score'
    },
    {
      src: '/images/articles/total90/total90-6.png',
      titleES: 'Visualización de Tendencias',
      titleEN: 'Trends Visualization',
      descriptionES: 'Gráficos interactivos con Plotly mostrando tendencias de rendimiento',
      descriptionEN: 'Interactive Plotly charts showing performance trends'
    },
    {
      src: '/images/articles/total90/total90-7.png',
      titleES: 'Análisis de Últimos 5 Partidos',
      titleEN: 'Last 5 Matches Analysis',
      descriptionES: 'Rendimiento reciente: Goles a Favor (GF) y Goles en Contra (GC)',
      descriptionEN: 'Recent performance: Goals For (GF) and Goals Against (GC)'
    },
    {
      src: '/images/articles/total90/total90-8.png',
      titleES: 'Métricas de Calidad del Partido',
      titleEN: 'Match Quality Metrics',
      descriptionES: 'Indicadores de calidad y confiabilidad de la predicción',
      descriptionEN: 'Quality indicators and prediction reliability'
    },
    {
      src: '/images/articles/total90/total90-9.png',
      titleES: 'Comparativa de Equipos',
      titleEN: 'Team Comparison',
      descriptionES: 'Análisis head-to-head entre los equipos seleccionados',
      descriptionEN: 'Head-to-head analysis between selected teams'
    },
    {
      src: '/images/articles/total90/total90-10.png',
      titleES: 'Configuración del Modelo SVC',
      titleEN: 'SVC Model Configuration',
      descriptionES: 'Parámetros del algoritmo Support Vector Classifier',
      descriptionEN: 'Support Vector Classifier algorithm parameters'
    },
    {
      src: '/images/articles/total90/total90-11.png',
      titleES: 'Resultados y Exportación',
      titleEN: 'Results and Export',
      descriptionES: 'Panel de resultados finales con opciones de exportación',
      descriptionEN: 'Final results panel with export options'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full bg-dark-700 p-6 rounded-lg mb-8">
      {/* Header con contador y controles */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2 sm:gap-4">
          <h3 className="text-base sm:text-lg font-medium text-white">
            {isEnglish ? 'TOTAL 90 Screenshots' : 'Capturas de TOTAL 90'}
          </h3>
          <span className="text-sm text-gray-400">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
        <button
          onClick={toggleAutoPlay}
          className="flex items-center gap-2 px-3 py-1 bg-primary-600/20 text-primary-400 rounded-lg hover:bg-primary-600/30 transition-colors"
        >
          {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
          <span className="text-sm">
            {isAutoPlaying 
              ? (isEnglish ? 'Pause' : 'Pausar')
              : (isEnglish ? 'Auto' : 'Auto')
            }
          </span>
        </button>
      </div>

      {/* Imagen principal */}
      <div className="relative bg-dark-800 rounded-lg overflow-hidden mb-4">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image.src}
                alt={isEnglish ? image.titleEN : image.titleES}
                className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Navegación con flechas */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
          aria-label={isEnglish ? 'Previous image' : 'Imagen anterior'}
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
          aria-label={isEnglish ? 'Next image' : 'Siguiente imagen'}
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* Overlay con información */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-6 pointer-events-none">
          <h4 className="text-white font-medium text-sm sm:text-base md:text-lg mb-1 pointer-events-auto">
            {isEnglish ? currentImage.titleEN : currentImage.titleES}
          </h4>
          <p className="text-gray-300 text-xs sm:text-base pointer-events-auto">
            {isEnglish ? currentImage.descriptionEN : currentImage.descriptionES}
          </p>
        </div>
      </div>

      {/* Indicadores de puntos */}
      <div className="flex justify-center gap-2 mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-primary-400' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`${isEnglish ? 'Go to image' : 'Ir a imagen'} ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnails navegables */}
      <div className="hidden sm:flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-12 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 rounded overflow-hidden border-2 transition-all ${
              index === currentIndex 
                ? 'border-primary-400 opacity-100' 
                : 'border-gray-600 opacity-60 hover:opacity-80'
            }`}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Versión móvil: Solo indicadores de puntos */}
      <div className="sm:hidden flex justify-center gap-1 mt-2">
        {images.slice(0, 5).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-primary-400' 
                : 'bg-gray-600'
            }`}
          />
        ))}
        {images.length > 5 && (
          <span className="text-gray-400 text-xs ml-2">
            +{images.length - 5}
          </span>
        )}
      </div>

      {/* Información adicional */}
      <div className="mt-4 text-center">
        <p className="text-xs sm:text-sm text-gray-400 px-2">
          {isEnglish 
            ? '💡 Tip: Click on thumbnails to navigate quickly, or use arrow keys'
            : '💡 Tip: Haz clic en las miniaturas para navegar rápido, o usa las flechas del teclado'
          }
        </p>
      </div>
    </div>
  );
};

export default Total90ImageCarousel; 