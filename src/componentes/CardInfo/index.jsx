import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >

    </Box>
);

export default function CardInfo() {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 300 }}>
            <CardContent>
                <Typography sx={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left', color: "#339CFF", display: 'flex', marginBottom: 1 }} color="text.primary" gutterBottom>
                    <PersonIcon />     Informações Pessoais
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', textAlign: 'left' }} variant="h6" component="div">
                    Joana Magalhães Souza
                </Typography>
                <Typography sx={{ fontSize: 14, textAlign: 'left' }} color="text.secondary">
                    28/08/1990
                </Typography>
                <Typography sx={{ fontSize: 14, textAlign: 'left' }} color="text.secondary">
                    São Paulo - SP
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 3 }} >
                    <Button variant="contained" sx={{
                        backgroundColor: "#0B3B60",
                        color: "white",
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: "#0B3B60",
                        }
                    }}>
                        Ver mais
                    </Button>
                </Typography>
            </CardContent>

        </Card>
    );
}