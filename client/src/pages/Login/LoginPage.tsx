import { TextField, Button, FormControl, FormHelperText } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [containsN, setContainsN] = useState(false);
  const [contains6C, setContains6C] = useState(false);
  const [allValid, setAllValid] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const validateEmail = (email: string) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const validatePassword = (password: string) => {
    if (/\d/.test(password)) setContainsN(true);

    if (password.length >= 6) setContains6C(true);

    if (containsN && contains6C) setAllValid(true);
    return password;
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!validatePassword(e.target.value)) {
      setPasswordError(
        'Password must be at least 6 characters and contain at least one number'
      );
    } else {
      setPasswordError('');
    }
  };

  const navigate = useNavigate();
  const onButtonClick = () => {
    loginUser(email, password);
  };

  useEffect(() => {
    setDisabled(!validateEmail(email));
  }, [email, password]);

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
        required
        value={email}
        onChange={handleEmailChange}
        error={Boolean(emailError)}
        helperText={emailError}
        sx={{ display: 'block', my: '2rem' }}
        inputProps={{
          style: { color: 'white' },
        }}
      />
      <FormHelperText
        id="my-helper-text"
        sx={{ textAlign: 'center', color: 'white' }}
      >
        We&apos;ll never share your email.
      </FormHelperText>

      <TextField
        id="password"
        label="Password"
        variant="standard"
        fullWidth
        required
        autoComplete="current-password"
        value={password}
        onChange={handlePasswordChange}
        error={Boolean(passwordError)}
        helperText={passwordError}
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
        onClick={onButtonClick}
      >
        Log in
      </Button>
      <h3 className="mt-3 text-xl">New user? Sign up</h3>
    </FormControl>
  );
}
