
import React, { useState } from 'react';
import { Product } from '../types';
import { PHONE_NUMBER } from '../constants';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

type PaymentMethod = 'card' | 'paypal';

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('card');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment gateway delay
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      // In a real app, 'additionalInfo' would be sent to the backend here
      setTimeout(() => {
        setShowCheckout(false);
        setPaymentSuccess(false);
        setAdditionalInfo('');
      }, 3000);
    }, 2000);
  };

  const openCheckout = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setShowCheckout(true);
  };

  return (
    <div className="animate-pop bg-white min-h-screen pb-24 relative overflow-hidden pt-32">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-soft-cream -z-0 rounded-l-[10rem]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <button 
          onClick={onBack}
          className="mb-12 inline-flex items-center gap-4 text-warm-brown font-black uppercase tracking-widest text-sm hover:text-warm-gold transition-all group"
        >
          <span className="w-10 h-10 rounded-full border-2 border-warm-brown flex items-center justify-center group-hover:border-warm-gold group-hover:-translate-x-2 transition-all">←</span>
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Gallery Showcase */}
          <div className="space-y-6">
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-8 border-white bg-white aspect-square">
              <img 
                src={product.images[activeImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-all duration-700" 
              />
              <div className="absolute top-10 left-10">
                 <span className="bg-warm-gold text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
                   {product.category}
                 </span>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 px-2 overflow-x-auto no-scrollbar">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-4 transition-all shrink-0 ${activeImageIndex === idx ? 'border-warm-gold scale-105 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Local Delivery Banner */}
            <div className="p-8 bg-warm-brown text-white rounded-[2.5rem] shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-warm-gold/20 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
               <div className="flex items-center gap-6 relative z-10">
                  <div className="w-16 h-16 bg-warm-gold rounded-2xl flex items-center justify-center shrink-0 animate-float">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM18 10l2.1 3H15V10h3z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-1 text-white">Local Birmingham Delivery</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{product.deliveryDetail || 'We deliver locally to all B-postcodes within 48 hours.'}</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-10">
            <div>
              <h1 className="text-6xl md:text-7xl font-black text-warm-brown leading-none mb-6">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-6">
                <span className="text-5xl font-black text-warm-gold">{product.price}</span>
                <span className="text-lg text-warm-brown/30 font-bold uppercase tracking-widest">Available Now</span>
              </div>
            </div>

            <p className="text-2xl text-warm-brown/70 leading-relaxed font-medium">
              {product.description}
            </p>

            {product.ingredients && (
              <div className="py-8 border-t border-warm-brown/10">
                <h4 className="text-sm font-black text-warm-brown/40 uppercase tracking-[0.3em] mb-6">Signature Ingredients</h4>
                <div className="flex flex-wrap gap-3">
                  {product.ingredients.map((ing, i) => (
                    <span key={i} className="px-5 py-2.5 bg-warm-brown/5 rounded-xl text-warm-brown font-bold text-sm">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4">
              {/* Pay by Card Button */}
              <button 
                onClick={() => openCheckout('card')}
                className="w-full bg-warm-gold text-white px-10 py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl hover:shadow-warm-gold/40 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                Order & Pay by Card
              </button>

              {/* PayPal Quick Pay Button */}
              <button 
                onClick={() => openCheckout('paypal')}
                className="w-full bg-[#FFC439] text-[#003087] px-10 py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all shadow-xl hover:shadow-[#FFC439]/40 relative overflow-hidden"
              >
                <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" className="h-6" />
                <span>Quick Pay with PayPal</span>
              </button>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
                  className="flex-1 border-4 border-warm-brown text-warm-brown px-8 py-5 rounded-3xl font-black text-lg flex items-center justify-center gap-3 hover:bg-warm-brown hover:text-white transition-all"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  Call to Order
                </a>
                <button className="flex-1 bg-soft-cream border-2 border-warm-gold/20 text-warm-brown px-8 py-5 rounded-3xl font-black text-lg hover:border-warm-gold transition-all">
                  Customise
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-warm-brown/90 backdrop-blur-md" onClick={() => !paymentSuccess && !isProcessing && setShowCheckout(false)}></div>
          
          <div className="relative w-full max-w-xl bg-white rounded-[4rem] overflow-hidden shadow-2xl animate-pop">
            {isProcessing ? (
              <div className="p-16 text-center space-y-8 animate-pop">
                 <div className="w-24 h-24 border-8 border-warm-gold/20 border-t-warm-gold rounded-full animate-spin mx-auto"></div>
                 <div>
                   <h3 className="text-3xl font-black text-warm-brown">Processing...</h3>
                   <p className="text-warm-brown/50 font-bold uppercase tracking-widest text-xs mt-2">
                     {selectedMethod === 'paypal' ? 'Connecting to PayPal Secure...' : 'Verifying your card...'}
                   </p>
                 </div>
              </div>
            ) : paymentSuccess ? (
              <div className="p-16 text-center space-y-8 animate-pop">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto text-white shadow-xl animate-bounce">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-warm-brown mb-4">Sweet Success!</h3>
                  <p className="text-xl text-warm-brown/60">Your order has been received. We'll start baking shortly!</p>
                </div>
                <p className="text-sm font-black text-warm-gold uppercase tracking-widest">Redirecting back to shop...</p>
              </div>
            ) : (
              <div className="p-10 md:p-16">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-3xl font-black text-warm-brown">
                      {selectedMethod === 'paypal' ? 'PayPal Checkout' : 'Secure Checkout'}
                    </h3>
                    <p className="text-warm-brown/40 font-bold uppercase tracking-widest text-xs mt-2">Paying for: {product.name}</p>
                  </div>
                  <button onClick={() => setShowCheckout(false)} className="w-10 h-10 rounded-full bg-warm-brown/5 flex items-center justify-center hover:bg-warm-gold hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
                </div>

                {selectedMethod === 'paypal' ? (
                  <div className="space-y-8">
                     <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100 text-center">
                        <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_200x51.png" alt="PayPal" className="h-10 mx-auto mb-6" />
                        <p className="text-warm-brown/70 leading-relaxed mb-6">
                          Click below to log in to your PayPal account and complete your purchase securely.
                        </p>
                     </div>
                     
                     {/* Allergies & Info Field for PayPal */}
                     <div className="space-y-2">
                       <label className="text-xs font-black text-warm-brown uppercase tracking-widest px-4 flex items-center gap-2">
                         <svg className="w-4 h-4 text-warm-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                         Allergies or Special Notes (Optional)
                       </label>
                       <textarea 
                         value={additionalInfo}
                         onChange={(e) => setAdditionalInfo(e.target.value)}
                         placeholder="e.g. Nut allergies, egg-free requests, or a special message for the cake..."
                         className="w-full bg-soft-cream border-2 border-warm-gold/10 rounded-2xl px-6 py-4 outline-none focus:border-warm-gold transition-colors font-medium text-sm min-h-[100px] resize-none"
                       />
                     </div>

                     <button onClick={handlePayment} className="w-full bg-[#0070ba] text-white py-6 rounded-2xl font-black text-xl hover:bg-[#005ea6] transition-colors shadow-xl flex items-center justify-center gap-3">
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                       Pay with PayPal
                     </button>
                     <button onClick={() => setSelectedMethod('card')} className="w-full text-warm-brown/40 font-black text-xs uppercase tracking-widest hover:text-warm-gold transition-colors">
                       Or use a Credit/Debit Card
                     </button>
                  </div>
                ) : (
                  <form onSubmit={handlePayment} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-warm-brown uppercase tracking-widest px-4">Cardholder Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full bg-soft-cream border-2 border-warm-gold/10 rounded-2xl px-6 py-4 outline-none focus:border-warm-gold transition-colors font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-warm-brown uppercase tracking-widest px-4">Card Number</label>
                      <div className="relative">
                        <input required type="text" placeholder="•••• •••• •••• ••••" className="w-full bg-soft-cream border-2 border-warm-gold/10 rounded-2xl px-6 py-4 outline-none focus:border-warm-gold transition-colors font-bold" />
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-2">
                          <div className="w-8 h-5 bg-warm-brown/10 rounded flex items-center justify-center text-[8px] font-black opacity-40">VISA</div>
                          <div className="w-8 h-5 bg-warm-brown/10 rounded flex items-center justify-center text-[8px] font-black opacity-40">MC</div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-warm-brown uppercase tracking-widest px-4">Expiry Date</label>
                        <input required type="text" placeholder="MM / YY" className="w-full bg-soft-cream border-2 border-warm-gold/10 rounded-2xl px-6 py-4 outline-none focus:border-warm-gold transition-colors font-bold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-warm-brown uppercase tracking-widest px-4">CVC</label>
                        <input required type="text" placeholder="•••" className="w-full bg-soft-cream border-2 border-warm-gold/10 rounded-2xl px-6 py-4 outline-none focus:border-warm-gold transition-colors font-bold" />
                      </div>
                    </div>
                    
                    {/* Allergies & Info Field for Card */}
                    <div className="space-y-2 py-2">
                       <label className="text-xs font-black text-warm-brown uppercase tracking-widest px-4 flex items-center gap-2">
                         <svg className="w-4 h-4 text-warm-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                         Allergies or Special Notes (Optional)
                       </label>
                       <textarea 
                         value={additionalInfo}
                         onChange={(e) => setAdditionalInfo(e.target.value)}
                         placeholder="e.g. Nut allergies, delivery notes, or a special message..."
                         className="w-full bg-soft-cream border-2 border-warm-gold/10 rounded-2xl px-6 py-4 outline-none focus:border-warm-gold transition-colors font-medium text-sm min-h-[100px] resize-none"
                       />
                    </div>

                    <div className="pt-6 border-t border-warm-gold/10">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-warm-brown font-black text-xl tracking-tight">Total to Pay</span>
                        <span className="text-warm-gold font-black text-3xl">{product.price}</span>
                      </div>
                      <button type="submit" className="w-full bg-warm-brown text-white py-6 rounded-2xl font-black text-xl hover:bg-warm-gold transition-colors shadow-2xl active:scale-95">
                        Confirm & Pay Securely
                      </button>
                      <button type="button" onClick={() => setSelectedMethod('paypal')} className="w-full text-warm-brown/40 font-black text-xs uppercase tracking-widest mt-4 hover:text-warm-gold transition-colors">
                        Or use PayPal Quick Pay
                      </button>
                    </div>
                  </form>
                )}

                <div className="mt-8 pt-6 border-t border-warm-gold/5 flex items-center justify-center gap-6">
                   <div className="flex gap-2 opacity-30 grayscale hover:grayscale-0 transition-all">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
                   </div>
                   <div className="w-[1px] h-4 bg-warm-brown/10"></div>
                   <p className="text-[10px] text-warm-brown/40 uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                      Encrypted
                   </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
