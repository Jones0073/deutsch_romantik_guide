import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';

const ImageTextComponent = ({ imageUrl, altText = 'Image', text }) => {
  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Grid2 container alignItems="center">
        {/* Left: Image */}
        <Grid2 item xs="auto">
          <Box
            component="img"
            src={imageUrl}
            alt={altText}
            sx={{
              maxWidth: '100%',
              height: 'auto',
              mr: 2,
            }}
          />
        </Grid2>
        {/* Right: Text */}
        <Grid2 item xs>
          <Typography
            variant="h5"  // larger text variant
            sx={{
              fontFamily: 'Roboto, Arial, sans-serif',  // clean, modern font stack
            }}
          >
            {text}
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ImageTextComponent;
