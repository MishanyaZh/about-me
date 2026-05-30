import React, { MouseEvent, useEffect, useMemo, useState } from 'react';
import { ALL_FILTER, buttonsName } from '../../../Skills/projects';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { sharedToggleButtonGroupSx } from '../sharedToggleButtonSx';

interface ProjectItem {
  technologies: string;
}

interface FilterButtonsInterface {
  onChange: (filterName: string) => void;
  selectedFilter: string;
  projects: ProjectItem[];
}

const FilterButtons = ({
  onChange,
  selectedFilter,
  projects,
}: FilterButtonsInterface) => {
  const [width, setWidth] = useState(window.outerWidth);

  const visibleButtons = useMemo(
    () =>
      buttonsName.filter(
        button =>
          button === ALL_FILTER ||
          projects.some(project => project.technologies.includes(button)),
      ),
    [projects],
  );

  const handleFilterChange = (
    _: MouseEvent<HTMLElement>,
    nextFilter: string | null,
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
