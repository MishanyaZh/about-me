import React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';

const FilterButtons = ({ handlerButtonGroupSwitch }) => {
  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <ButtonGroup
          sx={{ boxShadow: 'var(--box-shadow-wrrap-2)' }}
          onClick={handlerButtonGroupSwitch}
          size="small"
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button name="All">All</Button>
          <Button name="React">React</Button>
          <Button name="Html">Vanilla</Button>
          <Button name="Vue">Vue</Button>
          <Button name="Node">Node</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};
export default FilterButtons;
