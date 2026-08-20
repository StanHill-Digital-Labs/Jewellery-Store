import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onShopClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopClick }) => {
  return (
    <section className="relative w-full h-[550px] sm:h-[650px] md:h-[720px] flex items-center justify-center overflow-hidden bg-[#1C1C1C]">
      {/* Background Hero Image with blend mode */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-85 mix-blend-luminosity scale-105 transform transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhS6s1wUdfHoaqYcTsqvYieu0-QOFfkhzF1ylLDIth1-fw2NRDJc8SbBMI1_PNaRvdw-hL9W3GD6RtdWmNkdIbTmQev1_zMpMCoN1FROybtNUfxNZuMQauh9agtM-9z1aqiQCDk6i2MhsjdYqFhYQ3OlgeXiYLz2DUoOWaVoh9q1CFVdtthxVwTOpOEuF0e8zmFyVns-jyJTCGxJfJlSCYbZZbp9qEHDOfNfIXPtLDcuaaXXADE2v7')`
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c25a3f]/20 dark:bg-[#00A699]/20 border border-[#c25a3f]/40 dark:border-[#00A699]/40 text-[#ffdbd2] dark:text-[#7af7e8] mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-[11px] font-label-caps uppercase tracking-widest">
            Authentic Southwestern Silversmithing
          </span>
        </div>

        <h2 className="font-serif-header text-3xl sm:text-5xl md:text-6xl text-[#fcf9f8] font-bold leading-tight mb-6 drop-shadow-lg tracking-wide">
          Handcrafted Heritage.<br />
          <span className="italic font-normal text-[#ddc0b9] dark:text-[#5bdacc]">
            Forged in Silver and Stone.
          </span>
        </h2>

        <p className="font-sans-body text-base sm:text-lg text-[#ddc0b9] max-w-xl mb-8 leading-relaxed font-light">
          Statement rings, hand-stamped cuffs, upper arm bands, and heavy pendant necklaces handcrafted with Kingman turquoise, Jasper, and precious gems embedded in sterling silver.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onShopClick}
            className="w-full sm:w-auto bg-[#9c3e25] dark:bg-[#00A699] hover:bg-[#802913] dark:hover:bg-[#007168] text-white font-label-caps text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Shop the Collection</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
