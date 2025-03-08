import { useEffect, useRef } from "react";

const BackgroundMusic = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("public/game.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.log("play failed");
      }
    };

    playAudio();

    return () => {
      audioRef.current.pause();
    };
  }, []);

  return <></>;
};

export default BackgroundMusic;
