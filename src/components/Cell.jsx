import React from 'react';
import PlayerToken from './PlayerToken';
import { SNAKES, LADDERS } from '../gameConfig';

const Cell = ({ number, playersOnCell, currentPlayerId }) => {
  const isEvenRow = Math.floor((100 - number) / 10) % 2 === 0;
  const isEvenCellInGrid = number % 2 === 0; // Default checkerboard based on number
  
  // Adjusted checkerboard for typical snake/ladder board layout
  const cellBgColor = (isEvenRow ? (number % 2 !== 0) : (number % 2 === 0)) ? 'bg-cellEven' : 'bg-cellOdd';


  const isSnakeHead = SNAKES[number];
  const isLadderBottom = LADDERS[number];

  const snakeTailFor = Object.entries(SNAKES).find(([head, tail]) => tail === number)?.[0];
  const ladderTopFor = Object.entries(LADDERS).find(([bottom, top]) => top === number)?.[0];

  return (
    <div
      className={`relative aspect-square border border-board/50 ${cellBgColor} flex flex-col items-center justify-between p-0.5 md:p-1 transition-colors duration-300`}
    >
      <div className="flex justify-start w-full">
        <span className="text-xs md:text-sm font-bold text-gray-700 opacity-80">
          {number}
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {isSnakeHead && (
          <img src="/assets/snake-icon.svg" alt="Snake" className="w-3/4 h-3/4 md:w-5/6 md:h-5/6 opacity-70 object-contain" style={{transform: 'translateY(-5%)'}}/>
        )}
        {isLadderBottom && (
          <img src="/assets/ladder-icon.svg" alt="Ladder" className="w-2/3 h-2/3 md:w-3/4 md:h-3/4 opacity-70 object-contain" style={{transform: 'translateY(5%)'}}/>
        )}
        {snakeTailFor && (
          <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-snakeBody rounded-full opacity-50 bottom-1 right-1"></div>
        )}
        {ladderTopFor && (
          <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-ladder rounded-full opacity-50 top-1 right-1"></div>
        )}
      </div>

      {playersOnCell.length > 0 && (
        <div className="absolute bottom-0.5 right-0.5 md:bottom-1 md:right-1 flex space-x-0.5 z-10">
          {playersOnCell.map(playerId => (
            <PlayerToken key={playerId} playerId={playerId} isCurrentPlayer={playerId === currentPlayerId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cell;