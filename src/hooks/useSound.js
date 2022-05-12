import { useCallback, useEffect, useRef } from "react";

const useSound = (audioFile) => {
  const soundRef = useRef();

  useEffect(() => {
    if (soundRef) {
      soundRef.current = new Audio(audioFile);
      soundRef.current.preload = "auto";
    }
  }, [soundRef, audioFile]);

  const play = useCallback(
    (cb = null) => {
      if (soundRef?.current) {
        soundRef.current.play().then(() => cb && cb());
      }
    },
    [soundRef]
  );

  return {
    soundRef,
    play,
  };
};

export default useSound;
