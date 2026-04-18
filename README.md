# VisitiQ Landing Page — Next.js Package

This is a publish-ready Next.js package for the VisitiQ landing page.

## Included
- App Router structure
- Final landing page in `app/page.tsx`
- Embedded base64 image assets in `app/images.ts`
- SEO metadata in `app/layout.tsx`
- Tailwind setup
- Ready for Vercel deployment

## Local run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run start
```

## Deploy to Vercel
1. Create a new GitHub repository.
2. Upload all files from this package to the repository root.
3. Go to Vercel and choose **Add New Project**.
4. Import the GitHub repository.
5. Keep the default framework detection as **Next.js**.
6. Click **Deploy**.

## Custom domain
1. In Vercel, open the deployed project.
2. Go to **Settings > Domains**.
3. Add your domain, for example `visitiq.com`.
4. Update your DNS records with your domain provider as instructed by Vercel.
5. SSL will be provisioned automatically.

## Recommended next steps
- Connect the Contact Sales and Request a Demo buttons to real destinations.
- Add a favicon and social sharing image.
- Replace any placeholder regional copy if needed.
- Add analytics such as Google Analytics or LinkedIn Insight Tag.
