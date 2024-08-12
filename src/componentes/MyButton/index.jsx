import Button from '@mui/material/Button';

export default function Butaozinho(props) {
  return (
    <Button 
      variant="contained" 
      size="large"
      sx={{
        width: '280px',
        height: '48px',
        mt: '20px', 
        ml: '20px', 
        borderRadius: '8px',
        padding: '12px 16px',
        gap: '10px',
        backgroundColor: props.backcolor,
        color: props.textcolor, 
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#09304E', 
        }
      }}
    >
      {props.text}
    </Button>
  );
}
