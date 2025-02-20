import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Map, Book, Camera } from 'lucide-react';
import { Paper } from '@mui/material';

const features = [
    { icon: Clock, title: "Zeitreisen", desc: "Tauchen Sie ein in vergangene Epochen" },
    { icon: Map, title: "Wanderungen", desc: "Erkunden Sie malerische Landschaften" },
    { icon: Book, title: "Geschichten", desc: "Entdecken Sie romantische Erzählungen" },
    { icon: Camera, title: "Kunstwerke", desc: "Bewundern Sie zeitlose Meisterwerke hier steht jetzt irgendein lustiger und sehr sehr langer beispieltext wie dieser hier: Morgendämmerung in der Natur (8:00 Uhr)\n" +
            "Ihr Tag beginnt in einem nebelverhangenen Wald bei Heidelberg, wo Sie mit einem jungen Romantiker die Stille der Natur genießen. Beim Spaziergang durch das taufrische Gras lauschen Sie seinen Gedichten, die die Schönheit und Mystik der Landschaft einfangen.\n" +
            "Sehnsucht nach Freiheit (11:00 Uhr)\n" +
            "In der engen Altstadt von Heidelberg erzählt er Ihnen von seiner Melancholie und seiner Ablehnung der bürgerlichen Gesellschaft. Während Sie durch verwinkelte Gassen schlendern, philosophiert er über die Suche nach Wahrheit in der Kunst und Natur.\n" +
            "Künstlerische Inspiration (15:00 Uhr)\n" +
            "Am Nachmittag besuchen Sie eine kleine Weinstube, wo sich eine Gruppe von Malerinnen, Dichterinnen und Musiker*innen trifft. In ausgelassener, aber tiefgründiger Atmosphäre tauschen sie ihre Werke und Emotionen aus, während sanfte Musik den Raum erfüllt.\n" +
            "Abendliche Reflexion am Fluss (19:00 Uhr)\n" +
            "Zum Abschluss sitzen Sie mit Ihrem Gastgeber am Neckarufer, wo der Mond sich im Wasser spiegelt. Er spricht über die Vergänglichkeit des Moments, drückt Ihnen ein handgeschriebenes Gedicht in die Hand – eine Erinnerung an einen Tag voller Sehnsucht, Kunst und Naturverbundenheit.\n" }
];

const FeatureCard = ({ icon: Icon, title, desc, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, ease: "easeOut" }}
            style={{ margin: "auto", width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1rem" }}
        >
            <Paper className="shadow-xl rounded-2xl overflow-hidden bg-white p-6 flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105"
            style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: "100%", minHeight: "100%", backgroundColor: "rgba(50, 70, 80, 0.1)"}}
            elevation={5}>
                <Icon className="text-indigo-600" size={40} />
                <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 text-center">{desc}</p>
            </Paper>
        </motion.div>
    );
};

const Features = () => {
    return (
        <div className="py-24 bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, idx) => (
                        <FeatureCard key={idx} {...feature} index={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
