import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Headline = ({ text }) => {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{ fontWeight: 'bold', color: 'primary.main' }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Headline;
