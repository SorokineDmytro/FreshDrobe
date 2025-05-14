import React from 'react'
import { Link } from 'react-router'

const CompanySection = () => {
  return (
    <section className="grid grid-cols-1 w-full md:h-[50px] justify-items-center gap-2 pt-3 md:pt-0 md:grid-rows-2 md:grid-cols-3 md:gap-x-3 lg:gap-x-4 md:w-auto">
        <div className='w-12.5 h-12.5 lg:w-17 lg:h-17 rounded-full grid row-span-2 self-center overflow-hidden'>
        <Link to="/">  
          <img src="public/logo.png" alt="FreshDrobe logo" className=''/>
        </Link>
        </div>
        <h1 className='w-auto font-["Inter",sans-serif] md:w-full md:text-[18px] lg:text-xl col-start-0 col-span-2 font-bold'>FreshDrobe</h1>
        <h2 className='w-auto md:w-full text-sm lg:text-[16px] col-start-0 col-span-2 block text-custom-gray'>Magasin de vêtements</h2>
    </section>
  )
}

export default CompanySection
