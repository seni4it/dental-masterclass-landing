import { useEffect, useState } from 'react';
import { abTestingEnhanced, type Variant } from '@/lib/ab-testing-enhanced';

interface UseABTestOptions {
  experimentId: string;
  trackImpression?: boolean;
}

export function useABTestEnhanced({ 
  experimentId, 
  trackImpression = true 
}: UseABTestOptions): {
  variant: Variant;
  setVariant: (variant: Variant) => void;
  trackConversion: (action: string, value?: number) => void;
  clearVariant: () => void;
  getExperimentState: () => { variant: Variant; eventsCount: number };
} {
  const [variant, setVariantState] = useState<Variant>(() => abTestingEnhanced.getVariant());
  
  useEffect(() => {
    // Track impression when component mounts
    if (trackImpression) {
      abTestingEnhanced.trackImpression(experimentId, variant);
    }
  }, [experimentId, variant, trackImpression]);
  
  // Listen for popstate events (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const newVariant = abTestingEnhanced.getVariant();
      setVariantState(newVariant);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  const setVariant = (newVariant: Variant) => {
    abTestingEnhanced.setVariant(newVariant);
    setVariantState(newVariant);
  };
  
  const trackConversion = (action: string, value?: number) => {
    abTestingEnhanced.trackConversion(action, variant, value);
  };
  
  const clearVariant = () => {
    abTestingEnhanced.clearVariant();
    const newVariant = abTestingEnhanced.getVariant();
    setVariantState(newVariant);
  };
  
  const getExperimentState = () => {
    return abTestingEnhanced.getExperimentState();
  };
  
  return {
    variant,
    setVariant,
    trackConversion,
    clearVariant,
    getExperimentState,
  };
}