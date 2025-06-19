import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';

export default function AIAgentsSurvey() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    role: '',
    industry: '',
    experience: '',
    pain_point_1: '',
    pain_point_2: '',
    pain_point_3: '',
    repetitive_tasks: '',
    ai_agent_interest: '',
    key_functionality: '',
    contact: '',
    country: '',
    language: 'es',
    consent: false
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'consent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) {
      setStatus('consent');
      return;
    }
    setStatus('loading');
    const { consent, ...toSend } = form;
    const { error } = await supabase.from('ai_agents_survey').insert([toSend]);
    setStatus(error ? 'error' : 'success');
    if (!error) setForm({
      role: '',
      industry: '',
      experience: '',
      pain_point_1: '',
      pain_point_2: '',
      pain_point_3: '',
      repetitive_tasks: '',
      ai_agent_interest: '',
      key_functionality: '',
      contact: '',
      country: '',
      language: 'es',
      consent: false
    });
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-dark-800 rounded-lg">
      <h1 className="text-2xl font-bold mb-8">{t('surveys.aiAgents.title')}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.aiAgents.role')}</label>
          <input name="role" value={form.role} onChange={handleChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.aiAgents.industry')}</label>
          <select name="industry" value={form.industry} onChange={handleChange} required className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
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
          <label className="block text-sm font-medium mb-2">{t('surveys.aiAgents.experience')}</label>
          <select name="experience" value={form.experience} onChange={handleChange} required className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
            <option value="">--</option>
            <option value="menos1">{t('surveys.professionalExperience.yearsOfExperience.options.lessThanOne')}</option>
            <option value="1-3">{t('surveys.professionalExperience.yearsOfExperience.options.oneToThree')}</option>
            <option value="3-5">{t('surveys.professionalExperience.yearsOfExperience.options.threeToFive')}</option>
            <option value="5-10">{t('surveys.professionalExperience.yearsOfExperience.options.fiveToTen')}</option>
            <option value="10+">{t('surveys.professionalExperience.yearsOfExperience.options.tenPlus')}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.aiAgents.painPoint1')}</label>
          <input name="pain_point_1" value={form.pain_point_1} onChange={handleChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.aiAgents.painPoint2')}</label>
          <input name="pain_point_2" value={form.pain_point_2} onChange={handleChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.aiAgents.painPoint3')}</label>
          <input name="pain_point_3" value={form.pain_point_3} onChange={handleChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.aiAgents.repetitiveTasks')}</label>
          <textarea name="repetitive_tasks" value={form.repetitive_tasks} onChange={handleChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.aiAgents.aiAgentInterest')}</label>
          <select name="ai_agent_interest" value={form.ai_agent_interest} onChange={handleChange} required className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
            <option value="">--</option>
            <option value="si">{t('general.yes', 'Sí')}</option>
            <option value="depende">{t('general.depends', 'Depende de la solución')}</option>
            <option value="no">{t('general.no', 'No, no me interesa')}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.aiAgents.keyFunctionality')}</label>
          <input name="key_functionality" value={form.key_functionality} onChange={handleChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.aiAgents.contact')} <span className="text-xs text-gray-400">(email o LinkedIn, opcional)</span></label>
          <input name="contact" value={form.contact} onChange={handleChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('surveys.aiAgents.country')}</label>
          <input name="country" value={form.country} onChange={handleChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" />
        </div>
        <div className="flex items-center mt-2">
          <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mr-2" />
          <span>{t('surveys.aiAgents.consent')}</span>
        </div>
        <button type="submit" className="w-full py-3 rounded-lg bg-primary-600 text-white font-medium transition-colors" disabled={status === 'loading'}>
          {status === 'loading' ? t('surveys.aiAgents.submit') + '...' : t('surveys.aiAgents.submit')}
        </button>
        {status === 'success' && <div className="text-green-400 mt-2">{t('surveys.aiAgents.feedback.success')}</div>}
        {status === 'error' && <div className="text-red-400 mt-2">{t('surveys.aiAgents.feedback.error')}</div>}
        {status === 'consent' && <div className="text-yellow-400 mt-2">{t('surveys.aiAgents.feedback.consent')}</div>}
      </form>
    </div>
  );
} 