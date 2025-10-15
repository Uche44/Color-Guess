import { useEffect } from "react";
import "./App.css";
import sdk from "@farcaster/miniapp-sdk";
import ColorGuessGame from "./components/ColorGuessGame";
import { UserProvider } from "./userContext";
const App = () => {
  
  const loadApp = async () => {
    await sdk.actions.ready();
  };

  useEffect(() => {
    loadApp();
  }, []);

  return (
    <div>
      <UserProvider>
        <ColorGuessGame />
      </UserProvider>
    </div>
  );
};

export default App;
