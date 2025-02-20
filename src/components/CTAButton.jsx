import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const FancyButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  color: '#fff',
  background: 'rgba(255, 215, 0, 0.15)', // very subtle gold tint
  border: '1px solid rgba(255, 215, 0, 0.5)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  boxShadow: '0 0 8px rgba(255, 215, 0, 0.3)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5, 3),
  textTransform: 'none',
  transition: 'all 0.3s ease',
  fontSize: '1rem',
  
  // Glow effect on hover
  '&:hover': {
    background: 'rgba(255, 215, 0, 0.25)',
boxShadow: '0 0 16px rgba(255, 215, 0, 0.6)',
  },

  // Optional pseudo-element for additional glow/gradient overlay
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -4,
    left: -4,
    right: -4,
    bottom: -4,
    background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.3), rgba(255, 215, 0, 0))',
    borderRadius: theme.shape.borderRadius,
    opacity: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
  },
  '&:hover::before': {
    opacity: 1,
  },
}));

const CTAButton = ({ children = 'Jetzt Zeitreise buchen', navigation = '/literatur', ...rest }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigation);
  };

  return (
    <FancyButton
      variant="contained"
      onClick={handleClick}
      {...rest}
    >
      {children}
    </FancyButton>
  );
};

export default CTAButton;