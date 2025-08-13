import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink } from "lucide-react";

interface CalendlyWidgetProps {
  url: string;
  className?: string;
}

const CalendlyWidget = ({ url, className = "" }: CalendlyWidgetProps) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onerror = () => setHasError(true);
      document.body.appendChild(script);
    }

    // Check if Calendly loads within 5 seconds
    const timeout = setTimeout(() => {
      const calendlyFrame = document.querySelector('iframe[src*="calendly"]');
      if (!calendlyFrame) {
        setHasError(true);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (hasError) {
    return (
      <div className={`${className} flex flex-col items-center justify-center bg-gray-50 rounded-lg p-8`}>
        <div className="text-center max-w-md">
          <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-4">Book Your Spot</h3>
          <p className="text-muted-foreground mb-6">
            Having trouble loading the calendar? Book directly through Calendly:
          </p>
          
          <div className="space-y-4">
            <Button 
              className="w-full bg-primary hover:bg-primary/90" 
              onClick={() => window.open(url, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Calendly in New Tab
            </Button>
            
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold mb-2">Available Time Slots - September 6, 2025:</p>
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>1:00 PM CEST (UTC+2)</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8:00 PM CEST (UTC+2)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ 
        minWidth: '300px', 
        height: 'clamp(500px, 80vh, 700px)',
        width: '100%',
        maxWidth: '100%'
      }}
    />
  );
};

export default CalendlyWidget;