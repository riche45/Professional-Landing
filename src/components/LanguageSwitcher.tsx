import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe size={16} />
        <span>{i18n.language === 'en' ? t('language.en') : t('language.es')}</span>
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 bg-dark-700 rounded-lg shadow-lg overflow-hidden w-32 z-50">
          <button 
            className="w-full text-left px-4 py-2 text-sm hover:bg-dark-600 transition-colors"
            onClick={() => toggleLanguage('en')}
          >
            {t('language.en')}
          </button>
          <button 
            className="w-full text-left px-4 py-2 text-sm hover:bg-dark-600 transition-colors"
            onClick={() => toggleLanguage('es')}
          >
            {t('language.es')}
          </button>
        </div>
      )}
    </div>
  );
}