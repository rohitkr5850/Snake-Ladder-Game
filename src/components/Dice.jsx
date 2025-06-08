import React, { useState, useEffect } from 'react';

const Dice = ({ onRoll, diceValue, rolling }) => {
  const [displayValue, setDisplayValue] = useState(diceValue);

  useEffect(() => {
    if (rolling) {
      let rollCount = 0;
      const interval = setInterval(() => {
        setDisplayValue(Math.floor(Math.random() * 6) + 1);
        rollCount++;
        if (rollCount > 8) { 
          clearInterval(interval);
          setDisplayValue(diceValue);
        }
      }, 80);
      return () => clearInterval(interval);
    } else {
      setDisplayValue(diceValue);
    }
  }, [rolling, diceValue]);

  const diceFaceSrc = `/assets/dice-${displayValue}.svg`;

  return (
    <div className="relative p-2">
      {/* Outer glow effect */}
      <div className={`absolute inset-0 bg-yellow-400/20 rounded-2xl blur-xl transition-opacity duration-300
                    ${rolling ? 'opacity-100' : 'opacity-0'}`} />

      {/* 3D effect container */}
      <div className="relative transform-gpu">
        {/* 3D perspective wrapper */}
        <div className={`transform-gpu transition-transform duration-300 
                      ${rolling ? 'rotate-y-180' : ''}`}>

          {/* Main dice button */}
          <button
            onClick={onRoll}
            disabled={rolling}
            className={`relative w-24 h-24 md:w-28 md:h-28 
                      bg-gradient-to-br from-yellow-50 via-white to-yellow-100
                      rounded-2xl
                      shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.1),_inset_2px_2px_4px_rgba(255,255,255,0.9),_0_8px_20px_-4px_rgba(0,0,0,0.2)]
                      flex items-center justify-center 
                      transform-gpu transition-all duration-300 ease-out
                      hover:shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.1),_inset_2px_2px_4px_rgba(255,255,255,0.9),_0_12px_24px_-4px_rgba(0,0,0,0.3)]
                      hover:from-white hover:to-yellow-50
                      active:scale-95 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),_inset_-2px_-2px_4px_rgba(255,255,255,0.9)]
                      disabled:opacity-70 disabled:cursor-not-allowed
                      ${rolling ? 'animate-subtle-roll' : ''}`}
            style={{
              borderTop: '2px solid rgba(255,255,255,0.8)',
              borderLeft: '2px solid rgba(255,255,255,0.6)',
              borderRight: '2px solid rgba(0,0,0,0.05)',
              borderBottom: '2px solid rgba(0,0,0,0.1)',
            }}
          >
            {/* Dice dots/number image */}
            <div className={`relative w-20 h-20 md:w-24 md:h-24 p-2
                          bg-gradient-to-br from-white via-yellow-50/50 to-yellow-100/50
                          rounded-xl
                          transition-transform duration-300 ease-out
                          ${rolling ? 'scale-90' : 'hover:scale-105'}`}>
              <img
                src={diceFaceSrc}
                alt={`Dice showing ${displayValue}`}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dice;