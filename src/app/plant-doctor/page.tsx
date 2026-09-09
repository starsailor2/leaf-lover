'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Stethoscope,
  AlertCircle,
  Camera,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Send,
  MessageCircle,
  RefreshCw
} from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { CurvedDropdown } from '@/components/ui/CurvedDropdown';
import { FadeIn } from '@/components/ui/FadeIn';

const commonSymptoms = [
  { id: 'yellow-leaves', label: 'Lower leaves turning yellow & soft', probableCause: 'Overwatering or poor soil drainage' },
  { id: 'brown-tips', label: 'Crispy brown tips & dry edges', probableCause: 'Low ambient humidity or underwatering' },
  { id: 'drooping', label: 'Stem & leaves drooping or wilting', probableCause: 'Severe thirst OR root rot suffocating intake' },
  { id: 'pests', label: 'White cotton fluff, webs, or sticky residue', probableCause: 'Mealybugs, spider mites, or scale insects' },
  { id: 'leaf-drop', label: 'Sudden shedding of green leaves', probableCause: 'Environmental shock, cold draft, or sudden move' },
  { id: 'pale-growth', label: 'Small pale leaves & leggy stretched stems', probableCause: 'Insufficient photosynthetic light' },
];

export default function PlantDoctorPage() {
  const [plantName, setPlantName] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [sunlight, setSunlight] = useState('Medium Indirect');
  const [wateringFrequency, setWateringFrequency] = useState('Weekly');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [diagnosisReady, setDiagnosisReady] = useState(false);

  const toggleSymptom = (label: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const handleDiagnose = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSymptoms.length > 0) {
      setDiagnosisReady(true);
    }
  };

  const handleReset = () => {
    setPlantName('');
    setSelectedSymptoms([]);
    setAdditionalNotes('');
    setDiagnosisReady(false);
  };

  const whatsappMessage = generateWhatsAppLink({
    type: 'plant-doctor',
    symptoms: selectedSymptoms,
    customMessage: `Hi Leaf Lover Plant Doctor, I need help diagnosing my ${plantName || 'houseplant'}. Symptoms: ${selectedSymptoms.join(', ')}. Sunlight: ${sunlight}, Watering: ${wateringFrequency}.`
  });

  return (
    <div className="min-h-screen bg-cream py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="w-12 h-12 rounded-full bg-forest/5 text-leaf flex items-center justify-center mx-auto">
            <Stethoscope className="w-6 h-6" />
          </div>
          <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
            Interactive Botanical Clinic
          </span>
          <h1 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight">
            Leaf Lover Plant Doctor
          </h1>
          <p className="text-forest/75 text-sm sm:text-base leading-relaxed">
            Plants communicate through their leaves, stems, and soil. Select your plant&apos;s symptoms below for an instant preliminary diagnosis and direct WhatsApp review with our horticulturists.
          </p>
        </FadeIn>

        {/* Diagnosis Form / Results Container */}
        <FadeIn direction="up" delay={150} className="bg-white/85 rounded-3xl p-6 sm:p-10 border border-forest/10 shadow-card">
          {!diagnosisReady ? (
            <form onSubmit={handleDiagnose} className="space-y-8">
              
              {/* Step 1: Plant Name */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-forest">
                  1. Which plant needs care?
                </label>
                <input
                  type="text"
                  value={plantName}
                  onChange={(e) => setPlantName(e.target.value)}
                  placeholder="e.g. Monstera, Snake Plant, Fiddle Leaf Fig, or 'Not sure'"
                  className="w-full px-4 py-2.5 bg-cream/40 border border-forest/20 rounded-lg text-sm text-forest focus:outline-none focus:border-forest"
                />
              </div>

              {/* Step 2: Symptoms Selector */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-forest">
                  2. What symptoms are you observing? <span className="text-xs font-normal text-forest/60">(Select all that apply)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {commonSymptoms.map((sym) => {
                    const isSelected = selectedSymptoms.includes(sym.label);
                    return (
                      <button
                        type="button"
                        key={sym.id}
                        onClick={() => toggleSymptom(sym.label)}
                        className={`text-left p-3.5 rounded-xl border transition-all text-xs font-medium flex items-start gap-2.5 ${
                          isSelected
                            ? 'bg-forest/10 border-forest text-forest shadow-sm'
                            : 'bg-cream/20 border-forest/15 text-forest/80 hover:bg-forest/5'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded mt-0.5 flex-shrink-0 flex items-center justify-center border ${
                            isSelected ? 'bg-forest text-cream border-forest' : 'border-forest/30'
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </span>
                        <span>{sym.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Routine */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-forest">
                    3. Current Sunlight Exposure
                  </label>
                  <CurvedDropdown
                    value={sunlight}
                    onChange={setSunlight}
                    options={[
                      { value: 'Direct Sun (2+ hrs)', label: 'Direct Sunlight (Balcony / Window sill)' },
                      { value: 'Bright Indirect', label: 'Bright Indirect Light (Near sheer window)' },
                      { value: 'Medium Indirect', label: 'Medium Indirect (Center of living room)' },
                      { value: 'Low Light', label: 'Low Light (Dim room / AC office)' },
                    ]}
                    pill={false}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-forest">
                    4. How often do you water?
                  </label>
                  <CurvedDropdown
                    value={wateringFrequency}
                    onChange={setWateringFrequency}
                    options={[
                      { value: 'Daily', label: 'Every day' },
                      { value: '2-3 times a week', label: '2 – 3 times a week' },
                      { value: 'Weekly', label: 'Once a week' },
                      { value: 'Every 2-3 weeks', label: 'Every 2 – 3 weeks' },
                      { value: 'Only when bone dry', label: 'Only when soil is completely bone dry' },
                    ]}
                    pill={false}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Step 4: Notes */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-semibold text-forest">
                  5. Any other details? (e.g. repotted recently, AC vent nearby)
                </label>
                <textarea
                  rows={2}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="e.g. Started after we turned on continuous air conditioning last week..."
                  className="w-full px-3.5 py-2 text-xs bg-cream/40 border border-forest/20 rounded-lg text-forest focus:outline-none focus:border-forest"
                />
              </div>

              {/* Submit Diagnosis Button */}
              <button
                type="submit"
                disabled={selectedSymptoms.length === 0}
                className="w-full py-3.5 px-6 bg-forest hover:bg-forest-800 disabled:opacity-40 text-cream font-semibold text-sm rounded-xl shadow transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-leaf-light" />
                <span>Generate Plant Health Diagnosis</span>
              </button>

            </form>
          ) : (
            /* Results View */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-forest/10">
                <div className="flex items-center gap-2 text-leaf font-semibold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Preliminary Triage Complete</span>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs text-forest/60 hover:text-forest flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Start Over</span>
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="editorial-heading text-2xl font-bold text-forest">
                  Health Analysis for {plantName || 'Your Plant'}
                </h3>
                <p className="text-xs text-forest/70">
                  Based on {selectedSymptoms.length} identified symptoms and {wateringFrequency.toLowerCase()} watering routine:
                </p>
              </div>

              {/* Diagnosis Cards */}
              <div className="space-y-3">
                {selectedSymptoms.map((sym, i) => {
                  const match = commonSymptoms.find((s) => s.label === sym);
                  return (
                    <div key={i} className="p-4 rounded-xl bg-sage/40 border border-forest/10 space-y-1">
                      <p className="text-xs font-bold text-forest flex items-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5 text-terracotta" />
                        Symptom: {sym}
                      </p>
                      <p className="text-xs text-forest/80 leading-relaxed pl-5">
                        <strong>Probable Cause:</strong> {match?.probableCause || 'Environmental stress or lighting imbalance.'}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Immediate Recommended Recovery Actions */}
              <div className="p-5 rounded-2xl bg-forest/5 border border-forest/15 space-y-2 text-xs text-forest/80">
                <h4 className="font-semibold text-forest text-sm">
                  Recommended First-Aid Routine:
                </h4>
                <ul className="list-disc list-inside space-y-1 pl-1">
                  <li>Hold off on heavy watering until you test the moisture 2 inches down with your finger.</li>
                  <li>Ensure the nursery pot drainage holes are clear and not submerged in standing drip tray water.</li>
                  <li>Avoid applying concentrated chemical fertilizer while the root system is stressed.</li>
                </ul>
              </div>

              {/* WhatsApp Verification Action */}
              <div className="p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 space-y-3 text-center">
                <h4 className="font-serif text-lg font-bold text-forest">
                  Confirm diagnosis & send photos to our horticulturists
                </h4>
                <p className="text-xs text-forest/75 max-w-md mx-auto">
                  Our Plant Doctor can inspect leaf undersides and stem nodes via WhatsApp to give 100% verified treatment.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-xl shadow transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Our Plant Doctor</span>
                  </a>
                </div>
              </div>

            </div>
          )}

        </FadeIn>

      </div>
    </div>
  );
}
