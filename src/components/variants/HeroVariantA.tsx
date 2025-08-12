import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Timer, Video, Shield, ArrowRight, Zap, MonitorSmartphone, RotateCcw } from "lucide-react";
import toothQuestion from "/lovable-uploads/78edbdfc-906b-4b3f-b44f-5bcedbf2144c.png";
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
  const isEditing = true; // GitHub version has editing enabled

  return (
    <>
      {/* Hero Section - Completely Redesigned (GitHub Version) */}
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
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <Badge 
                className="mb-6 bg-accent text-accent-foreground border-accent px-6 py-3 text-base font-bold animate-pulse-glow cursor-pointer hover:bg-accent/90 transition-colors"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🔥 LIVE MASTERCLASS • SEPTEMBER 6, 2025
              </Badge>
              
              {/* Tooth with Question Mark Icon - Bigger and No Bounce */}
              <div className="flex justify-center mb-8">
                <img src={toothQuestion} alt="Tooth with Question Mark" className="w-40 h-40" />
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
                <EditableText isEditing={isEditing} as="span">CANAL LOCALIZATION</EditableText>
                <EditableText isEditing={isEditing} as="span" className="block text-accent-glow animate-pulse-glow">MADE SIMPLE!</EditableText>
              </h1>
              
              <div className="max-w-4xl mx-auto mb-8">
                <EditableText isEditing={isEditing} as="p" className="text-2xl lg:text-3xl text-white font-bold mb-4">Learn how to never miss a canal again!</EditableText>
                <EditableText isEditing={isEditing} as="p" className="text-xl text-white/90 mb-6">
                  If you're tired of missed canals and constant second‑guessing, join this masterclass to learn step‑by‑step localization methods that will turn your frustration into predictable success!
                </EditableText>
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
              
              {/* Main CTA Section - Enhanced (GitHub Style) */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto mb-8">
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-black text-accent-glow">€27</span>
                  </div>
                </div>
                
                <Button variant="cta" size="xl" className="w-full text-lg font-bold animate-pulse-glow mb-4" onClick={() => document.getElementById('booking')?.scrollIntoView({
                behavior: 'smooth'
              })}>
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
                <MoneyBackGuaranteeBadge />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};