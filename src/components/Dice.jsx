import React, { useState, useEffect } from 'react';

const Dice = ({ onRoll, diceValue, rolling }) => {
  const [displayValue, setDisplayValue] = useState(diceValue);

  useEffect(() => {
    if (rolling) {
      let rollCount = 0;
      const interval = setInterval(() => {
        setDisplayValue(Math.floor(Math.random() * 6) + 1);
        rollCount++;
        if (rollCount > 10) { 
          clearInterval(interval);
          setDisplayValue(diceValue); 
        }
      }, 50);
      return () => clearInterval(interval);
    } else {
      setDisplayValue(diceValue);
    }
  }, [rolling, diceValue]);

  const diceFaceSrc = `/assets/dice-${displayValue}.svg`;

  return (
    <button
      onClick={onRoll}
      disabled={rolling}
      className={`w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg shadow-dice flex items-center justify-center
                  focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all duration-150
                  hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed
                  ${rolling ? 'animate-diceRoll' : ''}`}
    >
      <img 
        src={diceFaceSrc} 
        alt={`Dice showing ${displayValue}`} 
        className="w-16 h-16 md:w-20 md:h-20 object-contain"
      />
    </button>
  );
};

export default Dice;