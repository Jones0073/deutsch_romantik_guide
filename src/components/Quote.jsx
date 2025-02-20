/*// components/Quote.jsx
import React from 'react';

/!**
 * Quote section with parallax background effect
 *
 * @param {number} scrollY - Current scroll position for parallax effect
 * @returns {JSX.Element} Quote section with parallax background
 *!/
const Quote = ({ scrollY }) => (
    <div className="relative h-[400px] overflow-hidden">
        <div
            className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"
            style={{ transform: `translateY(${(scrollY - 1000) * 0.3}px)` }}
        >
            <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white px-4">
            <blockquote className="max-w-3xl text-center">
                <p className="text-2xl font-serif italic mb-4">
                    "Die Natur ist nicht stumm zu uns, wir sind stumm zu ihr."
                </p>
                <cite className="text-lg">- Caspar David Friedrich</cite>
            </blockquote>
        </div>
    </div>
);

export default Quote;*/
import React from 'react';
import { motion } from 'framer-motion';

/**
 * RomanticQuote component displays historical quotes in a mystical style
 * with decorative elements and smooth animations.
 *
 * @param {Object} props Component properties
 * @param {string} props.quote The quote text to display
 * @param {string} props.author The quote's author
 * @param {string} props.year Optional year of the quote
 * @param {string} props.source Optional source of the quote
 */
const Quote = ({ quote, author, year, source }) => {
    // Animation variants for fade-in effect
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="relative max-w-2xl mx-auto p-8">
            {/* Decorative background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/20 rounded-lg" />

            {/* Main quote container */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8 }}
                className="relative bg-slate-50/95 rounded-lg p-8 shadow-xl border border-gray-200"
            >
                {/* Decorative quote marks */}
                <div className="absolute top-4 left-4 text-6xl text-purple-200 font-serif">"</div>
                <div className="absolute bottom-4 right-4 text-6xl text-purple-200 font-serif rotate-180">"</div>

                {/* Quote content */}
                <blockquote className="relative z-10 mb-6">
                    <p className="text-lg font-serif text-gray-800 italic leading-relaxed">
                        {quote}
                    </p>
                </blockquote>

                {/* Attribution section */}
                <footer className="mt-4 border-t border-gray-200 pt-4">
                    <div className="flex flex-col gap-1 text-right">
                        <cite className="text-lg font-medium text-gray-900 not-italic">
                            {author}
                        </cite>
                        {year && (
                            <span className="text-sm text-gray-600">
                {year}
              </span>
                        )}
                        {source && (
                            <span className="text-sm text-gray-500 italic">
                {source}
              </span>
                        )}
                    </div>
                </footer>
            </motion.div>

            {/* Decorative corner flourishes */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-purple-300/30 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-purple-300/30 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-purple-300/30 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-300/30 rounded-br-lg" />
        </div>
    );
};

export default Quote;