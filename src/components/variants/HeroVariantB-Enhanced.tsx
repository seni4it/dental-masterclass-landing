import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Timer, Zap, ArrowRight, Shield, Video, RotateCcw, AlertTriangle, TrendingUp, Clock } from "lucide-react";
import toothQuestion from "/lovable-uploads/78edbdfc-906b-4b3f-b44f-5bcedbf2144c.png";
import { MoneyBackGuaranteeBadge } from "@/components/MoneyBackGuaranteeBadge";

interface HeroVariantBEnhancedProps {
  onCtaClick: () => void;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  setShowTimeSlots: (show: boolean) => void;
  trackConversion: (action: string, value?: number) => void;
}

// Version B: Ultra-Aggressive Conversion-Focused Design
export const HeroVariantBEnhanced = ({ onCtaClick, timeLeft, setShowTimeSlots, trackConversion }: HeroVariantBEnhancedProps) => {
  
  const handleCtaClick = (source: string) => {
    trackConversion(`cta_click_${source}`);
    onCtaClick();
  };

  const handleTimeSlotClick = (source: string) => {
    trackConversion(`timeslot_click_${source}`);
    setShowTimeSlots(true);
  };

  return (
    <>
      {/* MEGA Urgency Banner - Enhanced */}
      <div className="bg-gradient-to-r from-red-600 via-destructive to-red-600 text-white text-center py-4 px-4 relative overflow-hidden">
        {/* Moving background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center gap-3">
            {/* Flashing alert */}
            <div className="flex items-center gap-2 text-lg font-black animate-bounce">
              <AlertTriangle className="w-6 h-6 animate-pulse text-yellow-300" />
              <span className="text-yellow-300">🚨 URGENT: SPOTS FILLING FAST!</span>
              <AlertTriangle className="w-6 h-6 animate-pulse text-yellow-300" />
            </div>
            
            {/* Enhanced countdown */}
            <div className="flex gap-2 text-3xl font-black">
              <div className="bg-white/30 backdrop-blur px-4 py-3 rounded-xl min-w-[70px] border-2 border-yellow-300 animate-pulse">
                <div className="text-yellow-300">{timeLeft.days}</div>
                <div className="text-xs font-bold text-white">DAYS</div>
              </div>
              <div className="bg-white/30 backdrop-blur px-4 py-3 rounded-xl min-w-[70px] border-2 border-yellow-300 animate-pulse">
                <div className="text-yellow-300">{timeLeft.hours}</div>
                <div className="text-xs font-bold text-white">HRS</div>
              </div>
              <div className="bg-white/30 backdrop-blur px-4 py-3 rounded-xl min-w-[70px] border-2 border-yellow-300 animate-pulse">
                <div className="text-yellow-300">{timeLeft.minutes}</div>
                <div className="text-xs font-bold text-white">MIN</div>
              </div>
              <div className="bg-white/30 backdrop-blur px-4 py-3 rounded-xl min-w-[70px] border-2 border-yellow-300 animate-pulse">
                <div className="text-yellow-300">{timeLeft.seconds}</div>
                <div className="text-xs font-bold text-white">SEC</div>
              </div>
            </div>
            
            {/* Multiple urgency indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Badge 
                className="bg-yellow-400 text-black font-black animate-pulse cursor-pointer hover:bg-yellow-300 transition-colors text-base px-4 py-2"
                onClick={() => handleTimeSlotClick('urgency_banner')}
              >
                🔥 ONLY 12 SPOTS LEFT TODAY!
              </Badge>
              <span className="text-white font-bold">•</span>
              <Badge 
                className="bg-orange-500 text-white font-black animate-bounce cursor-pointer hover:bg-orange-400 transition-colors text-base px-4 py-2"
                onClick={() => handleTimeSlotClick('discount_banner')}
              >
                💥 72% OFF EXPIRES IN HOURS!
              </Badge>
              <span className="text-white font-bold">•</span>
              <div className="flex items-center gap-1 text-white font-bold">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400">847 people viewing now</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Ultra-Aggressive Design */}
      <section className="gradient-hero py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Enhanced floating elements with more movement */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-bounce delay-1000"></div>
        
        {/* Scrolling text background */}
        <div className="absolute inset-0 opacity-5 text-white font-black text-6xl overflow-hidden">
          <div className="animate-scroll-right whitespace-nowrap py-20">
            DENTAL MASTERY • CANAL LOCALIZATION • NEVER MISS AGAIN • DENTAL MASTERY • CANAL LOCALIZATION •
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              
              {/* Mega Badge */}
              <Badge 
                className="mb-8 bg-gradient-to-r from-red-500 to-orange-500 text-white border-2 border-yellow-400 px-8 py-4 text-xl font-black animate-pulse cursor-pointer hover:scale-105 transition-transform shadow-2xl"
                onClick={() => handleTimeSlotClick('mega_badge')}
              >
                🚀 LIVE MASTERCLASS • SEPTEMBER 6 • LAST CHANCE!
              </Badge>
              
              {/* Pulsing Tooth Icon */}
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <img src={toothQuestion} alt="Tooth with Question Mark" className="w-48 h-48 animate-bounce" />
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-black animate-spin">
                    ?
                  </div>
                </div>
              </div>
              
              {/* MEGA Title */}
              <h1 className="text-6xl lg:text-8xl font-black text-white mb-10 leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
                  STOP MISSING
                </span>
                <span className="block text-red-400 animate-bounce delay-300">
                  CANALS FOREVER!
                </span>
              </h1>
              
              {/* Urgent messaging */}
              <div className="max-w-5xl mx-auto mb-10 space-y-6">
                <p className="text-3xl lg:text-4xl text-white font-black mb-6 animate-pulse">
                  🔥 FINAL HOURS: Master Canal Localization Before It's Too Late!
                </p>
                <div className="bg-red-500/20 backdrop-blur border-2 border-red-400 rounded-2xl p-6 animate-pulse">
                  <p className="text-xl text-white font-bold">
                    ⚠️ WARNING: After today, this training won't be available again until 2026!
                  </p>
                </div>
              </div>
              
              {/* MEGA CTA Section */}
              <div className="bg-gradient-to-br from-red-600/30 via-orange-600/30 to-yellow-600/30 backdrop-blur-md rounded-3xl p-10 border-4 border-yellow-400 max-w-3xl mx-auto mb-12 animate-pulse shadow-2xl">
                
                {/* Massive Price Display */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-6xl text-red-400 line-through font-black animate-bounce">€297</div>
                    <div className="text-8xl font-black text-yellow-400 animate-pulse shadow-2xl">€27</div>
                  </div>
                  <div className="text-white bg-red-500 rounded-full px-6 py-3 font-black text-2xl animate-bounce">
                    🚨 SAVE €270 - 91% OFF! 🚨
                  </div>
                </div>
                
                {/* Multiple CTAs */}
                <div className="space-y-4">
                  <Button 
                    variant="cta" 
                    size="xl" 
                    className="w-full text-2xl font-black py-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black border-4 border-red-500 animate-pulse hover:scale-105 transition-all shadow-2xl" 
                    onClick={() => handleCtaClick('mega_cta')}
                  >
                    <Zap className="w-8 h-8 mr-3" />
                    CLAIM YOUR SPOT - LAST HOURS!
                    <ArrowRight className="w-8 h-8 ml-3" />
                  </Button>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg text-white/95">
                    <div className="flex items-center gap-3 justify-center p-4 bg-green-600/80 rounded-xl border-2 border-green-400">
                      <Shield className="w-6 h-6 text-green-200" />
                      <span className="font-black">100% MONEY-BACK</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center p-4 bg-blue-600/80 rounded-xl border-2 border-blue-400 animate-pulse">
                      <Video className="w-6 h-6 text-blue-200" />
                      <span className="font-black">🎥 LIFETIME ACCESS</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center p-4 bg-purple-600/80 rounded-xl border-2 border-purple-400">
                      <Clock className="w-6 h-6 text-purple-200" />
                      <span className="font-black">INSTANT ACCESS</span>
                    </div>
                  </div>
                </div>
                
                {/* Urgency footer */}
                <div className="mt-6 p-4 bg-red-500/80 rounded-xl border-2 border-yellow-400 text-center animate-bounce">
                  <p className="text-white font-black text-xl">
                    ⏰ THIS OFFER EXPIRES IN {Math.floor(timeLeft.hours)}H {timeLeft.minutes}M {timeLeft.seconds}S
                  </p>
                </div>
              </div>
              
              {/* Enhanced Money Back Guarantee */}
              <div className="flex justify-center">
                <div className="animate-pulse hover:scale-105 transition-transform">
                  <MoneyBackGuaranteeBadge onBookClick={() => handleTimeSlotClick('guarantee')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add custom animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </>
  );
};