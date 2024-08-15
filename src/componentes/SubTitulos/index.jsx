import * as React from 'react';
import Typography from '@mui/material/Typography';
import "@fontsource/public-sans/700.css"; 

export default function SubTitulo(props) {
    return (
        <Typography
            variant="h3"
            component="h3"
            sx={{
                fontFamily: 'Public Sans, sans-serif',                 
                fontWeight: 'bold',
                fontSize: '24px', 
                lineHeight: '21.9px', 
                color: "#339CFF",
            }}
        >
            {props.text}
        </Typography>
    );
}
