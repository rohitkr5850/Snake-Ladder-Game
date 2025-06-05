export const BOARD_SIZE = 100;
export const NUM_ROWS = 10;
export const NUM_COLS = 10;

// Define snakes: { startPosition: endPosition }
export const SNAKES = {
  17: 7,
  54: 34,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  99: 78,
};

// Define ladders: { startPosition: endPosition }
export const LADDERS = {
  4: 14,
  9: 31,
  20: 38,
  28: 84,
  40: 59,
  51: 67,
  63: 81,
  71: 91,
};

export const PLAYER_COLORS = {
  1: 'player1', // Corresponds to Tailwind color
  2: 'player2',
};