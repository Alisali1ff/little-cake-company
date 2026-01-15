
import React from 'react';
import { PHONE_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - Updated with high-impact reliable URL */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Celebration Cake" 
          className="w-full h-full object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center md:text-left w-full">
        <div className="max-w-2xl bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10">
          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
            Bespoke Cakes for Life's <span className="italic text-warm-gold">Sweetest</span> Moments.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
            From award-winning wedding tiers to handcrafted celebration treats, we bring your vision to life in the heart of Birmingham.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
              className="bg-warm-gold text-white hover:bg-red-700 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg text-center transform hover:scale-105"
            >
              Order by Phone
            </a>
            <a 
              href="#services" 
              className="border-2 border-white/50 text-white hover:bg-white hover:text-warm-brown px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
            >
              Explore Collections
            </a>
          </div>
          <p className="mt-6 text-white/70 text-sm italic flex items-center justify-center md:justify-start gap-2">
            <span className="flex text-warm-gold">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
            "Voted Best Local Bakery Birmingham 2024"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
