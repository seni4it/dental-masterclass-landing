import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Clock, Shield, Users, Timer, ArrowRight } from "lucide-react";

interface BookingVariantBProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  setShowTimeSlots: (show: boolean) => void;
  showTimeSlots: boolean;
  handleTimeSlotSelect: (time: string) => void;
}

// Variant B: Current Custom Time Slots
export const BookingVariantB = ({ timeLeft, setShowTimeSlots, showTimeSlots, handleTimeSlotSelect }: BookingVariantBProps) => {
  const timeSlots = [
    { time: "13:00", label12h: "1:00 PM", timezone: "CEST (UTC+2)", note: "Early afternoon", available: true },
    { time: "20:00", label12h: "8:00 PM", timezone: "CEST (UTC+2)", note: "Evening", available: true },
  ];

  return (
    <section id="booking" className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge 
              className="mb-6 bg-destructive text-destructive-foreground px-6 py-3 text-base font-bold animate-pulse cursor-pointer hover:bg-destructive/80 transition-colors"
              onClick={() => setShowTimeSlots(true)}
            >
              🚨 EARLY BIRD DISCOUNT: 53% OFF SPECIAL
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Don't Miss This
              <span className="block text-accent-glow">Opportunity!</span>
            </h2>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl lg:text-2xl text-white font-medium mb-6">
                Join thousands of dentists who've mastered canal localization
              </p>
              
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-md mx-auto mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Badge className="bg-destructive text-destructive-foreground animate-pulse">🔥 LIMITED TIME</Badge>
                  <span className="text-white font-medium">Only 47 spots remaining</span>
                </div>
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl text-white/60 line-through">€97</span>
                    <span className="text-5xl font-black text-accent-glow">€27</span>
                  </div>
                  <p className="text-white/90 font-semibold">Early Bird Special (Save 72%)</p>
                </div>
                
                <div className="space-y-3 text-white text-sm">
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
                Choose your time slot and secure your spot now!
              </p>
            </div>
          </div>
          
          {/* Time Slots Selection */}
          <div id="calendar" className="max-w-2xl mx-auto">
            <Card className="p-6 sm:p-8 bg-white/95 backdrop-blur-sm border border-white/20">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Choose Your Time Slot
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  September 6, 2025 - Select your preferred time
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot.time}
                      onClick={() => handleTimeSlotSelect(slot.time)}
                      disabled={!slot.available}
                      className="w-full p-6 h-auto text-left bg-primary hover:bg-primary/90 text-primary-foreground disabled:bg-muted disabled:text-muted-foreground"
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white/20 rounded-full">
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-lg font-bold">
                              {slot.label12h} ({slot.timezone})
                            </div>
                            <div className="text-sm opacity-90">
                              {slot.note}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {slot.available ? (
                            <>
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                Available
                              </Badge>
                              <ArrowRight className="w-5 h-5" />
                            </>
                          ) : (
                            <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                              Full
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};