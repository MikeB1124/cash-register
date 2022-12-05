import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import CartItem from './CartItem';


function ShoppingCart({itemList, deleteFromCart}){
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0.0)
    const [taxTotal, setTaxtTotal] = useState(0.0)

    useEffect(() => {
        setItems(itemList)
        getTotals(itemList)
    }, [itemList])

    function getTotals(list){
        let grandTotalTax = 0.0
        let grandTotal = 0.0
    
        list.map((item) => {
            grandTotalTax += parseFloat(item.taxTotal)
            grandTotal += parseFloat(item.price)
        })
        setTotal(grandTotal)
        setTaxtTotal(grandTotalTax)
      }

    return(
        <div style={container}>
            <Typography style={{textAlign:"center", textAlign:"center", color:"white", fontWeight:"bold", marginBottom:"25px"}} variant="h2">Cart</Typography>
            <div style={{minHeight:"75%"}}>
                {
                    items.map((item, i) => (
                        <CartItem key={i} item={item} index={i} deleteFromCart={deleteFromCart}/>
                    ))
                }
            </div>
            <div style={{float:"right"}}>
                <Typography style={{color:"white", fontWeight:"bold"}} variant="h5">Tax: ${taxTotal}</Typography>
                <Typography style={{color:"white", fontWeight:"bold"}} variant="h5">Total: ${total}</Typography>
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