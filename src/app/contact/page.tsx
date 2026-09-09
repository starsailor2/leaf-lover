'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CurvedDropdown } from '@/components/ui/CurvedDropdown';

const faqs = [
  {
    q: "How are living plants packaged and shipped safely?",
    a: "Every plant is secured in a custom-molded, breathable botanical carton with stabilized root balls and damp moss packing. We guarantee zero soil spillage and healthy arrival, or we replace the plant immediately at our cost."
  },
  {
    q: "What is the 30-Day Healthy Plant Guarantee?",
    a: "If your plant suffers from shock or health issues within 30 days of arrival despite following our care instructions, our Plant Doctor will diagnose it and, if necessary, dispatch a healthy replacement specimen free of charge."
  },
  {
    q: "Do you offer balcony garden setups outside Bangalore?",
    a: "Currently, our on-site turnkey installation team operates across Bangalore and surrounding zones. However, our plant delivery and remote balcony design consultations (via photo and video calls) are available nationwide."
  },
  {
    q: "How does the Plant Doctor consultation work?",
    a: "You can either use our interactive online symptom checker or send photos directly to our WhatsApp support line (+91 98765 43210). A qualified horticulturist will reply with tailored care instructions."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
            Get In Touch
          </span>
          <h1 className="editorial-heading text-4xl sm:text-5xl font-bold text-forest mt-1 leading-tight">
            We are always here to talk plants.
          </h1>
          <p className="text-forest/75 text-base sm:text-lg mt-3 leading-relaxed">
            Have questions about an order, need custom balcony guidance, or want plant styling for your office? Reach out directly.
          </p>
        </div>

        {/* Contact Info & Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-forest">WhatsApp Direct Line</h3>
                  <p className="text-xs text-forest/70">Fastest response for care & enquiries</p>
                </div>
              </div>
              <p className="text-xs text-forest/80 leading-relaxed">
                Connect directly with our nursery specialists. Ask about plant availability, send sick plant photos, or discuss balcony estimates.
              </p>
              <WhatsAppButton variant="primary" size="md" className="w-full justify-center">
                Message Us on WhatsApp
              </WhatsAppButton>
            </div>

            {/* Direct Details Card */}
            <div className="p-6 rounded-2xl bg-white/70 border border-forest/10 space-y-5 shadow-soft">
              <div className="flex items-start gap-3 text-xs text-forest/80">
                <Phone className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-forest">Phone Inquiries</p>
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-leaf transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-forest/80">
                <Mail className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-forest">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-leaf transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-forest/80">
                <MapPin className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-forest">Botanical Studio & Nursery</p>
                  <p className="text-forest/70 leading-normal">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-forest/80">
                <Clock className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-forest">Studio Hours</p>
                  <p className="text-forest/70">Monday – Sunday: 9:00 AM – 7:30 PM IST</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 bg-white/80 rounded-2xl p-6 sm:p-10 border border-forest/10 shadow-soft">
            <h2 className="editorial-heading text-2xl font-bold text-forest mb-2">
              Send us a Message
            </h2>
            <p className="text-xs text-forest/70 mb-6">
              Leave your note and we will reply within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-lg font-bold text-emerald-900">Message Received!</h3>
                <p className="text-xs text-emerald-800">
                  Thank you for reaching out to Leaf Lover. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Iyer"
                      className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-forest/80 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit number"
                      className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-forest/80 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-forest/80 mb-1">Inquiry Topic</label>
                    <CurvedDropdown
                      value={formData.requirement}
                      onChange={(val) => setFormData({ ...formData, requirement: val })}
                      options={[
                        { value: 'General Inquiry', label: 'General Inquiry' },
                        { value: 'Balcony Setup Consultation', label: 'Balcony Setup Consultation' },
                        { value: 'Corporate / Office Greenery', label: 'Corporate / Office Greenery' },
                        { value: 'Order Tracking & Delivery', label: 'Order Tracking & Delivery' },
                        { value: 'Plant Doctor Assistance', label: 'Plant Doctor Assistance' },
                      ]}
                      pill={false}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-forest/80 mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    className="w-full px-3.5 py-2 text-sm bg-cream/40 border border-forest/20 rounded-md focus:outline-none focus:border-forest"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-forest hover:bg-forest-800 text-cream font-semibold text-sm rounded-md shadow transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-3xl mx-auto space-y-6 pt-10 border-t border-forest/10">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
              Frequently Asked
            </span>
            <h2 className="editorial-heading text-3xl font-bold text-forest">
              Common Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white/70 border border-forest/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-serif text-base font-semibold text-forest flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-forest/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-forest/75 leading-relaxed border-t border-forest/5 pt-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
