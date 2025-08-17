Here's the **final PRD** based on all your answers.
It's ready to hand off to an AI or developer.

---

## **Project Requirements Document (PRD)**

**Project Title:**
Google Analytics (GA4) + Google Tag Manager Integration for A/B Test Sales Tracking

**Prepared by:**
\[Your Name]
**Date:**
\[Insert Date]

---

### **1. Project Overview**

We have a marketing website hosted on a GitHub branch, built in Visual Studio with Claude AI assistance.
The site uses a custom JavaScript A/B testing system that:

* Assigns visitors to **Variant A** or **Variant B** (priority: URL param → localStorage → random 50/50).
* Persists the assignment in `localStorage`.
* Updates the URL with the variant without reloading the page.
* Tracks events using `window.gtag` and has a custom analytics endpoint ready.

We sell a **Masterclass Webinar** through Calendly (paid plan), which handles payments via an authorised provider (not Stripe directly).

* **Variant A:** Calendly embedded widget.
* **Variant B:** Calendly booking opens in new tab.
* Both variants use the same Calendly calendar.
* Calendly redirects all bookings to `/thank-you` on our domain.

**Goal:** Track impressions, clicks, and sales for each variant in GA4 via GTM, and determine which version converts better.

---

### **2. Objectives**

1. Integrate **Google Tag Manager (GTM)** with **GA4** for event tracking.
2. Track **page views**, **Calendly booking clicks**, and **sales conversions** for A and B separately.
3. Attribute conversions by variant and by country.
4. Maintain easy-to-update tracking without code changes.
5. Document setup in `README.md` and `claude.md`.

---

### **3. Scope of Work**

#### **Inclusions:**

* Add GTM container `GTM-K3WSZR7` to the site.
* Use GA4 Measurement ID (provided) inside GTM.
* Pass variant info (`A` or `B`) in Calendly booking links (as `?variant=A` or `?variant=B`).
* Enable Calendly's "Pass event details to redirected page" so variant is preserved on `/thank-you`.
* Configure GTM to fire these events:

  * `pageview_A` / `pageview_B` (when page loads)
  * `click_A` / `click_B` (when Calendly booking starts)
  * `purchase_A` / `purchase_B` (when `/thank-you` is visited with matching variant)
* Configure GA4 to treat `purchase_A` and `purchase_B` as **Conversions**.
* Test across both variants.
* Add instructions to `README.md` and `claude.md`.
* Create a **GitHub tag** after tracking is implemented for rollback.

#### **Exclusions:**

* Real-time reporting (daily data is sufficient).
* Video training materials.

---

### **4. Functional Requirements**

1. **Variant Persistence:**

   * Continue using current URL → localStorage → random assignment system.
   * Ensure variant param is included when user clicks booking link or opens Calendly widget.

2. **Event Tracking via GTM:**

   * **Trigger setup:**

     * Page View triggers for variant-specific page loads.
     * Click triggers for Calendly button or iframe interactions.
     * Conversion trigger for `/thank-you` with variant param.
   * **Event names:**

     * `pageview_A` / `pageview_B`
     * `click_A` / `click_B`
     * `purchase_A` / `purchase_B`

3. **GA4 Reporting:**

   * Mark `purchase_A` and `purchase_B` as conversions.
   * Use built-in GA4 location dimension for country-level conversion analysis.

---

### **5. Non-Functional Requirements**

* Must be fully functional in all modern browsers.
* Code changes should be minimal to allow AI-assisted implementation.
* Must not break existing A/B test logic or Calendly booking flow.

---

### **6. Test Plan**

**Before Launch:**

* Load site in incognito and verify correct variant assignment.
* Click Calendly booking → ensure `variant` param is preserved.
* Complete test booking → ensure `/thank-you` shows correct param.
* Check GTM debug mode for correct events firing.
* Verify events in GA4 debug view.

**Acceptance Criteria:**

* All events fire for both variants.
* Variant is correctly attributed for every conversion.
* GA4 reports daily conversion counts for each variant.

---

### **7. Maintenance**

* Future events can be added via GTM without code changes.
* Instructions for adding events and modifying tracking will be included in `README.md` and `claude.md`.
* Keep GTM container ID and GA4 Measurement ID documented.
* Use GitHub tags for version history when changing tracking logic.

---

### **8. Deliverables**

* Updated website code with GTM installed.
* GTM workspace with configured triggers and tags.
* Updated `README.md` and `claude.md` with setup & maintenance instructions.
* GitHub tag marking tracking implementation point.

---

This PRD gives any developer or AI all the instructions needed to implement the tracking correctly.

---

If you want, I can now **also prepare the exact `README.md` tracking setup instructions** so Claude (or any dev) can follow step-by-step without thinking. That way, there's zero room for confusion.