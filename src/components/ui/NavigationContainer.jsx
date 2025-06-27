import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GameHeader from './GameHeader';
import TabNavigation from './TabNavigation';

// Lazy load pages for performance optimization
const GameBoard = React.lazy(() => import('../../pages/game-board'));
const GameStatistics = React.lazy(() => import('../../pages/game-statistics'));

const NavigationContainer = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        {/* Fixed Header */}
        <GameHeader />
        
        {/* Tab Navigation */}
        <TabNavigation />
        
        {/* Main Content Area */}
        <main className="pt-15 sm:pt-20 md:pt-32 pb-16 md:pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <React.Suspense 
              fallback={
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-text-secondary font-body-normal">Loading game...</p>
                  </div>
                </div>
              }
            >
              <Routes>
                {/* Default redirect to game board */}
                <Route path="/" element={<Navigate to="/game-board" replace />} />
                
                {/* Game routes */}
                <Route path="/game-board" element={<GameBoard />} />
                <Route path="/game-statistics" element={<GameStatistics />} />
                
                {/* Fallback for unknown routes */}
                <Route path="*" element={<Navigate to="/game-board" replace />} />
              </Routes>
            </React.Suspense>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default NavigationContainer;