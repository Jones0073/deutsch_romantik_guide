import React, {useRef} from 'react';
import { Clock, Map, Book, Camera, ChevronDown } from 'lucide-react';
import {Paper, Container, Typography, Button, Box} from "@mui/material";
import Background from "../components/Background.jsx";
import Header from "../components/Header.jsx";
import Features from "../components/Features.jsx";
import Quote from "../components/Quote.jsx";

/**
 * Main component implementing a dark-themed vertical layout
 * matching the provided design screenshot
 */
const DerRomantiker = () => {
    const ref = useRef(null);

/*
    /!**
     * Hero section with title and CTA button
     *!/
    const Hero = () => (
        <div className="relative min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
            <h1 className="text-5xl sm:text-6xl font-serif">
                Eine Reise durch die Zeit
            </h1>
            <p className="text-xl mt-4 text-gray-300">
                Erleben Sie die Romantik des 19. Jahrhunderts in ihrer vollen Pracht
            </p>
            <button className="mt-6 bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition">
                Jetzt Zeitreise buchen
            </button>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown size={32} />
            </div>
        </div>
    );

    /!**
     * Experience section displaying available activities
     *!/
    const Experiences = () => {
        const experiences = [
            {
                icon: Clock,
                title: "Zeitreisen",
                description: "Tauchen Sie ein in vergangene Epochen"
            },
            {
                icon: Map,
                title: "Wanderungen",
                description: "Erkunden Sie malerische Landschaften"
            },
            {
                icon: Book,
                title: "Geschichten",
                description: "Entdecken Sie romantische Erzählungen"
            },
            {
                icon: Camera,
                title: "Kunstwerke",
                description: "Bewundern Sie zeitlose Meisterwerke"
            }
        ];

        return (
            <div className="bg-gray-900 text-white px-8 py-16" key={1}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif mb-12">Unsere Erlebnisse</h2>
                    <div className="space-y-12">
                        {experiences.map((experience, index) => (
                            <div key={index} className={`flex items-start space-x-6 group ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`} style={{margin: "auto", width: "50%"}}> {/!*center this *!/}
                            <Paper key={index} className="p-6 bg-gray-800 rounded-lg group" style={{transition: "background-color 0.2s", backgroundColor: "rgba(80, 70, 80, 0.1)"}} elevation={5}>
                            <div key={index} className="flex items-start space-x-6 group">
                                <div key={index} className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition">
                                    <experience.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif mb-2">{experience.title}</h3>
                                    <p className="text-gray-400">{experience.description}</p>
                                </div>
                            </div>
                            </Paper>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    /!**
     * Quote section with Friedrich's quote
     *!/
    const Quote = () => (
        <div className="bg-gray-900 text-white px-8 py-16">
            <div className="max-w-4xl mx-auto">
                <blockquote className="border-l-4 border-gray-700 pl-6">
                    <p className="text-xl italic mb-4">
                        "Die Natur ist nicht stumm zu uns, wir sind stumm zu ihr."
                    </p>
                    <footer className="text-gray-400">
                        - Caspar David Friedrich
                    </footer>
                </blockquote>
            </div>
        </div>
    );*/

  return (
<Box
    sx={{
        position: 'fixed',
        top: 100,
        left: 0,
        width: '100vw',
        height: '100vh',
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
      /*<div className="min-h-screen">
          <Features />
          <Quote scrollY={scrollY} />
      </div>*/
    );
};

export default DerRomantiker;
