import Titulo from "../../componentes/Title";
import ButaozinhoComIcon from "../../componentes/MyButtonIcon";
import SubTitulo from "../../componentes/SubTitulos";
import CardConsulta from "../../componentes/CardConsultas";
import MyTabs from "../../componentes/MyTabs";
import PesquisaMedica from "../../componentes/Pesquisa";
import { especialistasData } from "../../moks/especialistas";
import ListaDeConsultas from "../../componentes/ListaDeConsulta";
import doutoraImage from '../../assets/doutora.png';
import doutorImage from '../../assets/doutor_negro.png';
import doutoraImageDois from '../../assets/doutora_modelo.png';



function Consultas() {
    return (
        <>
            <Titulo text="Minhas consultas" />
            <PesquisaMedica />
            <ButaozinhoComIcon variant="contained" color="#0B3B60" text="Agendar outra consulta" />
            <SubTitulo text="Próximas consultas" />
            <CardConsulta nomeCompleto={"Ana Lúcia"} data={"03/03/2023"} especialidade={"Angiologista"} detalhar={true} />
            <hr />
            <SubTitulo text="Consultas passadas" />
            <ListaDeConsultas lista={especialistasData} /> 
            <MyTabs />
        </>
    );
}

export default Consultas;
