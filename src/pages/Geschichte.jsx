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

const Geschichte = () => {
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
                                backgroundImage="src/assets/NapoleonBonapart.webp"
                                title="Hauptaspekte der politischen Entwicklungen in der Romantik"
                                content={`
<strong style="color: #8b4513">Einfluss der Französischen Revolution und Napoleon</strong>
  - Verbreitung der Ideale Freiheit, Gleichheit, Brüderlichkeit.
  - Napoleons Feldzüge führten zur Auflösung alter feudaler Strukturen.
  - Langfristige Impulse für das Entstehen moderner Staatssysteme.

  <strong style="color: #8b4513">Wiener Kongress und die Restauration</strong>
Wiener Kongress und die Restauration:
  - Ziel: Wiederherstellung der politischen Ordnung nach den Napoleonischen Kriegen.
  - Maßnahmen: Konservative Neuordnung und Sicherung alter Machtstrukturen.
  - Auswirkungen: Einführung restriktiver politischer Reaktionen und Zensur, die ein Klima der politischen Kontrolle schufen.

  <strong style="color: #8b4513">Aufstieg des Nationalismus und liberale Bewegungen</strong>
  - Entstehung eines gesteigerten Nationalbewusstseins in vielen europäischen Regionen.
  - Dichter, Künstler und Intellektuelle idealisierten Volkskultur, Legenden und gemeinsame Geschichte.
  - Diese kulturelle Dynamik unterstützte die liberalen und revolutionären Bestrebungen, die in den Revolutionen von 1848 gipfelten.

  <strong style="color: #8b4513">Romantische Gegenbewegung zur Aufklärung</strong>
  - Ablehnung der rein rationalen und utilitaristischen Ansätze der Aufklärung.
  - Betonung von Individualität, Mystik und der Sehnsucht nach einer idealisierten Vergangenheit.
  - Kritische Haltung gegenüber autoritären und starren politischen Ordnungen.

            `}
                            />
            <Features scrollY={0} features={[
                {icon: Clock, title: "Zeitreisen", desc: "Tauchen Sie ein in vergangene Epochen"},
                {icon: Map, title: "Wanderungen", desc: "Erkunden Sie malerische Landschaften"},
                {imagePath: "/der_wanderer.jpg", title: "Geschichten", desc: "Entdecken Sie romantische Erzählungen"},
                {
                    imagePath: "/der_wanderer.jpg",
                    title: "Kunstwerke",
                    desc: "Bewundern Sie zeitlose Meisterwerke hier steht jetzt irgendein lustiger und sehr sehr langer beispieltext wie dieser hier: Morgendämmerung in der Natur (8:00 Uhr)\n" +
                        "Ihr Tag beginnt in einem nebelverhangenen Wald bei Heidelberg, wo Sie mit einem jungen Romantiker die Stille der Natur genießen. Beim Spaziergang durch das taufrische Gras lauschen Sie seinen Gedichten, die die Schönheit und Mystik der Landschaft einfangen.\n" +
                        "Sehnsucht nach Freiheit (11:00 Uhr)\n" +
                        "In der engen Altstadt von Heidelberg erzählt er Ihnen von seiner Melancholie und seiner Ablehnung der bürgerlichen Gesellschaft. Während Sie durch verwinkelte Gassen schlendern, philosophiert er über die Suche nach Wahrheit in der Kunst und Natur.\n" +
                        "Künstlerische Inspiration (15:00 Uhr)\n" +
                        "Am Nachmittag besuchen Sie eine kleine Weinstube, wo sich eine Gruppe von Malerinnen, Dichterinnen und Musiker*innen trifft. In ausgelassener, aber tiefgründiger Atmosphäre tauschen sie ihre Werke und Emotionen aus, während sanfte Musik den Raum erfüllt.\n" +
                        "Abendliche Reflexion am Fluss (19:00 Uhr)\n" +
                        "Zum Abschluss sitzen Sie mit Ihrem Gastgeber am Neckarufer, wo der Mond sich im Wasser spiegelt. Er spricht über die Vergänglichkeit des Moments, drückt Ihnen ein handgeschriebenes Gedicht in die Hand – eine Erinnerung an einen Tag voller Sehnsucht, Kunst und Naturverbundenheit.\n"
                }
            ]}/>
        </Box>
    );
};

export default Geschichte;
