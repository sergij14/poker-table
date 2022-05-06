import React from "react";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import PokerTable from "./components/PokerTable";
import TableContextProvider from "./contexts/TableContext";
import useScale from "./hooks/useScale";

function App() {
  const { scale } = useScale();

  return (
    <>
      <TableContextProvider>
        <AppContainer scale={scale}>
          <PokerTable />
        </AppContainer>
        <ToastContainer />
      </TableContextProvider>
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
