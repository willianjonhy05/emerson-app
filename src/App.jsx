import './App.css'
import Butaozinho from './componentes/MyButton';
import ButaozinhoComIcon from './componentes/MyButtonIcon';
import FilterListIcon from '@mui/icons-material/FilterList';
import ButaoMedio from './componentes/MyButtonMedio';
import ButaoSublinhado from './componentes/ButtonSublinhado';
import CardInfo from './componentes/CardInfo';




function App() {


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
      <CardInfo />
    </>
  )
}

export default App
