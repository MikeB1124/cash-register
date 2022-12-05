import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function CartItem({item, index, deleteFromCart}){
    return(
        <div style={{display:"flex", jutifyContent:"center", gap:"50px"}}>
            <Button onClick={() => deleteFromCart(index)}><DeleteIcon style={{color:"red", width:"30px", height:"30px"}}/></Button>
            <Typography variant="h4" style={textStyle}>{item.category}</Typography>
            <Typography variant="h4" style={textStyle}>${item.price}</Typography>
        </div>
    )
}

export default CartItem

const textStyle = {
    fontWeight:"bold",
    color:"white",
    minWidth:"150px",
}