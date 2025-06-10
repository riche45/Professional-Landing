import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CategoryCards from '../components/CategoryCards';
import ArticleCard from '../components/ArticleCard';
import IntegratedChat from '../components/IntegratedChat';

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
  ];

  return (
    <div>
      <motion.section 
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Integrated Chat Interface */}
        <div className="mb-12">
          <IntegratedChat />
        </div>
        
        <CategoryCards />
      </motion.section>
      
      <section>
        <h2 className="text-2xl font-medium mb-6">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </section>
    </div>
  );
}