import { useState, useEffect } from "react";
import StartGame from "./StartGame";

const ColorSet = ({ setHasNotStarted, gameOver, setGameOver }) => {
  const colors = ["red", "green", "orange", "pink", "brown", "blue"];

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const [selectedColor, setSelectedColor] = useState("");
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [message, setMessage] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  // const [gameOver, setGameOver] = useState(false);
  // to select color randomly
  useEffect(() => {
    setIsRevealed(false);
  }, [targetColor]);

  const pickColor = (e) => {
    if (gameOver) return;

    const chosenColor = e.target.value;
    setSelectedColor(chosenColor);
    if (chosenColor === targetColor) {
      setMessage("correct!");
      setCorrectGuesses((prev) => prev + 1);
    } else {
      setMessage("wrong!");
    }
    setIsRevealed(true);
    setTotalGuesses((prev) => prev + 1);
    // new random color for next

    setTimeout(() => {
      if (totalGuesses + 1 >= 10) {
        setGameOver(true);

        setMessage("Game over");
      } else {
        setTargetColor(getRandomColor());
        setSelectedColor("");
        setMessage("");
      }
    }, 1000);
  };
  // to replay
  const resetGame = () => {
    setGameOver(false);
    setTargetColor(getRandomColor());
    setSelectedColor("");
    setCorrectGuesses(0);
    setTotalGuesses(0);
    setMessage("");
    setHasNotStarted((prev) => !prev);
  };

  return (
    <>
      <aside className="color-palette">
        {colors.map((color, index) => (
          <button
            className="colors"
            key={index}
            style={{ backgroundColor: color }}
            value={color}
            onClick={pickColor}
            data-testid="colorOption"
            disabled={gameOver}
          ></button>
        ))}
      </aside>
      <h1
        className="instruction"
        data-testid="gameInstructions"
      >
        Guess a Color
      </h1>

      <h4
        className="count-down"
        style={{ color: totalGuesses > 5 ? "red" : "#74480f" }}
      >
        {10 - totalGuesses}
      </h4>

      <h2
        className="message"
        data-testid="gameStatus"
        style={{ color: message == "wrong" ? "red" : "green" }}
      >
        {message}
      </h2>

      <div
        style={{ backgroundColor: selectedColor }}
        className="select-board"
      ></div>

      <div
        className="correct-display"
        style={{ backgroundColor: isRevealed ? targetColor : "" }}
        data-testid="colorBox"
      ></div>

      <div className="number-display">
        <h4
          className="number"
          data-test-id="score"
        >
          {correctGuesses}/10
        </h4>
      </div>
      {gameOver && (
        <div className="overlay">
          <button
            onClick={resetGame}
            className="restart"
          >
            Play Again
          </button>
        </div>
      )}
    </>
  );
};

const ColorGuessGame = () => {
  const [hasNotStarted, setHasNotStarted] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  return (
    <>
      {hasNotStarted ? (
        <StartGame setHasNotStarted={setHasNotStarted} />
      ) : (
        <ColorSet
          setHasNotStarted={setHasNotStarted}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      )}
    </>
  );
};

export default ColorGuessGame;
