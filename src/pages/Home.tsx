import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CategoryCards from '../components/CategoryCards';
import ArticleCard from '../components/ArticleCard';
import IntegratedChat from '../components/IntegratedChat';

interface Article {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  imageSrc: string;
}

export default function Home() {
  const { t } = useTranslation();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const articles = (t('articles.featured', { returnObjects: true }) as Article[]).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Chat Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-12"
      >
        <IntegratedChat />
      </motion.div>

      {/* Categories */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-12"
      >
        <CategoryCards />
      </motion.div>

      {/* Featured Articles */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-12"
      >
        <h2 className="text-2xl font-medium mb-6">{t('articles.title')}</h2>
        <div className="grid grid-cols-1 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              {...article}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}