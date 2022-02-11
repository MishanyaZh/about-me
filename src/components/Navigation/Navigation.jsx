import React, { useState, useLayoutEffect } from 'react';
import 'react-theme-toggle-button/dist/index.css';
import ToggleButton from 'react-theme-toggle-button';

import { NavigtionNavLink, Nav, ContactLink } from './Navigation.styled';
// import { Nav } from './Navigation.styled';

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

      <ContactLink href="#footer">Contacts</ContactLink>
      <ToggleButton onChange={onChange} />
    </Nav>
  );
};

export default Navigation;
