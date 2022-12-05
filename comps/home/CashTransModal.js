import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import PaymentsIcon from '@mui/icons-material/Payments';


function CashTransModal({total, orderComplete}){
    const [open, setOpen] = useState(false);
    const [customerChange, setCustomerChange] = useState(0.0)
    const [showChange, setShowChange] = useState(false)

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const bills = [
        {label:"$1", value:1},
        {label:"$5", value:5},
        {label:"$10", value:10},
        {label:"$20", value:20},
        {label:"$50", value:50},
        {label:"$100", value:100},
    ]
    
    function openModal(){
        if(total > 0){
            setOpen(true)
        }
    }

    function closeModal(){
        setOpen(false)
        
        if(customerChange != 0){
            setShowChange(false)
            orderComplete()
        }
    }

    function handleBillClick(bill){
        if((bill - parseFloat(total) > 0.0)){
            let change = bill - parseFloat(total)
            setCustomerChange(change.toFixed(2))
            setShowChange(true)
        }else{
            setErrorMessage("Need a bigger bill")
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000)
        }
    }

    return(
        <div>
            <div onClick={openModal} style={paymentButtonStyle}>
                <PaymentsIcon fontSize='larger'/>
                <Typography variant="h4" style={{fontWeight:"bold"}}>Cash</Typography>
            </div>
            <Modal
                open={open}
                onClose={closeModal}
            >
                <Box sx={style}>
                    {error ? <Alert variant="filled" severity="error">{errorMessage}</Alert> : <div></div>}
                    {!showChange ? <Typography variant="h3" component="h2" style={text}>Choose Bill</Typography> : <div></div>}
                    {
                        !showChange ? 
                        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                            {
                                bills.map((bill) => (
                                    <Button variant="outlined" style={billButton} key={bill.value} value={bill.value} onClick={(e) => handleBillClick(e.target.value)}>{bill.label}</Button>
                                ))
                            }
                        </div> : 
                        <div>
                            <Typography variant="h2" component="h2" style={text}>Total Change</Typography>
                            <Typography variant="h3" style={changeText}>${customerChange}</Typography>
                        </div>
                    }
                </Box>
            </Modal>
        </div>
    )
}

export default CashTransModal

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
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
    fontWeight:"bold",
    textAlign:"center"
}

const changeText = {
    fontWeight:"bold",
    textAlign:"center"
}

const billButton = {
    color:"green",
    fontSize:"40px",
    fontWeight:"bold",
    border:"1px solid green",
    margin: "8px",
    minWidth:"100px",
}