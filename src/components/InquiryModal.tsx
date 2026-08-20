import React, { useState } from 'react';
import { X, Send, MessageCircle, Check, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const InquiryModal: React.FC = () => {
  const {
    isInquiryModalOpen,
    setIsInquiryModalOpen,
    inquiryTarget,
    getWhatsAppCartUrl,
    getWhatsAppProductUrl,
    cart,
    cartTotal
  } = useStore();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isInquiryModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsInquiryModalOpen(false);
    }, 3000);
  };

  const isCartInquiry = inquiryTarget?.isCart;
  const product = inquiryTarget?.product;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#fcf9f8] dark:bg-[#1C1C1C] text-[#1b1b1b] dark:text-[#fcf9f8] rounded-lg shadow-2xl p-6 sm:p-8 border border-[#ddc0b9] dark:border-[#89726c]/40 my-8">
        
        <button
          onClick={() => setIsInquiryModalOpen(false)}
          className="absolute top-4 right-4 text-[#89726c] hover:text-[#1b1b1b] dark:hover:text-[#fcf9f8]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-[#c25a3f] dark:text-[#00A699]" />
          <h3 className="font-serif-header text-xl font-bold uppercase tracking-wider">
            {isCartInquiry ? 'Inquiry For Cart Items' : product ? `Inquiry: ${product.title}` : 'Direct Silversmith Inquiry'}
          </h3>
        </div>

        <p className="text-xs text-[#56423d] dark:text-[#ddc0b9] mb-6">
          {isCartInquiry
            ? 'Inquire about availability, custom ring sizes, or bulk shipping for all items in your bag.'
            : product
            ? `Inquire directly about stone origins, custom sizing, or silver hallmarks for "${product.title}".`
            : 'Get in touch directly with our master silversmith for custom commissions, stone sourcing, or sizing assistance.'}
        </p>

        {/* Option: Direct WhatsApp */}
        <div className="mb-6 p-4 bg-[#25D366]/10 rounded border border-[#25D366]/30 flex items-center justify-between">
          <div className="pr-2">
            <span className="block font-serif-header text-xs font-bold text-[#1b1b1b] dark:text-[#fcf9f8]">
              Prefer instant chat?
            </span>
            <span className="text-[11px] text-[#56423d] dark:text-[#ddc0b9]">
              Message us directly on WhatsApp with pre-filled details.
            </span>
          </div>

          <a
            href={isCartInquiry ? getWhatsAppCartUrl() : product ? getWhatsAppProductUrl(product) : getWhatsAppCartUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 bg-[#25D366] text-white rounded text-xs font-label-caps uppercase tracking-wider flex items-center gap-1.5 flex-shrink-0 hover:opacity-90"
          >
            <MessageCircle className="w-4 h-4 fill-current stroke-1" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Email Inquiry Form */}
        {submitted ? (
          <div className="py-8 text-center space-y-3 bg-[#007168]/10 rounded border border-[#007168]/30 p-4">
            <Check className="w-10 h-10 text-[#007168] dark:text-[#7af7e8] mx-auto" />
            <h4 className="font-serif-header text-base font-bold text-[#007168] dark:text-[#7af7e8] uppercase">
              Inquiry Received
            </h4>
            <p className="text-xs text-[#56423d] dark:text-[#ddc0b9]">
              Our silversmith will review your request and reach out to you via email/phone within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {isCartInquiry && cart.length > 0 && (
              <div className="p-3 bg-[#f0eded] dark:bg-[#313030]/50 rounded text-[11px] text-[#56423d] dark:text-[#ddc0b9]">
                <span className="font-bold block mb-1">Attached Cart Items:</span>
                <ul className="list-disc pl-4 space-y-0.5">
                  {cart.map((c) => (
                    <li key={c.product.id}>
                      {c.product.title} (x{c.quantity}) - ${ (c.product.price * c.quantity).toFixed(2) }
                    </li>
                  ))}
                </ul>
                <div className="mt-1 font-bold text-right text-[#1b1b1b] dark:text-[#fcf9f8]">
                  Total: ${cartTotal.toFixed(2)}
                </div>
              </div>
            )}

            <div>
              <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                Your Name *
              </label>
              <input
                required
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#f0eded] dark:bg-[#313030] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs focus:outline-none focus:border-[#c25a3f]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#f0eded] dark:bg-[#313030] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs focus:outline-none focus:border-[#c25a3f]"
                />
              </div>

              <div>
                <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#f0eded] dark:bg-[#313030] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs focus:outline-none focus:border-[#c25a3f]"
                />
              </div>
            </div>

            <div>
              <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                Specific Request / Questions *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Describe stone preferences, wrist/finger sizing, or specific questions..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#f0eded] dark:bg-[#313030] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2.5 text-xs focus:outline-none focus:border-[#c25a3f]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#9c3e25] dark:bg-[#00A699] text-white py-3 rounded font-label-caps uppercase text-xs tracking-wider font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Direct Inquiry</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
