import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import SEO from '../components/SEO';

export default function LeverageTrading() {
  const faqItems = [
    {
      question: "What is the maximum leverage available?",
      answer: "We offer up to 777x leverage for experienced traders."
    },
    {
      question: "What is the liquidation rebate?",
      answer: "We offer a 10% liquidation rebate to help minimize losses."
    },
    {
      question: "What are the margin requirements?",
      answer: "Margin requirements vary by position size and leverage level. Contact support for detailed information."
    }
  ];

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Leverage Trading', item: '/leverage-trading' }
  ];

  return (
    <div>
      <SEO 
        title="Leverage Trading | Up to 777x Leverage | Odysey Exchange"
        description="Trade with up to 777x leverage on Odysey Exchange. Access advanced trading tools, deep liquidity pools, and competitive fees for leverage trading with 10% liquidation rebates."
        canonicalUrl="/leverage-trading"
        keywords={[
          'leverage trading',
          'margin trading',
          '777x leverage',
          'crypto leverage',
          'meme coin leverage',
          'liquidation rebate',
          'crypto margin'
        ]}
        faq={faqItems}
        breadcrumbs={breadcrumbs}
        videoUrl="https://odysey.fun/videos/leverage-tutorial.mp4"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Leverage Trading - Odysey Exchange',
          description: 'Trade with up to 777x leverage on Odysey Exchange. Access advanced trading tools and competitive fees with 10% liquidation rebates.',
          image: [
            'https://odysey.fun/images/leverage-trading-main.webp',
            'https://odysey.fun/images/leverage-trading-interface.webp'
          ],
          brand: {
            '@type': 'Brand',
            name: 'Odysey Exchange'
          },
          offers: {
            '@type': 'Offer',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '0',
              priceCurrency: 'USD'
            },
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            priceValidUntil: '2025-12-31',
            description: 'Competitive fees with 10% liquidation rebate',
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              returnPolicyCategory: 'https://schema.org/ReturnFiniteReturnWindow',
              returnWindow: 'P30D',
              merchantReturnDays: '30',
              returnMethod: 'https://schema.org/ReturnByMail'
            },
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              shippingRate: {
                '@type': 'MonetaryAmount',
                value: '0',
                currency: 'USD'
              },
              deliveryTime: {
                '@type': 'ShippingDeliveryTime',
                handlingTime: {
                  '@type': 'QuantitativeValue',
                  minValue: '0',
                  maxValue: '0',
                  unitCode: 'HUR'
                },
                transitTime: {
                  '@type': 'QuantitativeValue',
                  minValue: '0',
                  maxValue: '0',
                  unitCode: 'HUR'
                }
              }
            }
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            reviewCount: '850',
            bestRating: '5',
            worstRating: '1'
          }
        }}
      />
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