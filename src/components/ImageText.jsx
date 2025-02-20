import React from 'react';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

/**
 * Component that displays an image alongside text in a responsive grid layout
 *
 * @param {Object} props Component properties
 * @param {string} props.imageUrl URL of the image to display
 * @param {string} [props.altText='Image'] Alt text for the image
 * @param {string} props.text Text content to display next to the image
 * @returns {React.ReactElement} Rendered component
 */
const ImageTextComponent = ({ imageUrl, altText = 'Image', text }) => {
    return (
        <Box sx={{ width: '100%', p: 2 }}>
            <Grid container spacing={2} alignItems="center">
                {/* Image container */}
                <Grid item xs={12} sm="auto">
                    <Box
                        component="img"
                        src={imageUrl}
                        alt={altText}
                        sx={{
                            maxWidth: '100%',
                            height: 'auto',
                            display: 'block'
                        }}
                    />
                </Grid>

                {/* Text container */}
                <Grid item xs={12} sm>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: 'Roboto, Arial, sans-serif',
                            wordBreak: 'break-word'
                        }}
                    >
                        {text}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ImageTextComponent;