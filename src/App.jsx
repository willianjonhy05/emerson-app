import './App.css'
import Butaozinho from './componentes/MyButton';

function App() {


  return (
    <>
      <Butaozinho text={'Clique aqui'} backcolor='#0B3B60' textcolor="white" />
      <Butaozinho text={'Clique aqui agora'} backcolor='white' textcolor="#0B3B60" />
      <Butaozinho text={'E aqui agora'} backcolor='#90989F' textcolor="white" />
    </>
  )
}

export default App
