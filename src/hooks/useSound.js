import { useCallback, useEffect, useRef } from "react";

const useSound = (audioFile) => {
  const soundRef = useRef();

  useEffect(() => {
    if (soundRef) {
      soundRef.current = new Audio(audioFile);
    }
  }, [soundRef, audioFile]);

  const play = useCallback(() => {
    if (soundRef?.current) {
      soundRef.current.play();
    }
  }, [soundRef]);

  return {
    soundRef,
    play,
  };
};

export default useSound;
