import React, { useState } from 'react';
import {
  Box,
  TextField,
  FormControl,
  FormHelperText,
  useTheme,
} from '@mui/material';
import { encodeUserInput } from '../../api/axios';

export default function EncodePage() {
  const [userInputError, setUserInputError] = useState('');
  const [encodedUserInput, setEncodedUserInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const validateUserInput = (userInput: string) => {
    const userInputRegex = /^[A-Za-z]+$/;
    return userInputRegex.test(userInput);
  };
  const getEncodedString = async (value: string) => {
    const response = await encodeUserInput(value);
    if (typeof response === 'string') {
      setErrorMessage('You have to login');
    } else {
      setEncodedUserInput(response.data);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateUserInput(e.target.value)) {
      setUserInputError('Only alphabetic characters are allowed');
    } else {
      setUserInputError('');
      getEncodedString(e.target.value);
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
          onChange={handleInputChange}
          error={Boolean(userInputError)}
          helperText={userInputError}
          sx={{ display: 'block', my: '2rem', overflowWrap: 'break-word' }}
          inputProps={{
            style: {
              color: theme.palette.primary.main,
              fontSize: '2rem',
              textAlign: 'center',
            },
          }}
          FormHelperTextProps={{
            sx: { fontSize: '1rem', textAlign: 'center' },
          }}
        />
        <FormHelperText
          id="my-helper-text"
          sx={{ textAlign: 'center', fontSize: '1.5rem' }}
        >
          (We only accept alphabetic characters)
        </FormHelperText>
        <h2 className="my-24 hidden text-center text-4xl font-bold md:block">
          YOUR ENCODED STRING
        </h2>
        <Box
          sx={{
            alignItems: 'center',
            border: '2px solid',
            borderColor: theme.palette.primary.main,
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p className="break-all text-center text-6xl">
            {!userInputError && encodedUserInput}
          </p>
        </Box>
        <p className="mt-12 text-center text-4xl  text-red-600">
          {errorMessage && errorMessage}
        </p>
      </FormControl>
    </Box>
  );
}
