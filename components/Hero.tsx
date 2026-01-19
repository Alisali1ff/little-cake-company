
import React, { useState, useEffect, useCallback } from 'react';
import { PHONE_NUMBER } from '../constants';

interface HeroProps {
  onMenuClick: () => void;
}

const SLIDES = [
  {
    id: 1,
    tag: "Handcrafted in Birmingham",
    title: "Cakes that",
    accent: "sparkle",
    suffix: "& delight.",
    description: "Not just a dessert, but a memory in the making. Our bespoke tiers are baked with love, laughter, and a generous sprinkle of magic.",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1200&auto=format&fit=crop",
    floatImage: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=400&auto=format&fit=crop",
    color: "text-warm-gold"
  },
  {
    id: 2,
    tag: "Bespoke Wedding Art",
    title: "Tiers of",
    accent: "pure joy",
    suffix: "for your day.",
    description: "Elegant, sophisticated, and breathtakingly delicious. We design wedding cakes that stand as the centerpiece of your most beautiful beginning.",
    image: "https://www.khalidskakes.co.uk/wp-content/uploads/img_7929-edit-scaled.jpg",
    floatImage: "https://images.unsplash.com/photo-1522673607200-164848efeea1?q=80&w=400&auto=format&fit=crop",
    color: "text-pink-400"
  },
  {
    id: 3,
    tag: "Celebration Specialists",
    title: "Making your",
    accent: "wildest dreams",
    suffix: "edible.",
    description: "From whimsical unicorns to luxury chocolate drips, we turn your imagination into a delicious reality for every milestone.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200&auto=format&fit=crop",
    floatImage: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop",
    color: "text-blue-400"
  }
];

const Hero: React.FC<HeroProps> = ({ onMenuClick }) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = SLIDES[current];

  return (
    <section className="relative min-h-[95vh] w-full flex items-center pt-24 pb-12 overflow-hidden bg-[#FFF9F2]">
      {/* Dynamic Vector Layer (Static Background) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="absolute top-24 left-[5%] w-32 h-32 text-warm-gold/20 animate-float" viewBox="0 0 100 100" style={{ animationDelay: '0.2s' }}>
          <path d="M50 20 C40 20 35 30 35 40 L35 70 C35 80 40 85 50 85 C60 85 65 80 65 70 L65 40 C65 30 60 20 50 20 M45 25 L55 25 M40 35 L60 35 M38 45 L62 45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="47" y="85" width="6" height="12" rx="2" fill="currentColor" />
        </svg>
        <div className="absolute top-[40%] left-[45%] w-4 h-4 bg-warm-gold rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-[60%] right-[35%] w-6 h-6 border-2 border-pink-300 rounded-lg rotate-45 opacity-30 animate-float" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content Area */}
        <div key={`text-${current}`} className="text-center lg:text-left animate-pop">
          <div className="relative inline-block mb-6">
            <span className="relative z-10 px-6 py-2 rounded-full bg-white text-warm-gold font-bold text-sm tracking-widest uppercase shadow-sm border border-warm-gold/10">
              {slide.tag}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[86px] font-black text-warm-brown leading-[0.9] mb-8">
            {slide.title} <br/>
            <span className="relative inline-block">
              <span className={`${slide.color} font-accent px-2 transition-colors duration-500`}>{slide.accent}</span>
              <svg className="absolute -bottom-2 left-0 w-full h-4 opacity-30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q25 0 50 10 T100 10" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span> <br/>
            {slide.suffix}
          </h1>
          
          <p className="text-xl text-warm-brown/70 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed min-h-[4rem]">
            {slide.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
              className="group relative bg-warm-gold text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl hover:shadow-warm-gold/40 hover:-translate-y-2 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Order Your Joy
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
            <button 
              onClick={onMenuClick} 
              className="px-12 py-6 rounded-2xl font-black text-xl border-4 border-warm-brown text-warm-brown transition-all hover:bg-warm-brown hover:text-white"
            >
              The Menu
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-3">
             {SLIDES.map((_, idx) => (
               <button 
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${current === idx ? 'w-12 bg-warm-gold' : 'w-3 bg-warm-brown/10 hover:bg-warm-brown/30'}`}
                aria-label={`Go to slide ${idx + 1}`}
               />
             ))}
          </div>
        </div>

        {/* Visual Content Area */}
        <div className="relative group/visual">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/90 backdrop-blur rounded-full shadow-2xl flex items-center justify-center text-warm-brown opacity-0 group-hover/visual:opacity-100 transition-opacity hover:bg-warm-gold hover:text-white active:scale-90"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/90 backdrop-blur rounded-full shadow-2xl flex items-center justify-center text-warm-brown opacity-0 group-hover/visual:opacity-100 transition-opacity hover:bg-warm-gold hover:text-white active:scale-90"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
          </button>

          <div key={`image-${current}`} className="relative animate-pop">
            <svg className="absolute -top-10 -left-10 w-full h-full text-warm-gold/5 -z-10 animate-pulse" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
            </svg>

            <div className="relative z-10 rounded-[4rem] overflow-hidden rotate-3 shadow-[0_50px_100px_-20px_rgba(67,40,24,0.3)] border-[12px] border-white transition-transform hover:rotate-0 duration-700">
              <img 
                src={slide.image} 
                alt={slide.accent} 
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/40 to-transparent flex items-end p-12">
                 <p className="text-white font-accent text-4xl">Handcrafted perfection...</p>
              </div>
            </div>
            
            {/* Floating Inset Image */}
            <div className="absolute -top-12 -right-12 z-20 w-56 h-56 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl animate-float" style={{ animationDuration: '5s' }}>
              <img 
                src={slide.floatImage} 
                alt="Detail view" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-12 z-20 bg-white p-8 rounded-[2.5rem] shadow-2xl border-4 border-warm-gold/10 rotate-[-10deg] animate-float flex flex-col items-center justify-center text-center" style={{ animationDuration: '6s' }}>
              <svg className="w-12 h-12 text-warm-gold mb-2" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V8z"/>
              </svg>
              <span className="font-black text-warm-brown text-xl leading-none">100%<br/><span className="text-sm uppercase tracking-widest opacity-50">Natural</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
