import React, { useEffect, useState } from 'react';
import { buttonsName } from '../../../Skills/projects';
import { Button, ButtonGroup, Box } from '@mui/material';

// interface Iprops {
// handlerButtonGroupSwitch: string;
// ButtonGroup: {
//   sx: { boxShadow: string };
//   onClick: MouseEventHandler;
//   size: { width: string };
//   variant: string;
//   ariaLabel: string;
// };
// }

const FilterButtons = ({ handlerButtonGroupSwitch }) => {
  const [width, setWidth] = useState(window.outerWidth);

  useEffect(() => {
    const widthChangeEvent = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', widthChangeEvent);
    widthChangeEvent();
    return () => {
      window.removeEventListener('resize', widthChangeEvent);
    };
  }, [width]);

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <ButtonGroup
          sx={{ boxShadow: 'var(--box-shadow-wrrap-2)' }}
          onClick={handlerButtonGroupSwitch}
          size={width < 425 ? 'small' : 'medium'}
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
