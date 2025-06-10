import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Filter } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';

export default function Articles() {
  const { t } = useTranslation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Mock data for articles
  const articles = [
    {
      title: 'How Developers are Using LLMs',
      description: 'Exploring the innovative ways developers are leveraging large language models in their workflows and applications.',
      date: 'Mar 11, 2025',
      category: 'Articles',
      slug: 'how-developers-using-llms',
      imageSrc: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Writing a Math Textbook with Claude',
      description: 'My experience collaborating with AI to write a comprehensive mathematics textbook for students.',
      date: 'Jan 18, 2025',
      category: 'How Tos',
      slug: 'writing-math-textbook-claude',
      imageSrc: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'The Sony A7 iii after 5 years',
      description: 'A long-term review of the Sony A7 III mirrorless camera after using it professionally for five years.',
      date: 'Jan 12, 2025',
      category: 'Reviews',
      slug: 'sony-a7-iii-after-5-years',
      imageSrc: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Accessing my home server around the world',
      description: 'Using Tailscale, Caddy, and Cloudflare to access my Synology home server from anywhere in the world.',
      date: 'Dec 20, 2024',
      category: 'Articles',
      slug: 'accessing-home-server',
      imageSrc: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'AI interpretation of your website',
      description: 'An experiment with various AI models to see how they interpret and describe web content.',
      date: 'Dec 21, 2024',
      category: 'Experiments',
      slug: 'ai-interpretation-website',
      imageSrc: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-medium">Articles</h1>
        <button 
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter size={18} />
          <span>Filter</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {isFilterOpen && (
          <div className="lg:col-span-1">
            <div className="bg-dark-800 rounded-card p-6 sticky top-6">
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                  <span className="ml-2">Articles</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                  <span className="ml-2">How Tos</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                  <span className="ml-2">Reviews</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                  <span className="ml-2">Experiments</span>
                </label>
              </div>
              
              <h3 className="text-lg font-medium mt-6 mb-4">Date</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="date" className="rounded-full bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                  <span className="ml-2">Last week</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="date" className="rounded-full bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                  <span className="ml-2">Last month</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="date" className="rounded-full bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                  <span className="ml-2">Last year</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="date" className="rounded-full bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" checked />
                  <span className="ml-2">All time</span>
                </label>
              </div>
              
              <button className="w-full mt-6 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        )}
        
        <div className={isFilterOpen ? "lg:col-span-2" : "lg:col-span-3"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <ArticleCard 
                key={index}
                title={article.title}
                description={article.description}
                date={article.date}
                category={article.category}
                slug={article.slug}
                imageSrc={article.imageSrc}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-dark-700 text-white font-medium">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md text-gray-400 hover:bg-dark-700 hover:text-white">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md text-gray-400 hover:bg-dark-700 hover:text-white">...</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md text-gray-400 hover:bg-dark-700 hover:text-white">35</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}