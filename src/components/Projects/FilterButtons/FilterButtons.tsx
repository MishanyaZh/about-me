import React, { MouseEvent, useEffect, useMemo, useState } from 'react';
import {
  getVisibleTechnologyFilters,
  PortfolioFilter,
  PortfolioProject,
} from '../../../Skills/projects';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { sharedToggleButtonGroupSx } from '../sharedToggleButtonSx';

interface FilterButtonsInterface {
  onChange: (filterName: PortfolioFilter) => void;
  selectedFilter: PortfolioFilter;
  projects: PortfolioProject[];
}

const FilterButtons = ({
  onChange,
  selectedFilter,
  projects,
}: FilterButtonsInterface) => {
  const [width, setWidth] = useState(window.outerWidth);

  const visibleButtons: PortfolioFilter[] = useMemo(
    () => ['All', ...getVisibleTechnologyFilters(projects)],
    [projects],
  );

  const handleFilterChange = (
    _: MouseEvent<HTMLElement>,
    nextFilter: PortfolioFilter | null,
  ) => {
    if (!nextFilter) {
      return;
    }
    onChange(nextFilter);
  };

  useEffect(() => {
    const widthChangeEvent = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', widthChangeEvent);
    widthChangeEvent();
    return () => {
      window.removeEventListener('resize', widthChangeEvent);
    };
  }, []);

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <ToggleButtonGroup
          value={selectedFilter}
          exclusive
          onChange={handleFilterChange}
          size={width < 425 ? 'small' : 'medium'}
          aria-label="technology filters"
          sx={sharedToggleButtonGroupSx}
        >
          {visibleButtons.map(button => (
            <ToggleButton key={button} value={button} aria-label={button}>
              {button}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </>
  );
};
export default FilterButtons;
