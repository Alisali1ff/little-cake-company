import React from 'react';
import { PHONE_NUMBER, LOCATION } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Vectors */}
      <svg className="absolute top-0 right-0 w-64 h-64 text-warm-gold/5 translate-x-1/3 -translate-y-1/3" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="50" />
      </svg>
      <svg className="absolute bottom-10 left-10 w-32 h-32 text-pink-300/20 animate-float" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="relative order-2 lg:order-1">
            {/* Playful Vector Frame */}
            <div className="absolute -inset-6 border-4 border-dashed border-warm-gold/20 rounded-[4rem] -rotate-3 animate-pulse"></div>
            
            <div className="relative z-10 aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1000&auto=format&fit=crop" 
                alt="Luxury Cake Studio" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Vector Elements */}
            <div className="absolute -bottom-12 -right-12 w-3/4 aspect-square rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-8 border-white z-20 hidden md:block group transition-transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop" 
                alt="Handcrafted Details" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-warm-gold/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>

            {/* Floating Baker Vector Icon */}
            <div className="absolute -top-10 -left-10 bg-warm-gold text-white p-6 rounded-full shadow-2xl animate-float z-30">
               <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zM12 10l-4-2M12 10l4-2M12 10v6" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
          </div>

          <div className="space-y-10 order-1 lg:order-2">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-warm-gold"></div>
                <span className="text-warm-gold font-black uppercase tracking-[0.3em] text-sm">Our Magic Story</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-warm-brown leading-tight">
                About Little <br/>Cake <span className="text-warm-gold font-accent text-6xl italic">Company</span>
              </h2>
            </div>

            <div className="space-y-8 text-xl text-warm-brown/70 leading-relaxed">
              <p className="font-bold text-warm-brown text-2xl">
                We believe a cake is more than just ingredients; it's the heart of your celebration.
              </p>
              <p>
                Based in our sun-drenched Birmingham studio on <span className="text-warm-brown font-black underline decoration-warm-gold/30 underline-offset-8">Wensley Road</span>, we've spent years perfecting the balance between breathtaking artistry and soul-satisfying taste.
              </p>
              
              <div className="grid grid-cols-2 gap-8 py-6">
                <div className="space-y-2">
                   <h4 className="font-black text-warm-gold text-3xl">12k+</h4>
                   <p className="text-sm font-bold uppercase tracking-widest opacity-50">Slices Served</p>
                </div>
                <div className="space-y-2">
                   <h4 className="font-black text-warm-gold text-3xl">100%</h4>
                   <p className="text-sm font-bold uppercase tracking-widest opacity-50">Handmade</p>
                </div>
              </div>

              <p className="italic font-serif">
                "Every tiered creation is a collaborative journey between your vision and our craftsmanship. We don't just bake—we create edible heirlooms."
              </p>
            </div>

            <div className="pt-10 flex flex-col sm:flex-row items-center gap-8">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
                className="w-full sm:w-auto bg-warm-brown hover:bg-warm-gold text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-y-2 active:scale-95"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Book a Tasting
              </a>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 bg-soft-cream rounded-full flex items-center justify-center group-hover:bg-warm-gold transition-colors">
                  <svg className="w-6 h-6 text-warm-gold group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="font-black text-warm-brown">Studio Hub</p>
                  <p className="text-sm opacity-60">Birmingham, B26 1LT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;