import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GameOverModal = ({ isOpen, winner, isDraw, onNewGame, onClose }) => {
  if (!isOpen) return null;

  const getModalContent = () => {
    if (isDraw) {
      return {
        icon: 'Equal',
        iconColor: '#D97706',
        bgColor: 'bg-warning-50',
        borderColor: 'border-warning-200',
        title: "It's a Draw!",
        message: "Great game! Both players played well.",
        titleColor: 'text-warning-700'
      };
    }
    
    return {
      icon: 'Trophy',
      iconColor: '#059669',
      bgColor: 'bg-success-50',
      borderColor: 'border-success-200',
      title: `Player ${winner} Wins!`,
      message: `Congratulations! Player ${winner} has won this round.`,
      titleColor: 'text-success-700'
    };
  };

  const content = getModalContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-surface rounded-2xl shadow-2xl max-w-sm w-full p-6 border border-border animate-in fade-in duration-300">
        <div className="text-center">
          {/* Icon */}
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${content.bgColor} ${content.borderColor} border-2 flex items-center justify-center`}>
            <Icon 
              name={content.icon} 
              size={32} 
              color={content.iconColor}
            />
          </div>

          {/* Title */}
          <h2 className={`text-2xl font-heading-bold mb-2 ${content.titleColor}`}>
            {content.title}
          </h2>

          {/* Message */}
          <p className="text-text-secondary font-body-normal mb-6">
            {content.message}
          </p>

          {/* Actions */}
          <div className="flex flex-col space-y-3">
            <Button
              variant="primary"
              onClick={onNewGame}
              iconName="RotateCcw"
              iconPosition="left"
              fullWidth
            >
              Play Again
            </Button>
            
            <Button
              variant="ghost"
              onClick={onClose}
              fullWidth
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;