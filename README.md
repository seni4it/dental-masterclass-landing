# Canal Localization Masterclass - A/B Testing Platform

## Project Overview

A complete A/B testing platform for Dr. Roitman's Canal Localization Masterclass with integrated Google Analytics 4 tracking, GTM container management, and conversion optimization.

## 🚀 Live Deployment

**Production URL**: https://courageous-yeot-a51e84.netlify.app/

### A/B Testing URLs:
- **Variant A (Calendly Widget)**: https://courageous-yeot-a51e84.netlify.app/?variant=A
- **Variant B (Time Slot Selection)**: https://courageous-yeot-a51e84.netlify.app/?variant=B
- **Debug Mode**: Add `&debug_stream=1` to any URL for console tracking

## 📊 Tracking Implementation

### **Analytics Setup:**
- **GTM Container**: GTM-K3WSZR7 
- **GA4 Measurement ID**: G-GWBDNMRWFS
- **Facebook Pixel**: 735975949298040
- **Webhook Debug**: https://webhook.site/eb164388-cc37-4cd9-a8b1-d517ef3201ff

### **Tracked Events:**
- `pageview_A` / `pageview_B` - Initial page load by variant
- `click_A` / `click_B` - Calendly interactions by variant  
- `purchase_A` / `purchase_B` - Conversion tracking with €27 value

## 🎨 Recent UI/UX Improvements (January 2025)

### **Latest Updates:**
- ✅ **Logo Removal**: Cleaned up hero sections by removing company logos
- ✅ **Typography Optimization**: Improved readability with smaller, non-bold benefit text
- ✅ **Mobile Responsiveness**: Fixed Calendly calendar centering on mobile devices
- ✅ **Navigation Simplification**: Streamlined header to show only centered "Book Now" button
- ✅ **About Section Migration**: Moved Dr. Roitman bio to footer popup modal
- ✅ **Layout Optimization**: Reorganized page structure with FAQ section at end

## Project info

**Lovable URL**: https://lovable.dev/projects/20280e59-4e7f-4139-8b18-5eeffaf1e33e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/20280e59-4e7f-4139-8b18-5eeffaf1e33e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/20280e59-4e7f-4139-8b18-5eeffaf1e33e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 📊 GTM & GA4 Tracking Implementation

This project includes a **complete A/B testing pipeline** with Google Tag Manager and Google Analytics 4 integration.

### 🎯 **Project Overview**
- **Live Site**: https://courageous-yeot-a51e84.netlify.app/
- **A/B Test**: Hero section variants (Calendly embed vs time slots)
- **Tracking**: Complete funnel from pageview → click → conversion
- **Purpose**: Optimize dental masterclass landing page conversions

---

## 📋 **Implementation Status: ALL PHASES COMPLETE ✅**

### **Phase 1-3: Foundation** ✅ 
- A/B testing system implemented in `src/lib/ab-testing.ts`
- GTM Container `GTM-K3WSZR7` installed in `index.html`
- dataLayer initialization and event tracking working

### **Phase 4-5: Event Tracking** ✅
- **Variant A**: Calendly widget embed → `click_A` event  
- **Variant B**: Time slot buttons → `click_B` event
- **Conversions**: Thank-you page → `purchase_A/B` events
- All events include `experiment_id`, `variant_id`, metadata

### **Phase 6-7: GTM & Validation** ✅
- GTM workspace configured with triggers and GA4 tags
- GA4 Measurement ID: `G-GWBDNMRWFS` 
- End-to-end pipeline tested and verified on production
- Error handling added for third-party script failures

---

## 🧪 **Testing Your Implementation**

### **Quick Test URLs:**
```bash
# Variant A (Calendly embed)
https://courageous-yeot-a51e84.netlify.app/?variant=A&debug_stream=1

# Variant B (Time slots) 
https://courageous-yeot-a51e84.netlify.app/?variant=B&debug_stream=1

# Conversion tracking
https://courageous-yeot-a51e84.netlify.app/thank-you?variant=A
```

### **Expected Console Output:**
```javascript
// Page Load
[DEBUG] AB_VARIANT set to: A
[DEBUG] Added CSS class: variant-a
[DEBUG] dataLayer pageview event pushed: {event: 'pageview_A', ...}

// Click Tracking
[DEBUG] dataLayer click_A event pushed: {event: 'click_A', ...}

// Conversion 
[DEBUG] dataLayer purchase_A event pushed: {event: 'purchase_A', value: 27, ...}
```

---

## 🛠 **Development Setup**

### **Local Development:**
```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Server runs at http://localhost:8080

# Test variants locally
http://localhost:8080/?variant=A&debug_stream=1
http://localhost:8080/?variant=B&debug_stream=1
```

### **Production Build:**
```bash
npm run build
# Deploy dist/ folder to your hosting service
```

---

## 🔧 **GTM Configuration Guide**

### **Required GTM Setup:**

1. **Create Triggers** in GTM workspace:
   - `pageview_A` (Custom Event)
   - `pageview_B` (Custom Event)  
   - `click_A` (Custom Event)
   - `click_B` (Custom Event)
   - `purchase_A` (Custom Event)
   - `purchase_B` (Custom Event)

2. **Create GA4 Tags:**
   - GA4 Configuration Tag (Measurement ID: `G-GWBDNMRWFS`)
   - GA4 Event Tags for each custom event above

3. **Publish Changes** in GTM workspace

### **Verification Steps:**
- Use GTM Preview mode to test trigger firing
- Check GA4 Real-time reports for incoming events
- Use GA4 DebugView for detailed event analysis

---

## 🚨 **Troubleshooting Common Issues**

### **"No events in GA4"**
- ✅ Check GTM Preview mode shows triggers firing
- ✅ Verify GA4 tags are connected to triggers  
- ✅ Confirm GTM workspace changes are published

### **"Console errors"**
- ✅ Facebook Pixel blocked: Normal with ad blockers
- ✅ CORS webhook errors: Debug feature, doesn't affect tracking
- ✅ Browser extension errors: External, ignore safely

### **"Variant not working"**
- ✅ Check URL parameter: `?variant=A` or `?variant=B`
- ✅ Clear localStorage and reload page
- ✅ Verify `window.AB_VARIANT` in browser console

### **"Click events not firing"**
- ✅ Variant A: Click embedded Calendly widget
- ✅ Variant B: Click time slot buttons, not other CTAs
- ✅ Check console for `[DEBUG] dataLayer click_X event pushed:`

---

## 📊 **Key Performance Indicators**

Track these metrics in GA4 to measure A/B test success:

- **Page Views**: `pageview_A` vs `pageview_B` 
- **Click Rate**: `click_A/B` ÷ `pageview_A/B`
- **Conversion Rate**: `purchase_A/B` ÷ `pageview_A/B` 
- **Revenue**: Track €27 value per conversion

---

## 🏗 **Technical Architecture**

### **Key Files:**
- `index.html`: GTM container, dataLayer initialization
- `public/ab-init.js`: A/B variant assignment, pageview tracking
- `src/hooks/useABTest.ts`: React hook for A/B test state
- `src/pages/Index.tsx`: Main page with variant rendering
- `src/pages/ThankYou.tsx`: Conversion tracking
- `src/components/variants/`: A/B test variant components

### **Data Flow:**
1. **Page Load** → `ab-init.js` assigns variant → `pageview_A/B` fires
2. **User Click** → Variant component → `click_A/B` fires  
3. **Conversion** → Thank-you page → `purchase_A/B` fires
4. **GTM** → Receives events → Forwards to GA4
5. **GA4** → Records events → Available for analysis
