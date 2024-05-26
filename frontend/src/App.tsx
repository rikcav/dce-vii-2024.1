import styled from 'styled-components';
import { Header } from './components/Header';

const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {

  return (
    <Main>
      <Header/>
    </Main>
  )
}

export default App
