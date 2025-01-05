import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import SEO from '../components/SEO';

export default function Privacy() {
  const lastUpdated = '2025-01-05';
  
  const faqItems = [
    {
      question: "What personal data do you collect?",
      answer: "We collect basic account information, KYC documents where required, and trading activity data to comply with regulations."
    },
    {
      question: "How do you protect user data?",
      answer: "We use industry-standard encryption, secure servers, and strict access controls to protect your data."
    },
    {
      question: "Can I request my data to be deleted?",
      answer: "Yes, you can request data deletion through our support team, subject to regulatory retention requirements."
    }
  ];

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Privacy Policy', item: '/privacy' }
  ];

  return (
    <div>
      <SEO 
        title="Privacy Policy | Odysey Exchange"
        description="Learn about how Odysey Exchange protects your privacy and handles your personal information. Our comprehensive privacy policy explains your rights and our practices. Last updated January 2025."
        canonicalUrl="/privacy"
        ogType="article"
        keywords={[
          'privacy policy',
          'data protection',
          'GDPR compliance',
          'user privacy',
          'crypto exchange privacy',
          'data security',
          'user rights'
        ]}
        articlePublishedTime="2024-12-19T00:00:00Z"
        articleModifiedTime={`${lastUpdated}T00:00:00Z`}
        faq={faqItems}
        breadcrumbs={breadcrumbs}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Privacy Policy - Odysey Exchange',
          description: 'Odysey Exchange Privacy Policy',
          datePublished: '2024-12-19T00:00:00Z',
          dateModified: `${lastUpdated}T00:00:00Z`,
          publisher: {
            '@type': 'Organization',
            name: 'Odysey Exchange',
            url: 'https://odysey.fun'
          },
          mainEntity: {
            '@type': 'WebPage',
            name: 'Privacy Policy',
            datePublished: '2024-12-19T00:00:00Z',
            dateModified: `${lastUpdated}T00:00:00Z`,
            inLanguage: 'en-US',
            about: {
              '@type': 'Thing',
              name: 'Data Privacy',
              description: 'Information about how Odysey Exchange handles and protects user data'
            }
          }
        }}
      />
      <PageHeader
        title="Privacy Policy"
        description="How we collect, use, and protect your data"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 prose max-w-none">
          <h2>1. Information Collection</h2>
          <p>We collect information necessary to provide our services and comply with regulations.</p>
          
          <h2>2. Use of Information</h2>
          <p>Your information is used to operate and improve our platform, and provide customer support.</p>
          
          <h2>3. Cookie Policy</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>Remember your preferences and settings</li>
            <li>Understand how you interact with our services</li>
            <li>Analyze and improve our services</li>
            <li>Detect and prevent fraud</li>
          </ul>
          
          <h2>4. Your Rights Under GDPR</h2>
          <p>Under the General Data Protection Regulation (GDPR), you have the following rights:</p>
          <ul>
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
          </ul>
          
          <h2>5. Data Protection</h2>
          <p>We implement appropriate security measures to protect your personal information.</p>
          
          <h2>6. International Data Transfers</h2>
          <p>Your data may be transferred to and processed in countries outside the European Economic Area (EEA). We ensure appropriate safeguards are in place for such transfers.</p>
          
          <h2>7. Contact Us</h2>
          <p>For privacy-related questions or to exercise your rights, contact us at odyexchange@gmail.com</p>
        </div>
      </div>
    </div>
  );
}