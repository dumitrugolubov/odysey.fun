import React from 'react';
import { Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">O</span>
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Odyssey Exchange
              </span>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              The first meme coin-focused cryptocurrency exchange offering zero fees,
              high leverage, and amazing rewards.
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="https://x.com/t_dmi3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="mailto:odyexchange@gmail.com" className="text-gray-400 hover:text-gray-500">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">PRODUCTS</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/spot-trading" className="text-base text-gray-500 hover:text-gray-900">Spot Trading</a></li>
              <li><a href="/leverage-trading" className="text-base text-gray-500 hover:text-gray-900">Leverage Trading</a></li>
              <li><a href="/referral" className="text-base text-gray-500 hover:text-gray-900">Referral Program</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">SUPPORT</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/help" className="text-base text-gray-500 hover:text-gray-900">Help Center</a></li>
              <li><a href="/terms" className="text-base text-gray-500 hover:text-gray-900">Terms of Service</a></li>
              <li><a href="/privacy" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="text-sm text-gray-500 leading-relaxed">
            <p className="mb-4">
              Welcome to Odyssey Exchange, Europe's leading cryptocurrency platform for meme coin trading. Our exchange offers a unique combination of zero-fee spot trading and high-leverage options up to 777x, making it the perfect destination for both novice and experienced traders. We support instant deposits and withdrawals in EUR/USD, ensuring seamless transactions for our European and American users.
            </p>
            <p className="mb-4">
              Trade popular meme coins like DOGE, SHIB, and PEPE with confidence on our secure, regulated platform. Our deep liquidity pools and advanced trading engine ensure optimal execution of your trades. Experience the future of crypto trading with features like real-time market data, advanced charting tools, and 24/7 customer support.
            </p>
            <p>
              Join our growing community of traders and take advantage of our industry-leading 50% referral program. Whether you're interested in spot trading with zero fees or leveraging your positions up to 777x, Odyssey Exchange provides the tools and security you need for successful cryptocurrency trading. Available in the EU and US, we maintain strict compliance with regulatory requirements while offering innovative trading solutions.
            </p>
          </div>
          <p className="mt-8 text-base text-gray-400 text-center">
            © 2024 Odyssey Exchange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}