import React from 'react';
import PageHeader from '../components/shared/PageHeader';

export default function LeverageTrading() {
  return (
    <div>
      <PageHeader
        title="Leverage Trading"
        description="Trade with up to 777x leverage and 10% liquidation rebates"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Leverage Trading Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Up to 777x Leverage</h3>
              <p className="text-gray-600">Maximize your trading potential with industry-leading leverage options.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">10% Liquidation Rebates</h3>
              <p className="text-gray-600">Get 10% back on any liquidations, minimizing your potential losses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}