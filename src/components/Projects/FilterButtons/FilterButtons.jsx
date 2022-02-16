import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const FilterButtons = () => {
  return (
    <div>
      <Box>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>All</Button>
          <Button>React</Button>
          <Button>Vue</Button>
          <Button>Node</Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};
export default FilterButtons;
