import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Users, Calendar, Monitor, Briefcase, Handshake } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ReactModal from 'react-modal';

export default function Connects() {
  const { t, i18n } = useTranslation();
  const defaultProjectType = t('connects.contact.form.projectType.options.webDev');
  const [activeTab, setActiveTab] = useState('opportunities');
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: defaultProjectType,
    projectDetails: '',
    privacy: false,
  });
  const [budgetForm, setBudgetForm] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: defaultProjectType,
    budgetType: '',
    budgetAmount: '',
    timeline: '',
    projectDetails: '',
    privacy: false,
  });
  const [collabForm, setCollabForm] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    projectType: defaultProjectType,
    projectDetails: '',
    privacy: false,
  });
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [budgetStatus, setBudgetStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [collabStatus, setCollabStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [contactMsg, setContactMsg] = useState('');
  const [budgetMsg, setBudgetMsg] = useState('');
  const [collabMsg, setCollabMsg] = useState('');
  const [scrollToBudget, setScrollToBudget] = useState(false);
  
  const budgetFormRef = useRef<HTMLFormElement>(null);
  const collabFormRef = useRef<HTMLFormElement>(null);

  const [meetingModalOpen, setMeetingModalOpen] = useState(false);
  const [meetingForm, setMeetingForm] = useState({
    fullName: '',
    email: '',
    date: '',
    time: '',
    message: '',
    privacy: false,
  });
  const [meetingStatus, setMeetingStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [meetingMsg, setMeetingMsg] = useState('');

  // Mapeo para traducir los valores de budgetType entre idiomas
  const budgetTypeMap: Record<string, string> = {
    'Por Proyecto': 'project',
    'Hourly': 'hourly',
    'Monthly Retainer': 'retainer',
    'Por Hora': 'hourly',
    'Retenedor Mensual': 'retainer',
    'Project-Based': 'project',
  };

  const handleRequestBudget = () => {
    setActiveTab('connect');
    setScrollToBudget(true);
  };

  const handleRequestCollab = () => {
    setActiveTab('connect');
    setTimeout(() => {
      collabFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setBudgetForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleCollabChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setCollabForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('loading');
    setContactMsg('');
    const language = i18n.language;
    const { fullName, email, company, projectType, projectDetails } = contactForm;
    const message = `
      <h2>${language === 'en' ? 'Contact Request' : 'Solicitud de Contacto'}</h2>
      <table class="info-table">
        <tr><th>${language === 'en' ? 'Name' : 'Nombre'}</th><td>${fullName}</td></tr>
        <tr><th>Email</th><td>${email}</td></tr>
        <tr><th>${language === 'en' ? 'Company' : 'Empresa'}</th><td>${company}</td></tr>
        <tr><th>${language === 'en' ? 'Project Type' : 'Tipo de Proyecto'}</th><td>${projectType}</td></tr>
        <tr><th>${language === 'en' ? 'Details' : 'Detalles'}</th><td>${projectDetails}</td></tr>
        <tr><th>Idioma</th><td>${language}</td></tr>
      </table>
      <p>${language === 'en' ? 'New contact request from your portfolio.' : 'Nueva solicitud de contacto desde tu portafolio.'}</p>
    `;
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        language === 'es'
          ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ES
          : import.meta.env.VITE_EMAILJS_TEMPLATE_ID_EN,
        { message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setContactStatus('success');
      setContactForm({ fullName: '', email: '', company: '', projectType: '', projectDetails: '', privacy: false });
      setContactMsg(language === 'en' ? 'Message sent successfully!' : '¡Mensaje enviado exitosamente!');
    } catch (err) {
      setContactStatus('error');
      setContactMsg(language === 'en' ? 'Error sending message.' : 'Error al enviar el mensaje.');
    }
  };

  const handleBudgetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBudgetStatus('loading');
    setBudgetMsg('');
    const language = i18n.language;
    const { fullName, email, company, projectType, budgetType, budgetAmount, timeline, projectDetails } = budgetForm;
    const message = `
      <h2>${t('connects.budget.title')}</h2>
      <table class="info-table">
        <tr><th>${t('connects.contact.form.fullName')}</th><td>${fullName}</td></tr>
        <tr><th>${t('connects.contact.form.emailAddress')}</th><td>${email}</td></tr>
        <tr><th>${t('connects.contact.form.companyOrg')}</th><td>${company}</td></tr>
        <tr><th>${t('connects.contact.form.projectType.label')}</th><td>${projectType}</td></tr>
        <tr><th>${t('connects.budget.form.budgetType')}</th><td>${budgetType}</td></tr>
        <tr><th>${t('connects.budget.form.budgetAmount')}</th><td>${budgetAmount}</td></tr>
        <tr><th>${t('connects.budget.form.timeline')}</th><td>${timeline}</td></tr>
        <tr><th>${t('connects.contact.form.projectDetails.label')}</th><td>${projectDetails}</td></tr>
        <tr><th>${t('accessibility.language')}</th><td>${language}</td></tr>
      </table>
      <p>${language === 'en' ? 'New quote request from your portfolio.' : 'Nueva solicitud de presupuesto desde tu portafolio.'}</p>
    `;
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        language === 'es'
          ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ES
          : import.meta.env.VITE_EMAILJS_TEMPLATE_ID_EN,
        { message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setBudgetStatus('success');
      setBudgetForm({ fullName: '', email: '', company: '', projectType: '', budgetType: '', budgetAmount: '', timeline: '', projectDetails: '', privacy: false });
      setBudgetMsg(language === 'en' ? 'Quote request sent successfully!' : '¡Solicitud de presupuesto enviada exitosamente!');
    } catch (err) {
      setBudgetStatus('error');
      setBudgetMsg(language === 'en' ? 'Error sending budget request.' : 'Error al enviar la solicitud de presupuesto.');
    }
  };

  const handleCollabSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCollabStatus('loading');
    setCollabMsg('');
    const language = i18n.language;
    const { fullName, email, company, role, projectType, projectDetails } = collabForm;
    const message = `
      <h2>${language === 'en' ? 'Collaboration Request' : 'Solicitud de Colaboración'}</h2>
      <table class="info-table">
        <tr><th>${language === 'en' ? 'Name' : 'Nombre'}</th><td>${fullName}</td></tr>
        <tr><th>Email</th><td>${email}</td></tr>
        <tr><th>${language === 'en' ? 'Company' : 'Empresa'}</th><td>${company}</td></tr>
        <tr><th>${language === 'en' ? 'Role' : 'Rol'}</th><td>${role}</td></tr>
        <tr><th>${language === 'en' ? 'Project Type' : 'Tipo de Proyecto'}</th><td>${projectType}</td></tr>
        <tr><th>${language === 'en' ? 'Details' : 'Detalles'}</th><td>${projectDetails}</td></tr>
        <tr><th>${language === 'en' ? 'Language' : 'Idioma'}</th><td>${language}</td></tr>
      </table>
      <p>${language === 'en' ? 'New collaboration request from your portfolio.' : 'Nueva solicitud de colaboración desde tu portafolio.'}</p>
    `;
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        language === 'es'
          ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ES
          : import.meta.env.VITE_EMAILJS_TEMPLATE_ID_EN,
        { message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setCollabStatus('success');
      setCollabForm({ fullName: '', email: '', company: '', role: '', projectType: '', projectDetails: '', privacy: false });
      setCollabMsg(language === 'en' ? 'Collaboration request sent successfully!' : '¡Solicitud de colaboración enviada exitosamente!');
    } catch (err) {
      setCollabStatus('error');
      setCollabMsg(language === 'en' ? 'Error sending collaboration request.' : 'Error al enviar la solicitud de colaboración.');
    }
  };

  const handleMeetingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setMeetingForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleMeetingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMeetingStatus('loading');
    setMeetingMsg('');
    const language = i18n.language;
    const { fullName, email, date, time, message } = meetingForm;
    const mailMsg = `
      <h2>${t('meeting.title')}</h2>
      <table class="info-table">
        <tr><th>${t('connects.contact.form.fullName')}</th><td>${fullName}</td></tr>
        <tr><th>${t('connects.contact.form.emailAddress')}</th><td>${email}</td></tr>
        <tr><th>${t('meeting.form.date')}</th><td>${date}</td></tr>
        <tr><th>${t('meeting.form.time')}</th><td>${time}</td></tr>
        <tr><th>${t('meeting.form.message')}</th><td>${message}</td></tr>
        <tr><th>${t('accessibility.language')}</th><td>${language}</td></tr>
      </table>
      <p>${language === 'en' ? 'New meeting request from your portfolio.' : 'Nueva solicitud de reunión desde tu portafolio.'}</p>
    `;
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        language === 'es'
          ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ES
          : import.meta.env.VITE_EMAILJS_TEMPLATE_ID_EN,
        { message: mailMsg },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setMeetingStatus('success');
      setMeetingForm({ fullName: '', email: '', date: '', time: '', message: '', privacy: false });
      setMeetingMsg(t('meeting.success'));
    } catch (err) {
      setMeetingStatus('error');
      setMeetingMsg(t('meeting.error'));
    }
  };

  useEffect(() => {
    if (activeTab === 'connect' && scrollToBudget) {
      setTimeout(() => {
        budgetFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setScrollToBudget(false);
      }, 100);
    }
  }, [activeTab, scrollToBudget]);

  useEffect(() => {
    // Actualiza los valores de los selects al cambiar el idioma
    const translatedProjectType = t('connects.contact.form.projectType.options.webDev');
    setBudgetForm(prev => {
      let translatedBudgetType = '';
      if (prev.budgetType) {
        const key = budgetTypeMap[prev.budgetType] || 'project';
        translatedBudgetType = t(`connects.budget.form.budgetTypeOptions.${key}`);
      }
      return {
        ...prev,
        projectType: translatedProjectType,
        budgetType: translatedBudgetType,
      };
    });
    setCollabForm(prev => ({
      ...prev,
      projectType: translatedProjectType,
    }));
  }, [i18n.language]);

  return (
    <div>
      <h1 className="text-3xl font-medium mb-8">{t('connects.title')}</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="bg-dark-800 rounded-card p-6 sticky top-6">
            <h2 className="text-xl font-medium mb-4">{t('connects.connectionHub.title')}</h2>
            <p className="text-gray-300 mb-6">{t('connects.connectionHub.description')}</p>
            
            <div className="space-y-4">
              <button 
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors"
                onClick={handleRequestCollab}
              >
                <Handshake size={20} />
                <span>{t('connects.connectionHub.buttons.proposeCollab')}</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-dark-700 hover:bg-dark-600 text-white transition-colors" onClick={() => setMeetingModalOpen(true)}>
                <Calendar size={20} />
                <span>{t('connects.connectionHub.buttons.scheduleMeeting')}</span>
              </button>
              <button
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-700 hover:bg-primary-800 text-white transition-colors"
                onClick={handleRequestBudget}
              >
                <Briefcase size={20} />
                <span>{t('connects.opportunities.labels.requestBudget')}</span>
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-dark-600">
              <h3 className="font-medium mb-3">{t('connects.availableFor.title')}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success-500"></span>
                  <span>{t('connects.availableFor.items.freelance')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success-500"></span>
                  <span>{t('connects.availableFor.items.consulting')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success-500"></span>
                  <span>{t('connects.availableFor.items.speaking')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-warning-500"></span>
                  <span>{t('connects.availableFor.items.fulltime')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <div className="bg-dark-800 rounded-card overflow-hidden">
            <div className="flex border-b border-dark-600">
              <button 
                className={`flex-1 py-4 text-center font-medium ${activeTab === 'opportunities' ? 'text-primary-400 border-b-2 border-primary-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('opportunities')}
              >
                {t('connects.tabs.opportunities')}
              </button>
              <button 
                className={`flex-1 py-4 text-center font-medium ${activeTab === 'clients' ? 'text-primary-400 border-b-2 border-primary-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('clients')}
              >
                {t('connects.tabs.clients')}
              </button>
              <button 
                className={`flex-1 py-4 text-center font-medium ${activeTab === 'connect' ? 'text-primary-400 border-b-2 border-primary-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('connect')}
              >
                {t('connects.tabs.connect')}
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'opportunities' && (
                <div>
                  <h2 className="text-xl font-medium mb-4">{t('connects.opportunities.title')}</h2>
                  <p className="text-gray-300 mb-6">{t('connects.opportunities.description')}</p>
                  <div className="space-y-6">
                    {/* Automatización de Procesos y Agentes de IA (destacado) */}
                    <div className="p-4 bg-dark-700 rounded-lg border-2 border-primary-600">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{t('connects.opportunities.projects.automationAI.title')}</h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-accent-900/30 text-accent-400">{t('connects.opportunities.labels.new')}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{t('connects.opportunities.projects.automationAI.description')}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{t('connects.opportunities.labels.budget')}</span>
                        <button
                          onClick={handleRequestBudget}
                          className="px-3 py-1.5 text-sm rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors"
                        >
                          {t('connects.opportunities.labels.requestBudget')}
                        </button>
                      </div>
                    </div>
                    {/* Rediseño Web Corporativo */}
                    <div className="p-4 bg-dark-700 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{t('connects.opportunities.projects.websiteRedesign.title')}</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{t('connects.opportunities.projects.websiteRedesign.description')}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{t('connects.opportunities.labels.budget')}</span>
                        <button
                          onClick={handleRequestBudget}
                          className="px-3 py-1.5 text-sm rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors"
                        >
                          {t('connects.opportunities.labels.requestBudget')}
                        </button>
                      </div>
                    </div>
                    {/* Integración de IA para E-commerce */}
                    <div className="p-4 bg-dark-700 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{t('connects.opportunities.projects.aiIntegration.title')}</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{t('connects.opportunities.projects.aiIntegration.description')}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{t('connects.opportunities.labels.budget')}</span>
                        <button
                          onClick={handleRequestBudget}
                          className="px-3 py-1.5 text-sm rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors"
                        >
                          {t('connects.opportunities.labels.requestBudget')}
                        </button>
                      </div>
                    </div>
                    {/* Desarrollo de App Móvil */}
                    <div className="p-4 bg-dark-700 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{t('connects.opportunities.projects.mobileApp.title')}</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{t('connects.opportunities.projects.mobileApp.description')}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{t('connects.opportunities.labels.budget')}</span>
                        <button
                          onClick={handleRequestBudget}
                          className="px-3 py-1.5 text-sm rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors"
                        >
                          {t('connects.opportunities.labels.requestBudget')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'clients' && (
                <div>
                  <h2 className="text-xl font-medium mb-4">{t('connects.clients.title')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Vya Projects */}
                    <div className="p-4 bg-dark-700 rounded-lg flex items-center gap-4">
                      <img src="/images/clients/vya.png" alt="Vya Projects Logo" className="w-12 h-12 rounded bg-white object-contain" />
                      <div>
                        <h3 className="font-medium">{t('connects.clients.companies.vya.name')}</h3>
                        <p className="text-sm text-gray-400">{t('connects.clients.companies.vya.description')}</p>
                      </div>
                    </div>
                    {/* EducaPro */}
                    <div className="p-4 bg-dark-700 rounded-lg flex items-center gap-4">
                      <img src="/images/clients/educapro.svg" alt="EducaPro Logo" className="w-12 h-12 rounded bg-white object-contain" />
                      <div>
                        <h3 className="font-medium">{t('connects.clients.companies.educapro.name')}</h3>
                        <p className="text-sm text-gray-400">{t('connects.clients.companies.educapro.description')}</p>
                      </div>
                    </div>
                    {/* Finanzas Ágiles */}
                    <div className="p-4 bg-dark-700 rounded-lg flex items-center gap-4">
                      <img src="/images/clients/finagil.svg" alt="Finanzas Ágiles Logo" className="w-12 h-12 rounded bg-white object-contain" />
                      <div>
                        <h3 className="font-medium">{t('connects.clients.companies.finagil.name')}</h3>
                        <p className="text-sm text-gray-400">{t('connects.clients.companies.finagil.description')}</p>
                      </div>
                    </div>
                    {/* Innovatek Solutions */}
                    <div className="p-4 bg-dark-700 rounded-lg flex items-center gap-4">
                      <img src="/images/clients/innovatek.svg" alt="Innovatek Logo" className="w-12 h-12 rounded bg-white object-contain" />
                      <div>
                        <h3 className="font-medium">{t('connects.clients.companies.innovatek.name')}</h3>
                        <p className="text-sm text-gray-400">{t('connects.clients.companies.innovatek.description')}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-medium mb-4">{t('connects.clients.testimonials.title')}</h3>
                    <div className="p-4 bg-dark-700 rounded-lg mb-4 flex items-center gap-3">
                      <img src={t('connects.clients.testimonials.sarah.photo')} alt="Sarah Johnson" className="w-10 h-10 rounded-full object-cover bg-gray-600" />
                      <div>
                        <h4 className="font-medium">{t('connects.clients.testimonials.sarah.name')}</h4>
                        <p className="text-xs text-gray-400 mb-1">{t('connects.clients.testimonials.sarah.role')}</p>
                        <p className="text-sm text-gray-300 italic">“{t('connects.clients.testimonials.sarah.testimonial')}”</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'connect' && (
                <div>
                  <div className="mt-12 pt-8 border-t border-dark-600">
                    <h2 className="text-xl font-medium mb-4">{t('connects.budget.title')}</h2>
                    <p className="text-gray-300 mb-6">{t('connects.budget.description')}</p>
                    <form id="budget-form" ref={budgetFormRef} className="space-y-6" onSubmit={handleBudgetSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">{t('connects.contact.form.fullName')}</label>
                          <input type="text" name="fullName" value={budgetForm.fullName} onChange={handleBudgetChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white" placeholder={t('connects.contact.form.fullName')} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">{t('connects.contact.form.emailAddress')}</label>
                          <input type="email" name="email" value={budgetForm.email} onChange={handleBudgetChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white" placeholder={t('connects.contact.form.emailAddress')} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('connects.contact.form.companyOrg')}</label>
                        <input type="text" name="company" value={budgetForm.company} onChange={handleBudgetChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white" placeholder={t('connects.contact.form.companyOrg')} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('connects.contact.form.projectType.label')}</label>
                        <select name="projectType" value={budgetForm.projectType} onChange={handleBudgetChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white">
                          <option value={t('connects.contact.form.projectType.options.webDev')}>{t('connects.contact.form.projectType.options.webDev')}</option>
                          <option value={t('connects.contact.form.projectType.options.mobileDev')}>{t('connects.contact.form.projectType.options.mobileDev')}</option>
                          <option value={t('connects.contact.form.projectType.options.uiDesign')}>{t('connects.contact.form.projectType.options.uiDesign')}</option>
                          <option value={t('connects.contact.form.projectType.options.consulting')}>{t('connects.contact.form.projectType.options.consulting')}</option>
                          <option value={t('connects.contact.form.projectType.options.other')}>{t('connects.contact.form.projectType.options.other')}</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">{t('connects.budget.form.budgetType')}</label>
                          <select name="budgetType" value={budgetForm.budgetType} onChange={handleBudgetChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white">
                            <option value={t('connects.budget.form.budgetTypeOptions.project')}>{t('connects.budget.form.budgetTypeOptions.project')}</option>
                            <option value={t('connects.budget.form.budgetTypeOptions.hourly')}>{t('connects.budget.form.budgetTypeOptions.hourly')}</option>
                            <option value={t('connects.budget.form.budgetTypeOptions.retainer')}>{t('connects.budget.form.budgetTypeOptions.retainer')}</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">{t('connects.budget.form.budgetAmount')}</label>
                          <input type="text" name="budgetAmount" value={budgetForm.budgetAmount} onChange={handleBudgetChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white" placeholder={t('connects.budget.form.budgetAmountPlaceholder')} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('connects.budget.form.timeline')}</label>
                        <input type="text" name="timeline" value={budgetForm.timeline} onChange={handleBudgetChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white" placeholder={t('connects.budget.form.timeline')} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('connects.contact.form.projectDetails.label')}</label>
                        <textarea name="projectDetails" value={budgetForm.projectDetails} onChange={handleBudgetChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white h-24" placeholder={t('connects.contact.form.projectDetails.placeholder')}></textarea>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" name="privacy" checked={budgetForm.privacy} onChange={handleBudgetChange} id="budget-privacy" className="rounded" />
                        <label htmlFor="budget-privacy" className="ml-2 text-sm text-gray-300">{t('connects.contact.form.privacyPolicy')}</label>
                      </div>
                      <button type="submit" className="w-full py-3 rounded-lg bg-primary-600" disabled={budgetStatus === 'loading'}>
                        {budgetStatus === 'loading' ? t('connects.budget.form.submitButton') + '...' : t('connects.budget.form.submitButton')}
                      </button>
                      {budgetMsg && <p className={`mt-2 ${budgetStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>{budgetMsg}</p>}
                    </form>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-dark-600">
                    <h2 className="text-xl font-medium mb-4">{t('connects.collab.title')}</h2>
                    <p className="text-gray-300 mb-6">{t('connects.collab.description')}</p>
                    <form id="collab-form" ref={collabFormRef} className="space-y-6" onSubmit={handleCollabSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">{t('connects.contact.form.fullName')}</label>
                          <input type="text" name="fullName" value={collabForm.fullName} onChange={handleCollabChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" placeholder={t('connects.contact.form.fullName')} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">{t('connects.contact.form.emailAddress')}</label>
                          <input type="email" name="email" value={collabForm.email} onChange={handleCollabChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" placeholder={t('connects.contact.form.emailAddress')} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('connects.contact.form.companyOrg')}</label>
                        <input type="text" name="company" value={collabForm.company} onChange={handleCollabChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" placeholder={t('connects.contact.form.companyOrg')} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('connects.contact.form.projectType.label')}</label>
                        <select name="projectType" value={collabForm.projectType} onChange={handleCollabChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
                          <option value={t('connects.contact.form.projectType.options.webDev')}>{t('connects.contact.form.projectType.options.webDev')}</option>
                          <option value={t('connects.contact.form.projectType.options.mobileDev')}>{t('connects.contact.form.projectType.options.mobileDev')}</option>
                          <option value={t('connects.contact.form.projectType.options.uiDesign')}>{t('connects.contact.form.projectType.options.uiDesign')}</option>
                          <option value={t('connects.contact.form.projectType.options.consulting')}>{t('connects.contact.form.projectType.options.consulting')}</option>
                          <option value={t('connects.contact.form.projectType.options.other')}>{t('connects.contact.form.projectType.options.other')}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('connects.collab.form.role')}</label>
                        <input type="text" name="role" value={collabForm.role} onChange={handleCollabChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500" placeholder={t('connects.collab.form.role')} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('connects.contact.form.projectDetails.label')}</label>
                        <textarea name="projectDetails" value={collabForm.projectDetails} onChange={handleCollabChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500 h-32" placeholder={t('connects.collab.form.ideaPlaceholder')}></textarea>
                      </div>
                      <button type="submit" className="w-full py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors" disabled={collabStatus === 'loading'}>
                        {collabStatus === 'loading' ? t('connects.collab.form.submitButton') + '...' : t('connects.collab.form.submitButton')}
                      </button>
                      {collabMsg && <p className={`mt-2 ${collabStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>{collabMsg}</p>}
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ReactModal
        isOpen={meetingModalOpen}
        onRequestClose={() => setMeetingModalOpen(false)}
        className="bg-dark-800 rounded-card p-8 max-w-lg mx-auto mt-24 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
        ariaHideApp={false}
      >
        <h2 className="text-2xl font-medium mb-4">{t('meeting.title')}</h2>
        <form onSubmit={handleMeetingSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">{t('connects.contact.form.fullName')}</label>
            <input type="text" name="fullName" value={meetingForm.fullName} onChange={handleMeetingChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white" placeholder={t('connects.contact.form.fullName')} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t('connects.contact.form.emailAddress')}</label>
            <input type="email" name="email" value={meetingForm.email} onChange={handleMeetingChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white" placeholder={t('connects.contact.form.emailAddress')} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t('meeting.form.date')}</label>
            <input type="date" name="date" value={meetingForm.date} onChange={handleMeetingChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t('meeting.form.time')}</label>
            <input type="time" name="time" value={meetingForm.time} onChange={handleMeetingChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t('meeting.form.message')}</label>
            <textarea name="message" value={meetingForm.message} onChange={handleMeetingChange} className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white h-20" placeholder={t('meeting.form.messagePlaceholder')}></textarea>
          </div>
          <div className="flex items-center">
            <input type="checkbox" name="privacy" checked={meetingForm.privacy} onChange={handleMeetingChange} id="meeting-privacy" className="rounded" required />
            <label htmlFor="meeting-privacy" className="ml-2 text-sm text-gray-300">{t('connects.contact.form.privacyPolicy')}</label>
          </div>
          <button type="submit" className="w-full py-3 rounded-lg bg-primary-600" disabled={meetingStatus === 'loading'}>
            {meetingStatus === 'loading' ? t('meeting.form.submitButton') + '...' : t('meeting.form.submitButton')}
          </button>
          {meetingMsg && <p className={`mt-2 ${meetingStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>{meetingMsg}</p>}
        </form>
        <button className="mt-4 text-sm text-gray-400 hover:text-white" onClick={() => setMeetingModalOpen(false)}>{t('meeting.form.close')}</button>
      </ReactModal>
    </div>
  );
}