import React from 'react';
import { Routes, Route } from 'react-router';
import { navPagesList } from '../../../data/navPagesList';
import NotFoundPage from '../../pages/NotFoundPage';
import Login from '../../pages/Login';
import Cart from '../../pages/Cart';
import Section from '../../pages/Section';
import Categories from '../../pages/Categories';
import Articles from '../../pages/Articles';


const Router = () => {
  return (
    <Routes>
      {navPagesList.map((item, index) => (
        <Route key={index} path={item.linkPath} element={item.element} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/section" element={<Categories />} />
      <Route path="/section/:category/:sub_category" element={<Section />} />
      <Route path="/section/:category" element={<Section />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
};

export default Router;