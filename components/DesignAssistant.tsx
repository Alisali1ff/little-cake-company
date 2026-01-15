
import React, { useState, useEffect } from 'react';
import { getDesignGuidance } from '../services/geminiService';

const DesignAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const fetchGuidance = async (query?: string) => {
    setLoading(true);
    try {
      const guidance = await getDesignGuidance(query);
      setContent(guidance || 'Could not retrieve guidance at this time.');
    } catch (error) {
      console.error(error);
      setContent('Error: Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && !content) {
      fetchGuidance();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      fetchGuidance(input);
      setInput('');
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-2 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <span className="font-semibold text-sm">Design Mentor</span>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          
          <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col animate-slide-left">
            <div className="p-6 border-b flex items-center justify-between bg-black text-white">
              <div>
                <h3 className="text-xl font-bold">Design Mentor AI</h3>
                <p className="text-xs text-white/60">Helping you build "Little Cake Company" in Webflow</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 text-warm-brown space-y-4">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4 text-warm-brown/40">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
                  <p>Consulting the design oracle...</p>
                </div>
              ) : (
                <div className="prose prose-stone max-w-none">
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {content}
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t bg-gray-50">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Webflow steps..."
                  className="flex-1 border rounded-xl px-4 py-2 focus:ring-2 focus:ring-black outline-none"
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-black text-white p-2 rounded-xl hover:bg-gray-800 disabled:opacity-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-left {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slide-left 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default DesignAssistant;
