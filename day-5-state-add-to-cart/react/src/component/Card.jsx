import React from 'react'

const Card = ({title,price,images,rating,addCart}) => {


 


  return (
    <div>
      

<div class="max-w-sm bg-blue-400 border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700">
    <a href="#" >
        <img src={images[0]} alt="" />
    </a>
    <div class="p-5 ">
        <span className={`bg-${rating > 4 ? `green` : `blue`}-100 rounded-2xl px-5`}>
            ⭐{rating}</span>
        <a href="#">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">{title}</h5>
        </a>
        <p class="mb-3 text-black">${price}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-md  text-center me-3 text-white bg-gray-600 rounded-lg focus:ring-4 focus:outline-none dark:hover:bg-gray-800 ">
            Read more
            
        </a>
        <button onClick={()=> addCart({title, price, images, rating})}  class="inline-flex items-center px-3 py-2 text-md text-center text-white bg-gray-600 rounded-lg focus:ring-4 focus:outline-none dark:hover:bg-gray-800 ">
         add to cart
            
        </button>
    </div>
</div>

    </div>
  )
}

export default Card
