// pages/InfoPage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ContentSection from '../components/ContentSection';
import CTAButton from '../components/CTAButton';
import {Box} from "@mui/material";

const InfoPage = () => {
    const calistoItems = [
        {
            title: "Hier steht die überschrift 0001AA",
            content: `Hihihehe`,
            onClick: () => window.location.href = '/Callisto'
        },
        {
            title: "Und hier die Überschrift 001AB:",
            content: "bluberdiblube"
        }
    ];

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
                '& > *': {
                    width: '100%',
                }
            }}
        >

            <HeroSection
                backgroundImage="/Literatur.jpeg"
                title="Ein Tag in der Welt der Romantik"
content={`<strong style="color: #8b4513">Ein literarischer Start in den Tag (08:00 Uhr)</strong>
Am Morgen treffen wir uns in einem kleinen Park am Rande der Stadt. Ein junger
Literaturbegeisterter erzählt von den Ideen der Romantik – von Sehnsucht,
Naturverbundenheit und der Kraft der Fantasie. Gemeinsam lesen wir ein paar Zeilen eines
romantischen Dichters und sprechen darüber, was sie heute noch bedeuten könnten.

<strong style="color: #8b4513">Auf den Spuren der Dichter (11:00 Uhr)</strong>
In der Altstadt besuchen wir eine historische Bibliothek. Zwischen alten Büchern erfahren
wir, wie Schriftsteller dieser Epoche lebten und arbeiteten. Beim Spaziergang durch die
Straßen entdecken wir Orte, an denen sie sich aufhielten – vielleicht eine ehemalige
Druckerei oder ein Café, in dem einst über Kunst und Literatur diskutiert wurde.

<strong style="color: #8b4513">Schreiben und Nachdenken (15:00 Uhr)</strong>
Am Nachmittag setzen wir uns in ein ruhiges Café oder an einen anderen gemütlichen Ort.
Bei Tee oder Kaffee versuchen wir selbst, ein paar Zeilen im Stil der Romantik zu schreiben
– inspiriert von unseren Eindrücken des Tages. Wer möchte, kann seine Gedanken mit der
Gruppe teilen.

<strong style="color: #8b4513">Der Tag klingt aus (19:00 Uhr)</strong>
Zum Abschluss gehen wir gemeinsam an einen Ort, der zum Nachdenken einlädt – vielleicht
ans Flussufer oder auf einen Hügel mit Blick über die Stadt. Wir lassen den Tag Revue
passieren und sprechen darüber, was uns besonders bewegt hat. Jeder nimmt eine kleine
Erinnerung mit: ein Gedicht, ein Zitat oder einfach einen neuen Blick auf die Welt der
Romantik.`}
            />

{/*            <ContentSection
                title="Irgendwas Über Die Rolle der Frau oder so"
                items={calistoItems}
            />*/}


        </Box>
    );
};

export default InfoPage;