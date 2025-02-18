/*import React, { useState, useRef } from 'react';
import { Button, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const DropdownButton = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        console.log('Mouse enter');
        clearTimeout(timeoutRef.current);
        setIsHovered(true);
        gsap.fromTo(dropdownRef.current,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        );
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            gsap.to(dropdownRef.current,
                { opacity: 0, y: -10, duration: 0.2, ease: 'power2.in', onComplete: () => setIsHovered(false) }
            );
        }, 200);
    };

    return (
        <Box
            sx={{ position: 'relative' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Button
                component={Link}
                to={item.path}
                sx={{
                    color: 'text.primary',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    padding: '8px 16px',
                }}
            >
                {item.label}
            </Button>

            {isHovered && item.subItems && (
                <Paper
                    ref={dropdownRef}
                    sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        minWidth: 200,
                        bgcolor: 'background.paper',
                        backdropFilter: 'blur(10px)',
                        boxShadow: 3,
                        overflow: 'hidden',
                        opacity: 0,
                    }}
                >
                    <Box sx={{ py: 1 }}>
                        {item.subItems.map((subItem, index) => (
                            <Button
                                key={index}
                                component={Link}
                                to={subItem.path}
                                fullWidth
                                sx={{
                                    px: 3,
                                    py: 1,
                                    justifyContent: 'flex-start',
                                    '&:hover': {
                                        bgcolor: 'action.hover',
                                    }
                                }}
                            >
                                {subItem.label}
                            </Button>
                        ))}
                    </Box>
                </Paper>
            )}
        </Box>
    );
};

export default DropdownButton;*/


// DropdownButton.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {Button, useTheme} from "@mui/material";

const DropdownButton = ({ item }) => {
    const { label, path, subItems } = item;
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    return (
        <Button
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            sx={{
                color: theme.palette.text.primary,
                fontWeight: "bold",
                textTransform: "none",
                padding: "8px 16px",
                transition: "transform 0.2s",
                "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "transparent",
                },
            }}
        >
                {/* Clicking the title navigates to the main path */}
                <StyledLink to={path}>
                    <Title>{label}</Title>
                </StyledLink>
                <ArrowSvgContainer>
                    <ArrowSvg
                        animate={isOpen ? { rotateZ: 180 } : { rotateZ: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        viewBox="0 0 13 7"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.86543 0.373845C0.55918 0.680095 0.55918 1.17385 0.86543 1.4801L6.05918 6.67385C6.30293 6.9176 6.69668 6.9176 6.94043 6.67385L12.1342 1.4801C12.4404 1.17385 12.4404 0.680095 12.1342 0.373845C11.8279 0.067595 11.3342 0.067595 11.0279 0.373845L6.49668 4.89885L1.96543 0.367595C1.66543 0.0675955 1.16543 0.067595 0.86543 0.373845Z"
                            fill="black"
                            fillOpacity="0.54"
                        />
                    </ArrowSvg>
                </ArrowSvgContainer>
            <OptionsContainer
                initial={{ height: 0, opacity: 0 }}
                animate={
                    isOpen
                        ? {
                            height: "auto",
                            opacity: 1,
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"
                        }
                        : {
                            height: 0,
                            opacity: 0,
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                        }
                }
                transition={{ type: "spring", stiffness: 300 }}
            >
                {subItems.map((subItem, index) => (
                    <Option key={index} whileHover={{ backgroundColor: "#f0f0f0" }}>
                        <StyledLink to={subItem.path}>{subItem.label}</StyledLink>
                    </Option>
                ))}
            </OptionsContainer>
        </Button>
    );
};

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TitleContainer = styled.div`
  padding: 8px 16px;
  background-color: #ffffff;
  border: 1px solid #9a9a9a;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.div`
  overflow-wrap: break-word;
`;

const ArrowSvgContainer = styled(motion.span)`
  padding: 0.25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

const ArrowSvg = styled(motion.svg)`
  width: 0.8125rem;
  height: 0.4375rem;
`;

const OptionsContainer = styled(motion.ul)`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: hidden;
  z-index: 100;
`;

const Option = styled(motion.li)`
  padding: 8px 16px;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid #E7E7E7;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default DropdownButton;
