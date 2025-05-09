import React from 'react';
import NavBarLink from './NavBarLink/NavBarLink';
import { navPagesList } from './navPagesList';

const NavList = () => {
  return (
    <ul className='flex flex-row items-center gap-10'>
      {navPagesList.map((item, index) => (
        <NavBarLink
          key={index}
          linkName={item.linkName}
          linkPath={item.linkPath}
        />
      ))}
    </ul>
  );
};


export default NavList;