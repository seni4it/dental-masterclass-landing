import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import toothLogo from "@/assets/tooth-logo.png";
import drRoitman from "@/assets/dr-roitman.png";
import toothQuestion from "/lovable-uploads/78edbdfc-906b-4b3f-b44f-5bcedbf2144c.png";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, Users, Video, RotateCcw, CheckCircle, Award, Target, AlertTriangle, Microscope, GraduationCap, FileText, Phone, Timer, Shield, TrendingUp, Star, ArrowRight, Play, Zap, MessageCircle, Instagram, Send, X, Check } from "lucide-react";
import { ToothLocationIcon, ToothSettingsIcon, ToothKeyIcon, ToothCareIcon } from "@/components/DentalIcons";
import { MoneyBackGuaranteeBadge } from "@/components/MoneyBackGuaranteeBadge";
import { getVariant } from "@/lib/ab-testing";
import { HeroVariantA } from "@/components/variants/HeroVariantA";
import { HeroVariantB } from "@/components/variants/HeroVariantB";
import { HeroVariantBEnhanced } from "@/components/variants/HeroVariantB-Enhanced";
import { BookingVariantA } from "@/components/variants/BookingVariantA";
import { BookingVariantB } from "@/components/variants/BookingVariantB";
import { useABTest } from "@/hooks/useABTest";

const Index = () => {
  const { variant, trackConversion } = useABTest();
  const [timeLeft, setTimeLeft] = useState({
    days: 25,
    hours: 4,
    minutes: 32,
    seconds: 15
  });
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);
  const [showMoneyBackGuarantee, setShowMoneyBackGuarantee] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showTermsConditions, setShowTermsConditions] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  // Available time slots for September 6, 2025
  const timeSlots = [
    { time: "13:00", label12h: "1:00 PM", timezone: "CEST (UTC+2)", note: "Early afternoon", available: true },
    { time: "20:00", label12h: "8:00 PM", timezone: "CEST (UTC+2)", note: "Evening", available: true },
  ];

  const handleTimeSlotSelect = (time: string) => {
    const calendlyUrl = `https://calendly.com/endoclub/new-meeting-1/2025-09-06T${time}:00+02:00?month=2025-09&date=2025-09-06&variant=B`;
    
    // Track booking event for Variant B time slot selection
    if (window.dataLayer) {
      const bookingEvent = {
        event: 'book_now_B',
        experiment_id: 'dental_masterclass_hero',
        variant_id: 'B',
        button_location: 'time_slot',
        interaction_type: 'time_slot_select',
        calendly_url: calendlyUrl,
        time_slot: time
      };
      window.dataLayer.push(bookingEvent);
      console.log('[DEBUG] dataLayer book_now_B event pushed:', bookingEvent);
    }
    
    window.open(calendlyUrl, '_blank');
    setShowTimeSlots(false);
  };

  // Check for URL parameter to auto-open time slots
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('book') === 'true') {
      setShowTimeSlots(true);
    }
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return {
            ...prev,
            seconds: prev.seconds - 1
          };
        } else if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59
          };
        } else if (prev.hours > 0) {
          return {
            ...prev,
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59
          };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59
          };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);
    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Cookie consent effect
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show cookie consent after 2 seconds
      setTimeout(() => {
        setShowCookieConsent(true);
      }, 2000);
    } else {
      const hasConsent = cookieConsent === 'accepted' || cookieConsent === 'essentials-plus-analytics';
      setCookiesAccepted(hasConsent);
    }
  }, []);

  const handleCookieConsent = (accepted: boolean) => {
    const consentValue = accepted ? 'accepted' : 'declined';
    localStorage.setItem('cookieConsent', consentValue);
    setCookiesAccepted(accepted);
    setShowCookieConsent(false);
    
    // Enable Google Analytics and Meta Pixel if consent is given
    if (accepted && (window as any).enableGoogleAnalytics) {
      (window as any).enableGoogleAnalytics();
    }
    if (accepted && (window as any).enableMetaPixel) {
      (window as any).enableMetaPixel();
    }
  };

  const handleEssentialsConsent = () => {
    localStorage.setItem('cookieConsent', 'essentials-plus-analytics');
    setCookiesAccepted(true);
    setShowCookieConsent(false);
    
    // Enable Google Analytics and Meta Pixel for essentials + analytics
    if ((window as any).enableGoogleAnalytics) {
      (window as any).enableGoogleAnalytics();
    }
    if ((window as any).enableMetaPixel) {
      (window as any).enableMetaPixel();
    }
  };
  
  return <div className="min-h-screen bg-background">
      {/* A/B Testing - Hero Section */}

      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img 
                src="https://d1yei2z3i6k35z.cloudfront.net/11922468/67ec02d73e2cb_459061577_884924966845685_6646581295662297536_n.jpg" 
                alt="LearnEndo.io" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full"
                loading="eager"
              />
              <span className="text-base sm:text-lg font-bold text-foreground">LearnEndo.io</span>
            </div>
            
            {/* Right-aligned Book Now Button */}
            <Button 
              onClick={() => {
                // Track booking event based on variant
                if (window.dataLayer) {
                  const bookingEvent = {
                    event: variant === 'A' ? 'book_now_A' : 'book_now_B',
                    experiment_id: 'dental_masterclass_hero',
                    variant_id: variant,
                    button_location: 'navigation',
                    interaction_type: 'nav_book_now'
                  };
                  window.dataLayer.push(bookingEvent);
                  console.log('[DEBUG] dataLayer booking event pushed:', bookingEvent);
                }

                if (variant === 'A') {
                  // Variant A: Scroll to booking section with 800px offset
                  const element = document.getElementById('booking');
                  if (element) {
                    const elementPosition = element.offsetTop;
                    const offsetPosition = elementPosition + 800;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                } else {
                  // Variant B: Show time slots
                  setShowTimeSlots(true);
                }
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold"
            >
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div className="lg:hidden bg-white border-b border-border shadow-lg sticky top-[60px] z-30">
          <div className="container mx-auto px-3">
            <div className="grid grid-cols-1 gap-1 py-2">
              <button 
                onClick={() => {
                  document.getElementById('about-instructor')?.scrollIntoView({ behavior: 'smooth' });
                  setShowMobileMenu(false);
                }}
                className="text-left text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors py-3 px-3 rounded flex items-center gap-3"
              >
                <GraduationCap className="w-4 h-4 text-primary" />
                About Dr. Roitman
              </button>
              <button 
                onClick={() => {
                  document.getElementById('what-youll-learn')?.scrollIntoView({ behavior: 'smooth' });
                  setShowMobileMenu(false);
                }}
                className="text-left text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors py-3 px-3 rounded flex items-center gap-3"
              >
                <Award className="w-4 h-4 text-primary" />
                What You'll Learn
              </button>
              <button 
                onClick={() => {
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                  setShowMobileMenu(false);
                }}
                className="text-left text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors py-3 px-3 rounded flex items-center gap-3"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                FAQ
              </button>
              <button 
                onClick={() => {
                  setShowContactUs(true);
                  setShowMobileMenu(false);
                }}
                className="text-left text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors py-3 px-3 rounded flex items-center gap-3"
              >
                <Phone className="w-4 h-4 text-primary" />
                Contact Us
              </button>
              <button 
                onClick={() => {
                  setShowTimeSlots(true);
                  setShowMobileMenu(false);
                }}
                className="text-left text-sm font-medium text-primary hover:text-primary/80 hover:bg-primary/10 transition-colors py-3 px-3 rounded font-semibold flex items-center gap-3"
              >
                <Calendar className="w-4 h-4 text-primary" />
                Book Your Spot
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Render appropriate variant based on A/B testing */}
      {variant === 'A' ? (
        <HeroVariantA 
          onCtaClick={() => {
            trackConversion('variant_a_cta_click');
            setShowTimeSlots(true);
          }}
          timeLeft={timeLeft}
          setShowTimeSlots={setShowTimeSlots}
        />
      ) : (
        <HeroVariantB 
          onCtaClick={() => {
            trackConversion('variant_b_cta_click');
            setShowTimeSlots(true);
          }}
          timeLeft={timeLeft}
          setShowTimeSlots={setShowTimeSlots}
        />
      )}

      {/* What You Will Learn Section - Separate White Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - Learning Points */}
              <div className="space-y-8">
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                    What you will learn in this <span className="text-primary">Masterclass</span>
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {/* Learning Point 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white stroke-[3]" />
                    </div>
                    <div>
                      <p className="text-gray-900 leading-relaxed text-xl">
                        How to locate every canal in any tooth, including the MB2
                      </p>
                    </div>
                  </div>
                  
                  {/* Learning Point 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white stroke-[3]" />
                    </div>
                    <div>
                      <p className="text-gray-900 leading-relaxed text-xl">
                        Early warning signs of perforations and practical ways to prevent them
                      </p>
                    </div>
                  </div>
                  
                  {/* Learning Point 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white stroke-[3]" />
                    </div>
                    <div>
                      <p className="text-gray-900 leading-relaxed text-xl">
                        How to deal with calcifications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="flex justify-center lg:justify-end">
                <img 
                  src="https://d1yei2z3i6k35z.cloudfront.net/11922468/687672e4434d1_version4-min.png" 
                  alt="Endodontic procedures and techniques" 
                  className="w-full max-w-md lg:w-96 h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* A/B Testing: Different Booking Sections */}
      {variant === 'A' ? (
        <BookingVariantA />
      ) : (
        <BookingVariantB 
          timeLeft={timeLeft}
          setShowTimeSlots={setShowTimeSlots}
          showTimeSlots={showTimeSlots}
          handleTimeSlotSelect={handleTimeSlotSelect}
        />
      )}

      {/* FAQ Section - Enhanced */}
      <section id="faq" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about the masterclass
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="experience" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg">
                  <span>What level of experience is required for this masterclass?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  <span>This masterclass is designed for dentists of all experience levels. Whether you're a recent graduate or an experienced practitioner, you'll learn valuable techniques. The content is structured to be accessible for beginners while providing advanced insights for experienced dentists.</span>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="recording" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg">
                  <span>What if I can't attend the live session?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  <span>No problem! Every session is recorded and you'll have lifetime access to the recording. You can watch at your own pace and refer back to the material whenever needed. The recording will be available within 24 hours of the live session.</span>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="equipment" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg">
                  <span>What equipment or materials do I need?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  <span>You just need a computer, tablet, or smartphone with internet access to join the Zoom session. We'll provide downloadable resources including procedure checklists, reference guides, and step-by-step protocols that you can use in your practice.</span>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="questions" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg">
                  <span>Can I ask questions during the masterclass?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  <span>Absolutely! The last 30 minutes are dedicated to Q&A where Dr. Roitman personally answers your questions. You can submit questions throughout the presentation via chat, and there will be opportunities for live discussion.</span>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="guarantee" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg">
                  <span>Is there a money-back guarantee?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  <span>Yes! We offer a 30-Day Fair-Use Money-Back Guarantee. If, after active participation and a good-faith attempt to apply at least one taught technique, you believe the programme failed to deliver its stated learning objectives, you may request a full refund within 30 days. Simply provide 3-5 sentences of constructive feedback about why the masterclass fell short for you. We're confident you'll find tremendous value in Dr. Roitman's proven techniques. *Terms and conditions apply.</span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            {/* Ask a Question Section */}
            <div className="mt-16 text-center">
              <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Can't Find an Answer?</h3>
                  <p className="text-muted-foreground text-lg">Send us a message and we'll get back to you quickly!</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                  <Button 
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 ease-in-out hover:scale-105"
                    onClick={() => {
                      const form = document.getElementById('contact-form');
                      form?.classList.toggle('hidden');
                    }}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                  
                  <Button 
                    className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 ease-in-out hover:scale-105"
                    onClick={() => window.open('https://t.me/drroitman', '_blank')}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Telegram
                  </Button>
                  
                  <Button 
                    className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 ease-in-out hover:scale-105"
                    onClick={() => window.open('https://www.instagram.com/dr.roitman/', '_blank')}
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                </div>
                
                {/* Contact Form Dropdown */}
                <div id="contact-form" className="hidden mt-6 max-w-md mx-auto">
                  <Card className="p-6 bg-white border border-border">
                    <h4 className="text-lg font-bold text-foreground mb-4">Send us a message</h4>
                    <form className="space-y-4" onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target as HTMLFormElement);
                      const name = formData.get('name');
                      const email = formData.get('email');
                      const message = formData.get('message');
                      
                      // Create mailto link with form data
                      const subject = encodeURIComponent('Question about Canal Localization Masterclass');
                      const body = encodeURIComponent(`Hi Dr. Roitman,

Name: ${name}
Email: ${email}

Message:
${message}

Best regards,
${name}`);
                      
                      window.location.href = `mailto:DRsroitman@gmail.com?subject=${subject}&body=${body}`;
                    }}>
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <textarea
                          name="message"
                          placeholder="Your question..."
                          required
                          rows={4}
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        ></textarea>
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                          Send Message
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => document.getElementById('contact-form')?.classList.add('hidden')}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </Card>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  We typically respond within 2-4 hours during business hours
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy Modal */}
      {showCookiePolicy && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowCookiePolicy(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Cookie Policy</h2>
              <button 
                onClick={() => setShowCookiePolicy(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">What Are Cookies?</h3>
                <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and improving our services for dental professionals.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Types of Cookies We Use</h3>
                
                <div className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">1. Essential Cookies (Always Active)</h4>
                    <p className="text-sm">These cookies are necessary for the website to function properly and cannot be disabled.</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside ml-4">
                      <li>Session management and security</li>
                      <li>Form submissions and contact forms</li>
                      <li>Calendar booking functionality</li>
                      <li>Cookie consent preferences</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">2. Analytics Cookies</h4>
                    <p className="text-sm">These help us understand how visitors interact with our website.</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside ml-4">
                      <li><strong>Google Analytics (G-GWBDNMRWFS):</strong> Tracks page views, user behavior, traffic sources</li>
                      <li><strong>Google Tag Manager:</strong> Manages tracking codes and analytics</li>
                      <li><strong>Performance monitoring:</strong> Website speed and technical performance</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">3. Marketing & Advertising Cookies</h4>
                    <p className="text-sm">These cookies are used to deliver relevant advertisements and track advertising effectiveness.</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside ml-4">
                      <li><strong>Facebook Pixel:</strong> Tracks conversions and optimizes ad targeting (when implemented)</li>
                      <li><strong>LinkedIn Insight Tag:</strong> For professional network advertising (when implemented)</li>
                      <li><strong>Google Ads:</strong> Conversion tracking and remarketing (when implemented)</li>
                      <li><strong>Instagram Pixel:</strong> Social media advertising optimization (when implemented)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">4. Functional Cookies</h4>
                    <p className="text-sm">These cookies enhance your experience by remembering your preferences.</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside ml-4">
                      <li>Language and region preferences</li>
                      <li>Video playback settings</li>
                      <li>Form auto-fill information</li>
                      <li>Chat widget preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Third-Party Services</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground">Google Services</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                      <li><strong>Google Analytics:</strong> Website traffic analysis and user behavior insights</li>
                      <li><strong>Google Tag Manager:</strong> Efficient management of tracking codes</li>
                      <li><strong>Google Fonts:</strong> Web font loading and display optimization</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">Scheduling & Communication</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                      <li><strong>Calendly:</strong> Appointment booking system with session cookies</li>
                      <li><strong>Zoom:</strong> Webinar and masterclass integration (when applicable)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">Social Media & Marketing</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                      <li><strong>Facebook/Meta:</strong> Social media integration and advertising</li>
                      <li><strong>Instagram:</strong> Content embedding and social features</li>
                      <li><strong>LinkedIn:</strong> Professional networking and B2B advertising</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Cookie Consent Management</h3>
                <p>We respect your privacy choices. You can manage your cookie preferences at any time:</p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li><strong>Accept All:</strong> Allow all cookies for the best experience</li>
                  <li><strong>Essential Only:</strong> Only necessary cookies for basic functionality</li>
                  <li><strong>Custom Settings:</strong> Choose which types of cookies to allow</li>
                </ul>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm"><strong>Note:</strong> Declining analytics and marketing cookies will not affect your ability to attend the masterclass or access course materials, but may limit our ability to provide personalized recommendations.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Browser Cookie Settings</h3>
                <p>You can also control cookies through your browser settings:</p>
                <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                  <li><strong>Chrome:</strong> Settings {'>'} Privacy and Security {'>'} Cookies</li>
                  <li><strong>Firefox:</strong> Preferences {'>'} Privacy & Security {'>'} Cookies</li>
                  <li><strong>Safari:</strong> Preferences {'>'} Privacy {'>'} Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings {'>'} Site Permissions {'>'} Cookies</li>
                </ul>
                <p className="mt-2 text-sm text-amber-600">⚠️ Disabling essential cookies may prevent website functionality, including masterclass registration and contact forms.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Data Retention</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Essential Cookies:</strong> Session-based or up to 1 year</li>
                  <li><strong>Analytics Cookies:</strong> Up to 26 months (Google Analytics default)</li>
                  <li><strong>Marketing Cookies:</strong> 30-180 days depending on the service</li>
                  <li><strong>Functional Cookies:</strong> Up to 1 year for preferences</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Your Rights (GDPR Compliance)</h3>
                <p>If you are in the European Economic Area, you have the right to:</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Erase your data (right to be forgotten)</li>
                  <li>Restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Updates to This Policy</h3>
                <p>We may update this Cookie Policy to reflect changes in our practices or for legal requirements. We will notify users of significant changes by updating the "Last Updated" date and, where appropriate, providing additional notice on our website.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Contact Information</h3>
                <p>If you have questions about our cookie policy or wish to exercise your rights, please contact us through our official channels. For specific privacy-related inquiries, you can also reach out via our contact form.</p>
              </div>
              
              <div className="text-sm text-muted-foreground border-t border-border pt-4">
                <p><strong>Last updated:</strong> January 2025</p>
                <p><strong>Effective date:</strong> January 2025</p>
                <p>This policy applies to LearnEndo.io and all associated dental education services provided by Dr. Roitman.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Money-Back Guarantee Modal */}
      {showMoneyBackGuarantee && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowMoneyBackGuarantee(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">30‑Day Fair‑Use Money‑Back Guarantee</h2>
              <button 
                onClick={() => setShowMoneyBackGuarantee(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6 text-muted-foreground prose prose-sm max-w-none">
              <p className="text-sm italic text-muted-foreground">Effective 29 July 2025</p>
              
              <p>We believe—based on years of live demonstrations—that Dr Roitman's <strong>Canal Localization Masterclass</strong> delivers measurable clinical value. If, after genuine participation and application, you feel the programme has not met its stated learning objectives, you may request a refund under the terms below.</p>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">1. Scope of the Guarantee</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border-b border-border p-3 text-left font-semibold text-foreground">Item</th>
                      <th className="border-b border-border p-3 text-left font-semibold text-foreground">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-border p-3 font-semibold">Coverage</td>
                      <td className="border-b border-border p-3">100% of the masterclass fee (€27 Early‑Bird or €57 standard).</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border p-3 font-semibold">Period</td>
                      <td className="border-b border-border p-3">30 calendar days from the purchase date ("Guarantee Period").</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border p-3 font-semibold">Format</td>
                      <td className="border-b border-border p-3">Applies equally to live attendance and recorded replay access.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border p-3 font-semibold">Legal Framework</td>
                      <td className="border-b border-border p-3">This policy complements—and does not limit—your statutory rights under the EU Consumer Rights Directive and other applicable consumer‑protection laws.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">2. Eligibility Requirements</h3>
              
              <h4 className="font-semibold text-foreground">1. Active Engagement</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Attend the live session <strong>or</strong> watch the full recording within the Guarantee Period.</li>
                <li>Make a reasonable attempt to implement at least one of the techniques taught (e.g., in a clinical simulation or patient case).</li>
              </ul>
              
              <h4 className="font-semibold text-foreground">2. Feedback for Improvement</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>When requesting a refund, provide concise feedback explaining <strong>why</strong> the masterclass fell short for you. Your insights help us refine the curriculum and guard against misuse.</li>
              </ul>
              
              <h4 className="font-semibold text-foreground">3. Timely Request</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Submit your request <strong>within</strong> the 30‑day window. Requests received after that date are not eligible.</li>
              </ul>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">3. How to Request a Refund</h3>
              <p>Contact us through <strong>one</strong> of the channels below and include:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Your full name</li>
                <li>The e‑mail address you used for registration</li>
                <li>Order ID or transaction reference</li>
                <li>Your feedback (3–5 sentences is sufficient)</li>
              </ul>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border-b border-border p-3 text-left font-semibold text-foreground">Channel</th>
                      <th className="border-b border-border p-3 text-left font-semibold text-foreground">How to reach us</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-border p-3 font-semibold">Website</td>
                      <td className="border-b border-border p-3">Use the <strong>"Contact Us"</strong> form linked at the bottom of our website.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border p-3 font-semibold">Instagram</td>
                      <td className="border-b border-border p-3">Send us a direct message.</td>
                    </tr>
                    <tr>
                      <td className="border-border p-3 font-semibold">Email</td>
                      <td className="border-border p-3">Write to the support e‑mail address published on our website.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">4. Review & Decision Process</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Acknowledgement</strong> – We'll confirm receipt within <strong>24 hours</strong> (business days).</li>
                <li><strong>Evaluation</strong> – A clinician from our faculty will review your feedback; we may request a brief video or phone conversation (max 15 minutes) to clarify details.</li>
                <li><strong>Outcome</strong> – You will receive a written decision within <strong>5 business days</strong> of your complete submission.
                  <em className="block mt-1 ml-4">If your claim is validated, we will authorise a full refund.</em>
                </li>
              </ol>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">5. Refund Execution</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Approved refunds are issued to the original payment method within <strong>3–5 business days</strong> of approval.</li>
                <li>A confirmation e‑mail will be sent once funds are released.</li>
              </ul>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">6. Anti‑Abuse Clause</h3>
              <p>We reserve the right to refuse refunds in cases of:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Evident misuse</strong> (e.g., multiple refund requests across successive cohorts).</li>
                <li><strong>Failure to engage</strong> with the content (no attendance or view‑through data).</li>
                <li><strong>Chargebacks</strong> initiated before following the process above.</li>
              </ul>
              <p>All decisions are made in good faith and in accordance with EU consumer‑protection standards.</p>
              
              <hr className="my-6" />
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Questions?</h4>
                <p>Please reach out—our goal is to ensure you receive the educational value you expect <strong>and</strong> to learn from your constructive feedback.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Me Modal */}
      {showAboutMe && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAboutMe(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">About Dr. Roitman</h2>
              <button 
                onClick={() => setShowAboutMe(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3">
                  <img 
                    src="https://d1yei2z3i6k35z.cloudfront.net/11922468/67ec02d73e2cb_459061577_884924966845685_6646581295662297536_n.jpg" 
                    alt="Dr. Roitman" 
                    className="w-64 h-64 rounded-2xl mx-auto brand-shadow object-cover"
                  />
                </div>
                <div className="lg:w-2/3 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">Dr. Roitman, DDS</h3>
                    <p className="text-lg text-primary font-semibold mb-4">Endodontist • Head of Endodontic Department • International Speaker • Inventor</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Dr. Roitman is an endodontist with 10 years of experience in the field. 
                      He has mastered proven canal localization techniques and has trained dental 
                      professionals in Italy and online.
                    </p>
                  </div>
                </div>
              </div>
              
              
              
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                <h4 className="text-xl font-bold text-foreground mb-4">Philosophy & Mission</h4>
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  "My mission is to eliminate the fear and uncertainty that dentists face when performing endodontic procedures. 
                  Through systematic education and proven techniques, every dentist can achieve predictable success in canal localization."
                </blockquote>
                <p className="text-muted-foreground">
                  Dr. Roitman believes that with the right knowledge and techniques, any dentist can master endodontics. 
                  His teaching philosophy focuses on practical, immediately applicable methods that build confidence and improve patient outcomes.
                </p>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-bold text-foreground mb-4">Connect with Dr. Roitman</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => window.open('https://t.me/drroitman', '_blank')}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Telegram
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    onClick={() => window.open('https://www.instagram.com/dr.roitman/', '_blank')}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.location.href = 'mailto:DRsroitman@gmail.com'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Email Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms and Conditions Modal */}
      {showTermsConditions && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowTermsConditions(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Canal Localization Masterclass - Terms & Conditions</h2>
              <button 
                onClick={() => setShowTermsConditions(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6 text-muted-foreground prose prose-sm max-w-none">
              <p className="text-sm italic text-muted-foreground">Effective 29 July 2025</p>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">1  |  Acceptance of Terms</h3>
              <p>By <strong>registering, purchasing, subscribing to, or attending</strong> the Canal Localization Masterclass ("Course"), you acknowledge that you have read, understood, and <strong>agree to be bound by these Terms & Conditions</strong>. If you disagree with any part of the Terms, <strong>do not proceed with registration or attendance</strong>.</p>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">2  |  Registration & Payment</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Confirmation</strong> – Your seat is secured only after full payment is received.</li>
                <li><strong>Pricing</strong> – Early‑Bird rates are limited‑time offers and subject to seat availability. All fees are quoted in euros (€); <strong>VAT or other applicable taxes may be added at checkout unless expressly stated otherwise</strong>.</li>
                <li><strong>Secure Processing</strong> – Payments are handled exclusively by authorised providers; we do not store card details on our servers.</li>
              </ol>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">3  |  Course Content & Access</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Live, instructor‑led masterclass with interactive Q&A.</li>
                <li><strong>Recording automatically delivered</strong> to all registrants; lifetime streaming access included.</li>
                <li>Downloadable resources (e.g., slides, checklists).</li>
                <li>Content is licensed for your personal professional use only; redistribution is prohibited (see Section 4).</li>
              </ul>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">4  |  Intellectual Property</h3>
              <p>All videos, images, hand‑outs, software, and techniques are the intellectual property of Dr Roitman and LearnEndo.io. Any reproduction, distribution, public display, or commercial exploitation without <strong>prior written consent</strong> is strictly forbidden.</p>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">5  |  Professional Use & Disclaimer</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Materials are provided for educational purposes; local laws and professional guidelines take precedence.</li>
                <li>You remain solely responsible for patient outcomes and clinical decisions.</li>
                <li>No representation is made that specific clinical results are guaranteed.</li>
              </ul>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">6  |  Anti‑Abuse Clause</h3>
              <p>We reserve the right to refuse refunds in cases of:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Evident misuse</strong> (e.g., multiple refund requests across successive cohorts).</li>
                <li><strong>Failure to engage</strong> with the content (no attendance or view‑through data).</li>
                <li><strong>Chargebacks</strong> initiated before following the refund process described in Section 7.</li>
              </ul>
              <p>All decisions are made in good faith and in accordance with EU consumer‑protection standards.</p>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">7  |  30‑Day <strong>Fair‑Use Money‑Back Guarantee</strong></h3>
              <p>We stand behind the Course. If, after <strong>active participation</strong> and a <strong>good‑faith attempt</strong> to apply at least one taught technique, you believe the programme failed to deliver its stated learning objectives, you may request a full refund under the conditions below. <em>(For circumstances that may void eligibility, see Section 6 Anti‑Abuse Clause.)</em></p>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border-b border-border p-3 text-left font-semibold text-foreground">Item</th>
                      <th className="border-b border-border p-3 text-left font-semibold text-foreground">Guarantee Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-border p-3 font-semibold">Coverage</td>
                      <td className="border-b border-border p-3">100% of the Course fee (€27 Early‑Bird / €57 standard).</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border p-3 font-semibold">Window</td>
                      <td className="border-b border-border p-3">30 calendar days from purchase date.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border p-3 font-semibold">Process</td>
                      <td className="border-b border-border p-3">Submit your request via the <strong>Contact Us</strong> form (bottom of our website) <em>or</em> direct message on our official Instagram <em>or</em> the email address listed on the website. Include your name, registration email, order ID, and 3–5 sentences of constructive feedback.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border p-3 font-semibold">Review</td>
                      <td className="border-b border-border p-3">We acknowledge within 24 business hours and issue a written decision within 5 business days.</td>
                    </tr>
                    <tr>
                      <td className="border-border p-3 font-semibold">Payment of Refund</td>
                      <td className="border-border p-3">Approved refunds are returned to the original payment method within 3–5 business days of approval.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p>This guarantee supplements—without limiting—your statutory rights under EU consumer‑protection law.</p>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">8  |  Cancellation, Rescheduling & Force Majeure</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border-b border-border p-3 text-left font-semibold text-foreground">Scenario</th>
                      <th className="border-b border-border p-3 text-left font-semibold text-foreground">Policy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-border p-3 font-semibold">Learner‑initiated cancellation</td>
                      <td className="border-b border-border p-3">You may cancel <strong>no later than 24 hours before</strong> the scheduled start time of the live session ("Cancellation Window"). Cancellations received after this window are treated as attended enrolments: you will still receive the recording and all materials, but <strong>no refund is issued for late cancellations</strong>. (You may still claim under the Fair‑Use Money‑Back Guarantee in Section 7 if you meet its conditions and are not excluded under Section 6.)</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border p-3 font-semibold">Rescheduling or force majeure</td>
                      <td className="border-b border-border p-3">We may reschedule or modify delivery due to events beyond our control (e.g., platform outages, instructor illness, natural disasters). If rescheduling is not feasible, a full refund will be provided.</td>
                    </tr>
                    <tr>
                      <td className="border-border p-3 font-semibold">Technical failures on our side</td>
                      <td className="border-border p-3">Documented technical issues that prevent your access will be remedied promptly or refunded in full.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">9  |  Privacy & Data Protection</h3>
              <p>We collect only the data necessary for course delivery, certification, and compliance. Data are never sold. Third‑party processors (e.g., payment gateways, scheduling tools) receive only the information required to perform their contracted services, subject to EU GDPR.</p>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">10  |  Technical Requirements</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Stable internet (≥ 3 Mbps down / 1 Mbps up) and a modern browser (Chrome, Edge, Safari, Firefox) are required.</li>
                <li>If technical problems prevent live attendance, you will still receive the full recording and support.</li>
              </ul>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">11  |  Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, LearnEndo.io and Dr Roitman shall not be liable for indirect, incidental, or consequential damages arising from Course participation. Aggregate liability is capped at the amount you paid for the Course.</p>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold text-foreground">12  |  Contact</h3>
              <p>Questions about these Terms or the Course? Please use the <strong>Contact Us</strong> form located at the bottom of our website or message us through our verified social media channels. We aim to respond within one business day.</p>
              
              <hr className="my-6" />
              
              <div className="text-sm text-muted-foreground border-t border-border pt-4 italic">
                <p><em>These Terms & Conditions are governed by, and construed in accordance with, the laws of Italy and the European Union.</em></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Us Modal */}
      {showContactUs && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowContactUs(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <button 
                onClick={() => setShowContactUs(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-8">
              {/* Header */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch with Dr. Roitman</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Have questions about the masterclass, endodontic techniques, or need professional guidance? 
                  We're here to help you succeed in your dental practice.
                </p>
              </div>

              {/* Quick Contact Options */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center hover:scale-105 transition-transform duration-300 border-primary/20">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Send className="w-8 h-8 text-blue-500" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">Telegram</h4>
                    <p className="text-muted-foreground text-sm">Fast response, typically within 2-4 hours</p>
                  </div>
                  <Button 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => window.open('https://t.me/drroitman', '_blank')}
                  >
                    Message on Telegram
                  </Button>
                </Card>

                <Card className="p-6 text-center hover:scale-105 transition-transform duration-300 border-primary/20">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Instagram className="w-8 h-8 text-purple-500" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">Instagram</h4>
                    <p className="text-muted-foreground text-sm">Follow for tips and direct messaging</p>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    onClick={() => window.open('https://www.instagram.com/dr.roitman/', '_blank')}
                  >
                    Follow & Message
                  </Button>
                </Card>

                <Card className="p-6 text-center hover:scale-105 transition-transform duration-300 border-primary/20">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">Email Support</h4>
                    <p className="text-muted-foreground text-sm">Detailed inquiries and formal communication</p>
                  </div>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => {
                      const form = document.getElementById('contact-form-main');
                      form?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Send Email
                  </Button>
                </Card>
              </div>

              {/* Main Contact Form */}
              <div id="contact-form-main" className="max-w-2xl mx-auto">
                <Card className="p-8 border border-primary/20">
                  <h4 className="text-2xl font-bold text-foreground mb-6 text-center">Send Us a Message</h4>
                  <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const subject = formData.get('subject');
                    const message = formData.get('message');
                    
                    // Create mailto link with form data
                    const emailSubject = encodeURIComponent(`${subject} - Canal Localization Masterclass Inquiry`);
                    const body = encodeURIComponent(`Hi Dr. Roitman,

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Best regards,
${name}`);
                    
                    window.location.href = `mailto:DRsroitman@gmail.com?subject=${emailSubject}&body=${body}`;
                  }}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Dr. John Smith"
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                      <select
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      >
                        <option value="">Select a topic...</option>
                        <option value="Masterclass Question">Masterclass Question</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Refund Request">Refund Request</option>
                        <option value="Endodontic Technique Question">Endodontic Technique Question</option>
                        <option value="Partnership Inquiry">Partnership Inquiry</option>
                        <option value="Media Interview">Media Interview</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                      <textarea
                        name="message"
                        placeholder="Please describe your question or inquiry in detail..."
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                      ></textarea>
                    </div>
                    
                    <div className="text-center">
                      <Button type="submit" size="lg" className="px-8 py-3 text-lg">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                </Card>
              </div>

              {/* Response Time Information */}
              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <h4 className="text-lg font-bold text-foreground mb-3">Response Times</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                  <div>
                    <strong className="text-foreground">Telegram:</strong> 2-4 hours
                  </div>
                  <div>
                    <strong className="text-foreground">Instagram:</strong> 4-8 hours
                  </div>
                  <div>
                    <strong className="text-foreground">Email:</strong> 24-48 hours
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  For urgent technical issues during the masterclass, please use Telegram for fastest response.
                </p>
              </div>

              {/* Office Hours */}
              <div className="text-center text-muted-foreground">
                <h4 className="text-lg font-bold text-foreground mb-3">Office Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM (CET)</p>
                <p>Weekend: Limited availability for urgent matters</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Consent Popup */}
      {showCookieConsent && (
        <div className="fixed bottom-4 right-4 bg-white border border-border shadow-lg rounded-lg z-50 p-4 max-w-sm">
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                🍪
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">Cookie Settings</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We use cookies to improve your experience and analyze usage patterns to help dental professionals like you.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button 
                onClick={() => handleCookieConsent(true)}
                className="w-full text-xs bg-primary hover:bg-primary/90"
                size="sm"
              >
                Accept All
              </Button>
              
              <Button 
                onClick={handleEssentialsConsent}
                variant="outline"
                className="w-full text-xs"
                size="sm"
              >
                Choose Only Essentials
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={() => setShowCookiePolicy(true)}
                className="w-full text-xs mt-2"
                size="sm"
              >
                View Cookie Policy
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Time Slots Modal */}
      {showTimeSlots && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowTimeSlots(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between rounded-t-lg">
              <h2 className="text-xl font-bold text-foreground">Canal Localization Masterclass</h2>
              <button 
                onClick={() => setShowTimeSlots(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">September 6, 2025</h3>
                <p className="text-sm text-muted-foreground">Select your preferred time slot</p>
              </div>
              
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-2 mb-3 p-3 bg-muted/30 rounded-lg text-xs font-semibold text-muted-foreground">
                <div>Time (24h)</div>
                <div>Time (12h)</div>
                <div>Time Zone</div>
                <div>Note</div>
              </div>
              
              {/* Time Slot Rows */}
              <div className="space-y-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => handleTimeSlotSelect(slot.time)}
                    disabled={!slot.available}
                    className={`w-full grid grid-cols-4 gap-2 p-3 rounded-lg border text-sm transition-colors text-left ${
                      slot.available 
                        ? 'border-primary bg-primary/5 hover:bg-primary/10 hover:border-primary/80 hover:shadow-sm' 
                        : 'border-muted bg-muted text-muted-foreground cursor-not-allowed'
                    }`}
                  >
                    <div className="font-medium flex items-center gap-2">
                      <span className="inline-block w-4 h-3 rounded-sm overflow-hidden border border-gray-300">
                        <div className="w-full h-full flex">
                          <div className="w-1/3 bg-green-600"></div>
                          <div className="w-1/3 bg-white"></div>
                          <div className="w-1/3 bg-red-600"></div>
                        </div>
                      </span>
                      {slot.time}
                    </div>
                    <div className="font-medium">{slot.label12h}</div>
                    <div className="text-muted-foreground">{slot.timezone}</div>
                    <div className="text-muted-foreground">{slot.note}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img src="https://d1yei2z3i6k35z.cloudfront.net/11922468/67ec02d73e2cb_459061577_884924966845685_6646581295662297536_n.jpg" alt="LearnEndo.io Logo" className="w-12 h-12 rounded-full" />
                <span className="text-2xl font-bold text-foreground">LearnEndo.io</span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                <button onClick={() => setShowMoneyBackGuarantee(true)} className="hover:text-primary transition-colors">
                  <span>Money-Back Guarantee</span>
                </button>
                <span>•</span>
                <button onClick={() => setShowCookiePolicy(true)} className="hover:text-primary transition-colors">
                  <span>Cookie Policy</span>
                </button>
                <span>•</span>
                <button onClick={() => setShowTermsConditions(true)} className="hover:text-primary transition-colors">
                  <span>Terms and Conditions</span>
                </button>
                <span>•</span>
                <button onClick={() => setShowAboutMe(true)} className="hover:text-primary transition-colors">
                  <span>About Dr. Roitman</span>
                </button>
                <span>•</span>
                <button onClick={() => setShowContactUs(true)} className="hover:text-primary transition-colors">
                  <span>Contact Us</span>
                </button>
              </div>
              
              <div className="text-center text-muted-foreground">
                <p className="mb-2">© 2025 LearnEndo.io. All rights reserved.</p>
                <p className="text-sm">Transforming dental education worldwide</p>
              </div>
              
              {/* Educational Disclaimer for Meta Pixel */}
              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
                  <strong>Educational Disclaimer:</strong> This website provides professional dental education and training content exclusively for licensed dental professionals. 
                  No patient data is collected or processed. All content is for educational purposes only and does not constitute medical advice. 
                  This is a professional development platform for continuing dental education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* A/B Testing Controls (Development/Debug Only) */}
    </div>;
};

export default Index;