import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../../Skills/projects';
import FilterButtons from '../../components/Projects/FilterButtons/FilterButtons';
import ProjectsList from '../../components/Projects/ProjectsList';
import { Title } from './Portfolio.styled';
import { PortfolioButton, NavLinkStyled } from '../Home/Home.styled';

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  useEffect(() => {
    setFilteredProjects(PROJECTS);
    window.scrollTo(0, 0);
  }, []);

  const hendleButtonReact = () => {
    setFilteredProjects(
      PROJECTS.filter(item => item.technologies.includes('React')),
    );
  };
  const hendleButtonVue = () => {
    setFilteredProjects(
      PROJECTS.filter(item => item.technologies.includes('Vue')),
    );
  };
  const hendleButtonNode = () => {
    setFilteredProjects(
      PROJECTS.filter(item => item.technologies.includes('Node')),
    );
  };
  const hendleButtonVanilla = () => {
    setFilteredProjects(
      PROJECTS.filter(item => item.technologies.includes('Html')),
    );
  };

  const hendleButtonAll = () => {
    setFilteredProjects(PROJECTS);
  };

  return (
    <>
      <Title>Portfolio</Title>
      <FilterButtons
        react={hendleButtonReact}
        all={hendleButtonAll}
        vue={hendleButtonVue}
        node={hendleButtonNode}
        vanilla={hendleButtonVanilla}
      />
      <ProjectsList PROJECTS={filteredProjects} />
      <NavLinkStyled to="/">
        <PortfolioButton>Home</PortfolioButton>
      </NavLinkStyled>
    </>
  );
};
export default Portfolio;
