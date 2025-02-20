// components/ContentSection/ContentSection.jsx
import React from 'react';
import { Box, Paper, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

const SectionWrapper = styled(Box)(({ theme, background }) => ({
    backgroundColor: background || 'rgba(173, 216, 230, 0.5)',
    boxShadow: '0px 0px 20px rgba(0,0,0,0.5)',
    padding: theme.spacing(4),
    minHeight: 'calc(100vh - 400px)',
    margin: '1% auto',
    maxWidth: '98%',
    borderRadius: 10,
backgroundImage: 'linear-gradient(120deg, rgba(40, 40, 50, 1) 40%, rgba(80, 80, 100, 1) 100%)',}));

const ContentPaper = ({ title, content, onClick }) => {
    return (
        <Paper
            elevation={16}
            sx={{
                padding: { xs: 2, sm: 4 },
                backgroundColor: 'rgba(60, 60, 60, 0.5)',
                height: '30vh',
                margin: '3%',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.02)' }
            }}
            onClick={onClick}
        >
            <Typography variant="h4" align="center" gutterBottom>
                {title}
            </Typography>
            <Typography component="pre" variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
                {content}
            </Typography>
        </Paper>
    );
};

ContentPaper.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

const ContentSection = ({ title, items }) => {
    return (
        <SectionWrapper>
            <Typography variant="h2" align="center" gutterBottom>
                {title}
            </Typography>
            <Grid container spacing={4}>
                {items.map((item, index) => (
                    <Grid item xs={6} key={index}>
                        <ContentPaper {...item} />
                    </Grid>
                ))}
            </Grid>
        </SectionWrapper>
    );
};

ContentSection.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            onClick: PropTypes.func,
        })
    ).isRequired,
};

export default ContentSection;