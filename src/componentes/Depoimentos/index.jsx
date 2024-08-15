import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function Depoimentos(props) {
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: "#339CFF", display: 'flex', marginBottom: 1 }} color="text.primary" gutterBottom>
                    Depoimentos
                </Typography>
                {props.depoimentos.map((item, index) => (
                    <div key={index}>
                        <Typography variant="body2">
                            {item.depoimento}
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left', color: "#339CFF", display: 'flex', marginBottom: 1 }} color="text.secondary" gutterBottom>
                            {item.nomeCompleto},  {item.idade} anos, {item.cidadeUf}
                        </Typography>
                        <hr />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
