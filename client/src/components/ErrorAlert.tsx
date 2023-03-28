import * as React from 'react';
import { Alert, Dialog } from '@mui/material';

export default function ErrorAlert() {
  return (
    <Dialog open>
      <Alert severity="error" onClose={() => {}}>
        Error wrong credentials
      </Alert>
    </Dialog>
  );
}
