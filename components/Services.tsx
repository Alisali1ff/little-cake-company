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
      const scrollAmount = 400;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-warm-brown mb-4 tracking-tight">The Sweet Menu</h2>
            <p className="font-accent text-3xl text-warm-gold">Handcrafted for your heart's desire</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-16 h-16 rounded-3xl bg-soft-cream flex items-center justify-center text-warm-brown hover:bg-warm-gold hover:text-white transition-all shadow-xl active:scale-90"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-16 h-16 rounded-3xl bg-soft-cream flex items-center justify-center text-warm-brown hover:bg-warm-gold hover:text-white transition-all shadow-xl active:scale-90"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth p-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICES.map((service, i) => (
            <div 
              key={service.id} 
              onClick={() => onSelectService(service.id)}
              className={`flex-none w-[85vw] md:w-[400px] snap-center group relative cursor-pointer`}
              style={{ transform: `rotate(${i % 2 === 0 ? '-1' : '1'}deg)` }}
            >
              <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-white group-hover:-translate-y-4">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-black text-xs uppercase text-warm-brown tracking-widest shadow-lg">
                    Premium
                  </div>
                </div>
                <div className="p-10 text-center">
                  <h3 className="text-3xl font-serif font-black text-warm-brown mb-4">{service.title}</h3>
                  <div className="w-12 h-1 bg-warm-gold/20 mx-auto mb-6 group-hover:w-24 transition-all duration-500"></div>
                  <button className="bg-warm-gold/5 text-warm-gold px-8 py-3 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-warm-gold hover:text-white transition-colors">
                    Explore Details
                  </button>
                </div>
              </div>
              {/* Decorative accent behind */}
              <div className="absolute inset-0 bg-warm-gold/5 -z-10 rounded-[3rem] translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
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