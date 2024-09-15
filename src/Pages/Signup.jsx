import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utilitis/Firebase";
function Signup() {

    const [username, setUsername] = useState('')
    const [useremail, setUseremail] = useState('')
    const [userpassword, setUserpassword] = useState('')


    function createUser() {

        createUserWithEmailAndPassword(auth, useremail, userpassword, username)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                alert(' Signups uccessfully')
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

            setUsername('')
            setUseremail('')
            setUserpassword('')
    }

    console.log(username);













    return (
        <>
            <div id='container' className='w-[400px] relative top-10 rounded-md text-left h-[500px] p-7 flex flex-col gap-5 border m-auto'>

                <h1 className='mt-4 text-[20px] font-semibold'>Signup</h1>



                <div>
                    <span>Your name</span>
                    <br />
                    <input type="text" value={username} placeholder='YourName' onChange={(e) => setUsername(e.target.value)} className='border py-2 px-4 w-[90%] mt-3' />
                </div>


                <div >
                    <span >Email</span>
                    <br />
                    <input type="email" value={useremail} placeholder='Your@gmail.com' onChange={(e) => setUseremail(e.target.value)} className='border py-2 px-4 w-[90%] mt-3' />
                </div>

                <div>

                    <span>Password</span>
                    <br />
                    <input type="password" value={userpassword} onChange={(e) => setUserpassword(e.target.value)} placeholder='YourPassword' className='border py-2 px-4 w-[90%] mt-3' />
                </div>
                <div>
                    <p className='text-[14px] lowercase'> Have Account ? <Link className='font-bold' to={'/Login'}>Login</Link></p>
                </div>

                <button className='h-[40px] w-[120px] bg-black text-white border-none rounded-md' onClick={createUser}>Signup</button>

            </div>


        </>
    )
}

export default Signup