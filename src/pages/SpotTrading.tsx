import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import SEO from '../components/SEO';

export default function SpotTrading() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Spot Trading', item: '/spot-trading' }
  ];

  return (
    <div>
      <SEO 
        title="Spot Trading | Zero-Fee Meme Coin Trading | Odysey Exchange"
        description="Trade your favorite meme coins with 0% spot trading fees on Odysey Exchange. Access deep liquidity pools and trade without any fees eating into your profits."
        canonicalUrl="/spot-trading"
        keywords={[
          'zero fee trading',
          'spot trading',
          'meme coins',
          'crypto exchange',
          'DOGE trading',
          'SHIB trading',
          'PEPE trading'
        ]}
        breadcrumbs={breadcrumbs}
        price={{
          amount: 0,
          currency: 'USD'
        }}
        rating={{
          value: 4.8,
          count: 1250
        }}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Spot Trading - Odysey Exchange',
          description: 'Zero-fee spot trading for meme coins',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '1250'
          }
        }}
      />
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