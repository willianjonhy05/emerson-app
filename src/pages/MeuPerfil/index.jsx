import Titulo from "../../componentes/Title"
import MyTabs from "../../componentes/MyTabs"
import Avatar from "../../componentes/Avatar"
import Perfil from "../../assets/japa.png"




function MeuPerfil() {
    return (
        <>
            <Titulo text="Meu Perfil" />
            <Avatar image={Perfil} />
            <MyTabs />

        </>
    )

}

export default MeuPerfil