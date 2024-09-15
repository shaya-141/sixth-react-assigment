import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar({isLoggedin}) {

  // const [LoginorProfile, setLoginorProfile] = useState('Login')

  // useEffect(()=>{

  //   if (isLoggedin === true) {
  //     setLoginorProfile('Profile')
  //   }
  //  if(isLoggedin === false){
  //   setLoginorProfile('Login')
  //  }


  // },[LoginorProfile])

  return (
    <nav className=' w-full h-14 flex items-center justify-between border  rounded-md '>
      <Link to={'/'}>
        <h1 className='text-[20px] font-semibold pl-2 text-[#FF406D]'>ECOMMERCE</h1>
      </Link>

        <div className="links flex gap-8 m-6 items-center">
            <Link  className='text-[16px]' to={'/'}>Home</Link>
            <Link  className='text-[16px]' to={'/Products'}>Products</Link>
            <Link to={isLoggedin ? '/Profile' : '/Login'}>{isLoggedin ? 'Profile' : 'Login'}</Link>
            <Link  className='text-[16px]' to={'/Cart'}><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
    </nav>
  )
}

export default Navbar