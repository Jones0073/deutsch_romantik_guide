// src/Ueberblick.jsx
import Background from '../components/Background';
import Header from '../components/Header';
import CTAButton from '../components/CTAButton';
import ImageTextComponent from '../components/ImageText';
import { Container, Typography, Button, Box} from '@mui/material';

const Ueberblick = () => {
  const handleTimeTravel = () => {
    // Handle CTA action here (e.g., navigate to booking page)
  };

  return (
    <Box
    sx={{
        minWidth: '99vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    }}
>
      <Background />
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          textAlign: 'center',
          width: '100vw',
          px: 2,
        }}
      >
        <Header text="Erleben Sie die Romantik" />
        <Typography variant="h4" gutterBottom>
          Buchen Sie jetzt Ihre unvergessliche Zeitreise!
        </Typography>
        <CTAButton/>
      </Container>
      <Container
          sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              width: '100%',
              px: 2,
              mb: 4
          }}
      >
      <ImageTextComponent imageUrl='src/assets/stadt.jpg' text="Haben Sie jemals davon geträumt, in die Vergangenheit zu reisen – berühmte Persönlichkeiten zu treffen, durch alte Städte zu schlendern und das Leben eines Adeligen zu genießen?" />
    </Container>
    </Box>
  );
};

export default Ueberblick;
