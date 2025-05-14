import React from 'react';
import { NavLink } from 'react-router';

const NavBarLink = ({ linkName, linkPath }) => {
  return (
    <li className='text-custom-gray hover:text-gray-500 transition duration-200 ease-in-out'>
      <NavLink
        to={linkPath}
        className={({ isActive }) =>
          (isActive ? 'font-bold text-custom-gray hover:text-custom-gray ' : '')
        }
      >
        {linkName}
      </NavLink>
    </li>
  );
};

export default NavBarLink;
