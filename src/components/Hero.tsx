import React from 'react';
import { Rocket, TrendingUp, Gift, Coins, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Trade Meme Coins</span>
            <span className="block bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Zero Fees • High Leverage
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Trade DOGE, SHIB, PEPE with 0% fees and up to 777x leverage.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="https://odysey.fun"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-violet-500 hover:opacity-90 md:py-4 md:text-lg md:px-10"
              >
                To Exchange
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="absolute -top-4 left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg flex items-center justify-center">
              <Coins className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Zero-Fee Trading</h3>
            <p className="mt-2 text-gray-600">Trade your favorite meme coins with absolutely no spot trading fees.</p>
          </div>

          <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="absolute -top-4 left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">777x Leverage</h3>
            <p className="mt-2 text-gray-600">Maximize your trading potential with industry-leading leverage options.</p>
          </div>

          <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="absolute -top-4 left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Secure Platform</h3>
            <p className="mt-2 text-gray-600">Trade with confidence on our highly secure and regulated platform.</p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Odysey Exchange?</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-violet-500 mb-4">
                <Rocket className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Instant Deposits</h3>
              <p className="mt-2 text-gray-600">Fast EUR/USD deposits and withdrawals</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-violet-500 mb-4">
                <TrendingUp className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Deep Liquidity</h3>
              <p className="mt-2 text-gray-600">Trade with confidence in any market condition</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-violet-500 mb-4">
                <Gift className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">50% Referral Bonus</h3>
              <p className="mt-2 text-gray-600">Earn from your friends' trading fees</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-violet-500 mb-4">
                <Shield className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">EU Regulated</h3>
              <p className="mt-2 text-gray-600">Licensed and compliant exchange</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}