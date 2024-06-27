import { CommerceCard } from '../../components/CommerceCard';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import * as C from './styles';

function Home() {
    return (
        <>
        <Header/>

        {/* Barra de Pesquisa */}

        <CommerceCard commerceName={''} description={''}/>

        {/* Chat Bot */}

        <Footer/>
        </>
    )

}

export default Home