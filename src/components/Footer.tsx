import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MessageCircle, Lock } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Footer: React.FC = () => {
  const { setIsSizingGuideOpen, getWhatsAppGeneralUrl } = useStore();

  return (
    <footer className="bg-[#1C1C1C] text-[#fcf9f8] border-t border-[#89726c]/40 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block"
            >
              <h3 className="font-serif-header text-2xl font-bold uppercase tracking-widest text-[#fcf9f8] hover:text-[#00A699] transition-colors">
                SILVER & STONE
              </h3>
            </Link>
            <p className="text-xs text-[#ddc0b9] leading-relaxed max-w-sm">
              Handcrafted Southwestern silversmithing specializing in hand-cut Kingman turquoise, Jasper, and precious gemstones embedded in heavy stamped sterling silver.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-label-caps uppercase tracking-wider text-[#25D366] hover:underline flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-1" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-header text-xs font-bold uppercase tracking-widest text-[#00A699]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#ddc0b9]">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  All Jewelry Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/journal"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  The Artisan's Journal
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsSizingGuideOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom Ring & Cuff Sizing Guide
                </button>
              </li>
              <li>
                <Link
                  to="/inquiries"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Inquiries & Ethical Guarantee
                </Link>
              </li>
            </ul>
          </div>

          {/* Admin & Security */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-header text-xs font-bold uppercase tracking-widest text-[#00A699]">
              Owner Portal
            </h4>
            <p className="text-xs text-[#ddc0b9] leading-relaxed">
              Manage inventory table, switch piece availability ("In Stock", "Out of Stock", "Sold"), and upload new artisan creations.
            </p>
            
            <Link
              to="/admin"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#313030] hover:bg-[#00A699] hover:text-white text-[#ddc0b9] rounded text-xs font-label-caps uppercase tracking-wider transition-colors border border-[#89726c]/40"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Owner Administrative Dashboard</span>
            </Link>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#89726c]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#89726c]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00A699]" />
            <span>&copy; {new Date().getFullYear()} Silver & Stone Artisan Jewellers. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Handmade in New Mexico, USA</span>
            <span>&bull;</span>
            <span>100% Recycled Silver & Untreated Stones</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

