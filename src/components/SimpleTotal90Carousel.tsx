import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SimpleTotal90Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: '/images/articles/total90/total90-1.png', title: 'Dashboard Principal' },
    { src: '/images/articles/total90/total90-2.png', title: 'Selección de Equipos' },
    { src: '/images/articles/total90/total90-3.png', title: 'Predicciones 1X2' },
    { src: '/images/articles/total90/total90-4.png', title: 'Análisis Over/Under' },
    { src: '/images/articles/total90/total90-5.png', title: 'Análisis BTTS' },
    { src: '/images/articles/total90/total90-6.png', title: 'Visualizaciones' },
    { src: '/images/articles/total90/total90-7.png', title: 'Últimos 5 Partidos' },
    { src: '/images/articles/total90/total90-8.png', title: 'Métricas de Calidad' },
    { src: '/images/articles/total90/total90-9.png', title: 'Comparativa Equipos' },
    { src: '/images/articles/total90/total90-10.png', title: 'Configuración SVC' },
    { src: '/images/articles/total90/total90-11.png', title: 'Resultados Finales' }
  ];

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-white">Capturas de TOTAL 90</h3>
        <span className="text-sm text-gray-400">{currentIndex + 1} / {images.length}</span>
      </div>

      {/* Imagen principal */}
      <div className="relative bg-dark-900 rounded-lg overflow-hidden mb-4">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="w-full h-auto max-h-[500px] object-contain"
        />
        
        {/* Navegación */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Título */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h4 className="text-white font-medium">{images[currentIndex].title}</h4>
        </div>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary-400' : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleTotal90Carousel; 