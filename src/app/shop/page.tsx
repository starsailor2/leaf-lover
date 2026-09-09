'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, X, RotateCcw } from 'lucide-react';
import { initialProducts } from '@/lib/data/products';
import { categories } from '@/lib/data/categories';
import { ProductCard } from '@/components/product/ProductCard';
import { CurvedDropdown } from '@/components/ui/CurvedDropdown';
import { FadeIn } from '@/components/ui/FadeIn';
import { Product } from '@/lib/types';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialNeed = searchParams.get('need') || null;

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCareLevel, setSelectedCareLevel] = useState<string>('all');
  const [selectedLight, setSelectedLight] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  const sortOptions = [
    { value: 'featured', label: 'Featured Collection' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Botanical Alphabetical' },
  ];

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Need filter from query
      if (initialNeed && (!product.suitableFor || !product.suitableFor.includes(initialNeed as any))) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesBot = product.botanicalName?.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesCat = product.category.toLowerCase().includes(q);
        if (!matchesName && !matchesBot && !matchesDesc && !matchesCat) {
          return false;
        }
      }

      // Care Level
      if (selectedCareLevel !== 'all' && product.careLevel !== selectedCareLevel) {
        return false;
      }

      // Light Requirement
      if (selectedLight !== 'all' && product.lightRequirement !== selectedLight) {
        return false;
      }

      // In Stock Only
      if (inStockOnly && product.availability === 'Out of Stock') {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, initialNeed, searchQuery, selectedCareLevel, selectedLight, inStockOnly, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSelectedCareLevel('all');
    setSelectedLight('all');
    setInStockOnly(false);
    setSortBy('featured');
  };

  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedCareLevel !== 'all' ? 1 : 0) +
    (selectedLight !== 'all' ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (searchQuery ? 1 : 0);

  return (
    <div className="min-h-screen bg-cream py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <FadeIn direction="up" className="border-b border-forest/10 pb-8 mb-8">
          <span className="text-xs uppercase tracking-widest text-leaf font-semibold">
            Botanical Catalogue
          </span>
          <h1 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mt-1">
            Shop Plants, Vessels & Care
          </h1>
          <p className="text-forest/70 text-sm mt-2 max-w-xl">
            Each plant is nurtured in our partner nursery, inspected for vigorous roots, and packed with biodegradable protection for safe door delivery.
          </p>
        </FadeIn>

        {/* Search Bar & Controls Header */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by plant name, care, or type..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/80 border border-forest/15 rounded-lg text-sm text-forest placeholder-forest/40 focus:outline-none focus:border-forest/40 focus:bg-white transition-all shadow-soft"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-forest/40 hover:text-forest"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right Controls (Sort & Mobile filter button) */}
          <div className="flex items-center gap-3">
            {/* Mobile Filter Trigger */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-forest/15 rounded-lg text-sm font-medium text-forest shadow-soft"
            >
              <SlidersHorizontal className="w-4 h-4 text-leaf" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-forest text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Curved Sort Dropdown */}
            <div className="flex items-center">
              <CurvedDropdown
                value={sortBy}
                onChange={setSortBy}
                options={sortOptions}
                prefix="Sort:"
                pill={true}
                size="md"
              />
            </div>
          </div>

        </div>

        {/* Main Layout: Sidebar Filters + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Desktop Left Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-white/70 rounded-xl p-5 border border-forest/10 shadow-soft space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-forest/10">
                <h3 className="font-serif text-base font-bold text-forest">Filter Products</h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-terracotta hover:underline flex items-center gap-1 font-medium"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-forest/70">Category</h4>
                <div className="space-y-1 text-sm">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left py-1.5 px-2 rounded-md transition-colors text-xs font-medium flex justify-between ${
                      selectedCategory === 'all' ? 'bg-forest text-cream' : 'text-forest/70 hover:bg-forest/5'
                    }`}
                  >
                    <span>All Products</span>
                    <span>({initialProducts.length})</span>
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full text-left py-1.5 px-2 rounded-md transition-colors text-xs font-medium flex justify-between ${
                        selectedCategory === cat.slug ? 'bg-forest text-cream' : 'text-forest/70 hover:bg-forest/5'
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                      <span>({cat.itemCount})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Care Level */}
              <div className="space-y-2 pt-3 border-t border-forest/10">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-forest/70">Care Level</h4>
                <div className="space-y-1.5 text-xs text-forest/80">
                  {['all', 'Easy Care', 'Moderate', 'High Care'].map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="careLevel"
                        checked={selectedCareLevel === level}
                        onChange={() => setSelectedCareLevel(level)}
                        className="text-forest focus:ring-forest accent-forest"
                      />
                      <span>{level === 'all' ? 'All Care Levels' : level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Light Requirement */}
              <div className="space-y-2 pt-3 border-t border-forest/10">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-forest/70">Sunlight</h4>
                <div className="space-y-1.5 text-xs text-forest/80">
                  {['all', 'Low Light', 'Medium / Indirect', 'Bright Indirect', 'Direct Sunlight'].map((light) => (
                    <label key={light} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="sunlight"
                        checked={selectedLight === light}
                        onChange={() => setSelectedLight(light)}
                        className="text-forest focus:ring-forest accent-forest"
                      />
                      <span>{light === 'all' ? 'All Light Conditions' : light}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* In Stock Toggle */}
              <div className="pt-3 border-t border-forest/10">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-forest">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="rounded text-forest focus:ring-forest accent-forest"
                  />
                  <span>Show In-Stock Only</span>
                </label>
              </div>

            </div>
          </aside>

          {/* Products Grid Column */}
          <main className="lg:col-span-9">
            
            {/* Active Filters Pill Bar */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs text-forest/60">Active Filters:</span>
                {selectedCategory !== 'all' && (
                  <span className="bg-forest/10 text-forest text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                    Category: {categories.find((c) => c.slug === selectedCategory)?.name || selectedCategory}
                    <button onClick={() => setSelectedCategory('all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedCareLevel !== 'all' && (
                  <span className="bg-forest/10 text-forest text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                    Care: {selectedCareLevel}
                    <button onClick={() => setSelectedCareLevel('all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedLight !== 'all' && (
                  <span className="bg-forest/10 text-forest text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                    Light: {selectedLight}
                    <button onClick={() => setSelectedLight('all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {inStockOnly && (
                  <span className="bg-forest/10 text-forest text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                    In Stock Only
                    <button onClick={() => setInStockOnly(false)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={resetFilters}
                  className="text-xs text-terracotta hover:underline ml-2"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Results Count */}
            <div className="mb-4 text-xs text-forest/60">
              Showing <span className="font-semibold text-forest">{filteredProducts.length}</span> plants & botanical goods
            </div>

            {/* Empty State from instruction.md */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white/60 rounded-2xl border border-forest/10 p-12 text-center space-y-4 max-w-lg mx-auto my-12">
                <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center mx-auto text-leaf">
                  <RotateCcw className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forest">
                  We’re growing our collection.
                </h3>
                <p className="text-xs sm:text-sm text-forest/70 leading-relaxed">
                  No plants match your specific combination of filters right now. Try clearing some filters or talk to our horticulturists directly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={resetFilters}
                    className="px-5 py-2.5 bg-forest text-cream text-xs font-semibold rounded-md hover:bg-forest-800 transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, idx) => (
                  <FadeIn key={product.id} direction="up" delay={Math.min((idx % 6) * 50, 250)}>
                    <ProductCard product={product} />
                  </FadeIn>
                ))}
              </div>
            )}

          </main>

        </div>

      </div>

      {/* Mobile Filters Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-cream-light h-full p-6 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-forest/10">
                <h3 className="font-serif text-lg font-bold text-forest">Filters</h3>
                <button onClick={() => setMobileFilterOpen(false)} className="p-1 text-forest">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-forest/70">Category</h4>
                <div className="space-y-1 text-xs">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left py-1.5 px-2 rounded-md ${selectedCategory === 'all' ? 'bg-forest text-cream font-semibold' : 'text-forest/70'}`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full text-left py-1.5 px-2 rounded-md ${selectedCategory === cat.slug ? 'bg-forest text-cream font-semibold' : 'text-forest/70'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Care Level */}
              <div className="space-y-2 pt-3 border-t border-forest/10">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-forest/70">Care Level</h4>
                <div className="space-y-1.5 text-xs text-forest/80">
                  {['all', 'Easy Care', 'Moderate', 'High Care'].map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="mobileCare"
                        checked={selectedCareLevel === level}
                        onChange={() => setSelectedCareLevel(level)}
                        className="accent-forest"
                      />
                      <span>{level === 'all' ? 'All' : level}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-forest/10 space-y-2">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-forest text-cream text-xs font-semibold rounded-md shadow"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
              <button
                onClick={resetFilters}
                className="w-full py-2 text-xs text-forest/60 hover:text-forest"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream py-16 text-center text-forest">Loading Botanical Catalogue...</div>}>
      <ShopContent />
    </Suspense>
  );
}
