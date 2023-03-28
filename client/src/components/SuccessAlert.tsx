import * as React from 'react';
import { Alert, Snackbar } from '@mui/material';

export default function SuccessAlert() {
  return (
    <Snackbar open autoHideDuration={6000}>
      <Alert severity="success" onClose={() => {}}>
        Hello Optimus Prime
      </Alert>
    </Snackbar>
  );
}
