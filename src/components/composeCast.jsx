import sdk from "@farcaster/miniapp-sdk";
import { useState } from "react";
import { useUser } from "../userContext";

const ComposeCast = ({ correctGuesses }) => {
  const { user } = useUser();
  const [cast, setCast] = useState("");

  const addApp = () => {
    sdk.actions.addMiniApp();
  };

  const createCast = () => {
    const text = `🎯 I scored ${correctGuesses * 10} points! ${cast}`;

    sdk.actions.composeCast({
      text,
      embeds: ["https://color-guessing-game-jade.vercel.app/"],
    });

    setCast("");
  };

  return (
    <section className="cast">
      <img
        src={user.image}
        alt=""
        className="prof-image"
      />
      <textarea
        className="textarea"
        placeholder="Anything else?.."
        value={cast}
        maxLength={400}
        onChange={(e) => setCast(e.target.value)}
      ></textarea>

      <div>
        <button
          onClick={addApp}
          className="add action-btn"
        >
          Add Miniapp
        </button>
        <button
          onClick={createCast}
          className="share action-btn"
        >
          Share Miniapp
        </button>
      </div>
    </section>
  );
};

export default ComposeCast;
