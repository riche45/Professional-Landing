import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  to: string;
  color: string;
}

const CategoryCard = ({ title, imageSrc, to, color }: CategoryCardProps) => {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ y: -5 }}
        className={cn(
          "relative rounded-card overflow-hidden group",
          "w-full md:w-64 h-32",
          color
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 p-4 z-20">
          <h3 className="text-xl font-medium text-white">{title}</h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default function CategoryCards() {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  const categories = [
    { 
      title: t('categories.articles'), 
      imageSrc: 'https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      to: '/articles', 
      color: 'bg-amber-500/10' 
    },
    {
      title: t('categories.portfolio'),
      imageSrc: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      to: '/portfolio',
      color: 'bg-green-500/10'
    },
    { 
      title: t('categories.howTos'), 
      imageSrc: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      to: '/tutorials', 
      color: 'bg-rose-500/10' 
    },
    { 
      title: t('categories.humor'), 
      imageSrc: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      to: '/memes', 
      color: 'bg-pink-500/10' 
    },
    { 
      title: t('categories.podcast'), 
      imageSrc: 'https://images.pexels.com/photos/4467737/pexels-photo-4467737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      to: '/podcast', 
      color: 'bg-blue-500/10' 
    },
    { 
      title: t('categories.links'), 
      imageSrc: 'https://images.pexels.com/photos/5417664/pexels-photo-5417664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      to: '/links', 
      color: 'bg-teal-500/10' 
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 300;
      const targetScroll = direction === 'left' 
        ? current.scrollLeft - scrollAmount 
        : current.scrollLeft + scrollAmount;
      
      current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-medium mb-6 text-gray-900 dark:text-white">{t('nav.categories')}</h2>
      
      <div className={cn(
        "relative group",
        isDesktop ? "" : "space-y-4"
      )}>
        {isDesktop && (
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 p-2 rounded-full bg-white dark:bg-dark-800 text-gray-900 dark:text-white opacity-0 group-hover:opacity-80 hover:opacity-100 transition-opacity shadow-lg dark:shadow-none border border-gray-200 dark:border-transparent"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        
        <div 
          ref={scrollContainerRef}
          className={cn(
            isDesktop 
              ? "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x" 
              : "grid grid-cols-1 gap-4",
            "py-2"
          )}
          style={isDesktop ? {
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          } : undefined}
        >
          {categories.map((category, index) => (
            <CategoryCard 
              key={index} 
              title={category.title} 
              imageSrc={category.imageSrc} 
              to={category.to} 
              color={category.color} 
            />
          ))}
        </div>
        
        {isDesktop && (
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 p-2 rounded-full bg-white dark:bg-dark-800 text-gray-900 dark:text-white opacity-0 group-hover:opacity-80 hover:opacity-100 transition-opacity shadow-lg dark:shadow-none border border-gray-200 dark:border-transparent"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
}