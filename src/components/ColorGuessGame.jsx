import { useState, useEffect } from "react";
import StartGame from "./StartGame";
const ColorSet = ({ setHasNotStarted }) => {
  const colors = ["red", "green", "orange", "pink", "brown", "blue"];

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const [selectedColor, setSelectedColor] = useState("");
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [message, setMessage] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  // to select color randomly
  useEffect(() => {
    setIsRevealed(false);
  }, [targetColor]);

  const pickColor = (e) => {
    const chosenColor = e.target.value;
    setSelectedColor(chosenColor);
    if (chosenColor === targetColor) {
      setMessage("correct!");
    } else {
      setMessage("wrong");
    }
    setIsRevealed(true);
    setTotalGuesses((prev) => prev + 1);
    // new random color for next
    setTimeout(() => {
      if (totalGuesses + 1 >= 10) {
        setGameOver(true);
        // setHasNotStarted((prev) => !prev);
        setMessage("Game over");
      } else {
        setTargetColor(getRandomColor());
        setSelectedColor("");
        setMessage("");
      }
    }, 1000);
  };

  return (
    <>
      <h2>{message}</h2>
      <aside className="color-palette">
        {colors.map((color, index) => (
          <button
            className="colors"
            key={index}
            style={{ backgroundColor: color }}
            value={color}
            onClick={pickColor}
            data-testid="colorOption"
          ></button>
        ))}
      </aside>
      <div
        style={{ backgroundColor: selectedColor }}
        className="select-board"
      ></div>
      <div
        className="correct-display"
        style={{ backgroundColor: isRevealed ? targetColor : "" }}
        data-testid="colorBox"
      ></div>
    </>
  );
};

const ColorGuessGame = () => {
  const [hasNotStarted, setHasNotStarted] = useState(true);
  return (
    <>
      {hasNotStarted ? (
        <StartGame setHasNotStarted={setHasNotStarted} />
      ) : (
        <ColorSet setHasNotStarted={setHasNotStarted} />
      )}
    </>
  );
};

export default ColorGuessGame;
