import React from 'react'

const ButtonEmpty = ({ text }) => {
  return (
    <button className='font-bold rounded-4xl border-1 text-[#38C4D9] border-[#31b1c5] duration-300 ease-in-out hover:bg-[#38C4D9] hover:text-white hover:duration-300'>
      {text}
    </button>
  )
}

export default ButtonEmpty
