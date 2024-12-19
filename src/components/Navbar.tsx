import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full animate-pulse"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">O</span>
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Odysey Exchange
              </span>
            </a>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <div className="flex space-x-8">
              <a href="/spot-trading" className="text-gray-700 hover:text-violet-500 px-3 py-2 text-sm font-medium">Spot Trading</a>
              <a href="/leverage-trading" className="text-gray-700 hover:text-violet-500 px-3 py-2 text-sm font-medium">Leverage Trading</a>
              <a href="/referral" className="text-gray-700 hover:text-violet-500 px-3 py-2 text-sm font-medium">Referral Program</a>
            </div>
            <a
              href="https://odysey.fun"
              className="bg-gradient-to-r from-blue-500 to-violet-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              To Exchange
            </a>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-violet-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="/spot-trading" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-violet-500">Spot Trading</a>
            <a href="/leverage-trading" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-violet-500">Leverage Trading</a>
            <a href="/referral" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-violet-500">Referral Program</a>
            <div className="px-3 py-2">
              <a
                href="https://odysey.fun"
                className="block w-full bg-gradient-to-r from-blue-500 to-violet-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
              >
                To Exchange
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}