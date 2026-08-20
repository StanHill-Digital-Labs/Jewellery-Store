import React, { useState } from 'react';
import { X, ShoppingBag, MessageCircle, Ruler, ChevronDown, ChevronUp, Sparkles, Check, Send } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

export const ProductDetailModal: React.FC = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    addToCart,
    getWhatsAppProductUrl,
    products,
    setIsSizingGuideOpen
  } = useStore();

  if (!selectedProduct) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('Medium');
  const [openAccordion, setOpenAccordion] = useState<'materials' | 'sizing' | 'shipping'>('materials');
  const [inquiryText, setInquiryText] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const images = selectedProduct.galleryImages && selectedProduct.galleryImages.length > 0
    ? selectedProduct.galleryImages
    : [selectedProduct.primaryImage];

  const relatedProducts = products
    .filter((p) => p.id !== selectedProduct.id && (p.category === selectedProduct.category || p.featured))
    .slice(0, 3);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryText('');
    }, 4000);
  };

  const ringSizes = ['5', '6', '7', '8', '9', '10', '11', '12', 'Custom'];
  const cuffSizes = ['Small (5.5"-6.0")', 'Medium (6.0"-6.5")', 'Large (6.5"-7.0")', 'Upper Arm Custom'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#fcf9f8] dark:bg-[#1C1C1C] text-[#1b1b1b] dark:text-[#fcf9f8] rounded-lg shadow-2xl overflow-hidden border border-[#ddc0b9] dark:border-[#89726c]/40 my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 z-20 bg-[#1C1C1C]/70 hover:bg-[#c25a3f] text-white p-2 rounded-full transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto">
          {/* Main Grid: Gallery vs Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Gallery (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Active Image Zoom Frame */}
              <div className="relative aspect-[4/5] bg-[#f0eded] dark:bg-[#313030] rounded overflow-hidden group shadow-md border border-[#ddc0b9]/40">
                <img
                  src={images[activeImageIndex] || selectedProduct.primaryImage}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-125 cursor-zoom-in"
                />
                <div className="absolute bottom-3 left-3 bg-[#1C1C1C]/80 backdrop-blur text-white px-3 py-1 rounded text-[10px] font-label-caps uppercase tracking-widest pointer-events-none">
                  Hover to Zoom Details
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded overflow-hidden flex-shrink-0 border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#c25a3f] dark:border-[#00A699] scale-105 shadow-md'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info & Actions (Right 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-label-caps uppercase tracking-widest text-[#c25a3f] dark:text-[#00A699] font-bold">
                    {selectedProduct.category}
                  </span>
                  <span className="text-xs font-label-caps text-[#89726c] dark:text-[#ddc0b9]">
                    SKU: {selectedProduct.sku}
                  </span>
                </div>

                <h2 className="font-serif-header text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                  {selectedProduct.title}
                </h2>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-serif-header text-2xl sm:text-3xl font-bold text-[#9c3e25] dark:text-[#7af7e8]">
                    ${selectedProduct.price.toFixed(2)}
                  </span>
                  <span className={`text-xs font-label-caps uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    selectedProduct.status === 'In Stock'
                      ? 'bg-[#007168]/20 text-[#007168] dark:text-[#7af7e8]'
                      : 'bg-[#ba1a1a]/20 text-[#ba1a1a] dark:text-[#ffb4a2]'
                  }`}>
                    {selectedProduct.status}
                  </span>
                </div>

                <p className="text-sm text-[#56423d] dark:text-[#ddc0b9] leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>

                {/* Sizing Selector */}
                <div className="mb-6 p-4 bg-[#f0eded] dark:bg-[#313030]/50 rounded border border-[#ddc0b9]/40">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-label-caps uppercase tracking-wider font-semibold text-[#1b1b1b] dark:text-[#fcf9f8]">
                      Select Size
                    </label>
                    <button
                      onClick={() => setIsSizingGuideOpen(true)}
                      className="text-[11px] font-label-caps uppercase tracking-wider text-[#c25a3f] dark:text-[#00A699] hover:underline flex items-center gap-1"
                    >
                      <Ruler className="w-3.5 h-3.5" />
                      <span>Sizing Guide</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizingGuideType === 'ring' &&
                      ringSizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`px-3 py-1.5 text-xs font-label-caps rounded border transition-colors ${
                            selectedSize === sz
                              ? 'bg-[#c25a3f] dark:bg-[#00A699] text-white border-transparent'
                              : 'bg-transparent border-[#89726c]/40 text-[#1b1b1b] dark:text-[#fcf9f8] hover:border-[#c25a3f]'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}

                    {selectedProduct.sizingGuideType === 'cuff' &&
                      cuffSizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`px-3 py-1.5 text-xs font-label-caps rounded border transition-colors ${
                            selectedSize === sz
                              ? 'bg-[#c25a3f] dark:bg-[#00A699] text-white border-transparent'
                              : 'bg-transparent border-[#89726c]/40 text-[#1b1b1b] dark:text-[#fcf9f8] hover:border-[#c25a3f]'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}

                    {selectedProduct.sizingGuideType === 'necklace' && (
                      <span className="text-xs text-[#56423d] dark:text-[#ddc0b9]">
                        Standard 24" Heavy Link Chain included (Custom length available upon request).
                      </span>
                    )}
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="space-y-3 mb-8">
                  {selectedProduct.status === 'In Stock' && (
                    <button
                      onClick={() => addToCart(selectedProduct, 1, selectedSize)}
                      className="w-full bg-[#9c3e25] dark:bg-[#00A699] hover:bg-[#802913] dark:hover:bg-[#007168] text-white font-label-caps text-xs sm:text-sm uppercase tracking-widest py-4 rounded shadow-lg transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      <span>Add to Bag (${selectedProduct.price.toFixed(2)})</span>
                    </button>
                  )}

                  {/* Direct WhatsApp Messaging Button */}
                  <a
                    href={getWhatsAppProductUrl(selectedProduct, selectedSize)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white font-label-caps text-xs sm:text-sm uppercase tracking-widest py-3.5 rounded shadow transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 fill-current stroke-1" />
                    <span>Inquire via Direct WhatsApp</span>
                  </a>
                </div>

                {/* Accordions */}
                <div className="border-t border-[#ddc0b9]/40 dark:border-[#89726c]/30 divide-y divide-[#ddc0b9]/30 dark:divide-[#89726c]/20">
                  
                  {/* Accordion 1: Material & Stone Origin */}
                  <div className="py-3">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === 'materials' ? '' as any : 'materials')}
                      className="w-full flex items-center justify-between text-left font-serif-header text-sm font-bold uppercase tracking-wider text-[#1b1b1b] dark:text-[#fcf9f8]"
                    >
                      <span>Material & Stone Origin</span>
                      {openAccordion === 'materials' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {openAccordion === 'materials' && (
                      <div className="mt-3 text-xs text-[#56423d] dark:text-[#ddc0b9] space-y-2 leading-relaxed animate-fadeIn">
                        <p><strong>Stone Origin:</strong> {selectedProduct.stoneOrigin}</p>
                        <p><strong>Silver Craft:</strong> {selectedProduct.silverDetails}</p>
                        <p><strong>Composition:</strong> {selectedProduct.materials.join(', ')}</p>
                      </div>
                    )}
                  </div>

                  {/* Accordion 2: Custom Sizing Guide */}
                  <div className="py-3">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === 'sizing' ? '' as any : 'sizing')}
                      className="w-full flex items-center justify-between text-left font-serif-header text-sm font-bold uppercase tracking-wider text-[#1b1b1b] dark:text-[#fcf9f8]"
                    >
                      <span>Custom Sizing Guide</span>
                      {openAccordion === 'sizing' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {openAccordion === 'sizing' && (
                      <div className="mt-3 text-xs text-[#56423d] dark:text-[#ddc0b9] space-y-2 animate-fadeIn">
                        <p>Rigid cuffs and upper arm bands require precise wrist/bicep measurements. Do not force-bend rigid silver pieces.</p>
                        <button
                          onClick={() => setIsSizingGuideOpen(true)}
                          className="mt-2 text-[#c25a3f] dark:text-[#00A699] font-label-caps uppercase tracking-wider text-[11px] underline"
                        >
                          Open Full Interactive Sizing Chart &rarr;
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              </div>

              {/* Direct Respective Product Inquiry Form */}
              <div className="mt-8 pt-6 border-t border-[#ddc0b9]/40 dark:border-[#89726c]/30">
                <h4 className="font-serif-header text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#c25a3f] dark:text-[#00A699]" />
                  <span>Direct Artisan Inquiry</span>
                </h4>
                <p className="text-xs text-[#56423d] dark:text-[#ddc0b9] mb-3">
                  Have a question about stone variations or custom sizing for this piece?
                </p>

                {inquirySubmitted ? (
                  <div className="bg-[#007168]/20 text-[#007168] dark:text-[#7af7e8] p-3 rounded text-xs flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Inquiry sent! The silversmith will contact you shortly.</span>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-2">
                    <textarea
                      rows={2}
                      required
                      placeholder={`Ask about ${selectedProduct.title}...`}
                      value={inquiryText}
                      onChange={(e) => setInquiryText(e.target.value)}
                      className="w-full bg-[#f0eded] dark:bg-[#313030] border border-[#ddc0b9] dark:border-[#89726c] rounded p-2 text-xs text-[#1b1b1b] dark:text-[#fcf9f8] focus:outline-none focus:border-[#c25a3f]"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#56423d] hover:bg-[#1b1b1b] text-white py-2 rounded text-xs font-label-caps uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry For This Piece</span>
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

          {/* Related Products: "More From the Workbench" */}
          {relatedProducts.length > 0 && (
            <div className="pt-12 border-t border-[#ddc0b9]/40 dark:border-[#89726c]/30">
              <h3 className="font-serif-header text-xl font-bold uppercase tracking-wide text-center mb-8">
                More From the Workbench
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setSelectedProduct(p);
                      setActiveImageIndex(0);
                    }}
                    className="group cursor-pointer bg-[#f0eded] dark:bg-[#313030]/40 rounded p-3 border border-[#ddc0b9]/30 hover:border-[#c25a3f] transition-all"
                  >
                    <div className="aspect-square rounded overflow-hidden mb-3">
                      <img
                        src={p.primaryImage}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h5 className="font-serif-header text-sm font-bold line-clamp-1">{p.title}</h5>
                    <p className="text-xs font-serif-header text-[#c25a3f] dark:text-[#00A699] font-bold mt-1">
                      ${p.price.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
