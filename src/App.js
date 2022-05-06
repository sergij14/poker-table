import { useCallback, useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import PokerTable from "./components/PokerTable";

function App() {
  const appRef = useRef();

  const [scale, setScale] = useState("");

  const handleResize = useCallback(() => {
    let personalPromoScale = 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    let o_width = 1280;
    let o_height = 760;
    if (isMobile) {
      o_width = 1280;
      o_height = 760;
      if (height > width) {
        o_width = 400;
        o_height = 840;
      } else {
      }
    }
    let w_scale = 0;
    let h_scale = 0;
    let m_scale = 0;
    w_scale = width / o_width;
    h_scale = height / o_height;
    m_scale = Math.min(w_scale, h_scale);
    personalPromoScale = m_scale;
    if (personalPromoScale > 1) personalPromoScale = 1;
    setScale(`${personalPromoScale} , ${personalPromoScale}`);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, true);
    window.addEventListener("load", handleResize, true);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <AppContainer ref={appRef} scale={scale}>
        <PokerTable />
      </AppContainer>
      <ToastContainer />
    </>
  );
}

export const AppContainer = styled.div`
  color: white;
  display: flex;
  transform: ${({ scale }) => `scale(${scale})`};
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-color: #000;
`;

export default App;
