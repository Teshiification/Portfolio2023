'use client';

import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@/lib/utils';

export const Navbar = () => {
  const pages = [
    {
      link: '/',
      title: 'Home',
    },
    {
      link: '#about',
      title: 'About me',
    },
    {
      link: '#projects',
      title: 'Projects',
    },
  ];

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav>
      <div
        hidden={showMenu}
        onClick={() => {
          setShowMenu(true);
        }}
        className="absolute right-8 top-8 lg:hidden"
      >
        <div className="group grid grid-rows-3 gap-1">
          <div className="h-1 w-8 rounded bg-vicious-white/60 group-hover:bg-vicious-white/40"></div>
          <div className="h-1 w-12 rounded bg-vicious-white/60 group-hover:bg-vicious-white/40"></div>
          <div className="h-1 w-6 rounded bg-vicious-white/60 group-hover:bg-vicious-white/40"></div>
        </div>
      </div>
      <div
        id="navbar"
        className={cn(
          'absolute inset-y-0 h-screen w-full justify-around bg-vicious-gray/80 text-center font-semibold uppercase lg:right-20 lg:grid lg:w-1/4 lg:bg-vicious-white/10',
          showMenu || 'hidden',
        )}
      >
        <p
          hidden={!showMenu}
          className="h-20 w-full bg-vicious-primary/20 align-middle text-xl font-semibold"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          close menu
        </p>
        <div className="grid gap-10 place-self-center text-xl">
          {pages.map((item, key) => {
            return (
              <Link
                key={key}
                href={item.link}
                className="group cursor-pointer text-vicious-secondary hover:text-vicious-primary"
              >
                {item.title}
                <div className="h-[1px] w-full rounded bg-vicious-white/60 group-hover:bg-vicious-white/40"></div>
              </Link>
            );
          })}
        </div>
        <Link
          href={'#contact'}
          className="mt-10 flex h-8 w-48 cursor-pointer justify-center rounded border-2 border-vicious-primary bg-white/20 text-vicious-secondary shadow-3xl hover:bg-white/40 lg:mt-0"
        >
          Contact me
        </Link>
      </div>
      <div className="left-0 my-20 ml-10 grid w-1/3 gap-4 text-center font-bold">
        <h1 className="my-4 text-6xl text-vicious-white">Danny Sinicco</h1>
        <p className="mx-8 mb-8 text-xl text-vicious-white">
          Fullstack Developer
        </p>
      </div>
    </nav>
  );
};
