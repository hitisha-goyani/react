
import './App.css'

import Products from './component/Products'
import products from './utilities/data'
import Navbar from './component/navbar'

function App() {
  const logo = {
    img:"https://flowbite.com/docs/images/logo.svg",
    text: "flowbite"
  }

  return (
    <>
    
<Navbar  logo={logo} len={products.length}/>
   <Products data={products}/>
    </>
  )
}

export default App
