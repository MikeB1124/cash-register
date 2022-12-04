import Head from 'next/head'
import Image from 'next/image'
import Calculator from '../comps/home/Calculator'
import Footer from '../comps/home/Footer'
import ShoppingCart from '../comps/home/ShoppingCart'
import styles from '../styles/Home.module.css'
import Stack from '@mui/material/Stack';


export default function Home() {
  return (
    <div style={{width:"100vw", height:"100vh"}}>
      <div style={homeContainerStyle}>
        <Stack spacing={2} direction="row">
          <Stack spacing={2} direction="column">
            <Calculator/>
          </Stack>
          <Stack spacing={2} direction="column">
            <ShoppingCart/>
          </Stack>
        </Stack>
      </div>

      <div style={footerStyle}>
        <Footer/>
      </div>
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
  width:"100vw"
}