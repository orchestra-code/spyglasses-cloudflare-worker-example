# Spyglasses Cloudflare Worker Example

> 🚀 **Ready-to-deploy** Spyglasses bot detection for your Webflow site or any website using Cloudflare Workers

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/orchestra-code/spyglasses-cloudflare-worker-example)

This repository provides a **no-code solution** to add AI bot detection and analytics to your website. Perfect for Webflow sites, e-commerce stores, and any platform that needs bot protection.

## 🎯 What This Does

- **Detects AI bots** like ChatGPT, Claude, and training crawlers
- **Tracks AI referrers** when humans visit from AI platforms
- **Blocks harmful bots** while allowing legitimate crawlers
- **Provides analytics** in your Spyglasses dashboard
- **Works with any website** - Webflow, Shopify, custom sites, etc.

## 🚀 Quick Deploy (No Technical Knowledge Required)

### Option 1: One-Click Deploy (Easiest)

1. **Click the deploy button above** ⬆️
2. **Connect your Cloudflare account** (create a free one if needed)
3. **Set your website URL** in the ORIGIN_URL field
4. **Add your Spyglasses API key** from [spyglasses.io](https://www.spyglasses.io)
5. **Deploy!** 🎉

### Option 2: GitHub Import (Simple)

1. **Fork this repository** (click "Fork" at the top of this page)
2. **Go to Cloudflare Workers** → [dash.cloudflare.com/workers](https://dash.cloudflare.com/workers)
3. **Click "Create Application"** → "Import a repository"
4. **Select your forked repository**
5. **Set environment variables** (see below)
6. **Deploy!**

### Option 3: Manual Upload (No GitHub Required)

1. **Download this repository** as a ZIP file (green "Code" button → "Download ZIP")
2. **Extract the ZIP file** to your computer
3. **Go to Cloudflare Workers** → [dash.cloudflare.com/workers](https://dash.cloudflare.com/workers)
4. **Create a new Worker** with the "Hello World" template
5. **Copy and paste** the code from `src/index.ts` into the Worker editor
6. **Save and deploy**
7. **Set environment variables** in Settings → Variables (see Configuration section below)

## ⚙️ Configuration

### Required Settings

**All settings are configured in the Cloudflare dashboard - no file editing required!**

1. **Deploy your Worker** using one of the methods above
2. **Go to your Worker settings**: Workers & Pages → Your Worker → Settings → Variables
3. **Add these environment variables**:

#### Environment Variables

| Variable | Type | Value | Example |
|----------|------|-------|---------|
| `ORIGIN_URL` | Variable | Your website's URL | `https://your-site.webflow.io` |
| `SPYGLASSES_API_KEY` | **Secret** | Your API key from Spyglasses | `spyglasses_xxx...` |

**Important**: 
- `ORIGIN_URL` should be added as a **Variable** (not secret)
- `SPYGLASSES_API_KEY` should be added as a **Secret** (encrypted)

#### How to Add Variables in Cloudflare:

1. **Go to Workers & Pages** in your Cloudflare dashboard
2. **Click on your Worker** name
3. **Go to Settings** → **Variables**
4. **Click "Add variable"** for `ORIGIN_URL`
5. **Click "Add secret"** for `SPYGLASSES_API_KEY`
6. **Click "Save"**

#### Optional: Change Worker Name

If you want a custom name, edit the `name` field in `wrangler.toml`:
```toml
name = "your-site-spyglasses-worker"  # Make this unique
```

### Optional Settings

| Variable | Purpose | Default |
|----------|---------|---------|
| `SPYGLASSES_DEBUG` | Enable detailed logging | `false` |
| `SPYGLASSES_COLLECTOR_ENDPOINT` | Custom analytics endpoint | (Spyglasses default) |

## 🌐 Setting Up Your Domain

After deploying, you need to route your domain through the Worker:

### For Webflow Sites

1. **Add your domain to Cloudflare** (if not already there)
2. **Update your nameservers** to Cloudflare's nameservers
3. **In Cloudflare**, go to Workers & Pages → Overview
4. **Add a Route**: `*yourdomain.com/*` → Select your Worker
5. **In Webflow**, add your custom domain as normal

### For Other Platforms

Follow the same process - add your domain to Cloudflare and route traffic through the Worker.

## 🔧 How It Works

```
[Visitor] → [Cloudflare Worker + Spyglasses] → [Your Website]
            ↓
        [Analytics Dashboard]
```

1. **Visitor requests your site** → Cloudflare Worker intercepts
2. **Spyglasses analyzes the request** → Identifies bots and AI referrers
3. **Legitimate traffic continues** → Gets forwarded to your website
4. **Bots get blocked** → Returns 403 Forbidden (if configured)
5. **Analytics data sent** → Appears in your Spyglasses dashboard

## 📊 What You'll See

In your Spyglasses dashboard, you'll get:

- **Bot Detection Reports** - Which bots are visiting and when
- **AI Referrer Tracking** - Humans visiting from ChatGPT, Claude, etc.
- **Blocking Statistics** - How many harmful bots were stopped
- **Traffic Insights** - Clean analytics with bot traffic separated

## 🚨 Troubleshooting

### Worker Not Working?

- ✅ Check that your route is set correctly: `*yourdomain.com/*`
- ✅ Verify ORIGIN_URL is your actual website URL
- ✅ Make sure your domain uses Cloudflare nameservers

### Website Not Loading?

- ✅ Check Cloudflare SSL settings (should be "Full" or "Full (strict)")
- ✅ Verify your origin URL is correct and accessible
- ✅ Check Worker logs in Cloudflare dashboard

### No Data in Spyglasses?

- ✅ Verify your API key is correct
- ✅ Check that you've added your domain in Spyglasses dashboard
- ✅ Enable debug mode temporarily to see detailed logs

## 🎓 Learning More

- 📖 **[Full Documentation](https://www.spyglasses.io/en/docs/platforms/cloudflare-workers)** - Complete setup guide
- 🌐 **[Webflow-Specific Guide](https://www.spyglasses.io/en/docs/platforms/webflow)** - Webflow integration details
- 💬 **[Support](mailto:support@spyglasses.io)** - Get help from our team

## 💰 Pricing

### Cloudflare Workers
- **Free Plan**: 100,000 requests/day (perfect for most sites)
- **Paid Plans**: $5/month for 10M+ requests

### Spyglasses
- **Free Tier**: Basic bot detection and analytics
- **Pro Plans**: Advanced features starting at $29/month

## 🤝 Support

Need help? We're here for you:

- 📧 **Email**: support@spyglasses.io
- 📖 **Documentation**: [Cloudflare workers](https://www.spyglasses.io/en/docs/platforms/cloudflare-workers)
- 🐛 **Issues**: [Report bugs or request features](https://github.com/orchestra-code/spyglasses-cloudflare-worker-example/issues)

---

Made with ❤️ by [Spyglasses](https://www.spyglasses.io) - AI SEO and bot detection for the modern web
