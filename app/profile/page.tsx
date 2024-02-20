'use client';
import React from 'react';
import ContactSection from '@/components/ContactSection';
import Header from '@/components/Header';

const page: React.FC = () => {
  return (
    <div className="w-full">
      <Header title="Hey👋 I'm Oli" />
      <ContactSection />
    </div>
  );
};

export default page;
