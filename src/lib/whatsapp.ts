import { siteConfig } from "./config";

export interface WhatsAppMessageOptions {
  type?: 'general' | 'product' | 'balcony' | 'plant-doctor' | 'gardening' | 'business' | 'order';
  productName?: string;
  productPrice?: number;
  productUrl?: string;
  orderId?: string;
  customMessage?: string;
  symptoms?: string[];
}

export function generateWhatsAppLink(options: WhatsAppMessageOptions = {}): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  let message = "Hi Leaf Lover, I'd like to know more about your plants.";

  switch (options.type) {
    case 'product':
      if (options.productName) {
        message = `Hi Leaf Lover, I'm interested in ${options.productName}${options.productPrice ? ` (₹${options.productPrice})` : ''}. Is it currently available?`;
      }
      break;

    case 'balcony':
      message = "Hi Leaf Lover, I'd like to enquire about a balcony garden setup for my space.";
      break;

    case 'plant-doctor':
      if (options.symptoms && options.symptoms.length > 0) {
        message = `Hi Leaf Lover, I need help from your Plant Doctor. My plant has the following symptoms: ${options.symptoms.join(', ')}.`;
      } else {
        message = "Hi Leaf Lover, I need help with diagnosing an issue with my plant.";
      }
      break;

    case 'gardening':
      message = "Hi Leaf Lover, I'd like to request gardening and plant maintenance services.";
      break;

    case 'business':
      message = "Hi Leaf Lover, I'm reaching out regarding corporate / business greenery for our workspace.";
      break;

    case 'order':
      message = `Hi Leaf Lover, I've placed order #${options.orderId}. I'd like to confirm the delivery schedule.`;
      break;

    case 'general':
    default:
      if (options.customMessage) {
        message = options.customMessage;
      }
      break;
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
