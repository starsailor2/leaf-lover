'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CurvedDropdown } from '@/components/ui/CurvedDropdown';
import { FadeIn } from '@/components/ui/FadeIn';

export default function GardeningServicePage() {
  const [inquiryType, setInquiryType] = useState<'residential' | 'corporate'>('corporate');
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    location: '',
    businessType: 'Office / Tech Park',
    numberOfSpaces: '1 – 3 Zones',
    budget: '₹10,000 – ₹25,000 / month',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceType: inquiryType === 'corporate' ? 'business-greening' : 'gardening-maintenance',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          message: formData.message,
          businessDetails: inquiryType === 'corporate' ? {
            companyName: formData.companyName,
            businessType: formData.businessType,
            numberOfSpaces: formData.numberOfSpaces,
            approxBudget: formData.budget,
          } : undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please reach out via WhatsApp directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-forest/60 mb-6">
          <Link href="/services" className="hover:text-forest">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-forest font-semibold">Gardening & Commercial Care</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <FadeIn direction="right" className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
              Professional Horticultural Care
            </span>
            <h1 className="editorial-heading text-4xl sm:text-5xl font-bold text-forest leading-tight">
              Keep your botanical spaces vibrant, lush & effortlessly healthy.
            </h1>
            <p className="text-forest/75 text-base sm:text-lg leading-relaxed">
              Whether you are an office looking for weekly turnkey plant maintenance or a homeowner needing seasonal repotting, pruning, and organic pest shielding, our trained horticulturists take care of every leaf.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-forest/80">
                <CheckCircle2 className="w-4 h-4 text-leaf" />
                <span>Uniformed, verified horticulturists</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-forest/80">
                <CheckCircle2 className="w-4 h-4 text-leaf" />
                <span>100% organic, child-safe bio tonics</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-forest/80">
                <CheckCircle2 className="w-4 h-4 text-leaf" />
                <span>Complimentary replacement guarantee</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-forest/10 bg-cream-dark">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Corporate plant styling by Leaf Lover"
                fill
                priority
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* Form Container */}
        <FadeIn direction="up" className="max-w-3xl mx-auto bg-white/80 rounded-2xl p-6 sm:p-10 border border-forest/10 shadow-soft">
          
          <div className="flex items-center justify-center gap-2 mb-8 p-1.5 bg-forest/5 rounded-xl border border-forest/10">
            <button
              onClick={() => setInquiryType('corporate')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                inquiryType === 'corporate' ? 'bg-forest text-cream shadow' : 'text-forest/70 hover:text-forest'
              }`}
            >
              Corporate & Commercial Spaces
            </button>
            <button
              onClick={() => setInquiryType('residential')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                inquiryType === 'residential' ? 'bg-forest text-cream shadow' : 'text-forest/70 hover:text-forest'
              }`}
            >
              Residential Home Gardening
            </button>
          </div>

          {submitted ? (
            <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-serif text-xl font-bold text-emerald-900">
                Service Request Received!
              </h4>
              <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name}. Our gardening director will review your requirements and get in touch with you shortly.
              </p>
              <div className="pt-2">
                <WhatsAppButton
                  variant="primary"
                  options={{
                    type: 'business',
                    customMessage: `Hi Leaf Lover, I just submitted a ${inquiryType} gardening inquiry.`
                  }}
                >
                  Confirm on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-md flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-forest/80 mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                  />
                </div>

                {inquiryType === 'corporate' && (
                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      name="companyName"
                      required={inquiryType === 'corporate'}
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Acme Technologies"
                      className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-forest/80 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-forest/80 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-forest/80 mb-1">Location / Area</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Outer Ring Road, Bangalore"
                    className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                  />
                </div>

                {inquiryType === 'corporate' && (
                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">Business Type</label>
                    <CurvedDropdown
                      value={formData.businessType}
                      onChange={(val) => setFormData({ ...formData, businessType: val })}
                      options={[
                        { value: 'Office / Tech Park', label: 'Office / Tech Park' },
                        { value: 'Café / Restaurant', label: 'Café / Restaurant' },
                        { value: 'Hotel / Hospitality', label: 'Hotel / Hospitality' },
                        { value: 'Hospital / Healthcare', label: 'Hospital / Healthcare' },
                        { value: 'Retail Boutique', label: 'Retail Boutique' },
                      ]}
                      pill={false}
                      className="w-full"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-forest/80 mb-1">Requirements / Message</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your existing plants, space size, or goals..."
                  className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 bg-forest hover:bg-forest-800 disabled:opacity-50 text-cream font-semibold text-sm rounded-md shadow transition-colors flex items-center justify-center gap-2"
              >
                {loading ? 'Submitting...' : 'Request Gardening Service Consultation'}
              </button>
            </form>
          )}

        </FadeIn>

      </div>
    </div>
  );
}
