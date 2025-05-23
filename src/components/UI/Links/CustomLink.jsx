import React from 'react'
import { Link } from 'react-router'

const CustomLink = ({ linkPath, linkText }) => {
  return (
    <Link 
        to={linkPath} 
        className="w-full md:w-fit h-10 lg:h-fit flex items-center justify-center mt-4 md:mt-0 lg:mt-3.5 px-5 py-1 lg:py-3.5 rounded-full font-['Inter',sans-serif] font-bold text-sm md:text-[15px] text-primary border border-sky-200 hover:bg-primary hover:text-white transition duration-300 ease-in-out">
          {linkText}
        </Link>
  )
}

export default CustomLink
