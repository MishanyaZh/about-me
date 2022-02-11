import React, { useState, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { NavigtionNavLink } from './Navigation.styled';

import 'react-theme-toggle-button/dist/index.css';
import ToggleButton from 'react-theme-toggle-button';

import { Nav } from './Navigation.styled';

const Navigation = () => {
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

    InputEvent.target.checked === false
      ? localStorage.setItem('theme', 'light')
      : localStorage.setItem('theme', 'dark');
  };

  return (
    <Nav className="Navigation">
      <p>MENU</p>

      <NavigtionNavLink to="/">Home</NavigtionNavLink>
      <NavigtionNavLink to="/portfolio">Portfolio</NavigtionNavLink>

      <a href="#footer">CONTACTS</a>
      <ToggleButton onChange={onChange} />
    </Nav>
  );
};

export default Navigation;
