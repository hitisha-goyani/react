
import './App.css'

import Products from './component/Products'
import products from './utilities/data'
import Navbar from './component/navbar'
import Cart from './component/Cart'
import { useState ,useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/product'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './component/Footer'





function App() {


  const [cart,setCart] = useState([])
  const [auth, setAuth] = useState({})

    useEffect(()=>{
    let newAuth = JSON.parse(localStorage.getItem("auth"))
    setAuth(newAuth)
  }, [])


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
//  console.log(cart)

  const logo = {
          img:"https://flowbite.com/docs/images/logo.svg",
          text: "flowbite"
  }

  return (
    <>
      {/* <Cart cart={cart}/>
      <Navbar  logo={logo} len={products.length} cartlen={cart.length} />

      <Products data={products} addCart={addCart}/> */}

      <BrowserRouter>

        {

        auth &&  <Navbar  logo={logo} len={products.length} cartlen={cart.length} setAuth={setAuth}/>
      }   



            <Routes>
                <Route path="/" element={<Login setAuth={setAuth}/>}/> 
              <Route  path="/home" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/product" element={<Product  data={products} addCart={addCart} />} />
              <Route path="/about" element={<About/>}/>
              <Route path="/cart" element={<Cart cart={cart}/>}/>
              <Route path="/register" element={<Register/>} />
              
            </Routes> 

           
      </BrowserRouter>

       <Footer/>

    </>
  )
}

export default App
