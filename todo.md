# GA4 + GTM Integration Tasks

## Phase 1: Analysis & Preparation ✅ COMPLETE
- [x] 1.1 Examine current A/B testing implementation in `src/lib/ab-testing.ts`
- [x] 1.2 Review current Calendly integration in `src/components/CalendlyWidget.tsx`
- [x] 1.3 Check current variant components `BookingVariantA.tsx` and `BookingVariantB.tsx`
- [x] 1.4 Examine thank-you page implementation in `src/pages/ThankYou.tsx`
- [x] 1.5 Review A/B test initialization in `public/ab-init.js`

## Phase 2: GTM Container Setup ✅ COMPLETE
- [x] 2.1 Add GTM container `GTM-K3WSZR7` script to `index.html` head section
- [x] 2.2 Add GTM noscript fallback to `index.html` body section
- [x] 2.3 Test GTM container loads correctly in browser dev tools

## Phase 3: Data Layer Implementation ✅ COMPLETE
- [x] 3.1 Add dataLayer initialization to `index.html` before GTM script
- [x] 3.2 Modify A/B testing code to push variant info to dataLayer on page load
- [x] 3.3 Add dataLayer push for pageview events with variant (pageview_A/pageview_B)
- [x] 3.4 Test Phase 3 with debug logging - VERIFIED WORKING

## Phase 4: Calendly Click Tracking ✅ COMPLETE
- [x] 4.1 Modify `BookingVariantA.tsx` to add variant parameter to Calendly URL
- [x] 4.2 Modify `BookingVariantB.tsx` to add variant parameter to Calendly URL  
- [x] 4.3 Add dataLayer push for click events when Calendly booking starts (click_A/click_B)
- [x] 4.4 Test click tracking fires correctly for both variants

## Phase 5: Conversion Tracking ✅ COMPLETE
- [x] 5.1 Modify `ThankYou.tsx` to read variant from URL parameters
- [x] 5.2 Add dataLayer push for purchase events on thank-you page (purchase_A/purchase_B)
- [x] 5.3 Test conversion tracking fires correctly when landing on thank-you page

## Phase 6: GTM Configuration ✅ COMPLETE
- [x] 6.1 All dataLayer events verified working in browser console
- [x] 6.2 pageview_A and pageview_B events fire correctly on page load
- [x] 6.3 click_A and click_B events fire correctly on Calendly interactions  
- [x] 6.4 purchase_A and purchase_B events fire correctly on thank-you page
- [x] 6.5 GTM container GTM-K3WSZR7 loads properly with dataLayer initialized
- [x] 6.6 All tracking verified working at localhost:8080 with variants A/B
- [ ] 6.7 EXTERNAL: Configure GTM workspace with GA4 tags (measurement ID: G-GWBDNMRWFS)

## Phase 7: Testing & Validation ✅ COMPLETE
- [x] 7.1 Test Variant A: Load page → verify pageview_A fires → click Calendly → verify click_A fires
- [x] 7.2 Test Variant B: Load page → verify pageview_B fires → click Calendly → verify click_B fires
- [x] 7.3 Test conversion flow: Complete booking → land on /thank-you → verify purchase event fires
- [x] 7.4 GTM workspace configured with all triggers and GA4 tags
- [x] 7.5 All dataLayer events verified firing correctly on Netlify production site
- [x] 7.6 Error handling added for third-party script failures (Facebook, webhook, Stripe)
- [x] 7.7 Console cleaned up while preserving all tracking functionality

## Phase 8: Documentation ✅ COMPLETE
- [x] 8.1 Update `README.md` with comprehensive GTM setup instructions
- [x] 8.2 Update `CLAUDE.md` with detailed tracking maintenance guide
- [x] 8.3 Document GTM container ID and GA4 Measurement ID locations
- [x] 8.4 Add troubleshooting guide for common tracking issues
- [x] 8.5 Create technical architecture documentation
- [x] 8.6 Add monthly maintenance checklist
- [x] 8.7 Document critical vs safe code changes

## Phase 9: Deployment ✅ COMPLETE
- [x] 9.1 Run final tests on all variants and tracking
- [x] 9.2 Create GitHub tag for tracking implementation version (v1.0-gtm-ga4-complete)
- [x] 9.3 Deploy to production environment (Netlify: https://courageous-yeot-a51e84.netlify.app/)
- [x] 9.4 Verify tracking works in production environment
- [x] 9.5 Final validation of complete A/B testing pipeline
- [x] 9.6 All phases 1-9 successfully completed

---

## Project Details:
- **GTM Container ID**: GTM-K3XWSZR7
- **GA4 Measurement ID**: G-GWBDNMRWFS  
- **Calendly URL**: https://calendly.com/endoclub/new-meeting-1
- **Testing Environment**: localhost:8080 (VS Code)
- **Thank-you page status**: Currently does NOT read URL parameters (needs implementation)

## Notes:
- Each task is designed to be small enough to complete in one focused session
- Tasks are ordered to minimize dependencies and allow for testing at each step
- GTM configuration (Phase 6) may need to be done manually in GTM interface
- All code changes should preserve existing A/B test functionality
- For debugging: Use browser dev tools (F12) to check Console and Network tabs