import React from 'react'
import { Link, useNavigate } from 'react-router'

const Navbar = ({len,logo,cartlen,setAuth}) => {

const navigate = useNavigate()
const auth =  JSON.parse(localStorage.getItem("auth")) || {}


function logout(){

  localStorage.removeItem("auth")
  setAuth({})
  navigate("/")
  
}

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 ...">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo.img} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{logo.text}</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokekLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"></path>
      </svg>
         
      </button>
      <div className=" sm:hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link to='/home'>
                <a className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </Link>
          </li>
          <li>
              <Link to='/about'>
                    <a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </Link>
          </li>
          <li>

             <Link to='/product'>
            <a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
             </Link>
          </li>
          <li>
            <Link to='/'>
            <a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
            </Link>
          </li>
          <li>
            <Link to='/contact'>
            <a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </Link>
          </li>
          <li className='flex'>
           
              
              <span class="bg-blue-100 text-blue-800 text-md font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">stock:{len}</span>
        <Link to="/cart">
                <a className="bg-yellow-400 text-black block py-1 px-4 rounded-sm me-3">
                  Cart
                    <span className="bg-white text-black ms-3 rounded-2xl p-1 " >{cartlen}</span>
                </a>
                </Link>
                  {/* <a  className="bg-red-400 text-black block py-1 px-4 rounded-sm ">
                 
                  </a> */}

                  {/* <button  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> */}
                     <img id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="w-[50px] rounded-full" src={auth.photo} /> 

                {/* </button> */}


<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" >
      <li>
        <a onClick={logout} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">logout</a>
      </li>
      <li>
        <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      
    </ul>
</div>






            
             
          </li>
        </ul> 
       

       
      </div>
    </div>
  </nav>
  )
}

export default Navbar
