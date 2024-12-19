import React from 'react';
import PageHeader from '../components/shared/PageHeader';

export default function SpotTrading() {
  return (
    <div>
      <PageHeader
        title="Spot Trading"
        description="Trade your favorite meme coins with 0% spot trading fees"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Why Trade with Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Zero Trading Fees</h3>
              <p className="text-gray-600">Trade without any fees eating into your profits. We believe in maximizing your trading potential.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Deep Liquidity</h3>
              <p className="text-gray-600">Access deep liquidity pools for seamless trading of your favorite meme coins.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}