import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PercentIcon from '@mui/icons-material/Percent';
import Alert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import {useEffect, useState} from 'react'

function Calculator({itemAddedToCart}){
    const [calculatorTotal, setCalculatorTotal] = useState("0")
    const [category, setCategory] = useState(null)
    const [itemList, setItemList] = useState([])

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    function numberPress(number){
        if(calculatorTotal == "0"){
            setCalculatorTotal(number)
        }else{
            setCalculatorTotal(calculatorTotal + number)
        }
    }

    function clearCalculator(){
        setCalculatorTotal("0")
        setCategory(null)
    }

    function handleCategory(itemCategory){
        setCategory(itemCategory)
    }

    function taxable(){
        if(category){
            let tax = (parseFloat(calculatorTotal) * 0.095).toFixed(2)
            let item = {
                "category": category,
                "price": parseFloat(calculatorTotal),
                "tax": parseFloat(tax),
                "total": parseFloat((parseFloat(calculatorTotal) + parseFloat(tax)).toFixed(2)),
                "taxable": true
            }
            setItemList([...itemList, item])
            itemAddedToCart(item)
            setCalculatorTotal("0")
            setCategory(null)
        }else{
            setErrorMessage("Must choose a category first")
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000)
        }
    }

    function nonTaxable(){
        if(category){
            let item = {
                "category": category,
                "price": parseFloat(calculatorTotal),
                "tax": 0.0,
                "total": parseFloat(calculatorTotal),
                "taxable": false
            }
            setItemList([...itemList, item])
            itemAddedToCart(item)
            setCalculatorTotal("0")
            setCategory(null)
        }else{
            setErrorMessage("Must choose a category first")
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000)
        }
    }

    return(
        <div style={container}>
            <div style={{display:"flex"}}>
                <div style={calculatorContainer}>
                    <div style={{display:"flex", justifyContent:"right"}}>
                        {category ? <Chip label={category} style={{color:"white", backgroundColor:"orange", fontWeight:"bold", letterSpacing:"1px"}}/> : <div></div>}
                    </div>

                    <div style={{display:"flex", justifyContent:"right"}}>
                        <Typography variant="h2" style={{color:"white", fontWeight:"bold", textAlign:"right"}}>${calculatorTotal}</Typography>
                    </div>

                    <div style={{display:"flex"}}>
                        <Button style={taxButtons} value="tax" onClick={taxable}>Tax</Button>
                        <Button style={taxButtons} value="no-tax" onClick={nonTaxable}>No Tax</Button>
                        <Button style={calculatorButtons} value="clear" onClick={clearCalculator}>C</Button>
                    </div>

                    <div style={{display:"flex"}}>
                        <Button style={calculatorButtons} value="7" onClick={(event) => numberPress(event.target.value)}>7</Button>
                        <Button style={calculatorButtons} value="8" onClick={(event) => numberPress(event.target.value)}>8</Button>
                        <Button style={calculatorButtons} value="9" onClick={(event) => numberPress(event.target.value)}>9</Button>
                    </div>

                    <div style={{display:"flex"}}>
                        <Button style={calculatorButtons} value="4" onClick={(event) => numberPress(event.target.value)}>4</Button>
                        <Button style={calculatorButtons} value="5" onClick={(event) => numberPress(event.target.value)}>5</Button>
                        <Button style={calculatorButtons} value="6" onClick={(event) => numberPress(event.target.value)}>6</Button>
                    </div>

                    <div style={{display:"flex"}}>
                        <Button style={calculatorButtons} value="1" onClick={(event) => numberPress(event.target.value)}>1</Button>
                        <Button style={calculatorButtons} value="2" onClick={(event) => numberPress(event.target.value)}>2</Button>
                        <Button style={calculatorButtons} value="3" onClick={(event) => numberPress(event.target.value)}>3</Button>
                    </div>

                    <div style={{display:"flex"}}>
                        <Button style={calculatorButtons} value="0" onClick={(event) => numberPress(event.target.value)}>0</Button>
                        <Button style={calculatorButtons} value="00" onClick={(event) => numberPress(event.target.value)}>00</Button>
                        <Button style={calculatorButtons} value="." onClick={(event) => numberPress(event.target.value)}>.</Button>
                    </div>
                    {error ? <Alert variant="filled" severity="error">{errorMessage}</Alert> : <div></div>}
                </div>

                <div>
                    <Button style={categoryButtons} value="Breakfast" onClick={(event) => handleCategory(event.target.value)}>Breakfast</Button>
                    <Button style={categoryButtons} value="Grill" onClick={(event) => handleCategory(event.target.value)}>Grill</Button>
                    <Button style={categoryButtons} value="Deli" onClick={(event) => handleCategory(event.target.value)}>Deli</Button>
                    <Button style={categoryButtons} value="Coffee" onClick={(event) => handleCategory(event.target.value)}>Coffee</Button>
                    <Button style={categoryButtons} value="Snacks" onClick={(event) => handleCategory(event.target.value)}>Snacks</Button>
                    <Button style={transactionButtons} value="Discount">Discount</Button>
                </div>
            </div>


        </div>
    )
}

export default Calculator

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
    height:"115px",
    width:"115px",
    backgroundColor:"#505050",
    borderRadius:"12px",
    fontWeight:"bold",
    fontSize:"50px",
    color:"white",
    margin:"8px"
}

const categoryButtons = {
    height:"115px",
    width:"115px",
    backgroundColor:"#FF9500",
    borderRadius:"12px",
    fontWeight:"bold",
    fontSize:"18px",
    letterSpacing:"1px",
    color:"white",
    margin:"8px"
}

const transactionButtons = {
    height:"115px",
    width:"115px",
    backgroundColor:"grey",
    borderRadius:"12px",
    fontWeight:"bold",
    fontSize:"18px",
    letterSpacing:"1px",
    color:"white",
    margin:"8px"
}

const taxButtons = {
    height:"115px",
    width:"115px",
    backgroundColor:"#505050",
    borderRadius:"12px",
    fontWeight:"bold",
    fontSize:"25px",
    color:"white",
    margin:"8px"
}