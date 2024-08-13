import Button from '@mui/material/Button';

export default function ButaoSublinhado(props) {
  return (
    <Button
      size="small"
      sx={{
        color: props.color, 
        textTransform: 'none', 
        textDecoration: 'underline',
        '&:hover': {
          textDecoration: 'underline',
        }
      }}
    >
      {props.text}
    </Button>
  );
}

