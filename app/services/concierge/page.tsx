import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Concierge Services',
  description: 'Comprehensive luxury concierge services tailored to your lifestyle, from travel planning to exclusive experiences.',
};

export default function ConciergePage() {
  return (
    <div className="pt-[110px] pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🎩</div>
          <h1 className="text-5xl md:text-6xl font-playfair font-extrabold mb-6">
            Concierge Services
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Your dedicated lifestyle manager for all travel and entertainment needs
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-12 mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Personalized Service Excellence
          </h2>
          <p className="text-lg text-neutral-600 mb-4">
            Our concierge team acts as your personal assistant, handling everything from complex travel itineraries to last-minute concert tickets. No request is too small or too large—we're here to make your life easier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-neutral-200 rounded-2xl p-8">
            <h3 className="text-xl font-playfair font-bold mb-3">Travel Planning</h3>
            <p className="text-neutral-600">Complete itinerary design and booking</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-8">
            <h3 className="text-xl font-playfair font-bold mb-3">Event Access</h3>
            <p className="text-neutral-600">Tickets to sold-out shows and events</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-8">
            <h3 className="text-xl font-playfair font-bold mb-3">Special Occasions</h3>
            <p className="text-neutral-600">Celebration planning and coordination</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-8">
            <h3 className="text-xl font-playfair font-bold mb-3">Personal Shopping</h3>
            <p className="text-neutral-600">Luxury retail and gift procurement</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-8">
            <h3 className="text-xl font-playfair font-bold mb-3">24/7 Support</h3>
            <p className="text-neutral-600">Always available for urgent requests</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-8">
            <h3 className="text-xl font-playfair font-bold mb-3">Custom Requests</h3>
            <p className="text-neutral-600">Unique experiences tailored to you</p>
          </div>
        </div>

        <section className="bg-black text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Start Your Concierge Service
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-black rounded-xl px-8 py-4 font-semibold hover:bg-neutral-100 transition-colors"
          >
            Get Started
          </Link>
        </section>
      </div>
    </div>
  );
}
