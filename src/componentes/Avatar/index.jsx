import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

export default function Avatar(props) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 90, height: 90, borderRadius: '50%' }}
                image={props.image}
                alt="Avatar"
            />
        </Box>
    );
}
