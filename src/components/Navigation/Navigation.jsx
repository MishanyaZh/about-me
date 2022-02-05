import React from 'react';
import { NavLink } from 'react-router-dom';

import 'react-theme-toggle-button/dist/index.css';
import ToggleButton from 'react-theme-toggle-button';

import { Nav } from './Navigation.styled';

const Navigation = ({ onChange, isDark }) => {
  return (
    <Nav className="Navigation">
      <NavLink to="/">
        <p>logo</p>
      </NavLink>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/portfolio">
        <button>Portfolio</button>
      </NavLink>
      <ToggleButton isDark={isDark} onChange={onChange} />
    </Nav>
  );
};

export default Navigation;
