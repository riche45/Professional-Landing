import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Mail, Building, FileText, Send, CheckCircle } from 'lucide-react';
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
        <h1 className="text-3xl font-medium mb-4">Currículum Vitae</h1>
        <p className="text-gray-400">
          Solicita acceso a mi CV completo con experiencia detallada, proyectos y referencias profesionales.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* CV Preview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-800 rounded-card p-6"
        >
          <h2 className="text-xl font-medium mb-6 flex items-center gap-2">
            <FileText size={20} className="text-primary-400" />
            Vista Previa del CV
          </h2>
          
          {/* CV Preview Content */}
          <div className="bg-white rounded-lg p-6 text-dark-900 mb-6">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="text-2xl font-bold text-dark-900">Richard García Vizcaíno</h3>
              <p className="text-lg text-gray-600">Software Engineer & Designer</p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                <span>📧 richard@example.com</span>
                <span>📱 +1 (555) 123-4567</span>
                <span>🌐 richardgarcia.dev</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-dark-900 mb-2">Experiencia Profesional</h4>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-dark-800">Senior Software Developer</p>
                    <p className="text-sm text-gray-600">TechCorp Inc. • 2022 - Presente</p>
                    <p className="text-sm text-gray-500">Desarrollo de aplicaciones web y móviles...</p>
                  </div>
                  <div>
                    <p className="font-medium text-dark-800">Full Stack Developer</p>
                    <p className="text-sm text-gray-600">StartupXYZ • 2020 - 2022</p>
                    <p className="text-sm text-gray-500">Implementación de soluciones escalables...</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-dark-900 mb-2">Habilidades Técnicas</h4>
                <div className="flex flex-wrap gap-1">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map(skill => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-dark-900 mb-2">Educación</h4>
                <p className="text-sm text-gray-600">Ingeniería en Sistemas • Universidad XYZ</p>
              </div>
            </div>
            
            <div className="mt-4 text-center text-xs text-gray-400">
              Esta es una vista previa. El CV completo contiene más detalles.
            </div>
          </div>
          
          <div className="bg-dark-700 rounded-lg p-4">
            <h4 className="font-medium mb-2">¿Qué incluye el CV completo?</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Experiencia profesional detallada (5+ años)</li>
              <li>• Proyectos destacados con tecnologías utilizadas</li>
              <li>• Certificaciones y cursos especializados</li>
              <li>• Referencias profesionales verificadas</li>
              <li>• Portfolio de trabajos realizados</li>
            </ul>
          </div>
        </motion.div>

        {/* Request Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-800 rounded-card p-6"
        >
          <h2 className="text-xl font-medium mb-6 flex items-center gap-2">
            <Download size={20} className="text-accent-400" />
            Solicitar CV Completo
          </h2>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Correo Electrónico <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@empresa.com"
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Empresa/Organización</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Nombre de tu empresa"
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Motivo de la solicitud <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="Describe brevemente el motivo de tu solicitud (oportunidad laboral, colaboración, etc.)"
                  className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all h-24 resize-none"
                  required
                />
              </div>
              
              <div className="bg-dark-700 rounded-lg p-4">
                <h4 className="text-sm font-medium mb-2">Política de Privacidad</h4>
                <p className="text-xs text-gray-400">
                  Tu información será utilizada únicamente para enviar el CV solicitado. 
                  No compartimos datos personales con terceros.
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Solicitar CV
                  </>
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-success-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-medium text-success-400 mb-2">¡Solicitud Enviada!</h3>
              <p className="text-gray-400 mb-4">
                Hemos enviado mi CV completo a tu correo electrónico. 
                Por favor, revisa tu bandeja de entrada y spam.
              </p>
              <div className="bg-dark-700 rounded-lg p-4">
                <p className="text-sm text-gray-400">
                  Si no recibes el correo en los próximos minutos, 
                  contáctame directamente a richard@example.com
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-primary-400 hover:text-primary-300 text-sm transition-colors"
              >
                Hacer otra solicitud
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}