import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white text-center py-6 mt-auto">
        <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </footer>
    </div>
    
  )
}

export default Footer
