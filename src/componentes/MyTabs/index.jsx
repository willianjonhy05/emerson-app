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
          position: 'relative',
          flexDirection: 'column',
          padding: '16px 42px',
          textTransform: 'none',
          width: 56,
          height: 44, 
        }} 
        icon={<HomeIcon />} 
        label="Início" 
      />
      <Tab 
        sx={{ 
            color: 'white', 
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            flexDirection: 'column',
            padding: '16px 42px',
            textTransform: 'none',
            width: 56,
            height: 44, 
          }} 
        icon={<CalendarMonthIcon />} 
        label="Consultas" 
      />
      <Tab 
        sx={{ 
            color: 'white', 
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            flexDirection: 'column',
            padding: '16px 42px',
            textTransform: 'none',
            width: 56,
            height: 44, 
          }} 
        icon={<SearchIcon />} 
        label="Explorar" 
      />
      <Tab 
        sx={{ 
            color: 'white', 
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            flexDirection: 'column',
            padding: '16px 42px',
            textTransform: 'none',
            width: 56,
            height: 44, 
          }} 
        icon={<PersonIcon />} 
        label="Perfil" 
      />
    </Tabs>
  );
}
