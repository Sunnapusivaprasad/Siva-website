import React from 'react'
import logo from '/img/logo.png'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-row gap-[10px] ">
      <img className='w-[30px]  border-blue-300 rounded-[20px] h-[30px]' src={logo} alt="logo" />
      
      <Link className='text-[#47A2E4] text-[15px]' to='/'>Home</Link>
<Link className='text-[#47A2E4] text-[15px]' to='/WatchList'>WatchList</Link>


    </div>
  )
}

export default Navbar