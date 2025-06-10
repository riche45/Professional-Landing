import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { X, Home, Archive, Search, Link, Mic, FileText, User, AtSign, BarChart } from 'lucide-react';
import { cn } from '../utils/cn';
import LanguageSwitcher from './LanguageSwitcher';
import SocialLinks from './SocialLinks';
import ThemeToggle from './ThemeToggle';

interface SidebarProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const { t } = useTranslation();
  
  const navItems = [
    { icon: <Home size={20} />, label: t('nav.home'), path: '/' },
    { icon: <Archive size={20} />, label: t('nav.archives'), path: '/archives' },
    { icon: <Search size={20} />, label: 'Búsqueda', path: '/busqueda' },
    { icon: <Mic size={20} />, label: t('nav.podcast'), path: '/podcast' },
    { icon: <FileText size={20} />, label: 'Currículum', path: '/curriculum' },
    { icon: <AtSign size={20} />, label: t('nav.connects'), path: '/connects' },
    { icon: <BarChart size={20} />, label: t('nav.surveys'), path: '/surveys' },
  ];

  return (
    <div className="flex flex-col h-full py-6">
      <div className="px-4 mb-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            alt="Profile" 
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-dark-600"
          />
          <button className="lg:hidden ml-auto p-1 text-gray-600 dark:text-gray-300" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
      </div>
      
      <div className="px-6">
        <h1 className="text-xl font-medium text-gray-900 dark:text-white">Richard Garcia.</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer. Designer. Creator.</p>
      </div>
      
      <SocialLinks className="mt-4 px-6" />
      
      <nav className="mt-8 flex-1">
        <ul className="space-y-2 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors",
                  isActive 
                    ? "bg-blue-100 dark:bg-dark-700 text-blue-600 dark:text-primary-400" 
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 hover:text-gray-900 dark:hover:text-white"
                )}
                onClick={onClose}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
      
      <div className="mt-auto px-6 pt-4 border-t border-gray-200 dark:border-dark-600">
        <LanguageSwitcher />
      </div>
    </div>
  );
}