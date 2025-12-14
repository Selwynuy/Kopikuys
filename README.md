# Kopikuys - Coffee Franchise Website

A modern, responsive website for Kopikuys, a premium coffee franchise brand in the Philippines. Built with Next.js 15, featuring smooth animations, interactive menu displays, and comprehensive franchise information.

## 🚀 Features

### Core Sections
- **Hero Section** - Animated landing page with premium coffee imagery and call-to-action
- **Menu Carousel** - Interactive drink showcase with 7 signature series:
  - Coffee Series
  - Milky Series
  - Choco-ey Series
  - Rookie Series
  - Fusion Sensation Series
  - Hot Gold Series
  - Back to Black Series
- **Packages** - Product package offerings
- **Branches** - Location finder with 20+ branches across Luzon and Visayas
- **Franchise** - Comprehensive franchise information including:
  - ₱88,888 franchise package details
  - Benefits and support systems
  - Success statistics
- **Contact** - Customer inquiry form
- **Footer** - Navigation and company information

### Technical Features
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Touch Gestures** - Swipe navigation for mobile menu carousel
- **Modern UI** - Coffee-themed gradient design with Tailwind CSS
- **Performance Optimized** - Next.js 15 with App Router and Image optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React
- **Language**: TypeScript 5
- **Linting**: ESLint with Next.js config

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npx next dev
# or fix the typo in package.json and use:
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Project Structure

```
kopikuys/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main page component
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Hero.tsx           # Landing hero section
│   ├── MenuCarousel.tsx   # Interactive menu display
│   ├── Packages.tsx       # Product packages
│   ├── Branches.tsx       # Location finder
│   ├── Franchise.tsx      # Franchise information
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer component
│   └── About.tsx          # About section
└── public/                # Static assets
    ├── Coffee/           # Coffee product images
    └── Series/           # Series category images
```

## 🎨 Design Highlights

- Coffee-themed color palette with warm gradients
- Animated coffee bean elements
- Smooth scroll navigation between sections
- Interactive menu carousel with series selection
- Branch location cards with regional filtering
- Professional franchise presentation

## 📝 Scripts

- `npm run dev` - Start development server (note: fix typo in package.json first)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

The project is ready to deploy on Vercel or any platform supporting Next.js:

```bash
npm run build
npm run start
```

## 📄 License

Private project - All rights reserved
