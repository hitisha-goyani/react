import React from 'react'

const About = () => {
  return (
     <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <img src="https://t3.ftcdn.net/jpg/04/09/34/66/360_F_409346621_8d9NAfEHWnNFIVmQxH8yzfNs0f7dHanF.jpg" className=' my-5 ms-50'/>
        <p className="text-lg text-gray-600 mb-4">
            Welcome to Our Company! We are dedicated to providing the best services in the industry.
          With years of experience and a passionate team, we strive to deliver high-quality solutions
          tailored to your needs.
          </p>
        <p className="text-lg text-gray-600 mb-15">
           Our mission is to innovate and lead in our field, while maintaining a strong commitment to
          customer satisfaction, integrity, and excellence.
        </p>
         </div>
    </section>
  )
}

export default About
