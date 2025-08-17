# TODO 2: Performance & Security Improvements

## Overview
This document organizes all performance optimizations and security improvements identified from PageSpeed Insights and security audit into actionable tasks that can be completed one by one.

---

## 🔴 Priority 1: Critical Security Issues (HIGH SEVERITY)

### Task 1.1: Add Content Security Policy (CSP) ✅ COMPLETED
- [x] Create CSP headers in netlify.toml
- [x] Define allowed sources for scripts, styles, images
- [x] Test CSP in report-only mode first
- [x] Deploy CSP in enforcement mode
- **Impact**: Prevents XSS attacks
- **Severity**: HIGH

### Task 1.2: Add Cross-Origin-Opener-Policy (COOP) ✅ COMPLETED
- [x] Add COOP header to netlify.toml
- [x] Set policy to "same-origin-allow-popups"
- [x] Test popup functionality still works
- **Impact**: Prevents cross-origin attacks
- **Severity**: HIGH

### Task 1.3: Add X-Frame-Options / Frame-Ancestors ✅ COMPLETED
- [x] Add X-Frame-Options header to netlify.toml
- [x] Set to SAMEORIGIN
- [x] Use frame-ancestors in CSP
- [x] Verify Calendly widget still works
- **Impact**: Prevents clickjacking
- **Severity**: HIGH

### Task 1.4: Strengthen HSTS Policy ✅ COMPLETED
- [x] Add includeSubDomains directive
- [x] Add preload directive
- [x] Set max-age to 1 year (31536000)
- [ ] Submit to HSTS preload list (manual step)
- **Impact**: Prevents downgrade attacks
- **Severity**: MEDIUM

---

## 🟡 Priority 2: Image Optimization (3,826 KiB savings)

### Task 2.1: Convert Images to WebP Format
- [ ] Convert tooth-question-optimized.png to WebP
- [ ] Convert dr-roitman.png to WebP
- [ ] Convert tooth-canal-hero.jpg to WebP
- [ ] Add fallback for older browsers
- **Potential Savings**: ~1,500 KiB

### Task 2.2: Implement Responsive Images
- [ ] Create multiple sizes for each image
- [ ] Add srcset and sizes attributes
- [ ] Serve smaller images for mobile
- [ ] Test on different screen sizes
- **Potential Savings**: ~1,000 KiB

### Task 2.3: Further Compress Existing Images ✅ COMPLETED
- [x] Reduce tooth-question image from 286KB to 33KB (JPEG conversion)
- [x] Compress all PNG files with better compression
- [x] Optimize JPEG quality settings
- **Actual Savings**: 253 KiB

### Task 2.4: Implement Lazy Loading ✅ COMPLETED
- [x] Add loading="lazy" to all images below fold
- [x] Add loading="eager" to above-fold images
- [x] Test scroll performance
- **Potential Savings**: ~800 KiB initial load

---

## 🟢 Priority 3: JavaScript Optimization (754 KiB savings)

### Task 3.1: Remove Unused JavaScript
- [ ] Analyze bundle with webpack-bundle-analyzer
- [ ] Remove unused UI components from bundle
- [ ] Remove unused dependencies
- [ ] Tree-shake properly
- **Potential Savings**: 695 KiB

### Task 3.2: Code Splitting
- [ ] Split routes into separate chunks
- [ ] Lazy load heavy components
- [ ] Split vendor bundle
- [ ] Implement dynamic imports
- **Impact**: Faster initial load

### Task 3.3: Remove Legacy JavaScript
- [ ] Configure babel targets for modern browsers
- [ ] Remove polyfills for modern features
- [ ] Use ES6 modules directly
- **Potential Savings**: 59 KiB

### Task 3.4: Optimize Third-Party Scripts
- [ ] Defer GTM loading
- [ ] Lazy load Facebook Pixel
- [ ] Load Calendly on-demand only
- [ ] Remove unused analytics code
- **Impact**: Reduce main thread blocking

---

## 🔵 Priority 4: CSS Optimization (467 KiB savings)

### Task 4.1: Purge Unused Tailwind Classes ✅ COMPLETED
- [x] Configure PurgeCSS properly (Tailwind content paths)
- [x] Add Vite build optimizations
- [x] Enable CSS code splitting
- [x] Configure terser for production
- **Build optimizations added**: CSS splitting, chunk optimization

### Task 4.2: Remove Unused UI Components CSS
- [ ] Identify unused shadcn components
- [ ] Remove their CSS imports
- [ ] Create custom minimal components
- **Potential Savings**: 67 KiB

### Task 4.3: Inline Critical CSS
- [ ] Extract above-fold CSS
- [ ] Inline in HTML head
- [ ] Load rest asynchronously
- **Impact**: Eliminate render blocking

---

## ⚡ Priority 5: Performance Optimizations

### Task 5.1: Reduce Render Blocking (450ms savings)
- [ ] Defer non-critical CSS
- [ ] Move scripts to bottom or defer
- [ ] Preload critical resources
- [ ] Use resource hints (preconnect, dns-prefetch)

### Task 5.2: Implement Proper Caching (351 KiB savings) ✅ COMPLETED
- [x] Add cache headers in netlify.toml
- [x] Set 1 year cache for images/fonts
- [x] Set appropriate cache for JS/CSS
- [x] Implement cache busting strategy

### Task 5.3: Optimize Main Thread Work (2.1s reduction)
- [ ] Split long JavaScript tasks
- [ ] Debounce/throttle event handlers
- [ ] Use requestAnimationFrame for animations
- [ ] Move heavy computations to Web Workers

### Task 5.4: Reduce Network Payload
- [ ] Enable Brotli compression
- [ ] Minify all assets
- [ ] Optimize font loading
- [ ] Reduce total payload under 1.5MB

---

## 📱 Priority 6: Mobile-Specific Optimizations

### Task 6.1: Mobile Bundle Optimization
- [ ] Create separate mobile bundle
- [ ] Remove desktop-only features for mobile
- [ ] Optimize touch interactions
- [ ] Test on real devices

### Task 6.2: Mobile Image Strategy
- [ ] Serve smaller images for mobile
- [ ] Use art direction for hero images
- [ ] Implement progressive image loading
- [ ] Test on 3G connections

### Task 6.3: Mobile Performance Testing
- [ ] Test on low-end Android devices
- [ ] Optimize for 3G/4G connections
- [ ] Ensure smooth scrolling
- [ ] Fix any touch responsiveness issues

---

## 🔧 Priority 7: Third-Party Issues

### Task 7.1: Fix Calendly Integration
- [ ] Fix payment permissions policy error
- [ ] Handle third-party cookie blocking
- [ ] Consider server-side alternative
- [ ] Add error handling for blocked scripts

### Task 7.2: Optimize Analytics Loading
- [ ] Defer GA4/GTM loading
- [ ] Use facade for heavy scripts
- [ ] Load only after user interaction
- [ ] Monitor impact on data collection

---

## 📊 Priority 8: Monitoring & Testing

### Task 8.1: Set Up Performance Monitoring
- [ ] Add Web Vitals tracking
- [ ] Set up performance budgets
- [ ] Create automated Lighthouse CI
- [ ] Monitor real user metrics

### Task 8.2: Security Testing
- [ ] Test all security headers
- [ ] Run security audit tools
- [ ] Test CSP violations
- [ ] Verify HTTPS everywhere

### Task 8.3: Cross-Browser Testing
- [ ] Test on Safari/iOS
- [ ] Test on Firefox
- [ ] Test on Edge
- [ ] Test on older Chrome versions

---

## 🚀 Priority 9: Deployment Strategy

### Task 9.1: Staged Rollout
- [ ] Deploy security headers first
- [ ] Test in staging environment
- [ ] Monitor for errors
- [ ] Gradual production rollout

### Task 9.2: Rollback Plan
- [ ] Document all changes
- [ ] Create rollback procedures
- [ ] Test rollback process
- [ ] Monitor after deployment

---

## 📈 Success Metrics

### Performance Goals:
- [ ] Mobile PageSpeed Score > 90
- [ ] Desktop PageSpeed Score > 95
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Total bundle size < 500KB
- [ ] Image payload < 1MB

### Security Goals:
- [ ] All HIGH severity issues resolved
- [ ] CSP implemented and enforced
- [ ] A+ rating on securityheaders.com
- [ ] No console errors in production

---

## 🎯 Quick Wins (Can Do Immediately)

1. **Add security headers to netlify.toml** (Task 1.1-1.4)
2. **Compress images further** (Task 2.3)
3. **Add loading="lazy" to images** (Task 2.4)
4. **Fix Tailwind purge configuration** (Task 4.1)
5. **Add cache headers** (Task 5.2)

---

## 📝 Notes

- Start with security issues (Priority 1) as they're critical
- Image optimization (Priority 2) will give biggest performance gain
- Test each change thoroughly before moving to next
- Monitor metrics after each deployment
- Keep backup of original files before optimization

---

## Execution Order Recommendation

1. **Week 1**: Complete all Priority 1 (Security)
2. **Week 2**: Complete Priority 2 (Images) and Priority 4 (CSS)
3. **Week 3**: Complete Priority 3 (JavaScript)
4. **Week 4**: Complete Priority 5-6 (Performance & Mobile)
5. **Ongoing**: Priority 7-9 (Monitoring & Maintenance)

---

*Last Updated: January 2025*
*Total Estimated Savings: 5.5MB bandwidth, 2.5s load time improvement*