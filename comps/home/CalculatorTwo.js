import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PercentIcon from '@mui/icons-material/Percent';

function CalculatorTwo(){
    return(
        <div style={container}>
            <div style={{display:"flex"}}>
                <div style={calculatorContainer}>
                    <div style={{display:"flex", justifyContent:"right"}}>
                        <Typography variant="h2" style={{color:"white", fontWeight:"bold", textAlign:"right"}}>$12.50</Typography>
                    </div>

                    <div style={{display:"flex"}}>
                        <Button style={taxButtons}>Tax</Button>
                        <Button style={taxButtons}>No Tax</Button>
                        <Button style={calculatorButtons}>C</Button>
                    </div>

                    <div style={{display:"flex"}}>
                        <Button style={calculatorButtons}>7</Button>
                        <Button style={calculatorButtons}>8</Button>
                        <Button style={calculatorButtons}>9</Button>
                    </div>

                    <div style={{display:"flex"}}>
                        <Button style={calculatorButtons}>4</Button>
                        <Button style={calculatorButtons}>5</Button>
                        <Button style={calculatorButtons}>6</Button>
                    </div>

                    <div style={{display:"flex"}}>
                        <Button style={calculatorButtons}>1</Button>
                        <Button style={calculatorButtons}>2</Button>
                        <Button style={calculatorButtons}>3</Button>
                    </div>

                    <div style={{display:"flex"}}>
                        <Button style={calculatorButtons}>0</Button>
                        <Button style={calculatorButtons}>00</Button>
                        <Button style={calculatorButtons}>.</Button>
                    </div>
                </div>

                <div>
                    <Button style={categoryButtons}>Breakfast</Button>
                    <Button style={categoryButtons}>Grill</Button>
                    <Button style={categoryButtons}>Deli</Button>
                    <Button style={categoryButtons}>Coffee</Button>
                    <Button style={categoryButtons}>Snacks</Button>
                    <Button style={transactionButtons}>Discount</Button>
                </div>
            </div>


        </div>
    )
}

export default CalculatorTwo

const container = {
    padding:"16px",
    width:"50vw"
}

const calculatorContainer = {
    // display:"flex",
    backgroundColor:"#1C1C1C",
    borderRadius:"16px",
    padding:"18px"
}

const calculatorButtons = {
    height:"100px",
    width:"100px",
    backgroundColor:"#505050",
    borderRadius:"12px",
    fontWeight:"bold",
    fontSize:"50px",
    color:"white",
    margin:"8px"
}

const categoryButtons = {
    height:"100px",
    width:"100px",
    backgroundColor:"#FF9500",
    borderRadius:"12px",
    fontWeight:"bold",
    fontSize:"15px",
    letterSpacing:"1px",
    color:"white",
    margin:"8px"
}

const transactionButtons = {
    height:"100px",
    width:"100px",
    backgroundColor:"grey",
    borderRadius:"12px",
    fontWeight:"bold",
    fontSize:"15px",
    letterSpacing:"1px",
    color:"white",
    margin:"8px"
}

const taxButtons = {
    height:"100px",
    width:"100px",
    backgroundColor:"#505050",
    borderRadius:"12px",
    fontWeight:"bold",
    fontSize:"25px",
    color:"white",
    margin:"8px"
}