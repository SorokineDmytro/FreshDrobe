import React from 'react'
import ButtonEmpty from '../UI/Buttons/ButtonEmpty'

const ContactSection = () => {
  return (
    <section className="grid grid-cols-1 w-full md:w-auto md:h-16 justify-items-center gap-2 pt-3 md:grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 gap-x-10 lg:w-auto md:pt-0">
        <div className='w-full justify-items-center md:justify-items-start'>
          <h3 className='text-sm lg:text-[16px] text-custom-gray'>Paris</h3>
          <h4 className='font-bold text-[15px] lg:text-xl'> <a href="tel:+33102030405">+(33)1 02 03 04 05</a></h4>
          <button className='font-["Inter",sans-serif] text-[13px] font-bold text-primary lg:hidden'>Me contacter</button>
        </div>
        <div className='hidden lg:grid pt-1'>
          <ButtonEmpty text="Me contacter" color='primary'/>
        </div>
        
    </section>
  )
}

export default ContactSection
