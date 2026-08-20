import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { HeroSection } from '../components/HeroSection';
import { CategoryGrid } from '../components/CategoryGrid';
import { ProductCard } from '../components/ProductCard';
import { Category } from '../types';
import { Sparkles, Search, X } from 'lucide-react';

export const CollectionPage: React.FC = () => {
  const {
    products,
    categoryFilter,
    setCategoryFilter,
    searchQuery,
    setSearchQuery
  } = useStore();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest'>('featured');

  // Filter products by selected category & search query
  const filteredProducts = products
    .filter((p) => {
      // Category Filter
      if (categoryFilter && categoryFilter !== 'All' && categoryFilter !== 'New Arrivals' && p.category !== categoryFilter) {
        return false;
      }
      if (categoryFilter === 'New Arrivals' && !p.featured) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        const matchesStone = p.stoneOrigin.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        const matchesSku = p.sku.toLowerCase().includes(q);
        return matchesTitle || matchesDesc || matchesStone || matchesCategory || matchesSku;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

  const categoriesList: (Category | 'All')[] = ['All', 'Rings', 'Cuff & Arm', 'Necklaces', 'New Arrivals'];

  return (
    <div className="animate-fadeIn">
      {/* Hero Banner (Only if no active search) */}
      {!searchQuery && (
        <HeroSection
          onShopClick={() => {
            const elem = document.getElementById('product-collection-grid');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      )}

      {/* Category Grid (Only if no active search) */}
      {!searchQuery && (
        <CategoryGrid
          onSelectCategory={(cat) => setCategoryFilter(cat)}
        />
      )}

      {/* Product Collection Section */}
      <section
        id="product-collection-grid"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#ddc0b9]/40 dark:border-[#89726c]/30"
      >
        {/* Filter & Search Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-[#ddc0b9]/30 dark:border-[#89726c]/20">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#c25a3f] dark:text-[#00A699]" />
              <span className="font-label-caps text-xs text-[#c25a3f] dark:text-[#00A699] uppercase tracking-widest font-bold">
                Artisan Jewelry Workbench
              </span>
            </div>
            <h3 className="font-serif-header text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#1b1b1b] dark:text-[#fcf9f8]">
              {searchQuery
                ? `Search Results for "${searchQuery}"`
                : categoryFilter && categoryFilter !== 'All'
                ? `${categoryFilter} Collection`
                : 'Complete Silversmith Collection'}
            </h3>
            <p className="text-xs text-[#89726c] dark:text-[#ddc0b9] mt-0.5">
              Showing {filteredProducts.length} handcrafted piece{filteredProducts.length === 1 ? '' : 's'}
            </p>
          </div>

          {/* Category Pills & Sort Selector */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {categoriesList.map((cat) => {
                const isSelected = (cat === 'All' && (!categoryFilter || categoryFilter === 'All')) || categoryFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1.5 text-xs font-label-caps uppercase tracking-wider rounded-full transition-all whitespace-nowrap ${
                      isSelected
                        ? 'bg-[#c25a3f] dark:bg-[#00A699] text-white shadow-md font-semibold'
                        : 'bg-[#f0eded] dark:bg-[#313030] text-[#56423d] dark:text-[#ddc0b9] hover:bg-[#ddc0b9]/40 dark:hover:bg-[#444]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 pl-2 border-l border-[#ddc0b9] dark:border-[#89726c]/40">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#f0eded] dark:bg-[#313030] border border-[#ddc0b9] dark:border-[#89726c] rounded px-3 py-1.5 text-xs font-label-caps uppercase text-[#1b1b1b] dark:text-[#fcf9f8] focus:outline-none cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Search Clear Pill */}
        {searchQuery && (
          <div className="mb-8 flex items-center gap-2">
            <span className="text-xs text-[#89726c] dark:text-[#ddc0b9]">Active search filter:</span>
            <button
              onClick={() => setSearchQuery('')}
              className="inline-flex items-center gap-1 px-3 py-1 bg-[#c25a3f] dark:bg-[#00A699] text-white rounded-full text-xs font-label-caps uppercase"
            >
              <span>"{searchQuery}"</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <Search className="w-12 h-12 text-[#89726c] mx-auto opacity-50" />
            <h4 className="font-serif-header text-xl font-bold uppercase text-[#1b1b1b] dark:text-[#fcf9f8]">
              No Pieces Found
            </h4>
            <p className="text-xs text-[#89726c] dark:text-[#ddc0b9] max-w-sm mx-auto">
              We couldn't find any artisan jewelry matching your criteria. Try clearing your search query or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('All');
              }}
              className="px-6 py-2.5 bg-[#9c3e25] dark:bg-[#00A699] hover:bg-[#802913] dark:hover:bg-[#007168] text-white text-xs font-label-caps uppercase rounded tracking-wider transition-colors shadow"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
