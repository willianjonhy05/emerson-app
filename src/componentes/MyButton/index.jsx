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
        border: '2px solid',
        borderColor: props.bordercolor, 
        ml: '20px', 
        borderRadius: '8px',
        padding: '12px 16px',
        gap: '10px',
        backgroundColor: props.backcolor,
        color: props.textcolor, 
        textTransform: 'none',
        '&:hover': {
          backgroundColor: props.backcolor, 
          borderColor: props.bordercolor,
        }
      }}
    >
      {props.text}
    </Button>
  );
}
