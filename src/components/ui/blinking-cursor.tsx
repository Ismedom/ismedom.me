// import React from 'react';
import { motion } from 'framer-motion';

const BlinkingCursor = () => {
    return (
        <motion.span
            style={{
                display: 'inline-block',
                width: '2px',
                height: '1em',
                backgroundColor: 'black',
                marginLeft: '2px',
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    );
};

export default BlinkingCursor;
