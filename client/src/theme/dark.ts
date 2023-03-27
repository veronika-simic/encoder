import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF',
      light: '#F7F5F2',
      dark: '#F9F9F9',
    },
  },
});

export default darkTheme;
