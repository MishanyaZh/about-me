import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const FilterButtons = ({ react, all, vue, node, vanilla }) => {
  return (
    <>
      <Box>
        <ButtonGroup
          size="small"
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button onClick={all}>All</Button>
          <Button onClick={react}>React</Button>
          <Button onClick={vanilla}>Vanilla</Button>
          <Button onClick={vue}>Vue</Button>
          <Button onClick={node}>Node</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};
export default FilterButtons;
