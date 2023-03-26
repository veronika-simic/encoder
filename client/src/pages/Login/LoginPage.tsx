import { Typography, TextField, Button } from '@mui/material';
import React from 'react';

export default function LoginPage() {
  return (
    <>
      <h1 className="text-6xl">LOGIN.</h1>
      <Typography>Welcome Back,</Typography>
      <Typography>Sign in to continue</Typography>
      <TextField id="email" label="Email" variant="standard" />
      <TextField id="password" label="Password" variant="standard" />
      <Typography>Forgot password?</Typography>
      <Button variant="outlined">Log in</Button>
      <Typography>New user? Sign up</Typography>
    </>
  );
}
