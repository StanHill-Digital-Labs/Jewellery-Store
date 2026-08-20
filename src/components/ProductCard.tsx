import React from 'react';
import { ShoppingBag, MessageCircle, Eye } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { setSelectedProduct, addToCart, getWhatsAppProductUrl } = useStore();

  const getStatusBadge = (status: Product['status']) => {
    switch (status) {
      case 'In Stock':
        return (
          <span className="px-2.5 py-1 text-[10px] font-label-caps uppercase tracking-wider bg-[#007168]/10 text-[#007168] dark:bg-[#7af7e8]/20 dark:text-[#7af7e8] border border-[#007168]/30 dark:border-[#7af7e8]/30 rounded-full flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007168] dark:bg-[#7af7e8]" />
            In Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="px-2.5 py-1 text-[10px] font-label-caps uppercase tracking-wider bg-[#ba1a1a]/10 text-[#ba1a1a] dark:bg-[#ffdad6]/20 dark:text-[#ffb4a2] border border-[#ba1a1a]/30 rounded-full flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a]" />
            Out of Stock
          </span>
        );
      case 'Sold':
        return (
          <span className="px-2.5 py-1 text-[10px] font-label-caps uppercase tracking-wider bg-[#56423d]/10 text-[#56423d] dark:bg-[#e5e2e1]/10 dark:text-[#ddc0b9] border border-[#89726c]/30 rounded-full flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89726c]" />
            One-of-a-Kind Sold
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="group relative flex flex-col bg-[#fcf9f8] dark:bg-[#313030]/60 rounded-md overflow-hidden border border-[#ddc0b9]/40 dark:border-[#89726c]/30 silver-shadow hover:shadow-2xl transition-all duration-300">
      
      {/* Thumbnail Container */}
      <div
        className="relative w-full aspect-[4/5] bg-[#f0eded] dark:bg-[#1C1C1C] overflow-hidden cursor-pointer"
        onClick={() => setSelectedProduct(product)}
      >
        <img
          src={product.primaryImage}
          alt={product.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Status Badge Top Left */}
        <div className="absolute top-3 left-3 z-10">
          {getStatusBadge(product.status)}
        </div>

        {/* Category Badge Top Right */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-0.5 text-[9px] font-label-caps uppercase tracking-widest bg-[#1C1C1C]/80 text-[#fcf9f8] backdrop-blur-sm rounded">
            {product.category}
          </span>
        </div>

        {/* Quick Action Overlay on Hover */}
        <div className="absolute inset-0 bg-[#1C1C1C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProduct(product);
            }}
            className="p-3 bg-[#fcf9f8] text-[#1b1b1b] rounded-full hover:bg-[#c25a3f] hover:text-white transition-colors shadow-lg"
            title="Quick View Details"
          >
            <Eye className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppProductUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-3 bg-[#25D366] text-white rounded-full hover:scale-110 transition-transform shadow-lg"
            title="Ask via WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current stroke-1" />
          </a>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-label-caps uppercase tracking-widest text-[#89726c] dark:text-[#ddc0b9]">
              SKU: {product.sku}
            </span>
          </div>

          <h4
            onClick={() => setSelectedProduct(product)}
            className="font-serif-header text-lg font-bold text-[#1b1b1b] dark:text-[#fcf9f8] hover:text-[#c25a3f] dark:hover:text-[#00A699] transition-colors cursor-pointer line-clamp-1 mb-1"
          >
            {product.title}
          </h4>

          <p className="text-xs text-[#56423d] dark:text-[#ddc0b9] line-clamp-2 mb-3 font-light">
            {product.stoneOrigin}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between pt-3 border-t border-[#ddc0b9]/30 dark:border-[#89726c]/20">
            <span className="font-serif-header text-xl font-bold text-[#1b1b1b] dark:text-[#fcf9f8]">
              ${product.price.toFixed(2)}
            </span>

            {product.status === 'In Stock' ? (
              <button
                onClick={() => addToCart(product, 1)}
                className="bg-[#9c3e25] dark:bg-[#00A699] hover:bg-[#802913] dark:hover:bg-[#007168] text-white p-2.5 rounded transition-colors flex items-center justify-center gap-1.5 text-xs font-label-caps uppercase tracking-wider"
                title="Add to Bag"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Add</span>
              </button>
            ) : (
              <a
                href={getWhatsAppProductUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-3 py-1.5 rounded text-[11px] font-label-caps uppercase tracking-wider transition-colors flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
