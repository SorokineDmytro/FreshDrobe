import React from 'react'
import { Link } from 'react-router'

const CategoryPlatesItem = ({ category }) => {
  return (
          <li
            key={category.id}
            className="w-full h-full px-5 py-3 md:p-5 lg:p-8.5 flex flex-col items-start bg-amber-300 rounded-4xl"
          >
            <Link
              to={"/section/" + category.name.toLowerCase()}
              className="w-full h-full flex flex-col items-start justify-between md:justify-start md:gap-0.5"
            >
              <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-white">
                {category.name}
              </h3>
              <span className="text-white/75 text-sm lg:text-base">10 articles</span>
            </Link>
          </li>
  )
}

export default CategoryPlatesItem
