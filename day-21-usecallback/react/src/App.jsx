import { useCallback, useState } from "react";
import "./App.css";
import TodoList from "./component/todoList";

function App() {
  const [count, setCount] = useState(0);
  const [status , setStatus] = useState(false)
  const [todo, setTodo] = useState([])

// function handleTodo(){
//   setTodo([...todo,"new todo"])
// }

const handleTodo = useCallback(()=>{
  setTodo([...todo,"new task"])
},[todo])


  return (
    <>
      <div className="mx-auto max-w-7xl mt-10 ">
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 me-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Count - {count}
        </button>

         <button
          type="button"
          onClick={handleTodo}
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 me-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
        add Task
        </button>
      
     
        <button
          type="button"
          onClick={()=>setStatus(!status)}
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
         {status ? "false" : "true"}
        </button>
           <TodoList todo={todo}/>
      </div>
    </>
  );
}

export default App;
