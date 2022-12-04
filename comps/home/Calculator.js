import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PercentIcon from '@mui/icons-material/Percent';

function Calculator(){
    return(
        <div style={container}>
            <Stack spacing={2} direction="row">

                <Stack spacing={2} direction="column" style={calculatorContainer}>
                    <Stack spacing={2} direction="row" style={{display:"flex", justifyContent:"right"}}>
                        <Typography variant="h1">$12.50</Typography>
                    </Stack>

                    <Stack spacing={2} direction="row">
                        <Button disabled style={taxButtons}>Tax</Button>
                        <Button style={taxButtons}>No Tax</Button>
                        <Button style={calculatorButtons}>C</Button>
                    </Stack>

                    <Stack spacing={2} direction="row">
                        <Button style={calculatorButtons}>7</Button>
                        <Button style={calculatorButtons}>8</Button>
                        <Button style={calculatorButtons}>9</Button>
                    </Stack>

                    <Stack spacing={2} direction="row">
                        <Button style={calculatorButtons}>4</Button>
                        <Button style={calculatorButtons}>5</Button>
                        <Button style={calculatorButtons}>6</Button>
                    </Stack>

                    <Stack spacing={2} direction="row">
                        <Button style={calculatorButtons}>1</Button>
                        <Button style={calculatorButtons}>2</Button>
                        <Button style={calculatorButtons}>3</Button>
                    </Stack>

                    <Stack spacing={2} direction="row">
                        <Button style={calculatorButtons}>0</Button>
                        <Button style={calculatorButtons}>00</Button>
                        <Button style={calculatorButtons}>.</Button>
                    </Stack>
                </Stack>

                <Stack spacing={2} direction="row" style={{display:"flex", alignSelf:"flex-end", marginBottom:"16px"}}>
                    <Stack spacing={2} direction="column">
                        <Button style={categoryButtons}>Breakfast</Button>
                        <Button style={categoryButtons}>Grill</Button>
                        <Button style={categoryButtons}>Deli</Button>
                        <Button style={categoryButtons}>Coffee</Button>
                        <Button style={categoryButtons}>Snacks</Button>
                        <Button style={transactionButtons}>Discount</Button>
                    </Stack>
                </Stack>
            </Stack>
        </div>
    )
}

export default Calculator

const container = {
    padding:"16px"
}

const calculatorContainer = {
    backgroundColor:"#1C1C1C",
    borderRadius:"16px",
    padding:"18px"
}

const calculatorButtons = {
    height:"135px",
    width:"135px",
    backgroundColor:"#505050",
    borderRadius:"12px",
    fontWeight:"bold",
    fontSize:"50px",
    color:"white"
}

const categoryButtons = {
    height:"135px",
    width:"135px",
    backgroundColor:"#FF9500",
    borderRadius:"12px",
    fontWeight:"bold",
    fontSize:"20px",
    letterSpacing:"1px",
    color:"white"
}

const transactionButtons = {
    height:"135px",
    width:"135px",
    backgroundColor:"grey",
    borderRadius:"12px",
    fontWeight:"bold",
    fontSize:"20px",
    letterSpacing:"1px",
    color:"white"
}

const taxButtons = {
    height:"135px",
    width:"135px",
    backgroundColor:"#505050",
    borderRadius:"12px",
    fontWeight:"bold",
    fontSize:"30px",
    color:"white"
}