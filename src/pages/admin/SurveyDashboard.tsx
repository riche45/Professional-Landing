import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../lib/supabase';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface SurveyData {
  id: number;
  created_at: string;
  language: string;
  years_of_experience: string;
  industry: string;
  job_role: string;
  programming_languages: string[];
  frontend_frameworks: string[];
  ai_experience: number;
  topics: string[];
  discovery: string;
  startup_founder: string;
}

export default function SurveyDashboard() {
  const { t } = useTranslation();
  const [surveys, setSurveys] = useState<SurveyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('admin_logged') !== 'true') {
      navigate('/admin/login');
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchSurveys();
  }, []);

  const fetchSurveys = async () => {
    try {
      const { data, error } = await supabase
        .from('surveys')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSurveys(data || []);
    } catch (err) {
      console.error('Error fetching surveys:', err);
      setError('Error al cargar las encuestas');
    } finally {
      setLoading(false);
    }
  };

  const getExperienceData = () => {
    const experienceCount = surveys.reduce((acc, survey) => {
      acc[survey.years_of_experience] = (acc[survey.years_of_experience] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      labels: Object.keys(experienceCount),
      datasets: [{
        label: 'Años de Experiencia',
        data: Object.values(experienceCount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }]
    };
  };

  const getIndustryData = () => {
    const industryCount = surveys.reduce((acc, survey) => {
      acc[survey.industry] = (acc[survey.industry] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      labels: Object.keys(industryCount),
      datasets: [{
        data: Object.values(industryCount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      }]
    };
  };

  const getLanguagesData = () => {
    const languageCount = surveys.reduce((acc, survey) => {
      survey.programming_languages.forEach(lang => {
        acc[lang] = (acc[lang] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);

    return {
      labels: Object.keys(languageCount),
      datasets: [{
        label: 'Lenguajes de Programación',
        data: Object.values(languageCount),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      }]
    };
  };

  if (loading) return <div className="p-8">Cargando...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-medium mb-8">Dashboard de Encuestas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-dark-800 p-6 rounded-lg">
          <h2 className="text-xl font-medium mb-4">Años de Experiencia</h2>
          <Bar data={getExperienceData()} />
        </div>
        
        <div className="bg-dark-800 p-6 rounded-lg">
          <h2 className="text-xl font-medium mb-4">Industrias</h2>
          <Pie data={getIndustryData()} />
        </div>
        
        <div className="bg-dark-800 p-6 rounded-lg">
          <h2 className="text-xl font-medium mb-4">Lenguajes de Programación</h2>
          <Bar data={getLanguagesData()} />
        </div>
      </div>

      <div className="bg-dark-800 p-6 rounded-lg">
        <h2 className="text-xl font-medium mb-4">Últimas Encuestas</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="p-2">Fecha</th>
                <th className="p-2">Idioma</th>
                <th className="p-2">Experiencia</th>
                <th className="p-2">Industria</th>
                <th className="p-2">Rol</th>
              </tr>
            </thead>
            <tbody>
              {surveys.slice(0, 10).map((survey) => (
                <tr key={survey.id} className="border-t border-dark-700">
                  <td className="p-2">{new Date(survey.created_at).toLocaleDateString()}</td>
                  <td className="p-2">{survey.language}</td>
                  <td className="p-2">{survey.years_of_experience}</td>
                  <td className="p-2">{survey.industry}</td>
                  <td className="p-2">{survey.job_role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 