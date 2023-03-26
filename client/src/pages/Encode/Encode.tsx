import React from 'react';
import { Box, TextField, FormControl, FormHelperText } from '@mui/material';

export default function EncodePage() {
  return (
    <FormControl>
      <h2 className="text-4xl font-normal">What would you like to encode?</h2>
      <TextField
        id="encode"
        variant="standard"
        fullWidth
        sx={{ display: 'block', my: '2rem', color: 'white' }}
      />
      <FormHelperText id="my-helper-text">
        (We only accept alphabetic characters)
      </FormHelperText>
      <h2 className="my-24 text-center text-4xl font-bold">
        YOUR ENCODED STRING
      </h2>
      <Box sx={{ border: '1px solid white', height: '4.5rem' }} />
    </FormControl>
  );
}
