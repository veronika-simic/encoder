import * as React from 'react';
import { Alert, Snackbar } from '@mui/material';

export default function ErrorAlert() {
  return (
    <Snackbar open autoHideDuration={6000}>
      <Alert severity="error" onClose={() => {}}>
        Wrong credentials!
      </Alert>
    </Snackbar>
  );
}
