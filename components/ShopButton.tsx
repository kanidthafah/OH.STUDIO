import React from 'react';
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
        variants={{
          hidden: {
            y: 40,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        transition={{ delay: 0.8, duration: 0.7 }}
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
