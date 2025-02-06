# Color Guessing Game

## Overview
The Color Guessing Game is a simple yet fun web-based game built with React. The goal is to correctly guess a randomly generated color by selecting one of six available color options. The game provides instant feedback on whether the selected choice is correct.

## Game Logic

### 1. **Generating a Random Color**
- When the game starts, a random color from the six colors is generated.
- This color is hidden at first so the player can make a guess.

### 2. **Creating Color Choices**
- Six colors are displayed as options.
- One of these options is the correct answer (the randomly generated color).

### 3. **User Interaction & Feedback**
- The player clicks on one of the six color choices.
- If the selection matches the generated color, a success message is displayed ("Correct!").
- If the selection is incorrect, a failure message is shown ("Wrong!").
- The game ends after ten guesses. 

### 4. **Restarting the Game**
- A "Play Again" button is provided.
- Clicking it resets the game and starts afresh.

## Features
- 🎨 **Random Color Generation**: Ensures a unique game experience each time.
- 🖌 **Six Answer Choices**: Adds variety and challenge.
- 🔄 **Play Again Option**: Allows continuous gameplay.
- ✅ **Instant Feedback**: Lets the user know if their choice was correct.

## How It Works (Code Logic)
1. **State Management**
   - React `useState` is used to store:
     - The correct color
     - The color choices
     - Feedback messages
     - Correct guesses
2. **Event Handling**
   - Clicking a color triggers a function to check if it's correct.
3. **Component Structure**
   - `ColorGuessGame.jsx`: Main game logic
   - `ColorSet`: Renders each selectable color, status messages, correct color and holds their logic
   - `StartGame.jsx`: Holds the start game functionality

## Future Enhancements
- 🎵 **Sound Effects** when selecting colors.
- ⏳ **Timer Mode** for an extra challenge.
- 🏆 **Difficulty Levels** to make it more challenging and interesting.

Let me know if you’d like any modifications! 🚀

