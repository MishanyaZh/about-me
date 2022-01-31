import React, { Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Portfolio from './views/Portfolio/Portfolio';
import Home from './views/Home/Home';

import { AppBox } from './App.styled';
// import './App.css';

const App = () => {
  const [theme, setTheme] = useState(false);

  const handleChangeTheme = () => {
    setTheme(prevTheme => !prevTheme);
  };
  return (
    <AppBox theme={theme}>
      <Navigation handleChangeTheme={handleChangeTheme} />
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
