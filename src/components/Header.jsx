import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Headline = ({ text }) => {
  return (
    <Box
      sx={{
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg,rgba(252, 228, 236, 0) 0%,rgbrgba(243, 229, 245, 0)0%)',
        p: 2,
        border: '1px solid rgba(0, 0, 0, 0)', // Debug border
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 'bold',
          color: (theme) => theme.palette.primary.contrastText,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          fontFamily: '"Playfair Display", serif',
          letterSpacing: '2px',
          textAlign: 'center',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

Headline.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Headline;
