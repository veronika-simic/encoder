import { Typography, useTheme, Box } from '@mui/material';
import React from 'react';

export default function ErrorPage() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: { xs: 'center', sm: 'left' },
        mx: '2rem',
        mt: '4rem',
        rowGap: '3rem',
      }}
    >
      <Typography variant="h2">OOOOOOOOPS !</Typography>
      <Typography variant="h5">
        <span style={{ marginLeft: '3.5rem' }}>
          We don&apos;t have this page.
        </span>
        <span style={{ display: 'block' }}>
          The responsible person will be fired.
        </span>
      </Typography>
      <Typography variant="subtitle2">thanks to you</Typography>
    </Box>
  );
}
