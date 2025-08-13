// A/B Testing Initialization - Must run before React
// This prevents flicker by determining variant before page renders

(function() {
  // Get or assign variant
  function getVariant() {
    // Check URL parameter first (for testing/forcing)
    const urlParams = new URLSearchParams(window.location.search);
    const urlVariant = urlParams.get('variant');
    
    if (urlVariant && ['A', 'B'].includes(urlVariant.toUpperCase())) {
      const variant = urlVariant.toUpperCase();
      localStorage.setItem('ab-variant', variant);
      return variant;
    }
    
    // Check localStorage for existing assignment (with fallback)
    let variant;
    try {
      variant = localStorage.getItem('ab-variant');
    } catch (e) {
      console.warn('[A/B Test] localStorage blocked, using URL/random fallback');
      variant = null;
    }
    
    if (!variant || !['A', 'B'].includes(variant)) {
      // Random assignment for new users (true 50/50 split)
      variant = Math.random() < 0.5 ? 'A' : 'B';
      try {
        localStorage.setItem('ab-variant', variant);
      } catch (e) {
        console.warn('[A/B Test] Cannot store variant, will re-assign on refresh');
      }
      
      // Track initial assignment
      if (window.gtag) {
        window.gtag('event', 'ab_test_assignment', {
          experiment_id: 'dental_masterclass_hero',
          variant_id: variant,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return variant;
  }
  
  // Set variant globally before React loads
  window.AB_VARIANT = getVariant();
  
  // Add variant as a class to body for CSS targeting
  document.documentElement.classList.add('variant-' + window.AB_VARIANT.toLowerCase());
  
  // Track page view with variant
  if (window.gtag) {
    window.gtag('event', 'experiment_impression', {
      experiment_id: 'dental_masterclass_hero',
      variant_id: window.AB_VARIANT,
      page_path: window.location.pathname
    });
  }
  
  // Expose functions for React to use
  window.ABTesting = {
    getVariant: function() {
      return window.AB_VARIANT;
    },
    
    trackConversion: function(action, value) {
      if (window.gtag) {
        window.gtag('event', 'experiment_conversion', {
          experiment_id: 'dental_masterclass_hero',
          variant_id: window.AB_VARIANT,
          action: action,
          value: value || 0,
          currency: 'EUR'
        });
      }
    },
    
    reset: function() {
      try {
        localStorage.removeItem('ab-variant');
      } catch (e) {
        console.warn('[A/B Test] Cannot access localStorage for reset');
      }
      window.location.reload();
    }
  };
  
  // Log for debugging
  console.log('[A/B Test] Variant assigned:', window.AB_VARIANT);
})();