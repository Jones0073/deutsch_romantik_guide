// components/HeroSection/HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './HeroSection.css';

const HeroSection = ({ backgroundImage, title, content, height = 500, autoFit = true }) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const adjustHeight = () => {
            if (autoFit && imageRef.current && containerRef.current) {
                const imgAspectRatio = imageRef.current.naturalWidth / imageRef.current.naturalHeight;
                const containerWidth = containerRef.current.offsetWidth;
                const calculatedHeight = containerWidth / imgAspectRatio;
                containerRef.current.style.height = `${calculatedHeight}px`;
            }
        };

        const img = imageRef.current;
        if (img && img.complete) {
            adjustHeight();
        } else if (img) {
            img.onload = adjustHeight;
        }

        window.addEventListener('resize', adjustHeight);
        return () => window.removeEventListener('resize', adjustHeight);
    }, [autoFit]);

    return (
        <div
            ref={containerRef}
            className="hero-container"
            style={{
                height: autoFit ? 'auto' : `${height}px`,
                minHeight: autoFit ? `${height}px` : undefined
            }}
        >
            <img
                ref={imageRef}
                src={backgroundImage}
                alt="Hintergrundbild"
                className="background-image"
                style={{
                    objectFit: autoFit ? 'contain' : 'cover',
                    width: '100%',
                    height: '100%'
                }}
            />
            <div className="info-paper">
                <h2>{title}</h2>
<div style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: content }}></div>            </div>
        </div>
    );
};

HeroSection.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    height: PropTypes.number,
    autoFit: PropTypes.bool
};

export default HeroSection;