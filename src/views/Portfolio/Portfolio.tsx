import React, { useEffect, useMemo, useState } from 'react';
import { ALL_FILTER, FEATURED_PROJECTS, PROJECTS } from '../../Skills/projects';
import FilterButtons from '../../components/Projects/FilterButtons/FilterButtons';
import ProjectsList from '../../components/Projects/ProjectsList';
import PortfolioViewSwitcher, {
  PortfolioView,
} from '../../components/Projects/ViewSwitcher/PortfolioViewSwitcher';

import { EmptyState, Title, ViewSwitcherWrapper } from './Portfolio.styled';
import { NavLinkBox } from '../Home/Home.styled';
import { NavigationNavLink } from '../../components/Navigation/Navigation.styled';

const Portfolio = () => {
  const [portfolioView, setPortfolioView] = useState<PortfolioView>('featured');
  const [selectedFilter, setSelectedFilter] = useState(ALL_FILTER);

  const baseProjects = useMemo(
    () => (portfolioView === 'all' ? PROJECTS : FEATURED_PROJECTS),
    [portfolioView],
  );

  const filteredProjects = useMemo(() => {
    if (selectedFilter === ALL_FILTER) {
      return baseProjects;
    }

    return baseProjects.filter(item =>
      item.technologies.includes(selectedFilter),
    );
  }, [baseProjects, selectedFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSelectedFilter(ALL_FILTER);
  }, [portfolioView]);

  return (
    <>
      <Title>Portfolio</Title>
      <ViewSwitcherWrapper>
        <PortfolioViewSwitcher
          value={portfolioView}
          onChange={setPortfolioView}
        />
      </ViewSwitcherWrapper>
      {baseProjects.length > 0 && (
        <FilterButtons
          onChange={setSelectedFilter}
          selectedFilter={selectedFilter}
          projects={baseProjects}
        />
      )}
      {filteredProjects.length === 0 ? (
        <EmptyState>
          Featured projects list is empty. Add links in FEATURED_PROJECT_LINKS.
        </EmptyState>
      ) : (
        <ProjectsList PROJECTS={filteredProjects} />
      )}
      <NavLinkBox>
        <NavigationNavLink to="/">Home</NavigationNavLink>
      </NavLinkBox>
    </>
  );
};
export default Portfolio;
