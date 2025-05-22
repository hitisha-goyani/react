import React from 'react'
import Products from '../component/Products'

const Product = ({data,addCart}) => {
    
  return (
    <div>
      <Products data={data} addCart={addCart}/>
      
    </div>
   
  )
}

export default Product
