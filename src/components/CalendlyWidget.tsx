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
      const bookingEvent = {
        event: 'book_now_A',
        experiment_id: 'dental_masterclass_hero',
        variant_id: 'A',
        button_location: 'calendly_widget',
        interaction_type: 'widget_load',
        calendly_url: url
      };
      window.dataLayer.push(bookingEvent);
      console.log('[DEBUG] dataLayer book_now_A event pushed:', bookingEvent);
    }
  }, [url]);

  return (
    <div 
      className={`calendly-inline-widget block w-full min-h-[700px] mx-auto ${className}`}
      data-url={url}
      style={{ 
        height: '700px'
      }}
    />
  );
};

export default CalendlyWidget;