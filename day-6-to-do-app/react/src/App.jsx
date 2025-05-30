
 
import './App.css'
import { useState } from 'react'

function App() {


       const [todo,setTodo] = useState([])
       const[to,setTO] =useState("")
      const [editid, setEditId] = useState("")

       function handleTodo(){

           if (editid !== "") {

          let updatedtodo = todo.map((ele) =>ele.id === editid ? { ...ele, task: to } : ele
      )
      setTodo(updatedtodo)
      setEditId("")

    } 
    else {
      let obj = {
        id: Math.round(Math.random() * 1000),
        task: to,
        status: false,
      }
      setTodo([...todo, obj])
    }
    setTO("")
       }

       function handleUpdate(id){
        let newtodo = todo.map((ele)=>ele.id == id ? {...ele , status :!ele.status} : ele)

        setTodo(newtodo)
       } 
              
        function handleDelete(id) {
          let filtertodo= todo.filter((ele) => ele.id !== id)
          setTodo(filtertodo)
  }
    function handleEdit(id) {
    let taskedit = todo.find((ele) => ele.id === id)
    setTO(taskedit.task)
    setEditId(id)
  }
  



  return (
    <>
    <h1 className='font-bold text-center text-3xl'>To-do-app</h1>
      <div className='w-5xl m-auto border flex  gap-4 p-4 my-5'>
        <input className='border ' type="text" onChange={(e)=> setTO(e.target.value)} placeholder='enter work .......'/>
         <button onClick={handleTodo} className='border bg-gray-400 w-24 p-2 rounded-2xl'>  {editid !== "" ? "Update" : "Add"}</button>
        
        
      </div>


   <div className='border w-5xl  items-center my-5 gap-x-50 gap-y-5 flex flex-col mx-auto p-3 rounded-2xl bg-blue-300'>
        {
          todo.map((ele) =>
          (
              <div key={ele.id} className='flex gap-5'>
              
                  <div className='text-center text-xl'>  <h3 className='font-bold'>{ele.task}</h3></div>
                
              <button className='bg-indigo-400 p-2 rounded-md ' onClick={()=> handleUpdate(ele.id)}>{ele.status ? "completed 👍" :  "not completed 👎"} </button>
              <button  className='bg-red-500 p-2 rounded-md ' onClick={()=>handleDelete(ele.id)}>Delete</button>
                <button className='bg-yellow-400 p-2 rounded-md'onClick={() => handleEdit(ele.id)}>Edit</button>
                </div>
              
              
          ))
        }
      </div>  
    
    </>           
  )
}

export default App
