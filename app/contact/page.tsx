'use client';

import { Metadata } from 'next';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for contacting us! We will respond shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Something went wrong. Please try calling us directly.');
      }
    } catch (error) {
      alert('Something went wrong. Please try calling us directly.');
    }
  };

  return (
    <div className="pt-[110px] pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-extrabold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our concierge team is available 24/7 to assist with all your luxury travel needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-playfair font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 mb-12">
              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Phone</h3>
                    <a
                      href="tel:+1-555-DTG-LUXE"
                      className="text-neutral-600 hover:text-black transition-colors"
                    >
                      +1 (555) DTG-LUXE
                    </a>
                    <p className="text-sm text-neutral-500 mt-1">
                      Available 24/7 for immediate assistance
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <a
                      href="mailto:concierge@detailedtravelgroup.com"
                      className="text-neutral-600 hover:text-black transition-colors"
                    >
                      concierge@detailedtravelgroup.com
                    </a>
                    <p className="text-sm text-neutral-500 mt-1">
                      We typically respond within 2 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🕐</div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Hours</h3>
                    <p className="text-neutral-600">24/7 Concierge Service</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Always here when you need us
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Location</h3>
                    <p className="text-neutral-600">New York, NY</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Serving clients worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold mb-4">
                Prefer to Talk?
              </h3>
              <p className="text-neutral-600 mb-6">
                Our luxury travel specialists are standing by to discuss your travel needs and create a personalized experience.
              </p>
              <a
                href="tel:+1-555-DTG-LUXE"
                className="inline-flex items-center bg-black text-white rounded-xl px-6 py-3 font-semibold hover:bg-neutral-800 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-8">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your travel needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white rounded-xl px-8 py-4 font-semibold hover:bg-neutral-800 transition-colors"
              >
                Send Message
              </button>

              <p className="text-xs text-neutral-500 text-center">
                By submitting, you agree to our Privacy Policy and Terms of Service
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
