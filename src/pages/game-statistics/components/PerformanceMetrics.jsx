import React from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceMetrics = ({ stats }) => {
  const metrics = [
    {
      id: 'total-games',
      label: 'Total Games',
      value: stats.totalGames,
      icon: 'GamepadIcon',
      color: 'text-primary',
      bgColor: 'bg-primary-50'
    },
    {
      id: 'win-percentage',
      label: 'Win Rate',
      value: `${stats.winPercentage}%`,
      icon: 'Trophy',
      color: 'text-accent',
      bgColor: 'bg-accent-50'
    },
    {
      id: 'favorite-mode',
      label: 'Favorite Mode',
      value: stats.favoriteMode,
      icon: 'Heart',
      color: 'text-error',
      bgColor: 'bg-error-50'
    },
    {
      id: 'winning-streak',
      label: 'Best Streak',
      value: stats.longestWinStreak,
      icon: 'Zap',
      color: 'text-warning',
      bgColor: 'bg-warning-50'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="bg-surface rounded-xl p-4 border border-border soft-shadow"
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
              <Icon 
                name={metric.icon} 
                size={20} 
                className={metric.color}
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-text-primary">
              {metric.value}
            </p>
            <p className="text-sm text-text-secondary font-medium">
              {metric.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceMetrics;