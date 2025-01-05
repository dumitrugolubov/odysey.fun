import React from 'react';
import { Helmet } from 'react-helmet';

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl: string;
  ogType?: string;
  keywords?: string[];
  imageUrl?: string;
  imageAlt?: string;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  noIndex?: boolean;
  structuredData?: object;
  locale?: string;
  faq?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
  videoUrl?: string;
  price?: {
    amount: number;
    currency: string;
  };
  rating?: {
    value: number;
    count: number;
  };
}

export default function SEO({ 
  title = 'Odysey Exchange | Zero-Fee Meme Coin Trading Platform | EU & US',
  description = 'Trade meme coins with 0% spot fees on Europe\'s premier crypto exchange. Up to 777x leverage, instant EUR/USD deposits, and 50% referral commissions. Available in EU & US.',
  canonicalUrl,
  ogType = 'website',
  keywords = ['crypto exchange', 'meme coins', 'zero fee trading', 'cryptocurrency', 'EU crypto', 'US crypto'],
  imageUrl = 'https://odysey.fun/og-image.jpg',
  imageAlt = 'Odysey Exchange - Zero Fee Trading Platform',
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  noIndex = false,
  structuredData,
  locale = 'en-US',
  faq,
  breadcrumbs,
  videoUrl,
  price,
  rating
}: SEOProps) {
  const baseUrl = 'https://odysey.fun';
  const fullCanonicalUrl = `${baseUrl}${canonicalUrl}`;
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;

  // Generate FAQ structured data if provided
  const faqStructuredData = faq ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  } : null;

  // Generate breadcrumb structured data if provided
  const breadcrumbStructuredData = breadcrumbs ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.item}`
    }))
  } : null;

  // Default structured data for the organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Odysey Exchange',
    url: baseUrl,
    logo: `${baseUrl}/favicon.png`,
    description: 'Premier meme coin trading platform with zero fees',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EU'
    },
    sameAs: [
      'https://twitter.com/t_dmi3'
    ]
  };

  // Combine all structured data
  const allStructuredData = [
    structuredData || defaultStructuredData,
    faqStructuredData,
    breadcrumbStructuredData
  ].filter(Boolean);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={locale.split('-')[0]} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={fullCanonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="Odysey Exchange" />
      <meta property="og:locale" content={locale} />

      {/* Video Meta Tags */}
      {videoUrl && (
        <>
          <meta property="og:video" content={videoUrl} />
          <meta property="og:video:type" content="video/mp4" />
        </>
      )}

      {/* Price Meta Tags */}
      {price && (
        <>
          <meta property="product:price:amount" content={price.amount.toString()} />
          <meta property="product:price:currency" content={price.currency} />
        </>
      )}

      {/* Article Specific Meta Tags */}
      {articleAuthor && <meta property="article:author" content={articleAuthor} />}
      {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
      {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@t_dmi3" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      {/* Geo */}
      <meta name="geo.region" content="EU, US" />
      <meta name="geo.position" content="52.520008;13.404954" />
      <meta name="ICBM" content="52.520008, 13.404954" />
      
      {/* Language Alternatives */}
      <link rel="alternate" href={fullCanonicalUrl} hreflang="en-US" />
      <link rel="alternate" href={fullCanonicalUrl} hreflang="en-GB" />
      <link rel="alternate" href={fullCanonicalUrl} hreflang="en-EU" />
      <link rel="alternate" href={fullCanonicalUrl} hreflang="x-default" />

      {/* Mobile Specific */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      {/* Performance Hints */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
