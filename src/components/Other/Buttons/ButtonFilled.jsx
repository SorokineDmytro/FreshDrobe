import React from 'react'

const ButtonFilled = ({ text }) => {
  return (
    <button className='py-2.5 px-30 font-bold rounded-4xl border-1 bg-[#38C4D9] border-[#38C4D9] text-white duration-300 ease-in-out hover:bg-[#7ecedb] hover:duration-300'>
      {text}
    </button>
  )
}

export default ButtonFilled
