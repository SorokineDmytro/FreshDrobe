import React from 'react';
import { Routes, Route } from 'react-router';
import { navPagesList } from '../Header/NavBar/NavList/navPagesList';
import NotFoundPage from '../../pages/NotFoundPage';
import Login from '../../pages/Login';
import Cart from '../../pages/Cart';


const Router = () => {
  return (
    <Routes>
      {navPagesList.map((item, index) => (
        <Route key={index} path={item.linkPath} element={item.element} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;