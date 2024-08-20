import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate, useLocation } from 'react-router-dom';

export default function MyTabs() {
  const navigate = useNavigate();
  const location = useLocation();
  

  const currentPath = location.pathname;
  

  const getTabValue = () => {
    switch (currentPath) {
      case '/consultas':
        return 1;
      case '/meu-perfil':
        return 3;
      case '/resultados':
        return 2;
      default:
        return 0; 
    }
  };

  const [value, setValue] = React.useState(getTabValue());

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/consultas");
        break;
      case 2:
        navigate("/resultados");
        break;
      case 3:
        navigate("/meu-perfil");
        break;
      default:
        break;
    }
  };

  const iconColor = (selected) => (selected ? '#339CFF' : 'white');

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      sx={{
        backgroundColor: '#0B3B60',
        display: 'flex',
        flexDirection: 'row',
      }}
      variant="fullWidth"
      aria-label="icon label tabs example"
    >
      <Tab
        sx={{
          color: iconColor(value === 0),
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textTransform: 'none',
        }}
        icon={<HomeIcon />}
        label="Início"
      />
      <Tab
        sx={{
          color: iconColor(value === 1),
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textTransform: 'none',
        }}
        icon={<CalendarMonthIcon />}
        label="Consultas"
      />
      <Tab
        sx={{
          color: iconColor(value === 2),
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
          color: iconColor(value === 3),
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textTransform: 'none',
        }}
        icon={<PersonIcon />}
        label="Perfil"
      />
    </Tabs>
  );
}
