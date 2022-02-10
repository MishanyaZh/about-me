import React from 'react';
// import { Link } from 'react-router-dom';
import { PROJECTS } from '../../Skills/projects';
import ProjectsList from '../../components/Projects/ProjectsList';
import { MainPortfolio } from './Portfolio.styled';
import { PortfolioButton, NavLinkStyled } from '../Home/Home.styled';

const Portfolio = () => {
  return (
    <MainPortfolio>
      <h2>Portfolio</h2>
      <ProjectsList PROJECTS={PROJECTS} />
      <NavLinkStyled to="/">
        <PortfolioButton>Home</PortfolioButton>
      </NavLinkStyled>
    </MainPortfolio>
  );
};
export default Portfolio;
