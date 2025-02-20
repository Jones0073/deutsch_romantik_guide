// components/FeatureCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Individual feature card component with animation
 *
 * @param {Object} props - Component props
 * @param {React.ComponentType} props.icon - Lucide icon component
 * @param {string} props.title - Feature title
 * @param {string} props.desc - Feature description
 * @param {number} props.index - Index for staggered animation
 * @returns {JSX.Element} Animated feature card
 */
const FeatureCard = ({ icon: Icon, title, desc, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex flex-col items-center justify-center text-center p-4 w-full"
        style={{ margin: "auto", width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(50, 70, 80, 0.1)"}}
    >
        <Icon className="mb-2" size={32} />
        <h3 className="text-xl font-serif">{title}</h3>
        <p className="text-gray-600">{desc}</p>
    </motion.div>



);

export default FeatureCard;