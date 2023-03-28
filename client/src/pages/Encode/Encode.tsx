import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  FormControl,
  FormHelperText,
  useTheme,
} from '@mui/material';
import { encodeUserInput } from '../../api/axios';

export default function EncodePage() {
  const [userInput, setUserInput] = useState('');
  const [userInputError, setUserInputError] = useState('');
  const [encodedUserInput, setEncodedUserInput] = useState('');
  const theme = useTheme();
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

  useEffect(() => {
    const getEncodedString = async () => {
      const response = await encodeUserInput(userInput);
      setEncodedUserInput(response.data);
    };
    getEncodedString();
  }, [userInput]);

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
          sx={{ display: 'block', my: '2rem' }}
          inputProps={{
            style: { color: theme.palette.primary.main, fontSize: '2rem' },
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
            border: '2px solid',
            borderColor: theme.palette.primary.main,
            height: '4.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p className="text-center text-6xl">
            {!userInputError && encodedUserInput}
          </p>
        </Box>
      </FormControl>
    </Box>
  );
}
