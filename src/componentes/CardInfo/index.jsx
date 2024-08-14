import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import ButtonCard from '../ButtonCard';


export default function CardInfo(props) {
    return (
        <Card sx={{ minWidth: 320, maxWidth: 340 }}>
            <CardContent>
                {props.showTitle && (
                    <Typography sx={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left', color: "#339CFF", display: 'flex', marginBottom: 1 }} color="text.primary" gutterBottom>
                        <PersonIcon /> Informações Pessoais
                    </Typography>
                )}
                <Typography sx={{ fontSize: 14, fontWeight: 'bold', textAlign: 'left' }} variant="h6" component="div">
                    {props.NomeCompleto}
                </Typography>
                <Typography sx={{ fontSize: 14, textAlign: 'left' }} color="text.secondary">
                    {props.Data}
                </Typography>
                <Typography sx={{ fontSize: 14, textAlign: 'left' }} color="text.secondary">
                    {props.CidadeUf}
                </Typography>
                <ButtonCard backgroundColor="#0B3B60" color="white" text="Ver mais" />
            </CardContent>
        </Card>
    );
}
