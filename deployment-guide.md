# Cloudflare Deployment Guide

Step-by-step guide to deploying **Unimarket Technologies** (`unimarkettechnologies.com` & `www.unimarkettechnologies.com`) to **Cloudflare Workers** from the `main` branch, replacing Vercel.

---

## 1. Overview & Architecture

* **Framework:** Next.js (App Router with dynamic API route `/api/enquiry`).
* **Cloudflare Runtime:** Cloudflare Workers using the official **OpenNext adapter** (`@opennextjs/cloudflare`).
* **Static Assets:** Served directly via Cloudflare Edge Static Assets cache (`assets` binding in `wrangler.jsonc`).
* **SSR & Route Handlers:** Executed on the Cloudflare Workers V8 engine with `nodejs_compat`.
* **Domains:** `unimarkettechnologies.com` and `www.unimarkettechnologies.com`.

---

## 2. Phase 1: Local Configuration (Already Prepared)

The project has already been configured and verified locally with the following files:

1. **`wrangler.jsonc`** (Cloudflare Worker definition):
   ```jsonc
   {
     "$schema": "node_modules/wrangler/config-schema.json",
     "main": ".open-next/worker.js",
     "name": "unimarket-technologies-website",
     "compatibility_date": "2026-11-01",
     "compatibility_flags": ["nodejs_compat"],
     "assets": {
       "directory": ".open-next/assets",
       "binding": "ASSETS"
     }
   }
   ```

2. **`open-next.config.ts`** (Adapter configuration):
   ```typescript
   import { defineCloudflareConfig } from '@opennextjs/cloudflare';

   export default defineCloudflareConfig({});
   ```

3. **`package.json`** scripts added:
   * `"build:worker": "opennextjs-cloudflare build"`
   * `"preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview"`
   * `"deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy"`

4. **`.gitignore`**:
   * Added `.open-next` to prevent build artifacts from entering version control.

---

## 3. Phase 2: Merge Your Work into `main` and Push to GitHub

The redesign and Cloudflare configurations currently reside on `feature/061126-redesign`. To deploy from `main`, merge and push:

```bash
# 1. Stage and commit the Cloudflare configuration files
git add package.json package-lock.json .gitignore open-next.config.ts wrangler.jsonc deployment-guide.md
git commit -m "Configure Cloudflare Workers deployment via OpenNext"

# 2. Push the feature branch
git push origin feature/061126-redesign

# 3. Switch to main and merge
git checkout main
git pull origin main
git merge feature/061126-redesign --no-ff -m "Merge feature/061126-redesign into main"

# 4. Push main to GitHub
git push origin main
```

---

## 4. Phase 3: Connect Cloudflare to GitHub `main`

### Option A: Cloudflare Dashboard Git Integration (Automated Deployments)

This connects Cloudflare directly to your GitHub repository so every push to `main` deploys automatically.

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com).
2. In the left navigation, select **Compute (Workers) > Workers & Pages**.
3. Click **Create Application**.
4. Switch to the **Workers** tab and select **Connect to Git** (or click **Workers Builds / Connect GitHub**).
5. Authorize Cloudflare to access your GitHub account and select repository:
   * **`paulnamalomba/unimarket-technologies-website`**
6. Configure the Build & Deployment Settings:
   * **Production Branch:** `main`
   * **Framework Preset:** `None` (or `Next.js`)
   * **Root Directory:** `/` (default)
   * **Build Command:**
     ```bash
     npx @opennextjs/cloudflare build
     ```
     *(or `npm run build:worker`)*
   * **Deploy Command:**
     ```bash
     npx wrangler deploy
     ```
7. Click **Save and Deploy**. Cloudflare will clone the `main` branch, build the OpenNext bundle, and publish the worker.

---

### Option B: Direct CLI Deployment (Instant First Deploy)

If you want to deploy immediately from your terminal without setting up Git integration in the dashboard first:

```bash
# 1. Log into Cloudflare from your terminal
npx wrangler login

# 2. Build and deploy
npm run deploy
```

---

## 5. Phase 4: Configure Custom Domains (`unimarkettechnologies.com` & `www`)

You already own both `unimarkettechnologies.com` and `www.unimarkettechnologies.com`.

### Step 1: Add the Domain to Cloudflare DNS (if not already done)
1. In Cloudflare Dashboard, click **Add a Domain** (or **Websites > Add a Site**).
2. Enter `unimarkettechnologies.com` and choose the **Free** plan.
3. Cloudflare will scan your existing DNS records and provide two assigned nameservers (e.g., `ada.ns.cloudflare.com` and `bob.ns.cloudflare.com`).
4. In your domain registrar (GoDaddy, Namecheap, Google Domains / Squarespace, etc.):
   * Change nameservers to **Custom DNS**.
   * Replace the registrar nameservers with the two Cloudflare nameservers.
   * Wait 5–15 minutes for DNS propagation.

### Step 2: Attach the Custom Domains to the Worker
1. In Cloudflare Dashboard, go to **Compute (Workers) > Workers & Pages**.
2. Click your deployed worker: `unimarket-technologies-website`.
3. Select the **Settings** tab, then **Domains & Routes** (or **Custom Domains**).
4. Click **Add > Custom Domain**:
   * Domain: `unimarkettechnologies.com`
   * Click **Add Custom Domain**. Cloudflare will automatically provision free edge SSL/TLS certificates and create the DNS routing record.
5. Click **Add > Custom Domain** again:
   * Domain: `www.unimarkettechnologies.com`
   * Click **Add Custom Domain**.

### Step 3: Configure Canonical Redirect (`www` → apex)
To ensure consistent SEO and avoid duplicate indexing, redirect `www.unimarkettechnologies.com` to `https://unimarkettechnologies.com`:
1. In Cloudflare Dashboard, open the **`unimarkettechnologies.com`** website.
2. Go to **Rules > Redirect Rules**.
3. Click **Create Rule**:
   * **Rule Name:** `Redirect WWW to Apex`
   * **Incoming requests match:** Custom filter expression
     * Field: `Hostname`
     * Operator: `equals`
     * Value: `www.unimarkettechnologies.com`
   * **Then:**
     * Type: `Dynamic`
     * Expression: `concat("https://unimarkettechnologies.com", http.request.uri.path)`
     * Status code: `301 (Moved Permanently)`
     * Preserve query string: `Checked`
4. Click **Deploy**.

---

## 6. Phase 5: Decommissioning Vercel

Once your Cloudflare deployment is live and serving traffic:

1. **Delete / Pause Vercel Project:**
   * Go to [vercel.com/dashboard](https://vercel.com/dashboard).
   * Open the `unimarket-technologies-website` project.
   * Go to **Settings > General > Delete Project** (or disconnect the GitHub repository under **Git**).
2. **Remove Old Vercel DNS Records:**
   * In Cloudflare DNS records for `unimarkettechnologies.com`, ensure there are no lingering `A` records pointing to `76.76.21.21` (Vercel) or `CNAME` records pointing to `cname.vercel-dns.com`.
   * Cloudflare automatically manages the DNS entries for the worker custom domains.

---

## 7. Verification Checklist

Test that all pages and assets load over HTTPS:

| Route | Expected Result |
|---|---|
| `https://unimarkettechnologies.com/` | Homepage loads with all media and layout |
| `https://www.unimarkettechnologies.com/` | 301 redirects to `https://unimarkettechnologies.com/` |
| `https://unimarkettechnologies.com/solutions` | Solutions overview page renders |
| `https://unimarkettechnologies.com/solutions/pos-eis` | POS & EIS detail page renders |
| `https://unimarkettechnologies.com/contact` | Contact page & booking form renders |
| `POST /api/enquiry` | Dynamic API route processes request |
| `https://unimarkettechnologies.com/sitemap.xml` | XML sitemap returns status 200 |
| `https://unimarkettechnologies.com/robots.txt` | Robots directives return status 200 |
