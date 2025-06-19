import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';

export default function EnglishBarrierSurvey() {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState({
    role: '',
    experience: '',
    english_level: '',
    lost_opportunity: '',
    feelings: '',
    wants_to_improve: '',
    app_interest: '',
    features: [] as string[],
    contact: '',
    country: '',
    language: i18n.language
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm(prev => ({
        ...prev,
        features: checked
          ? [...prev.features, value]
          : prev.features.filter(f => f !== value)
      }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('english_barrier_survey').insert([{ ...form, language: i18n.language }]);
    setStatus(error ? 'error' : 'success');
    if (!error) setForm({
      role: '',
      experience: '',
      english_level: '',
      lost_opportunity: '',
      feelings: '',
      wants_to_improve: '',
      app_interest: '',
      features: [],
      contact: '',
      country: '',
      language: i18n.language
    });
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-dark-800 rounded-lg">
      <h1 className="text-2xl font-bold mb-8">{t('surveys.englishBarrier.title')}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.englishBarrier.role')}</label>
          <input name="role" value={form.role} onChange={handleChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.englishBarrier.experience')}</label>
          <select name="experience" value={form.experience} onChange={handleChange} required className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
            <option value="">--</option>
            <option value="less1">{t('surveys.englishBarrier.experienceOptions.lessThanOne')}</option>
            <option value="1-3">{t('surveys.englishBarrier.experienceOptions.oneToThree')}</option>
            <option value="3-5">{t('surveys.englishBarrier.experienceOptions.threeToFive')}</option>
            <option value="5-10">{t('surveys.englishBarrier.experienceOptions.fiveToTen')}</option>
            <option value="10+">{t('surveys.englishBarrier.experienceOptions.tenPlus')}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.englishBarrier.englishLevel')}</label>
          <select name="english_level" value={form.english_level} onChange={handleChange} required className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
            <option value="">--</option>
            <option value="basic">{t('surveys.englishBarrier.englishLevelOptions.basic')}</option>
            <option value="intermediate">{t('surveys.englishBarrier.englishLevelOptions.intermediate')}</option>
            <option value="advanced">{t('surveys.englishBarrier.englishLevelOptions.advanced')}</option>
            <option value="fluent">{t('surveys.englishBarrier.englishLevelOptions.fluent')}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.englishBarrier.lostOpportunity')}</label>
          <select name="lost_opportunity" value={form.lost_opportunity} onChange={handleChange} required className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
            <option value="">--</option>
            <option value="varias">{t('surveys.englishBarrier.lostOpportunityOptions.several')}</option>
            <option value="alguna">{t('surveys.englishBarrier.lostOpportunityOptions.once')}</option>
            <option value="preocupa">{t('surveys.englishBarrier.lostOpportunityOptions.worried')}</option>
            <option value="nunca">{t('surveys.englishBarrier.lostOpportunityOptions.never')}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.englishBarrier.feelings')} <span className="text-xs text-gray-400">({t('surveys.englishBarrier.optional')})</span></label>
          <textarea name="feelings" value={form.feelings} onChange={handleChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.englishBarrier.wantsToImprove')}</label>
          <select name="wants_to_improve" value={form.wants_to_improve} onChange={handleChange} required className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
            <option value="">--</option>
            <option value="urgente">{t('surveys.englishBarrier.wantsToImproveOptions.urgent')}</option>
            <option value="no_prioridad">{t('surveys.englishBarrier.wantsToImproveOptions.notPriority')}</option>
            <option value="no">{t('surveys.englishBarrier.wantsToImproveOptions.no')}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.englishBarrier.appInterest')}</label>
          <select name="app_interest" value={form.app_interest} onChange={handleChange} required className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
            <option value="">--</option>
            <option value="encantaria">{t('surveys.englishBarrier.appInterestOptions.loveIt')}</option>
            <option value="interesante">{t('surveys.englishBarrier.appInterestOptions.interesting')}</option>
            <option value="prefiero_clases">{t('surveys.englishBarrier.appInterestOptions.preferClasses')}</option>
            <option value="no_interesa">{t('surveys.englishBarrier.appInterestOptions.notInterested')}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.englishBarrier.features')} <span className="text-xs text-gray-400">({t('surveys.englishBarrier.multiple')})</span></label>
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 mb-1"><input type="checkbox" name="features" value="conversacional" checked={form.features.includes('conversacional')} onChange={handleChange} /> {t('surveys.englishBarrier.featuresOptions.conversational')}</label>
            <label className="flex items-center gap-2 mb-1"><input type="checkbox" name="features" value="retos" checked={form.features.includes('retos')} onChange={handleChange} /> {t('surveys.englishBarrier.featuresOptions.challenges')}</label>
            <label className="flex items-center gap-2 mb-1"><input type="checkbox" name="features" value="entrevistas" checked={form.features.includes('entrevistas')} onChange={handleChange} /> {t('surveys.englishBarrier.featuresOptions.interviews')}</label>
            <label className="flex items-center gap-2 mb-1"><input type="checkbox" name="features" value="progreso" checked={form.features.includes('progreso')} onChange={handleChange} /> {t('surveys.englishBarrier.featuresOptions.progress')}</label>
            <label className="flex items-center gap-2 mb-1"><input type="checkbox" name="features" value="recordatorios" checked={form.features.includes('recordatorios')} onChange={handleChange} /> {t('surveys.englishBarrier.featuresOptions.reminders')}</label>
            <label className="flex items-center gap-2 mb-1"><input type="checkbox" name="features" value="otro" checked={form.features.includes('otro')} onChange={handleChange} /> {t('surveys.englishBarrier.featuresOptions.other')}</label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.englishBarrier.contact')} <span className="text-xs text-gray-400">({t('surveys.englishBarrier.contactHint')})</span></label>
          <input name="contact" value={form.contact} onChange={handleChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.englishBarrier.country')}</label>
          <input name="country" value={form.country} onChange={handleChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" />
        </div>
        <button type="submit" className="w-full py-3 rounded-lg bg-primary-600 text-white font-medium transition-colors" disabled={status === 'loading'}>
          {status === 'loading' ? t('surveys.englishBarrier.sending') : t('surveys.englishBarrier.submit')}
        </button>
        {status === 'success' && <div className="text-green-400 mt-2">{t('surveys.englishBarrier.success')}</div>}
        {status === 'error' && <div className="text-red-400 mt-2">{t('surveys.englishBarrier.error')}</div>}
      </form>
    </div>
  );
} 