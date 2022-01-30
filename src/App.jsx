import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Portfolio from './views/Portfolio';
import Home from './views/Home/Home';

import { AppBox } from './App.styled';
// import './App.css';

const App = () => {
  return (
    <AppBox>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </Suspense>
    </AppBox>
  );
};

export default App;
