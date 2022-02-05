import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Portfolio from './views/Portfolio/Portfolio';
import Home from './views/Home/Home';

import { AppBox } from './App.styled';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.querySelector('label>input').checked = true;
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    if (theme === 'light') {
      setIsDark(false);
      document.documentElement.querySelector('label>input').checked = false;
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDark, setIsDark]);

  const onChange = InputEvent => {
    setIsDark(prevIsDark => !prevIsDark);

    if (InputEvent.target.checked === false) {
      localStorage.setItem('theme', 'light');
    }
    if (InputEvent.target.checked === true) {
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <AppBox>
      <Navigation isDark={isDark} onChange={onChange} />
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
