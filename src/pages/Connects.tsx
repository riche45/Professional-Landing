import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Users, Calendar, Monitor } from 'lucide-react';

export default function Connects() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('opportunities');
  
  return (
    <div>
      <h1 className="text-3xl font-medium mb-8">Connects</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="bg-dark-800 rounded-card p-6 sticky top-6">
            <h2 className="text-xl font-medium mb-4">Connection Hub</h2>
            <p className="text-gray-300 mb-6">Connect with me for freelance opportunities, collaborations, or just to chat about technology.</p>
            
            <div className="space-y-4">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                <Globe size={20} />
                <span>Connect Globally</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-dark-700 hover:bg-dark-600 text-white transition-colors">
                <Calendar size={20} />
                <span>Schedule a Meeting</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-dark-700 hover:bg-dark-600 text-white transition-colors">
                <Users size={20} />
                <span>Join Community</span>
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-dark-600">
              <h3 className="font-medium mb-3">Available For:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success-500"></span>
                  <span>Freelance Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success-500"></span>
                  <span>Technical Consulting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success-500"></span>
                  <span>Speaking Engagements</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-warning-500"></span>
                  <span>Full-time Opportunities</span>
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
                Opportunities
              </button>
              <button 
                className={`flex-1 py-4 text-center font-medium ${activeTab === 'clients' ? 'text-primary-400 border-b-2 border-primary-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('clients')}
              >
                Past Clients
              </button>
              <button 
                className={`flex-1 py-4 text-center font-medium ${activeTab === 'connect' ? 'text-primary-400 border-b-2 border-primary-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('connect')}
              >
                Connect
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'opportunities' && (
                <div>
                  <h2 className="text-xl font-medium mb-4">Current Opportunities</h2>
                  <div className="space-y-6">
                    <div className="p-4 bg-dark-700 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">Website Redesign Project</h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-accent-900/30 text-accent-400">New</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">Looking for an experienced front-end developer to redesign a corporate website with React and modern design principles.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">React</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">UI/UX</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">Responsive</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Budget: $3,000 - $5,000</span>
                        <button className="px-3 py-1.5 text-sm rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-dark-700 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">AI Integration for E-commerce</h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary-900/30 text-primary-400">Featured</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">Seeking an AI specialist to implement intelligent product recommendations and search functionality for an e-commerce platform.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">Python</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">AI/ML</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">API</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Budget: $7,000 - $10,000</span>
                        <button className="px-3 py-1.5 text-sm rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-dark-700 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">Mobile App Development</h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">1 week ago</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">Looking for a mobile developer to create a cross-platform fitness tracking application with React Native.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">React Native</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">Mobile</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-dark-600 text-gray-300">Firebase</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Budget: $8,000 - $12,000</span>
                        <button className="px-3 py-1.5 text-sm rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'clients' && (
                <div>
                  <h2 className="text-xl font-medium mb-4">Past Clients</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-dark-700 rounded-lg flex items-center gap-4">
                      <div className="w-12 h-12 bg-dark-600 rounded-full flex items-center justify-center">
                        <Monitor size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium">TechCorp Inc.</h3>
                        <p className="text-sm text-gray-400">Enterprise dashboard redesign</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-dark-700 rounded-lg flex items-center gap-4">
                      <div className="w-12 h-12 bg-dark-600 rounded-full flex items-center justify-center">
                        <Monitor size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium">HealthTrack</h3>
                        <p className="text-sm text-gray-400">Mobile health monitoring app</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-dark-700 rounded-lg flex items-center gap-4">
                      <div className="w-12 h-12 bg-dark-600 rounded-full flex items-center justify-center">
                        <Monitor size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium">EduLearn Platform</h3>
                        <p className="text-sm text-gray-400">E-learning system development</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-dark-700 rounded-lg flex items-center gap-4">
                      <div className="w-12 h-12 bg-dark-600 rounded-full flex items-center justify-center">
                        <Monitor size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium">FinTrack Solutions</h3>
                        <p className="text-sm text-gray-400">Financial analytics dashboard</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-medium mb-4">Testimonials</h3>
                    <div className="p-4 bg-dark-700 rounded-lg mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-dark-600 rounded-full"></div>
                        <div>
                          <h4 className="font-medium">Sarah Johnson</h4>
                          <p className="text-xs text-gray-400">CTO, TechCorp Inc.</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 italic">"Working with this developer was an exceptional experience. They delivered our dashboard redesign ahead of schedule and with excellent attention to detail. We've seen a 40% increase in user engagement since the launch."</p>
                    </div>
                    
                    <div className="p-4 bg-dark-700 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-dark-600 rounded-full"></div>
                        <div>
                          <h4 className="font-medium">Mark Williams</h4>
                          <p className="text-xs text-gray-400">Founder, HealthTrack</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 italic">"The mobile app development process was smooth and professional from start to finish. The developer understood our vision and translated it into a user-friendly app that our customers love."</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'connect' && (
                <div>
                  <h2 className="text-xl font-medium mb-4">Let's Connect</h2>
                  <p className="text-gray-300 mb-6">Interested in working together? Fill out the form below and I'll get back to you shortly.</p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <input 
                          type="text" 
                          className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500"
                          placeholder="John Doe" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500"
                          placeholder="john@example.com" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Company/Organization</label>
                      <input 
                        type="text" 
                        className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Company Inc." 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Type</label>
                      <select className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
                        <option>Website Development</option>
                        <option>Mobile App Development</option>
                        <option>UI/UX Design</option>
                        <option>Technical Consulting</option>
                        <option>Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details</label>
                      <textarea 
                        className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500 h-32"
                        placeholder="Please provide details about your project, timeline, and budget." 
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" 
                      />
                      <label htmlFor="privacy" className="ml-2 text-sm text-gray-300">
                        I agree to the privacy policy and terms of service
                      </label>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
                    >
                      Submit Request
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