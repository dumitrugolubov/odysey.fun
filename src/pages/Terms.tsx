import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import SEO from '../components/SEO';

export default function Terms() {
  const lastUpdated = '2025-01-05';
  
  const faqItems = [
    {
      question: "Who can use Odysey Exchange?",
      answer: "Our services are available to users in the EU and US who are 18 years or older."
    },
    {
      question: "What are the trading limits?",
      answer: "Trading limits vary based on verification level and jurisdiction. Basic accounts can trade up to $10,000 per day."
    },
    {
      question: "What happens in case of a dispute?",
      answer: "Disputes are handled through our support team and can be escalated to appropriate regulatory authorities if necessary."
    }
  ];

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Terms of Service', item: '/terms' }
  ];

  return (
    <div>
      <SEO 
        title="Terms of Service | Odysey Exchange"
        description="Read Odysey Exchange's terms of service. Understand your rights and responsibilities when using our cryptocurrency trading platform. Last updated January 2025."
        canonicalUrl="/terms"
        ogType="article"
        keywords={[
          'terms of service',
          'user agreement',
          'trading terms',
          'legal terms',
          'crypto exchange terms',
          'trading conditions',
          'user rights'
        ]}
        articlePublishedTime="2024-12-19T00:00:00Z"
        articleModifiedTime={`${lastUpdated}T00:00:00Z`}
        faq={faqItems}
        breadcrumbs={breadcrumbs}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Terms of Service - Odysey Exchange',
          description: 'Odysey Exchange Terms of Service',
          datePublished: '2024-12-19T00:00:00Z',
          dateModified: `${lastUpdated}T00:00:00Z`,
          publisher: {
            '@type': 'Organization',
            name: 'Odysey Exchange',
            url: 'https://odysey.fun'
          },
          mainEntity: {
            '@type': 'WebPage',
            name: 'Terms of Service',
            datePublished: '2024-12-19T00:00:00Z',
            dateModified: `${lastUpdated}T00:00:00Z`,
            inLanguage: 'en-US'
          }
        }}
      />
      <PageHeader
        title="Terms of Service"
        description="Please read these terms carefully before using our platform"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 prose max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Odyssey Exchange, you agree to be bound by these Terms of Service.</p>
          
          <h2>2. Trading Rules</h2>
          <p>Users must comply with all applicable laws and regulations when trading on our platform.</p>
          
          <h2>3. Account Security</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials.</p>
          
          <h2>4. Risk Disclosure</h2>
          <p>Cryptocurrency trading involves substantial risk of loss. Trade carefully and only with funds you can afford to lose.</p>
        </div>
      </div>
    </div>
  );
}