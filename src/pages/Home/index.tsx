import React from 'react';
import { motion } from 'framer-motion';
import Notes from '../../components/Notes';
import { motionConfig } from '../../config';

function Home() {
  return (
    <motion.div {...motionConfig}>
      <Notes />
    </motion.div>
  );
}

export default Home;
