'use client';

import React, { useState, useEffect } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';
import { slideInFromBottom } from '@/utils/motion';
import { HiOutlineLockClosed } from 'react-icons/hi2';

interface ImagesType {
  id: number;
  url: string;
  width: number;
  height: number;
}

interface CaptionsType {
  name: string;
  sub: string;
}

interface IconsType {
  icon: any;
  bg: string;
  text: string;
}

const Content: React.FC = () => {
  const [images, setImages] = useState<ImagesType[]>([]);

  const fetchImages = async (): Promise<void> => {
    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=10'
      );
      const data: ImagesType[] = await response.json();
      setImages(data);
      // console.log(data);
    } catch (err) {
      console.log('Error fetch data: ', err);
    }
  };

  useEffect(() => {
    void fetchImages();
  }, []);

  const captions: CaptionsType[] = [
    { name: 'Aire', sub: '' },
    { name: 'Correlated', sub: '' },
    { name: 'Channels 8', sub: '' },
    { name: 'Ronald Abram', sub: '' },
    { name: 'Propeller', sub: '' },
    { name: 'Schuh', sub: '' },
    { name: 'Paperstreet', sub: '' },
    { name: 'OH.SUPPLY', sub: 'Coming Soon' },
    { name: 'Monokel Eyewear', sub: 'Coming Soon' },
    { name: 'Lawtrades', sub: '' },
  ];

  const icons: IconsType[] = [
    { icon: <MdArrowOutward />, bg: 'bg-primary', text: 'text-font2' },
    { icon: <MdArrowOutward />, bg: 'bg-primary', text: 'text-font2' },
    { icon: <MdArrowOutward />, bg: 'bg-primary', text: 'text-font2' },
    { icon: <MdArrowOutward />, bg: 'bg-primary', text: 'text-font2' },
    { icon: <MdArrowOutward />, bg: 'bg-primary', text: 'text-font2' },
    { icon: <MdArrowOutward />, bg: 'bg-primary', text: 'text-font2' },
    { icon: <MdArrowOutward />, bg: 'bg-primary', text: 'text-font2' },
    { icon: <HiOutlineLockClosed />, bg: 'bg-font2', text: 'text-primary' },
    { icon: <HiOutlineLockClosed />, bg: 'bg-font2', text: 'text-primary' },
    { icon: <MdArrowOutward />, bg: 'bg-primary', text: 'text-font2' },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full h-auto px-14 max-[808px]:px-4 pb-4"
    >
      <div className="w-full grid grid-cols-2 grid-rows-auto gap-x-4 max-[808px]:grid-cols-1">
        {images.map((image, index) => (
          <motion.div
            variants={slideInFromBottom(0.7)}
            key={image.id}
            className="aspect-[2/1.5] mt-9 relative bg-transparent max-[808px]:mt-7"
          >
            <div className="absolute top-0 w-full h-full opacity-0 rounded-xl max-[808px]:hidden hover:opacity-100 backdrop-blur-md transition-all duration-300 cursor-pointer group">
              <div className="absolute flex flex-col top-4 left-2 translate-x-[20px]">
                <p className="text-primary">{captions[index].name}</p>
                <p className="text-font1">{captions[index].sub}</p>
              </div>
              <button
                className={`${icons[index].text} ${icons[index].bg} absolute p-4 rounded-full text-md right-10 translate-y-[40px] group-hover:translate-y-[20px] group-hover:right-6 transition-all duration-300 delay-100 ease-in-out`}
              >
                {icons[index].icon}
              </button>
            </div>
            <img
              src={image.url}
              width={image.width}
              height={image.height}
              alt="Picture of cat"
              className="w-full h-full rounded-xl object-cover"
            />
            <div className="inline-flex items-end gap-3 text-font2 text-sm min-[809px]:hidden">
              <p className=" mt-2 ">{captions[index].name}</p>
              <p className="text-font1">{captions[index].sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Content;
