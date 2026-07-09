import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  position: sticky;
  z-index: 3;
  top: -1px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin: 10px 10px 0;
  padding: 8px 10px;
  border-radius: 18px;
  border: 1px solid var(--surface-border);
  backdrop-filter: blur(14px);
  background: rgba(var(--color-theme-rgb), 0.78);
  box-shadow: var(--box-shadow-2);
`;

export const ContactLink = styled.a`
  padding: 7px 10px;
  color: var(--text-color);
  background: var(--color-theme-card);
  border: 1px solid var(--surface-border);
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease-out, background-color 0.2s ease-out,
    box-shadow 0.2s ease-out, color 0.2s ease-out, border-color 0.2s ease-out;

  &:hover,
  :focus {
    border: 1px solid var(--surface-border-strong);
    box-shadow: var(--box-shadow-2);
    transform: translateY(-2px);
    color: var(--text-acc);
    background: var(--hover-theme-card);
  }
`;

export const NavigationNavLink = styled(NavLink)`
  padding: 7px 10px;
  border-radius: 12px;
  text-decoration: none;
  background: var(--color-theme-card);
  border: 1px solid var(--surface-border);
  color: var(--text-color);
  transition: transform 0.2s ease-out, background-color 0.2s ease-out,
    box-shadow 0.2s ease-out, color 0.2s ease-out, border-color 0.2s ease-out;

  &:hover,
  :focus {
    color: var(--text-acc);
    box-shadow: var(--box-shadow-2);
    border: 1px solid var(--surface-border-strong);
    background: var(--hover-theme-card);
    transform: translateY(-2px);
  }

  &.active {
    color: var(--text-acc);
    border: 1px solid var(--surface-border-strong);
    box-shadow: var(--box-shadow-2);
    transform: translateY(-2px);
    background: var(--hover-theme-card);
  }
`;

export const Logo = styled.img`
  width: 40px;
  padding-top: 10px;
  padding-bottom: 10px;

  animation: rotate 16s linear infinite;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
