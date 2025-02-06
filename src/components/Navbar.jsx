import React from 'react'
import dropdown from '../images/Dropdown.png'
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div className='px-28 my-5 border-b border-gray-200 '>
    <nav className="flex items-center justify-between py-4 ">
    <div className="flex items-center">
        <img src={logo} alt="logo" className="w-20" />
      <div className="ml-12 space-x-10">
        {['Home', 'Products', 'Resources', 'Pricing'].map((item) => (
          <a key={item} href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
        ))}
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-8 h-8 rounded-full">
     
      </div> 
      <img src={dropdown} alt="profile" className="w-8 h-8 rounded-full" />
    </div>
  </nav>
  </div>
  )
}

export default Navbar