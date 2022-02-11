import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FrontPage = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;

  @media (max-width: 766px) {
    flex-direction: column;
  }
`;

export const PortfolioButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;

  padding: 10px 10px;

  color: var(--text-color);
  background: var(--color-theme-card);

  border: 1px solid var(--text-color);
  box-shadow: var(--box-shadow-wrrap-1);
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  :focus,
  :active {
    background: var(--hover-theme-card);
    box-shadow: var(--box-shadow-wrrap-2);
    border: 1px solid var(--text-acc);
    transform: scale(1.1);
    color: var(--text-acc);
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
`;

export const TechnicalSkills = styled.div`
  order: -1;
  border-radius: 5px;
  padding: 10px;
  text-transform: uppercase;
  box-shadow: var(--box-shadow-wrrap-1);
  background: var(--color-theme-card);

  @media (max-width: 766px) {
    order: 0;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const SoftSkills = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
  border-radius: 5px;
  text-transform: uppercase;
  background: var(--color-theme-card);
  box-shadow: var(--box-shadow-wrrap-1);

  @media (max-width: 766px) {
    /* flex-direction: row; */
    justify-content: space-around;
    margin-bottom: 10px;
  }
`;

export const EducationSkills = styled.div`
  max-width: 500px;
  padding: 10px;
  flex: 1;
  border-radius: 5px;
  box-shadow: var(--box-shadow-wrrap-1);
  background: var(--color-theme-card);
`;
export const ExperienceSkills = styled.div`
  max-width: 500px;
  padding: 10px;
  flex: 1;
  border-radius: 5px;
  box-shadow: var(--box-shadow-wrrap-1);
  background: var(--color-theme-card);
  @media (max-width: 766px) {
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const DownPage = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-right: 10px;
  margin-left: 10px;

  @media (max-width: 766px) {
    flex-direction: column;
    align-items: center;
  }
`;
