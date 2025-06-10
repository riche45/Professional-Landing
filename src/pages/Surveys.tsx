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
      <h1 className="text-3xl font-medium mb-8">Surveys & Polls</h1>
      
      <div className="bg-dark-800 rounded-card p-8 mb-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-400">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
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
              <h2 className="text-xl font-medium mb-4">Professional Experience Survey</h2>
              <p className="text-gray-300 mb-6">Please share your professional experience to help us understand our audience better.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Years of Experience</label>
                  <select className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
                    <option>Less than 1 year</option>
                    <option>1-3 years</option>
                    <option>3-5 years</option>
                    <option>5-10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Industry</label>
                  <select className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
                    <option>Technology</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Retail</option>
                    <option>Manufacturing</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Job Role</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="e.g. Software Developer, Designer, Product Manager" 
                  />
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-medium mb-4">Technical Skills</h2>
              <p className="text-gray-300 mb-6">Tell us about your technical expertise and preferences.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Programming Languages (Select all that apply)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">JavaScript</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">Python</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">Java</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">C#</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">Go</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">Rust</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Frontend Frameworks (Select all that apply)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">React</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">Vue</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">Angular</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">Svelte</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Years of Experience with AI/ML</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    step="1" 
                    defaultValue="2"
                    className="w-full accent-primary-500" 
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>0</span>
                    <span>5</span>
                    <span>10+</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-medium mb-4">Content Preferences</h2>
              <p className="text-gray-300 mb-6">Help us deliver the content you're most interested in.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">What topics are you most interested in? (Select all that apply)</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">Software Development</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">Machine Learning</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">Design Systems</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">Career Development</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded bg-dark-600 border-dark-500 text-primary-500 focus:ring-primary-500" />
                      <span className="ml-2">Tech Industry News</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">How did you find my portfolio?</label>
                  <select className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500">
                    <option>Search Engine</option>
                    <option>Social Media</option>
                    <option>Referral</option>
                    <option>Conference/Event</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Any additional feedback or suggestions?</label>
                  <textarea 
                    className="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:ring-primary-500 focus:border-primary-500 h-24"
                    placeholder="Share your thoughts..." 
                  ></textarea>
                </div>
              </div>
            </div>
          )}
        </motion.div>
        
        <div className="flex justify-between mt-8">
          <button 
            className="px-6 py-2 rounded-lg bg-dark-700 text-white hover:bg-dark-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            onClick={handlePrevStep}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          
          {currentStep < totalSteps ? (
            <button 
              className="px-6 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              onClick={handleNextStep}
            >
              Next
            </button>
          ) : (
            <button 
              className="px-6 py-2 rounded-lg bg-success-600 text-white hover:bg-success-700 transition-colors"
            >
              Submit
            </button>
          )}
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