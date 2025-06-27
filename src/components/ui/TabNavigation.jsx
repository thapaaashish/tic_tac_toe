import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const TabNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    {
      label: 'Play',
      path: '/game-board',
      icon: 'Play',
      description: 'Start or continue game'
    },
    {
      label: 'Stats',
      path: '/game-statistics',
      icon: 'BarChart3',
      description: 'View game statistics'
    }
  ];

  const handleTabChange = (path) => {
    navigate(path);
  };

  const isActiveTab = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Tab Navigation - Bottom */}
      <nav className="fixed bottom-0 left-0 right-0 z-navigation bg-surface border-t border-border md:hidden">
        <div className="flex">
          {tabs.map((tab) => {
            const isActive = isActiveTab(tab.path);
            return (
              <button
                key={tab.path}
                onClick={() => handleTabChange(tab.path)}
                className={`flex-1 flex flex-col items-center justify-center py-3 px-2 min-h-[60px] transition-colors duration-state ease-state focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset ${
                  isActive
                    ? 'text-primary bg-primary-50' :'text-text-secondary hover:text-text-primary hover:bg-surface-100'
                }`}
                aria-label={tab.description}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon 
                  name={tab.icon} 
                  size={20} 
                  className={`mb-1 transition-colors duration-state ease-state ${
                    isActive ? 'text-primary' : 'text-current'
                  }`}
                />
                <span className={`text-xs font-caption-normal transition-colors duration-state ease-state ${
                  isActive ? 'text-primary font-medium' : 'text-current'
                }`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop Tab Navigation - Top */}
      <nav className="hidden md:block bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const isActive = isActiveTab(tab.path);
              return (
                <button
                  key={tab.path}
                  onClick={() => handleTabChange(tab.path)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-body-medium text-sm transition-all duration-state ease-state focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    isActive
                      ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-text-primary hover:border-border'
                  }`}
                  aria-label={tab.description}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon 
                    name={tab.icon} 
                    size={18} 
                    className={`transition-colors duration-state ease-state ${
                      isActive ? 'text-primary' : 'text-current'
                    }`}
                  />
                  <span className="transition-colors duration-state ease-state">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default TabNavigation;