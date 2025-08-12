import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, Shield, CheckCircle, ArrowRight, Timer, Zap, MonitorSmartphone, RotateCcw } from "lucide-react";
import toothQuestion from "/lovable-uploads/78edbdfc-906b-4b3f-b44f-5bcedbf2144c.png";
import { MoneyBackGuaranteeBadge } from "@/components/MoneyBackGuaranteeBadge";

interface HeroVariantAProps {
  onCtaClick: () => void;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  setShowTimeSlots: (show: boolean) => void;
}

// Version A: Professional/Clean Design (from variant a.html)
export const HeroVariantA = ({ onCtaClick, timeLeft, setShowTimeSlots }: HeroVariantAProps) => {
  return (
    <>
      {/* Urgency Banner - Clean Version */}
      <div className="bg-destructive text-destructive-foreground text-center py-4 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-lg font-bold">
              <Timer className="w-5 h-5" />
              <span>🔥 LIMITED TIME OFFER ENDS IN:</span>
            </div>
            <div className="flex gap-3 text-2xl font-black">
              <div className="bg-white/20 px-4 py-2 rounded-lg min-w-[60px]">
                <div>{timeLeft.days}</div>
                <div className="text-xs font-normal">DAYS</div>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg min-w-[60px]">
                <div>{timeLeft.hours}</div>
                <div className="text-xs font-normal">HRS</div>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg min-w-[60px]">
                <div>{timeLeft.minutes}</div>
                <div className="text-xs font-normal">MIN</div>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg min-w-[60px]">
                <div>{timeLeft.seconds}</div>
                <div className="text-xs font-normal">SEC</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <Badge 
                className="bg-white text-destructive font-bold animate-pulse cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => setShowTimeSlots(true)}
              >
                ONLY 47 SPOTS LEFT
              </Badge>
              <span>•</span>
              <span 
                className="font-semibold cursor-pointer hover:text-orange-300 transition-colors"
                onClick={() => setShowTimeSlots(true)}
              >
                72% OFF ENDS SOON!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Clean Professional Design */}
      <section className="gradient-hero py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Logo Left */}
        <div className="absolute top-8 left-8 z-20">
          <svg viewBox="0 0 200 200" className="h-16 w-16 text-white" fill="currentColor">
            <path d="M100 20C130 20 155 45 155 75C155 105 130 130 100 130C70 130 45 105 45 75C45 45 70 20 100 20ZM100 170C120 170 140 155 140 140C140 125 125 110 110 110H90C75 110 60 125 60 140C60 155 80 170 100 170Z" />
          </svg>
        </div>
        
        {/* Logo Right */}
        <div className="absolute top-8 right-8 z-20">
          <img src="/lovable-uploads/711d1ae8-8371-4a6b-bb15-341475f9ccff.png" alt="Company Logo" className="h-16 w-auto" />
        </div>
        
        {/* Floating Elements - Subtle */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <Badge 
                className="mb-6 bg-accent text-accent-foreground border-accent px-6 py-3 text-base font-bold animate-pulse-glow cursor-pointer hover:bg-accent/90 transition-colors"
                onClick={() => setShowTimeSlots(true)}
              >
                🔥 LIVE MASTERCLASS • SEPTEMBER 6, 2025
              </Badge>
              
              {/* Tooth with Question Mark Icon */}
              <div className="flex justify-center mb-8">
                <img src={toothQuestion} alt="Tooth with Question Mark" className="w-40 h-40" />
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
                <span>CANAL LOCALIZATION</span>
                <span className="block text-accent-glow animate-pulse-glow">MADE SIMPLE!</span>
              </h1>
              
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-2xl lg:text-3xl text-white font-bold mb-4">
                  Learn how to never miss a canal again!
                </p>
                <p className="text-xl text-white/90 mb-6">
                  If you're tired of missed canals and constant second‑guessing, join this masterclass to learn step‑by‑step localization methods that will turn your frustration into predictable success!
                </p>
              </div>
              
              {/* Value Proposition Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-12 h-12 text-accent mx-auto mb-3" />
                    <p className="font-bold text-lg">Multiple time slots available</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Timer className="w-12 h-12 text-accent mx-auto mb-3" />
                    <p className="font-bold text-lg">One Hour + Q&amp;A</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <MonitorSmartphone className="w-12 h-12 text-accent mx-auto mb-3" />
                    <p className="font-bold text-lg">Format: Live on Zoom</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <RotateCcw className="w-12 h-12 text-accent mx-auto mb-3" />
                    <p className="font-bold text-lg">Replay available</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Main CTA Section - Clean */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Badge className="bg-destructive text-destructive-foreground animate-pulse">🔥 LIMITED TIME</Badge>
                  <span className="text-white font-medium">Only 47 spots remaining</span>
                </div>
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl text-white/60 line-through">€97</span>
                    <span className="text-4xl font-black text-accent-glow">€27</span>
                  </div>
                  <p className="text-white/90 font-semibold">Early Bird Special (Save 72%)</p>
                </div>
                
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full text-lg font-bold animate-pulse-glow mb-4" 
                  onClick={onCtaClick}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  SECURE YOUR SPOT NOW
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                {/* Enhanced Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/90">
                  <div className="flex items-center gap-2 justify-center p-3 bg-white/10 rounded-lg">
                    <Shield className="w-4 h-4 text-accent" />
                    <span className="font-semibold">100% Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center p-3 bg-accent/20 rounded-lg border border-accent/30">
                    <Video className="w-4 h-4 text-accent" />
                    <span className="font-bold">🎥 RECORDING INCLUDED</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center p-3 bg-white/10 rounded-lg">
                    <RotateCcw className="w-4 h-4 text-accent" />
                    <span className="font-semibold">Lifetime Access</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-white/10 rounded-lg border border-white/20 text-center">
                  <p className="text-white font-bold text-sm">
                    🎁 BONUS: Can't attend live? No problem! Full HD recording included for lifetime access
                  </p>
                </div>
              </div>
              
              {/* Money Back Guarantee Badge */}
              <div className="flex justify-center mt-12">
                <MoneyBackGuaranteeBadge onBookClick={() => setShowTimeSlots(true)} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};