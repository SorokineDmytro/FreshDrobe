import React from 'react'
import { Link } from 'react-router'

const Catalog = ({ setIsOpen, category }) => {
  return (
    <ul className="w-auto h-fit">
          <li key={category.id}>
            <Link
              to={`/section/${category.name.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="flex gap-6 w-full h-fit items-center bg-white mb-3 cursor-pointer hover:text-primary hover:duration-200 duration-200 hover:ease-in-out"
            >
              <img src={category.image} alt="" className="w-10 h-10" />
              <h2 className="font-['Inter',sans-serif] font-bold">{category.name}</h2>
            </Link>
            <ul className="w-full h-fit flex flex-col border-t-1 border-gray-100 pt-3">
              {category.sub_categories.map((sub_category) => (
                <li key={sub_category.id} className="h-9 pl-2">
                  <Link
                    to={`/section/${category.name.toLowerCase()}/${sub_category.name.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-custom-gray hover:text-primary hover:duration-200 duration-200 hover:ease-in-out "
                  >
                    {sub_category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
  )
}

export default Catalog
