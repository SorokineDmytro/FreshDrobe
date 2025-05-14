import React from 'react'

const TempHeader = ({ headerTempText }) => {
  return (
    <h1 className='text-5xl text-center bg-gray-100 grid h-[80vh] pt-5'>{headerTempText}</h1>
  )
}

export default TempHeader
