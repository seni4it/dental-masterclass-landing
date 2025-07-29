import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const MoneyBackGuaranteeBadge = () => {
  const handleClick = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative inline-block cursor-pointer" onClick={handleClick}>
      <div className="bg-gradient-to-br from-primary to-primary-glow p-6 rounded-2xl border-4 border-white shadow-lg brand-shadow transform hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
            <Shield className="w-16 h-16 relative z-10 animate-pulse-glow" />
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl font-black leading-tight">
              100% MONEY-BACK
            </div>
            <div className="text-3xl font-black text-accent-glow">
              GUARANTEE
            </div>
            <div className="text-sm font-semibold opacity-90 max-w-52 text-center mx-auto">
              If you're not completely satisfied, get your money back.
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-4 bg-white/20 rounded-full px-4 py-2">
            <CheckCircle className="w-5 h-5 text-accent-glow" />
            <span className="text-sm font-bold">30-DAY GUARANTEE</span>
          </div>
        </div>
      </div>
      
      {/* Bouncing Risk Free Badge - Positioned absolutely */}
      <div className="absolute -top-2 -right-2">
        <Badge className="bg-accent text-accent-foreground font-bold text-xs animate-bounce">
          RISK FREE
        </Badge>
      </div>
      
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl -z-10 animate-pulse"></div>
    </div>
  );
};