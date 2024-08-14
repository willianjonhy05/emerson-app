import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import doutoraImage from '../../assets/doutora.png';
import ButtonCard from '../ButtonCard';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CardFavoritoDois(props, tipo) {
    return (
        <Card sx={{ minWidth: 320, maxWidth: 340, backgroundColor: "E7EBEF" }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 90, height: 90, borderRadius: '50%' }}
                        image={doutoraImage}
                        alt="Foto do Especialista"
                    />
                    <Box sx={{ marginLeft: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} variant="h6" component="div">
                            Dr. {props.nomeCompleto}
                        </Typography>
                        <Typography sx={{ fontSize: 16 }} color="text.secondary">
                            {props.especialidade}
                        </Typography>
                    </Box>
                </Box>

                <ButtonCard backgroundColor="#0B3B60" color="white" text="Agendar consulta" />

            </CardContent>
        </Card>
    );
}
