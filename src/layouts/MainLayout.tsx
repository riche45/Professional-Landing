import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Menu } from 'lucide-react';
import { cn } from '../utils/cn';

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  React.useEffect(() => {
    if (isDesktop) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, [isDesktop]);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Mobile menu button */}
      {!isDesktop && (
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded-full bg-white dark:bg-dark-800 text-gray-900 dark:text-white shadow-lg dark:shadow-none border border-gray-200 dark:border-transparent transition-colors duration-300"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={24} />
        </button>
      )}
      
      {/* Sidebar */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-dark-800 transition-all duration-300 ease-in-out lg:translate-x-0 overflow-y-auto border-r border-gray-200 dark:border-dark-600",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar onClose={() => !isDesktop && setSidebarOpen(false)} />
      </div>
      
      {/* Backdrop for mobile */}
      {sidebarOpen && !isDesktop && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Main content */}
      <div className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        isDesktop ? "ml-64" : "ml-0"
      )}>
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}