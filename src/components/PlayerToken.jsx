import React from 'react';
import { PLAYER_COLORS } from '../gameConfig';

const PlayerToken = ({ playerId, isCurrentPlayer }) => {
  const colorClass = `bg-${PLAYER_COLORS[playerId]}`;
  const animationClass = isCurrentPlayer ? 'animate-playerMove' : '';

  return (
    <div
      className={`w-4 h-4 md:w-5 md:h-5 rounded-full ${colorClass} shadow-player border-2 border-white flex items-center justify-center text-xs text-white font-bold ${animationClass} transition-all duration-500 ease-in-out`}
      style={{ transformOrigin: 'bottom center' }}
    >
      {/* P{playerId} You can add player number inside if you want */}
    </div>
  );
};

export default PlayerToken;