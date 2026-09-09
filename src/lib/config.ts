export const siteConfig = {
  name: "Leaf Lover",
  tagline: "Giant company for nature.",
  slogan: "Bring a little more nature home.",
  description: "Premium plants, bespoke balcony setups, plant doctor consultations, and gardening services.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://leaflover.in",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210",
  whatsappDisplay: "+91 98765 43210",
  phone: "+91 98765 43210",
  email: "hello@leaflover.in",
  address: "Leaf Lover Botanical Studio, Green Avenue, Bangalore, India",
  instagram: "https://instagram.com/leaflover_plants",
  currency: "₹",
  deliveryFee: 99,
  freeDeliveryThreshold: 999,
};

export const paymentConfig = {
  provider: process.env.NEXT_PUBLIC_PAYMENT_PROVIDER || "simulated", // 'simulated' | 'razorpay' | 'stripe'
  razorpayKeyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
};
