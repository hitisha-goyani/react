import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handaleCount(){
    setCount(count+1)
  }

  // console.log(count)

  return (
    <>
      
      <h1>this is count {count}</h1>
   
        {/* <button onClick={() => setCount((count) => count + 1)}>
         click</button> */}
         <button onClick={handaleCount}>click</button>


       
     
      
    </>
  )
}

export default App
