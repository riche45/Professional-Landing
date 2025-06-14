import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { portfolioProjects } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  slug: string;
  imageSrcs: string[];
  titleKey: string;
  descriptionKey: string;
  githubUrl?: string;
  date: string;
  technologies: string[];
}

export default function Portfolio() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Project | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  const openModal = (project: Project) => {
    setSelected(project);
    setImgIndex(0);
  };
  const closeModal = () => setSelected(null);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-medium mb-4">{t('categories.portfolio')}</h1>
        <p className="text-gray-400 mb-2">{t('portfolio.intro', 'Algunos de mis proyectos destacados, desarrollados con pasión y tecnología moderna.')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -4 }}
            className="bg-dark-800 rounded-card overflow-hidden shadow-lg hover:bg-dark-700 transition-all cursor-pointer"
            onClick={() => openModal(project)}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={project.imageSrcs[0]}
                alt={t(project.titleKey)}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-medium mb-2 text-white">{t(project.titleKey)}</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">{t(project.descriptionKey)}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-full bg-primary-600/20 text-primary-400">{tech}</span>
                ))}
              </div>
              <span className="text-xs text-gray-500">{new Date(project.date).toLocaleDateString()}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de detalles */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 40 }}
              className="bg-dark-900 rounded-xl max-w-2xl w-full p-8 relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-primary-400 text-2xl">&times;</button>
              {/* Galería de imágenes */}
              <div className="flex items-center justify-center mb-6 gap-2">
                <button
                  className="text-gray-400 hover:text-primary-400 text-2xl px-2"
                  onClick={() => setImgIndex(i => (i > 0 ? i - 1 : (selected.imageSrcs.length - 1)))}
                  disabled={selected.imageSrcs.length <= 1}
                >&#8592;</button>
                <img
                  src={selected.imageSrcs[imgIndex]}
                  alt={t(selected.titleKey)}
                  className="rounded-lg max-h-72 object-contain bg-dark-800"
                  style={{ maxWidth: '90%' }}
                />
                <button
                  className="text-gray-400 hover:text-primary-400 text-2xl px-2"
                  onClick={() => setImgIndex(i => (i < selected.imageSrcs.length - 1 ? i + 1 : 0))}
                  disabled={selected.imageSrcs.length <= 1}
                >&#8594;</button>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-white">{t(selected.titleKey)}</h2>
              <p className="text-gray-300 mb-4">{t(selected.descriptionKey)}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-full bg-primary-600/20 text-primary-400">{tech}</span>
                ))}
              </div>
              <span className="text-xs text-gray-500 block mb-4">{new Date(selected.date).toLocaleDateString()}</span>
              {selected.githubUrl && (
                <a
                  href={selected.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                >
                  GitHub
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 