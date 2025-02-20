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
        position: 'relative',
        top: 100,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > *': {  // Dies zielt auf alle direkten Kinder-Elemente
            width: '100%',
        }
    }}
>
      <Background />
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '100vh',
          textAlign: 'center',
          width: '100vh',
          // translate: '50% 50%',
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
          // height: '100vh',
          textAlign: 'center',
          width: '100vh',
          // translate: '50% 50%',
          px: 2,
        }}
      >
      <ImageTextComponent imageUrl='src/assets/stadt.jpg' text="Haben Sie jemals davon geträumt, in die Vergangenheit zu reisen – berühmte Persönlichkeiten zu treffen, durch alte Städte zu schlendern und das Leben eines Adeligen zu genießen?" />
    </Container>
    </Box>
  );
};

export default Ueberblick;
