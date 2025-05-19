import React from 'react'
import Image from 'react-bootstrap/Image';


const ExampleCarouselImage = () => {
  return (
    <div>
        {/* <img className='img-fluid ' src="https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D"/> */}
        <Image className="img-fluid" src="https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D"/>" rounded />
    </div>
  )
}

export default ExampleCarouselImage
