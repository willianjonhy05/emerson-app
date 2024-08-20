import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import ButtonCard from '../ButtonCard';
import Stack from '@mui/material/Stack';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ListaDeConsultas(props) {
    return (
        <div>
            {props.lista.map((especialista, index) => (
                <Card key={index} sx={{ minWidth: 320, maxWidth: 340, backgroundColor: "E7EBEF", marginBottom: 2 }}>
                    <CardContent>
                        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 90, height: 90, borderRadius: '50%' }}
                                image={especialista.image}
                                alt={`Foto do ${especialista.nomeCompleto}`}
                            />

                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} variant="h6" component="div">
                                Dr. {especialista.nomeCompleto}
                            </Typography>
                            
                        </Box>
                        <Typography sx={{ fontSize: 16, textAlign: 'left' }} color="text.secondary">
                            {especialista.especialidade}
                        </Typography>
                        <Typography sx={{ fontSize: 16, textAlign: 'left' }} color="text.secondary">
                            {especialista.data}
                        </Typography>
                        <ButtonCard backgroundColor="#0B3B60" color="white" text="Agendar consulta" />
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
