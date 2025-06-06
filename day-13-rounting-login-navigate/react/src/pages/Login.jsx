import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Login = ({setAuth}) => {

const [log, setLog] = useState({email:"", password:""})
const [error, setError] = useState('')



const navigate = useNavigate()

function handleChange(e){
    
    const {value, name}  = e.target;
    setLog(
        {...log,
            [name]:value
        }
    )
}
console.log(log)


function handleLogin(){
console.log(log)
    // // if(log.email == "hitisha@gmail.com" && log.password == "123")
    // // {

    // //     localStorage.setItem("auth", JSON.stringify(log))
    // //     setAuth(log)
    // //         navigate("/home")
    // // }
    let users = JSON.parse(localStorage.getItem("user") )|| []

    let user = users.find(e => e.email == log.email && e.password == log.password)
    console.log(user)

    if (user) {
      localStorage.setItem("auth", JSON.stringify(user))
      setAuth(user)
      navigate("/home")
    } 
    else {
      setError("Invalid username or password")
    }
}

  return (
       <div>
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
               {error && <p style={{ color: "red" }}>{error}</p>}
              <div class="space-y-4 md:space-y-6" >
                  <div>
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={handleChange} />
                  </div>
                  <div>
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange} />
                  </div>
                 
                  <button onClick={handleLogin} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>


                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? 
                      <a href="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
                   
              </div>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Login