import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';

export default function Portfolio() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Project | null>(null);

  const openModal = (project: Project) => setSelected(project);
  const closeModal = () => setSelected(null);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('portfolio.title')}</h1>
        <p className="text-lg md:text-xl text-gray-400">{t('portfolio.subtitle')}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((project, index) => (
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
                src={project.imageSrc}
                alt={t(project.titleKey)}
                className="w-full h-full object-cover"
              />
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
        {selected && (
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
              
              <img src={selected.imageSrc} alt={t(selected.titleKey)} className="w-full h-64 object-cover rounded-lg mb-6" />

              <h2 className="text-3xl font-bold mb-2 text-white">{t(selected.titleKey)}</h2>
              
              <p className="text-gray-300 mb-6">{t(selected.descriptionKey)}</p>

              <h4 className="text-lg font-semibold text-white mb-3">{t('projects.techTitle')}</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm rounded-full bg-dark-700 text-primary-400">{tech}</span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {selected.demoUrl && (
                  <a href={selected.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors">
                    <ExternalLink size={18} />
                    <span>{t('projects.viewDemo')}</span>
                  </a>
                )}
                {selected.repoUrl && (
                  <a href={selected.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors">
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