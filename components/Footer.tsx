import React from 'react';
import { FaAsterisk } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-transparent px-14 py-8 max-[808px]:pb-24">
      <div className="flex flex-row max-[808px]:flex-col justify-between max-[808px]:justify-center items-center text-font2 max-[808px]:gap-y-2 ">
        <div className="flex flex-row max-[808px]:flex-col justify-center items-center gap-2 relative">
          <FaAsterisk className="text-xl" />
          <p className="text-sm">&copy; Oli Harris 2023</p>
        </div>
        <ul className="flex flex-row gap-4 text-sm">
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Linkedin</a>
          </li>
          <li>
            <a href="#">Mail</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
