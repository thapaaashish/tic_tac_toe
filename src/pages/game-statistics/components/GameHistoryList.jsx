import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GameHistoryList = ({ gameHistory }) => {
  const [expandedGame, setExpandedGame] = useState(null);

  const toggleExpanded = (gameId) => {
    setExpandedGame(expandedGame === gameId ? null : gameId);
  };

  const getResultIcon = (result) => {
    switch (result) {
      case 'win':
        return { icon: 'Trophy', color: 'text-accent' };
      case 'loss':
        return { icon: 'X', color: 'text-error' };
      case 'draw':
        return { icon: 'Minus', color: 'text-warning' };
      default:
        return { icon: 'Circle', color: 'text-text-secondary' };
    }
  };

  const getResultText = (result) => {
    switch (result) {
      case 'win':
        return 'Victory';
      case 'loss':
        return 'Defeat';
      case 'draw':
        return 'Draw';
      default:
        return 'Unknown';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const replayGame = (gameId) => {
    // Mock replay functionality
    console.log(`Replaying game ${gameId}`);
  };

  return (
    <div className="bg-surface rounded-xl p-4 lg:p-6 border border-border soft-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Recent Games</h3>
        <Button
          variant="ghost"
          iconName="RotateCcw"
          iconSize={16}
          className="text-text-secondary hover:text-text-primary"
        >
          Refresh
        </Button>
      </div>

      <div className="space-y-3">
        {gameHistory.map((game) => {
          const resultInfo = getResultIcon(game.result);
          const isExpanded = expandedGame === game.id;

          return (
            <div
              key={game.id}
              className="border border-border rounded-lg p-4 hover:bg-surface-50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center ${resultInfo.color}`}>
                    <Icon name={resultInfo.icon} size={16} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-text-primary">
                        vs {game.opponent}
                      </span>
                      <span className="text-sm text-text-secondary">
                        ({game.opponentType})
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span>{formatDate(game.date)}</span>
                      <span>{game.moves} moves</span>
                      <span className={resultInfo.color}>
                        {getResultText(game.result)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    iconName="Play"
                    iconSize={14}
                    onClick={() => replayGame(game.id)}
                    className="text-text-secondary hover:text-primary"
                  >
                    Replay
                  </Button>
                  <Button
                    variant="ghost"
                    iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
                    iconSize={16}
                    onClick={() => toggleExpanded(game.id)}
                    className="text-text-secondary hover:text-text-primary"
                  />
                </div>
              </div>

              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-text-secondary">Duration:</span>
                      <p className="font-medium text-text-primary">{game.duration}</p>
                    </div>
                    <div>
                      <span className="text-text-secondary">First Move:</span>
                      <p className="font-medium text-text-primary">{game.firstMove}</p>
                    </div>
                    <div>
                      <span className="text-text-secondary">Difficulty:</span>
                      <p className="font-medium text-text-primary">{game.difficulty || 'N/A'}</p>
                    </div>
                    <div>
                      <span className="text-text-secondary">Score:</span>
                      <p className="font-medium text-text-primary">{game.score}</p>
                    </div>
                  </div>
                  
                  {game.moveSequence && (
                    <div className="mt-3">
                      <span className="text-text-secondary text-sm">Move Sequence:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {game.moveSequence.map((move, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-surface-100 rounded text-xs font-mono text-text-primary"
                          >
                            {move}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {gameHistory.length === 0 && (
        <div className="text-center py-8">
          <Icon name="GamepadIcon" size={48} className="text-text-muted mx-auto mb-3" />
          <p className="text-text-secondary">No games played yet</p>
          <p className="text-sm text-text-muted">Start playing to see your game history</p>
        </div>
      )}
    </div>
  );
};

export default GameHistoryList;