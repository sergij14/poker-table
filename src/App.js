import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import PokerTable from "./components/PokerTable";

function App() {
  return (
    <AppContainer>
      <PokerTable />
      <ToastContainer />
    </AppContainer>
  );
}

export const AppContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  background-color: #000;
`;

export default App;
