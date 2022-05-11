import { useEffect, useRef } from "react";

const useSound = (audioFile) => {
  const soundRef = useRef();

  useEffect(() => {
    if (soundRef) {
      soundRef.current = new Audio(audioFile);
    }
  }, [soundRef, audioFile]);

  return {
    soundRef,
  };
};

export default useSound;
