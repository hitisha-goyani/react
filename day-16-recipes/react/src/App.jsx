

import './App.css'
import NavbarExample from './components/Navbar'
import { Routes, Route,useNavigate ,useLocation } from 'react-router'
import Home from './components/Home'
import About from './components/About'

import Contact from './components/Contact'
import Recipes from './components/Recipes'
import Login from './components/Login'
import {useState } from 'react'
import Recipe from './components/Recipe'



function App() {

   const [log, setLog] = useState({email:"", password:""})
  //  const [auth, setAuth] = useState({})

  //   useEffect(()=>{
  //   let newAuth = JSON.parse(localStorage.getItem("auth"))
  //   setAuth(newAuth)
  // }, [])




  const navigate = useNavigate()
  const location = useLocation()

    function handleChange(e){
        const {name, value} = e.target
        setLog({
            ...log,
            [name]:value
        })
    }

    function handleLogin(){
      if(log.email == "h@gmail.com" && log.password == "h123")
      {
        alert("logged Successfully")
        navigate("/home")
      }
    }
    
  
const hide =location.pathname == "/"

  return (
    
    <>
    
    {
      !hide && <NavbarExample/>
    }
  
 
   
    <Routes>
  
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={ <Login handleChange={handleChange} handleLogin={handleLogin} />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/recipe/:reId" element={ <Recipe/>} />

    </Routes>
    
    
    </> 
  )
}

export default App
