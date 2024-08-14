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

export default function CardFavorito() {
    return (
        <Card sx={{ minWidth: 320, maxWidth: 340, backgroundColor: "E7EBEF" }}>
            <CardContent>
                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 90, height: 90, borderRadius: '50%' }}
                        image={doutoraImage}
                        alt="Foto do Especialista"
                    />
                    <Checkbox
                        sx={{
                            position: 'absolute',
                            top: 3,
                            right: 3,
                            color: 'primary.main'
                        }}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} variant="h6" component="div">
                        Dr. Ana Lúcia
                    </Typography>
                    <Rating name="half-rating" defaultValue={5.0} precision={0.5} />
                </Box>
                <Typography sx={{ fontSize: 16, textAlign: 'left' }} color="text.secondary">
                    Angiologista
                </Typography>
                <Typography sx={{ fontSize: 16, textAlign: 'left' }} color="text.secondary">
                    São Paulo - SP
                </Typography>
                <ButtonCard backgroundColor="#0B3B60" color="white" text="Agendar consulta" />
            </CardContent>
        </Card>
    );
}
