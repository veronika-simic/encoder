import Box from '@mui/material/Box';
import React from 'react';
import SwitchModeButton from '../../components/SwitchButton';
import Logo from '../../assets/Logo';

export default function NavigationBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: '5rem',
        mt: '2rem',
        mx: '3rem',
      }}
    >
      <Logo />
      <SwitchModeButton />
    </Box>
  );
}
