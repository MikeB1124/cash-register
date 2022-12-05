import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreditCardIcon from '@mui/icons-material/CreditCard';

function CardTransModal({total}){
    const [open, setOpen] = useState(false);
    
    function openModal(){
        setOpen(true)
    }

    function closeModal(){
        setOpen(false)
    }

    return(
        <div>
            <div onClick={openModal} style={paymentButtonStyle}>
                <CreditCardIcon fontSize='larger'/>
                <Typography variant="h4" style={{fontWeight:"bold"}}>Card</Typography>
            </div>
            <Modal
                open={open}
                onClose={closeModal}
            >
                <Box sx={style}>
                <Typography variant="h6" component="h2" style={text}>
                    CARD TRANSACTION
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Coming Soon! STRIPE
                </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default CardTransModal

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const paymentButtonStyle = {
    borderRadius:"8px",
    backgroundColor:"green",
    color:"white",
    fontWeight:"bold",
    fontSize:"25px",
    margin:"0px 12px",
    pointer:"cursor",
    textAlign:"center",
    padding:"20px"
}

const text = {
    fontWeight:"bold"
}

