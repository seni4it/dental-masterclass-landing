# Important Notes for Claude

## Critical Styling Rules

### LIMITED TIME Badge Styling
**ALWAYS** ensure the "🔥 LIMITED TIME" badge has the red background styling:
```jsx
<Badge className="bg-destructive text-destructive-foreground animate-pulse font-medium">🔥 LIMITED TIME</Badge>
```

**Never use**: `text-white font-medium` for the LIMITED TIME text - it should always be a Badge component with red background.

## MANDATORY COMMANDS AFTER EVERY EDIT

**ALWAYS RUN THESE COMMANDS IN ORDER AFTER ANY EDIT:**

1. **Check badge styling**: `npm run check-badge`
2. **Start/restart dev server**: `npm run dev` 
3. **Verify server is running**: Confirm it shows "Local: http://localhost:8080/"

## Development Server Fix - Permanent Solution

### Quick Fix Commands (run in order):
```bash
# 1. Kill any stuck processes
pkill -f vite || true
pkill -f node || true
lsof -i :8080 && kill -9 $(lsof -t -i :8080) || true

# 2. Start with PM2 (permanent solution)
npm install -g pm2
pm2 start "npm run dev" --name dental-app
pm2 logs dental-app
```

### Development Server Details
- **Primary**: http://localhost:8080/ (current setup)
- **Alternative**: Use port 3000 with `--port 3000 --strictPort`
- **CRITICAL**: Use PM2 or nohup to prevent process death
- **If ERR_CONNECTION_REFUSED**: Run the Quick Fix Commands above

### Troubleshooting Process Death:
1. **Kill old processes**: `pkill -f vite && pkill -f node`
2. **Check port usage**: `lsof -i :8080`
3. **Use PM2 for persistence**: `pm2 start "npm run dev" --name dental-app`
4. **Keep Mac awake**: `caffeinate -dims` (optional)
5. **Check logs**: `pm2 logs dental-app` or `tail -f dev.log`

### Why the server keeps dying:
- Terminal closures kill background processes
- macOS sleep/energy management
- Process memory limits
- VS Code task termination

## Icon Rules
- Each benefit item should have only ONE icon
- Remove duplicate emoji icons if there's already a component icon

## GTM & GA4 Tracking Setup
- **GTM Container**: GTM-K3WSZR7 (already installed in index.html)
- **GA4 Measurement ID**: G-GWBDNMRWFS
- **Calendly URL**: https://calendly.com/endoclub/new-meeting-1

## Live Debug Streaming System
- **Webhook URL**: https://webhook.site/eb164388-cc37-4cd9-a8b1-d517ef3201ff
- **Email Address**: eb164388-cc37-4cd9-a8b1-d517ef3201ff@emailhook.site
- **DNS Name**: *.eb164388-cc37-4cd9-a8b1-d517ef3201ff.dnshook.site
- **CLI Proxy**: `whcli forward --token=eb164388-cc37-4cd9-a8b1-d517ef3201ff --target=https://localhost`
- **How to Enable**: Add `?debug_stream=1` to any URL
- **What it tracks**: All console.log messages and dataLayer.push events
- **Note**: CORS blocks webhook on localhost, but debug console works perfectly
- **Test URLs**:
  - Variant A: `http://localhost:8080/?variant=A&debug_stream=1`
  - Variant B: `http://localhost:8080/?variant=B&debug_stream=1`
- **Phase 1**: Analysis & Preparation ✅ COMPLETE
- **Phase 2**: GTM Container Setup ✅ COMPLETE
  - GTM script verified in index.html head section
  - GTM noscript fallback verified in body section
  - Container loads correctly when dev server runs
- **Phase 3**: Data Layer Implementation ✅ COMPLETE
  - dataLayer initialized before GTM script
  - A/B testing code converted from gtag to dataLayer.push
  - pageview_A/pageview_B events fire on page load
  - Debug logging added and verified working
  - Tested with MAMP server setup
- **Phase 4**: Calendly Click Tracking ✅ COMPLETE
  - Variant A: Added ?variant=A to Calendly widget URL
  - Variant B: Added &variant=B to Calendly time slot URLs
  - click_A event fires when Calendly widget loads
  - click_B event fires when time slot button clicked
  - All click events include variant_id and calendly_url
  - Fully tested and debugged - working correctly
  - ✅ VERIFIED: Both pageview_A/B and click_A/B events firing correctly
- **Phase 5**: Conversion Tracking ✅ COMPLETE
  - ThankYou.tsx reads variant from URL parameters with fallback to localStorage
  - purchase_A/purchase_B events fire correctly on thank-you page load
  - Events include transaction_id, value (27 EUR), experiment_id, timestamp
  - ✅ VERIFIED: purchase_A event fires when visiting /thank-you?variant=A
- **Phase 6**: GTM Configuration ✅ COMPLETE
  - All dataLayer events verified working in dev tools console
  - pageview_A/pageview_B events fire correctly on page load
  - click_A/click_B events fire correctly on Calendly interactions
  - purchase_A/purchase_B events fire correctly on thank-you page
  - GTM container GTM-K3WSZR7 loads properly with dataLayer initialized
  - ✅ VERIFIED: All tracking events working at localhost:8080 with variants A/B
  - Ready for external GTM workspace configuration with GA4 tags