export type AvailabilityStatus = 'Available' | 'Low Stock' | 'Out of Stock' | 'Coming Soon';

export type CareLevel = 'Easy Care' | 'Moderate' | 'High Care';

export type LightRequirement = 'Low Light' | 'Medium / Indirect' | 'Bright Indirect' | 'Direct Sunlight';

export interface Product {
  id: string;
  name: string;
  botanicalName?: string;
  slug: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  availability: AvailabilityStatus;
  stockQuantity: number;
  careLevel: CareLevel;
  lightRequirement: LightRequirement;
  watering: string;
  humidity?: string;
  soil: string;
  difficulty?: string;
  growthSpeed?: string;
  size?: string;
  featured?: boolean;
  bestSeller?: boolean;
  suitableFor?: ('home' | 'office' | 'beginner' | 'gifting' | 'outdoor')[];
  tags?: string[];
  relatedProductSlugs?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  orderNotes?: string;
}

export interface Order {
  id: string;
  customer: CustomerDetails;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  paymentMethod: 'online' | 'cod';
  paymentStatus: 'pending' | 'paid' | 'failed';
  orderStatus: 'received' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}

export interface BalconyInquiryDetails {
  balconyType: string;
  approxSize: string;
  currentCondition: string;
  desiredStyle: string;
  budgetRange: string;
  sunlightHours: string;
}

export interface BusinessInquiryDetails {
  companyName: string;
  businessType: string;
  numberOfSpaces: string;
  approxBudget: string;
}

export interface ServiceInquiry {
  id: string;
  serviceType: 'balcony-setup' | 'gardening-maintenance' | 'plant-doctor' | 'business-greening' | 'general';
  name: string;
  phone: string;
  email: string;
  location: string;
  message: string;
  balconyDetails?: BalconyInquiryDetails;
  businessDetails?: BusinessInquiryDetails;
  plantDoctorDetails?: {
    plantName?: string;
    symptoms: string[];
    sunlightExposure?: string;
    wateringFrequency?: string;
  };
  status: 'new' | 'contacted' | 'in_progress' | 'completed';
  createdAt: string;
}

export interface Guide {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: 'Indoor Plants' | 'Watering' | 'Sunlight' | 'Soil & Nutrition' | 'Pest Control' | 'Balcony Gardening' | 'Beginners';
  readTime: string;
  coverImage: string;
  publishedAt: string;
  featured?: boolean;
  author: string;
  content: {
    heading: string;
    paragraphs: string[];
    tips?: string[];
  }[];
  relatedPlantSlugs?: string[];
}
