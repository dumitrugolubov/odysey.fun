import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-gray-600">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            Learn more in our{' '}
            <a href="/privacy" className="text-blue-500 hover:text-blue-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Accept
          </button>
        </div>
        <button
          onClick={declineCookies}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 md:hidden"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}