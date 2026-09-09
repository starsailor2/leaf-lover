# LEAF LOVER

# WEBSITE IMPLEMENTATION & QA CHECKLIST

> **Purpose:** This document is the master implementation checklist and QA specification for the Leaf Lover website.
>
> **Use this file with an AI coding agent inside the existing website repository.**
>
> The AI must inspect the existing codebase and compare the actual implementation against every requirement in this document.
>
> **IMPORTANT:** Do not assume something is implemented simply because a component, route, button, or placeholder exists. Verify the actual user experience, functionality, responsiveness, data flow, accessibility, and visual implementation.

---

# 0. MASTER INSTRUCTION TO THE AI AGENT

You are auditing and improving an existing website for **Leaf Lover**.

The website is intended to become the digital foundation of a premium plant, gardening and nature company.

Your task is to:

1. Inspect the existing repository.
2. Understand the current architecture.
3. Identify what has already been implemented.
4. Compare it against this checklist.
5. Mark every requirement as:

   * `[x] COMPLETE`
   * `[~] PARTIAL`
   * `[ ] MISSING`
   * `[!] BROKEN`
   * `[N/A] NOT APPLICABLE`
6. Do not mark something complete merely because a visual placeholder exists.
7. Test functionality wherever possible.
8. Fix missing or broken items when explicitly instructed to implement fixes.
9. Preserve existing good work.
10. Do not unnecessarily rewrite the entire application.
11. Do not introduce duplicate systems when an existing implementation can be extended.
12. Keep the design language consistent across all pages.
13. Ensure desktop, tablet and mobile experiences are intentionally designed.
14. Do not fabricate business information, testimonials, reviews, statistics or claims.
15. Do not hard-code data that should come from the backend/CMS.
16. Never expose secrets in frontend code.

---

# 1. PROJECT NORTH STAR

## Brand

**Leaf Lover**

## Vision

> Giant company for nature.

## Core purpose

Leaf Lover should not feel like a generic nursery website.

It should feel like:

> **A modern nature brand + premium plant store + gardening service company + plant-care platform.**

---

# 2. PRIMARY BUSINESS OBJECTIVES

The website must support all of the following:

* [ ] Build awareness for Leaf Lover
* [ ] Showcase plants
* [ ] Showcase pots and planters
* [ ] Showcase seeds
* [ ] Showcase soil and fertilizers
* [ ] Showcase gardening guidance
* [ ] Showcase Plant Doctor support
* [ ] Promote balcony setup
* [ ] Promote gardening services
* [ ] Support home delivery
* [ ] Allow customers to contact Leaf Lover through WhatsApp
* [ ] Allow customers to call Leaf Lover
* [ ] Allow customers to submit enquiries
* [ ] Allow customers to order products online
* [ ] Support online payment
* [ ] Support real-time product availability
* [ ] Allow Leaf Lover to manage products, prices and images
* [ ] Provide a foundation for future scaling

---

# PHASE 0 — CODEBASE DISCOVERY & BASELINE AUDIT

## Objective

Understand what already exists before changing anything.

### Tasks

* [ ] Inspect project structure.
* [ ] Identify frontend framework.
* [ ] Identify backend framework.
* [ ] Identify database.
* [ ] Identify authentication system.
* [ ] Identify payment integration.
* [ ] Identify image/storage system.
* [ ] Identify CMS/admin system.
* [ ] Identify routing structure.
* [ ] Identify design system.
* [ ] Identify reusable components.
* [ ] Identify global CSS/Tailwind configuration.
* [ ] Identify environment variables.
* [ ] Identify API routes.
* [ ] Identify database schema.
* [ ] Identify current product model.
* [ ] Identify order model.
* [ ] Identify service enquiry model.
* [ ] Identify current navigation.
* [ ] Identify current homepage.
* [ ] Identify all existing pages.
* [ ] Identify mobile navigation.
* [ ] Identify checkout implementation.
* [ ] Identify WhatsApp implementation.
* [ ] Identify SEO implementation.
* [ ] Identify analytics implementation if present.

### Do NOT

* [ ] Do not rebuild the project before understanding it.
* [ ] Do not replace the framework unnecessarily.
* [ ] Do not delete working functionality.
* [ ] Do not duplicate components unnecessarily.

### Deliverable

Create an internal audit report containing:

```text
Technology Stack
Architecture
Existing Pages
Existing Components
Existing Features
Database
Integrations
Current Design System
Major Gaps
Potential Technical Risks
```

---

# PHASE 1 — BRAND & DESIGN SYSTEM

## Objective

Establish a consistent Leaf Lover visual language.

---

## 1.1 Brand personality

Verify the design communicates:

* [ ] Natural
* [ ] Warm
* [ ] Premium
* [ ] Elegant
* [ ] Trustworthy
* [ ] Knowledgeable
* [ ] Calm
* [ ] Modern
* [ ] Human
* [ ] Approachable

---

## 1.2 Things the design must NOT feel like

* [ ] Generic nursery template
* [ ] Cheap e-commerce store
* [ ] Cartoon website
* [ ] Overly rustic website
* [ ] Corporate SaaS website
* [ ] Generic green website
* [ ] Overly colorful marketplace
* [ ] Artificial/over-designed website

---

## 1.3 Color system

Verify centralized design tokens exist.

Primary:

```text
Forest Green
#183A2B
```

Secondary:

```text
Leaf Green
#4F7659
```

Background:

```text
Warm Botanical Cream
#F7F4EC
```

Secondary background:

```text
Soft Sage
#E7EDE3
```

Accent:

```text
Muted Terracotta
#B87355
```

Text:

```text
#18211C
```

Muted text:

```text
#667067
```

White:

```text
#FFFFFF
```

Checklist:

* [ ] Colors are centralized.
* [ ] Colors are reused consistently.
* [ ] Green is not overused.
* [ ] Backgrounds feel warm and natural.
* [ ] Accent color is restrained.
* [ ] Text has sufficient contrast.

---

## 1.4 Typography

Verify:

* [ ] Display typography has editorial character.
* [ ] Body typography is highly readable.
* [ ] Typography hierarchy is consistent.
* [ ] Heading sizes scale responsively.
* [ ] Line lengths are comfortable.
* [ ] Font loading is optimized.
* [ ] No excessive font weights.

Preferred direction:

```text
Display:
Cormorant Garamond / DM Serif Display / Playfair Display

Interface:
Inter / Manrope / DM Sans
```

---

## 1.5 Spacing

Verify:

* [ ] Consistent spacing scale
* [ ] Consistent section padding
* [ ] Consistent card spacing
* [ ] Consistent container widths
* [ ] No random margins
* [ ] No inconsistent vertical rhythm

Recommended maximum content width:

```text
1280px
```

---

## 1.6 Border radius

Verify consistent radius system.

Suggested:

```text
8px
14px
24px
32px
```

Do not randomly mix many radius values.

---

# PHASE 2 — GLOBAL LAYOUT

## Objective

Create a consistent application shell.

---

## 2.1 Desktop Navbar

Required:

* [ ] Leaf Lover logo
* [ ] Shop
* [ ] Services
* [ ] Plant Doctor
* [ ] Gardening Guide
* [ ] About
* [ ] Contact
* [ ] WhatsApp CTA
* [ ] Shop Plants CTA

Verify:

* [ ] Navigation is clear.
* [ ] Active page is visually indicated.
* [ ] Hover states exist.
* [ ] Keyboard navigation works.
* [ ] Header remains visually stable.
* [ ] Logo links to homepage.

---

## 2.2 Mobile Navigation

Required:

* [ ] Mobile menu
* [ ] Clear navigation hierarchy
* [ ] Shop
* [ ] Services
* [ ] Plant Doctor
* [ ] Guide
* [ ] About
* [ ] Contact
* [ ] WhatsApp

Recommended mobile quick actions:

```text
Home
Shop
Services
WhatsApp
Menu
```

Verify:

* [ ] Navigation is easy to operate with one hand.
* [ ] Tap targets are sufficiently large.
* [ ] Menu opens/closes correctly.
* [ ] Menu does not cause layout issues.
* [ ] Body scroll behavior is correct.

---

## 2.3 Footer

Required sections:

### Explore

* [ ] Shop
* [ ] Services
* [ ] Plant Doctor
* [ ] Gardening Guide
* [ ] About

### Help

* [ ] Contact
* [ ] Shipping
* [ ] Returns
* [ ] FAQs

### Connect

* [ ] WhatsApp
* [ ] Phone
* [ ] Instagram
* [ ] Email

### Brand

* [ ] Short Leaf Lover description
* [ ] Vision/brand statement

### Optional

* [ ] Newsletter signup

---

# PHASE 3 — HOMEPAGE

## Objective

The homepage must communicate Leaf Lover's value within seconds.

---

# 3.1 HERO

Required:

* [ ] Large high-quality plant imagery
* [ ] Strong headline
* [ ] Supporting copy
* [ ] Primary CTA
* [ ] Secondary CTA
* [ ] WhatsApp/contact action

Example direction:

> Bring a little more nature home.

Supporting direction:

> Plants, planters, gardening guidance and spaces designed to grow with you.

CTAs:

* [ ] Explore Plants
* [ ] Talk to a Plant Expert

Verify:

* [ ] Hero immediately communicates what Leaf Lover does.
* [ ] Hero is visually premium.
* [ ] Text does not overwhelm imagery.
* [ ] Mobile hero works properly.
* [ ] CTA hierarchy is clear.

---

# 3.2 SHOP BY NEED

Required categories:

* [ ] For Your Home
* [ ] For Your Office
* [ ] For Beginners
* [ ] For Gifting
* [ ] For Outdoor Spaces

Verify:

* [ ] Each card has relevant imagery.
* [ ] Each card is clickable.
* [ ] Each card leads to relevant products/categories.
* [ ] Copy is concise.
* [ ] Cards work on mobile.

---

# 3.3 FEATURED PLANTS

Required:

* [ ] Product grid
* [ ] Product image
* [ ] Product name
* [ ] Price
* [ ] Availability
* [ ] Short description
* [ ] Add to Cart
* [ ] WhatsApp enquiry

Verify:

* [ ] Products come from actual product data.
* [ ] Prices are not hard-coded into UI.
* [ ] Availability is dynamic.
* [ ] Out-of-stock products cannot be purchased.

---

# 3.4 SERVICES SECTION

Headline direction:

> We don't just sell plants. We help you grow with them.

Required services:

* [ ] Balcony Setup
* [ ] Gardening Services
* [ ] Plant Doctor
* [ ] Plant Care Guidance

Verify:

* [ ] Services are visually differentiated from products.
* [ ] Each service has a CTA.
* [ ] Service pages/forms actually work.

---

# 3.5 BALCONY TRANSFORMATION

Required:

* [ ] Strong visual section
* [ ] Before/after or equivalent visual storytelling
* [ ] Balcony setup explanation
* [ ] Consultation CTA

CTA:

> Plan My Balcony

Verify:

* [ ] CTA opens enquiry flow.
* [ ] Mobile version is strong.
* [ ] Images are optimized.

---

# 3.6 PLANT DOCTOR

Required:

* [ ] Problem-focused headline
* [ ] Explanation
* [ ] Plant-help CTA
* [ ] WhatsApp photo/help CTA

Example:

> Something wrong with your plant?

Verify:

* [ ] Feature is understandable.
* [ ] User knows what to do next.
* [ ] WhatsApp flow works.

Future-ready:

* [ ] Architecture allows future image upload.
* [ ] Architecture allows future AI diagnosis.
* [ ] AI diagnosis is NOT falsely represented as currently available.

---

# 3.7 GARDENING GUIDE

Required categories:

* [ ] Indoor Plants
* [ ] Watering
* [ ] Sunlight
* [ ] Soil
* [ ] Fertilizers
* [ ] Pest Control
* [ ] Balcony Gardening
* [ ] Beginner Gardening

Verify:

* [ ] Cards are clickable.
* [ ] Article pages exist or are correctly marked as future content.
* [ ] SEO-friendly structure exists.

---

# 3.8 WHY LEAF LOVER

Recommended propositions:

* [ ] Carefully Selected Plants
* [ ] Honest Guidance
* [ ] From Plant to Space
* [ ] Human Support

Verify:

* [ ] No unsupported superlatives.
* [ ] Claims are truthful.
* [ ] Section communicates differentiation.

---

# 3.9 BUSINESS SECTION

Required target customers:

* [ ] Offices
* [ ] Businesses
* [ ] Cafés
* [ ] Restaurants
* [ ] Hotels
* [ ] Hospitals

Services:

* [ ] Office plants
* [ ] Indoor landscaping
* [ ] Balcony/terrace greenery
* [ ] Maintenance
* [ ] Plant replacement
* [ ] Custom installations

CTA:

> Talk to Leaf Lover

---

# 3.10 TESTIMONIALS

Verify:

* [ ] Testimonial component exists if testimonials are available.
* [ ] Testimonials are genuine.
* [ ] No fake customer names.
* [ ] No fabricated ratings.
* [ ] Empty state exists if there are no testimonials.

---

# 3.11 BRAND VISION

Required emotional section.

Direction:

> Growing something bigger than a nursery.

Vision:

> Giant company for nature.

Verify:

* [ ] Vision is clearly communicated.
* [ ] Section feels emotionally strong.
* [ ] Section doesn't sound exaggerated or corporate.

---

# 3.12 FINAL CTA

Required:

> Ready to bring more nature into your space?

Buttons:

* [ ] Shop Plants
* [ ] Talk on WhatsApp

---

# PHASE 4 — SHOP

## Objective

Make product discovery effortless.

---

## 4.1 Categories

Required:

* [ ] Indoor Plants
* [ ] Outdoor Plants
* [ ] Pots & Planters
* [ ] Seeds
* [ ] Soil
* [ ] Fertilizers
* [ ] Plant Care
* [ ] Gardening Essentials

---

## 4.2 Search

Verify:

* [ ] Search exists.
* [ ] Search returns relevant products.
* [ ] Search handles no results.
* [ ] Search is usable on mobile.
* [ ] Search is performant.

---

## 4.3 Filters

Required or architecturally supported:

* [ ] Category
* [ ] Price
* [ ] Availability
* [ ] Care level
* [ ] Light requirement

---

## 4.4 Sorting

Support:

* [ ] Featured
* [ ] Price low → high
* [ ] Price high → low
* [ ] Newest
* [ ] Availability/relevance where appropriate

---

## 4.5 Product Grid

Verify:

* [ ] Responsive grid
* [ ] Good image ratios
* [ ] Consistent card heights
* [ ] Product name
* [ ] Price
* [ ] Availability
* [ ] Care information
* [ ] Add to Cart
* [ ] WhatsApp

---

# PHASE 5 — PRODUCT DETAIL

## Required

### Product Gallery

* [ ] Main image
* [ ] Additional images
* [ ] Image zoom/lightbox if appropriate
* [ ] Mobile swipe/gallery support

### Product Information

* [ ] Name
* [ ] Price
* [ ] Availability
* [ ] Description
* [ ] Quantity
* [ ] Add to Cart
* [ ] Buy Now
* [ ] WhatsApp

### Plant Care

* [ ] Light
* [ ] Watering
* [ ] Humidity
* [ ] Soil
* [ ] Difficulty
* [ ] Growth information

### Related Products

Support relationships such as:

```text
Snake Plant
↓
Planter
↓
Soil
↓
Fertilizer
```

---

# PHASE 6 — INVENTORY & REAL-TIME AVAILABILITY

## Objective

Inventory must reflect actual backend data.

Required states:

* [ ] Available
* [ ] Low Stock
* [ ] Out of Stock
* [ ] Coming Soon

Verify:

* [ ] Inventory is backend-driven.
* [ ] Product availability is consistent across Shop and Product Detail.
* [ ] Checkout validates stock.
* [ ] Out-of-stock items cannot be purchased.
* [ ] Quantity cannot exceed available stock.
* [ ] Inventory updates correctly after successful order.
* [ ] Race conditions are handled where applicable.
* [ ] No fake "real-time" badge is shown if the system is not actually real-time.

---

# PHASE 7 — CART

Required:

* [ ] Add item
* [ ] Remove item
* [ ] Increase quantity
* [ ] Decrease quantity
* [ ] Product subtotal
* [ ] Delivery fee
* [ ] Total
* [ ] Checkout CTA
* [ ] Empty cart state

Verify:

* [ ] Cart persists appropriately.
* [ ] Cart count updates instantly.
* [ ] Cart works on mobile.
* [ ] Prices are recalculated server-side where required.
* [ ] Invalid inventory is handled.

Empty state:

> Your cart is looking a little empty.

CTA:

> Explore Plants

---

# PHASE 8 — CHECKOUT

Required customer information:

* [ ] Name
* [ ] Phone
* [ ] WhatsApp number
* [ ] Email
* [ ] Delivery address
* [ ] City
* [ ] Pincode
* [ ] Order notes

Verify:

* [ ] Form validation
* [ ] Required field validation
* [ ] Phone validation
* [ ] Email validation
* [ ] Pincode validation
* [ ] Error messages
* [ ] Loading states
* [ ] Success state
* [ ] Failed payment state

---

# PHASE 9 — ONLINE PAYMENT

Requirement:

> Online payment must be supported.

Verify:

* [ ] Payment provider is properly integrated.
* [ ] Secrets are server-side only.
* [ ] Payment status is verified server-side.
* [ ] Webhooks are verified.
* [ ] Successful payment creates/updates order.
* [ ] Failed payment does not incorrectly mark order as paid.
* [ ] Cancelled payment is handled.
* [ ] Duplicate payment callbacks are handled.
* [ ] Order confirmation is shown only after appropriate verification.

---

# PHASE 10 — ORDER SYSTEM

Order model must support:

```text
id
customer
items
subtotal
delivery_fee
total
payment_status
order_status
created_at
updated_at
```

Order statuses:

* [ ] Pending
* [ ] Confirmed
* [ ] Processing
* [ ] Ready
* [ ] Out for Delivery
* [ ] Delivered
* [ ] Cancelled

Payment statuses:

* [ ] Pending
* [ ] Paid
* [ ] Failed
* [ ] Refunded

Verify:

* [ ] Orders persist.
* [ ] Product quantities are captured.
* [ ] Prices at time of order are preserved.
* [ ] Customer information is preserved.
* [ ] Payment state is preserved.

---

# PHASE 11 — WHATSAPP SYSTEM

WhatsApp is a major conversion channel.

## General message

Support a dynamically generated message such as:

> Hi Leaf Lover, I'd like to know more about your plants.

## Product message

Automatically include:

* [ ] Product name
* [ ] Product URL
* [ ] Optional price

Example:

> Hi Leaf Lover, I'm interested in [PRODUCT]. Is it currently available?

## Balcony message

> Hi Leaf Lover, I'd like to enquire about a balcony setup.

## Plant Doctor

> Hi Leaf Lover, I need help with my plant.

Verify:

* [ ] WhatsApp number is centrally configurable.
* [ ] No duplicate hard-coded numbers.
* [ ] Product WhatsApp links generate correct messages.
* [ ] Mobile opens WhatsApp correctly.
* [ ] Desktop fallback works.
* [ ] Links are accessible.

---

# PHASE 12 — SERVICES

Create a complete Services experience.

---

# 12.1 Balcony Setup

Required:

* [ ] Hero
* [ ] Problem/benefit explanation
* [ ] Consultation
* [ ] Space assessment
* [ ] Plant selection
* [ ] Design
* [ ] Installation
* [ ] Maintenance
* [ ] Gallery
* [ ] CTA

CTA:

> Request Balcony Consultation

---

# 12.2 Gardening Services

Target:

* [ ] Homes
* [ ] Offices
* [ ] Cafés
* [ ] Restaurants
* [ ] Hotels
* [ ] Hospitals

Potential services:

* [ ] Plant installation
* [ ] Maintenance
* [ ] Indoor landscaping
* [ ] Outdoor gardening
* [ ] Plant replacement
* [ ] Custom projects

---

# 12.3 Plant Doctor

Required:

* [ ] Explanation
* [ ] Problem submission
* [ ] Plant name
* [ ] Problem description
* [ ] Photo upload architecture
* [ ] WhatsApp contact
* [ ] Expert support flow

Do not claim AI diagnosis unless actually implemented.

---

# PHASE 13 — SERVICE ENQUIRY SYSTEM

Service inquiry model:

```text
id
service_type
name
phone
email
location
message
attachments
status
created_at
```

Required status:

* [ ] New
* [ ] Contacted
* [ ] In Progress
* [ ] Completed
* [ ] Closed

---

# PHASE 14 — INTELLIGENT FORMS

## General enquiry

Fields:

* [ ] Name
* [ ] Phone
* [ ] Email
* [ ] Requirement
* [ ] Message

---

## Balcony setup

Fields:

* [ ] Name
* [ ] Phone
* [ ] Location
* [ ] Balcony type
* [ ] Approximate size
* [ ] Current condition
* [ ] Desired style
* [ ] Budget range
* [ ] Photos
* [ ] Message

---

## Business enquiry

Fields:

* [ ] Company name
* [ ] Contact person
* [ ] Business type
* [ ] Location
* [ ] Number of spaces
* [ ] Requirement
* [ ] Approximate budget
* [ ] Message

Verify:

* [ ] Forms are validated.
* [ ] Spam protection/rate limiting exists where appropriate.
* [ ] Success state exists.
* [ ] Error state exists.
* [ ] Submission is persisted or routed appropriately.

---

# PHASE 15 — PLANT CARE / GARDENING GUIDE

Required architecture:

```text
Guide
├── Indoor Plants
├── Watering
├── Sunlight
├── Soil
├── Fertilizers
├── Pest Control
├── Balcony Gardening
└── Beginner Gardening
```

Verify:

* [ ] Article listing
* [ ] Article detail
* [ ] Category pages
* [ ] Search-friendly URLs
* [ ] SEO metadata
* [ ] Related products
* [ ] Related guides

---

# PHASE 16 — ABOUT LEAF LOVER

Required:

* [ ] Brand story
* [ ] Philosophy
* [ ] Mission
* [ ] Vision
* [ ] Nature-focused positioning
* [ ] Human story
* [ ] CTA

Core vision:

> Giant company for nature.

Do not invent founder stories, milestones or achievements.

---

# PHASE 17 — CONTACT

Required:

* [ ] WhatsApp
* [ ] Phone
* [ ] Email
* [ ] Contact form
* [ ] Location/service-area information if available
* [ ] Business hours if available
* [ ] Social links

If information is unavailable:

* [ ] Do not fabricate it.
* [ ] Use a clearly marked configuration placeholder.

---

# PHASE 18 — PRODUCT MANAGEMENT / ADMIN

Leaf Lover must eventually be able to manage products without editing source code.

Required architecture:

```text
Admin
 ↓
Database
 ↓
API
 ↓
Website
```

Admin capabilities:

* [ ] Add product
* [ ] Edit product
* [ ] Delete/archive product
* [ ] Upload images
* [ ] Change price
* [ ] Update stock
* [ ] Change availability
* [ ] Assign category
* [ ] Edit description
* [ ] Edit plant-care information
* [ ] Mark featured
* [ ] Manage categories

---

# PHASE 19 — ADMIN ORDERS

Admin should eventually support:

* [ ] View orders
* [ ] Search orders
* [ ] Filter orders
* [ ] View order details
* [ ] Update order status
* [ ] View payment status
* [ ] View customer information

---

# PHASE 20 — ADMIN ENQUIRIES

Admin should support:

* [ ] View enquiries
* [ ] Filter by service
* [ ] Search
* [ ] View customer information
* [ ] View attachments
* [ ] Update enquiry status

---

# PHASE 21 — DATA MODEL

Minimum Product:

```text
id
name
slug
category
description
price
images
availability
stock_quantity
care_level
light_requirement
watering
soil
featured
created_at
updated_at
```

Category:

```text
id
name
slug
description
image
```

Order:

```text
id
customer
items
subtotal
delivery_fee
total
payment_status
order_status
created_at
updated_at
```

Customer:

```text
id
name
phone
email
address
city
pincode
```

Service Inquiry:

```text
id
service_type
name
phone
email
location
message
attachments
status
created_at
updated_at
```

---

# PHASE 22 — IMAGE SYSTEM

Verify:

* [ ] Images are optimized.
* [ ] Responsive images are used.
* [ ] Lazy loading is implemented where appropriate.
* [ ] Images have meaningful alt text.
* [ ] Product images maintain consistent aspect ratios.
* [ ] Images do not cause layout shift.
* [ ] CDN/storage is used where appropriate.
* [ ] Large original images are not unnecessarily delivered to mobile users.

Visual direction:

* [ ] Natural
* [ ] Warm
* [ ] Real
* [ ] Editorial
* [ ] Premium
* [ ] Tactile

Avoid:

* [ ] Generic stock photography
* [ ] Excessively artificial imagery
* [ ] Random inconsistent image styles

---

# PHASE 23 — RESPONSIVE DESIGN

Test at minimum:

```text
320px
375px
425px
768px
1024px
1280px
1440px+
```

Verify:

* [ ] No horizontal scrolling.
* [ ] No clipped content.
* [ ] No overlapping elements.
* [ ] Navigation works.
* [ ] Product grids adapt.
* [ ] Forms work.
* [ ] Checkout works.
* [ ] Images scale correctly.
* [ ] Typography scales correctly.
* [ ] CTA buttons remain accessible.
* [ ] Footer works.

Important:

Do not simply shrink desktop layouts.

Mobile layouts must be intentionally designed.

---

# PHASE 24 — ANIMATION & MOTION

Animations should feel premium and calm.

Required where appropriate:

* [ ] Page-load transitions
* [ ] Scroll reveal
* [ ] Image hover
* [ ] Button hover
* [ ] Cart feedback
* [ ] Form transitions
* [ ] Navigation transitions

Verify:

* [ ] Animations are subtle.
* [ ] Animations do not delay interaction.
* [ ] Animations do not harm accessibility.
* [ ] Reduced-motion preferences are respected.

Avoid:

* [ ] Excessive parallax
* [ ] Constant motion
* [ ] Bouncing UI
* [ ] Distracting particles
* [ ] Heavy animation libraries for simple effects

---

# PHASE 25 — MICRO-INTERACTIONS

Verify all interactive elements have:

* [ ] Default state
* [ ] Hover state
* [ ] Focus state
* [ ] Active state
* [ ] Loading state where appropriate
* [ ] Success state where appropriate
* [ ] Error state where appropriate
* [ ] Disabled state where appropriate

Examples:

* [ ] Add to Cart feedback
* [ ] Cart count update
* [ ] WhatsApp action
* [ ] Form submission
* [ ] Checkout
* [ ] Payment
* [ ] Inventory changes

---

# PHASE 26 — ACCESSIBILITY

Verify:

* [ ] Semantic HTML
* [ ] Correct heading hierarchy
* [ ] Keyboard navigation
* [ ] Visible focus states
* [ ] Proper button labels
* [ ] Form labels
* [ ] Error announcements where appropriate
* [ ] Image alt text
* [ ] Sufficient contrast
* [ ] Accessible navigation
* [ ] Accessible dialogs/drawers
* [ ] Accessible cart
* [ ] Reduced-motion support

Never communicate information using color alone.

Example:

Do not show only a red dot for "Out of Stock."

Use:

> Out of Stock

plus an appropriate visual indicator.

---

# PHASE 27 — SEO

Every major page must have:

* [ ] Unique title
* [ ] Meta description
* [ ] Canonical URL
* [ ] Open Graph metadata
* [ ] Social preview image
* [ ] Correct heading structure
* [ ] SEO-friendly URL
* [ ] Relevant structured data where appropriate

Product pages should support:

* [ ] Product schema
* [ ] Price
* [ ] Availability
* [ ] Product image
* [ ] Product name
* [ ] Description

---

# PHASE 28 — URL STRUCTURE

Preferred structure:

```text
/shop
/shop/indoor-plants
/shop/outdoor-plants
/shop/snake-plant
/services
/services/balcony-setup
/services/gardening
/plant-doctor
/guides
/guides/how-often-to-water-indoor-plants
/about
/contact
```

Verify:

* [ ] URLs are readable.
* [ ] URLs are stable.
* [ ] Slugs are SEO-friendly.
* [ ] No unnecessary IDs are exposed in public URLs.

---

# PHASE 29 — SITEMAP & CRAWLING

Verify:

* [ ] Sitemap exists.
* [ ] Sitemap contains relevant pages.
* [ ] Robots configuration exists.
* [ ] No accidental no-index directives.
* [ ] Private/admin pages are not indexed.
* [ ] Canonical URLs are correct.

---

# PHASE 30 — PERFORMANCE

Verify:

* [ ] Fast initial load
* [ ] Optimized images
* [ ] Lazy loading
* [ ] Responsive images
* [ ] Code splitting where appropriate
* [ ] Minimal unnecessary JavaScript
* [ ] No unnecessary dependencies
* [ ] Fonts optimized
* [ ] No layout shift
* [ ] No blocking resources where avoidable

Target:

> Excellent Lighthouse performance.

---

# PHASE 31 — SECURITY

Verify:

* [ ] Server-side validation
* [ ] Input sanitization
* [ ] Authentication
* [ ] Authorization
* [ ] Secure environment variables
* [ ] Payment verification
* [ ] Webhook verification
* [ ] Rate limiting
* [ ] Secure file uploads
* [ ] Admin route protection

Never expose:

```text
Database credentials
Payment secrets
Private API keys
Service-role keys
Authentication secrets
```

in frontend/client code.

---

# PHASE 32 — ERROR HANDLING

Create friendly errors.

Do not expose raw technical errors.

Example:

> Something went wrong. Please try again or talk to us on WhatsApp.

Required:

* [ ] 404 page
* [ ] Generic error page
* [ ] API error states
* [ ] Form errors
* [ ] Payment errors
* [ ] Checkout errors
* [ ] Inventory errors
* [ ] Network errors

---

# PHASE 33 — EMPTY STATES

Required:

### Empty cart

> Your cart is looking a little empty.

CTA:

> Explore Plants

### No search results

Provide:

* [ ] Explanation
* [ ] Clear search
* [ ] Browse categories
* [ ] WhatsApp assistance

### No products

> We're growing our collection. Check back soon.

### Out of stock

> This plant is currently resting. Ask us on WhatsApp and we'll let you know when it's back.

---

# PHASE 34 — TRUST & CONTENT QUALITY

Verify:

* [ ] No fabricated testimonials.
* [ ] No fabricated reviews.
* [ ] No fabricated customer numbers.
* [ ] No fabricated company statistics.
* [ ] No fabricated awards.
* [ ] No fake certifications.
* [ ] No unsupported "best" claims.
* [ ] No fake locations.
* [ ] No invented founder information.

Use placeholders only when clearly marked for content replacement.

---

# PHASE 35 — CONVERSION AUDIT

Every major section must have a logical next action.

Verify:

```text
Hero
→ Shop Plants / WhatsApp

Product
→ Add to Cart / WhatsApp

Service
→ Request Consultation

Balcony Setup
→ Plan My Balcony

Plant Doctor
→ Get Plant Help

Guide
→ Explore Related Plants

Business
→ Talk to Leaf Lover

Final CTA
→ Shop / WhatsApp
```

Avoid:

* [ ] Random CTAs
* [ ] Too many competing CTAs
* [ ] Dead-end sections
* [ ] Buttons that do nothing
* [ ] Links to missing pages

---

# PHASE 36 — B2C EXPERIENCE

Verify the website works for:

### Home / Flat Owner

User should be able to:

* [ ] Discover suitable plants.
* [ ] Filter products.
* [ ] See price.
* [ ] See availability.
* [ ] Buy.
* [ ] Ask questions.
* [ ] Request balcony setup.

### Plant Lover

User should be able to:

* [ ] Discover plants.
* [ ] Learn plant care.
* [ ] Compare options.
* [ ] Ask Plant Doctor.
* [ ] Purchase care products.

### Beginner

User should be able to:

* [ ] Find beginner-friendly plants.
* [ ] Understand care requirements.
* [ ] Get guidance.

---

# PHASE 37 — B2B EXPERIENCE

Verify businesses can quickly understand that Leaf Lover serves:

* [ ] Offices
* [ ] Cafés
* [ ] Restaurants
* [ ] Hotels
* [ ] Hospitals

They should be able to:

* [ ] Understand services.
* [ ] Request consultation.
* [ ] Submit business enquiry.
* [ ] Contact Leaf Lover.

---

# PHASE 38 — FUTURE SCALABILITY

Architecture should allow future implementation of:

* [ ] Plant subscriptions
* [ ] Corporate plant maintenance
* [ ] Plant rental
* [ ] AI Plant Doctor
* [ ] Loyalty program
* [ ] Plant marketplace
* [ ] Gardening courses
* [ ] Plant community
* [ ] Plant-care reminders
* [ ] Personalized plant recommendations
* [ ] Multi-city delivery
* [ ] B2B portal
* [ ] Franchise expansion
* [ ] Mobile application

These features do NOT need to be implemented now.

The codebase should avoid architectural decisions that make them unnecessarily difficult later.

---

# PHASE 39 — CODE QUALITY

Verify:

* [ ] TypeScript types are meaningful.
* [ ] No unnecessary `any`.
* [ ] Components are reusable.
* [ ] Business logic is separated from UI.
* [ ] API logic is separated from presentation.
* [ ] Database logic is centralized.
* [ ] Constants/configuration are centralized.
* [ ] Environment variables are centralized.
* [ ] No repeated hard-coded business information.
* [ ] No duplicated components serving the same purpose.
* [ ] No dead code.
* [ ] No unused dependencies.
* [ ] No console errors.
* [ ] No obvious performance anti-patterns.

---

# PHASE 40 — TESTING

Test:

## Navigation

* [ ] Every navbar link
* [ ] Every footer link
* [ ] Every CTA
* [ ] Mobile navigation

## Commerce

* [ ] Product browsing
* [ ] Search
* [ ] Filters
* [ ] Product details
* [ ] Cart
* [ ] Checkout
* [ ] Payment

## Communication

* [ ] WhatsApp
* [ ] Phone
* [ ] Forms
* [ ] Email if implemented

## Services

* [ ] Balcony setup
* [ ] Gardening services
* [ ] Plant Doctor

## Responsive

* [ ] Mobile
* [ ] Tablet
* [ ] Desktop

## Accessibility

* [ ] Keyboard
* [ ] Screen reader semantics
* [ ] Contrast
* [ ] Focus

---

# PHASE 41 — VISUAL QA

Perform a visual review of every page.

Look specifically for:

* [ ] Misaligned elements
* [ ] Inconsistent spacing
* [ ] Incorrect typography
* [ ] Broken responsive layouts
* [ ] Oversized headings
* [ ] Tiny text
* [ ] Inconsistent cards
* [ ] Bad image crops
* [ ] Excessive whitespace
* [ ] Insufficient whitespace
* [ ] Weak CTA hierarchy
* [ ] Inconsistent buttons
* [ ] Inconsistent colors
* [ ] Inconsistent border radii
* [ ] Broken animations
* [ ] Mobile overflow
* [ ] Footer inconsistencies

---

# PHASE 42 — FINAL PAGE CHECKLIST

Every page must answer:

### 5-second test

Can a new visitor understand what this page is about within five seconds?

### 10-second test

Can they identify the next action?

### Mobile test

Does the page feel intentionally designed for mobile?

### Brand test

Does the page look like Leaf Lover?

### Conversion test

Does the page lead somewhere useful?

### Trust test

Does the page feel legitimate?

### Accessibility test

Can the page be navigated without a mouse?

---

# PHASE 43 — FINAL PRODUCTION CHECK

Before declaring the website complete:

* [ ] No broken routes.
* [ ] No broken images.
* [ ] No console errors.
* [ ] No TypeScript errors.
* [ ] No build errors.
* [ ] No broken API calls.
* [ ] No exposed secrets.
* [ ] No fake content.
* [ ] No dead buttons.
* [ ] No dead links.
* [ ] No mobile overflow.
* [ ] Checkout tested.
* [ ] Payment tested.
* [ ] Inventory tested.
* [ ] WhatsApp tested.
* [ ] Forms tested.
* [ ] SEO checked.
* [ ] Accessibility checked.
* [ ] Performance checked.
* [ ] Error states checked.
* [ ] Empty states checked.

---

# PHASE 44 — FINAL AI AUDIT REPORT

After auditing the repository, generate a report in this format:

```text
# LEAF LOVER IMPLEMENTATION AUDIT

Audit Date:
Project Version:

## OVERALL SCORE

Design: XX%
UX: XX%
Commerce: XX%
Services: XX%
Accessibility: XX%
SEO: XX%
Performance: XX%
Security: XX%
Scalability: XX%

Overall: XX%

---

# PHASE STATUS

Phase 0 — Codebase Discovery: COMPLETE / PARTIAL / MISSING
Phase 1 — Brand & Design: COMPLETE / PARTIAL / MISSING
Phase 2 — Global Layout: COMPLETE / PARTIAL / MISSING
Phase 3 — Homepage: COMPLETE / PARTIAL / MISSING
Phase 4 — Shop: COMPLETE / PARTIAL / MISSING
Phase 5 — Product Detail: COMPLETE / PARTIAL / MISSING
Phase 6 — Inventory: COMPLETE / PARTIAL / MISSING
Phase 7 — Cart: COMPLETE / PARTIAL / MISSING
Phase 8 — Checkout: COMPLETE / PARTIAL / MISSING
Phase 9 — Payment: COMPLETE / PARTIAL / MISSING
Phase 10 — Orders: COMPLETE / PARTIAL / MISSING
Phase 11 — WhatsApp: COMPLETE / PARTIAL / MISSING
Phase 12 — Services: COMPLETE / PARTIAL / MISSING
Phase 13 — Service Enquiries: COMPLETE / PARTIAL / MISSING
Phase 14 — Forms: COMPLETE / PARTIAL / MISSING
Phase 15 — Gardening Guide: COMPLETE / PARTIAL / MISSING
Phase 16 — About: COMPLETE / PARTIAL / MISSING
Phase 17 — Contact: COMPLETE / PARTIAL / MISSING
Phase 18 — Product Admin: COMPLETE / PARTIAL / MISSING
Phase 19 — Order Admin: COMPLETE / PARTIAL / MISSING
Phase 20 — Enquiry Admin: COMPLETE / PARTIAL / MISSING
Phase 21 — Data Model: COMPLETE / PARTIAL / MISSING
Phase 22 — Images: COMPLETE / PARTIAL / MISSING
Phase 23 — Responsive: COMPLETE / PARTIAL / MISSING
Phase 24 — Animation: COMPLETE / PARTIAL / MISSING
Phase 25 — Micro-interactions: COMPLETE / PARTIAL / MISSING
Phase 26 — Accessibility: COMPLETE / PARTIAL / MISSING
Phase 27 — SEO: COMPLETE / PARTIAL / MISSING
Phase 28 — URLs: COMPLETE / PARTIAL / MISSING
Phase 29 — Sitemap: COMPLETE / PARTIAL / MISSING
Phase 30 — Performance: COMPLETE / PARTIAL / MISSING
Phase 31 — Security: COMPLETE / PARTIAL / MISSING
Phase 32 — Errors: COMPLETE / PARTIAL / MISSING
Phase 33 — Empty States: COMPLETE / PARTIAL / MISSING
Phase 34 — Content Quality: COMPLETE / PARTIAL / MISSING
Phase 35 — Conversion: COMPLETE / PARTIAL / MISSING
Phase 36 — B2C: COMPLETE / PARTIAL / MISSING
Phase 37 — B2B: COMPLETE / PARTIAL / MISSING
Phase 38 — Scalability: COMPLETE / PARTIAL / MISSING
Phase 39 — Code Quality: COMPLETE / PARTIAL / MISSING
Phase 40 — Testing: COMPLETE / PARTIAL / MISSING
Phase 41 — Visual QA: COMPLETE / PARTIAL / MISSING
Phase 42 — Final Page QA: COMPLETE / PARTIAL / MISSING
Phase 43 — Production QA: COMPLETE / PARTIAL / MISSING

---

# CRITICAL ISSUES

List all issues that could prevent production launch.

1.
2.
3.

---

# HIGH PRIORITY

1.
2.
3.

---

# MEDIUM PRIORITY

1.
2.
3.

---

# LOW PRIORITY / POLISH

1.
2.
3.

---

# RECOMMENDED NEXT ACTIONS

1.
2.
3.
```

---

# PHASE 45 — IMPLEMENTATION PRIORITY

When fixing the existing website, use this order:

## P0 — Critical

Fix immediately:

* Broken navigation
* Broken checkout
* Broken payment
* Security vulnerabilities
* Broken inventory
* Data loss
* Exposed secrets
* Major mobile failures

## P1 — Core Experience

Then fix:

* Homepage
* Shop
* Product detail
* Cart
* WhatsApp
* Services
* Forms
* Mobile UX

## P2 — Growth

Then implement:

* SEO
* Gardening Guide
* B2B experience
* Content architecture
* Product recommendations
* Structured data

## P3 — Polish

Finally:

* Animation
* Micro-interactions
* Visual refinements
* Advanced transitions
* Performance optimization
* Design details

---

# FINAL RULE

Do not consider Leaf Lover complete because all pages technically exist.

Leaf Lover is complete only when:

```text
Beautiful
      +
Usable
      +
Fast
      +
Accessible
      +
Searchable
      +
Purchasable
      +
Contactable
      +
Manageable
      +
Scalable
```

all work together.

The ultimate test is:

> **Would a real person discover Leaf Lover, understand what it offers, find the right plant or service, trust the business, contact the team or purchase a product — without needing assistance?**

If the answer is not clearly YES, the website is not finished.

---

# DEFINITION OF DONE

Leaf Lover can be considered production-ready only when:

* [ ] All P0 issues are resolved.
* [ ] All core pages are functional.
* [ ] Core e-commerce flow works.
* [ ] Online payment works.
* [ ] Inventory works.
* [ ] WhatsApp works.
* [ ] Service enquiry flows work.
* [ ] Product management works or has a production-ready backend architecture.
* [ ] Mobile experience is polished.
* [ ] Accessibility baseline is met.
* [ ] SEO baseline is met.
* [ ] Performance is acceptable.
* [ ] Security baseline is met.
* [ ] No fabricated content exists.
* [ ] No broken links exist.
* [ ] No console/build errors exist.
* [ ] Final visual QA is complete.
* [ ] Final implementation audit has been generated.

**Leaf Lover is not a template.**

It is the beginning of a digital ecosystem for a company whose ambition is:

> **Giant company for nature.**
