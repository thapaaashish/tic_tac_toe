import React, { useState, useEffect } from 'react';
import PerformanceMetrics from './components/PerformanceMetrics';
import WinLossChart from './components/WinLossChart';
import GameHistoryList from './components/GameHistoryList';
import StatisticsFilters from './components/StatisticsFilters';

const GameStatistics = () => {
  const [filters, setFilters] = useState({
    gameMode: 'all',
    timeRange: 'all-time',
    result: 'all',
    opponentType: 'all',
    startDate: '',
    endDate: ''
  });

  // Mock statistics data
  const mockStats = {
    totalGames: 127,
    winPercentage: 68,
    favoriteMode: 'vs AI',
    longestWinStreak: 8
  };

  // Mock chart data for performance trends
  const mockChartData = [
    { session: '1', wins: 4, losses: 2, draws: 1 },
    { session: '2', wins: 6, losses: 1, draws: 0 },
    { session: '3', wins: 3, losses: 3, draws: 2 },
    { session: '4', wins: 5, losses: 2, draws: 1 },
    { session: '5', wins: 7, losses: 0, draws: 1 },
    { session: '6', wins: 4, losses: 4, draws: 0 },
    { session: '7', wins: 6, losses: 1, draws: 2 }
  ];

  // Mock game history data
  const mockGameHistory = [
    {
      id: 1,
      opponent: 'AI Bot',
      opponentType: 'AI',
      result: 'win',
      date: '2024-01-15T14:30:00Z',
      moves: 7,
      duration: '2m 15s',
      firstMove: 'X',
      difficulty: 'Medium',
      score: '1-0',
      moveSequence: ['E5', 'A1', 'E4', 'B2', 'E6']
    },
    {
      id: 2,
      opponent: 'Sarah Chen',
      opponentType: 'Human',
      result: 'loss',
      date: '2024-01-15T13:45:00Z',
      moves: 9,
      duration: '3m 42s',
      firstMove: 'O',
      score: '0-1',
      moveSequence: ['A1', 'E5', 'B1', 'E4', 'C1', 'E6', 'A2', 'B2', 'C2']
    },
    {
      id: 3,
      opponent: 'Mike Johnson',
      opponentType: 'Human',
      result: 'draw',
      date: '2024-01-15T12:20:00Z',
      moves: 9,
      duration: '4m 18s',
      firstMove: 'X',
      score: '0-0',
      moveSequence: ['E5', 'A1', 'E4', 'E6', 'B2', 'C3', 'A2', 'C2', 'B3']
    },
    {
      id: 4,
      opponent: 'AI Bot',
      opponentType: 'AI',
      result: 'win',
      date: '2024-01-14T16:15:00Z',
      moves: 5,
      duration: '1m 33s',
      firstMove: 'X',
      difficulty: 'Easy',
      score: '1-0',
      moveSequence: ['E5', 'A1', 'E4', 'B1', 'E6']
    },
    {
      id: 5,
      opponent: 'Emma Wilson',
      opponentType: 'Human',
      result: 'win',
      date: '2024-01-14T15:30:00Z',
      moves: 6,
      duration: '2m 45s',
      firstMove: 'O',
      score: '1-0',
      moveSequence: ['A1', 'E5', 'B2', 'E4', 'C3', 'E6']
    }
  ];

  const [filteredHistory, setFilteredHistory] = useState(mockGameHistory);

  // Filter game history based on current filters
  useEffect(() => {
    let filtered = mockGameHistory;

    if (filters.gameMode !== 'all') {
      const modeMap = {
        'vs-human': 'Human',
        'vs-ai': 'AI'
      };
      filtered = filtered.filter(game => game.opponentType === modeMap[filters.gameMode]);
    }

    if (filters.result !== 'all') {
      filtered = filtered.filter(game => game.result === filters.result);
    }

    if (filters.opponentType !== 'all') {
      filtered = filtered.filter(game => game.opponentType.toLowerCase() === filters.opponentType);
    }

    // Time range filtering would be implemented here with actual date logic
    if (filters.timeRange !== 'all-time') {
      // Mock implementation - in real app, filter by actual dates
      console.log('Filtering by time range:', filters.timeRange);
    }

    setFilteredHistory(filtered);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      gameMode: 'all',
      timeRange: 'all-time',
      result: 'all',
      opponentType: 'all',
      startDate: '',
      endDate: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
            Game Statistics
          </h1>
          <p className="text-text-secondary">
            Track your performance and analyze your gaming progress over time
          </p>
        </div>

        {/* Performance Metrics */}
        <PerformanceMetrics stats={mockStats} />

        {/* Win/Loss Chart */}
        <WinLossChart chartData={mockChartData} />

        {/* Statistics Filters */}
        <StatisticsFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
        />

        {/* Game History */}
        <GameHistoryList gameHistory={filteredHistory} />

        {/* Empty State for No Results */}
        {filteredHistory.length === 0 && filters.gameMode !== 'all' && (
          <div className="bg-surface rounded-xl p-8 border border-border soft-shadow text-center">
            <div className="text-text-muted mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-text-primary mb-2">No games found</h3>
            <p className="text-text-secondary">
              Try adjusting your filters or play more games to see statistics here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameStatistics;