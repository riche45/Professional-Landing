import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  imageSrc?: string;
}

export default function ArticleCard({ title, description, date, category, slug, imageSrc }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-dark-800 rounded-card overflow-hidden mb-6 border border-gray-200 dark:border-transparent shadow-sm dark:shadow-none transition-colors duration-300"
    >
      {imageSrc && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-2">
          <Link 
            to={`/category/${category.toLowerCase()}`}
            className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 dark:bg-primary-900/20 text-blue-600 dark:text-primary-400 hover:bg-blue-200 dark:hover:bg-primary-900/30 transition-colors"
          >
            {category}
          </Link>
          <div className="flex items-center ml-4 text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={14} className="mr-1" />
            {date}
          </div>
        </div>
        
        <h3 className="text-xl font-medium mb-2">
          <Link 
            to={`/article/${slug}`}
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-primary-400 transition-colors"
          >
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        <Link 
          to={`/article/${slug}`}
          className="inline-flex items-center text-blue-600 dark:text-primary-400 hover:text-blue-700 dark:hover:text-primary-300 transition-colors"
        >
          Read more
        </Link>
      </div>
    </motion.article>
  );
}