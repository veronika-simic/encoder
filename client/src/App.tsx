import React from 'react';

import { Route, Routes } from 'react-router-dom';

import EncodePage from './pages/Encode/Encode';
import LoginPage from './pages/Login/LoginPage';
import Logo from './assets/Logo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/encode" element={<EncodePage />} />
    </Routes>
  );
}

export default App;
