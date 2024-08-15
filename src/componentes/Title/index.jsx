import * as React from 'react';
import Typography from '@mui/material/Typography';
import "@fontsource/public-sans/700.css"; // Importa a fonte Public Sans

export default function Titulo(props) {
    return (
        <Typography
            variant="h1"
            component="h2"
            sx={{
                fontFamily: 'Public Sans, sans-serif',                 
                fontWeight: 'bold',
                fontSize: '24px', 
                lineHeight: '28.2px', 
                color: "#339CFF",
            }}
        >
            {props.text}
        </Typography>
    );
}
