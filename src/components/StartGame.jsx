import { useState, useRef, useEffect } from "react";
import { gameInstructions } from "../constants/gameInstructions";

const StartGame = ({ setHasNotStarted }) => {
  const [showInstructions, setShowInstructions] = useState(false);
  // const [userProfile, setUserProfile] = useState({
  //   image: "",
  //   username: "",
  // });

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

  const loadApp = async () => {
    // await sdk.actions.ready();
    const user = await sdk.context.user;
    console.log(user);
  };

  useEffect(() => {
    loadApp();
  }, []);

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
