
import './App.css'

import Products from './component/Products'
import products from './utilities/data'
import Navbar from './component/navbar'
import Cart from './component/Cart'
import { useEffect, useState } from 'react'

function App() {


  const [cart,setCart] = useState([])

   const logo = {
          img:"https://flowbite.com/docs/images/logo.svg",
          text: "flowbite"
   }

  function setLocal(newCart){
    localStorage.setItem("cart", JSON.stringify(newCart))
    getCart()
  }


  function getCart(){
    const newCart = JSON.parse(localStorage.getItem("cart"))
    setCart(newCart)
  }
 
  useEffect(()=>{

    getCart()

  },[])


 function addCart(obj){


  let newCart = cart;

  console.log(cart)
  newCart.push(obj)
  console.log(newCart)

//   let newobj = cart.find((ele) =>ele.title == obj.title)

//   if(newobj){
//    let newCart= cart.map((ele) => ele.title == newobj.title ? {...ele, qtn:ele.qtn + 1} : ele)
//     setCart(newCart)
//     }
//     else{
//       setCart([...cart,{...obj ,qtn:1}])
//     }
//  }
//  console.log(cart)

 

    setLocal(newCart)

  }
  console.log(cart)

  return (
    <>
    <Cart cart={cart}/>
    <Navbar  logo={logo} len={products.length} cartlen={cart.length} />

    <Products data={products} addCart={addCart}/>

    </>
  )
}

export default App
