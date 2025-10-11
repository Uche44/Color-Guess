import { useEffect } from "react";
import "./App.css";
import sdk from "@farcaster/miniapp-sdk";
import ColorGuessGame from "./components/ColorGuessGame";

const App = () => {
  const loadApp = async () => {
    await sdk.actions.ready();
  };

  useEffect(() => {
    loadApp();
  }, []);

  return (
    <div>
      <ColorGuessGame />
    </div>
  );
};

export default App;
