
import './App.css'

import Products from './component/Products'
import products from './utilities/data'
import Navbar from './component/navbar'
import Cart from './component/Cart'
import { useState } from 'react'

function App() {


  const [cart,setCart] = useState([])


 function addCart(obj){

  let newobj = cart.find((ele) =>ele.title == obj.title)

  if(newobj){
   let newCart= cart.map((ele) => ele.title == newobj.title ? {...ele, qtn:ele.qtn + 1} : ele)
    setCart(newCart)
    }
    else{
      setCart([...cart,{...obj ,qtn:1}])
    }
 }
 console.log(cart)

  const logo = {
          img:"https://flowbite.com/docs/images/logo.svg",
          text: "flowbite"
  }

  return (
    <>
    <Cart cart={cart}/>
    <Navbar  logo={logo} len={products.length} cartlen={cart.length} />

    <Products data={products} addCart={addCart}/>

    </>
  )
}

export default App
