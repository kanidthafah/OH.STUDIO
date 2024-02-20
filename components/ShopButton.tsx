import React from 'react';
import { slideInFromBottom } from '@/utils/motion';
import { motion } from 'framer-motion';
import { FaAsterisk } from 'react-icons/fa';

const ShopButton: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="fixed bottom-6 z-20 left-1/2  translate-x-[-50px]"
    >
      <motion.a
        variants={slideInFromBottom(0.6)}
        href="#"
        className="flex justify-center items-center gap-2 bg-font2 text-primary text-sm px-5 py-2.5 rounded-[16rem]"
      >
        <FaAsterisk />
        Shop
      </motion.a>
    </motion.div>
  );
};

export default ShopButton;
