import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import SEO from '../components/SEO';

export default function Help() {
  const faqItems = [
    {
      question: "How do I start trading?",
      answer: "Click the 'Start Trading' button, create an account, deposit funds, and you're ready to trade."
    },
    {
      question: "What are the trading fees?",
      answer: "We offer 0% spot trading fees and competitive fees for leverage trading."
    },
    {
      question: "How can I contact support?",
      answer: "Contact our support team at odyexchange@gmail.com"
    }
  ];

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Help Center', item: '/help' }
  ];

  return (
    <div>
      <SEO 
        title="Help Center | Odysey Exchange Support"
        description="Get help with trading on Odysey Exchange. Find answers to frequently asked questions about spot trading, leverage trading, deposits, and more."
        canonicalUrl="/help"
        keywords={[
          'crypto exchange help',
          'odysey support',
          'crypto trading help',
          'trading tutorial',
          'crypto FAQ',
          'how to trade crypto'
        ]}
        faq={faqItems}
        breadcrumbs={breadcrumbs}
        videoUrl="https://odysey.fun/videos/trading-tutorial.mp4"
      />
      <PageHeader
        title="Help Center"
        description="Find answers to your questions about Odyssey Exchange"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}