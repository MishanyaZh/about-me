import React, { useEffect, useMemo, useState } from 'react';
import {
  ALL_FILTER,
  COMMERCIAL_PROJECTS,
  FEATURED_PROJECTS,
  LEARNING_SPACE_CASE,
  PROJECTS,
} from '../../Skills/projects';
import FilterButtons from '../../components/Projects/FilterButtons/FilterButtons';
import ProjectsList from '../../components/Projects/ProjectsList';
import PortfolioViewSwitcher, {
  PortfolioView,
} from '../../components/Projects/ViewSwitcher/PortfolioViewSwitcher';
import CommercialCaseCard from '../../components/Projects/CommercialCaseCard/CommercialCaseCard';

import { EmptyState, Title, ViewSwitcherWrapper } from './Portfolio.styled';
import { NavLinkBox } from '../Home/Home.styled';
import { NavigationNavLink } from '../../components/Navigation/Navigation.styled';

const Portfolio = () => {
  const [portfolioView, setPortfolioView] =
    useState<PortfolioView>('commercial');
  const [selectedFilter, setSelectedFilter] = useState(ALL_FILTER);

  const baseProjects = useMemo(() => {
    if (portfolioView === 'commercial') {
      return COMMERCIAL_PROJECTS;
    }
    return portfolioView === 'all' ? PROJECTS : FEATURED_PROJECTS;
  }, [portfolioView]);

  const filteredProjects = useMemo(() => {
    if (portfolioView === 'commercial') {
      return baseProjects;
    }

    if (selectedFilter === ALL_FILTER) {
      return baseProjects;
    }

    return baseProjects.filter(item =>
      item.technologies.includes(selectedFilter),
    );
  }, [baseProjects, portfolioView, selectedFilter]);

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
      {portfolioView === 'commercial' && (
        <CommercialCaseCard caseData={LEARNING_SPACE_CASE} />
      )}
      {portfolioView !== 'commercial' && baseProjects.length > 0 && (
        <FilterButtons
          onChange={setSelectedFilter}
          selectedFilter={selectedFilter}
          projects={baseProjects}
        />
      )}
      {filteredProjects.length === 0 ? (
        <EmptyState>
          {portfolioView === 'featured'
            ? 'Featured projects list is empty. Add links in FEATURED_PROJECT_LINKS.'
            : 'No projects found for this selection.'}
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
