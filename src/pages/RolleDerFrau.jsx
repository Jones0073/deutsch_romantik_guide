import React, {useRef} from 'react';
import {Box} from "@mui/material";

import Features from "../components/Features.jsx";
import Quote from "../components/Quote.jsx";

/**
 * Main component implementing a dark-themed vertical layout
 * matching the provided design screenshot
 */

const RolleDerFrau = () => {
    const ref = useRef(null);
    return (
        <Box
            sx={{
                position: 'relative',
                top: 0,
                left: 0,
                width: '99vw',
                minHeight: '100vh',
                zIndex: -1,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                '& > *': {  // Dies zielt auf alle direkten Kinder-Elemente
                    width: '100%',
                }
            }}
        >
            <Features scrollY={0} />
        </Box>
    );
};

export default RolleDerFrau;
