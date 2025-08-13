import { useEffect, useState } from 'react';

// Simple hook that uses the pre-initialized A/B test
export function useABTest() {
  // Get variant from window object (set by ab-init.js)
  const [variant, setVariant] = useState<'A' | 'B'>(() => {
    // @ts-ignore
    const windowVariant = window.AB_VARIANT;
    console.log('[useABTest] Window variant:', windowVariant);
    
    // Fallback: check URL directly if window.AB_VARIANT not set
    if (!windowVariant) {
      const urlParams = new URLSearchParams(window.location.search);
      const urlVariant = urlParams.get('variant');
      const fallbackVariant = urlVariant?.toUpperCase() === 'B' ? 'B' : 'A';
      console.log('[useABTest] Using URL fallback:', fallbackVariant);
      return fallbackVariant;
    }
    
    return windowVariant || 'A';
  });

  useEffect(() => {
    // Listen for variant changes (e.g., from debug tools)
    const handleVariantChange = () => {
      // @ts-ignore
      setVariant(window.AB_VARIANT || 'A');
    };

    window.addEventListener('ab-variant-changed', handleVariantChange);
    return () => window.removeEventListener('ab-variant-changed', handleVariantChange);
  }, []);

  const trackConversion = (action: string, value?: number) => {
    // @ts-ignore
    if (window.ABTesting?.trackConversion) {
      // @ts-ignore
      window.ABTesting.trackConversion(action, value);
    }
  };

  return {
    variant,
    trackConversion,
    isVariantA: variant === 'A',
    isVariantB: variant === 'B'
  };
}