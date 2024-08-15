import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import doutoraImage from '../../assets/doutora.png';
import ButtonCard from '../ButtonCard';
import Stack from '@mui/material/Stack';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CardFavoritoTres(props) {
    return (
        <Card sx={{ minWidth: 320, maxWidth: 340, backgroundColor: "E7EBEF", alignItems: 'center' }}>
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
                            {props.nomeCompleto}
                        </Typography>
                        <Typography sx={{ fontSize: 16 }} color="text.secondary">
                            {props.especialidade}
                        </Typography>

                        {props.avaliacao && (
                            <Rating name="half-rating" defaultValue={5.0} precision={0.5} />
                        )}


                    </Box>
                </Box>

                {props.showButton && (
                    <ButtonCard backgroundColor="#0B3B60" color="white" text="Agendar consulta" />
                )}

            </CardContent>
        </Card>
    );
}
