'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Package,
  ShoppingBag,
  Users,
  AlertTriangle,
  CheckCircle2,
  Save,
  MessageCircle,
  ExternalLink,
  Plus,
  RefreshCw
} from 'lucide-react';
import { Product, Order, ServiceInquiry, AvailabilityStatus } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';
import { initialProducts } from '@/lib/data/products';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'inquiries'>('products');
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [inquiries, setInquiries] = useState<ServiceInquiry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Fetch data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [prodRes, orderRes, inqRes] = await Promise.all([
        fetch('/api/products').catch(() => null),
        fetch('/api/orders').catch(() => null),
        fetch('/api/inquiries').catch(() => null),
      ]);

      if (prodRes && prodRes.ok) {
        const pData = await prodRes.json();
        setProducts(pData.products || initialProducts);
      } else {
        setProducts(initialProducts);
      }

      if (orderRes && orderRes.ok) {
        const oData = await orderRes.json();
        setOrders(oData.orders || []);
      }

      if (inqRes && inqRes.ok) {
        const iData = await inqRes.json();
        setInquiries(iData.inquiries || []);
      }
    } catch (e) {
      console.error(e);
      setProducts(initialProducts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleProductChange = (id: string, field: keyof Product, value: any) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const updated = { ...p, [field]: value };
          // Auto update availability if stock hits 0
          if (field === 'stockQuantity') {
            const qty = Number(value);
            if (qty <= 0) updated.availability = 'Out of Stock';
            else if (qty <= 5 && updated.availability === 'Available') updated.availability = 'Low Stock';
            else if (qty > 5 && updated.availability === 'Out of Stock') updated.availability = 'Available';
          }
          return updated;
        }
        return p;
      })
    );
  };

  const handleSaveProduct = async (product: Product) => {
    setSavingId(product.id);
    try {
      const res = await fetch('/api/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });

      if (!res.ok) throw new Error('Save failed');
      setNotification(`Updated "${product.name}" successfully!`);
      setTimeout(() => setNotification(null), 3000);
    } catch (e) {
      alert('Failed to save product changes.');
    } finally {
      setSavingId(null);
    }
  };

  const lowStockCount = products.filter((p) => p.stockQuantity <= 5 && p.availability !== 'Out of Stock').length;
  const outOfStockCount = products.filter((p) => p.availability === 'Out of Stock').length;

  return (
    <div className="min-h-screen bg-stone-100/70 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <div>
            <span className="text-xs uppercase tracking-widest text-leaf font-bold">
              Operations & Inventory Hub
            </span>
            <h1 className="editorial-heading text-3xl font-bold text-forest mt-0.5">
              Leaf Lover Admin Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-lg transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Notification Banner */}
        {notification && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        {/* Overview Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
            <span className="text-xs text-stone-500 font-medium flex items-center gap-1.5">
              <Package className="w-4 h-4 text-leaf" />
              Total Catalog SKUs
            </span>
            <p className="text-2xl font-bold text-forest">{products.length}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
            <span className="text-xs text-stone-500 font-medium flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Low Stock Alerts
            </span>
            <p className="text-2xl font-bold text-amber-700">{lowStockCount}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
            <span className="text-xs text-stone-500 font-medium flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4 text-forest" />
              Recent Orders
            </span>
            <p className="text-2xl font-bold text-forest">{orders.length}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
            <span className="text-xs text-stone-500 font-medium flex items-center gap-1.5">
              <Users className="w-4 h-4 text-terracotta" />
              Service Inquiries
            </span>
            <p className="text-2xl font-bold text-forest">{inquiries.length}</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 gap-2">
          <button
            onClick={() => setActiveTab('products')}
            className={`py-3 px-5 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'products'
                ? 'border-forest text-forest'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Product & Inventory ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-3 px-5 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'orders'
                ? 'border-forest text-forest'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Orders ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`py-3 px-5 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'inquiries'
                ? 'border-forest text-forest'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Service Leads ({inquiries.length})
          </button>
        </div>

        {/* TAB 1: Products Table */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-stone-200 flex items-center justify-between">
              <h2 className="font-serif text-lg font-bold text-forest">Live Catalogue & Stock</h2>
              <span className="text-xs text-stone-500">Edit fields and click Save to update store in real time</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-stone-700">
                <thead className="bg-stone-50 text-stone-500 uppercase tracking-wider font-semibold border-b border-stone-200">
                  <tr>
                    <th className="p-4">Plant / Product</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Price (₹)</th>
                    <th className="p-4">Stock Qty</th>
                    <th className="p-4">Availability</th>
                    <th className="p-4">Featured</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-stone-50/70 transition-colors">
                      
                      {/* Product Name & Thumbnail */}
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-stone-100 flex-shrink-0 border border-stone-200">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-serif font-bold text-forest">{product.name}</p>
                            <p className="text-[10px] text-stone-500 italic">{product.botanicalName}</p>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="p-4">
                        <span className="px-2.5 py-1 bg-stone-100 rounded-full text-[11px] font-medium text-stone-700">
                          {product.category}
                        </span>
                      </td>

                      {/* Price Input */}
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <span>₹</span>
                          <input
                            type="number"
                            value={product.price}
                            onChange={(e) => handleProductChange(product.id, 'price', Number(e.target.value))}
                            className="w-20 px-2 py-1 bg-white border border-stone-300 rounded font-semibold text-stone-900"
                          />
                        </div>
                      </td>

                      {/* Stock Quantity Input */}
                      <td className="p-4">
                        <input
                          type="number"
                          value={product.stockQuantity}
                          onChange={(e) => handleProductChange(product.id, 'stockQuantity', Number(e.target.value))}
                          className={`w-16 px-2 py-1 bg-white border rounded font-semibold ${
                            product.stockQuantity <= 5 ? 'border-amber-400 text-amber-700' : 'border-stone-300 text-stone-900'
                          }`}
                        />
                      </td>

                      {/* Availability Selector */}
                      <td className="p-4">
                        <select
                          value={product.availability}
                          onChange={(e) => handleProductChange(product.id, 'availability', e.target.value as AvailabilityStatus)}
                          className="px-2 py-1 bg-white border border-stone-300 rounded text-xs font-medium cursor-pointer"
                        >
                          <option value="Available">Available</option>
                          <option value="Low Stock">Low Stock</option>
                          <option value="Out of Stock">Out of Stock</option>
                          <option value="Coming Soon">Coming Soon</option>
                        </select>
                      </td>

                      {/* Featured Checkbox */}
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={product.featured || false}
                          onChange={(e) => handleProductChange(product.id, 'featured', e.target.checked)}
                          className="accent-forest w-4 h-4 cursor-pointer"
                        />
                      </td>

                      {/* Save Action */}
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleSaveProduct(product)}
                          disabled={savingId === product.id}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-forest hover:bg-forest-800 disabled:opacity-50 text-cream text-xs font-semibold rounded shadow transition-colors"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>{savingId === product.id ? 'Saving...' : 'Save'}</span>
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: Orders */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden p-6 space-y-4">
            <h2 className="font-serif text-lg font-bold text-forest">Customer Orders</h2>

            {orders.length === 0 ? (
              <div className="p-12 text-center text-stone-500 space-y-2">
                <ShoppingBag className="w-10 h-10 mx-auto text-stone-400" />
                <p className="font-medium text-sm">No orders received yet.</p>
                <p className="text-xs">Customer orders placed through the website will appear here in real time.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-stone-700">
                  <thead className="bg-stone-50 text-stone-500 uppercase tracking-wider font-semibold border-b border-stone-200">
                    <tr>
                      <th className="p-3">Order ID</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Items</th>
                      <th className="p-3">Total</th>
                      <th className="p-3">Payment</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">WhatsApp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {orders.map((o) => (
                      <tr key={o.id}>
                        <td className="p-3 font-bold text-forest">{o.id}</td>
                        <td className="p-3">
                          <p className="font-semibold text-stone-900">{o.customer.name}</p>
                          <p className="text-stone-500 text-[11px]">{o.customer.phone} • {o.customer.city}</p>
                        </td>
                        <td className="p-3">
                          {o.items.map((it) => (
                            <div key={it.product.id} className="text-[11px]">
                              {it.quantity}x {it.product.name}
                            </div>
                          ))}
                        </td>
                        <td className="p-3 font-semibold text-stone-900">{formatPrice(o.total)}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            o.paymentStatus === 'paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {o.paymentStatus}
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-[11px] font-medium">
                            {o.orderStatus}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <a
                            href={`https://wa.me/${o.customer.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${o.customer.name}, this is Leaf Lover regarding your order #${o.id}.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#128C7E] hover:underline text-xs font-semibold"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Chat</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: Inquiries */}
        {activeTab === 'inquiries' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden p-6 space-y-4">
            <h2 className="font-serif text-lg font-bold text-forest">Consultation & Service Leads</h2>

            {inquiries.length === 0 ? (
              <div className="p-12 text-center text-stone-500 space-y-2">
                <Users className="w-10 h-10 mx-auto text-stone-400" />
                <p className="font-medium text-sm">No service inquiries yet.</p>
                <p className="text-xs">Balcony, gardening, and business greening inquiries submitted via forms will appear here.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-forest text-sm">{inq.name}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-forest/10 text-forest font-semibold uppercase text-[10px]">
                        {inq.serviceType}
                      </span>
                    </div>
                    <div className="text-stone-600 flex flex-wrap gap-4">
                      <span>Phone: <strong>{inq.phone}</strong></span>
                      {inq.email && <span>Email: <strong>{inq.email}</strong></span>}
                      {inq.location && <span>Location: <strong>{inq.location}</strong></span>}
                    </div>
                    {inq.message && (
                      <p className="p-2.5 bg-white rounded border border-stone-200 text-stone-800">
                        {inq.message}
                      </p>
                    )}
                    <div className="pt-2 flex justify-end">
                      <a
                        href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${inq.name}, thank you for reaching out to Leaf Lover regarding your ${inq.serviceType} consultation.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white rounded text-xs font-semibold"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Message on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
