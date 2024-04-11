import React, { useRef } from 'react'
import { Link, json, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const useref = useRef()
  const Navigate = useNavigate()
  const auth = localStorage.getItem('user')

  function clearthedetail(){
    localStorage.clear()
    Navigate('/login')
  }

  function directToLogOut(){
    Navigate("/logout")
  }
  return (
    <div>
       { auth ?<ul className='flex justify-start p-5 bg-blue-300'>

            <li className='m-4'><Link to="/">Home Page</Link></li>
            <li className='m-4'><Link to="/add">Add Product</Link></li>
            <li className='m-4'><Link to="/update">Update Product</Link></li>
            <li className='m-4'><Link to="/profile">Profile</Link></li>
            <li className='m-4'><Link onClick={clearthedetail} to="/login">LogOut {JSON.parse(auth).name}</Link> </li>
            {/* <li className='m-4'><Link to="/log out">Log Out</Link></li> */}
        </ul>:

           <ul className='flex justify-end p-5 bg-blue-300'>
           <li className='m-4'> <Link  to="/login">Login</Link></li>
           <li className='m-4'><Link  to="/Signup">Sign up</Link></li>
          </ul>}
    </div>
  )
}

export default Navbar ;
