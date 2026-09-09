# Leaf Lover 🌿

> **"Growing something bigger than a nursery. Our vision: to build a giant company for nature."**

**Leaf Lover** is an editorial botanical commerce and green architecture platform. It goes beyond selling potted greenery by combining curated houseplant retail, turnkey balcony transformations, residential/corporate plant maintenance, and an interactive **Plant Doctor** diagnostic clinic.

Live Repository: [https://github.com/starsailor2/leaf-lover](https://github.com/starsailor2/leaf-lover)

---

## ✨ Features & Architecture

### 1. 🪴 Editorial Botanical Homepage
- **Editorial Hero**: Atmospheric typography, clear brand positioning, dual CTAs, and trust badges.
- **Shop By Need**: 5 visual category pathways (*Home, Office, Beginners, Gifting, Outdoor*).
- **Curated Catalogue Showcase**: Dynamic product grid with real-time pricing in ₹, light and care indicators, and stock badges.
- **Services Hub**: Comprehensive overview of residential and corporate greening.
- **Interactive Balcony Transformation**: Interactive Before/After showcase toggling between bare concrete and lush living sanctuary, complete with a 4-step transformation timeline.
- **Plant Doctor Clinic Teaser**: Visual diagnostic triage hook with common symptoms checklist and 1-click WhatsApp photo consultation.
- **Botanical Library**: Educational care guides carousel.
- **Brand Story & Why Leaf Lover**: Core value pillars (*Carefully Selected Plants, Honest Guidance, From Plant to Space, Real Human Support*).
- **Commercial & B2B Greening**: Solutions for offices, clinics, cafés, and hotels.
- **Community Stories**: Verified customer reviews from apartment balcony owners.

### 2. 🛍️ High-Conversion Commerce Experience
- **Faceted Catalogue (`/shop`)**:
  - Live full-text search.
  - Category filtering, care level badges (*Easy Care, Moderate, High Care*), and sunlight requirements.
  - Stock availability toggle.
  - Curved box sorting dropdown (*Featured, Price: Low to High, Price: High to Low, Name*).
  - Streamlined 3-column responsive card grid.
- **Product Details (`/shop/[slug]`)**:
  - High-resolution gallery with thumbnail switcher.
  - Granular care specifications (Light, Watering, Humidity, Soil, Growth Speed).
  - Live stock status badges (*Available, Low Stock, Out of Stock, Coming Soon*).
  - Direct cart add, instant buy now, and pre-filled WhatsApp inquiry.
  - Curated cross-sells (*Plant → Planter → Soil → Bio-tonic*).
- **Slide-Over Cart (`CartDrawer`)**:
  - Persistent localStorage cart.
  - Dynamic free delivery progress bar (unlocks at ₹999).
- **Frictionless Checkout (`/checkout`)**:
  - Recipient address and pincode capture.
  - Online Payment / Cash on Delivery payment selectors.
  - Real-time stock validation and automatic inventory deduction.
- **Order Success (`/order-success/[orderId]`)**:
  - Detailed receipt with order ID, delivery timeline, and WhatsApp dispatch tracking.

### 3. 🩺 Interactive Plant Doctor Clinic (`/plant-doctor`)
- Interactive diagnostic tool allowing users to select visual symptoms (yellow leaves, drooping stems, pests, brown crispy edges).
- Instant preliminary diagnosis with root causes and botanical first-aid instructions.
- Auto-generates pre-filled WhatsApp messages with selected symptoms so users can send photos directly to horticulturists.

### 4. 🏡 Turnkey Green Services
- **Balcony Setup (`/services/balcony-setup`)**: Detailed 6-step transformation journey and an interactive assessment request form.
- **Gardening & Commercial Care (`/services/gardening`)**: Turnkey maintenance packages for corporate tech parks, offices, and residential gardens.

### 5. ⚙️ Admin Inventory & Leads Hub (`/admin`)
- Real-time KPIs (Total SKUs, Low Stock alerts, Recent Orders, Service Leads).
- Inline product manager: Edit price, stock quantity, stock status, and featured flag with instant save.
- Order and service lead tracking with direct customer WhatsApp triggers.

### 6. 🎨 Editorial Botanical Design System & Animations
- **Palette**:
  - Forest Green: `#183A2B`
  - Leaf Green: `#4F7659`
  - Botanical Cream: `#F7F4EC`
  - Soft Sage: `#E7EDE3`
  - Warm Terracotta: `#B87355`
- **Typography**: `Cormorant Garamond` (editorial serif) & `DM Sans` (clean sans-serif).
- **Curved Box Dropdowns**: Modern curved pill/box triggers with floating glassmorphic rounded menu cards and check indicators.
- **Subtle Micro-Animations**: Smooth `FadeIn` scroll-reveals with staggered delays, floating badges (`animate-float-slow`, `animate-pulse-glow`), smooth scrolling, and subtle card elevation transitions.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & PostCSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Optimization**: [Sharp](https://sharp.pixelplumbing.com/) (native Next.js production optimizer)
- **State Management**: React Context API (`CartContext`) with `localStorage` persistence

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or later
- npm or yarn

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/starsailor2/leaf-lover.git
cd leaf-lover

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Run
```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```text
leaf-lover/
├── public/                    # Static public assets
├── src/
│   ├── app/                   # Next.js 14 App Router (Pages & API routes)
│   │   ├── about/             # Brand story, philosophy & vision
│   │   │   └── page.tsx
│   │   ├── admin/             # Admin dashboard & live stock manager
│   │   │   └── page.tsx
│   │   ├── api/               # Server-side API endpoints
│   │   │   ├── inquiries/     # Lead submissions (balcony & gardening)
│   │   │   │   └── route.ts
│   │   │   ├── orders/        # Order placement & stock deduction
│   │   │   │   └── route.ts
│   │   │   └── products/      # Inventory retrieval & updates
│   │   │       └── route.ts
│   │   ├── checkout/          # Single-page checkout with stock validation
│   │   │   └── page.tsx
│   │   ├── contact/           # Studio location, FAQ accordion & message form
│   │   │   └── page.tsx
│   │   ├── guides/            # Botanical knowledge library
│   │   │   ├── [slug]/        # Editorial guide reader
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── order-success/     # Order receipt & WhatsApp dispatch tracking
│   │   │   └── [orderId]/
│   │   │       └── page.tsx
│   │   ├── plant-doctor/      # Interactive symptom diagnosis clinic
│   │   │   └── page.tsx
│   │   ├── services/          # Services overview hub
│   │   │   ├── balcony-setup/ # Turnkey balcony design & assessment form
│   │   │   │   └── page.tsx
│   │   │   ├── gardening/     # Residential & corporate gardening packages
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── shop/              # Filterable product catalogue
│   │   │   ├── [slug]/        # Detailed plant page with care specs & cross-sells
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css        # Tailwind directives, color tokens & keyframes
│   │   ├── layout.tsx         # Root layout with fonts, cart provider & navbar
│   │   ├── not-found.tsx      # Branded botanical 404 page
│   │   ├── robots.ts          # Search engine crawler directives
│   │   └── sitemap.ts         # Dynamic XML sitemap
│   │
│   ├── components/            # Reusable UI & Layout Components
│   │   ├── cart/              # Slide-over CartDrawer & cart item cards
│   │   │   └── CartDrawer.tsx
│   │   ├── home/              # 12 editorial homepage sections
│   │   │   ├── BalconyTransformation.tsx  # Interactive Before/After showcase
│   │   │   ├── BrandVision.tsx            # Nature company long-term vision
│   │   │   ├── BusinessSection.tsx        # B2B office & commercial greenery
│   │   │   ├── FeaturedPlants.tsx         # Curated specimens product grid
│   │   │   ├── FinalCTA.tsx               # Closing conversion call-to-action
│   │   │   ├── Hero.tsx                   # Atmospheric hero with dual CTAs
│   │   │   ├── PlantCareEducation.tsx     # Botanical guides preview cards
│   │   │   ├── PlantDoctorTeaser.tsx      # Clinic triage banner & symptom hook
│   │   │   ├── ServicesSection.tsx        # 4 core service cards
│   │   │   ├── ShopByNeed.tsx             # 5 visual lifestyle category cards
│   │   │   ├── Testimonials.tsx           # Customer reviews & ratings
│   │   │   └── WhyLeafLover.tsx           # 4 core botanical value pillars
│   │   ├── layout/            # Navigation & footer components
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── Navbar.tsx
│   │   ├── product/           # ProductCard & gallery components
│   │   │   └── ProductCard.tsx
│   │   └── ui/                # Custom botanical UI primitives
│   │       ├── AvailabilityBadge.tsx
│   │       ├── CurvedDropdown.tsx         # Rounded glassmorphic select dropdown
│   │       ├── FadeIn.tsx                 # Scroll-reveal intersection observer
│   │       └── WhatsAppButton.tsx         # Contextual pre-filled WhatsApp link
│   │
│   ├── context/               # Global State Management
│   │   └── CartContext.tsx    # Persistent cart with localStorage sync
│   │
│   ├── data/                  # Static Data & Seed State
│   │   └── products.json      # Product database backup
│   │
│   └── lib/                   # Utilities, Config & Data Layer
│       ├── config.ts          # Site metadata & WhatsApp configuration
│       ├── store.ts           # Server-side mock database
│       ├── types.ts           # TypeScript interfaces & types
│       ├── utils.ts           # Helper functions & price formatting
│       ├── whatsapp.ts        # Dynamic contextual WhatsApp link generator
│       └── data/              # Mock dataset (products, categories, guides)
│           ├── categories.ts
│           ├── guides.ts
│           ├── products.ts
│           └── services.ts
│
├── .env.example               # Environment variables template
├── .gitignore                 # Excludes node_modules, .next, and env files
├── instruction.md             # Complete brand & architecture specifications
├── next.config.mjs            # Next.js image optimization config
├── package.json               # Dependencies & scripts
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # Botanical color palette & custom themes
└── tsconfig.json              # TypeScript configuration
```

---

## 🚢 Deployment Guidelines

### Frontend: Vercel / Netlify
1. Import the Git repository in **Vercel** or **Netlify**.
2. Framework preset will automatically detect **Next.js**.
3. Build command: `npm run build`
4. Output directory: `.next`
5. Configure environment variables (optional `NEXT_PUBLIC_WHATSAPP_NUMBER`, etc.).

### Backend API: Render / Heroku
If decoupling the Next.js API routes into a separate Node/Express microservice in the future:
1. Connect the repository to **Render** or **Heroku**.
2. Set build command: `npm run build`
3. Set start command: `npm run start`

---

## 📄 License
MIT © Leaf Lover
