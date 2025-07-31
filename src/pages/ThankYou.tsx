import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-bounce-slow">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Thank You for Booking!
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Your spot in the Canal Localization Masterclass is confirmed
            </p>
          </div>

          {/* Confirmation Details */}
          <Card className="mb-8 border-2 border-primary/20 shadow-xl">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                Booking Confirmed
              </CardTitle>
              <CardDescription className="text-base">
                We've sent a confirmation email with all the details
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Date</p>
                    <p className="text-muted-foreground">September 6, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Time</p>
                    <p className="text-muted-foreground">Your selected time slot</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Confirmation Email</p>
                    <p className="text-muted-foreground">Check your inbox for Zoom link and resources</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What's Next */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Check Your Email</p>
                    <p className="text-sm text-muted-foreground">
                      You'll receive a confirmation email with your Zoom meeting link and password
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Save the Date</p>
                    <p className="text-sm text-muted-foreground">
                      Add the masterclass to your calendar - September 6, 2025
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Prepare Your Questions</p>
                    <p className="text-sm text-muted-foreground">
                      Dr. Roitman will answer your questions during the live Q&A session
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="bg-accent/10 rounded-lg p-6 mb-8 border border-accent/20">
            <h3 className="font-bold text-lg mb-3 text-foreground">Remember:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5" />
                <span>You'll get lifetime access to the recording if you can't attend live</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5" />
                <span>CE credits will be provided after completion</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5" />
                <span>100% money-back guarantee if you're not satisfied</span>
              </li>
            </ul>
          </div>

          {/* Contact Support */}
          <Card className="text-center">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Have questions? Need help?
              </p>
              <p className="font-semibold text-foreground mb-6">
                Contact us at: support@learnendo.io
              </p>
              
              <Button 
                onClick={() => navigate('/')}
                className="gap-2"
              >
                Return to Homepage
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;