import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Video, Gift, Mail, Star, ArrowRight, Home } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  // Get window dimensions for confetti
  useEffect(() => {
    const detectSize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', detectSize);
    return () => window.removeEventListener('resize', detectSize);
  }, []);

  // Stop confetti after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={400}
          gravity={0.3}
          colors={['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--secondary))', '#ffffff', '#ffd700']}
        />
      )}

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Success Icon with Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-primary text-primary-foreground p-8 rounded-full animate-scale-in">
                <CheckCircle className="w-16 h-16" />
              </div>
            </div>
          </div>

          {/* Main Success Message */}
          <div className="mb-12 animate-fade-in">
            <Badge className="mb-6 bg-accent text-accent-foreground px-6 py-3 text-lg font-bold animate-pulse">
              🎉 REGISTRATION CONFIRMED!
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
              <span className="text-primary">Congratulations!</span>
              <br />
              <span>You're All Set!</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your spot in the <strong className="text-primary">Canal Localization Masterclass</strong> has been secured. 
              Get ready to master endodontics like never before!
            </p>
          </div>

          {/* What Happens Next Section */}
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20 mb-12 animate-slide-up">
            <CardContent className="p-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
                🚀 What Happens Next?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">1. Check Your Email</h3>
                  <p className="text-muted-foreground text-sm">
                    Detailed joining instructions sent to your inbox within 5 minutes
                  </p>
                </div>
                
                <div className="text-center p-6 bg-accent/5 rounded-xl border border-accent/20">
                  <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">2. Mark Your Calendar</h3>
                  <p className="text-muted-foreground text-sm">
                    September 6, 2025 - Don't miss this game-changing session
                  </p>
                </div>
                
                <div className="text-center p-6 bg-secondary/5 rounded-xl border border-secondary/20">
                  <Video className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">3. Join the Masterclass</h3>
                  <p className="text-muted-foreground text-sm">
                    Live session + lifetime access to HD recordings
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bonuses Reminder */}
          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30 mb-12 animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Gift className="w-8 h-8 text-accent" />
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Your Exclusive Bonuses
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg border border-accent/20">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-bold">HD Recording Access</h3>
                    <p className="text-muted-foreground text-sm">Lifetime access to the full masterclass</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg border border-primary/20">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-bold">100% Money-Back Guarantee</h3>
                    <p className="text-muted-foreground text-sm">Risk-free learning experience</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Proof */}
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 text-accent fill-current" />
              <Star className="w-6 h-6 text-accent fill-current" />
              <Star className="w-6 h-6 text-accent fill-current" />
              <Star className="w-6 h-6 text-accent fill-current" />
              <Star className="w-6 h-6 text-accent fill-current" />
            </div>
            <p className="text-lg text-muted-foreground">
              "This masterclass completely transformed my endodontic practice. I haven't missed a canal since!"
            </p>
            <p className="text-sm text-muted-foreground mt-2 font-semibold">
              - Dr. Sarah Chen, Previous Participant
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="brand" 
              size="lg" 
              onClick={() => navigate('/')}
              className="animate-pulse-glow"
            >
              <Home className="w-5 h-5 mr-2" />
              Return to Homepage
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Final Message */}
          <div className="mt-16 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20 animate-fade-in">
            <h3 className="text-xl font-bold text-foreground mb-3">
              🦷 Welcome to the Canal Masters Community!
            </h3>
            <p className="text-muted-foreground">
              You've just taken the first step towards endodontic mastery. 
              Get ready to revolutionize your practice and boost your confidence!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;