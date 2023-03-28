import React, { useState } from 'react';
import { Box, TextField, FormControl, FormHelperText } from '@mui/material';

export default function EncodePage() {
  const [userInput, setUserInput] = useState('');
  const [userInputError, setUserInputError] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const validateUserInput = (userInput: string) => {
    const userInputRegex = /^[A-Za-z]+$/;
    return userInputRegex.test(userInput);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    if (!validateUserInput(e.target.value)) {
      setUserInputError('Only alphabetic characters are allowed');
    } else {
      setUserInputError('');
    }
  };
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        textAlign: { xs: 'center', sm: 'left' },
        mx: '2rem',
      }}
    >
      <FormControl>
        <h2 className="text-4xl font-normal">What would you like to encode?</h2>
        <TextField
          id="encode"
          variant="standard"
          fullWidth
          value={userInput}
          onChange={handleInputChange}
          error={Boolean(userInputError)}
          helperText={userInputError}
          sx={{ display: 'block', my: '2rem', color: 'white' }}
          FormHelperTextProps={{
            sx: { fontSize: '1rem', textAlign: 'center' },
          }}
        />
        <FormHelperText id="my-helper-text" sx={{ textAlign: 'center' }}>
          (We only accept alphabetic characters)
        </FormHelperText>
        <h2 className="my-24 text-center text-4xl font-bold">
          YOUR ENCODED STRING
        </h2>
        <Box sx={{ border: '1px solid white', height: '4.5rem' }} />
      </FormControl>
    </Box>
  );
}
