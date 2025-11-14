# Detailed Travel Group - Luxury Concierge Website

A premium Next.js 14 website for Detailed Travel Group, offering comprehensive luxury travel and concierge services including black car service, private jet charters, VIP airport services, restaurant reservations, and personalized travel experiences.

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Playfair Display (Google Fonts) + System fonts
- **Email**: Resend API (configured but requires serverless deployment)
- **Build**: Static Site Generation (SSG)

## Design System

### Colors
- **Background**: White (#ffffff), Neutral-50 (#fafafa), Neutral-100 (#f5f5f5)
- **Text**: Black (#000000) for headings, Neutral-600 (#525252) for body
- **Borders**: Neutral-200 (#e5e5e5), Neutral-300 (#d4d4d4)
- **Accent**: Black buttons with white text

### Typography
- **Headings**: Playfair Display (serif) - extrabold (800) for H1, bold (700) for H2-H3
- **Body**: System font stack (SF Pro Display, Inter, Segoe UI)
- **Sizes**: 5xl-6xl for H1, 3xl-4xl for H2, xl-2xl for H3

### Component Patterns
All interactive cards use these transitions:
```css
hover:bg-neutral-50
hover:border-neutral-300
hover:-translate-y-1
hover:shadow-lg
transition-all duration-300
```

## Project Structure

```
DTG/
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles & Tailwind
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page
│   ├── services/               # Service pages
│   │   ├── black-car/
│   │   ├── private-jets/
│   │   ├── vip-airport/
│   │   ├── restaurants/
│   │   ├── concierge/
│   │   └── accommodations/
│   └── api/
│       └── quote/route.ts      # Contact form API
├── components/
│   ├── Header.tsx              # Sticky header with dropdowns
│   ├── Footer.tsx              # 4-column footer
│   └── home/                   # Homepage sections
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Features.tsx
│       └── CallToAction.tsx
├── lib/
│   └── structured-data.ts      # SEO schemas
├── public/                     # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
└── package.json
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production

#### Option A: Static Export (Default)
```bash
npm run build
```

This creates a static site in the `/out` directory that can be deployed to any static hosting service (Vercel, Netlify, AWS S3, etc.).

**Note**: API routes won't work with static export. See "Form Handling" section below.

#### Option B: Serverless Deployment
To use the API routes for form submission:

1. Remove `output: 'export'` from `next.config.js`
2. Configure environment variables (see below)
3. Deploy to Vercel, Netlify, or another serverless platform

```bash
npm run build
npm run start
```

## Form Handling

The contact forms currently use a placeholder API route. For production, you have three options:

### Option 1: Use Resend with Serverless Functions

1. Get API key from [resend.com](https://resend.com)
2. Create `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
3. Remove `output: 'export'` from `next.config.js`
4. Uncomment the Resend code in `/app/api/quote/route.ts`
5. Deploy to Vercel or Netlify

### Option 2: Use Third-Party Form Service

Replace the form action with a third-party service:
- [Formspree](https://formspree.io) - Simple form backend
- [Getform](https://getform.io) - Form API service
- [Basin](https://usebasin.com) - Form backend for designers

### Option 3: Custom Backend

Connect forms to your own backend API endpoint.

## Customization

### Update Company Information

1. **Contact Details** - Update in:
   - `components/Header.tsx` - Phone number in CTA button
   - `components/Footer.tsx` - Contact section
   - `app/contact/page.tsx` - Contact information cards
   - `lib/structured-data.ts` - SEO schemas

2. **Branding** - Update in:
   - `components/Header.tsx` - Logo text
   - `app/layout.tsx` - Site title and description
   - `lib/structured-data.ts` - Company name and details

3. **Services** - Edit service pages in `app/services/`

4. **Colors** - Modify `tailwind.config.ts`

### Add New Pages

```bash
# Create new page
mkdir -p app/your-page
touch app/your-page/page.tsx
```

Update navigation in `components/Header.tsx`.

## SEO Features

- ✅ Structured data (Organization, LocalBusiness, WebSite schemas)
- ✅ OpenGraph meta tags
- ✅ Twitter Card support
- ✅ Dynamic page titles
- ✅ Semantic HTML
- ✅ Mobile-responsive design
- ✅ Fast page loads with static generation

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Configure environment variables if using forms
4. Deploy

### Netlify

1. Push code to GitHub
2. Connect to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `out` (for static) or `.next` (for serverless)

### Static Hosting (Cloudflare Pages, AWS S3, etc.)

```bash
npm run build
# Upload the /out directory to your hosting provider
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Static generation for instant page loads
- Optimized fonts with `font-display: swap`
- Minimal JavaScript bundle
- CSS purging with Tailwind

## License

Proprietary - Detailed Travel Group

## Support

For technical support or questions:
- Email: concierge@detailedtravelgroup.com
- Phone: +1 (555) DTG-LUXE
