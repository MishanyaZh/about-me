import React, { useState, useLayoutEffect } from 'react';
import 'react-theme-toggle-button/dist/index.css';
import ThemeToggleButton from 'react-theme-toggle-button';
import { NavigtionNavLink, Nav, ContactLink, Logo } from './Navigation.styled';

import logo from '../../images/react.svg';

const Navigation = () => {
  const [isDark, setIsDark] = useState(true); //defolt theme = 'dark'

  useLayoutEffect(() => {
    document.documentElement.querySelector('label>input').checked = true; //defolt theme = 'dark'
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
      <Logo src={logo} alt="Logo" />
      <NavigtionNavLink to="/">Home</NavigtionNavLink>
      <NavigtionNavLink to="/portfolio">Portfolio</NavigtionNavLink>
      <ContactLink href="#footer">Contacts</ContactLink>
      <ThemeToggleButton onChange={onChange} isDark={isDark} />
    </Nav>
  );
};

export default Navigation;
