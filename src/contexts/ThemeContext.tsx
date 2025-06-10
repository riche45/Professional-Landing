import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark'); // Default to dark mode

  useEffect(() => {
    // Get saved theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Set dark as default if no saved preference
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.className = 'bg-dark-900 text-white transition-colors duration-300';
    } else {
      root.classList.remove('dark');
      document.body.className = 'bg-gray-50 text-gray-900 transition-colors duration-300';
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      isDark: theme === 'dark' 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}