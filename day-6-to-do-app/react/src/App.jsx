
import './App.css'
import { useState } from 'react'

function App() {


       const [todo,setTodo] = useState([])
       const[to,setTO] =useState("")

       function handleTodo(){

        let obj = {

          id:Math.round(Math.random()*1000),
          task : to,
          status : false

        }

        setTodo([...todo,obj])
       }


       function handleUpdate(id){
        let newtodo = todo.map((ele)=>ele.id == id ? {...ele , status :!ele.status} : ele)

        setTodo(newtodo)
       } 
        function handleDelete(id) {
    let filteredTodos = todo.filter((ele) => ele.id !== id)
    setTodo(filteredTodos)
  }


  return (
    <>
    <h1 className='font-bold text-center text-3xl'>To-do-app</h1>
      <div className='w-5xl m-auto border flex flex-col gap-4 p-4 my-5'>
        <input className='border ' type="text" onChange={(e)=> setTO(e.target.value)} placeholder='enter work .......'/>
        <button onClick={handleTodo} className='border bg-gray-400 w-20 p-2 rounded-2xl'>add</button>
      </div>

      <div className='border w-5xl my-5 gap-5 flex flex-col mx-auto p-3 rounded-2xl bg-blue-300'>
        {
          todo.map((ele) =>
          (
              <div key={ele.id} className='flex gap-5'>

              <h3 className='font-bold'>{ele.task}</h3>
              <button className='bg-indigo-400 p-2 rounded-md ' onClick={()=> handleUpdate(ele.id)}>{ele.status ? "completed" :  "not completed"} </button>
              <button  className='bg-red-500' onClick={()=>handleDelete(ele.id)}>delete</button>
              </div>
          ))
        }
      </div>

    
    </>           
  )
}

export default App
