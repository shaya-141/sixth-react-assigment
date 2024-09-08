import React, { useContext } from 'react'
import { auth } from "../Utilitis/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"



function Profile({detail}) {
  const navigate = useNavigate()

    function handleLogout() {
        // const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          alert('signout successfully')
          navigate('/Login')
        }).catch((error) => {
          // An error happened.
        });
      }

      console.log('detail', detail);
      
  return (
    <>
    <div className='w-[400px] h-[200px] border text-left mt-5 rounded-md p-4'>

    <div className='mt-4 font-semibold'>Your Profile</div>

    <h1 className='mt-3'>{detail.email}</h1>

    <button className='h-[40px] w-[120px] mt-4 bg-black text-white border-none rounded-md' onClick={handleLogout}>logout</button>
    </div>
    </>
  )
}

export default Profile