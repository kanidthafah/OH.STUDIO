import { motion } from 'framer-motion';
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full h-[50dvh] flex px-14 py-10 max-[808px]:px-4 max-[808px]:py-4"
    >
      <motion.div
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
        transition={{ delay: 0.7, duration: 0.7 }}
        className="w-full flex flex-col justify-center items-center font-medium text-4xl text-center leading-snug max-[808px]:text-3xl"
      >
        <h2 className="text-font2">Let's work together.</h2>
        <a
          href="mailto:kanidtha.khamngam@gmail.com"
          className="text-font1 hover:text-zinc-300 transition"
        >
          Get in touch.
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
