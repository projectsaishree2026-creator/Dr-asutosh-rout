# Dr. Asutosh Rout — Doctor Portfolio Website

Premium, production-ready multi-page doctor portfolio built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## 🚀 Quick Start

```bash
npm install
npm run dev       # Development: http://localhost:3000
npm run build     # Production build
npm run start     # Serve production build
```

## 📂 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, About Preview, Services, Why Us, Testimonials, Blogs, CTA |
| `/about` | Full biography, qualifications, clinical values |
| `/services` | All 6 specializations with detailed treatment info |
| `/blogs` | Health articles listing + individual blog pages |
| `/patient-corner` | FAQs, visit guidelines, conditions reference |
| `/contact` | Appointment form, clinic info, map |

## 🎨 Design System

- **Fonts**: Playfair Display (display) + DM Sans (body)
- **Colors**: Ink navy `#0B1C2C`, Azure `#1558B0`, Teal `#0D9488`
- **Theme**: Light, clean, premium medical

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router, SSG/SSR)
- **Styling**: Tailwind CSS v3 with custom design tokens
- **Animation**: Framer Motion — scroll reveals, page transitions, hover states
- **Icons**: Lucide React
- **Images**: next/image with WebP optimization
- **SEO**: Next.js Metadata API, per-page meta, Open Graph

## 📁 Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout with Navbar + Footer
  page.tsx              # Home page
  about/page.tsx        # About page
  services/page.tsx     # Services page
  blogs/                # Blog listing + detail
  patient-corner/       # Patient Corner
  contact/              # Contact + appointment form
components/
  layout/               # Navbar, Footer, StickyContact
  sections/home/        # Hero, AboutPreview, ServicesOverview, etc.
  ui/                   # PageHeader, SectionLabel
  animations/           # Reveal, StaggerParent, StaggerChild
data/
  site.ts               # All doctor data, services, testimonials, FAQs
public/images/          # Doctor photos (WebP)
```

## 📞 Doctor Details

- **Name**: Dr. Asutosh Rout
- **Specialization**: T.B. Chest & Asthma Specialist
- **Qualifications**: MBBS, MD (Pulmonary Medicine), SCB Medical College
- **Clinic**: Sai shree polyclinic, Cuttack
- **Phone**: +91 7008512773

Update `data/site.ts` to change any doctor information across the entire site.

## 🔧 Customization

1. **Doctor info** → `data/site.ts`
2. **Colors** → `tailwind.config.ts`
3. **Images** → replace files in `public/images/`
4. **Blog content** → `app/blogs/[slug]/page.tsx` → `blogContent` object
5. **FAQs** → `data/site.ts` → `faqs` array

## 📦 Deploy

```bash
# Vercel (recommended)
npx vercel

# Or export static HTML
npm run build && npm run export
```
