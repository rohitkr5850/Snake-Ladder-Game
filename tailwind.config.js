/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        board: '#F3E5AB', // A nice parchment/wooden board color
        cellEven: '#DCCB9A',
        cellOdd: '#E6D5B8',
        player1: '#E53E3E', // Red
        player2: '#38A169', // Green
        snakeHead: '#D9534F',
        snakeBody: '#E07A5F',
        ladder: '#5CB85C',
      },
      fontFamily: {
        'display': ['"Luckiest Guy"', 'cursive'], // A playful font
        'body': ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'dice': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 -2px 4px rgba(0,0,0,0.1)',
        'player': '0 2px 4px rgba(0,0,0,0.2)',
      },
      keyframes: {
        diceRoll: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(15deg) scale(1.1)' },
          '50%': { transform: 'rotate(-15deg) scale(1.1)' },
          '75%': { transform: 'rotate(5deg) scale(1.05)' },
        },
        playerMove: {
          '0%': { transform: 'scale(1)', opacity: 0.8 },
          '50%': { transform: 'scale(1.3) translateY(-10px)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 0.8 },
        },
        winEffect: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        diceRoll: 'diceRoll 0.5s ease-in-out',
        playerMove: 'playerMove 0.6s ease-in-out',
        winEffect: 'winEffect 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}