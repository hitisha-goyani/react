
// import { useCount } from './hooks'

import './App.css'
import { Fragment, useEffect, useState } from 'react'

function App() {


  const[page , setPage] = useState(1)
  const [data, setData] = useState([])
  const[search,setSearch] = useState('')
  const[cat,setCat] = useState([])
  const[filter,setFilter] = useState("")
  const[sort,setSort] = useState("")
 

  const fetchData = async () =>{

  //  const s = search ? `&search=${search}` : '';
    const res = await fetch(`https://dummyjson.com/products/search?q=${search}&limit=8&skip=${page}&sortBy=price&order=${sort}`)
    const prod = await res.json();
    setData(prod.products)

  }


  useEffect(()=>{
    if(filter)
    fetch(`https://dummyjson.com/products/category/${filter}`)
    .then((res)=>res.json())
    .then((res)=>setData(res.products))
  },[filter])

  useEffect(()=>{
    fetch('https://dummyjson.com/products/category-list')
    .then((res)=>res.json())
    .then((res)=>setCat(res))


  },[])

  

  useEffect(() => {
    fetchData()
  }, [page, search,sort])
  

   // const message = data.length==0 ? <h1 className='text-3xl font-bold text-center my-20'>Data not found</h1> : null;
  
  // function getMessage(){
  //  let message  = data.length==0 ?  <h1 className='text-3xl font-bold text-center my-20'>Data not found</h1> : null;
  //  return message
  // }

  return (
    <>

   
         <div className='flex mx-auto mb-4 gap-20 my-5 max-w-7xl'>

 <div className='w-full'>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search...' className='w-full p-2 border border-gray-300 rounded-lg'/>
      
      </div>

<div className='w-70'>  
  <select onChange={(e)=>setFilter(e.target.value)} className= "col-end border border-gray-300 rounded-lg p-2">
          {
            cat.map((ele) =>
               <option key={ele} value={ele} >{ele}</option>)
          }
        </select>
        </div>
        <div className='flex'>
          <button onClick={()=>setSort("asc")} type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">⬆️ </button>
          <button onClick={()=>setSort("desc")} type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">⬇️</button>
        </div>

         </div>
         

        
      

     {!data.length && <h1 className='text-3xl font-bold text-center my-20'>Data not found</h1>}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto gap-4'>
          {

        data.map((ele)=>(

           <div key={ele.id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={ele.thumbnail} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ele.price}</div>
                <p className="text-gray-700 text-base">
                  {ele.title}
                </p>
              </div>
              </div>
          
        ))
      }
      </div>
    
   

         <div className="flex m-auto justify-center my-2  py-2 rounded-2xl">

         
            <button onClick={()=>setPage(page-1)}className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
              Previous
            </button>

        <button type="button" className=" hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 text-black font-bold dark:hover:bg-gray-600 dark:focus:ring-gray-800">{page}</button>
         

            <button  onClick={()=>setPage(page+1)}  className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
              Next
            </button>
          </div>
            
       
    
    </>
  )
}

export default App
