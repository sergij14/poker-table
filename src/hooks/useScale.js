import { useCallback, useLayoutEffect, useState } from "react";

const useScale = (innerWidth, innerHeight) => {
  const [scale, setScale] = useState("");

  const handleResize = useCallback(() => {
    let personalPromoScale = 1;

    let o_width = 1280;
    let o_height = 760;
    let w_scale = 0;
    let h_scale = 0;
    let m_scale = 0;
    w_scale = innerWidth / o_width;
    h_scale = innerHeight / o_height;
    m_scale = Math.min(w_scale, h_scale);
    personalPromoScale = m_scale;
    if (personalPromoScale > 1) personalPromoScale = 1;
    setScale(`${personalPromoScale} , ${personalPromoScale}`);
  }, [innerWidth, innerHeight]);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize, true);
    window.addEventListener("load", handleResize, true);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, [handleResize]);

  return {
    scale,
  };
};

export default useScale;
