import React from 'react'
import ButtonEmpty from '../../Other/Buttons/ButtonEmpty'
import { FaSliders } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <search className= 'w-[1fr] h-12 rounded-4xl bg-gray-100 grid items-center grid-cols-[auto_1fr_auto] px-0.5'>
      <ButtonEmpty text="" bgColor="dark" borderColor='transparent' height='11' width='11' image={FaSliders} />
      <input type="search" name="" id="" placeholder='Retrouver un produit' className='w-[75%] h-full rounded-4xl pl-6 focus:outline-none focus:ring-0'/>
      <ButtonEmpty text="Rechercher" bgColor="dark" borderColor='transparent' height='11' width='35' image={FaSearch} />
    </search>
  )
}

export default SearchBar
