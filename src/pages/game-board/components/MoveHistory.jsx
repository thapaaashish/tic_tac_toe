import React from 'react';
import Icon from '../../../components/AppIcon';

const MoveHistory = ({ moves }) => {
  if (moves.length === 0) {
    return (
      <div className="bg-surface rounded-xl shadow-md p-4 border border-border">
        <h3 className="text-lg font-heading-medium text-text-primary mb-4 flex items-center">
          <Icon name="History" size={20} className="mr-2" />
          Move History
        </h3>
        <div className="text-center py-8">
          <Icon name="Clock" size={32} className="text-text-muted mx-auto mb-2" />
          <p className="text-text-muted font-body-normal">No moves yet</p>
          <p className="text-sm text-text-muted mt-1">Start playing to see move history</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl shadow-md p-4 border border-border">
      <h3 className="text-lg font-heading-medium text-text-primary mb-4 flex items-center">
        <Icon name="History" size={20} className="mr-2" />
        Move History
      </h3>
      
      <div className="max-h-48 overflow-y-auto space-y-2">
        {moves.map((move, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-2 bg-surface-50 rounded-lg border border-border-light"
          >
            <div className="flex items-center space-x-3">
              <span className="text-sm font-body-medium text-text-secondary">
                #{index + 1}
              </span>
              <div className="flex items-center space-x-2">
                <Icon 
                  name={move.player === 'X' ? 'X' : 'Circle'} 
                  size={16} 
                  color={move.player === 'X' ? '#DC2626' : '#10B981'}
                  strokeWidth={move.player === 'X' ? 3 : 2}
                />
                <span className="text-sm font-body-normal text-text-primary">
                  Player {move.player}
                </span>
              </div>
            </div>
            <div className="text-sm text-text-secondary">
              Cell {move.position + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoveHistory;