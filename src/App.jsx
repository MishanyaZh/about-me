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
    }

    if (theme === 'light') {
      setIsDark(false);
      document.documentElement.querySelector('label>input').checked = false;
    }
  }, [isDark, setIsDark]);

  const onChange = InputEvent => {
    setIsDark(prevIsDark => !prevIsDark);

    if (InputEvent.target.checked === false) {
      localStorage.setItem('theme', 'light');
      localStorage.setItem('checked', 'light');
    }
    if (InputEvent.target.checked === true) {
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('checked', 'dark');
    }
  };

  return (
    <AppBox theme={isDark}>
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
