import React from 'react';
import Icon from '../../../components/AppIcon';

const GameGrid = ({ board, onCellClick, winningCells, gameStatus }) => {
  const renderCellContent = (value, index) => {
    if (!value) return null;
    
    const isWinningCell = winningCells.includes(index);
    const iconColor = isWinningCell ? 'white' : (value === 'X' ? '#DC2626' : '#059669');
    
    return (
      <Icon 
        name={value === 'X' ? 'X' : 'Circle'} 
        size={32}
        color={iconColor}
        strokeWidth={value === 'X' ? 3 : 2}
        className="transition-all duration-300 ease-out"
      />
    );
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="grid grid-cols-3 gap-2 bg-surface-100 p-4 rounded-xl shadow-md">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => onCellClick(index)}
            disabled={cell !== null || gameStatus !== 'playing'}
            className={`
              aspect-square flex items-center justify-center
              bg-surface border-2 rounded-lg
              transition-all duration-200 ease-out
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              ${cell === null && gameStatus === 'playing' ?'border-border hover:border-primary hover:bg-primary-50 hover:scale-105 cursor-pointer' :'border-border cursor-not-allowed'
              }
              ${winningCells.includes(index) 
                ? 'bg-primary border-primary animate-pulse' :''
              }
            `}
            aria-label={`Cell ${index + 1}, ${cell ? `occupied by ${cell}` : 'empty'}`}
          >
            {renderCellContent(cell, index)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameGrid;