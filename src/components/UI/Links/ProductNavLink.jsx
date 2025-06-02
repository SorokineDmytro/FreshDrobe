import React from 'react'
import { Link } from 'react-router'

const ProductNavLink = ({ linkPath, linkText }) => {
  return (
    <Link 
        to={linkPath} 
        className="w-full md:w-fit h-8 lg:h-fit flex items-center justify-center mt-0 px-4 py-2 md:py-2.5 rounded-4xl font-['Inter',sans-serif] font-semibold text-[13px] text-primary border border-sky-200 hover:bg-primary hover:text-white transition duration-300 ease-in-out">
          {linkText}
        </Link>
  )
}

export default ProductNavLink
