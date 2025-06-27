import React from 'react';
import Icon from '../AppIcon';

const GameHeader = ({ title = "Tic-Tac-Toe Pro" }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-header bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg">
              <Icon 
                name="Grid3X3" 
                size={20} 
                color="white" 
                className="sm:w-6 sm:h-6" 
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-heading-medium text-text-primary">
                {title}
              </h1>
              <span className="text-xs text-text-secondary font-caption-normal hidden sm:block">
                Classic Strategy Game
              </span>
            </div>
          </div>

          {/* Optional Menu Button for Future Settings */}
          <div className="flex items-center">
            <button
              type="button"
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-100 transition-colors duration-micro ease-micro focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Game settings"
            >
              <Icon name="Settings" size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;