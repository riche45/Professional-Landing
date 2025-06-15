import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function About() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">
        👋 {isEnglish ? "Hey, I'm Richard García" : "Hola, soy Richard García"}
      </h1>
      <p className="text-xl text-gray-300 mb-8 whitespace-pre-line">
        {isEnglish
          ? "I'm a full stack developer, entrepreneur, designer, and digital creator. You can check out my résumé "
          : "Soy desarrollador full stack, emprendedor, diseñador y creador digital. Puedes consultar mi currículum "}
        <Link to={isEnglish ? "/resume" : "/curriculum"} className="text-primary-400 underline">{isEnglish ? 'here' : 'aquí'}</Link>.
        {"\n\n"}
        {t('about.introExtra')}
      </p>

      <h2 className="text-2xl font-semibold text-primary-400 mb-4">{isEnglish ? 'Writings & Resources' : 'Artículos y recursos'}</h2>
      <ul className="list-disc pl-6 mb-8 text-gray-300">
        <li>
          <Link to="/articles/llms-dev-life-savior" className="text-primary-400 underline">
            {t('about.articles.llms')}
          </Link>
        </li>
        <li>
          <Link to="/articles/build-personal-ai-bot" className="text-primary-400 underline">
            {t('about.articles.automation')}
          </Link>
        </li>
        <li>
          <Link to="/articles/writing-prompts-book-claude" className="text-primary-400 underline">
            {t('about.articles.prompts')}
          </Link>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-primary-400 mb-4">{isEnglish ? 'Personal Projects' : 'Proyectos personales'}</h2>
      <ul className="list-disc pl-6 mb-8 text-gray-300">
        <li>{t('about.projects.portfolio')}</li>
        <li>{t('about.projects.gestionai')}</li>
        <li>{t('about.projects.bots')}</li>
      </ul>

      <h2 className="text-2xl font-semibold text-primary-400 mb-4">Open Source</h2>
      <p className="mb-8 text-gray-300">
        {t('about.opensource')} <a href="https://github.com/riche45" target="_blank" rel="noopener noreferrer" className="text-primary-400 underline">GitHub</a>.
      </p>

      <h2 className="text-2xl font-semibold text-primary-400 mb-4">{isEnglish ? 'Social & Contact' : 'Redes y contacto'}</h2>
      <p className="mb-8 text-gray-300 flex flex-wrap gap-4 items-center">
        <a href="https://twitter.com/codeand0" target="_blank" rel="noopener noreferrer" className="text-primary-400 underline">Twitter</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-primary-400 underline">LinkedIn</a>
        <a href="https://github.com/riche45" target="_blank" rel="noopener noreferrer" className="text-primary-400 underline">GitHub</a>
        <a href="mailto:richardlisongarcia@gmail.com" className="text-primary-400 underline">Email</a>
      </p>

      <h2 className="text-2xl font-semibold text-primary-400 mb-4">{isEnglish ? 'Talks & Collaboration' : 'Charlas y colaboraciones'}</h2>
      <p className="mb-8 text-gray-300">
        {t('about.talks')}
      </p>
    </div>
  );
} 