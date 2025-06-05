import React from 'react';
import { PLAYER_COLORS } from '../gameConfig';

const GameInfo = ({ currentPlayer, message, winner, onReset }) => {
  const playerColor = PLAYER_COLORS[currentPlayer];

  return (
    <div className="text-center p-4 md:p-6 bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-auto">
      {winner ? (
        <div className="animate-winEffect">
          <h2 className={`font-display text-3xl md:text-4xl text-${PLAYER_COLORS[winner]} mb-3`}>
            Player {winner} Wins!
          </h2>
          <p className="text-lg md:text-xl text-yellow-400 mb-4">Congratulations!</p>
        </div>
      ) : (
        <div>
          <h2 className="font-display text-2xl md:text-3xl mb-2">
            Current Turn: <span className={`text-${playerColor}`}>Player {currentPlayer}</span>
          </h2>
          <p className="text-gray-300 h-12 md:h-10 text-sm md:text-base flex items-center justify-center">
            {message || "Roll the dice!"}
          </p>
        </div>
      )}
      <button
        onClick={onReset}
        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-200 text-sm md:text-base"
      >
        {winner ? 'Play Again' : 'Reset Game'}
      </button>
    </div>
  );
};

export default GameInfo;