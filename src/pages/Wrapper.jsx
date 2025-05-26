import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs.jsx'
import React from 'react'

const Wrapper = ({ pageContent, titleText, customLastCrumb }) => {
  return (
    <main className="2xl:w-[1630px] w-full h-full mx-auto min-h-full flex flex-col py-4 md:py-5 lg:py-7.5 px-[2.5%] 2xl:px-0">
      <Breadcrumbs customLastCrumb={customLastCrumb}/>
      <h1 className="mb-3.5 md:mb-5 lg:mb-7 font-['Inter',sans-serif] font-bold text-base md:text-lg lg:text-[21px]">{titleText}</h1>
      <div className='flex-grow'>
        {pageContent}
      </div>
    </main>
  )
}

export default Wrapper
