'use client';
import React from 'react';
import ShopButton from '@/components/ShopButton';
import Header from '@/components/Header';
import Content from '@/components/Content';
import ContactSection from '@/components/ContactSection';

const page: React.FC = () => {
  return (
    <div>
      <Header title="A brand and product designer working with clients globally" />
      <Content />
      <ShopButton />
      <ContactSection />
    </div>
  );
};
export default page;
