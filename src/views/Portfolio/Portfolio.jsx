import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../Skills/projects';
import ProjectsList from '../../components/Projects/ProjectsList';

const Portfolio = () => {
  return (
    <main>
      <h2>Portfolio</h2>
      <ProjectsList PROJECTS={PROJECTS} />
      <Link to="/">Home</Link>
    </main>
  );
};
export default Portfolio;
