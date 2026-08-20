import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    clearCart,
    getWhatsAppCartUrl,
    openInquiryForCart
  } = useStore();

  const [isCheckoutStep, setIsCheckoutStep] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleSimulateCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    setTimeout(() => {
      clearCart();
      setOrderComplete(false);
      setIsCheckoutStep(false);
      setIsCartOpen(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fcf9f8] dark:bg-[#1C1C1C] text-[#1b1b1b] dark:text-[#fcf9f8] shadow-2xl flex flex-col border-l border-[#ddc0b9] dark:border-[#89726c]/40">
          
          {/* Header */}
          <div className="p-6 border-b border-[#ddc0b9]/40 dark:border-[#89726c]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#c25a3f] dark:text-[#00A699]" />
              <h3 className="font-serif-header text-lg font-bold uppercase tracking-wider">
                Your Artisan Bag ({cart.length})
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 text-[#89726c] hover:text-[#1b1b1b] dark:hover:text-[#fcf9f8]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {orderComplete ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#007168] dark:text-[#7af7e8] mx-auto animate-bounce" />
                <h4 className="font-serif-header text-2xl font-bold uppercase text-[#007168] dark:text-[#7af7e8]">
                  Order Placed Successfully!
                </h4>
                <p className="text-xs text-[#56423d] dark:text-[#ddc0b9] max-w-xs mx-auto">
                  Thank you for supporting slow-made Southwestern silversmith craft. Your receipt and shipping tracking details have been generated.
                </p>
              </div>
            ) : isCheckoutStep ? (
              <form onSubmit={handleSimulateCheckout} className="space-y-4">
                <h4 className="font-serif-header text-base font-bold uppercase border-b border-[#ddc0b9] pb-2">
                  Shipping & Checkout Information
                </h4>
                
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sierra Morgan"
                      className="w-full bg-[#f0eded] dark:bg-[#313030] border border-[#ddc0b9] rounded p-2.5 text-xs focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="sierra@example.com"
                      className="w-full bg-[#f0eded] dark:bg-[#313030] border border-[#ddc0b9] rounded p-2.5 text-xs focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-label-caps uppercase text-[10px] text-[#89726c] mb-1">
                      Shipping Address
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Street address, City, State, ZIP code..."
                      className="w-full bg-[#f0eded] dark:bg-[#313030] border border-[#ddc0b9] rounded p-2.5 text-xs focus:outline-none"
                    />
                  </div>

                  <div className="p-3 bg-[#f0eded] dark:bg-[#313030]/50 rounded text-[11px] text-[#56423d] dark:text-[#ddc0b9]">
                    <span className="font-bold block mb-1">Order Summary:</span>
                    {cart.map((i) => (
                      <div key={i.product.id} className="flex justify-between py-0.5">
                        <span className="truncate pr-2">{i.product.title} (x{i.quantity})</span>
                        <span>${(i.product.price * i.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="border-t border-[#ddc0b9]/40 mt-2 pt-1 font-bold flex justify-between text-xs text-[#1b1b1b] dark:text-[#fcf9f8]">
                      <span>Total:</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsCheckoutStep(false)}
                    className="w-1/3 py-3 border border-[#89726c] text-xs font-label-caps uppercase rounded"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 bg-[#9c3e25] dark:bg-[#00A699] text-white text-xs font-label-caps uppercase tracking-wider rounded font-bold shadow"
                  >
                    Complete Purchase (${cartTotal.toFixed(2)})
                  </button>
                </div>
              </form>
            ) : cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <ShoppingBag className="w-12 h-12 text-[#89726c] opacity-40 mx-auto" />
                <p className="font-serif-header text-lg font-bold uppercase text-[#56423d] dark:text-[#ddc0b9]">
                  Your Bag is Currently Empty
                </p>
                <p className="text-xs text-[#89726c] dark:text-[#ddc0b9] max-w-xs mx-auto">
                  Explore our artisan collection of rings, stamped cuffs, and heavy stone pendants.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#9c3e25] dark:bg-[#00A699] text-white rounded text-xs font-label-caps uppercase tracking-wider"
                >
                  Browse Jewelry
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}`}
                    className="flex gap-4 p-3 bg-[#f0eded] dark:bg-[#313030]/50 rounded border border-[#ddc0b9]/30"
                  >
                    <img
                      src={item.product.primaryImage}
                      alt={item.product.title}
                      className="w-20 h-20 object-cover rounded flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif-header text-xs font-bold line-clamp-1">
                            {item.product.title}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-[#89726c] hover:text-[#ba1a1a] p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {item.selectedSize && (
                          <span className="text-[10px] font-label-caps uppercase tracking-wider text-[#89726c] dark:text-[#ddc0b9]">
                            Size: {item.selectedSize}
                          </span>
                        )}

                        <p className="text-xs font-serif-header font-bold text-[#c25a3f] dark:text-[#00A699] mt-0.5">
                          ${item.product.price.toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Control */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-[#ddc0b9] dark:border-[#89726c] rounded bg-[#fcf9f8] dark:bg-[#1C1C1C]">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-[#ddc0b9]/20"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-[#ddc0b9]/20"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Footer Actions */}
          {cart.length > 0 && !isCheckoutStep && !orderComplete && (
            <div className="p-6 border-t border-[#ddc0b9]/40 dark:border-[#89726c]/30 space-y-3 bg-[#f0eded]/50 dark:bg-[#313030]/30">
              <div className="flex justify-between items-baseline mb-2">
                <span className="font-label-caps uppercase text-xs text-[#89726c]">Subtotal:</span>
                <span className="font-serif-header text-xl font-bold text-[#1b1b1b] dark:text-[#fcf9f8]">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              {/* Inquire About ALL Items in Cart via WhatsApp */}
              <a
                href={getWhatsAppCartUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white font-label-caps text-xs uppercase tracking-wider py-3 rounded shadow transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-1" />
                <span>WhatsApp Inquiry For All Cart Items</span>
              </a>

              {/* Email Form Inquiry For Cart Items */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  openInquiryForCart();
                }}
                className="w-full border border-[#89726c] text-[#56423d] dark:text-[#ddc0b9] hover:bg-[#f0eded] dark:hover:bg-[#313030] font-label-caps text-xs uppercase tracking-wider py-2.5 rounded transition-colors"
              >
                Inquire via Email Form
              </button>

              {/* Direct Checkout Button */}
              <button
                onClick={() => setIsCheckoutStep(true)}
                className="w-full bg-[#9c3e25] dark:bg-[#00A699] hover:bg-[#802913] dark:hover:bg-[#007168] text-white font-label-caps text-xs uppercase tracking-widest py-3.5 rounded shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#89726c] pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Authentic Silversmith Craft & Insured Shipping</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
