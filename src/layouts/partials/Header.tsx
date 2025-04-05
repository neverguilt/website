"use client";
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import useWindow from "@/hooks/useWindow";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ButtonComponent from '@/shortcodes/Button';
import config from "@/config/config.json";

interface MenuItem {
  title: string;
  url: string;
}

interface AuthLinks {
  login: {
    text: string;
    url: string;
  };
  signup: {
    text: string;
    url: string;
  };
}

interface NavBarProps {
  logo: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menuItems: MenuItem[];
  auth: AuthLinks;
}

const Header: React.FC = () => {
  const { base_url } = config.site;
  const { logo, menu, auth } = config.nav;
  const isMobile = useWindow(768) < 768;
  const pathname = usePathname();

  const menuItems: MenuItem[] = menu.map((item) => ({
    title: item.label,
    url: item.url,
  }));

  const authLinks: AuthLinks = {
    login: {
      text: auth.login.label,
      url: auth.login.url,
    },
    signup: {
      text: auth.signup.label,
      url: auth.signup.url,
    },
  };

  const getActiveLinkClass = (itemUrl: string) => {
    const currentPathSegments = pathname.split('/').filter(segment => segment !== '');
    const itemUrlSegments = itemUrl.split('/').filter(segment => segment !== '');

    if (itemUrl === '/') {
      return pathname === '/' ? 'text-primary' : '';
    }

    if (currentPathSegments.length > 0 && itemUrlSegments.length > 0) {
      return currentPathSegments[0] === itemUrlSegments[0] ? 'text-primary' : '';
    }

    return '';
  };

  return (
    <section className="py-4 border-b border-border">
      <div className="container mx-auto px-4">
        {!isMobile ? (
          // Desktop Navigation
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link href={logo.url} className="flex items-center gap-2">
                <Image
                  src={logo.src}
                  width={160}
                  height={160}
                  alt={logo.alt}
                />
              </Link>
              <div className="flex items-center space-x-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={`inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm md:text-lg font-medium text-text hover:bg-gray-100 hover:text-gray-900 transition-colors ${getActiveLinkClass(item.url)}`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div >
              
              <ButtonComponent
                label={authLinks.signup.text}
                link={authLinks.signup.url}
              />
            </div>
          </nav>
        ) : (
          // Mobile Navigation with Sheet from shadcn/ui
          <div className="flex items-center justify-between">
            <Link href={logo.url} className="flex items-center gap-2">
              <Image
                src={logo.src}
                width={160}
                height={160}
                alt={logo.alt}
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 p-2 text-gray-700 hover:bg-gray-50">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className={`font-medium text-gray-700 hover:text-gray-900 ${getActiveLinkClass(item.url)}`}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <div className="flex  pt-4 mt-4 border-t">
                    
                    <ButtonComponent
                      label={authLinks.signup.text}
                      link={authLinks.signup.url}
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
