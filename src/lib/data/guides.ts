import { Guide } from "../types";

export const guidesData: Guide[] = [
  {
    id: "guide-1",
    title: "How Often Should You Really Water Your Indoor Plants?",
    slug: "how-often-to-water-indoor-plants",
    excerpt: "Ditch the calendar rule. Learn the finger test, weight check, and subtle signs your foliage uses to ask for a drink.",
    category: "Watering",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80",
    publishedAt: "February 12, 2024",
    featured: true,
    author: "Leaf Lover Botanical Team",
    content: [
      {
        heading: "Why Calendar Watering Fails",
        paragraphs: [
          "One of the most frequent causes of indoor plant mortality is watering strictly on schedule (e.g. 'every Sunday'). Water consumption is dynamic: during cloudy monsoons or winter, plants transpire at a fraction of their summer rate. A calendar does not account for indoor temperature, humidity, planter material, or light.",
          "Overwatering doesn't mean giving too much water in one sitting — it means watering too frequently, denying roots the crucial oxygen pockets they require to breathe."
        ],
        tips: [
          "Always test the soil 2 inches deep with your index finger before pouring water.",
          "Lift the nursery pot: wet soil feels heavy, while thirsty dry soil is strikingly lightweight."
        ]
      },
      {
        heading: "The Golden Rules of Hydration",
        paragraphs: [
          "When it is time to water, water thoroughly until you observe water running through the bottom drainage holes. This flushes built-up fertilizer salts and guarantees the entire root ball receives moisture.",
          "Empty excess runoff sitting in decorative drip trays within 15 minutes to prevent saturated root drownings."
        ],
        tips: [
          "Use room-temperature water. Frigid tap water can shock tender root hairs.",
          "Bottom watering is superb for delicate ferns and African violets."
        ]
      }
    ],
    relatedPlantSlugs: ["snake-plant-zeylanica", "monstera-deliciosa", "peace-lily-sensation"]
  },
  {
    id: "guide-2",
    title: "Understanding Light: Direct vs Bright Indirect Sunlight Demystified",
    slug: "understanding-indoor-plant-light",
    excerpt: "What does 'bright indirect light' actually mean in an apartment? Here is how to find the perfect microclimate for each plant.",
    category: "Sunlight",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=80",
    publishedAt: "January 28, 2024",
    featured: true,
    author: "Leaf Lover Botanical Team",
    content: [
      {
        heading: "Decoding the Botanical Light Spectrum",
        paragraphs: [
          "Plants perceive light very differently than human eyes. Our pupils expand in dim rooms, fooling us into thinking there is plenty of light where a plant is starving for photosynthetic photons.",
          "Bright indirect light means the plant has an unobstructed view of the sky without having direct, harsh sunbeams scorching its foliage."
        ],
        tips: [
          "The Shadow Test: Hold your hand 1 foot above a piece of white paper. A crisp, sharp shadow means direct sun; a soft, diffused shadow means bright indirect light; a blurry silhouette means low light."
        ]
      },
      {
        heading: "Which Plants Belong Where",
        paragraphs: [
          "East-facing windows provide gentle morning sun ideal for Monsteras, Ficus, and flowering Peace Lilies. South or West-facing windows produce hot afternoon sun that must be filtered through sheer curtains for delicate tropicals, or reserved for Bougainvillea, succulents, and Cacti.",
          "North-facing windows offer consistent low to medium indirect light, ideal for Snake Plants and ZZ Plants."
        ]
      }
    ],
    relatedPlantSlugs: ["monstera-deliciosa", "fiddle-leaf-fig", "zz-plant-emerald"]
  },
  {
    id: "guide-3",
    title: "Creating a Thriving Apartment Balcony Garden from Scratch",
    slug: "thriving-apartment-balcony-garden",
    excerpt: "Practical guidance on wind exposure, floor weight allowances, choosing hardy plants, and setting up simple drip watering.",
    category: "Balcony Gardening",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80",
    publishedAt: "January 15, 2024",
    featured: false,
    author: "Leaf Lover Botanical Team",
    content: [
      {
        heading: "Start with Wind and Sun Exposure",
        paragraphs: [
          "Balconies on higher floors experience intense wind shear that dries soil rapidly and tears large, broad leaves. For windy upper floors, choose flexible slender plants like Bougainvillea, Areca Palm, bamboo, and grasses rather than large-leaf tropicals.",
          "Group planters together to establish micro-climates of mutual humidity."
        ]
      },
      {
        heading: "Choosing the Right Planter Materials",
        paragraphs: [
          "Terracotta is heavy and dries fast in sunny balconies. For high railings, fiber-stone or lightweight UV-treated planters reduce weight load while maintaining an architectural stone look."
        ],
        tips: [
          "Ensure all railing hooks are rated for twice the saturated soil weight.",
          "Add wheel caddies under large planters so you can rotate them effortlessly."
        ]
      }
    ],
    relatedPlantSlugs: ["bougainvillea-sunset-coral", "terracotta-fluted-pot", "organic-potting-mix"]
  },
  {
    id: "guide-4",
    title: "Diagnosing Yellow Leaves: The 5 Most Common Reasons",
    slug: "diagnosing-yellow-leaves",
    excerpt: "From overwatering and nutrient deficiency to natural leaf senescence, decode the message behind yellowing foliage.",
    category: "Indoor Plants",
    readTime: "4 min read",
    coverImage: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1000&q=80",
    publishedAt: "February 20, 2024",
    featured: true,
    author: "Leaf Lover Plant Doctor",
    content: [
      {
        heading: "Look at Which Leaves are Yellowing",
        paragraphs: [
          "If the oldest bottom leaves turn yellow one at a time while fresh green leaves continue emerging at the top, this is usually natural shedding. Plants recycle older energy into new growth.",
          "If multiple leaves turn yellow simultaneously and feel soft or translucent, overwatering is almost certainly the cause. Check the roots immediately for mushy brown root rot."
        ],
        tips: [
          "Yellow leaves with green veins (chlorosis) usually signal iron or magnesium deficiency or compacted high-pH soil."
        ]
      }
    ],
    relatedPlantSlugs: ["peace-lily-sensation", "monstera-deliciosa", "liquid-seaweed-fertilizer"]
  }
];
