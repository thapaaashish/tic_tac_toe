import React from 'react';
import Button from '../../../components/ui/Button';

const GameControls = ({ onNewGame, onResetScore, gameStatus }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mx-auto">
      <Button
        variant="primary"
        onClick={onNewGame}
        iconName="RotateCcw"
        iconPosition="left"
        className="flex-1"
      >
        New Game
      </Button>
      
      <Button
        variant="outline"
        onClick={onResetScore}
        iconName="Trash2"
        iconPosition="left"
        className="flex-1"
      >
        Reset Score
      </Button>
    </div>
  );
};

export default GameControls;