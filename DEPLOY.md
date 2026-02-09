# How to bring your website live

Your website is a static site (just HTML, CSS, and JS) — no server needed.
The easiest free hosting option is **GitHub Pages** or **Netlify**.
Below are step-by-step instructions for both.

---

## Option A: GitHub Pages (recommended)

### 1. Create a new GitHub repository

- Go to [github.com/new](https://github.com/new)
- Name it anything you like (e.g. `my-website` or `yourname.github.io`)
- Set it to **Public**
- Don't initialize with a README

### 2. Push your website files

```bash
# From inside the website/ folder
cd website

git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. Enable GitHub Pages

- Go to your repo on GitHub → **Settings** → **Pages**
- Under "Source", select **Deploy from a branch**
- Branch: `main`, folder: `/ (root)`
- Click **Save**
- Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/` within a minute or two

### 4. Connect your Namecheap domain

**On GitHub:**
- Still in **Settings → Pages**, under "Custom domain", type your domain (e.g. `yourdomain.com`)
- Check **Enforce HTTPS** (may take a few minutes to become available)

**On Namecheap:**
- Log in to [namecheap.com](https://namecheap.com) → **Domain List** → click **Manage** next to your domain
- Go to the **Advanced DNS** tab
- Delete any existing A records or CNAME records for the host `@` or `www`
- Add these **A Records** (host: `@`):

| Type     | Host | Value             |
|----------|------|-------------------|
| A Record | @    | 185.199.108.153   |
| A Record | @    | 185.199.109.153   |
| A Record | @    | 185.199.110.153   |
| A Record | @    | 185.199.111.153   |

- Add this **CNAME Record** for `www`:

| Type         | Host | Value                              |
|--------------|------|------------------------------------|
| CNAME Record | www  | YOUR_USERNAME.github.io.           |

- DNS changes can take up to 30 minutes (usually faster)

### 5. Verify

- Visit `https://yourdomain.com` — your site should be live
- HTTPS will be automatically provisioned by GitHub (may take up to 24 hours, usually much faster)

---

## Option B: Netlify

### 1. Sign up and deploy

- Go to [netlify.com](https://www.netlify.com/) and sign up (free)
- Click **"Add new site"** → **"Deploy manually"**
- Drag and drop the entire `website/` folder onto the upload area
- Your site will be live instantly at a random Netlify URL (e.g. `random-name-123.netlify.app`)

### 2. Connect your Namecheap domain

**On Netlify:**
- Go to **Site settings** → **Domain management** → **Add custom domain**
- Enter your domain (e.g. `yourdomain.com`) and click **Verify** → **Add domain**
- Netlify will also set up `www.yourdomain.com` automatically
- Under your domain, click **Options** → **Set up Netlify DNS** (recommended) OR use external DNS:

**On Namecheap (external DNS — simpler):**
- Go to **Advanced DNS** for your domain
- Add a **CNAME Record**:

| Type         | Host | Value                              |
|--------------|------|------------------------------------|
| CNAME Record | www  | YOUR_NETLIFY_SUBDOMAIN.netlify.app.|

- For the root domain (`@`), add an **A Record** pointing to Netlify's load balancer IP: `75.2.60.5`

| Type     | Host | Value       |
|----------|------|-------------|
| A Record | @    | 75.2.60.5   |

**Or use Netlify DNS (easier long-term):**
- Netlify will give you nameservers (e.g. `dns1.p01.nsone.net`)
- On Namecheap, go to **Domain** → **Nameservers** → select **Custom DNS**
- Enter the Netlify nameservers
- This hands DNS control to Netlify entirely

### 3. Enable HTTPS

- Back on Netlify → **Domain management** → **HTTPS**
- Click **Verify DNS configuration** then **Provision certificate**
- Done. HTTPS is free via Let's Encrypt.

---

## Updating your site later

**GitHub Pages:** Edit files, commit, and push. Changes go live automatically.

**Netlify (manual deploy):** Drag and drop the updated folder again, or connect a GitHub repo for automatic deploys.

---

## File checklist before going live

- [ ] Replace all `<!-- TODO: ... -->` placeholders in `index.html`
- [ ] Add your photo as `photo.jpg` (square crop, ~400x400px) and uncomment the `<img>` tag
- [ ] Update the `<title>` tag and `<meta name="description">` in the `<head>`
- [ ] Replace the favicon emoji with your own favicon if desired
- [ ] Update the LinkedIn URL in the connect section
- [ ] Update the email address in the connect section
- [ ] Update the copyright year/name in the footer
- [ ] Test on mobile (just open the file in your browser and resize)
