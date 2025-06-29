/**
 * Spyglasses Cloudflare Worker Example
 * 
 * This Worker sits in front of your website (like Webflow) and provides:
 * - AI bot detection and blocking
 * - AI referrer tracking (ChatGPT, Claude, etc.)
 * - Analytics for your Spyglasses dashboard
 * 
 * No code changes needed! Just set your environment variables:
 * - ORIGIN_URL: Your website's URL (e.g., https://your-site.webflow.io)
 * - SPYGLASSES_API_KEY: Your API key from https://www.spyglasses.io
 */

import worker from '@spyglasses/cloudflare-worker';

// Export the Spyglasses worker - this handles everything automatically!
export default worker; 