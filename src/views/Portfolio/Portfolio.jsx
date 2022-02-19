import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../../Skills/projects';
import FilterButtons from '../../components/Projects/FilterButtons/FilterButtons';
import ProjectsList from '../../components/Projects/ProjectsList';

import { Title } from './Portfolio.styled';
import { NavLinkBox } from '../Home/Home.styled';
import { NavigtionNavLink } from '../../components/Navigation/Navigation.styled';

const Portfolio = () => {
  const [allProjects, setAllProjects] = useState(PROJECTS);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    setAllProjects(PROJECTS);
    window.scrollTo(0, 0);
  }, []);

  const handlerButtonGroupSwitch = EventTarget => {
    const curentButton = EventTarget.target.name;
    if (curentButton === 'All') {
      setFilteredProjects(allProjects);
      return;
    }
    setFilteredProjects(
      PROJECTS.filter(item => item.technologies.includes(curentButton)),
    );
  };

  return (
    <>
      <Title>Portfolio</Title>
      <FilterButtons handlerButtonGroupSwitch={handlerButtonGroupSwitch} />
      <ProjectsList PROJECTS={filteredProjects} />
      <NavLinkBox>
        <NavigtionNavLink to="/">Home</NavigtionNavLink>
      </NavLinkBox>
    </>
  );
};
export default Portfolio;
