import React from 'react';
import PageHeader from '../components/shared/PageHeader';

export default function Help() {
  return (
    <div>
      <PageHeader
        title="Help Center"
        description="Find answers to your questions about Odyssey Exchange"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">How do I start trading?</h3>
              <p className="text-gray-600">Click the "Start Trading" button, create an account, deposit funds, and you're ready to trade.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">What are the trading fees?</h3>
              <p className="text-gray-600">We offer 0% spot trading fees and competitive fees for leverage trading.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Need more help?</h3>
              <p className="text-gray-600">Contact our support team at odyexchange@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}