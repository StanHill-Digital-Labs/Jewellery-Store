import React, { useState } from 'react';
import { Send, MessageCircle, MapPin, Mail, Phone, ShieldCheck, Check } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const ContactSection: React.FC = () => {
  const { getWhatsAppGeneralUrl } = useStore();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 animate-fadeIn">
      
      <div className="text-center max-w-3xl mx-auto">
        <p className="font-label-caps text-xs text-[#c25a3f] dark:text-[#00A699] uppercase tracking-[0.2em] mb-2 font-semibold">
          Get In Touch
        </p>
        <h2 className="font-serif-header text-3xl sm:text-5xl font-bold uppercase tracking-wide text-[#1b1b1b] dark:text-[#fcf9f8] mb-4">
          Artisan Studio & Inquiries
        </h2>
        <p className="text-sm sm:text-base text-[#56423d] dark:text-[#ddc0b9] leading-relaxed">
          Have questions about custom ring sizing, stone origins, or bespoke commissions? Message us directly or fill out the contact form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Studio Info (Left 5 Cols) */}
        <div className="lg:col-span-5 bg-[#f0eded] dark:bg-[#313030]/60 p-8 rounded-lg border border-[#ddc0b9]/40 space-y-8 silver-shadow">
          <div>
            <h3 className="font-serif-header text-xl font-bold uppercase mb-4 text-[#1b1b1b] dark:text-[#fcf9f8]">
              Direct Messaging Channels
            </h3>
            
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white py-3.5 px-6 rounded font-label-caps uppercase text-xs tracking-wider flex items-center justify-center gap-3 shadow transition-transform hover:scale-[1.02] mb-4"
            >
              <MessageCircle className="w-5 h-5 fill-current stroke-1" />
              <span>Chat on WhatsApp Directly</span>
            </a>

            <p className="text-xs text-[#89726c] dark:text-[#ddc0b9] leading-relaxed">
              Instant responses during bench hours (9am - 6pm MT).
            </p>
          </div>

          <div className="space-y-4 text-xs text-[#56423d] dark:text-[#ddc0b9]">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#c25a3f] dark:text-[#00A699] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1b1b1b] dark:text-[#fcf9f8] uppercase font-serif-header text-sm">
                  Silversmith Workbench Studio
                </strong>
                <span>High Desert Forge Road, Taos, New Mexico 87571</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#c25a3f] dark:text-[#00A699] flex-shrink-0" />
              <span>artisan@silverandstone.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#c25a3f] dark:text-[#00A699] flex-shrink-0" />
              <span>+1 (555) 019-2834</span>
            </div>
          </div>

          <div className="pt-6 border-t border-[#ddc0b9]/40 text-xs text-[#56423d] dark:text-[#ddc0b9] space-y-2">
            <div className="flex items-center gap-2 font-serif-header font-bold text-sm text-[#1b1b1b] dark:text-[#fcf9f8]">
              <ShieldCheck className="w-4 h-4 text-[#007168] dark:text-[#7af7e8]" />
              <span>Ethical Guarantee</span>
            </div>
            <p className="leading-relaxed">
              We stand behind 100% genuine natural American turquoise, ethically mined stones, and hand-stamped recycled sterling silver.
            </p>
          </div>
        </div>

        {/* Contact Form (Right 7 Cols) */}
        <div className="lg:col-span-7 bg-[#fcf9f8] dark:bg-[#313030]/40 p-8 rounded-lg border border-[#ddc0b9]/40 silver-shadow">
          <h3 className="font-serif-header text-xl font-bold uppercase mb-6 text-[#1b1b1b] dark:text-[#fcf9f8]">
            Send an Inquiry
          </h3>

          {submitted ? (
            <div className="py-12 text-center space-y-3 bg-[#007168]/10 rounded border border-[#007168]/30 p-6">
              <Check className="w-12 h-12 text-[#007168] dark:text-[#7af7e8] mx-auto" />
              <h4 className="font-serif-header text-xl font-bold text-[#007168] dark:text-[#7af7e8] uppercase">
                Inquiry Message Sent!
              </h4>
              <p className="text-xs text-[#56423d] dark:text-[#ddc0b9]">
                Thank you. Our silversmith will respond to your email within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-[#f0eded] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-3 text-xs focus:outline-none focus:border-[#c25a3f]"
                  />
                </div>

                <div>
                  <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-[#f0eded] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-3 text-xs focus:outline-none focus:border-[#c25a3f]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                  Subject / Category
                </label>
                <select
                  className="w-full bg-[#f0eded] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-3 text-xs focus:outline-none focus:border-[#c25a3f]"
                >
                  <option value="custom">Custom Commission Request</option>
                  <option value="sizing">Ring / Cuff Sizing Question</option>
                  <option value="shipping">Shipping & Delivery Inquiry</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div>
                <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about the piece, size specifications, or stone preferences you have in mind..."
                  className="w-full bg-[#f0eded] dark:bg-[#1C1C1C] border border-[#ddc0b9] dark:border-[#89726c] rounded p-3 text-xs focus:outline-none focus:border-[#c25a3f]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#9c3e25] dark:bg-[#00A699] text-white py-3.5 rounded font-label-caps uppercase text-xs tracking-widest font-bold shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry Form</span>
              </button>
            </form>
          )}

        </div>

      </div>

    </div>
  );
};
