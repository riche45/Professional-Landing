import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticlePage from './pages/ArticlePage';
import Surveys from './pages/Surveys';
import Connects from './pages/Connects';
import Search from './pages/Search';
import Podcast from './pages/Podcast';
import Resume from './pages/Resume';
import Tutorials from './pages/Tutorials';
import Memes from './pages/Memes';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import SurveyDashboard from './pages/admin/SurveyDashboard';
import AdminLogin from './pages/admin/AdminLogin';
import EnglishBarrierSurvey from './pages/EnglishBarrierSurvey';
import AIAgentsSurvey from './pages/AIAgentsSurvey';
import Links from './pages/Links';
import NewsletterPage from './pages/Newsletter';
import ProfessionalExperienceSurvey from './pages/ProfessionalExperienceSurvey';
import Projects from './pages/Projects';

function App() {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:slug" element={<ArticlePage />} />
          <Route path="articulos" element={<Articles />} />
          <Route path="articulos/:slug" element={<ArticlePage />} />
          <Route path="busqueda" element={<Search />} />
          <Route path="search" element={<Search />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="curriculum" element={<Resume />} />
          <Route path="resume" element={<Resume />} />
          <Route path="connects" element={<Connects />} />
          <Route path="conexiones" element={<Connects />} />
          <Route path="surveys" element={<Surveys />} />
          <Route path="encuestas" element={<Surveys />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="memes" element={<Memes />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="admin/surveys" element={<SurveyDashboard />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="english-barrier-survey" element={<EnglishBarrierSurvey />} />
          <Route path="ai-agents-survey" element={<AIAgentsSurvey />} />
          <Route path="links" element={<Links />} />
          <Route path="newsletter" element={<NewsletterPage />} />
          <Route path="surveys/professional-experience" element={<ProfessionalExperienceSurvey />} />
          <Route path="proyectos" element={<Projects />} />
          <Route path="*" element={<div className="p-12 text-center"><h1 className="text-2xl">{t('errors.pageNotFound')}</h1></div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;