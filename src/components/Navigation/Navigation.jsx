import { NavLink } from 'react-router-dom';

import { Nav } from './Navigation.styled';

const Navigation = () => {
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
    </Nav>
  );
};

export default Navigation;
