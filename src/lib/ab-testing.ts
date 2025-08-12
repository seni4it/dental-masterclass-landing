export type Variant = 'A' | 'B';

export const getVariant = (): Variant => {
  // Check URL parameter first
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const urlVariant = urlParams.get('variant');
    if (urlVariant === 'A' || urlVariant === 'B') {
      // Store the URL variant in localStorage for persistence
      localStorage.setItem('ab-test-variant', urlVariant);
      return urlVariant;
    }
    
    // Check localStorage
    const storedVariant = localStorage.getItem('ab-test-variant');
    if (storedVariant === 'A' || storedVariant === 'B') {
      return storedVariant;
    }
    
    // Random assignment for new users
    const variant: Variant = Math.random() < 0.5 ? 'A' : 'B';
    localStorage.setItem('ab-test-variant', variant);
    return variant;
  }
  
  // Default for SSR
  return 'A';
};

export const setVariant = (variant: Variant) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('ab-test-variant', variant);
  }
};