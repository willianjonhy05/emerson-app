import Button from '@mui/material/Button';

export default function ButaoMedio(props) {
  return (
    <Button
      size="small"
      enabled 
      sx={{
        width: '126px', 
        height: '48px', 
        ml: '5px',
        borderRadius: '8px', 
        padding: '12px 16px', 
        gap: '10px', 
        backgroundColor: props.backcolor,
        color: props.color, 
        textTransform: 'none', 
      }}
    >
      {props.text}
    </Button>
  );
}

