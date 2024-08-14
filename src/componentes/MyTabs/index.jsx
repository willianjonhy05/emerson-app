import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

export default function MyTabs() {

  return (
    <Tabs sx={{ justifyContent: 'center', backgroundColor: '#0B3B60' }} aria-label="icon label tabs example">
      <Tab 
        sx={{ 
          color: 'white', 
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }} 
        icon={<HomeIcon />} 
        label="Início" 
      />
      <Tab 
        sx={{ 
          color: 'white', 
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }} 
        icon={<CalendarMonthIcon />} 
        label="Consultas" 
      />
      <Tab 
        sx={{ 
          color: 'white', 
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
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
        }} 
        icon={<PersonIcon />} 
        label="Perfil" 
      />
    </Tabs>
  );
}
