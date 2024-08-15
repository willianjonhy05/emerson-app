import MyTabs from "../../componentes/MyTabs";
import Depoimentos from "../../componentes/Depoimentos";

import { depoimentosData } from "../../moks/depoimentos";
import Titulo from "../../componentes/Title";

function Home() {


    return (
        <>
            <Titulo text="Boas-vindas" />
            
            <Depoimentos depoimentos={depoimentosData} />
            <MyTabs />
        </>
    );
}

export default Home;
