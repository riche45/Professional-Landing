import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { surveyService } from '../services/surveyService';

export default function ProfessionalExperienceForm({ onSuccess }: { onSuccess?: () => void }) {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    years_of_experience: '',
    industry: '',
    job_role: '',
    programming_languages: [] as string[],
    frontend_frameworks: [] as string[],
    ai_experience: 2,
    topics: [] as string[],
    discovery: '',
    startup_founder: '',
    consent: false
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'required' | 'consent'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox' && name === 'consent') {
      setFormData(prev => ({ ...prev, consent: (e.target as HTMLInputElement).checked }));
    } else if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      const field = name;
      const currentValues = formData[field as keyof typeof formData] as string[];
      if (checked) {
        setFormData(prev => ({ ...prev, [field]: [...currentValues, value] }));
      } else {
        setFormData(prev => ({ ...prev, [field]: currentValues.filter(v => v !== value) }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    if (!formData.consent) return 'consent';
    if (
      !formData.years_of_experience ||
      !formData.industry ||
      !formData.job_role ||
      formData.programming_languages.length === 0 ||
      formData.frontend_frameworks.length === 0 ||
      formData.topics.length === 0 ||
      !formData.discovery
    ) {
      return 'required';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (validation) {
      setSubmitStatus(validation as any);
      return;
    }
    setSubmitStatus('loading');
    const { consent, ...toSend } = formData;
    const result = await surveyService.addSurveyResponse({
      ...toSend,
      language: i18n.language
    });
    if (result.success) {
      setSubmitStatus('success');
      setFormData({
        years_of_experience: '',
        industry: '',
        job_role: '',
        programming_languages: [],
        frontend_frameworks: [],
        ai_experience: 2,
        topics: [],
        discovery: '',
        startup_founder: '',
        consent: false
      });
      if (onSuccess) onSuccess();
    } else {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-dark-800 rounded-lg">
      <h1 className="text-2xl font-bold mb-8">{t('surveys.professionalExperience.title')}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.professionalExperience.yearsOfExperience.label')}</label>
          <select name="years_of_experience" value={formData.years_of_experience} onChange={handleInputChange} required className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white">
            <option value="">--</option>
            <option value="menos1">{t('surveys.professionalExperience.yearsOfExperience.options.lessThanOne')}</option>
            <option value="1-3">{t('surveys.professionalExperience.yearsOfExperience.options.oneToThree')}</option>
            <option value="3-5">{t('surveys.professionalExperience.yearsOfExperience.options.threeToFive')}</option>
            <option value="5-10">{t('surveys.professionalExperience.yearsOfExperience.options.fiveToTen')}</option>
            <option value="10+">{t('surveys.professionalExperience.yearsOfExperience.options.tenPlus')}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.professionalExperience.industry.label')}</label>
          <select name="industry" value={formData.industry} onChange={handleInputChange} required className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white">
            <option value="">--</option>
            <option value="tecnologia">{t('surveys.professionalExperience.industry.options.technology')}</option>
            <option value="finanzas">{t('surveys.professionalExperience.industry.options.finance')}</option>
            <option value="salud">{t('surveys.professionalExperience.industry.options.healthcare')}</option>
            <option value="educacion">{t('surveys.professionalExperience.industry.options.education')}</option>
            <option value="retail">{t('surveys.professionalExperience.industry.options.retail')}</option>
            <option value="manufactura">{t('surveys.professionalExperience.industry.options.manufacturing')}</option>
            <option value="otra">{t('surveys.professionalExperience.industry.options.other')}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.professionalExperience.jobRole.label')}</label>
          <input name="job_role" value={formData.job_role} onChange={handleInputChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white" required placeholder={t('surveys.professionalExperience.jobRole.placeholder')} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.technicalSkills.programmingLanguages.label')}</label>
          <div className="flex flex-wrap gap-2">
            {['javascript','python','java','csharp','go','rust'].map(lang => (
              <label key={lang} className="flex items-center gap-1">
                <input type="checkbox" name="programming_languages" value={lang} checked={formData.programming_languages.includes(lang)} onChange={handleInputChange} />
                {t(`surveys.technicalSkills.programmingLanguages.options.${lang}`)}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.technicalSkills.frontendFrameworks.label')}</label>
          <div className="flex flex-wrap gap-2">
            {['react','vue','angular','svelte'].map(fw => (
              <label key={fw} className="flex items-center gap-1">
                <input type="checkbox" name="frontend_frameworks" value={fw} checked={formData.frontend_frameworks.includes(fw)} onChange={handleInputChange} />
                {t(`surveys.technicalSkills.frontendFrameworks.options.${fw}`)}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.contentPreferences.topics.label')}</label>
          <div className="flex flex-wrap gap-2">
            {['softwareDev','machineLearning','designSystems','careerDev','techNews'].map(topic => (
              <label key={topic} className="flex items-center gap-1">
                <input type="checkbox" name="topics" value={topic} checked={formData.topics.includes(topic)} onChange={handleInputChange} />
                {t(`surveys.contentPreferences.topics.options.${topic}`)}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.contentPreferences.discovery.label')}</label>
          <input name="discovery" value={formData.discovery} onChange={handleInputChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.professionalExperience.startupFounder.label')}</label>
          <select name="startup_founder" value={formData.startup_founder} onChange={handleInputChange} required className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white">
            <option value="">--</option>
            <option value="founder">{t('surveys.professionalExperience.startupFounder.options.founder')}</option>
            <option value="entrepreneur">{t('surveys.professionalExperience.startupFounder.options.entrepreneur')}</option>
            <option value="technical">{t('surveys.professionalExperience.startupFounder.options.technical')}</option>
            <option value="other">{t('surveys.professionalExperience.startupFounder.options.other')}</option>
          </select>
        </div>
        <div className="flex items-center mt-2">
          <input type="checkbox" name="consent" checked={formData.consent} onChange={handleInputChange} className="mr-2" />
          <span>{t('surveys.consent.label')}</span>
        </div>
        <button type="submit" className="w-full py-3 rounded-lg bg-primary-600 text-white font-medium transition-colors" disabled={submitStatus === 'loading'}>
          {submitStatus === 'loading' ? t('surveys.navigation.submit') + '...' : t('surveys.navigation.submit')}
        </button>
        {submitStatus === 'success' && <div className="text-green-400 mt-2">{t('surveys.feedback.success')}</div>}
        {submitStatus === 'error' && <div className="text-red-400 mt-2">{t('surveys.feedback.error')}</div>}
        {submitStatus === 'required' && <div className="text-yellow-400 mt-2">{t('surveys.feedback.required')}</div>}
        {submitStatus === 'consent' && <div className="text-yellow-400 mt-2">{t('surveys.feedback.consent')}</div>}
      </form>
    </div>
  );
} 