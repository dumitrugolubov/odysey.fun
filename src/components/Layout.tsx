import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}