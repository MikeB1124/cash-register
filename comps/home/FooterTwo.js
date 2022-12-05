import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Typography from '@mui/material/Typography';



function FooterTwo(){
    return(
        <div style={container}>
            <Button style={buttonStyle}>
                <HomeIcon style={iconStyle}/>
                <Typography style={menuLabel} variant="h7">Home</Typography>
            </Button>

            <Button>
                <PaidIcon style={iconStyle}/>
                <Typography style={menuLabel} variant="h7">Transactions</Typography>
            </Button>  

            <Button>
                <AssessmentIcon style={iconStyle}/>
                <Typography style={menuLabel} variant="h7">Reports</Typography>
            </Button>

        </div>
    )
}

export default FooterTwo

const container = {
    display:"flex",
    justifyContent:"center",
    gap:"60px"
}

const buttonStyle = {
    textAlign:"center"
}

const menuItem = {
    // textAlign:"center"
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