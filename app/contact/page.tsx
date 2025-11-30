'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    urgent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleUrgent = () => {
    setFormData(prev => ({ ...prev, urgent: !prev.urgent }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Placeholder logic: simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-40 pb-20 px-6 md:px-24">
        <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-4">
          CONTACT / INQUIRY
        </span>
        <h1 className="font-serif text-6xl md:text-9xl text-white mb-12">
          INITIATE<br />REQUEST
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-12">
            <p className="font-sans text-xl font-light text-white/60 border-l border-white/20 pl-6">
              Our concierge desk operates 24/7/365. For immediate assistance, please call directly.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-xs text-white/50 uppercase tracking-widest mb-2">Phone</h3>
                <a href="tel:+18884200177" className="font-serif text-2xl hover:text-white/80 transition-colors">
                  +1 (888) 420-0177
                </a>
              </div>
              <div>
                <h3 className="font-mono text-xs text-white/50 uppercase tracking-widest mb-2">Email</h3>
                <a href="mailto:concierge@detailedtravel.com" className="font-serif text-2xl hover:text-white/80 transition-colors">
                  concierge@detailedtravel.com
                </a>
              </div>
            </div>
          </div>

          {/* Form or Success Message */}
          <div className="lg:col-span-8">
            {isSubmitted ? (
              <div className="border border-white/20 p-12 text-center animate-fade-in-slow">
                <h3 className="font-serif text-4xl mb-4">Request Received</h3>
                <p className="font-sans text-white/60 mb-8">
                  Your inquiry has been routed to our concierge desk. <br />
                  A dedicated lifestyle manager will contact you shortly at {formData.email}.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono uppercase tracking-widest border-b border-white/50 pb-1 hover:text-white/70"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 border-t border-white/20 pt-12 relative">
                {isLoading && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-white/50 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-white focus:outline-none transition-colors rounded-none"
                      placeholder="JONATHAN DOE"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-white/50 uppercase tracking-widest">Company (Optional)</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-white focus:outline-none transition-colors rounded-none"
                      placeholder="GLOBAL CORP"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-white/50 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-white focus:outline-none transition-colors rounded-none"
                      placeholder="JONATHAN@DOMAIN.COM"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-white/50 uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-white focus:outline-none transition-colors rounded-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-white/50 uppercase tracking-widest">Service Interest</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black border-b border-white/20 py-4 text-white focus:border-white focus:outline-none transition-colors rounded-none appearance-none"
                  >
                    <option value="">SELECT A SERVICE</option>
                    <option value="transportation">Transportation & Logistics</option>
                    <option value="events">Major Events & Access</option>
                    <option value="security">Executive Protection</option>
                    <option value="lifestyle">Lifestyle Management</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="other">Other Request</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-white/50 uppercase tracking-widest">Request Details</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-white focus:outline-none transition-colors rounded-none resize-none"
                    placeholder="PLEASE DESCRIBE YOUR REQUIREMENTS..."
                  />
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={toggleUrgent}
                    className={`w-12 h-6 rounded-full relative transition-colors ${formData.urgent ? 'bg-red-600' : 'bg-white/20'}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${formData.urgent ? 'left-7' : 'left-1'}`} />
                  </button>
                  <span className="font-mono text-xs uppercase tracking-widest text-white/70">Urgent Request (Response &lt; 15 mins)</span>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white text-black py-6 mt-8 font-mono text-sm uppercase tracking-[0.2em] hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
