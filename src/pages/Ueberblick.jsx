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
      <ImageTextComponent imageUrl='/stadt.jpg' text="Haben Sie jemals davon geträumt, in die Vergangenheit zu reisen – berühmte Persönlichkeiten zu treffen, durch alte Städte zu schlendern und das Leben eines Adeligen zu genießen?" />
      <Typography variant="h4" height='1vh' margin='10vh'>
          Das erleben Sie
        </Typography>
        <ImageTextComponent 
  imageUrl='src/assets/kultur.jpg' 
  text={"• kulturgeschichtliche Epoche von Ende des 18. Jahrhunderts bis weit ins 19. Jahrhundert\n• vor allem Äußerung in Gebieten der bildenden Kunst, der Literatur und der Musik\n• aber auch Einfluss auf Geschichte, Theologie, Philosophie und Naturwissenschaften und Medizin"} 
/>
<Typography variant="h4" height='4vh' margin='6vh'>
          Geschichtlich
        </Typography>
<ImageTextComponent 
  imageUrl='src/assets/Jahreszeiten.jpg' 
  text={"• Frühromantik (ab 1740/50) entgegen der gesellschaftlichen Ordnung der Aufklärung; bis zur französischen Revolution\n• Hochromantik (ab 1804) bis zum Beginn der Herrschaft Napoleons über Europa\n• Spätromantik (1815-1830/1835) nach den Befreiungskriegen und dem Wiener Kongress"} 
/>
      </Container>
    </Box>
  );
};

export default Ueberblick;
