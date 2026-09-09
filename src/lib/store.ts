import fs from 'fs';
import path from 'path';
import { Product, Order, ServiceInquiry, Category } from './types';
import { initialProducts } from './data/products';
import { categories } from './data/categories';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Helper to read JSON file or fallback
function readJsonFile<T>(filePath: string, fallback: T): T {
  try {
    ensureDataDir();
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(fallback, null, 2), 'utf-8');
      return fallback;
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as T;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return fallback;
  }
}

// Helper to write JSON file
function writeJsonFile<T>(filePath: string, data: T): void {
  try {
    ensureDataDir();
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error);
  }
}

export const ProductStore = {
  getAll: (): Product[] => {
    return readJsonFile<Product[]>(PRODUCTS_FILE, initialProducts);
  },

  getBySlug: (slug: string): Product | undefined => {
    const products = ProductStore.getAll();
    return products.find((p) => p.slug === slug);
  },

  getById: (id: string): Product | undefined => {
    const products = ProductStore.getAll();
    return products.find((p) => p.id === id);
  },

  update: (updatedProduct: Product): Product => {
    const products = ProductStore.getAll();
    const index = products.findIndex((p) => p.id === updatedProduct.id);
    if (index !== -1) {
      products[index] = {
        ...updatedProduct,
        updatedAt: new Date().toISOString(),
      };
      // Auto-update availability based on stock
      if (products[index].stockQuantity <= 0) {
        products[index].availability = 'Out of Stock';
      } else if (products[index].stockQuantity <= 5 && products[index].availability === 'Available') {
        products[index].availability = 'Low Stock';
      }
      writeJsonFile(PRODUCTS_FILE, products);
      return products[index];
    }
    throw new Error(`Product with ID ${updatedProduct.id} not found`);
  },

  create: (newProduct: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Product => {
    const products = ProductStore.getAll();
    const product: Product = {
      ...newProduct,
      id: `prod-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    products.unshift(product);
    writeJsonFile(PRODUCTS_FILE, products);
    return product;
  },

  delete: (id: string): boolean => {
    const products = ProductStore.getAll();
    const filtered = products.filter((p) => p.id !== id);
    if (filtered.length !== products.length) {
      writeJsonFile(PRODUCTS_FILE, filtered);
      return true;
    }
    return false;
  },

  decrementStock: (items: { productId: string; quantity: number }[]): boolean => {
    const products = ProductStore.getAll();
    let hasError = false;

    // Check inventory availability first
    for (const item of items) {
      const prod = products.find((p) => p.id === item.productId);
      if (!prod || prod.stockQuantity < item.quantity || prod.availability === 'Out of Stock') {
        hasError = true;
        break;
      }
    }

    if (hasError) {
      return false;
    }

    // Decrement stock
    for (const item of items) {
      const prod = products.find((p) => p.id === item.productId);
      if (prod) {
        prod.stockQuantity -= item.quantity;
        if (prod.stockQuantity <= 0) {
          prod.availability = 'Out of Stock';
        } else if (prod.stockQuantity <= 5) {
          prod.availability = 'Low Stock';
        }
        prod.updatedAt = new Date().toISOString();
      }
    }

    writeJsonFile(PRODUCTS_FILE, products);
    return true;
  }
};

export const OrderStore = {
  getAll: (): Order[] => {
    return readJsonFile<Order[]>(ORDERS_FILE, []);
  },

  getById: (id: string): Order | undefined => {
    const orders = OrderStore.getAll();
    return orders.find((o) => o.id === id);
  },

  create: (order: Order): Order => {
    const orders = OrderStore.getAll();
    orders.unshift(order);
    writeJsonFile(ORDERS_FILE, orders);
    return order;
  },

  updateStatus: (id: string, status: Order['orderStatus']): Order | undefined => {
    const orders = OrderStore.getAll();
    const order = orders.find((o) => o.id === id);
    if (order) {
      order.orderStatus = status;
      writeJsonFile(ORDERS_FILE, orders);
      return order;
    }
    return undefined;
  }
};

export const InquiryStore = {
  getAll: (): ServiceInquiry[] => {
    return readJsonFile<ServiceInquiry[]>(INQUIRIES_FILE, []);
  },

  create: (inquiry: ServiceInquiry): ServiceInquiry => {
    const inquiries = InquiryStore.getAll();
    inquiries.unshift(inquiry);
    writeJsonFile(INQUIRIES_FILE, inquiries);
    return inquiry;
  },

  updateStatus: (id: string, status: ServiceInquiry['status']): ServiceInquiry | undefined => {
    const inquiries = InquiryStore.getAll();
    const inquiry = inquiries.find((i) => i.id === id);
    if (inquiry) {
      inquiry.status = status;
      writeJsonFile(INQUIRIES_FILE, inquiries);
      return inquiry;
    }
    return undefined;
  }
};

export const CategoryStore = {
  getAll: (): Category[] => {
    return categories;
  },
  getBySlug: (slug: string): Category | undefined => {
    return categories.find((c) => c.slug === slug);
  }
};
