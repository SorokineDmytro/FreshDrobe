import React from 'react'
import NavList from './NavList/NavList'
import Login from '../Login/Login'
import ButtonEmpty from '../../Other/Buttons/ButtonEmpty'
import ButtonFilled from '../../Other/Buttons/ButtonFilled'


const NavBar = () => {
  return (
    <>
        <div className='flex flex-row justify-between items-center h-16 border-b-gray-200 border-b-1'>
          <NavList/>
          <Login/>
        </div>
        <div className='flex flex-row justify-between items-center h-23'>
          <div className="grid grid-templattes-rows-2 grid-cols-3 gap-x-4  w-auto pt-5">
            <div className='w-17 h-17 rounded-full grid row-span-2 items-center justify-center border-[#248fa0] border-4 overflow-hidden'>
              <img src="public/logo.png" alt="FreshDrobe logo" className='scale-115'/>
            </div>
            <h1 className='text-2xl col-start-0 col-span-2 self-end font-bold'>FreshDrobe</h1>
            <h2 className='col-start-0 col-span-2 block self-start'>Magasin de vêtements</h2>
          </div>
          <div className="grid grid-template-rows-2 grid-cols-2 gap-x-10 w-auto pt-5">
            <div>
              <h3>Paris</h3>
              <h4 className='font-bold text-xl'> <a href="tel:+33102030405">+(33)1 02 03 04 05</a></h4>
            </div>
            <ButtonEmpty text="Me contacter" />
          </div>
        </div>
        <div className="h-20 pt-5">
          <ButtonFilled text="Catalogue" />
        </div>
    </>
    
  )
}

export default NavBar
