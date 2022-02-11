import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: blue;
  cursor: pointer;
  border: 1px solid blue;
`;

export const PortfolioButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;

  padding: 10px 10px;

  color: var(--text-acc);
  background: var(--hover-theme-card);

  border: 1px solid var(--text-acc);
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  :focus,
  :target,
  :active {
    box-shadow: var(--box-shadow-wrrap-2);
    transform: scale(1.1);
  }
`;

export const NavigtionNavLink = styled(NavLink)`
  padding: 5px 5px;
  border: 1px solid var(--text-acc);
  border-radius: 5px;
  text-decoration: none;
  /* color: var(--text-color); */
  /* background: var(--hover-theme-card); */
`;
