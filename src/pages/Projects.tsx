import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

// Data structure for projects
interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  imageSrcs: string[];
  technologies: string[];
  statusKey: string;
  date: string;
  repoUrl?: string;
  demoUrl?: string;
}

// Project data
const portfolioProjects: Project[] = [
  {
    id: 'portfolio-2025',
    titleKey: 'projects.portfolio2025.title',
    descriptionKey: 'projects.portfolio2025.description',
    imageSrcs: ['/images/projects/Portfolio_2025.png'],
    technologies: ['React', 'Vite', 'TypeScript', 'TailwindCSS', 'Supabase', 'i18next'],
    statusKey: 'projects.status.live',
    date: '2024-07-20',
    repoUrl: 'https://github.com/riche45/Professional-Landing',
    demoUrl: '#',
  },
  {
    id: 'english-app',
    titleKey: 'projects.englishApp.title',
    descriptionKey: 'projects.englishApp.description',
    imageSrcs: ['/images/projects/english-app.png'],
    technologies: ['React Native', 'AI', 'Gamification', 'Spaced Repetition'],
    statusKey: 'projects.status.soon',
    date: '2025-01-15',
  },
  {
    id: 'ai-marketplace',
    titleKey: 'projects.aiMarketplace.title',
    descriptionKey: 'projects.aiMarketplace.description',
    imageSrcs: ['/images/projects/ai-marketplace.png'],
    technologies: ['Next.js', 'Stripe', 'Supabase', 'AI Agents'],
    statusKey: 'projects.status.soon',
    date: '2025-03-01',
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  // Status badge colors
  const statusColors: { [key: string]: string } = {
    'projects.status.live': 'bg-green-500/20 text-green-400 border border-green-500/30',
    'projects.status.soon': 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    'projects.status.development': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('nav.projects')}</h1>
        <p className="text-lg md:text-xl text-gray-400">{t('projects.subtitle')}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-primary-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
            onClick={() => openModal(project)}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={project.imageSrcs[0]}
                alt={t(project.titleKey)}
                className="w-full h-full object-cover"
              />
               <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full ${statusColors[project.statusKey] || 'bg-gray-500/20 text-gray-300'}`}>
                {t(project.statusKey)}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-white">{t(project.titleKey)}</h3>
              <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">{t(project.descriptionKey)}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dark-700">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-full bg-primary-600/20 text-primary-400">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-800 rounded-xl max-w-2xl w-11/12 max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl shadow-primary-500/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10">
                <X size={24} />
              </button>
              
              <img src={selectedProject.imageSrcs[0]} alt={t(selectedProject.titleKey)} className="w-full h-64 object-cover rounded-lg mb-6" />

              <h2 className="text-3xl font-bold mb-2 text-white">{t(selectedProject.titleKey)}</h2>
              
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${statusColors[selectedProject.statusKey] || 'bg-gray-500/20 text-gray-300'}`}>
                {t(selectedProject.statusKey)}
              </span>

              <p className="text-gray-300 mb-6">{t(selectedProject.descriptionKey)}</p>

              <h4 className="text-lg font-semibold text-white mb-3">{t('projects.techTitle')}</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm rounded-full bg-dark-700 text-primary-400">{tech}</span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {selectedProject.demoUrl && (
                  <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors">
                    <ExternalLink size={18} />
                    <span>{t('projects.viewDemo')}</span>
                  </a>
                )}
                {selectedProject.repoUrl && (
                  <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors">
                    <Github size={18} />
                    <span>{t('projects.viewRepo')}</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 