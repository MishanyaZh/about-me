import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../../Skills/projects';
import FilterButtons from '../../components/Projects/FilterButtons/FilterButtons';
import ProjectsList from '../../components/Projects/ProjectsList';

import { Title } from './Portfolio.styled';
import { NavLinkBox } from '../Home/Home.styled';
import { NavigationNavLink } from '../../components/Navigation/Navigation.styled';

type fn = (EventTarget: {
  target: {
    name: string;
  };
}) => void;

const Portfolio = () => {
  const [allProjects, setAllProjects] = useState(PROJECTS);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    setAllProjects(PROJECTS);
    window.scrollTo(0, 0);
  }, []);

  const handlerButtonGroupSwitch: fn = EventTarget => {
    const currentButton = EventTarget.target.name;
    if (currentButton === 'All') {
      setFilteredProjects(allProjects);
      return;
    }
    setFilteredProjects(
      PROJECTS.filter(item => item.technologies.includes(currentButton)),
    );
  };

  return (
    <>
      <Title>Portfolio</Title>
      <FilterButtons handlerButtonGroupSwitch={handlerButtonGroupSwitch} />
      <ProjectsList PROJECTS={filteredProjects} />
      <NavLinkBox>
        <NavigationNavLink to="/">Home</NavigationNavLink>
      </NavLinkBox>
    </>
  );
};
export default Portfolio;
