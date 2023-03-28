import React, { useState, useMemo } from 'react';

import { Route, Routes, Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, PaletteMode, createTheme } from '@mui/material';
import EncodePage from './pages/Encode/Encode';
import LoginPage from './pages/Login/LoginPage';
import lightTheme from './theme/light';
import darkTheme from './theme/dark';
import { ColorContext } from './models/ColorContext';
import NavigationBar from './pages/Navigation/NavigationBar';
import ErrorPage from './pages/Error/ErrorPage';

function App() {
  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(mode === 'light' ? lightTheme : darkTheme),
    [mode]
  );
  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Routes>
          <Route
            element={
              <>
                <NavigationBar />
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/encode" element={<EncodePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
