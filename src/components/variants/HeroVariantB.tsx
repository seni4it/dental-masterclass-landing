import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Timer, Zap, ArrowRight, Shield, Video, RotateCcw } from "lucide-react";
import toothQuestion from "/lovable-uploads/78edbdfc-906b-4b3f-b44f-5bcedbf2144c.png";
import { MoneyBackGuaranteeBadge } from "@/components/MoneyBackGuaranteeBadge";

interface HeroVariantBProps {
  onCtaClick: () => void;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  setShowTimeSlots: (show: boolean) => void;
}

// Version B: Bold/Energetic Design (Current Design)
export const HeroVariantB = ({ onCtaClick, timeLeft, setShowTimeSlots }: HeroVariantBProps) => {
  return (
    <>
      {/* Urgency Banner - Simplified */}
      <div className="bg-destructive text-destructive-foreground text-center py-3 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 text-sm">
            <Badge 
              className="bg-white text-destructive font-bold animate-pulse cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => setShowTimeSlots(true)}
            >
              ONLY 47 SPOTS LEFT
            </Badge>
            <span>•</span>
            <span 
              className="font-semibold cursor-pointer hover:text-orange-400 transition-colors"
              onClick={() => setShowTimeSlots(true)}
            >
              53% OFF ENDS SOON!
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section - Completely Redesigned */}
      <section className="gradient-hero py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <Badge 
                className="mb-6 bg-accent text-accent-foreground border-accent px-6 py-3 text-base font-bold animate-pulse-glow cursor-pointer hover:bg-accent/90 transition-colors"
                onClick={() => setShowTimeSlots(true)}
              >
                <span>🔥 LIVE MASTERCLASS • SEPTEMBER 6, 2025</span>
              </Badge>
              
              {/* Tooth with Question Mark Icon - Bigger and No Bounce */}
              <div className="flex justify-center mb-8">
                <img src={toothQuestion} alt="Tooth with Question Mark" className="w-40 h-40" />
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
                <span>NEVER MISS A</span>
                <span className="block text-accent-glow animate-pulse-glow">CANAL AGAIN</span>
              </h1>
              
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-2xl lg:text-3xl text-white font-bold mb-4">
                  <span className="text-orange-500">STOP</span> fearing <span className="text-orange-500">ENDO</span>! Master canal localization today!
                </p>
                <p className="text-xl text-white/90 mb-6">
                  Eliminate missed canals • Prevent perforations • Boost confidence
                </p>
              </div>
              
              {/* Main CTA Section - Enhanced */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto mb-8">
                {/* Countdown Timer */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 text-lg font-bold mb-4">
                    <Timer className="w-5 h-5" />
                    <span 
                      className="text-white cursor-pointer hover:text-orange-300 transition-colors"
                      onClick={() => setShowTimeSlots(true)}
                    >
                      🔥 EARLY BIRD DISCOUNT ENDS IN:
                    </span>
                  </div>
                  <div className="flex gap-3 text-xl font-black justify-center mb-4">
                    <div className="bg-white/20 px-3 py-2 rounded-lg min-w-[50px]">
                      <div>{timeLeft.days}</div>
                      <div className="text-xs font-normal">DAYS</div>
                    </div>
                    <div className="bg-white/20 px-3 py-2 rounded-lg min-w-[50px]">
                      <div>{timeLeft.hours}</div>
                      <div className="text-xs font-normal">HRS</div>
                    </div>
                    <div className="bg-white/20 px-3 py-2 rounded-lg min-w-[50px]">
                      <div>{timeLeft.minutes}</div>
                      <div className="text-xs font-normal">MIN</div>
                    </div>
                    <div className="bg-white/20 px-3 py-2 rounded-lg min-w-[50px]">
                      <div>{timeLeft.seconds}</div>
                      <div className="text-xs font-normal">SEC</div>
                    </div>
                  </div>
                  
                  {/* Limited time badge */}
                  <div className="flex justify-center mb-2">
                    <Badge 
                      className="bg-destructive text-destructive-foreground animate-pulse font-medium cursor-pointer hover:bg-destructive/80 transition-colors"
                      onClick={() => setShowTimeSlots(true)}
                    >
                      🔥 EARLY BIRD DISCOUNT
                    </Badge>
                  </div>
                  
                  {/* Spots remaining centered */}
                  <div className="flex justify-center mb-6">
                    <span className="text-white font-medium">Only 47 spots remaining</span>
                  </div>
                  
                  {/* Divider line */}
                  <div className="w-full h-px bg-white/30 mb-6"></div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="text-3xl text-red-400 line-through font-bold">€57</span>
                    <span className="text-5xl font-black text-accent-glow">€27</span>
                  </div>
                  <p className="text-white/90 font-semibold">Early Bird Special (Save 53%)</p>
                </div>
                
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full text-sm sm:text-lg font-bold transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:bg-accent/90 mb-4 px-4 sm:px-8 py-3 sm:py-4" 
                  onClick={onCtaClick}
                >
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span className="flex-1 text-center">SECURE YOUR SPOT NOW</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
                </Button>
                
                {/* Enhanced Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/90">
                  <div className="flex items-center gap-2 justify-center p-3 bg-white/10 rounded-lg">
                    <Shield className="w-6 h-6 text-accent" />
                    <span className="font-semibold">100% Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center p-3 bg-accent/20 rounded-lg border border-accent/30">
                    <Video className="w-6 h-6 text-accent" />
                    <span className="font-bold">RECORDING INCLUDED</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center p-3 bg-white/10 rounded-lg">
                    <RotateCcw className="w-6 h-6 text-accent" />
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