import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { sharedToggleButtonGroupSx } from '../sharedToggleButtonSx';

export type PortfolioView = 'all' | 'featured' | 'commercial';

interface PortfolioViewSwitcherProps {
  value: PortfolioView;
  onChange: (view: PortfolioView) => void;
}

const PortfolioViewSwitcher = ({
  value,
  onChange,
}: PortfolioViewSwitcherProps) => {
  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    nextView: PortfolioView | null,
  ) => {
    if (!nextView) {
      return;
    }
    onChange(nextView);
  };

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="portfolio view switcher"
      sx={sharedToggleButtonGroupSx}
    >
      <ToggleButton value="commercial" aria-label="commercial projects">
        Commercial
      </ToggleButton>
      <ToggleButton value="featured" aria-label="featured projects">
        Featured
      </ToggleButton>
      <ToggleButton value="all" aria-label="all projects">
        All projects
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default PortfolioViewSwitcher;
