export type Variant = 'A' | 'B';

interface ABTestConfig {
  experimentId: string;
  variants: Variant[];
  defaultVariant?: Variant;
}

interface AnalyticsEvent {
  type: 'impression' | 'conversion';
  experimentId: string;
  variant: Variant;
  action?: string;
  value?: number;
  timestamp: number;
}

export class ABTestingEnhanced {
  private static instance: ABTestingEnhanced;
  private variant: Variant | null = null;
  private analyticsEvents: AnalyticsEvent[] = [];
  
  private constructor() {
    // Initialize analytics if available
    this.initializeAnalytics();
  }
  
  static getInstance(): ABTestingEnhanced {
    if (!ABTestingEnhanced.instance) {
      ABTestingEnhanced.instance = new ABTestingEnhanced();
    }
    return ABTestingEnhanced.instance;
  }
  
  /**
   * Get the current variant for the user
   * Priority: URL param > localStorage > random assignment
   */
  getVariant(): Variant {
    if (this.variant) return this.variant;
    
    if (typeof window === 'undefined') return 'A'; // SSR fallback
    
    // Check URL parameters first
    const urlParams = new URLSearchParams(window.location.search);
    const forced = urlParams.get('variant');
    
    if (forced && ['A', 'B'].includes(forced.toUpperCase())) {
      const variant = forced.toUpperCase() as Variant;
      localStorage.setItem('ab-test-variant', variant);
      this.variant = variant;
      this.updateURL(variant);
      return variant;
    }
    
    // Check localStorage
    const stored = localStorage.getItem('ab-test-variant') as Variant | null;
    if (stored && ['A', 'B'].includes(stored)) {
      this.variant = stored;
      return stored;
    }
    
    // Random assignment for new users (50/50 split)
    const variant: Variant = Math.random() < 0.5 ? 'A' : 'B';
    localStorage.setItem('ab-test-variant', variant);
    this.variant = variant;
    return variant;
  }
  
  /**
   * Force a specific variant (useful for testing)
   */
  setVariant(variant: Variant): void {
    this.variant = variant;
    localStorage.setItem('ab-test-variant', variant);
    this.updateURL(variant);
    
    // Track variant change
    this.trackEvent({
      type: 'conversion',
      experimentId: 'manual_variant_switch',
      variant,
      action: 'variant_forced',
      timestamp: Date.now()
    });
  }
  
  /**
   * Update URL without page reload
   */
  private updateURL(variant: Variant): void {
    if (typeof window === 'undefined') return;
    
    const url = new URL(window.location.href);
    url.searchParams.set('variant', variant);
    window.history.replaceState({}, '', url.toString());
  }
  
  /**
   * Clear variant selection and start fresh
   */
  clearVariant(): void {
    this.variant = null;
    localStorage.removeItem('ab-test-variant');
    
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('variant');
      window.history.replaceState({}, '', url.toString());
    }
  }
  
  /**
   * Track analytics events
   */
  trackEvent(event: Omit<AnalyticsEvent, 'timestamp'> & { timestamp?: number }): void {
    const fullEvent: AnalyticsEvent = {
      ...event,
      timestamp: event.timestamp || Date.now()
    };
    
    this.analyticsEvents.push(fullEvent);
    
    // Send to analytics providers
    this.sendToAnalytics(fullEvent);
    
    // Debug logging
    if (process.env.NODE_ENV === 'development') {
      console.log('AB Test Event:', fullEvent);
    }
  }
  
  /**
   * Track experiment impression (when variant is shown)
   */
  trackImpression(experimentId: string, variant: Variant): void {
    this.trackEvent({
      type: 'impression',
      experimentId,
      variant
    });
  }
  
  /**
   * Track conversion events (button clicks, form submissions, etc.)
   */
  trackConversion(action: string, variant: Variant, value?: number): void {
    this.trackEvent({
      type: 'conversion',
      experimentId: 'dental_masterclass_main',
      variant,
      action,
      value
    });
  }
  
  /**
   * Initialize analytics providers
   */
  private initializeAnalytics(): void {
    // This can be extended to initialize Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined' && window.gtag) {
      // Google Analytics 4 integration ready
    }
  }
  
  /**
   * Send events to analytics providers
   */
  private sendToAnalytics(event: AnalyticsEvent): void {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action || event.type, {
        custom_parameter_experiment_id: event.experimentId,
        custom_parameter_variant: event.variant,
        custom_parameter_value: event.value,
        custom_parameter_timestamp: event.timestamp
      });
    }
    
    // Custom analytics endpoint (if you have one)
    // fetch('/api/analytics', { method: 'POST', body: JSON.stringify(event) });
  }
  
  /**
   * Get analytics data for debugging
   */
  getAnalyticsData(): AnalyticsEvent[] {
    return this.analyticsEvents;
  }
  
  /**
   * Get current experiment state
   */
  getExperimentState(): { variant: Variant; eventsCount: number } {
    return {
      variant: this.getVariant(),
      eventsCount: this.analyticsEvents.length
    };
  }
}

// Global type for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const abTestingEnhanced = ABTestingEnhanced.getInstance();