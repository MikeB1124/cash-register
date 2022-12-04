import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function ShoppingCart(){
    return(
        <div style={container}>
            <Typography style={{textAlign:"center"}} variant="h2">Shopping Cart</Typography>
        </div>
    )
}

export default ShoppingCart

const container = {
    width:"50vw"
}