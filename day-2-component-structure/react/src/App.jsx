
import Header from './component/header'
import Footer from './component/footer'
import Main from './component/main'


import './App.css'

function App() {
  

  return (
    <>
   <Header/>
    
    <div className='max-w-7xl mx-auto  my-5 p-5'>
      <div className='flex gap-3 flex-wrap'>
        <div className='shadow shadow-cyan-600 rounded-md p-5 w-[25%]'>
        first box
        </div>
        <div className='shadow shadow-cyan-600 rounded-md p-5 w-[25%]'>
        second box
        </div>
      
        <div className='shadow shadow-cyan-600 rounded-md p-5 w-[25%]'>
        third box
        </div>
      
        <div className='shadow shadow-cyan-600 rounded-md p-5 w-[25%]'>
        four box
        </div>
        <div className='shadow shadow-cyan-600 rounded-md p-5 w-[25%]'>
        five box
        </div>
        <div className='shadow shadow-cyan-600 rounded-md p-5 w-[25%]'>
        six box
        </div>
      

      </div>
      

    </div>
    <Main/>

      <Footer/>
    </>
  )
}

export default App
