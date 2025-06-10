import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-3 px-4 py-2.5 rounded-lg w-full text-left text-gray-300 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Moon size={20} />
        ) : (
          <Sun size={20} className="text-yellow-500" />
        )}
      </motion.div>
      <span>
        {theme === 'dark' ? 'Modo Oscuro' : 'Modo Claro'}
      </span>
    </button>
  );
}