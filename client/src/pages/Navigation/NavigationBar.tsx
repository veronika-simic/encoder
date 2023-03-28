import Box from '@mui/material/Box';
import React from 'react';
import SwitchModeButton from '../../components/SwitchButton';
import Logo from '../../assets/Logo';

export default function NavigationBar() {
  return (
    <Box
      sx={{
        m: { xs: 0, sm: '1.5rem' },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Logo />
      <SwitchModeButton />
    </Box>
  );
}
