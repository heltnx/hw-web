import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home.js';
import Realisations from '../pages/realisations/realisations.js';
import Competences from '../pages/competences/competences.js';
import Contact from '../pages/contact/contact.js';
import Landing404 from '../pages/landing404/Landing404.jsx';

const Router = () => {
  return (
    <BrowserRouter basename='/hw-web'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Landing404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;