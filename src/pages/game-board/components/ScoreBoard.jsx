import React from 'react';
import Icon from '../../../components/AppIcon';

const ScoreBoard = ({ scores }) => {
  return (
    <div className="bg-surface rounded-xl shadow-md p-4 border border-border">
      <h3 className="text-lg font-heading-medium text-text-primary mb-4 text-center">
        Score Board
      </h3>
      
      <div className="grid grid-cols-3 gap-4">
        {/* Player X Score */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-8 h-8 bg-error-50 rounded-lg flex items-center justify-center">
              <Icon name="X" size={20} color="#DC2626" strokeWidth={3} />
            </div>
          </div>
          <p className="text-sm font-body-medium text-text-secondary mb-1">Player X</p>
          <p className="text-2xl font-heading-bold text-error-600">{scores.X}</p>
        </div>

        {/* Draws */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-8 h-8 bg-warning-50 rounded-lg flex items-center justify-center">
              <Icon name="Equal" size={20} color="#D97706" />
            </div>
          </div>
          <p className="text-sm font-body-medium text-text-secondary mb-1">Draws</p>
          <p className="text-2xl font-heading-bold text-warning-600">{scores.draws}</p>
        </div>

        {/* Player O Score */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-8 h-8 bg-accent-50 rounded-lg flex items-center justify-center">
              <Icon name="Circle" size={20} color="#10B981" strokeWidth={2} />
            </div>
          </div>
          <p className="text-sm font-body-medium text-text-secondary mb-1">Player O</p>
          <p className="text-2xl font-heading-bold text-accent-600">{scores.O}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;