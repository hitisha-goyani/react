import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Register = () => {

    
const[reg,setReg] = useState({email:"", password:"",photo:"",username:""})
const [error, setError] = useState('')   

const navigate = useNavigate()



    
function handleChange(e){

    const {value,name} = e.target
    setReg(
        {
            ...reg,
            [name]:value
        }
    )

}

function handleReg(e){

       e.preventDefault()

       let user = JSON.parse(localStorage.getItem("user"))||[]



       const findBoth = user.find(
      (e) => e.username == reg.username && e.password == reg.password
    )

    if (findBoth) {

      setError("This username and password combination already exists")
      return
    }

       const findEmail =  user.find((e)=>e.email=== reg.email)

       if(findEmail){

        setError("email already taken.please enter another email ")
        return
       }

        user.push(reg)
        localStorage.setItem("user" , JSON.stringify(user))
        navigate("/")




}
  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              
      {error && <p style={{ color: "red" }}>{error}</p>}
              <div class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">username</label>
                      <input onChange={handleChange} type="text" name="username" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                   <div>
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">photo</label>
                      <input onChange={handleChange} type="url" name="photo" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                   <div>
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onChange={handleChange} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 
                  <button onClick={handleReg} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
                 
              </div>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Register
