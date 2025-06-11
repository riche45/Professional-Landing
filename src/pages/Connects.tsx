import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Users, Calendar, Monitor } from 'lucide-react';

export default function Connects() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('opportunities');
  
  return (
    <div>
      <h1 className="text-3xl font-medium mb-8">{t('connects.title')}</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="bg-dark-800 rounded-card p-6 sticky top-6">
            <h2 className="text-xl font-medium mb-4">{t('connects.connectionHub.title')}</h2>
            <p className="text-gray-300 mb-6">{t('connects.connectionHub.description')}</p>
            
            <div className="space-y-4">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                <Globe size={20} />
                <span>{t('connects.connectionHub.buttons.connectGlobally')}</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-dark-700 hover:bg-dark-600 text-white transition-colors">
                <Calendar size={20} />
                <span>{t('connects.connectionHub.buttons.scheduleMeeting')}</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-dark-700 hover:bg-dark-600 text-white transition-colors">
                <Users size={20} />
                <span>{t('connects.connectionHub.buttons.joinCommunity')}</span>
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
                  <div className="space-y-6">
                    <div className="p-4 bg-dark-700 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{t('connects.opportunities.projects.websiteRedesign.title')}</h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-accent-900/30 text-accent-400">{t('connects.opportunities.labels.new')}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{t('connects.opportunities.projects.websiteRedesign.description')}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {['React', 'UI/UX', 'Responsive'].map((skill: string) => (
                          <span key={skill} className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">{skill}</span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{t('connects.opportunities.labels.budget')} $3,000 - $5,000</span>
                        <button className="px-3 py-1.5 text-sm rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                          {t('connects.opportunities.labels.applyNow')}
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-dark-700 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{t('connects.opportunities.projects.aiIntegration.title')}</h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary-900/30 text-primary-400">{t('connects.opportunities.labels.featured')}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{t('connects.opportunities.projects.aiIntegration.description')}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {['Python', 'AI/ML', 'API'].map((skill: string) => (
                          <span key={skill} className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">{skill}</span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{t('connects.opportunities.labels.budget')} $7,000 - $10,000</span>
                        <button className="px-3 py-1.5 text-sm rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                          {t('connects.opportunities.labels.applyNow')}
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-dark-700 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{t('connects.opportunities.projects.mobileApp.title')}</h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">{t('connects.opportunities.labels.timeAgo')}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{t('connects.opportunities.projects.mobileApp.description')}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {['React Native', 'Mobile', 'Firebase'].map((skill: string) => (
                          <span key={skill} className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">{skill}</span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{t('connects.opportunities.labels.budget')} $8,000 - $12,000</span>
                        <button className="px-3 py-1.5 text-sm rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                          {t('connects.opportunities.labels.applyNow')}
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
                    <div className="p-4 bg-dark-700 rounded-lg flex items-center gap-4">
                      <div className="w-12 h-12 bg-dark-600 rounded-full flex items-center justify-center">
                        <Monitor size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium">{t('connects.clients.companies.techCorp.name')}</h3>
                        <p className="text-sm text-gray-400">{t('connects.clients.companies.techCorp.description')}</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-dark-700 rounded-lg flex items-center gap-4">
                      <div className="w-12 h-12 bg-dark-600 rounded-full flex items-center justify-center">
                        <Monitor size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium">{t('connects.clients.companies.healthTrack.name')}</h3>
                        <p className="text-sm text-gray-400">{t('connects.clients.companies.healthTrack.description')}</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-dark-700 rounded-lg flex items-center gap-4">
                      <div className="w-12 h-12 bg-dark-600 rounded-full flex items-center justify-center">
                        <Monitor size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium">{t('connects.clients.companies.eduLearn.name')}</h3>
                        <p className="text-sm text-gray-400">{t('connects.clients.companies.eduLearn.description')}</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-dark-700 rounded-lg flex items-center gap-4">
                      <div className="w-12 h-12 bg-dark-600 rounded-full flex items-center justify-center">
                        <Monitor size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium">{t('connects.clients.companies.finTrack.name')}</h3>
                        <p className="text-sm text-gray-400">{t('connects.clients.companies.finTrack.description')}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-medium mb-4">{t('connects.clients.testimonials.title')}</h3>
                    <div className="p-4 bg-dark-700 rounded-lg mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-dark-600 rounded-full"></div>
                        <div>
                          <h4 className="font-medium">{t('connects.clients.testimonials.sarah.name')}</h4>
                          <p className="text-xs text-gray-400">{t('connects.clients.testimonials.sarah.role')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'connect' && (
                <div>
                  <h2 className="text-xl font-medium mb-4">{t('connects.contact.title')}</h2>
                  <p className="text-gray-300 mb-6">{t('connects.contact.description')}</p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('connects.contact.form.fullName')}</label>
                        <input 
                          type="text" 
                          className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500"
                          placeholder="John Doe" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('connects.contact.form.emailAddress')}</label>
                        <input 
                          type="email" 
                          className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500"
                          placeholder="john@example.com" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('connects.contact.form.companyOrg')}</label>
                      <input 
                        type="text" 
                        className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Company Inc." 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('connects.contact.form.projectType.label')}</label>
                      <select className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
                        <option>{t('connects.contact.form.projectType.options.webDev')}</option>
                        <option>{t('connects.contact.form.projectType.options.mobileDev')}</option>
                        <option>{t('connects.contact.form.projectType.options.uiDesign')}</option>
                        <option>{t('connects.contact.form.projectType.options.consulting')}</option>
                        <option>{t('connects.contact.form.projectType.options.other')}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('connects.contact.form.projectDetails.label')}</label>
                      <textarea 
                        className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500 h-32"
                        placeholder={t('connects.contact.form.projectDetails.placeholder')}
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" 
                      />
                      <label htmlFor="privacy" className="ml-2 text-sm text-gray-300">
                        {t('connects.contact.form.privacyPolicy')}
                      </label>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
                    >
                      {t('connects.contact.form.submitButton')}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}