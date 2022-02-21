import styled from "styled-components";
import PokerTable from "./components/PokerTable";

function App() {
  return (
    <AppContainer>
      <PokerTable />
    </AppContainer>
  );
}

export const AppContainer = styled.div`
  color: white;
`;

export default App;
