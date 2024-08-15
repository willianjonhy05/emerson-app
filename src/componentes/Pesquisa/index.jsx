import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButaozinhoComIcon from '../MyButtonIcon';

export default function PesquisaMedica() {
  return (
    <Box
      component="form"
      sx={{
        backgroundColor: "white",
        '& > :not(style)': { m: 1, width: '40ch', padding: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Digite a sua especialidade" variant="outlined" />
      <TextField id="outlined-basic" label="Digite a sua localização" variant="outlined" />
      <ButaozinhoComIcon variant="contained" color="white" text="Buscar" />
      
    </Box>
  );
}
