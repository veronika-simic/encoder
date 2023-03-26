import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import EncodePage from './pages/Encode/Encode';
import LoginPage from './pages/Login/LoginPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/encode" element={<EncodePage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
