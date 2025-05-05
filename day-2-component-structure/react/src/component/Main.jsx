import React from 'react'
import Card from './card'

const Main = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto my-5  '>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-3 md:gap-4 lg:gap-6 gap-4'>
          <div className='shadow shadow-blue-900  p-4 bg-white hover:bg-blue-600 rounded-2xl   '>
          <Card/>

          </div>
          <div className='shadow shadow-blue-900  p-4 bg-white hover:bg-blue-600 rounded-2xl   '>
          <Card/>

          </div>
          <div className='shadow shadow-blue-900  p-4 bg-white hover:bg-blue-600 rounded-2xl   '>
            <Card/>
            
          </div>
          <div className='shadow shadow-blue-900  p-4 bg-white hover:bg-blue-600 rounded-2xl'>
         <Card/>    

          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
