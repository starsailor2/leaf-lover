'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, MessageCircle, AlertCircle } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CurvedDropdown } from '@/components/ui/CurvedDropdown';
import { FadeIn } from '@/components/ui/FadeIn';

export default function BalconySetupPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    balconyType: 'Covered Apartment Balcony',
    approxSize: 'Under 50 sq.ft (Standard)',
    currentCondition: 'Empty / Concrete',
    desiredStyle: 'Lush Urban Jungle & Privacy',
    budgetRange: '₹15,000 – ₹30,000',
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
          serviceType: 'balcony-setup',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          message: formData.message,
          balconyDetails: {
            balconyType: formData.balconyType,
            approxSize: formData.approxSize,
            currentCondition: formData.currentCondition,
            desiredStyle: formData.desiredStyle,
            budgetRange: formData.budgetRange,
            sunlightHours: 'Direct Sun (3+ hrs)',
          },
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
          <span className="text-forest font-semibold">Balcony Setup</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <FadeIn direction="right" className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
              Bespoke Green Architecture
            </span>
            <h1 className="editorial-heading text-4xl sm:text-5xl font-bold text-forest leading-tight">
              Transform your balcony into a living botanical sanctuary.
            </h1>
            <p className="text-forest/75 text-base sm:text-lg leading-relaxed">
              We design, plant, and install turnkey apartment balcony gardens crafted to withstand wind, maximize limited square footage, and create privacy with thriving living greenery.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-forest/80">
                <CheckCircle2 className="w-4 h-4 text-leaf" />
                <span>Space-saving vertical trellises</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-forest/80">
                <CheckCircle2 className="w-4 h-4 text-leaf" />
                <span>Lightweight architectural planters</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-forest/80">
                <CheckCircle2 className="w-4 h-4 text-leaf" />
                <span>Automated micro-drip watering</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-forest/10 bg-cream-dark">
              <Image
                src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1000&q=80"
                alt="Balcony transformation by Leaf Lover"
                fill
                priority
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* 6 Stages of Balcony Setup */}
        <div className="mb-20">
          <FadeIn direction="up" className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <h2 className="editorial-heading text-3xl font-bold text-forest">
              Our 6-Step Transformation Process
            </h2>
            <p className="text-forest/70 text-xs sm:text-sm">
              We handle the entire journey from sun measurement to post-planting health guarantees.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Consultation & Lifestyle', desc: 'Understanding your daily routine, watering preferences, pet safety, and desired atmosphere.' },
              { num: '02', title: 'Space & Lux Assessment', desc: 'Evaluating floor weight thresholds, sunlight exposure, and seasonal wind patterns.' },
              { num: '03', title: 'Curated Plant Selection', desc: 'Selecting hardy, flowering, or fragrant species matched to your specific micro-climate.' },
              { num: '04', title: 'Planter & Layout Design', desc: 'Sourcing terracotta, fiber-stone pots, teak decking, and drip irrigation routing.' },
              { num: '05', title: 'Installation & Planting', desc: 'Clean, swift on-site potting using our premium Living Earth organic soil mix.' },
              { num: '06', title: 'Ongoing Care & Guarantee', desc: '30-day plant replacement promise and scheduled bi-weekly horticultural check-ins.' },
            ].map((step, idx) => (
              <FadeIn key={step.num} direction="up" delay={idx * 80} className="p-6 rounded-2xl bg-white/70 border border-forest/10 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 space-y-2">
                <span className="text-xs font-bold text-terracotta">{step.num}</span>
                <h3 className="font-serif text-lg font-bold text-forest">{step.title}</h3>
                <p className="text-xs text-forest/70 leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Consultation Form & WhatsApp Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form */}
          <FadeIn direction="right" className="lg:col-span-7 bg-white/80 rounded-2xl p-6 sm:p-10 border border-forest/10 shadow-soft">
            <div className="space-y-2 mb-6">
              <h3 className="editorial-heading text-2xl font-bold text-forest">
                Request Your Balcony Assessment
              </h3>
              <p className="text-xs text-forest/70">
                Fill in your details below and our landscape architect will respond within 24 hours with ideas and estimates.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-emerald-900">
                  Assessment Request Received!
                </h4>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name}. Our balcony specialist will review your dimensions and contact you shortly via phone or WhatsApp.
                </p>
                <div className="pt-2">
                  <WhatsAppButton
                    variant="primary"
                    options={{
                      type: 'balcony',
                      customMessage: `Hi Leaf Lover, I just submitted a balcony consultation request for my space in ${formData.location || 'Bangalore'}.`
                    }}
                  >
                    Ping on WhatsApp
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
                      placeholder="e.g. Divya Rao"
                      className="w-full px-3 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="w-full px-3 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">Location / Apartment Name</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. HSR Layout / Sobha Forestview"
                      className="w-full px-3 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">Balcony Type</label>
                    <CurvedDropdown
                      value={formData.balconyType}
                      onChange={(val) => setFormData({ ...formData, balconyType: val })}
                      options={[
                        { value: 'Covered Apartment Balcony', label: 'Covered Apartment Balcony' },
                        { value: 'Open Sky Terrace', label: 'Open Sky Terrace' },
                        { value: 'French Window / Juliette Nook', label: 'French Window / Juliette Nook' },
                        { value: 'Villa Patio / Courtyard', label: 'Villa Patio / Courtyard' },
                      ]}
                      pill={false}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">Approximate Size</label>
                    <CurvedDropdown
                      value={formData.approxSize}
                      onChange={(val) => setFormData({ ...formData, approxSize: val })}
                      options={[
                        { value: 'Under 50 sq.ft (Standard)', label: 'Under 50 sq.ft (Standard)' },
                        { value: '50 – 100 sq.ft (Medium)', label: '50 – 100 sq.ft (Medium)' },
                        { value: '100 – 250 sq.ft (Large)', label: '100 – 250 sq.ft (Large)' },
                        { value: '250+ sq.ft (Terrace / Penthouse)', label: '250+ sq.ft (Terrace / Penthouse)' },
                      ]}
                      pill={false}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">Desired Style</label>
                    <CurvedDropdown
                      value={formData.desiredStyle}
                      onChange={(val) => setFormData({ ...formData, desiredStyle: val })}
                      options={[
                        { value: 'Lush Urban Jungle & Privacy', label: 'Lush Urban Jungle & Privacy' },
                        { value: 'Minimalist Japanese Zen', label: 'Minimalist Japanese Zen' },
                        { value: 'Flowering & Butterfly Haven', label: 'Flowering & Butterfly Haven' },
                        { value: 'Fresh Kitchen Herb & Veggie Garden', label: 'Fresh Kitchen Herb & Veggie Garden' },
                      ]}
                      pill={false}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-forest/80 mb-1">Notes / Space Description</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about sunlight hours, wind, or special plants you love..."
                    className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 bg-forest hover:bg-forest-800 disabled:opacity-50 text-cream font-semibold text-sm rounded-md shadow transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? 'Submitting Details...' : 'Request Balcony Assessment'}
                </button>
              </form>
            )}
          </FadeIn>

          {/* Right Direct WhatsApp Card */}
          <FadeIn direction="left" className="lg:col-span-5 space-y-6">
            <div className="bg-sage/50 rounded-2xl p-6 sm:p-8 border border-forest/10 space-y-4">
              <h4 className="font-serif text-xl font-bold text-forest">
                Prefer to send photos right away?
              </h4>
              <p className="text-xs text-forest/75 leading-relaxed">
                Snap a few quick pictures of your empty balcony and send them directly to our WhatsApp design line. We can quickly tell you what is possible.
              </p>
              <WhatsAppButton
                variant="primary"
                size="lg"
                options={{
                  type: 'balcony',
                  customMessage: 'Hi Leaf Lover, I have photos of my balcony and would like your team to look at them.'
                }}
                className="w-full justify-center"
              >
                Send Balcony Photos on WhatsApp
              </WhatsAppButton>
            </div>

            <div className="p-5 rounded-xl bg-white/70 border border-forest/10 space-y-2 text-xs text-forest/80">
              <div className="flex items-center gap-2 font-semibold text-forest">
                <ShieldCheck className="w-4 h-4 text-leaf" />
                <span>The Leaf Lover Promise</span>
              </div>
              <p className="leading-relaxed text-forest/70">
                All plants delivered and installed by Leaf Lover come with our 30-day health guarantee. If any plant fails to acclimatize, we replace it at zero cost.
              </p>
            </div>
          </FadeIn>

        </div>

      </div>
    </div>
  );
}
