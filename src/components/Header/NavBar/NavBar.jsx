import React from 'react'
import NavList from './NavList/NavList'
import Login from '../Login/Login'



const NavBar = () => {
  return (
    <>
        <nav className='hidden lg:flex flex-row justify-between items-center h-16 border-b-gray-200 border-b-1'>
          <NavList/>
          <Login/>
        </nav>
    </>
    
  )
}

export default NavBar
