
import './App.css'

import Products from './component/Products'
import products from './utilities/data'
import Navbar from './component/navbar'
import { useState } from 'react'

function App() {


  const [num,setNum] = useState(0)


  function handleCount(){

    setNum(num+1)
  }
  const logo = {
    img:"https://flowbite.com/docs/images/logo.svg",
    text: "flowbite"
  }

  return (
    <>
    <h1>this is count</h1>
<Navbar  logo={logo} len={products.length} num={num} />
   <Products data={products} handleCount={handleCount}/>
   {/* <button onClick={handleCount}>click</button> */}
    </>
  )
}

export default App
