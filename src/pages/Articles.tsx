import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Filter } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';

interface Article {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  imageSrc: string;
}

export default function Articles() {
  const { t } = useTranslation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const articles = (t('articles.featured', { returnObjects: true }) as Article[]);

  const filters = [
    { id: 'all', label: t('articles.filters.all') },
    { id: 'articles', label: t('articles.filters.articles') },
    { id: 'howTos', label: t('articles.filters.howTos') },
    { id: 'reviews', label: t('articles.filters.reviews') }
  ];

  const filteredArticles = activeFilter === 'all' 
    ? articles 
    : articles.filter((article: Article) => article.category.toLowerCase() === activeFilter);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-medium mb-4">{t('articles.title')}</h1>
        <p className="text-gray-400">{t('articles.description')}</p>
      </div>

      {/* Filters */}
      <div className="bg-dark-800 rounded-card p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-medium flex items-center gap-2">
            <Filter size={20} className="text-primary-400" />
            {t('articles.filters.title')}
          </h2>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <Filter size={20} />
          </button>
        </div>

        <div className={`flex flex-wrap gap-2 ${isFilterOpen ? 'block' : 'hidden lg:flex'}`}>
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredArticles.map((article: Article) => (
          <ArticleCard
            key={article.slug}
            {...article}
          />
        ))}
      </div>
    </div>
  );
}