import React, { useRef } from 'react';
import { Box } from '@mui/material';
import { Clock, Map } from 'lucide-react'; // Import the icons you need!
import Features from '../components/Features.jsx';
import Quote from '../components/Quote.jsx';

const featuresData = [
  { icon: Clock, title: 'Zeitreisen', desc: 'Tauchen Sie ein in vergangene Epochen' },
  { icon: Map, title: 'Wanderungen', desc: 'Erkunden Sie malerische Landschaften' },
  { imagePath: '/src/assets/der_wanderer.jpg', title: 'Geschichten', desc: 'Entdecken Sie romantische Erzählungen' },
  {
    imagePath: '/src/assets/der_wanderer.jpg',
    title: 'Kunstwerke',
    desc: `Bewundern Sie zeitlose Meisterwerke hier steht jetzt irgendein lustiger und sehr sehr langer beispieltext wie dieser hier:
Morgendämmerung in der Natur (8:00 Uhr)
Ihr Tag beginnt in einem nebelverhangenen Wald bei Heidelberg, wo Sie mit einem jungen Romantiker die Stille der Natur genießen. Beim Spaziergang durch das taufrische Gras lauschen Sie seinen Gedichten, die die Schönheit und Mystik der Landschaft einfangen.
Sehnsucht nach Freiheit (11:00 Uhr)
In der engen Altstadt von Heidelberg erzählt er Ihnen von seiner Melancholie und seiner Ablehnung der bürgerlichen Gesellschaft. Während Sie durch verwinkelte Gassen schlendern, philosophiert er über die Suche nach Wahrheit in der Kunst und Natur.
Künstlerische Inspiration (15:00 Uhr)
Am Nachmittag besuchen Sie eine kleine Weinstube, wo sich eine Gruppe von Malerinnen, Dichterinnen und Musiker*innen trifft. In ausgelassener, aber tiefgründiger Atmosphäre tauschen sie ihre Werke und Emotionen aus, während sanfte Musik den Raum erfüllt.
Abendliche Reflexion am Fluss (19:00 Uhr)
Zum Abschluss sitzen Sie mit Ihrem Gastgeber am Neckarufer, wo der Mond sich im Wasser spiegelt. Er spricht über die Vergänglichkeit des Moments, drückt Ihnen ein handgeschriebenes Gedicht in die Hand – eine Erinnerung an einen Tag voller Sehnsucht, Kunst und Naturverbundenheit.`
  }
];

/**
 * Main component implementing a dark-themed vertical layout
 * matching the provided design screenshot
 */
const Literatur = () => {
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
        '& > *': { // Targets all direct children
          width: '100%',
        }
      }}
    >
      <Features scrollY={0} features={featuresData} />
    </Box>
  );
};

export default Literatur;
