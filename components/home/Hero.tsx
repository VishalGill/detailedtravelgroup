'use client';

import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be handled by API route
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you! We will contact you shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          message: '',
        });
      } else {
        alert('Something went wrong. Please try again or call us directly.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <section className="pt-[110px] pb-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-semibold">
              LUXURY TRAVEL & CONCIERGE SERVICES
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-extrabold leading-tight">
              Experience Travel
              <br />
              <span className="text-neutral-600">Beyond Extraordinary</span>
            </h1>

            <p className="text-xl text-neutral-600 leading-relaxed">
              From private jets and luxury car service to exclusive dining reservations and VIP airport experiences, we handle every detail of your journey with precision and elegance.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-black">24/7 Service</span>
                </div>
                <p className="text-sm text-neutral-600">
                  Always available for your travel needs
                </p>
              </div>

              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-black">VIP Access</span>
                </div>
                <p className="text-sm text-neutral-600">
                  Exclusive experiences worldwide
                </p>
              </div>

              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-black">Expert Team</span>
                </div>
                <p className="text-sm text-neutral-600">
                  Dedicated concierge professionals
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-lg">
            <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-xs font-semibold mb-6">
              INSTANT QUOTES AVAILABLE
            </div>

            <h2 className="text-2xl font-playfair font-bold mb-6">
              Request Your Personalized Service
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-black mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="black-car">Black Car Service</option>
                  <option value="private-jet">Private Jet Charter</option>
                  <option value="vip-airport">VIP Airport Service</option>
                  <option value="restaurant">Restaurant Reservation</option>
                  <option value="concierge">Concierge Services</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-black mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your travel needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white rounded-xl px-8 py-4 font-semibold hover:bg-neutral-800 transition-colors"
              >
                Get Your Quote
              </button>

              <p className="text-xs text-neutral-500 text-center">
                By submitting, you agree to our Privacy Policy and Terms of Service
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
