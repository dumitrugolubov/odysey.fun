import React from 'react';
import PageHeader from '../components/shared/PageHeader';

export default function Terms() {
  return (
    <div>
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