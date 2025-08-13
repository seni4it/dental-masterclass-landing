import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield } from "lucide-react";
import CalendlyWidget from "@/components/CalendlyWidget";

// Variant A: GitHub Endo-Elevate-Hub Booking (Calendly Widget)
export const BookingVariantA = () => {
  return (
    <section id="booking" className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Don't Miss This
              <span className="block text-accent-glow">Opportunity!</span>
            </h2>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl lg:text-2xl text-white font-medium mb-6">
                Join 2,000+ dentists who have transformed their practice with our proven system
              </p>
              
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-md mx-auto mb-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-5xl font-black text-accent-glow">€27</span>
                  </div>
                </div>
                
                <div className="space-y-3 text-white font-bold" style={{fontSize: '25px'}}>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>60-minute live masterclass</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>30-minute Q&A session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Lifetime access to recording</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Downloadable resources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>100% money-back guarantee</span>
                  </div>
                </div>
              </div>
              
              <p className="text-2xl lg:text-3xl text-white font-bold">
                Select your preferred time slot below and secure your spot now!
              </p>
            </div>
          </div>
          
          {/* Calendly Widget - GitHub Version */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white/95 backdrop-blur-sm border border-white/20">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  Choose Your Time Slot
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Select the time that works best for your schedule
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CalendlyWidget url="https://calendly.com/endoclub/new-meeting-1" className="min-h-[700px] w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};