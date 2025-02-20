// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';

// Import your page components
import Ueberblick from './pages/Ueberblick';
import Literatur from './pages/Literatur';
import Geschichte from './pages/Geschichte';
import RolleDerFrau from './pages/RolleDerFrau';
import KunstMusik from './pages/KunstMusik';
import DerRomantiker from './pages/DerRomantiker';

// Create your theme (change mode to 'dark' if you want a dark theme)
const theme = createTheme({
  palette: {
    mode: 'light',
  },
  zIndex: {
    appBar: 1900,
    drawer: 1100,
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* The Navbar will appear on every page */}
      <Navbar />
      <div style={{ marginTop: "50px" }}>
      <Routes >
        {/* Define your routes */}
        <Route path="/uberblick" element={<Ueberblick />} />
        <Route path="/literatur" element={<Literatur />} />
        <Route path="/geschichte" element={<Geschichte />} />
        <Route path="/rolle-der-frau" element={<RolleDerFrau />} />
        <Route path="/kunst-musik" element={<KunstMusik />} />
        <Route path="/der-romantiker" element={<DerRomantiker />} />
        {/* Optionally, set a default route */}
        <Route path="/" element={<Ueberblick />} />
      </Routes>
        </div>
    </ThemeProvider>
  );
};

export default App;
