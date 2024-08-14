import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import doutoraImage from '../../assets/doutora.png';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CardConsulta(props, tipo) {
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
                            {props.data}
                        </Typography>
                        <Typography sx={{ fontSize: 16 }} color="text.secondary">
                            {props.especialidade}
                        </Typography>
                    </Box>
                </Box>

                <Stack sx={{ marginTop: 2 }} direction="row" spacing={2}>
                    {props.detalhar ? (
                        <>
                            <Button sx={{ textTransform: 'none', color: "white", backgroundColor: "#0B3B60" }} variant="contained">Detalhes</Button>
                            <Button sx={{ textTransform: 'none', color: "white", backgroundColor: "#0B3B60" }} variant="contained">Remarcar</Button>
                            <Button sx={{ textTransform: 'none', color: "white", backgroundColor: "#893131" }} variant="contained">Cancelar</Button>
                        </>
                    ) : (
                        <>
                            <Button sx={{ textTransform: 'none', color: "white", backgroundColor: "#0B3B60" }} variant="contained">Detalhes</Button>
                            <Button sx={{ textTransform: 'none', color: "white", backgroundColor: "#0B3B60" }} variant="contained">Avaliar</Button>
                        </>
                    )}
                </Stack>

            </CardContent>
        </Card>
    );
}
