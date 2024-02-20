'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const navLinks: Array<{ id: number; name: string; href: string }> = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Profile', href: '/profile' },
    { id: 3, name: 'Contact', href: '/contact' },
  ];
  return (
    <div className="w-full sticky top-0 flex place-content-center px-14 py-6 z-40">
      <div className="flex px-1 py-1 rounded-[1.8rem] bg-nav backdrop-blur-md">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`${pathname === link.href ? 'bg-primary duration-75 ease-in-out' : 'bg-transparent'} px-6 py-2.5 rounded-[1.8rem]`}
          >
            <div>
              <p className="text-font2 text-sm">{link.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
