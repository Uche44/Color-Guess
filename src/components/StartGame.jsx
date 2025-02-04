const StartGame = ({ setHasNotStarted }) => {
  const startGame = () => {
    setHasNotStarted(false);
  };
  return (
    <div className="start">
      <button
        onClick={startGame}
        data-testid="newGameButton"
      >
        NEW GAME
      </button>
    </div>
  );
};

export default StartGame;
