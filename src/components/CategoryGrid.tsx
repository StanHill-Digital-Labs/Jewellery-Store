import React from 'react';
import { Category } from '../types';

interface CategoryGridProps {
  onSelectCategory: (category: Category) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (cat: Category) => {
    onSelectCategory(cat);
    const elem = document.getElementById('product-collection-grid');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    {
      title: 'Rings' as Category,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFb_hFhiTvSGJZR-N02kcsGwzwILOU1uKsw0XQjjasPLyzwwZiHsN7og7mTXDotJ8GqQzWq7jyyAfSBidjOoyZE42rJEU-EEq6F0SMyytdCk3y3HV7HxAT-0IhVAz0XZsWwIlb-1yuNdwRpAR6FPtrx-kPjP_kta1ipG74UGeAGADiHkQWAfxTj9AYUbxj4j0RXTahoOR700nUHQUcm-kubItEb2RkoLQtA9LTT0dRKgFbiHSl67xV',
      subtitle: 'Statement Shield & Bezel Rings'
    },
    {
      title: 'Cuff & Arm' as Category,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3TDGrh6aqGiVrEjOF-3DW-NsU9NCgMkYCSu5lDaqKeR6wmWrHfIuYRaaWc1fhDVMq99K5nqyLQWip661ftGThM7QSVgYOfkuitMMw877pP5aFPyMh9RpG0zDzSrPqcCPyAcJ4DtBy6u95VhRyIJ2TmpUywPfh9jxyqFRvte9vYVrkqmmnYxx2OFmazEb76sLNuGCGarxVAdSRBKOMVkjoYeEfh5lnP_5FGReVA4AiYL32YYY0kP7Z',
      subtitle: 'Stamped Cuffs & Rigid Upper Arm Bands'
    },
    {
      title: 'Necklaces' as Category,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcwple01zS-yjUYPs5KRRsOlg_JN0ZyUUNZj_Hs1ukx-sdyT8I1iBhqzxVRy1Gz8cJ208MC8XA927DKuEOkxOWyE-S1wldv3-1iiRSq8Pl9C9KqSV29NevMK0wSdXzK3DzVvKstoZneINyQeWUdd9oDcaTe14F6TLPTjjQZcQkkihZv9AiLWPuIUwZcx8fXdyfMSsrw4tcKnDFJz5_rAsmE9G9Nou9pFGY5vHinX42Ytr_zPeAmdtW',
      subtitle: 'Heavy Pendants & Bench Pearls'
    },
    {
      title: 'New Arrivals' as Category,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8q42f2Pm-bxYtnoFOEI3WJAX3qRotbrZywi_shAwqAvjP_PNchesxHFSWue1s5CjCdJFiCbIscaLgx8M7Bsigi7XCYuoqP6gfIN0ch18lL_12zfNSyClWij_4dkzLvjEja7k-7ETTINhqJ41iHzGwh80zDZA0QAOk8__C2NDpCyuOoQcPxbjyhAm6jbZsCAqQ8mFqIUTzHTqJeP2qvD010iz_TjwzpMGQV-kQRyxc-EIkfMODgdlL',
      subtitle: 'Fresh From the Workbench'
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="font-label-caps text-xs text-[#c25a3f] dark:text-[#00A699] uppercase tracking-[0.2em] mb-2 font-semibold">
          Explore The Craft
        </p>
        <h3 className="font-serif-header text-2xl sm:text-4xl text-[#1b1b1b] dark:text-[#fcf9f8] font-bold uppercase tracking-wide">
          Shop by Category
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            onClick={() => handleCategoryClick(cat.title)}
            className="group relative overflow-hidden h-96 rounded-md bg-[#f0eded] dark:bg-[#313030] cursor-pointer silver-shadow transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${cat.image}')` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/30 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

            {/* Title & Subtitle */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">
              <span className="font-label-caps text-[11px] text-[#5bdacc] dark:text-[#7af7e8] uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cat.subtitle}
              </span>
              <h4 className="font-serif-header text-2xl text-[#fcf9f8] font-bold uppercase tracking-wider group-hover:text-[#ffb4a2] dark:group-hover:text-[#00A699] transition-colors">
                {cat.title}
              </h4>
              <div className="w-8 h-0.5 bg-[#c25a3f] dark:bg-[#00A699] mt-3 transition-all duration-300 group-hover:w-16" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
