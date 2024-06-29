import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import * as C from "./styles";

function Home() {
  return (
    <C.Container>
      <Header pageTitle="Conheça o comércio local" />

      {/* Barra de Pesquisa */}

      {/*<CommerceCard commerceName={'Bosco Restaurante'} description={'Restaurante em frente a UPE e oferece uma comida muito boa'}/>

            {/* Chat Bot */}

      <Footer />
    </C.Container>
  );
}

export default Home;
