
import React, { useRef } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
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
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl text-warm-brown mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-warm-gold mb-6"></div>
            <p className="text-warm-brown/60 text-lg">
              We take pride in being part of your most cherished memories. Our clients consistently rate us 5 stars for design and flavor.
            </p>
          </div>
          
          {/* Controls & Overall Rating */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex items-center gap-4 bg-soft-cream px-6 py-3 rounded-full border border-warm-gold/10">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warm-gold fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-warm-brown text-lg">5.0 / 5.0</span>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-14 h-14 rounded-full border border-warm-gold/30 flex items-center justify-center text-warm-brown hover:bg-warm-gold hover:text-white transition-all shadow-sm active:scale-95"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-14 h-14 rounded-full border border-warm-gold/30 flex items-center justify-center text-warm-brown hover:bg-warm-gold hover:text-white transition-all shadow-sm active:scale-95"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Wrapper */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="flex-none w-[85vw] md:w-[450px] snap-start group bg-soft-cream p-10 rounded-3xl border border-warm-gold/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative"
            >
              {/* Quote Icon Background */}
              <svg className="absolute top-8 right-8 h-16 w-16 text-warm-gold/5 group-hover:text-warm-gold/10 transition-colors" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v8H6c0 4.4 3.6 8 8 8h2v4h-2c-6.6 0-12-5.4-12-12V8h8zm16 0v8h-4c0 4.4 3.6 8 8 8h2v4h-2c-6.6 0-12-5.4-12-12V8h8z" />
              </svg>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-warm-gold fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="text-xl text-warm-brown/80 italic mb-8 leading-relaxed font-serif relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-warm-gold/10">
                <div className="w-12 h-12 bg-warm-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-warm-brown text-lg">{t.name}</p>
                  <p className="text-sm text-warm-brown/50 uppercase tracking-widest">{t.location}</p>
                </div>
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

export default Testimonials;
