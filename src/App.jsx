import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Portfolio from './views/Portfolio/Portfolio';
import Home from './views/Home/Home';

import { AppBox } from './App.styled';
// import './App.css';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      setIsDark(true);
    }

    if (theme === 'light') {
      setIsDark(false);
      setChecked(false);
    }
  }, []);

  const handleChangeTheme = InputEvent => {
    const isChecked = InputEvent.target.checked;
    console.log(isChecked);

    setIsDark(prevIsDark => !prevIsDark);
    setChecked(InputEvent.target.checked);

    if (InputEvent.target.checked === false) {
      localStorage.setItem('theme', 'light');
    }
    if (InputEvent.target.checked === true) {
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <AppBox theme={isDark}>
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
