import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home.js';
import Realisations from '../pages/realisations/realisations.js';
import Competences from '../pages/competences/competences.js';
import Contact from '../pages/contact/contact.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={<Home />} />
        <Route path="/realisations" component={<Realisations />} />
        <Route path="/competences" component={<Competences />} />
        <Route path="/contact" component={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;