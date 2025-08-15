import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Timer, Video, Shield, ArrowRight, Zap, MonitorSmartphone, RotateCcw, Target, AlertTriangle, Microscope } from "lucide-react";
import toothQuestion from "/lovable-uploads/tooth-question-optimized.png";
import { MoneyBackGuaranteeBadge } from "@/components/MoneyBackGuaranteeBadge";
import { EditableText } from "@/components/EditableText";

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

// Version A: Exact GitHub Endo-Elevate-Hub Design (NO Urgency Elements)
export const HeroVariantA = ({ onCtaClick, timeLeft, setShowTimeSlots }: HeroVariantAProps) => {
  const isEditing = false; // Editing disabled for production

  return (
    <>
      {/* Hero Section - Completely Redesigned (GitHub Version) */}
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
                onClick={() => {
                  const element = document.getElementById('booking');
                  if (element) {
                    const elementPosition = element.offsetTop;
                    const offsetPosition = elementPosition + 800; // Scroll 800px lower
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                🔥 LIVE MASTERCLASS • SEPTEMBER 6, 2025
              </Badge>
              
              {/* Tooth with Question Mark Icon - Bigger and No Bounce */}
              <div className="flex justify-center mb-8">
                <img src={toothQuestion} alt="Tooth with Question Mark" className="w-40 h-40" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight text-center">
                <EditableText isEditing={isEditing} as="span">CANAL LOCALIZATION</EditableText>
                <EditableText isEditing={isEditing} as="span" className="block text-accent-glow animate-pulse-glow">MADE SIMPLE!</EditableText>
              </h1>
              
              <div className="max-w-4xl mx-auto mb-8 text-center px-4">
                <EditableText isEditing={isEditing} as="p" className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold mb-4">Learn how to never miss a canal again!</EditableText>
                <EditableText isEditing={isEditing} as="p" className="text-base sm:text-lg md:text-xl text-white/90 mb-6">
                  If you're tired of missed canals and constant second‑guessing, join this masterclass to learn step‑by‑step localization methods that will turn your frustration into predictable success!
                </EditableText>
              </div>
              
              {/* Main CTA Section - Enhanced (GitHub Style) */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 max-w-2xl mx-auto mb-12 mx-4">
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-black text-accent-glow">€27</span>
                  </div>
                </div>
                
                <Button variant="cta" size="xl" className="w-full font-bold animate-pulse-glow mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl" style={{ fontSize: 'clamp(18px, 5vw, 35px)' }} onClick={() => {
                  const element = document.getElementById('booking');
                  if (element) {
                    const elementPosition = element.offsetTop;
                    const offsetPosition = elementPosition + 800; // Scroll 800px lower
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}>
                  BOOK NOW
                </Button>
              </div>
              
              {/* Value Proposition Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-12 h-12 text-accent mx-auto mb-3" />
                    <EditableText isEditing={isEditing} as="p" className="font-bold text-lg">Multiple time slots available</EditableText>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Timer className="w-12 h-12 text-accent mx-auto mb-3" />
                    <EditableText isEditing={isEditing} as="p" className="font-bold text-lg">One Hour + Q&amp;A</EditableText>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <MonitorSmartphone className="w-12 h-12 text-accent mx-auto mb-3" />
                    <EditableText isEditing={isEditing} as="p" className="font-bold text-lg">Format: Live on Zoom</EditableText>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <RotateCcw className="w-12 h-12 text-accent mx-auto mb-3" />
                    <EditableText isEditing={isEditing} as="p" className="font-bold text-lg">Replay available</EditableText>
                  </CardContent>
                </Card>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};