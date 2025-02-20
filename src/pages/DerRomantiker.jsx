import React, {useRef} from 'react';
import {Box} from "@mui/material";

import Features from "../components/Features.jsx";
import Quote from "../components/Quote.jsx";

/**
 * Main component implementing a dark-themed vertical layout
 * matching the provided design screenshot
 */

const DerRomantiker = () => {
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
    <Quote
        quote="Ich fühle mich so selig, so lebendig. Jeder Baum, jede Hecke ist ein Strauß von Blüten, und man möchte zum Maikäfer werden, um in dem Meer von Wohlgerüchen herumschweben zu können."
        author="Johann Wolfgang von Goethe"
        year="1774"
        source="Die Leiden des jungen Werther"
    />
</Box>
    );
};

export default DerRomantiker;
