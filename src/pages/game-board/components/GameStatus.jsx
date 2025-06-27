import React from 'react';
import Icon from '../../../components/AppIcon';

const GameStatus = ({ currentPlayer, gameStatus, winner, isDraw }) => {
  const getStatusMessage = () => {
    if (gameStatus === 'won') {
      return `Player ${winner} Wins!`;
    }
    if (isDraw) {
      return "It's a Draw!";
    }
    return `Player ${currentPlayer}'s Turn`;
  };

  const getStatusIcon = () => {
    if (gameStatus === 'won') {
      return 'Trophy';
    }
    if (isDraw) {
      return 'Equal';
    }
    return currentPlayer === 'X' ? 'X' : 'Circle';
  };

  const getStatusColor = () => {
    if (gameStatus === 'won') {
      return 'text-success-600';
    }
    if (isDraw) {
      return 'text-warning-600';
    }
    return currentPlayer === 'X' ? 'text-error-600' : 'text-accent-600';
  };

  const getBgColor = () => {
    if (gameStatus === 'won') {
      return 'bg-success-50 border-success-200';
    }
    if (isDraw) {
      return 'bg-warning-50 border-warning-200';
    }
    return currentPlayer === 'X' ? 'bg-error-50 border-error-200' : 'bg-accent-50 border-accent-200';
  };

  return (
    <div className={`
      flex items-center justify-center space-x-3 p-4 rounded-xl border-2
      transition-all duration-300 ease-out
      ${getBgColor()}
    `}>
      <Icon 
        name={getStatusIcon()} 
        size={24} 
        className={`${getStatusColor()} transition-colors duration-300`}
        strokeWidth={currentPlayer === 'X' ? 3 : 2}
      />
      <span className={`text-lg font-heading-medium ${getStatusColor()}`}>
        {getStatusMessage()}
      </span>
    </div>
  );
};

export default GameStatus;