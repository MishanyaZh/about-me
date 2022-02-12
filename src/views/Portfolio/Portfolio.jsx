import React from 'react';
import { PROJECTS } from '../../Skills/projects';
import FilterButtons from '../../components/Projects/FilterButtons/FilterButtons';
import ProjectsList from '../../components/Projects/ProjectsList';
import { MainPortfolio } from './Portfolio.styled';
import { PortfolioButton, NavLinkStyled } from '../Home/Home.styled';

const Portfolio = () => {
  return (
    <MainPortfolio>
      <h2>Portfolio</h2>
      <FilterButtons />
      <ProjectsList PROJECTS={PROJECTS} />
      <NavLinkStyled to="/">
        <PortfolioButton>Home</PortfolioButton>
      </NavLinkStyled>
    </MainPortfolio>
  );
};
export default Portfolio;
