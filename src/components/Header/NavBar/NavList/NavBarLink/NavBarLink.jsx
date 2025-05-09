import React from 'react';
import { NavLink } from 'react-router';

const NavBarLink = ({ linkName, linkPath }) => {
  return (
    <li>
      <NavLink
        to={linkPath}
        className={({ isActive }) => (isActive ? 'font-bold' : '')}
      >
        {linkName}
      </NavLink>
    </li>
  );
};

export default NavBarLink;
