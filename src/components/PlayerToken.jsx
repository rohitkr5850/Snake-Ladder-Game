import React from 'react';
import { PLAYER_COLORS } from '../gameConfig';

const PlayerToken = ({ playerId, isCurrentPlayer }) => {
  const colorClass = `bg-${PLAYER_COLORS[playerId]}`;
  const animationClass = isCurrentPlayer ? 'animate-playerMove' : '';
  const glowClass = isCurrentPlayer ? 'ring-4 ring-yellow-400/50' : '';

  return (
    <div
      className={`relative w-5 h-5 md:w-6 md:h-6 rounded-full ${colorClass} shadow-player border-2 border-gray-800 
                 flex items-center justify-center text-base md:text-lg font-black
                 ${animationClass} ${glowClass} transition-all duration-500 ease-in-out opacity-100`}
      style={{
        transformOrigin: 'bottom center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
      }}
    >
      <span className="absolute text-white" style={{
        textShadow: '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000'
      }}>
        {playerId}
      </span>
    </div>
  );
};

export default PlayerToken;