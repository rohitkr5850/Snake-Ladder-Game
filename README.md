# Snake and Ladder Game

A modern, responsive implementation of the classic Snake and Ladder board game built with React, Vite, and Tailwind CSS.


## Features

- 🎲 Beautiful interactive dice with rolling animations
- 🎮 Two-player gameplay
- 🐍 Classic snakes that slide you down
- 🪜 Ladders to climb up
- 📱 Fully responsive design - play on any device
- 🎨 Modern UI with smooth animations
- 🎯 Clear player tokens with visual indicators

## Game Rules

1. Players start from position 1
2. Take turns rolling the dice
3. Move your token the number of spaces shown on the dice
4. Land on a ladder to climb up
5. Land on a snake head to slide down
6. First player to reach position 100 exactly wins
7. Must roll the exact number to land on 100, or stay in place

## Tech Stack

- React 
- Vite
- Tailwind CSS
- Modern JavaScript (ES6+)

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Snake-Ladder-Game
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

## Project Structure

```
src/
├── components/           # React components
│   ├── Board.jsx        # Game board component
│   ├── Cell.jsx         # Individual board cell
│   ├── Dice.jsx         # Interactive dice
│   ├── GameInfo.jsx     # Game status and messages
│   └── PlayerToken.jsx  # Player piece visualization
├── gameConfig.js        # Game configuration (board size, snakes, ladders)
├── App.jsx             # Main game logic
└── index.css          # Global styles including Tailwind
```

## Game Configuration

The game board is configured with:
- 10x10 grid (100 cells)
- Multiple snakes and ladders
- Two distinct player tokens
- Customizable board colors

## Contributing

Feel free to open issues and submit PRs to improve the game.


---

Built with ❤️ using React, Vite & Tailwind CSS