
// import { useCount } from './hooks'

import './App.css'
import { useEffect, useState } from 'react'

function App() {


  const[page , setPage] = useState(1)
  const [data, setData] = useState([])
  const[search,setSearch] = useState('')
  const[filter,setFilter] = useState('')
 

  const fetchData = async () =>{

  //  const s = search ? `&search=${search}` : '';
    const res = await fetch(`https://dummyjson.com/products/search?q=${search}&limit=8&skip=${page}&select=${filter}`)
    const prod = await res.json();
    setData(prod.products)

  }

  useEffect(() => {
    fetchData()
  }, [page, search,filter])
  

  return (
    <>

     <div className='max-w-7xl m-auto p-2'>

      <div className='my-5'>
          <select value={filter}onChange={(e) => setFilter(e.target.value)}className='w-full p-2 border border-gray-300 rounded-lg'>
            <option value="">All Categories</option>

            <h2></h2>

          </select>
          
        </div>

      <div className='my-5'>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search...' className='w-full p-2 border border-gray-300 rounded-lg'/>
      </div>



      <div className='grid grid-cols-4 gap-4'>
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
    
     </div>

         <div className="flex m-auto justify-center my-2 border border-gray-500 w-50 py-2 rounded-2xl">

         
            <button onClick={()=>setPage(page-1)}className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Previous
            </button>

        <div className='text-center px-2'> <h2 className='font-bold'>{page}</h2></div>
         

            <button  onClick={()=>setPage(page+1)}  className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
            </button>
          </div>
            
       
    
    </>
  )
}

export default App
