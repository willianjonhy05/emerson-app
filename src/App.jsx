import './App.css'
import Butaozinho from './componentes/MyButton';
import ButaozinhoComIcon from './componentes/MyButtonIcon';
import FilterListIcon from '@mui/icons-material/FilterList';
import ButaoMedio from './componentes/MyButtonMedio';
import ButaoSublinhado from './componentes/ButtonSublinhado';
import CardInfo from './componentes/CardInfo';
import HistoricoMedico from './componentes/CardHistoricoMedico';
import CardConsulta from './componentes/CardConsultas';
import CardFavorito from './componentes/CardFavoritos';
import CardFavoritoDois from './componentes/CardFavoritosDois';
import MyTabs from './componentes/MyTabs';


function App() {

  const listdoencas = [
    { nome: 'Diabetes', nivel: 'Moderado' },
    { nome: 'Hipertensão', nivel: 'Grave' },
    { nome: 'Asma', nivel: 'Leve' },

];

  const consultas = [
    { nomeMedico: 'Dr. João Silva', data: '10/08/2020', especialidade: 'Cardiologia' },
    { nomeMedico: 'Dra. Maria Oliveira', data: '17/03/2019', especialidade: 'Endocrinologia' },
    { nomeMedico: 'Dr. William Sousa', data: '14/03/2024', especialidade: 'Clínico Geral de Nada' },
  ];


  return (
    <>
      <Butaozinho text={'Clique aqui'} backcolor='#0B3B60' textcolor="white" bordercolor='#0B3B60' />
      <Butaozinho text={'Clique aqui agora'} backcolor='white' textcolor="#0B3B60" bordercolor='#0B3B60'/>
      <Butaozinho text={'E aqui agora'} backcolor='#90989F' textcolor="white" bordercolor='#90989F' />
      <hr />
      <ButaoMedio text={'Label button'} backcolor='#0B3B60' color='white'  />
      <ButaoMedio text={'Label button'} backcolor='white' color='#90989F' />
      <ButaoMedio text={'Label button'} backcolor='#90989F' color='white' />
      <hr />
      <ButaozinhoComIcon text={"Clique"} textcolor="#0B3B60" variante='contained' color='white' size='small' icon={<FilterListIcon/ >}  />
      <hr />
      <ButaoSublinhado text={"Clique aqui"} color='white' />
      <ButaoSublinhado text={"Clique Aqui"} color="#0B3B60" />
      <hr />
      <CardInfo NomeCompleto={"Joana Magalhães Souza"} Data={"25/05/1990"} CidadeUf={"São Paulo-SP"} showTitle={true}  />
      <CardInfo NomeCompleto={"Joana Magalhães Souza"} Data={"25/05/1990"} CidadeUf={"São Paulo-SP"} showTitle={false}  />
      <hr />
      <HistoricoMedico tipo="doencas" dados={listdoencas} />
      <hr />
      <HistoricoMedico tipo="consults" dados={consultas} />
      <hr />
      <CardConsulta nomeCompleto={"Ana Lúcia"} data={"14/08/2023"} especialidade={"Angiologista"} detalhar={false} />
      <hr />
      <CardConsulta nomeCompleto={"Ana Lúcia"} data={"14/08/2023"} especialidade={"Angiologista"} detalhar={true} />
      <hr />
      <CardFavorito />
      <hr />
      <CardFavoritoDois nomeCompleto={"Ana Lúcia"} especialidade={"Angiologista"} />
      <hr />
      <MyTabs />
    </>
  )
}

export default App
