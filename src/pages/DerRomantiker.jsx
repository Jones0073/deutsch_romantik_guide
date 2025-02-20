import React, {useRef} from 'react';
import {Box} from "@mui/material";
import {Clock, Map, Book, Camera} from 'lucide-react';

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
    <Features scrollY={0} features={[
        {imagePath: "/src/assets/Morgendämmerung.jpg", title: "Morgendämmerung in der Natur (8:00 Uhr)", desc: "Ihr Tag beginnt in einem nebelverhangenen Wald bei Heidelberg, wo Sie mit einem jungen Romantiker die Stille der Natur genießen. Beim Spaziergang durch das taufrische Gras lauschen Sie seinen Gedichten, die die Schönheit und Mystik der Landschaft einfangen."},
        {imagePath: "/src/assets/Sehnsucht.jpg", title: "Sehnsucht nach Freiheit (11:00 Uhr)", desc: "In der engen Altstadt von Heidelberg erzählt er Ihnen von seiner Melancholie und seiner Ablehnung der bürgerlichen Gesellschaft. Während Sie durch verwinkelte Gassen schlendern, philosophiert er über die Suche nach Wahrheit in der Kunst und Natur."},
        {imagePath: "/src/assets/Inspiration.jpg", title: "Künstlerische Inspiration (15:00 Uhr)", desc: "Am Nachmittag besuchen Sie eine kleine Weinstube, wo sich eine Gruppe von Malerinnen, Dichterinnen und Musiker*innen trifft. In ausgelassener, aber tiefgründiger Atmosphäre tauschen sie ihre Werke und Emotionen aus, während sanfte Musik den Raum erfüllt."},
        {
            imagePath: "/src/assets/Reflexion.jpg",
            title: "Abendliche Reflexion am Fluss (19:00 Uhr)",
            desc: "Zum Abschluss sitzen Sie mit Ihrem Gastgeber am Neckarufer, wo der Mond sich im Wasser spiegelt. Er spricht über die Vergänglichkeit des Moments, drückt Ihnen ein handgeschriebenes Gedicht in die Hand – eine Erinnerung an einen Tag voller Sehnsucht, Kunst und Naturverbundenheit."}
    ]}/>
</Box>
    );
};

export default DerRomantiker;
