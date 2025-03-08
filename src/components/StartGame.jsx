import { useState, useRef } from "react";

const StartGame = ({ setHasNotStarted }) => {
  const [showInstructions, setShowInstructions] = useState(false);

  const gameInstructions = [
    "Click on the start button to begin the game",
    "Once the game starts, a color is randomly selected",
    "You are to guess the selected color by clicking on the color palettes",
    "After each coice you make, another color is selected. You are allowed a maximum of ten guesses",
    "May the best man win. Goodluck!!",
  ];

  const audioRef = useRef(null);

  audioRef.current = new Audio("/game.mp3");
  audioRef.current.loop = true;
  audioRef.current.volume = 0.5;

  const playAudio = async () => {
    try {
      await audioRef.current.play();
    } catch (error) {
      console.log(error);
    }
    setHasNotStarted(false);
  };

  return (
    <div className="start">
      <button
        onClick={() => setShowInstructions(true)}
        className="game-instructions-btn"
      >
        HOW TO PLAY
      </button>
      {showInstructions && (
        <div className="overlay">
          <button
            onClick={() => setShowInstructions(false)}
            className="close-instr-btn"
          >
            X
          </button>

         
          <ul className="instruction">
            {gameInstructions.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
       
        </div>
      )}
      <button
        className="start-btn"
        onClick={playAudio}
        data-testid="newGameButton"
      >
        NEW GAME
      </button>
    </div>
  );
};

export default StartGame;
