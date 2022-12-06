import styles from '../styles/Home.module.css'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Calculator from '../comps/home/Calculator'
import Footer from '../comps/home/Footer'
import ShoppingCart from '../comps/home/ShoppingCart'
import { useState } from 'react';

export default function Home() {
  const [itemList, setItemList] = useState([])

  function itemAddedToCart(item){
    setItemList([...itemList, item])
  }

  function deleteFromCart(index){
    let filteredList = itemList.filter((item, i) => i != index)
    setItemList(filteredList)
  }

  function orderComplete(){
    

    setItemList([])
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

