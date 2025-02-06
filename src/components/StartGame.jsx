const StartGame = ({ setHasNotStarted }) => {
  const startGame = () => {
    setHasNotStarted(false);
  };
  return (
    <div className="start">
      <button
        className="start-btn"
        onClick={startGame}
        data-testid="newGameButton"
      >
        NEW GAME
      </button>
    </div>
  );
};

export default StartGame;

// end component
export const EndGame = () => {
  return (
    <div className="restart">
      <button
        className="restart-btn"
        // onClick={startGame}
        data-testid="newGameButton"
      >
        PLAY AGAIN
      </button>
    </div>
  );
};
