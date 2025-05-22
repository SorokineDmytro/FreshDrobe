import React from 'react'
import { Link } from 'react-router'
import ButtonFilled from '../UI/Buttons/ButtonFilled'
import SearchBar from './SearchBar/SearchBar'
import { FaBars } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";

const UtilitySection = ({ togglePopup, buttonRef }) => {
  return (
    <section className='hidden h-21 lg:grid grid-cols-[auto_1fr_auto] items-center gap-10'>
      <ButtonFilled 
        ref={buttonRef} 
        onClick={togglePopup} 
        text="Catalogue" 
        color="primary" 
        height='12' 
        width='80' 
        image={FaBars}/>
      <SearchBar />
      <Link to="/cart">
        <ButtonFilled 
          text="Panier" 
          color="secondary" 
          height='12' 
          width='40' 
          image={BsCart3} 
        />
      </Link>
    </section>
  )
}

export default UtilitySection
