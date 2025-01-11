import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeSwitch from './ThemeToggleButton/ThemeToggleButton';
import { NavigationNavLink, Nav, ContactLink, Logo } from './Navigation.styled';
import logo from '../../images/react.svg';

const Navigation = () => {
  return (
    <Nav className="Navigation">
      <NavLink to="/">
        <Logo src={logo} alt="Logo" />
      </NavLink>
      <NavigationNavLink to="/">Home</NavigationNavLink>
      <NavigationNavLink to="/portfolio">Portfolio</NavigationNavLink>
      <ContactLink href="#footer">Contacts</ContactLink>
      <DarkModeSwitch />
    </Nav>
  );
};

export default Navigation;
