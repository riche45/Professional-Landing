import { useTranslation } from 'react-i18next';
import ArticleCard from '../components/ArticleCard';
import Newsletter from '../components/Newsletter';

interface Tutorial {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  imageSrc: string;
}

export default function Tutorials() {
  const { t } = useTranslation();
  const tutorials = (t('tutorials.featured', { returnObjects: true }) as Tutorial[])
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-medium mb-4">{t('tutorials.title')}</h1>
        <p className="text-gray-400">{t('tutorials.description')}</p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {tutorials.map((tutorial) => (
          <ArticleCard key={tutorial.slug} {...tutorial} />
        ))}
      </div>
      {/* Newsletter */}
      <Newsletter />
    </div>
  );
} 