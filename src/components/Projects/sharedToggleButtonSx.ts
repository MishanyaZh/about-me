import { SxProps, Theme } from '@mui/material/styles';

export const sharedToggleButtonGroupSx: SxProps<Theme> = {
  boxShadow: 'var(--box-shadow-2)',
  maxWidth: '99%',
  '& .MuiToggleButton-root': {
    color: 'var(--text-color)',
    borderColor: 'var(--text-color-alpha-50)',
    textTransform: 'none',
  },
  '& .MuiToggleButton-root.Mui-selected': {
    color: 'var(--text-color)',
    backgroundColor: 'var(--text-color-alpha-12)',
  },
  '& .MuiToggleButton-root.Mui-selected:hover': {
    backgroundColor: 'var(--text-color-alpha-20)',
  },
};
