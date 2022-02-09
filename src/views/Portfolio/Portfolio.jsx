import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../Skills/projects';
import ProjectsList from '../../components/Projects/ProjectsList';
import { MainPortfolio } from './Portfolio.styled';

const Portfolio = () => {
  return (
    <MainPortfolio>
      <h2>Portfolio</h2>
      <ProjectsList PROJECTS={PROJECTS} />
      <Link to="/">Home</Link>
    </MainPortfolio>
  );
};
export default Portfolio;
