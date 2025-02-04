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
