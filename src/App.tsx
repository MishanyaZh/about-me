import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './views/Home/Home';
import Portfolio from './views/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

import { Main, AppBox } from './App.styled';

const App = () => {
  return (
    <AppBox>
      <Navigation />
      <Main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Routes>
        </Suspense>
      </Main>
      <Footer />
    </AppBox>
  );
};

export default App;
