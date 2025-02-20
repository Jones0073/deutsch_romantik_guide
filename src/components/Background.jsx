// Background.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Box } from '@mui/material';

const Background = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    // Animate from opacity 0 (starting state) to the image's natural opacity (1)
    tl.fromTo(
      imageRef.current,
      { opacity: 0 },
      { duration: 1.5, opacity: 1, ease: 'power1.out' }
    )
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {/* Dark overlay for a glassy effect */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))',
          zIndex: 1,
        }}
      />
      
      {/* Background image without inline opacity */}
      <img
        ref={imageRef}
        src="/der_wanderer.jpg"
        alt="Background"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(2px)',
          opacity: 0,
        }}
      />
    </Box>
  );
};

export default Background;
