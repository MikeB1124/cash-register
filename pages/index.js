import Head from 'next/head'
import Image from 'next/image'
import Calculator from '../comps/home/Calculator'
import Footer from '../comps/home/Footer'
import ShoppingCart from '../comps/home/ShoppingCart'
import styles from '../styles/Home.module.css'
import Stack from '@mui/material/Stack';


import CalculatorTwo from '../comps/home/CalculatorTwo'
import FooterTwo from '../comps/home/FooterTwo'
import ShoppingCartTwo from '../comps/home/ShoppingCartTwo'

export default function Home() {
  return (
    <div style={{backgroundColor:"#505050"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
          <CalculatorTwo/>
          <ShoppingCartTwo/>
        </div>
        <FooterTwo/>
    </div>
  )
}


const homeContainerStyle = {
  // height:"92vh",
  // width:"100vw", 
  // display:"flex", 
  // alignItems:"flex-end"
}

const footerStyle = {
  // height:"8vh", 
  // width:"100vw"
}