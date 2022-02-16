import React, { useEffect } from 'react';
import { PROJECTS } from '../../Skills/projects';
import FilterButtons from '../../components/Projects/FilterButtons/FilterButtons';
import ProjectsList from '../../components/Projects/ProjectsList';
import { MainPortfolio, Title } from './Portfolio.styled';
import { PortfolioButton, NavLinkStyled } from '../Home/Home.styled';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainPortfolio>
      <Title>Portfolio</Title>
      <FilterButtons />
      <ProjectsList PROJECTS={PROJECTS} />
      <NavLinkStyled to="/">
        <PortfolioButton>Home</PortfolioButton>
      </NavLinkStyled>
    </MainPortfolio>
  );
};
export default Portfolio;
