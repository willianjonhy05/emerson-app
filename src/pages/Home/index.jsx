import MyTabs from "../../componentes/MyTabs";
import Depoimentos from "../../componentes/Depoimentos";
import { useNavigate } from 'react-router-dom';
import ButtonCard from "../../componentes/ButtonCard";
import PesquisaMedica from "../../componentes/Pesquisa";
import { depoimentosData } from "../../moks/depoimentos";

function Home() {

    const navigateTo = useNavigate();

    const goToLogin = () => {
        navigateTo("/login");
    };


    return (
        <>
            <PesquisaMedica />
                <ButtonCard backgroundColor="#0B3B60" color="white" text="Login" onClick={goToLogin} />
            <Depoimentos depoimentos={depoimentosData} />
            <MyTabs />
        </>
    );
}

export default Home;
