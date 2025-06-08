import React from 'react';
import Cell from './Cell';
import { NUM_ROWS, NUM_COLS, BOARD_SIZE } from '../gameConfig';

const Board = ({ playerPositions, currentPlayer }) => {
  const cells = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    const rowCells = [];
    for (let j = 0; j < NUM_COLS; j++) {
      let cellNumber;
      // For 100 at top-left, and standard S&L board numbering (bottom-left is 1)
      // Rows are built from top (row 0) to bottom (row 9)
      // Cell 100 is at (row 0, col 0), Cell 1 is at (row 9, col 0)
      if ((NUM_ROWS - 1 - i) % 2 === 0) { // Even rows from bottom (0, 2, 4...) go L to R
        cellNumber = (NUM_ROWS - 1 - i) * NUM_COLS + j + 1;
      } else { // Odd rows from bottom (1, 3, 5...) go R to L
        cellNumber = (NUM_ROWS - 1 - i) * NUM_COLS + (NUM_COLS - 1 - j) + 1;
      }
      rowCells.push(cellNumber);
    }
    cells.push(rowCells);
  }
  // The board is visually built top-to-bottom, but numbers are 1-100.
  // We need to reverse the order of rows for display if 1 is at the bottom-left.
  // The calculation above already handles the snake-like numbering.
  // We just need to ensure the `cells.flat()` produces numbers 100..91, 81..90, etc.
  // The provided code for cellNumber calculation (in previous large response) makes 100 at top-left.
  // Let's use that for consistency with the previous response.
  
  const displayCells = [];
    for (let i = 0; i < NUM_ROWS; i++) {
        const row = [];
        for (let j = 0; j < NUM_COLS; j++) {
            let cellNumber;
            if (i % 2 === 0) { // Even rows (0, 2, ..) from top: 100-91, 80-71, ...
                cellNumber = BOARD_SIZE - (i * NUM_COLS) - j;
            } else { // Odd rows (1, 3, ..) from top: 81-90, 61-70, ...
                cellNumber = BOARD_SIZE - (i * NUM_COLS) - (NUM_COLS - 1 - j);
            }
            row.push(cellNumber);
        }
        displayCells.push(row);
    }


  return (
    <div className="grid grid-cols-10 border-4 border-yellow-700 rounded-lg shadow-2xl bg-board overflow-hidden aspect-square max-w-xl w-full mx-auto">
      
      
      
      {displayCells.flat().map((cellNumber) => {
        const playersOnCell = Object.entries(playerPositions)
          .filter(([_, pos]) => pos === cellNumber)
          .map(([playerId, _]) => parseInt(playerId));
        
        return (
          <Cell
            key={cellNumber}
            number={cellNumber}
            playersOnCell={playersOnCell}
            currentPlayerId={currentPlayer}
          />
        );
      })}
    </div>
  );
};

export default Board;