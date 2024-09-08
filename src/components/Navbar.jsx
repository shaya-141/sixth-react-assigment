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
    <nav className=' w-full h-14 flex items-center justify-between  rounded-md text-white bg-[#FF406D]'>
      <Link to={'/'}>
        <h1 className='text-[22px] font-semibold pl-2 '>ECOMMERCE</h1>
      </Link>

        <div className="links flex gap-8 m-6">
            <Link  className='text-[16px]' to={'/'}>Home</Link>
            <Link  className='text-[16px]' to={'/Products'}>Products</Link>
            <Link to={isLoggedin ? '/Profile' : '/Login'}>{isLoggedin ? 'Profile' : 'Login'}</Link>
            <Link  className='text-[16px]' to={'/'}><i class="fa-solid fa-cart-shopping"></i></Link>
        </div>
    </nav>
  )
}

export default Navbar