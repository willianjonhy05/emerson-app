import Button from '@mui/material/Button';


export default function ButaozinhoComIcon(props) {
  return (
      <Button 
      variant={props.variant} 
      size={props.size}
      endIcon={props.icon}
      sx={{
        color: props.textcolor, 
        textTransform: 'none',
        border: '1px solid',
        backgroundColor: props.color,
        borderRadius: 2,
        '&:hover':{
            backgroundColor: '#FFFFFF',
            color: props.colorHover
        }
      }}
      >
      {props.text}
      </Button>
  );
}




