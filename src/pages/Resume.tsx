import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Send, CheckCircle } from 'lucide-react';

import { motion } from 'framer-motion';

export default function Resume() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    reason: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ email: '', company: '', reason: '' });
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-medium mb-4">{t('resume.title')}</h1>
        <p className="text-gray-400">{t('resume.description')}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-dark-800 rounded-card p-6 max-w-lg mx-auto"
      >
        {!isSubmitted ? (
          <>
            <h2 className="text-xl font-medium mb-6 flex items-center gap-2">
              <Download size={20} className="text-accent-400" />
              {t('resume.requestForm.title')}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('resume.requestForm.email.label')} <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('resume.requestForm.email.placeholder')}
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{t('resume.requestForm.company.label')}</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder={t('resume.requestForm.company.placeholder')}
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('resume.requestForm.reason.label')} <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder={t('resume.requestForm.reason.placeholder')}
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all h-24 resize-none"
                  required
                />
              </div>
              
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="text-sm font-medium mb-2">{t('resume.requestForm.privacy.title')}</h4>
                <p className="text-xs text-gray-400">{t('resume.requestForm.privacy.description')}</p>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t('resume.requestForm.submit.sending')}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t('resume.requestForm.submit.button')}
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <CheckCircle size={48} className="text-success-500 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">{t('resume.success.title')}</h3>
            <p className="text-gray-400 mb-4">{t('resume.success.message')}</p>
            <p className="text-sm text-gray-500">{t('resume.success.note')}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}