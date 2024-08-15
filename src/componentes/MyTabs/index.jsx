import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

export default function MyTabs() {


  const navigateTo = useNavigate();

  const goToConsultas = () => {
      navigateTo("/consultas");
  };

  const goToHome = () => {
    navigateTo("/");
  }

  const goToMeuPerfil = () => {
    navigateTo("/meu-perfil");
  }



  return (
    <Tabs
      sx={{
        justifyContent: 'center',
        backgroundColor: '#0B3B60',
        display: 'flex',
        flexDirection: 'row',
      }}
      variant="fullWidth" // Torna as tabs responsivas
      aria-label="icon label tabs example"
    >
      <Tab
        sx={{
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textTransform: 'none',
        }}
        icon={<HomeIcon />}
        label="Início"
        onClick={goToHome}
      />
      <Tab
        sx={{
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textTransform: 'none',
        }}
        icon={<CalendarMonthIcon />}
        label="Consultas"
        onClick={goToConsultas}
      />
      <Tab
        sx={{
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textTransform: 'none',
        }}
        icon={<SearchIcon />}
        label="Explorar"
      />
      <Tab
        sx={{
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textTransform: 'none',
        }}
        icon={<PersonIcon />}
        label="Perfil"
        onClick={goToMeuPerfil}
      />
    </Tabs>
  );
}
