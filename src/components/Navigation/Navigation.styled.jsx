import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  position: sticky;
  z-index: 2;
  top: -1px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border-radius: 5px;
  background: var(--color-theme);
  box-shadow: var(--box-shadow-2);
`;

export const ContactLink = styled.a`
  padding: 5px 5px;
  color: var(--text-color);
  background: var(--color-theme-card);
  border: 1px solid var(--text-color);
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover,
  :focus {
    border: 1px solid var(--text-acc);
    box-shadow: var(--box-shadow-2);
    transform: scale(1.1);
    color: var(--text-acc);
    background: var(--hover-theme-card);
  }
`;

export const NavigationNavLink = styled(NavLink)`
  padding: 5px 5px;
  border-radius: 5px;
  text-decoration: none;
  background: var(--color-theme-card);
  border: 1px solid var(--text-color);
  color: var(--text-color);
  transition: all 0.2s ease-out;

  &:hover,
  :focus {
    color: var(--text-acc);
    box-shadow: var(--box-shadow-2);
    border: 1px solid var(--text-acc);
    background: var(--hover-theme-card);
    transform: scale(1.1);
  }

  &.active {
    color: var(--text-acc);
    border: 1px solid var(--text-acc);
    box-shadow: var(--box-shadow-2);
    transform: scale(1.1);
    background: var(--hover-theme-card);
  }
`;

export const Logo = styled.img`
  width: 40px;
  padding-top: 10px;
  padding-bottom: 10px;

  animation: rotate 10s linear infinite;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
