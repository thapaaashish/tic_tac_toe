import React from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const StatisticsFilters = ({ filters, onFilterChange, onResetFilters }) => {
  const gameModes = [
    { value: 'all', label: 'All Modes' },
    { value: 'vs-human', label: 'vs Human' },
    { value: 'vs-ai', label: 'vs AI' },
    { value: 'tournament', label: 'Tournament' }
  ];

  const timeRanges = [
    { value: 'all-time', label: 'All Time' },
    { value: 'last-7-days', label: 'Last 7 Days' },
    { value: 'last-30-days', label: 'Last 30 Days' },
    { value: 'last-90-days', label: 'Last 90 Days' },
    { value: 'custom', label: 'Custom Range' }
  ];

  const handleFilterChange = (filterType, value) => {
    onFilterChange({
      ...filters,
      [filterType]: value
    });
  };

  return (
    <div className="bg-surface rounded-xl p-4 lg:p-6 border border-border soft-shadow mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Filters</h3>
        <Button
          variant="ghost"
          iconName="RotateCcw"
          iconSize={16}
          onClick={onResetFilters}
          className="text-text-secondary hover:text-text-primary"
        >
          Reset
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Game Mode Filter */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Game Mode
          </label>
          <div className="relative">
            <select
              value={filters.gameMode}
              onChange={(e) => handleFilterChange('gameMode', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
            >
              {gameModes.map((mode) => (
                <option key={mode.value} value={mode.value}>
                  {mode.label}
                </option>
              ))}
            </select>
            <Icon 
              name="ChevronDown" 
              size={16} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none"
            />
          </div>
        </div>

        {/* Time Range Filter */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Time Range
          </label>
          <div className="relative">
            <select
              value={filters.timeRange}
              onChange={(e) => handleFilterChange('timeRange', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
            >
              {timeRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
            <Icon 
              name="ChevronDown" 
              size={16} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none"
            />
          </div>
        </div>

        {/* Custom Date Range */}
        {filters.timeRange === 'custom' && (
          <>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Start Date
              </label>
              <Input
                type="date"
                value={filters.startDate}
                onChange={(e) => handleFilterChange('startDate', e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                End Date
              </label>
              <Input
                type="date"
                value={filters.endDate}
                onChange={(e) => handleFilterChange('endDate', e.target.value)}
                className="w-full"
              />
            </div>
          </>
        )}

        {/* Result Filter */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Result
          </label>
          <div className="relative">
            <select
              value={filters.result}
              onChange={(e) => handleFilterChange('result', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
            >
              <option value="all">All Results</option>
              <option value="win">Wins Only</option>
              <option value="loss">Losses Only</option>
              <option value="draw">Draws Only</option>
            </select>
            <Icon 
              name="ChevronDown" 
              size={16} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none"
            />
          </div>
        </div>

        {/* Opponent Type Filter */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Opponent
          </label>
          <div className="relative">
            <select
              value={filters.opponentType}
              onChange={(e) => handleFilterChange('opponentType', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
            >
              <option value="all">All Opponents</option>
              <option value="human">Human Only</option>
              <option value="ai">AI Only</option>
            </select>
            <Icon 
              name="ChevronDown" 
              size={16} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {(filters.gameMode !== 'all' || filters.timeRange !== 'all-time' || filters.result !== 'all' || filters.opponentType !== 'all') && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-text-secondary">Active filters:</span>
            {filters.gameMode !== 'all' && (
              <span className="px-2 py-1 bg-primary-50 text-primary text-xs rounded-full">
                {gameModes.find(m => m.value === filters.gameMode)?.label}
              </span>
            )}
            {filters.timeRange !== 'all-time' && (
              <span className="px-2 py-1 bg-primary-50 text-primary text-xs rounded-full">
                {timeRanges.find(t => t.value === filters.timeRange)?.label}
              </span>
            )}
            {filters.result !== 'all' && (
              <span className="px-2 py-1 bg-primary-50 text-primary text-xs rounded-full">
                {filters.result.charAt(0).toUpperCase() + filters.result.slice(1)}s
              </span>
            )}
            {filters.opponentType !== 'all' && (
              <span className="px-2 py-1 bg-primary-50 text-primary text-xs rounded-full">
                vs {filters.opponentType.charAt(0).toUpperCase() + filters.opponentType.slice(1)}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatisticsFilters;