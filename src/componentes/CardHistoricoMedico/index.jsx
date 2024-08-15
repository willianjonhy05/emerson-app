import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ButtonCard from '../ButtonCard';

export default function HistoricoCard({ tipo, dados }) {
    const IconComponent = tipo === 'doencas' ? HealthAndSafetyIcon : MedicalInformationIcon;
    const titulo = tipo === 'doencas' ? "Histórico Médico" : "Histórico de Consultas";

    return (
        <Card sx={{ minWidth: 320, maxWidth: 340 }}>
            <CardContent>
                <Typography sx={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left', color: "#339CFF", display: 'flex', marginBottom: 1, gap:'5px' }} color="text.primary" gutterBottom>
                    <IconComponent /> {titulo}
                </Typography>

                {dados.map((item, index) => (
                    <div key={index}>
                        {tipo === 'doencas' ? (
                            <>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold', textAlign: 'left', marginLeft: 2 }} variant="h6" component="div">
                                    • {item.nome}
                                </Typography>
                                <Typography sx={{ fontSize: 14, textAlign: 'left', marginBottom: 1 }} color="text.secondary">
                                    Nível {item.nivel}
                                </Typography>
                            </>
                        ) : (
                            <>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold', textAlign: 'left', marginLeft: 2 }} variant="h6" component="div">
                                    • {item.nomeMedico}
                                </Typography>
                                <Typography sx={{ fontSize: 14, textAlign: 'left' }} color="text.secondary">
                                    Data: {item.data}
                                </Typography>
                                <Typography sx={{ fontSize: 14, textAlign: 'left', marginBottom: 1 }} color="text.secondary">
                                    Especialidade: {item.especialidade}
                                </Typography>
                            </>
                        )}
                    </div>
                ))}
                <ButtonCard backgroundColor="#0B3B60" color="white" text="Ver mais" />
            </CardContent>
        </Card>
    );
}
