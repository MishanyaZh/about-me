import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../Skills/projects';
import ProjectsList from '../../components/Projects/ProjectsList';

const Portfolio = () => {
  return (
    <main>
      <Link to="/">Home</Link>
      <h2>Portfolio</h2>
      <ProjectsList PROJECTS={PROJECTS} />
    </main>
  );
};
export default Portfolio;
