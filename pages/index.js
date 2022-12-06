import styles from '../styles/Home.module.css'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Calculator from '../comps/home/Calculator'
import Footer from '../comps/home/Footer'
import ShoppingCart from '../comps/home/ShoppingCart'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { postTransaction, getTransactions } from '../database/controllers/transactions';


export default function Home() {
  const [itemList, setItemList] = useState([])

  const [total, setTotal] = useState(0.0)
  const [taxTotal, setTaxTotal] = useState(0.0)

  function itemAddedToCart(item){
    setItemList([...itemList, item])
  }

  function deleteFromCart(index){
    let filteredList = itemList.filter((item, i) => i != index)
    setItemList(filteredList)
  }

  function orderComplete(orderStatus){
    let totals = transactionTotal()
    let transaction = {
      orderId: uuidv4(),
      items: itemList,
      status: orderStatus,
      tax: totals.tax.toFixed(2),
      total: totals.total.toFixed(2)
    }
    // console.log(transaction)
    postTransaction(transaction)
    setItemList([])
  }

  function transactionTotal(){
    let tax = 0.0
    let orderTotal = 0.0
    itemList.map((item) => {
      tax = tax + item.tax
      orderTotal = orderTotal + item.total
    })
    return {"tax": tax, "total": orderTotal}
  }


  return (
    <div style={{backgroundColor:"#505050"}}>
        <div style={{display:"flex", justifyContent:"space-around", padding:"8px"}}>
          <Calculator itemAddedToCart={itemAddedToCart}/>
          <ShoppingCart itemList={itemList} deleteFromCart={deleteFromCart} orderComplete={orderComplete}/>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

