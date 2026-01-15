
import React from 'react';
import { PHONE_NUMBER, LOCATION } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Composition - Webflow Style */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1000&auto=format&fit=crop" 
                alt="Luxury Cake Studio" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay secondary image */}
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white z-20 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop" 
                alt="Handcrafted Details" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-warm-gold/10 rounded-full -z-0"></div>
          </div>

          {/* Content Column */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-warm-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl text-warm-brown mb-6 leading-tight">
                About Little Cake Company
              </h2>
              <div className="w-20 h-1 bg-warm-gold"></div>
            </div>

            <div className="space-y-6 text-lg text-warm-brown/80 leading-relaxed">
              <p className="font-medium text-warm-brown">
                At Little Cake Company, we create elegant, bespoke cakes designed to be the centrepiece of your celebration. Based in Birmingham, we specialise in handcrafted cakes that combine refined design with exceptional flavour.
              </p>
              <p>
                Our studio, located on <span className="font-semibold text-warm-brown">Wensley Road, Birmingham B26 1LT</span>, was founded from a love of artistry, precision, and beautifully finished cakes. Over the years, Little Cake Company has become known for producing luxury wedding cakes, sophisticated birthday cakes, and bespoke celebration designs, each made with care and attention to the finest details.
              </p>
              <p>
                Every cake is individually designed and freshly baked to order, using quality ingredients and a personalised approach. We work closely with our clients to bring their ideas to life, ensuring each design reflects their style, occasion, and vision — whether it’s an elegant wedding cake or a statement birthday centrepiece.
              </p>
              <p>
                From consultation to completion, we pride ourselves on delivering a professional, seamless experience, paired with friendly service and exceptional craftsmanship.
              </p>
              <p className="pt-2 border-t border-warm-gold/20 italic">
                Serving Birmingham and surrounding areas, Little Cake Company is proud to be part of life’s most memorable moments.
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
                className="bg-warm-gold hover:bg-warm-gold/90 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl flex items-center gap-3 transform hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Our Studio
              </a>
              <div className="text-warm-brown/60">
                <p className="font-bold text-warm-brown">Studio Location</p>
                <p className="text-sm">📍 {LOCATION}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
