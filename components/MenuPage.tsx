
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface MenuPageProps {
  onSelectProduct: (id: string) => void;
  onBack: () => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onSelectProduct, onBack }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = new Set(PRODUCTS.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="animate-pop bg-soft-cream min-h-screen pb-32 pt-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center md:text-left">
            <button 
              onClick={onBack}
              className="mb-6 inline-flex items-center gap-3 text-warm-brown/40 font-black uppercase tracking-widest text-xs hover:text-warm-gold transition-all"
            >
              <span>← Back to Home</span>
            </button>
            <h1 className="text-6xl md:text-8xl font-black text-warm-brown leading-none">Our Full Menu</h1>
            <p className="font-accent text-3xl text-warm-gold mt-4 italic">Handcrafted in our Birmingham studio</p>
          </div>
          
          <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-warm-gold/5 text-center">
            <p className="text-sm font-black text-warm-brown uppercase tracking-widest mb-2">Available for</p>
            <div className="flex gap-4">
               <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-xs font-black tracking-widest border border-green-100 uppercase">Collection</span>
               <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black tracking-widest border border-blue-100 uppercase">Local Delivery</span>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-warm-brown text-white shadow-2xl scale-105' 
                  : 'bg-white text-warm-brown/50 hover:bg-warm-gold/5 hover:text-warm-brown'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => onSelectProduct(product.id)}
              className="group bg-white rounded-[4rem] p-4 shadow-[0_30px_60px_rgba(67,40,24,0.05)] hover:shadow-[0_50px_100px_rgba(67,40,24,0.15)] transition-all duration-500 hover:-translate-y-4 cursor-pointer relative"
            >
              <div className="relative aspect-square rounded-[3.5rem] overflow-hidden mb-8">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                
                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest text-warm-brown shadow-xl">
                  {product.category}
                </div>

                {product.tag && (
                  <div className="absolute top-8 left-8 bg-warm-gold text-white px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl animate-pulse">
                    {product.tag}
                  </div>
                )}

                <div className="absolute inset-0 bg-warm-brown/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                   <div className="bg-white text-warm-brown px-10 py-5 rounded-3xl font-black text-sm uppercase tracking-widest shadow-2xl">
                     View & Order
                   </div>
                </div>
              </div>

              <div className="px-8 pb-8 text-center">
                <h3 className="text-3xl font-serif font-black text-warm-brown mb-3">{product.name}</h3>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-3xl font-black text-warm-gold">{product.price}</span>
                </div>
                <div className="pt-6 border-t border-warm-brown/5 flex justify-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-warm-brown/40">Freshly Baked to Order</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
             <div className="text-8xl mb-8 opacity-20">🧁</div>
             <h3 className="text-3xl font-black text-warm-brown">No bakes found in this range</h3>
             <p className="text-warm-brown/50 mt-4">We are always expanding our menu. Check back soon!</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-32 bg-warm-brown rounded-[5rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-warm-gold/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
           <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Can't find your <br/><span className="text-warm-gold font-accent text-7xl italic">Dream Cake</span>?</h2>
              <p className="text-2xl text-white/60 mb-12 max-w-2xl mx-auto">We specialize in bespoke designs for weddings and major milestones. Let's create something unique together.</p>
              <a href="tel:07988530467" className="inline-flex items-center gap-4 bg-warm-gold text-white px-12 py-6 rounded-3xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Chat Bespoke Design
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
