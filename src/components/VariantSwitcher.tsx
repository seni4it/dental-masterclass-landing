import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useABTestEnhanced } from "@/hooks/useABTestEnhanced";

export const VariantSwitcher = () => {
  const { variant, setVariant, clearVariant, getExperimentState } = useABTestEnhanced({
    experimentId: 'dental_masterclass_main',
    trackImpression: false // Don't track impressions for the switcher itself
  });

  const experimentState = getExperimentState();

  // Only show in development or with special URL param
  const shouldShow = process.env.NODE_ENV === 'development' || 
                    new URLSearchParams(window.location.search).has('debug');

  if (!shouldShow) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white/95 backdrop-blur border border-gray-300 rounded-lg p-4 shadow-lg">
      <div className="text-sm font-bold mb-2">A/B Test Control</div>
      
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs">Current:</span>
        <Badge variant={variant === 'A' ? 'default' : 'secondary'}>
          Variant {variant}
        </Badge>
        <span className="text-xs text-gray-500">
          ({experimentState.eventsCount} events)
        </span>
      </div>
      
      <div className="flex gap-2 mb-2">
        <Button 
          size="sm" 
          variant={variant === 'A' ? 'default' : 'outline'}
          onClick={() => setVariant('A')}
        >
          Force A
        </Button>
        <Button 
          size="sm" 
          variant={variant === 'B' ? 'default' : 'outline'}
          onClick={() => setVariant('B')}
        >
          Force B
        </Button>
      </div>
      
      <Button 
        size="sm" 
        variant="ghost" 
        onClick={clearVariant}
        className="w-full text-xs"
      >
        Reset & Randomize
      </Button>
    </div>
  );
};