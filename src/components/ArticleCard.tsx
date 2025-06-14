import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  imageSrc: string;
}

export default function ArticleCard({ title, description, date, category, slug, imageSrc }: ArticleCardProps) {
  const { i18n } = useTranslation();

  const formattedDate = new Date(date).toLocaleDateString(
    i18n.language === 'es' ? 'es-ES' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group block bg-dark-800 rounded-card overflow-hidden hover:bg-dark-700 transition-all duration-300"
    >
      <Link to={`/articles/${slug}`} className="block">
        <div className="flex flex-col md:flex-row">
          {/* Imagen */}
          <div className="md:w-1/3 relative overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-48 md:h-64 object-contain bg-dark-900"
              style={{ maxHeight: '256px', minHeight: '192px', background: '#18181b' }}
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary-600/90 text-white text-sm rounded-full">
                {category}
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-primary-400 transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-2">
                {description}
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-500">{formattedDate}</span>
              <ArrowUpRight 
                size={20} 
                className="text-primary-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}