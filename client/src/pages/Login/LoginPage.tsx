import {
  Typography,
  TextField,
  Button,
  FormControl,
  FormHelperText,
} from '@mui/material';
import React from 'react';

export default function LoginPage() {
  return (
    <FormControl>
      <h1 className="mb-6 text-6xl font-bold">LOGIN.</h1>
      <h2 className="mb-2 text-5xl tracking-wide">Welcome Back,</h2>
      <h2 className="text-4xl font-light">Sign in to continue</h2>

      <TextField
        id="email"
        label="Email"
        variant="standard"
        fullWidth
        sx={{ display: 'block', my: '2rem' }}
        inputProps={{
          style: { color: 'white' },
        }}
      />
      <FormHelperText id="my-helper-text">
        We&apos;ll never share your email.
      </FormHelperText>

      <TextField
        id="password"
        label="Password"
        variant="standard"
        fullWidth
        sx={{ display: 'block', mt: '2rem', mb: '1rem' }}
        inputProps={{
          style: { color: 'white' },
        }}
      />

      <h3 className="text-xl">Forgot password?</h3>
      <Button
        variant="outlined"
        sx={{
          borderColor: 'white',
          color: 'white',
          fontSize: '2rem',
          padding: '1rem 2.5rem',
          my: '2rem',
        }}
      >
        Log in
      </Button>
      <h3 className="mt-3 text-xl">New user? Sign up</h3>
    </FormControl>
  );
}
