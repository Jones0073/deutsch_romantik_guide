import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const FadeInText = ({ opSpeed = 1, children, ...typographyProps }) => {
    const [opacity, setOpacity] = useState(0);
    const elementRef = useRef(null);  // Create a ref to the element

    const onScroll = () => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            let newOpacity = (rect.top - window.innerHeight * 1) / (-window.innerHeight / 3);//wenn man das *1 erhöht wird es schneller erscheinen, verringert man es, dauert es länger. weiß gott warum.
            newOpacity = Math.max(0, Math.min(1, newOpacity));
            setOpacity(newOpacity);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <Typography
            {...typographyProps}
            ref={elementRef}  // Assign the ref to the Typography element
            style={{
                ...typographyProps.style,
                opacity: opacity,
                transition: 'opacity 1.1s ease-out'
            }}
        >
            {children}
        </Typography>
    );
};

FadeInText.propTypes = {
    ...Typography.propTypes,
    children: PropTypes.node.isRequired,
};

export default FadeInText;