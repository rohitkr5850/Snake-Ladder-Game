import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import Dice from './components/Dice';
import GameInfo from './components/GameInfo';
import { BOARD_SIZE, SNAKES, LADDERS } from './gameConfig';

const initialPlayerPositions = { 1: 1, 2: 1 };

function App() {
  const [playerPositions, setPlayerPositions] = useState(initialPlayerPositions);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [diceValue, setDiceValue] = useState(1); // Stores the actual rolled value
  const [message, setMessage] = useState('');
  const [winner, setWinner] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const handleRollDice = () => {
    if (winner || isRolling) return;

    setIsRolling(true);
    const roll = Math.floor(Math.random() * 6) + 1;

    // The Dice component handles its own animation based on `isRolling` and `diceValue`
    // We update `diceValue` here, and Dice component will pick it up after its animation cycle.
    // The game logic proceeds after a delay matching the animation.

    setTimeout(() => {
      setDiceValue(roll); // Set the final dice value for display and logic
      setIsRolling(false);

      let currentPosition = playerPositions[currentPlayer];
      let newPosition = currentPosition + roll;
      let turnMessage = `Player ${currentPlayer} rolled a ${roll}. `;

      // First check if the move is valid (not overshooting)
      if (newPosition > BOARD_SIZE) {
        newPosition = currentPosition;
        turnMessage += `Overshot! Staying at ${currentPosition}.`;
      } else {
        turnMessage += `Moved from ${currentPosition} to ${newPosition}.`;

        // Then check for ladders (ladders should be checked before snakes)
        if (LADDERS[newPosition]) {
          let oldPosition = newPosition;
          newPosition = LADDERS[newPosition];
          turnMessage += ` Yay! Climbed a ladder from ${oldPosition} up to ${newPosition}.`;
        }

        // Finally check for snakes
        if (SNAKES[newPosition]) {
          let oldPosition = newPosition;
          newPosition = SNAKES[newPosition];
          turnMessage += ` Oh no! Bitten by a snake at ${oldPosition}, down to ${newPosition}.`;
        }
      }

      setPlayerPositions(prev => ({ ...prev, [currentPlayer]: newPosition }));
      setMessage(turnMessage);

      if (newPosition === BOARD_SIZE) {
        setWinner(currentPlayer);
        setMessage(`Player ${currentPlayer} reached ${BOARD_SIZE} and Wins!`);
      } else {
        setCurrentPlayer(prev => (prev === 1 ? 2 : 1));
      }
    }, 800); // This timeout should roughly match the dice animation duration for smooth UX
  };

  const resetGame = () => {
    setPlayerPositions(initialPlayerPositions);
    setCurrentPlayer(1);
    setDiceValue(1);
    setMessage('');
    setWinner(null);
    setIsRolling(false);
  };

  // If you had an App.css, make sure to remove its import if it's not used.
  // import './App.css' 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-6 md:space-y-8">
      <header className="px-4 py-6 sm:py-8 md:py-10 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-yellow-400 tracking-wider"
          style={{ textShadow: '2px 2px #000, 4px 4px #E53E3E' }}
        >
          Snake & Ladder
        </h1>
      </header>

      <main className="flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-8 w-full max-w-6xl">
        <div className="w-full lg:w-3/5 order-2 lg:order-1">
          <Board playerPositions={playerPositions} currentPlayer={currentPlayer} />
        </div>

        <div className="w-full lg:w-2/5 order-1 lg:order-2 flex flex-col items-center space-y-6 md:space-y-8">
          <GameInfo
            currentPlayer={currentPlayer}
            message={message}
            winner={winner}
            onReset={resetGame}
          />
          <Dice onRoll={handleRollDice} diceValue={diceValue} rolling={isRolling} />
        </div>
      </main>

      <footer className="text-center text-gray-500 text-sm mt-auto pt-4">
        <p>Built with React, Vite & Tailwind CSS. Enjoy!</p>
      </footer>
    </div>
  );
}

export default App;