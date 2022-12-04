import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Typography from '@mui/material/Typography';



function Footer(){
    return(
        <div style={footerContainer}>
            <Stack style={{display:"flex", justifyContent:"center", gap:"60px"}} spacing={2} direction="row">
                <div style={menuItem}>
                    <Button><HomeIcon style={iconStyle}/></Button>
                    <Typography style={menuLabel} variant="h7">Home</Typography>
                </div>
                <div style={menuItem}>
                    <Button><PaidIcon style={iconStyle}/></Button>
                    <Typography style={menuLabel} variant="h7">Transactions</Typography>
                </div>
                <div style={menuItem}>
                    <Button><AssessmentIcon style={iconStyle}/></Button>
                    <Typography style={menuLabel} variant="h7">Reports</Typography>
                </div>
            </Stack>
        </div>
    )
}

export default Footer

const footerContainer = {
    height:"7vh",
    width:"100vw",
    backgroundColor:"white"
}

const menuItem = {
    textAlign:"center"
}

const menuLabel = {
    textAlign:"center",
    fontWeight:"bold",
    color:"black"
}

const iconStyle = {
    color:"black",
    width:"35px",
    height: "35px"
}