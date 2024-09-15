import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'
import  Navbar  from "../src/components/Navbar";
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "./Utilitis/Firebase";
import Cart from './Pages/Cart'


function App() {

  // const { isLoggedin } = useContext(AuthContext);
  // console.log("isLoggedin", isLoggedin);
  const [isLoggedin, setisLoggedin] = useState(false)
  const [userDetail, setuserDetail] = useState([])
  
  useEffect(()=>{

   onAuthStateChanged(auth, (user) => {
     if (user) {
       // User is signed in, see docs for a list of available properties
       // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      setisLoggedin(true)
      console.log("user =>",user);
      setuserDetail(user)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

},[])



  

  return (
    <>
      

        <BrowserRouter>
        <Navbar isLoggedin={isLoggedin}></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Products' element={<Products></Products>}></Route>
          <Route path='/Login' element={ <Login></Login> }></Route>
          <Route path = '/Profile' element={<Profile detail={userDetail}></Profile>}></Route>
          <Route path='/Signup' element={<Signup></Signup>}></Route>
          <Route path='/Cart' element={<Cart></Cart>}></Route>
          <Route path='/ProductDetail/:id' element={<ProductDetail></ProductDetail>}></Route>
        </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
