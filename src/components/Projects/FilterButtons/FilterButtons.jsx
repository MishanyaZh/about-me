import React from 'react';
import { buttonsName } from '../../../Skills/projects';
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
          {buttonsName.map((button, index) => (
            <Button key={index} name={button}>
              {button}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </>
  );
};
export default FilterButtons;
