import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { surveyService } from '../services/surveyService';
import { useNavigate } from 'react-router-dom';
import AIAgentsSurvey from './AIAgentsSurvey';
import ProfessionalExperienceForm from '../components/ProfessionalExperienceForm';

export default function Surveys() {
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
  const navigate = useNavigate();

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

  const handleSubmit = async () => {
    const validation = validate();
    if (validation) {
      setSubmitStatus(validation as any);
      return;
    }
    setSubmitStatus('loading');
    const {
      years_of_experience,
      industry,
      job_role,
      programming_languages,
      frontend_frameworks,
      ai_experience,
      topics,
      discovery,
      startup_founder
    } = formData;
    const result = await surveyService.addSurveyResponse({
      years_of_experience,
      industry,
      job_role,
      programming_languages,
      frontend_frameworks,
      ai_experience,
      topics,
      discovery,
      startup_founder,
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
    } else {
      setSubmitStatus('error');
      console.error('Error al enviar encuesta:', result.error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-medium mb-8">{t('surveys.aiAgents.title')}</h1>
      <div className="bg-dark-800 rounded-card p-8 mb-8">
        <AIAgentsSurvey />
      </div>
      {/* Sección internacionalizada de otras encuestas */}
      <div className="bg-dark-800 rounded-card p-6">
        <h2 className="text-xl font-medium mb-4">{t('surveys.otherSurveys.title')}</h2>
        <div className="space-y-4">
          {(t('surveys.otherSurveys.surveys', { returnObjects: true }) as Array<any>).map((survey, idx) => {
            // Solo mostrar encuestas con lógica implementada
            if (
              survey.title.includes('Barreras de Fluidez') ||
              survey.title.includes('Experiencia Profesional') ||
              survey.title.includes('English Barrier') ||
              survey.title.includes('Professional Experience')
            ) {
              return (
                <button
                  key={idx}
                  className="w-full text-left p-4 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors"
                  onClick={() => {
                    if (survey.title.includes('Barreras de Fluidez') || survey.title.includes('English Barrier')) {
                      navigate('/english-barrier-survey');
                    } else if (survey.title.includes('Experiencia Profesional') || survey.title.includes('Professional Experience')) {
                      navigate('/surveys/professional-experience');
                    }
                  }}
                >
                  <h3 className="font-medium">{survey.title}</h3>
                  <p className="text-sm text-gray-400">{survey.description}</p>
                </button>
              );
            }
            // Comentar visualmente las encuestas sin lógica
            return null;
          })}
        </div>
      </div>
    </div>
  );
}