// src/Ueberblick.jsx
import Background from '../components/Background';
import Header from '../components/Header';
import { Container, Typography, Button } from '@mui/material';

const Ueberblick = () => {
  const handleTimeTravel = () => {
    // Handle CTA action here (e.g., navigate to booking page)
  };

  return (
    <div>
      <Background />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Header title="My Modern Website" />
        <Typography variant="h4" gutterBottom>
          Buchen Sie jetzt Ihre unvergessliche Zeitreise!
        </Typography>
        <Button variant="contained" size="large" onClick={handleTimeTravel}>
          Jetzt Zeitreise buchen
        </Button>
      </Container>
    </div>
  );
};

export default Ueberblick;
