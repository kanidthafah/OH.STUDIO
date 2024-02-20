import React from 'react';
import { slideInFromBottom } from '@/utils/motion';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface Prop {
  title: string;
}

const Header = ({ title }: Prop): React.ReactNode => {
  const pathname = usePathname();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full max-h-[70dvh] relative flex justify-center items-center px-14 pb-20 pt-16 max-[808px]:px-4"
    >
      <div className="flex flex-col items-center gap-4 w-[36rem] max-[808px]:w-[95%] min-[1200px]:w-[70%]">
        <motion.div
          variants={slideInFromBottom(0.6)}
          className="flex justify-center items-center"
        >
          <h1 className="text-5xl tracking-tight font-medium text-center text-pretty max-[808px]:text-4xl min-[1200px]:text-7xl">
            {title}
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromBottom(0.7)}
          className={`${pathname !== '/' ? 'hidden' : 'flex '} mt-8 justify-center items-center gap-2 text-sm text-font2 max-[808px]:hidden`}
        >
          <a
            href="#"
            className="px-4 py-2 bg-transparent rounded-[18rem] cursor-default"
          >
            Expertise
          </a>
          <a href="#" className="px-4 py-2 bg-secondary rounded-[18rem]">
            Branding
          </a>
          <a href="#" className="px-4 py-2 bg-secondary rounded-[18rem]">
            Product
          </a>
          <a href="#" className="px-4 py-2 bg-secondary rounded-[18rem]">
            Design Systems
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromBottom(0.7)}
          className={`${pathname !== '/contact' ? 'hidden' : 'flex'}`}
        >
          <a
            href="mailto:kanidtha.khamngam@gmail.com"
            className="text-font1 font-medium text-6xl text-wrap max-[808px]:text-4xl hover:text-zinc-300 transition"
          >
            Get in touch.
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
