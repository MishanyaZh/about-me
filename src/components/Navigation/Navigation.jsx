import { NavLink } from 'react-router-dom';

import ToggleButton from 'react-theme-toggle-button';
import 'react-theme-toggle-button/dist/index.css';

import { Nav } from './Navigation.styled';

const Navigation = ({ handleChangeTheme }) => {
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
      <ToggleButton onChange={handleChangeTheme} />
    </Nav>
  );
};

export default Navigation;
