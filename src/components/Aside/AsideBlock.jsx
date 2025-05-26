import React from 'react'
import { Link } from 'react-router'

const AsideBlock = ({ name, path, buttonName, content }) => {
  return (
    <div className="lg:bg-white rounded-4xl py-3 lg:overflow-hidden">
      <div className="flex items-center lg:justify-between lg:px-6.5 lg:py-5.5 gap-3 mb-3.5 md:mb-5 lg:mb-0">
        <h3 className="font-['Inter',sans-serif] font-bold md:text-lg">
          {name}
        </h3>
        <Link
          to={path}
          className="text-primary text-sm lg:text-base hover:underline"
        >
          {buttonName}
        </Link>
      </div>
      {content}
    </div>
  )
}

export default AsideBlock
