import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  box-shadow: var(--box-shadow-wrrap-1);
`;

export const ContactLink = styled.a`
  padding: 5px 5px;

  color: var(--text-color);
  background: var(--color-theme-card);

  border: 1px solid var(--text-color);
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  :focus {
    border: 1px solid var(--text-acc);
    box-shadow: var(--box-shadow-wrrap-2);
    transform: scale(1.1);
    color: var(--text-acc);
    background: var(--hover-theme-card);
  }
`;

export const NavigtionNavLink = styled(NavLink)`
  padding: 5px 5px;
  border-radius: 5px;

  text-decoration: none;
  background: var(--color-theme-card);
  border: 1px solid var(--text-color);
  color: var(--text-color);

  &:hover,
  :focus {
    color: var(--text-acc);
    box-shadow: var(--box-shadow-wrrap-2);
    border: 1px solid var(--text-acc);
    background: var(--hover-theme-card);
    transform: scale(1.1);
  }

  &.active {
    color: var(--text-acc);
    border: 1px solid var(--text-acc);
    box-shadow: var(--box-shadow-wrrap-2);
    transform: scale(1.1);
    background: var(--hover-theme-card);
  }
`;
