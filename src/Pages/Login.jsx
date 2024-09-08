import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import { auth } from "../Utilitis/Firebase";

import { signOut } from "firebase/auth";

function Login() {

  const [userEmail, setuserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [loading, setloading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('login success')
        
        navigate('/Profile')
        
        // console.log('user =>' ,user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message)
      });
      setuserEmail('')
      setUserPassword('')
    }
     
    


  function handleLogout() {
    // const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      alert('signout successfully')
    }).catch((error) => {
      // An error happened.
    });
  }



  return (
    <>

      <div id='container' className='w-[400px] mt-5 rounded-md text-left h-[500px] p-7 flex flex-col gap-5 border m-auto'>

        <h1 className='mt-4 text-[20px] font-semibold'>Login</h1>
        <div className='mt-4'>
          <span >Email</span>
          <br />
          <input type="email" placeholder='Your@gmail.com' onChange={(e) => setuserEmail(e.target.value)} className='border py-2 px-4 w-[90%] mt-3' />
        </div>

        <div>
          <span>Password</span>
          <br />
          <input type="password" onChange={(e) => setUserPassword(e.target.value)} placeholder='YourPassword' className='border py-2 px-4 w-[90%] mt-3' />
        </div>
        <div>
          <p className='text-[14px] lowercase'>Don't Have Account ? <Link className='font-bold' to={'/Signup'}>Signup</Link></p>
        </div>

        <button className='h-[40px] w-[120px] bg-black text-white border-none rounded-md' onClick={handleLogin}>Login</button>

      </div>



      {/* <button className='h-[40px] w-[120px] bg-black text-white border-none rounded-md' onClick={handleLogout}>logout</button> */}


    </>
  )
}

export default Login