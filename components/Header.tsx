
import React from 'react';
import { PHONE_NUMBER, LOGO_URL } from '../constants';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-warm-gold/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-32 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center hover:opacity-90 transition-all transform hover:scale-105 active:scale-95"
          aria-label="Home"
        >
          <div className="w-48 h-48 flex items-center justify-center overflow-hidden">
            <img 
              src={LOGO_URL} 
              alt="Little Cake Company Logo" 
              className="w-full h-full object-contain transform scale-125 transition-transform duration-500"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.fallback-logo')) {
                  const fallback = document.createElement('div');
                  fallback.className = "fallback-logo w-full h-full text-warm-gold flex items-center justify-center font-bold italic text-5xl";
                  fallback.innerText = "L";
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
        </button>
        
        <nav className="hidden md:flex items-center space-x-12 text-sm font-bold uppercase tracking-widest">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`transition-colors border-b-2 px-1 py-1 ${
                currentView === item.id 
                  ? 'text-warm-gold border-warm-gold' 
                  : 'text-warm-brown/70 border-transparent hover:text-warm-gold'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a 
          href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
          className="bg-warm-gold hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 group text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
      </div>
    </header>
  );
};

export default Header;
