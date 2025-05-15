import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
function App() {

   const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [data, setData] = useState([])

  function handleChange(val, name){
    setData([...data, {[name]:val}])
    console.log(data)
  }

  function handleSubmit(){
    let obj={
      id:uuidv4(),
      name,
      age,
      email
    }
    setAge("")
    setName("")
    setEmail("")

    setData([...data,obj])
  }


  return (
    <>
    <div className='my-5 border mx-auto max-w-5xl'>
       <div className="grid gap-6 mb-6 md:grid-cols-1 ms-5">
         <div  className='flex'> 
          <label for="name" className="block mb-2 text-md font-bold text-black me-2 ">Name</label>
          <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} id="name" className="mx-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your name" required />
         </div>

         <div className='flex'> 
          <label for="age" className="block mb-2 text-md font-bold text-black me-2 ">Age</label>
          <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your age" required />
         </div>

         <div className='flex'>
            <label for="email" className="block mb-2 text-md font-bold text-black me-2 ">Email </label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required /> 
         </div>  
       <input type="text" name="marks" onChange={(e)=>handleChange(e.target.value, e.target.name)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
       </div>
        
        <button onClick={handleSubmit} type="button" className="ms-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2">submit</button>
    </div>
    


     <div className='my-5 border mx-auto max-w-5xl'>
<table className='table'>
       <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
    </tr>
    {
      data.map((ele) =>(
         <tr key={ele.id}>
        <th>{ele.name}</th>
        <th>{ele.age}</th>
        <th>{ele.email}</th>
      </tr>
      ))
     
    }
      
     </table>
     </div>
     
    </>
  )
}

export default App
