import React from 'react';
import { Routes, Route } from 'react-router';
import { navPagesList } from '../../../data/navPagesList';
import NotFoundPage from '../../pages/NotFoundPage';
import Login from '../../pages/Login';
import Cart from '../../pages/Cart';
import Folder from '../../pages/Section';


const Router = () => {
  return (
    <Routes>
      {navPagesList.map((item, index) => (
        <Route key={index} path={item.linkPath} element={item.element} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/section/:category/:sub_category" element={<Folder />} />
      <Route path="/section/:category" element={<Folder />} />
    </Routes>
  );
};

export default Router;