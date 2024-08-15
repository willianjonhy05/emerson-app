import Titulo from "../../componentes/Title"
import ButaozinhoComIcon from "../../componentes/MyButtonIcon"
import SubTitulo from "../../componentes/SubTitulos"
import CardConsulta from "../../componentes/CardConsultas"
import MyTabs from "../../componentes/MyTabs"
import PesquisaMedica from "../../componentes/Pesquisa";


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
            <MyTabs />
        </>
    )

}

export default Consultas