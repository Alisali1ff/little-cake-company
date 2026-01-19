
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import MenuPage from './components/MenuPage';
import { PHONE_NUMBER, EMAIL, LOCATION, SERVICES, PRODUCTS, LOGO_URL } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedServiceId, selectedProductId]);

  const handleServiceSelect = (id: string) => {
    setSelectedServiceId(id);
    setSelectedProductId(null);
    setCurrentView('service-detail');
  };

  const handleProductSelect = (id: string) => {
    setSelectedProductId(id);
    setSelectedServiceId(null);
    setCurrentView('product-detail');
  };

  const resetToHome = () => {
    setCurrentView('home');
    setSelectedServiceId(null);
    setSelectedProductId(null);
  };

  const renderContent = () => {
    // Handling Menu Page
    if (currentView === 'menu') {
      return (
        <MenuPage 
          onSelectProduct={handleProductSelect} 
          onBack={resetToHome} 
        />
      );
    }

    // Handling Service Detail View
    if (currentView === 'service-detail' && selectedServiceId) {
      const service = SERVICES.find(s => s.id === selectedServiceId);
      if (!service) return null;

      return (
        <div className="animate-pop bg-white min-h-screen pb-24 relative overflow-hidden pt-32">
          {/* Decorative Detail Vectors */}
          <svg className="absolute top-[20%] left-[-5%] w-64 h-64 text-warm-gold/5" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="currentColor"/></svg>
          <svg className="absolute top-[40%] right-[-5%] w-96 h-96 text-pink-300/5 rotate-45" viewBox="0 0 100 100"><rect x="0" y="0" width="100" height="100" fill="currentColor"/></svg>

          <div className="relative h-[70vh] w-full rounded-[6rem] overflow-hidden shadow-2xl mx-auto max-w-7xl">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-brown via-transparent to-black/20 flex flex-col items-center justify-end pb-24 text-white px-4 text-center">
              <span className="font-black uppercase tracking-[0.5em] text-sm mb-4 opacity-70">Signature Collection</span>
              <h1 className="text-7xl md:text-[100px] font-black mb-4 drop-shadow-2xl leading-none">{service.title}</h1>
              <p className="font-accent text-4xl text-warm-gold">Handcrafted Happiness from Birmingham</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-10">
            <div className="bg-white p-12 md:p-24 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-warm-gold/5 relative">
               <button 
                onClick={resetToHome}
                className="mb-16 inline-flex items-center gap-4 text-warm-brown font-black uppercase tracking-widest text-sm hover:text-warm-gold transition-all group"
              >
                <span className="w-10 h-10 rounded-full border-2 border-warm-brown flex items-center justify-center group-hover:border-warm-gold group-hover:-translate-x-2 transition-all">←</span>
                Back to collections
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8">
                  <h2 className="text-5xl md:text-6xl font-black text-warm-brown mb-10 leading-tight">Every slice tells a <br/><span className="italic text-warm-gold font-accent text-7xl">beautiful story</span>.</h2>
                  <p className="text-2xl text-warm-brown/70 leading-relaxed mb-12">
                    {service.description} We don't just bake; we design edible art. Using only locally sourced Birmingham ingredients, we ensure every bite is as unforgettable as the moment you're celebrating.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex items-start gap-6 p-8 bg-soft-cream rounded-[2.5rem] border border-warm-gold/10 hover:border-warm-gold transition-colors group">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 text-warm-gold shadow-lg group-hover:rotate-12 transition-transform">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      </div>
                      <div>
                        <h4 className="font-black text-xl mb-2">Bespoke Design</h4>
                        <p className="text-warm-brown/60 text-lg">Fully customized to your dream vision & palette.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 p-8 bg-soft-cream rounded-[2.5rem] border border-warm-gold/10 hover:border-warm-gold transition-colors group">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 text-blue-500 shadow-lg group-hover:rotate-12 transition-transform">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                      </div>
                      <div>
                        <h4 className="font-black text-xl mb-2">Local Sourcing</h4>
                        <p className="text-warm-brown/60 text-lg">Premium Birmingham free-range eggs & organic flour.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="bg-warm-brown p-10 rounded-[3rem] text-white shadow-2xl h-fit sticky top-32 group">
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-warm-gold rounded-full flex items-center justify-center animate-bounce shadow-xl">
                       <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                    <h3 className="text-3xl font-black mb-8 leading-tight">Ready for <br/>your tasting?</h3>
                    <p className="mb-10 text-white/60 text-lg">Spaces fill up fast. Connect with our studio today to secure your date.</p>
                    <a 
                      href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
                      className="w-full bg-warm-gold text-white py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-transform shadow-xl"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Handling Product Detail View
    if (currentView === 'product-detail' && selectedProductId) {
      const product = PRODUCTS.find(p => p.id === selectedProductId);
      if (product) {
        return <ProductDetail product={product} onBack={resetToHome} />;
      }
    }

    // Default Home View
    return (
      <div className="animate-pop relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 -z-0">
           <svg className="absolute top-[1200px] left-[-10%] w-[40%] h-auto text-warm-gold/10" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="currentColor"/></svg>
           <svg className="absolute top-[2500px] right-[-10%] w-[40%] h-auto text-pink-300/10" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="currentColor"/></svg>
        </div>

        <Hero onMenuClick={() => setCurrentView('menu')} />
        
        <ProductList onSelectProduct={handleProductSelect} />
        
        <section id="flavors" className="py-32 bg-white relative">
          <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 text-warm-gold/5" viewBox="0 0 100 100">
             <path d="M50 0 L50 100 M0 50 L100 50" stroke="currentColor" strokeWidth="0.5" />
          </svg>

          <div className="max-w-7xl mx-auto px-4 text-center mb-20 relative z-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-warm-gold/20"></div>
              <span className="text-warm-gold font-black uppercase tracking-[0.5em] text-sm">The Palette</span>
              <div className="w-12 h-[2px] bg-warm-gold/20"></div>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-warm-brown mb-6">Signature Flavors</h2>
            <p className="font-accent text-4xl text-warm-gold italic">What's your sweet soulmate?</p>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 relative z-10">
            {[
              { label: 'Vanilla Bean', color: 'bg-[#FFFBF2]', icon: '🍦', desc: 'Madagascar Grade A' },
              { label: 'Double Choc', color: 'bg-[#F9F4F0]', icon: '🍫', desc: '70% Belgian Dark' },
              { label: 'Red Velvet', color: 'bg-[#FFF1F1]', icon: '🌹', desc: 'Classic Cream Cheese' },
              { label: 'Lemon Zest', color: 'bg-[#F9FFF2]', icon: '🍋', desc: 'Organic Amalfi' },
              { label: 'Lotus Biscoff', color: 'bg-[#FFF6F0]', icon: '🍪', desc: 'The Secret Blend' },
              { label: 'Fresh Berry', color: 'bg-[#FFF0F6]', icon: '🍓', desc: 'Seasonal Pick' },
            ].map((flavor, i) => (
              <div key={i} className={`p-10 ${flavor.color} rounded-[3rem] text-center border-4 border-transparent hover:border-warm-gold/10 hover:-translate-y-4 transition-all cursor-pointer group shadow-sm hover:shadow-2xl`}>
                <div className="text-6xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">{flavor.icon}</div>
                <h5 className="font-black text-warm-brown text-xl mb-2">{flavor.label}</h5>
                <p className="text-xs uppercase tracking-widest font-bold opacity-40">{flavor.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="relative">
          <svg className="w-full h-24 text-[#FAF9F6] fill-current" viewBox="0 0 1440 120" preserveAspectRatio="none">
             <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
          <Services onSelectService={handleServiceSelect} />
        </div>
        
        <section className="py-32 bg-[#FAF9F6] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
             <div className="flex flex-col lg:flex-row items-center gap-24">
               <div className="lg:w-1/2 space-y-10">
                 <div className="space-y-4">
                   <span className="text-warm-gold font-black uppercase tracking-[0.4em] text-sm">Our Process</span>
                   <h2 className="text-6xl md:text-8xl font-black text-warm-brown leading-tight">Your Journey to <br/><span className="text-warm-gold font-accent text-8xl italic">Sweet Bliss</span></h2>
                 </div>
                 <div className="space-y-12 mt-16">
                    <div className="flex gap-10 group">
                      <div className="w-20 h-20 bg-warm-gold text-white font-black text-4xl flex items-center justify-center rounded-[2rem] shrink-0 shadow-[0_20px_40px_-10px_rgba(232,93,4,0.4)] group-hover:rotate-12 transition-transform">1</div>
                      <div className="pt-2">
                        <h4 className="text-3xl font-black text-warm-brown mb-2">The Hello</h4>
                        <p className="text-xl text-warm-brown/50">Give us a call or text. We'll chat about your theme, guests, and flavor dreams.</p>
                      </div>
                    </div>
                    <div className="flex gap-10 group">
                      <div className="w-20 h-20 bg-white text-warm-gold border-4 border-warm-gold/20 font-black text-4xl flex items-center justify-center rounded-[2rem] shrink-0 group-hover:rotate-[-12deg] transition-transform">2</div>
                      <div className="pt-2">
                        <h4 className="text-3xl font-black text-warm-brown mb-2">The Sketch</h4>
                        <p className="text-xl text-warm-brown/50">Our Birmingham team designs your bespoke masterpiece and sends a custom quote.</p>
                      </div>
                    </div>
                 </div>
               </div>
               
               <div className="lg:w-1/2 relative">
                 <div className="rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rotate-3 border-[12px] border-white">
                   <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1000&auto=format&fit=crop" className="w-full" alt="baking studio" />
                 </div>
               </div>
             </div>
          </div>
        </section>

        <Testimonials />
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-warm-gold selection:text-white bg-soft-cream">
      <Header 
        currentView={currentView} 
        onNavigate={(view) => { setCurrentView(view); setSelectedServiceId(null); setSelectedProductId(null); }} 
        onSelectService={handleServiceSelect}
      />
      <main className="flex-grow">
        {currentView === 'about' ? <AboutSection /> : 
         currentView === 'reviews' ? <Testimonials /> : 
         renderContent()}
      </main>
      
      <footer className="bg-warm-brown text-white py-16 rounded-t-[4rem] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-6 mb-8 group cursor-pointer" onClick={resetToHome}>
              <div className="w-24 h-24 bg-white rounded-[2rem] p-2 rotate-[-5deg] group-hover:rotate-0 transition-transform shadow-xl overflow-hidden">
                <img src={`${LOGO_URL}=s1000`} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="text-2xl font-serif font-black tracking-tighter">LITTLE CAKE <span className="text-warm-gold font-accent text-3xl italic">Co.</span></h4>
                <p className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-black">Birmingham's Sweetest Secret</p>
              </div>
            </div>
            <p className="text-base text-white/60 max-w-md mb-8 leading-relaxed">Making the world a little sweeter, one handcrafted slice at a time.</p>
          </div>
          <div>
            <h5 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-6 opacity-40">Contact Studio</h5>
            <ul className="space-y-3 text-base text-white/80">
              <li className="text-white font-black text-lg"><a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}>{PHONE_NUMBER}</a></li>
              <li className="text-sm font-medium">{EMAIL}</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-6 opacity-40">Explore More</h5>
            <ul className="space-y-3 text-sm text-white/80 font-bold">
              <li><button onClick={resetToHome}>Home Page</button></li>
              <li><button onClick={() => setCurrentView('about')}>Our Story</button></li>
              <li><button onClick={() => setCurrentView('reviews')}>Love Letters</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-[10px] text-white/20 uppercase tracking-[0.4em] font-black text-center">
          &copy; {new Date().getFullYear()} Little Cake Company Birmingham
        </div>
      </footer>
    </div>
  );
};

export default App;
