export const getCookieConsent = () => {
  return localStorage.getItem('cookieConsent');
};

export const hasCookieConsent = () => {
  return getCookieConsent() === 'accepted';
};

export const setCookieConsent = (value: 'accepted' | 'declined') => {
  localStorage.setItem('cookieConsent', value);
};