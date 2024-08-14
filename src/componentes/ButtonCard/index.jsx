import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ButtonCard(props) {
    return ( 
        <Typography variant="body2" sx={{ marginTop: 3 }} >
        <Button variant="contained" sx={{
            backgroundColor: props.backgroundColor,
            borderRadius: '8px',
            color: props.color,
            textTransform: 'none',
            width: '280px',
            height: '48px',
            '&:hover': {
                backgroundColor: "#0B3B60",
            }
        }}>
            {props.text}
        </Button>
    </Typography>
    )
}