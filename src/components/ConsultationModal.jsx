import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FINAL_SECTION_DATA } from '../data/presentationData';

export const ConsultationModal = ({ isOpen, onClose, initialScope = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // safe fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto flex flex-col gap-6 text-[#0F172A]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-[#0F172A]">
              Thank You
            </h3>
            <p className="text-sm text-[#475569] max-w-sm leading-relaxed">
              We have received your details. Our team will get back to you shortly.
            </p>
            <div className="pt-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-primary py-2.5 px-6 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold font-['Outfit'] text-[#0F172A]">
                Let's Talk
              </h3>
              <p className="text-sm text-[#64748B]">
                Tell us about what you want to build for your business.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#334155]">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[#0F172A] text-sm focus:outline-none focus:border-[#326DED]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#334155]">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[#0F172A] text-sm focus:outline-none focus:border-[#326DED]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#334155]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[#0F172A] text-sm focus:outline-none focus:border-[#326DED]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#334155]">
                  How can we help? *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us a little about your project or business requirement..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-[#0F172A] text-sm focus:outline-none focus:border-[#326DED]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#64748B]">
                  Direct call: {FINAL_SECTION_DATA.phone}
                </span>
                <button
                  type="submit"
                  className="btn-primary py-2.5 px-6 text-sm font-semibold cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default ConsultationModal;
