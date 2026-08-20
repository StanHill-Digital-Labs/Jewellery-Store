import React, { useState } from 'react';
import { X, Ruler, Sparkles, CheckCircle2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const SizingGuideModal: React.FC = () => {
  const { isSizingGuideOpen, setIsSizingGuideOpen } = useStore();
  const [activeTab, setActiveTab] = useState<'ring' | 'cuff' | 'armband'>('cuff');

  if (!isSizingGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#fcf9f8] dark:bg-[#1C1C1C] text-[#1b1b1b] dark:text-[#fcf9f8] rounded-lg shadow-2xl p-6 sm:p-8 border border-[#ddc0b9] dark:border-[#89726c]/40 my-8">
        
        <button
          onClick={() => setIsSizingGuideOpen(false)}
          className="absolute top-4 right-4 text-[#89726c] hover:text-[#1b1b1b] dark:hover:text-[#fcf9f8]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Ruler className="w-5 h-5 text-[#c25a3f] dark:text-[#00A699]" />
          <h3 className="font-serif-header text-xl font-bold uppercase tracking-wider">
            Custom Artisan Sizing Guide
          </h3>
        </div>

        <p className="text-xs text-[#56423d] dark:text-[#ddc0b9] mb-6">
          Unlike machine-made jewelry, solid sterling silver cuffs and statement rings must be sized correctly to ensure comfort and prevent metal stress.
        </p>

        {/* Tabs */}
        <div className="flex border-b border-[#ddc0b9] dark:border-[#89726c]/30 mb-6 gap-2">
          <button
            onClick={() => setActiveTab('cuff')}
            className={`pb-2.5 text-xs font-label-caps uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'cuff'
                ? 'border-[#c25a3f] dark:border-[#00A699] text-[#c25a3f] dark:text-[#00A699] font-bold'
                : 'border-transparent text-[#89726c]'
            }`}
          >
            Wrist Cuffs
          </button>
          <button
            onClick={() => setActiveTab('armband')}
            className={`pb-2.5 text-xs font-label-caps uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'armband'
                ? 'border-[#c25a3f] dark:border-[#00A699] text-[#c25a3f] dark:text-[#00A699] font-bold'
                : 'border-transparent text-[#89726c]'
            }`}
          >
            Rigid Upper Arm Bands
          </button>
          <button
            onClick={() => setActiveTab('ring')}
            className={`pb-2.5 text-xs font-label-caps uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'ring'
                ? 'border-[#c25a3f] dark:border-[#00A699] text-[#c25a3f] dark:text-[#00A699] font-bold'
                : 'border-transparent text-[#89726c]'
            }`}
          >
            Statement Rings
          </button>
        </div>

        {/* Tab Contents */}
        <div className="space-y-4 text-xs text-[#56423d] dark:text-[#ddc0b9]">
          
          {activeTab === 'cuff' && (
            <div className="space-y-4">
              <div className="bg-[#f0eded] dark:bg-[#313030]/50 p-4 rounded border border-[#ddc0b9]/40">
                <h4 className="font-serif-header text-sm font-bold uppercase text-[#1b1b1b] dark:text-[#fcf9f8] mb-2">
                  How To Measure Your Wrist For a Rigid Cuff
                </h4>
                <ol className="list-decimal pl-4 space-y-1.5">
                  <li>Wrap a flexible measuring tape snuggly around your wrist bone.</li>
                  <li>Do not add extra room—the cuff gap (opening) accounts for entry.</li>
                  <li>Compare your exact measurement to our size matrix below:</li>
                </ol>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#ddc0b9] font-label-caps uppercase text-[11px] text-[#1b1b1b] dark:text-[#fcf9f8]">
                      <th className="py-2">Cuff Size</th>
                      <th className="py-2">Wrist Circumference</th>
                      <th className="py-2">Cuff Gap Opening</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ddc0b9]/30">
                    <tr>
                      <td className="py-2 font-bold">Small</td>
                      <td className="py-2">5.5" - 6.0" (14 - 15 cm)</td>
                      <td className="py-2">1.0 inch opening</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold">Medium</td>
                      <td className="py-2">6.0" - 6.5" (15 - 16.5 cm)</td>
                      <td className="py-2">1.25 inch opening</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold">Large</td>
                      <td className="py-2">6.5" - 7.0" (16.5 - 18 cm)</td>
                      <td className="py-2">1.50 inch opening</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex items-center gap-2 p-3 bg-[#a76526]/10 text-[#a76526] dark:text-[#7af7e8] rounded text-[11px]">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <span><strong>Important Tip:</strong> Never squeeze or pull apart a stone cuff while wearing it. Gently slide the cuff onto the side of your wrist where the skin is softest.</span>
              </div>
            </div>
          )}

          {activeTab === 'armband' && (
            <div className="space-y-4">
              <div className="bg-[#f0eded] dark:bg-[#313030]/50 p-4 rounded border border-[#ddc0b9]/40">
                <h4 className="font-serif-header text-sm font-bold uppercase text-[#1b1b1b] dark:text-[#fcf9f8] mb-2">
                  Rigid Upper Arm Band Fitting
                </h4>
                <p className="mb-2 leading-relaxed">
                  Upper arm bands sit firmly around the lower bicep or upper forearm. Measure around the flexed or relaxed bicep muscle where you intend to wear the piece.
                </p>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Small Arm Band:</strong> Fits 8.5" - 9.5" bicep circumference</li>
                  <li><strong>Medium Arm Band:</strong> Fits 9.5" - 10.5" bicep circumference</li>
                  <li><strong>Large Arm Band:</strong> Fits 10.5" - 12.0" bicep circumference</li>
                  <li><strong>Custom Contouring:</strong> Contact us for custom arm band forging.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'ring' && (
            <div className="space-y-4">
              <div className="bg-[#f0eded] dark:bg-[#313030]/50 p-4 rounded border border-[#ddc0b9]/40">
                <h4 className="font-serif-header text-sm font-bold uppercase text-[#1b1b1b] dark:text-[#fcf9f8] mb-2">
                  Wide-Band & Shield Ring Sizing
                </h4>
                <p className="leading-relaxed">
                  Due to the wide shanks of our southwestern shield rings, we recommend sizing up <strong>half a size (+0.5)</strong> compared to thin band rings to ensure comfort over the knuckle.
                </p>
              </div>
            </div>
          )}

        </div>

        <div className="mt-6 pt-4 border-t border-[#ddc0b9] dark:border-[#89726c]/30 text-right">
          <button
            onClick={() => setIsSizingGuideOpen(false)}
            className="px-6 py-2.5 bg-[#9c3e25] dark:bg-[#00A699] text-white rounded text-xs font-label-caps uppercase tracking-wider"
          >
            Got It, Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
