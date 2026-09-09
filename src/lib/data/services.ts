export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
  features: string[];
  idealFor: string[];
  pricingNote: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "serv-1",
    slug: "balcony-setup",
    title: "Balcony Green Transformation",
    subtitle: "Turn unused outdoor space into your favourite morning sanctuary.",
    shortDescription: "End-to-end balcony design, plant curation, custom planters, drip irrigation, and continuous maintenance.",
    longDescription: "Whether your balcony is a compact 20-sq-ft apartment nook or an expansive penthouse terrace, we custom-design lush outdoor sanctuaries tailored to your sunlight exposure, wind conditions, and daily lifestyle. From vertical green walls and weather-proof terracotta planters to aromatic herb stations and automated drip irrigation, we handle every detail from design to final planting.",
    heroImage: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1200&q=80",
    steps: [
      {
        number: "01",
        title: "Space & Sun Assessment",
        description: "We evaluate your balcony layout, sun exposure hours, wind patterns, and structural weight allowances."
      },
      {
        number: "02",
        title: "Bespoke Botanical Design",
        description: "We select compatible plant species, planter finishes, floor decking, and irrigation routing to suit your aesthetic."
      },
      {
        number: "03",
        title: "Installation & Planting",
        description: "Our professional horticulturists deliver healthy plants, blend premium potting soil on-site, and install the complete layout."
      },
      {
        number: "04",
        title: "Ongoing Care & Guarantee",
        description: "We provide detailed care routines, a 30-day plant replacement guarantee, and optional bi-weekly maintenance visits."
      }
    ],
    features: [
      "Custom vertical planter walls for tight spaces",
      "Automatic micro-drip irrigation systems",
      "Porous terracotta & lightweight fiber-stone planters",
      "Flowering, aromatic, and edible herb selections",
      "Complimentary plant health check at 30 days"
    ],
    idealFor: [
      "Apartment owners wanting a relaxing outdoor nook",
      "Work-from-home professionals wanting fresh green air",
      "Enthusiasts wanting homegrown fresh culinary herbs",
      "Penthouses and rooftop terraces"
    ],
    pricingNote: "Custom packages start from ₹8,500 depending on balcony dimensions and plant selections."
  },
  {
    id: "serv-2",
    slug: "gardening-maintenance",
    title: "Gardening & Plant Care Services",
    subtitle: "Expert ongoing maintenance for thriving homes and business spaces.",
    shortDescription: "Scheduled pruning, soil aeration, organic fertilizing, and pest management visits by trained horticulturists.",
    longDescription: "Plants need care that evolves with seasons. Our trained plant care specialists visit on a regular schedule to clean foliage, check soil health, apply organic pest preventative tonics, trim dead leaves, and replace tired soil so your greenery remains vibrant year-round without demanding your personal time.",
    heroImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    steps: [
      {
        number: "01",
        title: "Plant Health Audit",
        description: "Comprehensive inspection of all existing plants, pest signs, root conditions, and light placement."
      },
      {
        number: "02",
        title: "Tailored Care Plan",
        description: "We devise a customized bi-weekly or monthly maintenance calendar matching your collection's needs."
      },
      {
        number: "03",
        title: "Regular Horticultural Visits",
        description: "Scheduled visits covering organic foliar feeding, trimming, pest shielding, and soil enrichment."
      }
    ],
    features: [
      "Organic non-toxic pest treatments (safe for pets and kids)",
      "Seasonal pruning and deadheading for optimal shape",
      "Liquid seaweed foliar spray and vermicompost top-dressing",
      "Complimentary replacement for eligible subscribed plants"
    ],
    idealFor: [
      "Busy homeowners with expanding plant collections",
      "Villa gardens and courtyards",
      "Boutique hotels, cafés, and restaurants",
      "Corporate offices and co-working spaces"
    ],
    pricingNote: "Monthly maintenance subscriptions starting at ₹2,499/month."
  },
  {
    id: "serv-3",
    slug: "corporate-greening",
    title: "Corporate & B2B Greenery",
    subtitle: "Transform your workspace into an inspiring, oxygen-rich environment.",
    shortDescription: "Turnkey plant installations, desktop biophilic styling, and maintenance contracts for offices and hospitality venues.",
    longDescription: "Greener workplaces improve focus, reduce absenteeism, and create an impressive, calming impression for clients and employees alike. Leaf Lover partners with leading offices, boutique hotels, restaurants, and retail spaces to provide turnkey indoor landscaping, executive planters, and guaranteed hassle-free weekly maintenance.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    steps: [
      {
        number: "01",
        title: "Workspace Consultation",
        description: "On-site assessment of natural lux levels, air-conditioned zones, traffic flow, and branding palette."
      },
      {
        number: "02",
        title: "Biophilic Design Proposal",
        description: "3D layout visualizations, plant selections tailored to office AC environments, and architectural planter proposals."
      },
      {
        number: "03",
        title: "Turnkey Installation",
        description: "Off-hours quiet setup with floor protection, clean installation, and immediate handover."
      },
      {
        number: "04",
        title: "Zero-Hassle Corporate Care",
        description: "Our uniformed technicians visit weekly during designated maintenance hours to water, shine, and care for every plant."
      }
    ],
    features: [
      "Zero-drip architectural planters preventing floor staining",
      "Plants selected specifically to tolerate continuous air conditioning",
      "Monthly swap guarantee for any declining specimens",
      "Consolidated B2B billing and GST invoicing"
    ],
    idealFor: [
      "Modern tech offices and corporate headquarters",
      "Boutique cafés and fine dining restaurants",
      "Hospitals and wellness clinics",
      "Hotels and co-working spaces"
    ],
    pricingNote: "Custom corporate proposals tailored to space and floor plan requirements."
  }
];
