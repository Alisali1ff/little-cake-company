
import React, { useRef } from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onSelectService: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-soft-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl text-warm-brown mb-4">Our Collections</h2>
            <div className="w-24 h-1 bg-warm-gold mb-6"></div>
            <p className="text-warm-brown/60 text-lg">
              Explore our diverse range of handcrafted delights, from magical unicorns to elegant wedding tiers.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-warm-gold/30 flex items-center justify-center text-warm-brown hover:bg-warm-gold hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Previous service"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-warm-gold/30 flex items-center justify-center text-warm-brown hover:bg-warm-gold hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Next service"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              onClick={() => onSelectService(service.id)}
              className="flex-none w-[85vw] md:w-[400px] snap-start group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-warm-gold/10 cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-warm-brown mb-3 group-hover:text-warm-gold transition-colors">{service.title}</h3>
                <p className="text-warm-brown/70 leading-relaxed mb-6 h-20 overflow-hidden line-clamp-3">
                  {service.description}
                </p>
                <button className="text-warm-gold font-bold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  View Collection 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Services;
