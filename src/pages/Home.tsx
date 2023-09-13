import React from 'react';
import { motion } from 'framer-motion';
import Notes from '../components/Notes';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: '100%',
        transition: { duration: 1.2 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      <Notes />
    </motion.div>
  );
}

export default Home;
