import React, { useEffect, useState } from 'react';
import { buttonsName } from '../../../Skills/projects';
import { Button, ButtonGroup, Box } from '@mui/material';

interface FilterButtonsInterface {
  handlerButtonGroupSwitch: (EventTarget: {
    target: {
      name: string;
    };
  }) => void;
}

const FilterButtons = ({
  handlerButtonGroupSwitch,
}: FilterButtonsInterface) => {
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
        <ButtonGroup<any>
          sx={{ boxShadow: 'var(--box-shadow-2)', maxWidth: '99%' }}
          onClick={handlerButtonGroupSwitch}
          size={width < 425 ? 'small' : 'medium'}
          variant="outlined"
          aria-label="outlined button group"
          component={undefined}
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
