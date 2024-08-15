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
                <Typography
                    sx={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: "#0B3360",
                        marginBottom: 1,
                        textAlign: 'center',
                        marginBottom: 1,
                        marginTop: 1,
                    }}
                    gutterBottom
                >
                    Depoimentos
                </Typography>
                {props.depoimentos.map((item, index) => (
                    <div key={index}>
                        <Typography variant="body2">
                            {item.depoimento}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: "#6B6E71",
                                textAlign: 'center', 
                                marginBottom: 1,
                                marginTop: 2,
                            }}
                            color="text.secondary"
                            gutterBottom
                        >
                            {item.nomeCompleto}, {item.idade} anos, {item.cidadeUf}
                        </Typography>
                        <hr />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
