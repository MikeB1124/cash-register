import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import CartItem from './CartItem';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import CashTransModal from './CashTransModal';
import CardTransModal from './CardTransModal';



function ShoppingCart({itemList, deleteFromCart, orderComplete}){
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0.0)
    const [taxTotal, setTaxtTotal] = useState(0.0)

    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
      ];

    useEffect(() => {
        setItems(itemList)
        getTotals(itemList)
    }, [itemList])

    function getTotals(list){
        let grandTotalTax = 0.0
        let grandTotal = 0.0
    
        list.map((item) => {
            grandTotalTax += parseFloat(item.tax)
            grandTotal += parseFloat(item.price)
        })
        setTotal((grandTotal + grandTotalTax).toFixed(2))
        setTaxtTotal(grandTotalTax.toFixed(2))
      }

    return(
        <div style={container}>
            <Typography style={{textAlign:"center", textAlign:"center", color:"white", fontWeight:"bold", marginBottom:"25px"}} variant="h2">Cart</Typography>
            <div style={{minHeight:"70%", maxHeight:"70%", overflow:"scroll"}}>
                {
                    items.map((item, i) => (
                        <CartItem key={i} item={item} index={i} deleteFromCart={deleteFromCart}/>
                    ))
                }
            </div>
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", margin:"20px 20px"}}>
                <div style={{display:"flex"}}>
                    <CashTransModal total={total} orderComplete={orderComplete}/>
                    <CardTransModal total={total}/>
                </div>

                <div>
                    <Typography style={{color:"white", fontWeight:"bold"}} variant="h4">Tax: ${taxTotal}</Typography>
                    <Typography style={{color:"white", fontWeight:"bold"}} variant="h4">Total: ${total}</Typography>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart

const container = {
    width:"50vw",
    // height:"90vh",
    borderLeft: "2px solid black"
    // padding:"16px"
}

const paymentButtonStyle = {
    borderRadius:"8px",
    backgroundColor:"green",
    color:"white",
    fontWeight:"bold",
    fontSize:"25px",
    margin:"0px 12px"
}