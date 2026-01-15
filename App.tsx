
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import DesignAssistant from './components/DesignAssistant';
import { PHONE_NUMBER, EMAIL, LOCATION, SERVICES, LOGO_URL } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedServiceId]);

  const handleServiceSelect = (id: string) => {
    setSelectedServiceId(id);
    setCurrentView('service-detail');
  };

  const renderContent = () => {
    if (currentView === 'service-detail' && selectedServiceId) {
      const service = SERVICES.find(s => s.id === selectedServiceId);
      if (!service) return null;

      return (
        <div className="animate-in fade-in duration-500 bg-soft-cream min-h-screen pb-24">
          <div className="relative h-[50vh] w-full">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover brightness-[0.7]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
              <button 
                onClick={() => setCurrentView('home')}
                className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Collections
              </button>
              <h1 className="text-5xl md:text-7xl font-serif mb-4">{service.title}</h1>
              <div className="w-24 h-1 bg-warm-gold mx-auto"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-warm-gold/10 -mt-24 relative z-10">
              <h2 className="text-3xl font-serif text-warm-brown mb-6 italic">Exquisite Artistry from Birmingham</h2>
              <p className="text-xl text-warm-brown/80 leading-relaxed mb-8">
                {service.description} Our {service.title.toLowerCase()} are designed to be the unforgettable centerpiece of your event. Each layer is baked with precision using the finest UK-sourced ingredients in our Birmingham studio.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-soft-cream rounded-xl">
                  <h3 className="font-bold text-warm-gold mb-2 uppercase tracking-wide text-sm">Bespoke Design</h3>
                  <p className="text-warm-brown/70">Fully customized to your color palette, theme, and dietary requirements.</p>
                </div>
                <div className="p-6 bg-soft-cream rounded-xl">
                  <h3 className="font-bold text-warm-gold mb-2 uppercase tracking-wide text-sm">Premium Ingredients</h3>
                  <p className="text-warm-brown/70">Organic flour, free-range eggs, and luxury Belgian chocolate as standard.</p>
                </div>
              </div>

              <div className="border-t border-warm-gold/20 pt-12 text-center">
                <h3 className="text-2xl font-serif text-warm-brown mb-6">Ready to order your {service.title}?</h3>
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
                  className="inline-flex items-center gap-3 bg-warm-gold text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call to Order
                </a>
                <p className="mt-4 text-warm-brown/50 text-sm">Available Mon-Sat for consultations in Birmingham.</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 mt-12">
            <h3 className="text-3xl font-serif text-warm-brown mb-8 text-center">Other Collections You Might Like</h3>
            <Services onSelectService={handleServiceSelect} />
          </div>
        </div>
      );
    }

    switch (currentView) {
      case 'services':
        return (
          <div className="animate-in fade-in duration-500">
            <div className="bg-warm-brown py-20 md:py-32 text-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>
               <div className="relative z-10 px-4">
                  <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Our Collections</h1>
                  <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Discover our range of luxury bespoke cakes, from grand weddings to intimate celebrations handcrafted in Birmingham.
                  </p>
                  <div className="w-24 h-1 bg-warm-gold mx-auto mt-8"></div>
               </div>
            </div>
            <Services onSelectService={handleServiceSelect} />
          </div>
        );
      case 'about':
        return <div className="animate-in fade-in duration-500"><AboutSection /></div>;
      case 'reviews':
        return (
          <div className="animate-in fade-in duration-500">
            <div className="bg-warm-brown py-20 text-center relative">
              <h1 className="text-4xl md:text-6xl font-serif text-white">Client Kind Words</h1>
              <p className="mt-4 text-white/70 max-w-xl mx-auto px-4 italic">Shared experiences from our Birmingham cake studio family.</p>
              <div className="w-24 h-1 bg-warm-gold mx-auto mt-6"></div>
            </div>
            <Testimonials />
          </div>
        );
      case 'home':
      default:
        return (
          <div className="animate-in fade-in duration-700">
            <Hero />
            <div className="bg-white py-20 border-b border-warm-gold/5">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-serif text-warm-brown mb-6 italic">Handcrafted with Love in Birmingham</h2>
                <p className="text-lg text-warm-brown/70 leading-relaxed mb-8">
                  Welcome to Little Cake Company. We specialize in edible masterpieces that taste even better than they look.
                </p>
                <button onClick={() => setCurrentView('about')} className="text-warm-gold font-bold uppercase tracking-widest text-sm hover:underline">Read Our Full Story</button>
              </div>
            </div>
            <Services onSelectService={handleServiceSelect} />
            <Testimonials />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-warm-gold selection:text-white">
      <Header currentView={currentView} onNavigate={(view) => { setCurrentView(view); setSelectedServiceId(null); }} />
      <main className="flex-grow">
        {renderContent()}
        <section className="py-24 bg-soft-cream text-warm-brown border-t border-warm-gold/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight text-warm-brown">Your dream cake starts with a <span className="italic text-warm-gold">conversation</span>.</h2>
            <p className="text-xl text-warm-brown/70 mb-12">Our calendar fills up months in advance. Call our Birmingham studio today to book your bespoke consultation.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="w-full sm:w-auto bg-warm-gold hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-2xl transition-all shadow-xl flex items-center justify-center gap-3 transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Our Studio
              </a>
              <div className="text-warm-brown/60 text-sm italic text-center sm:text-left">Birmingham Studio Hours: <br /> Mon-Sat: 9am - 6pm</div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black text-white/50 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2">
            <div className="flex flex-col items-start gap-8 mb-10">
              <div className="w-64 h-64 flex items-center justify-start overflow-hidden">
                <img 
                  src={LOGO_URL} 
                  alt="Little Cake Company Logo" 
                  className="w-full h-full object-contain transform scale-125" 
                />
              </div>
            </div>
            <p className="max-w-sm mb-10 leading-relaxed text-xl">Bespoke luxury cakes for all occasions. Based in Birmingham, serving the West Midlands with exceptional craftsmanship.</p>
            <div className="flex space-x-10">
              <a href="#" className="hover:text-warm-gold transition-colors text-white font-bold">Instagram</a>
              <a href="#" className="hover:text-warm-gold transition-colors text-white font-bold">Facebook</a>
              <a href="#" className="hover:text-warm-gold transition-colors text-white font-bold">Pinterest</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 text-2xl">Studio Info</h4>
            <ul className="space-y-6 text-lg">
              <li className="font-black text-white text-2xl tracking-tight">{PHONE_NUMBER}</li>
              <li className="hover:text-white transition-colors cursor-pointer">{EMAIL}</li>
              <li className="leading-tight">{LOCATION}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 text-2xl">Quick Links</h4>
            <ul className="space-y-6 text-lg">
              <li><button onClick={() => setCurrentView('services')} className="hover:text-white transition-colors">All Collections</button></li>
              <li><button onClick={() => setCurrentView('about')} className="hover:text-white transition-colors">Our Story</button></li>
              <li><button onClick={() => setCurrentView('reviews')} className="hover:text-white transition-colors">Reviews</button></li>
              <li><a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-24 pt-10 border-t border-white/5 text-center text-xs uppercase tracking-[0.3em] font-medium text-white/30">
          &copy; {new Date().getFullYear()} Little Cake Company Birmingham. All Rights Reserved.
        </div>
      </footer>
      <DesignAssistant />
      <style>{`
        .animate-in { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default App;
