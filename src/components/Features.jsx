import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Map, Book, Camera } from 'lucide-react';
import { Paper } from '@mui/material';

// The FeatureCard component remains almost the same
const FeatureCard = ({ icon: Icon, imagePath, title, desc, index }) => {
  const renderIconOrImage = () => {
    if (imagePath) {
      return (
        <div
          style={{
            width: '50vw',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          <img
            src={imagePath}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      );
    }
    return <Icon className="text-indigo-600" size={40} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, ease: 'easeOut' }}
      style={{
        margin: 'auto',
        width: imagePath ? '100%' : '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      <Paper
        className="shadow-xl rounded-2xl overflow-hidden bg-white p-6 flex flex-col items-center gap-4 transform transition duration-300 hover:scale-105"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: imagePath ? '100%' : '100%',
          minHeight: '100%',
          backgroundColor: 'rgba(50, 70, 80, 0.1)'
        }}
        elevation={5}
      >
        {renderIconOrImage()}
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-center">{desc}</p>
      </Paper>
    </motion.div>
  );
};

// The Features component now accepts a `features` prop.
const Features = ({ features }) => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-12">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
