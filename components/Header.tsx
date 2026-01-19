
import React, { useState, useEffect } from 'react';
import { PHONE_NUMBER, LOGO_URL, SERVICES } from '../constants';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onSelectService: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onSelectService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'menu', label: 'THE MENU' },
    { id: 'shop', label: 'THE SHOP' },
    { id: 'about', label: 'OUR STORY' },
    { id: 'reviews', label: 'LOVE LETTERS' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (id: string) => {
    if (id === 'shop') {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      onNavigate(id);
    }
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full px-4 md:px-8 transition-all duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 pt-4 md:pt-6' : '-translate-y-full pt-0'
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto transition-all duration-500 ease-out relative flex items-center justify-between px-8 rounded-[3rem] ${
          isScrolled 
            ? 'h-20 bg-white/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(67,40,24,0.15)] border-b-2 border-warm-gold/20' 
            : 'h-28 bg-white/80 backdrop-blur-lg border border-white/40 shadow-[0_15px_40px_rgba(67,40,24,0.05)]'
        }`}
      >
        {/* Brand/Logo Area */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-4 group h-full relative"
          aria-label="Home"
        >
          <div className={`relative transition-all duration-500 ease-out ${
            isScrolled ? 'w-24 h-24 -mt-2' : 'w-32 h-32 -mt-4'
          }`}>
            <div className="absolute inset-0 bg-white rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500 border-4 border-warm-gold/5"></div>
            <img 
              src={`${LOGO_URL}=s1000`} 
              alt="Little Cake Company" 
              className="relative z-10 w-full h-full object-contain p-2 transition-transform duration-700 group-hover:rotate-12"
            />
          </div>
          
          <div className="flex flex-col">
            <span className="font-serif font-black text-2xl md:text-3xl tracking-tighter text-warm-brown leading-none uppercase">
              LITTLE CAKE <span className="text-warm-gold font-accent normal-case text-4xl ml-1">Co.</span>
            </span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center bg-warm-brown/5 rounded-2xl p-1.5 border border-warm-brown/5">
          <div 
            className="relative group/menu"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <button
              className={`px-8 py-3 rounded-xl text-[11px] font-black tracking-[0.2em] transition-all duration-300 flex items-center gap-2 ${
                currentView === 'service-detail' || currentView === 'services'
                  ? 'bg-warm-brown text-white shadow-xl' 
                  : 'text-warm-brown/60 hover:text-warm-brown'
              }`}
            >
              COLLECTIONS
              <svg className={`w-3 h-3 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
            </button>

            <div className={`absolute top-full left-0 pt-4 w-[600px] transition-all duration-300 origin-top-left ${isMenuOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
              <div className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.2)] border border-warm-gold/10 overflow-hidden p-8 grid grid-cols-2 gap-4">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      onSelectService(service.id);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-warm-gold/5 transition-all text-left group/item"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 border-white shadow-md">
                      <img src={service.image} alt="" className="w-full h-full object-cover group-hover/item:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-warm-brown text-sm uppercase tracking-wider">{service.title}</h4>
                      <p className="text-[10px] text-warm-brown/40 uppercase tracking-widest mt-1">Explore Range →</p>
                    </div>
                  </button>
                ))}
                <div className="col-span-2 mt-4 pt-4 border-t border-warm-brown/5 flex justify-between items-center px-4">
                  <span className="text-[10px] font-black text-warm-gold tracking-[0.3em]">ALL ARTISAN CREATIONS</span>
                  <button onClick={() => onNavigate('services')} className="text-[10px] font-black text-warm-brown/40 hover:text-warm-gold transition-colors underline underline-offset-4">VIEW FULL MENU</button>
                </div>
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-8 py-3 rounded-xl text-[11px] font-black tracking-[0.2em] transition-all duration-300 relative overflow-hidden group ${
                currentView === item.id 
                  ? 'bg-warm-brown text-white shadow-xl' 
                  : 'text-warm-brown/60 hover:text-warm-brown'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {currentView !== item.id && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-warm-gold group-hover:w-1/2 transition-all duration-300"></div>
              )}
            </button>
          ))}
        </nav>

        {/* CTA Area */}
        <div className="flex items-center gap-6">
          <a 
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
            className="group relative hidden md:flex items-center gap-3 bg-warm-gold text-white px-8 py-4 rounded-[1.5rem] font-black text-sm tracking-wider shadow-[0_15px_30px_rgba(232,93,4,0.3)] hover:shadow-[0_20px_40px_rgba(232,93,4,0.4)] hover:-translate-y-1 transition-all active:scale-95 overflow-hidden"
          >
             <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
             <svg className="w-5 h-5 fill-current animate-pulse" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
             <span className="hidden xl:inline">{PHONE_NUMBER}</span>
             <span className="xl:hidden">ORDER NOW</span>
          </a>
          
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden w-14 h-14 rounded-2xl bg-warm-brown text-white flex items-center justify-center hover:bg-warm-gold transition-colors shadow-lg group">
            <div className="flex flex-col gap-1.5">
              <div className="w-6 h-1 bg-current rounded-full group-hover:rotate-45 group-hover:translate-y-2.5 transition-all"></div>
              <div className="w-4 h-1 bg-current rounded-full group-hover:opacity-0 transition-all"></div>
              <div className="w-6 h-1 bg-current rounded-full group-hover:-rotate-45 group-hover:-translate-y-2.5 transition-all"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
