import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function ShoppingCartTwo(){
    return(
        <div style={container}>
            <Typography style={{textAlign:"center", textAlign:"center", color:"white", fontWeight:"bold"}} variant="h2">Shopping Cart</Typography>
        </div>
    )
}

export default ShoppingCartTwo

const container = {
    width:"50vw",
    borderLeft: "2px solid black"
    // padding:"16px"
}