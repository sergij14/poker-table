import React, { useEffect, useState } from "react";
import { useWindowSize } from "rooks";
import styled from "styled-components";
import PokerTable from "./components/PokerTable";
import TableContextProvider from "./context/TableContext";
import useScale from "./hooks/useScale";

const delay = () => new Promise((resolve) => setTimeout(() => resolve(), 1000));

function App() {
  const { innerWidth, innerHeight } = useWindowSize();
  const { scale } = useScale(innerWidth, innerHeight);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    delay().then(() => {
      setIsloading(true);
    });
  }, []);

  return (
    <TableContextProvider>
      {isLoading ? (
        <AppContainer scale={scale}>
          <PokerTable />
        </AppContainer>
      ) : <Loader>Loading...</Loader>}
    </TableContextProvider>
  );
}

export const AppContainer = styled.div`
  color: white;
  display: flex;
  transform: ${({ scale }) => `scale(${scale})`};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

const Loader = styled.div`
  text-align: center;
  color: white;
  padding: 4rem 0;
`

export default App;
