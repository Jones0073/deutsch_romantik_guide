import React, {useRef} from 'react';
import {Box} from "@mui/material";
import {Clock, Map, Book, Camera} from 'lucide-react';
import HeroSection from '../components/HeroSection/HeroSection';


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
    <HeroSection
                    backgroundImage="src/assets/DerRomantiker.jpg"
                    title="Der Romantiker"
                    content={`Der idealtypische Romantiker des 19. Jahrhunderts, dem Sie auf Ihrer Reise begegnen werden, ist geprägt von einer tiefen Sehnsucht nach Individualität, inneren Gefühlen und einer engen Verbindung zur Natur. Er lehnt die rationalen Prinzipien der Aufklärung ab und sucht in der Kunst, den Emotionen und der Natur eine höhere Wahrheit. Der Romantiker ist oft melancholisch und distanziert sich von der bürgerlichen Gesellschaft – ähnlich wie Bewegungen, die gesellschaftliche Normen, wie die Punks, in Frage stellen.

<strong style="color: #8b4513">Persönlichkeitsmerkmale:</strong>
- Emotionale Tiefe: Der Romantiker lebt durch seine intensiven Gefühle und eine starke innere Welt.
- Naturverbundenheit: Die Natur wird als Ort der Zuflucht und Quelle der Inspiration gesehen.
- Individualismus: Er strebt nach Selbstverwirklichung und lehnt gesellschaftliche Normen ab.

<strong style="color: #8b4513">Mode:</strong>
- Männer: Die Kleidung der Männer bleibt praktisch und funktional, betont jedoch eine maskuline Silhouette mit engeren Anzügen.
- Frauen: In der Biedermeierzeit ist die Mode überladen und betont die Taille mit Korsetten. Die Frauenmode ist unpraktisch und dient als Symbol für gesellschaftliche Normen, die die Rolle der Frau definieren.

<strong style="color: #8b4513">Lebenseinstellung:</strong>
- Idealismus: Der Romantiker strebt nach einer idealisierten, schöneren Welt, die er in der Kunst oder Natur sucht.
- Ablehnung der Konventionen: Er distanziert sich von den gesellschaftlichen Normen und strebt nach Freiheit und Authentizität.

Die Mode des Romantikers spiegelt diese Haltung wider, indem sie sowohl eine Abkehr von der bürgerlichen Kleidung als auch die Suche nach einer einzigartigen, inneren Welt zeigt. Die Entwicklung hin zu bequemerer und praktischerer Kleidung stand der bereits beschriebenen Mode – unter anderem der limitierenden Mode der Biedermeierzeit – und damit den gesellschaftlichen Normen entgegen.

Wählen Sie für Ihren Ausflug also leichte und praktische Kleidung, in etwas ausgefalleneren Farben und Schnitten, um sich in die Hochzeit der Romantiker unauffällig einzuleben.
`} 

                />
    <Features scrollY={0} features={[
        {imagePath: "/Morgendämmerung.jpg", title: "Morgendämmerung in der Natur (8:00 Uhr)", desc: "Ihr Tag beginnt in einem nebelverhangenen Wald bei Heidelberg, wo Sie mit einem jungen Romantiker die Stille der Natur genießen. Beim Spaziergang durch das taufrische Gras lauschen Sie seinen Gedichten, die die Schönheit und Mystik der Landschaft einfangen."},
        {imagePath: "/Sehnsucht.jpg", title: "Sehnsucht nach Freiheit (11:00 Uhr)", desc: "In der engen Altstadt von Heidelberg erzählt er Ihnen von seiner Melancholie und seiner Ablehnung der bürgerlichen Gesellschaft. Während Sie durch verwinkelte Gassen schlendern, philosophiert er über die Suche nach Wahrheit in der Kunst und Natur."},
        {imagePath: "/Inspiration.jpg", title: "Künstlerische Inspiration (15:00 Uhr)", desc: "Am Nachmittag besuchen Sie eine kleine Weinstube, wo sich eine Gruppe von Malerinnen, Dichterinnen und Musiker*innen trifft. In ausgelassener, aber tiefgründiger Atmosphäre tauschen sie ihre Werke und Emotionen aus, während sanfte Musik den Raum erfüllt."},
        {
            imagePath: "/Reflexion.jpg",
            title: "Abendliche Reflexion am Fluss (19:00 Uhr)",
            desc: "Zum Abschluss sitzen Sie mit Ihrem Gastgeber am Neckarufer, wo der Mond sich im Wasser spiegelt. Er spricht über die Vergänglichkeit des Moments, drückt Ihnen ein handgeschriebenes Gedicht in die Hand – eine Erinnerung an einen Tag voller Sehnsucht, Kunst und Naturverbundenheit."}
    ]}/>
</Box>
    );
};

export default DerRomantiker;
