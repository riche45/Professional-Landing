import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Surveys() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return (
    <div>
      <h1 className="text-3xl font-medium mb-8">{t('surveys.title')}</h1>
      
      <div className="bg-dark-800 rounded-card p-8 mb-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">
              {t('surveys.progressText', { 0: currentStep, 1: totalSteps })}
            </span>
            <span className="text-sm text-gray-400">
              {t('surveys.percentComplete', { 0: Math.round((currentStep / totalSteps) * 100) })}
            </span>
          </div>
          <div className="w-full bg-dark-600 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-medium mb-4">{t('surveys.professionalExperience.title')}</h2>
              <p className="text-gray-300 mb-6">{t('surveys.professionalExperience.description')}</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('surveys.professionalExperience.yearsOfExperience.label')}</label>
                  <select className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
                    <option value="lessThanOne">{t('surveys.professionalExperience.yearsOfExperience.options.lessThanOne')}</option>
                    <option value="oneToThree">{t('surveys.professionalExperience.yearsOfExperience.options.oneToThree')}</option>
                    <option value="threeToFive">{t('surveys.professionalExperience.yearsOfExperience.options.threeToFive')}</option>
                    <option value="fiveToTen">{t('surveys.professionalExperience.yearsOfExperience.options.fiveToTen')}</option>
                    <option value="tenPlus">{t('surveys.professionalExperience.yearsOfExperience.options.tenPlus')}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">{t('surveys.professionalExperience.industry.label')}</label>
                  <select className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
                    <option value="technology">{t('surveys.professionalExperience.industry.options.technology')}</option>
                    <option value="finance">{t('surveys.professionalExperience.industry.options.finance')}</option>
                    <option value="healthcare">{t('surveys.professionalExperience.industry.options.healthcare')}</option>
                    <option value="education">{t('surveys.professionalExperience.industry.options.education')}</option>
                    <option value="retail">{t('surveys.professionalExperience.industry.options.retail')}</option>
                    <option value="manufacturing">{t('surveys.professionalExperience.industry.options.manufacturing')}</option>
                    <option value="other">{t('surveys.professionalExperience.industry.options.other')}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">{t('surveys.professionalExperience.jobRole.label')}</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder={t('surveys.professionalExperience.jobRole.placeholder')}
                  />
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-medium mb-4">{t('surveys.technicalSkills.title')}</h2>
              <p className="text-gray-300 mb-6">{t('surveys.technicalSkills.description')}</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('surveys.technicalSkills.programmingLanguages.label')}</label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(t('surveys.technicalSkills.programmingLanguages.options', { returnObjects: true })).map(([key, value]) => (
                      <label key={key} className="flex items-center">
                        <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                        <span className="ml-2">{value}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">{t('surveys.technicalSkills.frontendFrameworks.label')}</label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(t('surveys.technicalSkills.frontendFrameworks.options', { returnObjects: true })).map(([key, value]) => (
                      <label key={key} className="flex items-center">
                        <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                        <span className="ml-2">{value}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">{t('surveys.technicalSkills.aiExperience.label')}</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    step="1" 
                    defaultValue="2"
                    className="w-full accent-primary-500" 
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{t('surveys.technicalSkills.aiExperience.scale.start')}</span>
                    <span>{t('surveys.technicalSkills.aiExperience.scale.middle')}</span>
                    <span>{t('surveys.technicalSkills.aiExperience.scale.end')}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-medium mb-4">{t('surveys.contentPreferences.title')}</h2>
              <p className="text-gray-300 mb-6">{t('surveys.contentPreferences.description')}</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('surveys.contentPreferences.topics.label')}</label>
                  <div className="space-y-2">
                    {Object.entries(t('surveys.contentPreferences.topics.options', { returnObjects: true })).map(([key, value]) => (
                      <label key={key} className="flex items-center">
                        <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                        <span className="ml-2">{value}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">{t('surveys.contentPreferences.discovery.label')}</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>
        
        <div className="mt-8 flex justify-between">
          {currentStep > 1 && (
            <button
              onClick={handlePrevStep}
              className="px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
            >
              {t('surveys.navigation.previous')}
            </button>
          )}
          <button
            onClick={handleNextStep}
            className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors ml-auto"
          >
            {currentStep === totalSteps ? t('surveys.navigation.submit') : t('surveys.navigation.next')}
          </button>
        </div>
      </div>
      
      <div className="bg-dark-800 rounded-card p-6">
        <h2 className="text-xl font-medium mb-4">Other Surveys</h2>
        <div className="space-y-4">
          <button className="w-full text-left p-4 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors">
            <h3 className="font-medium">Developer Tools Survey 2025</h3>
            <p className="text-sm text-gray-400">Help shape the future of developer tools by sharing your preferences</p>
          </button>
          <button className="w-full text-left p-4 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors">
            <h3 className="font-medium">AI Ethics Questionnaire</h3>
            <p className="text-sm text-gray-400">Share your thoughts on the ethical considerations of AI development</p>
          </button>
          <button className="w-full text-left p-4 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors">
            <h3 className="font-medium">Conference Topic Suggestions</h3>
            <p className="text-sm text-gray-400">What topics would you like to see covered at upcoming tech conferences?</p>
          </button>
        </div>
      </div>
    </div>
  );
}