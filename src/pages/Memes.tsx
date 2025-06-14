import { useTranslation } from 'react-i18next';
import ArticleCard from '../components/ArticleCard';
import Newsletter from '../components/Newsletter';

interface Meme {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  imageSrc: string;
}

export default function Memes() {
  const { t } = useTranslation();
  const memes = (t('humor.featured', { returnObjects: true }) as Meme[])
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-medium mb-4">{t('humor.title')}</h1>
        <p className="text-gray-400">{t('humor.description')}</p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {memes.map((meme) => (
          <ArticleCard key={meme.slug} {...meme} />
        ))}
      </div>
      {/* Newsletter */}
      <Newsletter />
    </div>
  );
} 