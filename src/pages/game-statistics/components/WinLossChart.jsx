import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const WinLossChart = ({ chartData }) => {
  const colors = {
    wins: 'var(--color-accent)',
    losses: 'var(--color-error)',
    draws: 'var(--color-warning)'
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface border border-border rounded-lg p-3 soft-shadow">
          <p className="text-sm font-medium text-text-primary mb-2">{`Session ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-surface rounded-xl p-4 lg:p-6 border border-border soft-shadow mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Performance Trends</h3>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <span className="text-text-secondary">Wins</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <span className="text-text-secondary">Losses</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <span className="text-text-secondary">Draws</span>
          </div>
        </div>
      </div>
      
      <div className="w-full h-64" aria-label="Win Loss Trends Bar Chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="session" 
              stroke="var(--color-text-secondary)"
              fontSize={12}
            />
            <YAxis 
              stroke="var(--color-text-secondary)"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="wins" fill={colors.wins} radius={[2, 2, 0, 0]} />
            <Bar dataKey="losses" fill={colors.losses} radius={[2, 2, 0, 0]} />
            <Bar dataKey="draws" fill={colors.draws} radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WinLossChart;