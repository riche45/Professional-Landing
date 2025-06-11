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
      className="bg-dark-800 rounded-card overflow-hidden hover:bg-dark-700 transition-colors"
    >
      <Link to={`/articles/${slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-dark-800/90 text-primary-400 rounded-full text-sm">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <Calendar size={14} />
            <time dateTime={date}>{formattedDate}</time>
          </div>
          
          <h2 className="text-xl font-medium mb-2 text-white hover:text-primary-400 transition-colors">
            {title}
          </h2>
          
          <p className="text-gray-400 text-sm line-clamp-2">
            {description}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}