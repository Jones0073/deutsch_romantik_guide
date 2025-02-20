// pages/InfoPage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ContentSection from '../components/ContentSection';
import {Box} from "@mui/material";

const InfoPage = () => {
    const calistoItems = [
        {
            title: "Caroline Schlegel-Schelling",
            content: `
            


            Heute besuchen wir Caroline Schlegel-Schelling und begleiten sie durch drei bedeutende Stationen ihres Lebens.
            Unsere Reise beginnt in Göttingen, wo sie ihre Jugend verbrachte und früh mit den dortigen Gelehrtenfamilien in Kontakt kam.
            Als nächsten Halt steuern wir Jena um das Jahr 1797 an. 
            Dort lebte Caroline mit ihrem damaligen Ehemann August Wilhelm Schlegel und war Teil des intellektuellen Zirkels der Frühromantik.
            Zum Abschluss besuchen wir sie in Würzburg um das Jahr 1804, wo sie mit ihrem letzten Ehemann, dem Philosophen Friedrich Schelling, lebte.`,
            onClick: () => window.location.href = '/Callisto'
        },
        {
            title: "Dorothea Schlegel",
            content: `
            
            
            
            Heute besuchen wir Dorothea Schlegel und begleiten sie durch drei prägende Stationen ihres Lebens.
            Unsere Reise beginnt in Berlin, wo sie als Tochter des jüdischen Philosophen Moses Mendelssohn aufwuchs.
            Als nächsten Halt steuern wir Jena um das Jahr 1799 an.
            Dort lebte sie mit Friedrich Schlegel zusammen und wurde zu einer wichtigen Figur im Kreis der Frühromantiker.
            Zum Abschluss besuchen wir sie in Wien um das Jahr 1808, wo sie zum Katholizismus konvertierte und ihre literarische Tätigkeit fortsetzte.`
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
                backgroundImage="/src/assets/FrauenRomantik.webp"
                title="Frauen in der Romantik"
                content={`Ein weiterer Grund die Zeit der Romantik zu besuchen sind die Frauen der Romantik.

Denn in der Zeit der Romantik konnten Frauen zum ersten mal an dem kulturellen Leben und Schaffen teilhaben und selbst Werke schreiben und veröffentlichen.

Wie zum Beispiel Caroline Schlegel-Schelling:
Sie wurde 1763 in Göttingen geboren und war Tochter eines Professors, gehörte somit der Oberschicht an.
Sie erhielt schon in jungen Jahren Privatunterricht in Theologie.
Sie arbeitete oft mit ihrem zweiten Mann August Schlegel zusammen und hatte einen wesentlichen Anteil an der Übersetzung von Shakespeares Werken.

Eigenständig verfasste sie hauptsächlich Rezensionen und auch eine eigene Erzählung, in der es um die Entwicklung einer ihr sehr ähnlichen Frau geht.

Es konnten zu dieser Zeit Frauen also nicht nur Literatur verfassen, sondern auch die Hauptperson in einer Erzählung sein. Alleine deshalb lohnt es sich schon, die Zeit der Romantik zu besuchen, um Caroline Schlegel-Schelling oder eine der anderen Schriftstellerinnen dieser Zeit zu besuchen.`}
            />

            <ContentSection
                title="Beispiele"
                items={calistoItems}
            />
        </Box>
    );
};

export default InfoPage;