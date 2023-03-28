import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#010203',
      light: '#B2B2B2',
      dark: '#191825',
    },
  },
});

export default lightTheme;
