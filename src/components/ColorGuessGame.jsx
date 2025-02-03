import { useState } from "react";

const ColorSet = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const colors = ["red", "green", "orange", "pink", "brown", "blue"];
  const pickColor = (e) => {
    setSelectedColor(e.target.value);
  };
  return (
    <div>
      {colors.map((color, index) => (
        <button
          className="colors"
          key={index}
          style={{ backgroundColor: color }}
          value={color}
          onClick={pickColor}
        ></button>
      ))}
      <div
        style={{ backgroundColor: selectedColor }}
        className="color-board"
      ></div>
    </div>
  );
};

const ColorGuessGame = () => {
  return (
    <div>
      <ColorSet />
    </div>
  );
};

export default ColorGuessGame;
