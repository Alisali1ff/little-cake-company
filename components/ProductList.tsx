import React from 'react';
import { PRODUCTS } from '../constants';

interface ProductListProps {
  onSelectProduct: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
  return (
    <section id="shop" className="py-32 bg-[#FAF9F6] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-warm-gold/5 -z-10 rounded-l-[10rem]"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-4">
          <div className="max-w-xl">
            <span className="text-warm-gold font-black uppercase tracking-[0.4em] text-sm block mb-4">Ready to Order</span>
            <h2 className="text-6xl md:text-8xl font-black text-warm-brown leading-none">The Shop</h2>
            <p className="mt-8 text-2xl text-warm-brown/50 font-accent italic">"Freshly baked, beautifully boxed, and ready to make your day."</p>
          </div>
          <div className="flex items-center gap-4 text-warm-brown/40 text-sm font-bold tracking-widest uppercase">
            <span>Scroll to browse</span>
            <div className="w-12 h-[2px] bg-warm-gold/20"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              onClick={() => onSelectProduct(product.id)}
              className="group cursor-pointer bg-white rounded-[3.5rem] p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(67,40,24,0.15)] transition-all duration-500 hover:-translate-y-4 border border-warm-gold/5"
            >
              <div className="relative aspect-square rounded-[3rem] overflow-hidden mb-8 shadow-inner">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Product Tags */}
                {product.tag && (
                  <div className="absolute top-6 left-6 bg-warm-gold text-white px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">
                    {product.tag}
                  </div>
                )}
                
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest text-warm-brown shadow-lg">
                  {product.category}
                </div>

                {/* Quick Order Overlay */}
                <div className="absolute inset-0 bg-warm-brown/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                   <div className="bg-white text-warm-brown px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-110 transition-transform">
                     View Details
                   </div>
                </div>
              </div>

              <div className="px-6 pb-6 text-center">
                <h3 className="text-2xl font-serif font-black text-warm-brown mb-2">{product.name}</h3>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-warm-gold font-black text-xl">{product.price}</span>
                  <div className="w-1 h-1 bg-warm-gold/30 rounded-full"></div>
                  <span className="text-xs font-bold text-warm-brown/30 uppercase tracking-widest">In Stock Today</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;