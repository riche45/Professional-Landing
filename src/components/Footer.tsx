import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-800 py-6 mt-auto transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-dark-600 pt-6">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('footer.copyright')} Richard Garcia Vizcaino.
            </p>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>
              {t('footer.builtWith')} React + Vite
            </p>
            <p>
              {t('footer.theme')} Stack {t('footer.designedBy')} RG
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}