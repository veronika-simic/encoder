import * as React from 'react';
import { Alert, Dialog } from '@mui/material';

export default function SuccessAlert() {
  return (
    <Dialog open>
      <Alert severity="success" onClose={() => {}}>
        Successfuly logged in
      </Alert>
    </Dialog>
  );
}
