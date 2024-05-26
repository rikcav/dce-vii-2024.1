import styled from 'styled-components';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

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

      {/* Barra de Pesquisa */}

      {/* Cards */}

      {/* Chat Bot */}

      <Footer/>
    </Main>
  )
}

export default App
