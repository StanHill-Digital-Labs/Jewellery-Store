import React, { useState } from 'react';
import { Play, Flame, Shield, Sparkles, X, Hammer, Compass, Award } from 'lucide-react';

export const ArtisanJournal: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 animate-fadeIn">
      
      {/* Journal Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a76526]/10 text-[#a76526] dark:bg-[#7af7e8]/10 dark:text-[#7af7e8] border border-[#a76526]/30 mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-label-caps uppercase tracking-widest font-semibold">
            Behind the Workbench
          </span>
        </div>
        <h2 className="font-serif-header text-3xl sm:text-5xl font-bold uppercase tracking-wide text-[#1b1b1b] dark:text-[#fcf9f8] mb-6">
          The Artisan's Journal
        </h2>
        <p className="font-sans-body text-base sm:text-lg text-[#56423d] dark:text-[#ddc0b9] leading-relaxed italic">
          "Every hammer strike is a conversation with the metal, a negotiation between raw earth and human intent."
        </p>
        <div className="w-16 h-0.5 bg-[#c25a3f] dark:bg-[#00A699] mx-auto mt-6" />
      </div>

      {/* Raw Elements Grid */}
      <div>
        <h3 className="font-serif-header text-2xl font-bold uppercase tracking-widest text-center mb-10">
          The Raw Elements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Element 1: Turquoise */}
          <div className="md:col-span-8 relative h-80 sm:h-96 rounded-lg overflow-hidden group shadow-xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAkHqh1Bi2znRsAD7WyFbtiZpTgu7uotSYI9DvT4zx_RAz0s_umD1wV2HWNp5_jtv0fH5v3hudjo1QhTHvnntIKKBAXn2jRl30LyJJrnDiIX_aHyjlOKDQsKg1BRTy1VIaIkJSskZ4OsCtUKHmwhGoBs-Tg_cTop5wDiYCYVHwr9ypZJaG3UCoGM5zVZpz29Jsf7E2c0YgNs4iJLt62j1qnCr9DaQIBpgLznTlwO6tqtBtZjvKxPpy"
              alt="Raw American Turquoise"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/30 to-transparent p-6 flex flex-col justify-end">
              <span className="font-label-caps text-xs text-[#5bdacc] uppercase tracking-widest mb-1">
                Ethically Sourced
              </span>
              <h4 className="font-serif-header text-2xl text-white font-bold mb-2">
                Authentic American Turquoise
              </h4>
              <p className="text-xs text-[#ddc0b9] max-w-lg leading-relaxed">
                Hand-picked nuggets from legendary Southwestern mines like Kingman, Royston, and Bisbee. Never synthetic, untreated, and preserved with natural stabilization.
              </p>
            </div>
          </div>

          {/* Element 2: Recycled Sterling */}
          <div className="md:col-span-4 relative h-80 sm:h-96 rounded-lg overflow-hidden group shadow-xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC21vlCaCNJCnRONrwAH625vhS2LHzD4T3Gnl6kcV11jPflI11VtAZJ-rXW0OMqQHg2VViDbWvmzHbOc-aqwW7kpqO_MGOYF7XGFSAz-Zpo34ENSp6tccmfB08cDKV-LgCkmXvOhOFOpgMfoKgtQ5UHpbeHGP5NkdqmZndnqlCejwHeA1cqHfxr6QtlXFwpbStvQYHBLHJjjqsGyW-VfHiKzsvH4EI6q1m1R853K3dahuAUnnEWcPfQ"
              alt="Recycled Sterling Silver"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/30 to-transparent p-6 flex flex-col justify-end">
              <span className="font-label-caps text-xs text-[#ffb77b] uppercase tracking-widest mb-1">
                Sustainable Metallurgy
              </span>
              <h4 className="font-serif-header text-2xl text-white font-bold mb-2">
                100% Recycled .925 Sterling Silver
              </h4>
              <p className="text-xs text-[#ddc0b9] leading-relaxed">
                Forged from heavy-gauge recycled silver sheets and wire, oxidized and hand-buffed for an antique heirloom patina.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Process Video Highlight */}
      <div className="relative h-96 sm:h-[450px] rounded-xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbrnuM5_zn-AoKbikOafRkeXWtOsKKUEA6MZMcgzz-WgRsZESY3FRo-julCSlso9rtLSBl-ODKcXRAMfwrA0EgqCQZpfuiSEGYkdVI6RSxH-UmMYnNcVBz_00Ikt8ixNPfcq-umF0pM3ewbH5Kb9unEb1UPU7afefpjwI6dvUY-THvSndAC8lXUBqPO8uc_LqFA-u07ewULjf2ZvhQE3jycN52hnjZbbRB8y8FTK_7zwGadqA28FcI"
          alt="Forged In Fire"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/50 mix-blend-multiply" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <div className="w-20 h-20 rounded-full border-2 border-white/60 bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#c25a3f] transition-all">
            <Play className="w-8 h-8 fill-current ml-1" />
          </div>
          <span className="font-label-caps text-xs text-[#ffb77b] uppercase tracking-[0.2em] mb-2 font-semibold">
            Watch the Forging Process
          </span>
          <h3 className="font-serif-header text-3xl sm:text-5xl font-bold uppercase tracking-wider drop-shadow-md">
            Forged in Fire
          </h3>
          <p className="text-xs sm:text-sm text-[#ddc0b9] max-w-md mt-2">
            Click to watch how raw silver sheets are annealed, stamped with custom steel punches, and bezel-set around high-grade stone cabochons.
          </p>
        </div>
      </div>

      {/* Tools of the Trade */}
      <div>
        <h3 className="font-serif-header text-2xl font-bold uppercase tracking-widest text-center mb-10">
          Tools of the Trade
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#f0eded] dark:bg-[#313030]/60 p-5 rounded-lg text-center border border-[#ddc0b9]/30">
            <div className="w-12 h-12 rounded-full bg-[#c25a3f]/10 dark:bg-[#00A699]/10 text-[#c25a3f] dark:text-[#00A699] flex items-center justify-center mx-auto mb-4">
              <Hammer className="w-6 h-6" />
            </div>
            <h4 className="font-serif-header text-base font-bold uppercase mb-1">Vintage Hammers</h4>
            <p className="text-xs text-[#56423d] dark:text-[#ddc0b9] leading-relaxed">
              Hand-peened ball and planishing hammers to shape metal and create organic faceted reflections.
            </p>
          </div>

          <div className="bg-[#f0eded] dark:bg-[#313030]/60 p-5 rounded-lg text-center border border-[#ddc0b9]/30">
            <div className="w-12 h-12 rounded-full bg-[#c25a3f]/10 dark:bg-[#00A699]/10 text-[#c25a3f] dark:text-[#00A699] flex items-center justify-center mx-auto mb-4">
              <Flame className="w-6 h-6" />
            </div>
            <h4 className="font-serif-header text-base font-bold uppercase mb-1">Silversmith Torch</h4>
            <p className="text-xs text-[#56423d] dark:text-[#ddc0b9] leading-relaxed">
              High-heat torch annealing to soften sterling silver and melt silver solder seams seamlessly.
            </p>
          </div>

          <div className="bg-[#f0eded] dark:bg-[#313030]/60 p-5 rounded-lg text-center border border-[#ddc0b9]/30">
            <div className="w-12 h-12 rounded-full bg-[#c25a3f]/10 dark:bg-[#00A699]/10 text-[#c25a3f] dark:text-[#00A699] flex items-center justify-center mx-auto mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="font-serif-header text-base font-bold uppercase mb-1">Steel Stamps</h4>
            <p className="text-xs text-[#56423d] dark:text-[#ddc0b9] leading-relaxed">
              Hand-carved steel punches creating sunbursts, arrows, and traditional geometric Southwestern motifs.
            </p>
          </div>

          <div className="bg-[#f0eded] dark:bg-[#313030]/60 p-5 rounded-lg text-center border border-[#ddc0b9]/30">
            <div className="w-12 h-12 rounded-full bg-[#c25a3f]/10 dark:bg-[#00A699]/10 text-[#c25a3f] dark:text-[#00A699] flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-serif-header text-base font-bold uppercase mb-1">Liver of Sulfur</h4>
            <p className="text-xs text-[#56423d] dark:text-[#ddc0b9] leading-relaxed">
              Natural oxidation bath that darkens recessed silver stampings, creating contrast against polished highlights.
            </p>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#1C1C1C] rounded-lg p-6 border border-[#89726c]">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-[#c25a3f]"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="font-serif-header text-xl text-white font-bold uppercase mb-4">
              Behind the Anvil: Artisanal Silversmithing
            </h3>
            <div className="aspect-video bg-black rounded overflow-hidden flex flex-col items-center justify-center p-8 text-center border border-[#89726c]/40">
              <Flame className="w-16 h-16 text-[#c25a3f] animate-pulse mb-4" />
              <p className="text-white font-serif-header text-lg mb-2">
                [Silversmith Workbench Video Demonstration]
              </p>
              <p className="text-xs text-[#ddc0b9] max-w-md">
                Demonstrating silver annealing, hand-stamping with steel punches, serrated bezel fitting around natural Kingman turquoise, and hand-polishing with rouge.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
