import { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
  className?: string;
}

const CalendlyWidget = ({ url, className = "" }: CalendlyWidgetProps) => {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
    
    // Track Calendly widget load for Variant A
    if (url.includes('variant=A') && window.dataLayer) {
      const clickEvent = {
        event: 'click_A',
        experiment_id: 'dental_masterclass_hero',
        variant_id: 'A',
        calendly_url: url,
        interaction_type: 'widget_load'
      };
      window.dataLayer.push(clickEvent);
      console.log('[DEBUG] dataLayer click_A event pushed:', clickEvent);
    }
  }, [url]);

  return (
    <div 
      className={`calendly-inline-widget block w-full min-h-[700px] mx-auto ${className}`}
      data-url={url}
      style={{ 
        minWidth: '320px', 
        height: '700px',
        maxWidth: '100%'
      }}
    />
  );
};

export default CalendlyWidget;