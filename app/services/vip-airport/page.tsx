import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VIP Airport Service',
  description: 'Premium airport meet and greet services with fast-track security, lounge access, and personalized assistance.',
};

export default function VIPAirportPage() {
  return (
    <div className="pt-[110px] pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🛂</div>
          <h1 className="text-5xl md:text-6xl font-playfair font-extrabold mb-6">
            VIP Airport Service
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Skip the stress of airport navigation with our premium meet and greet services
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-12 mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Seamless Airport Experiences
          </h2>
          <p className="text-lg text-neutral-600 mb-4">
            Our VIP airport service transforms the airport experience, providing personalized assistance from curb to gate. Skip the lines, avoid the crowds, and travel with the ease and comfort you deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-neutral-200 rounded-2xl p-8">
            <h3 className="text-xl font-playfair font-bold mb-3">Meet & Greet</h3>
            <p className="text-neutral-600">Personal escort through airport procedures</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-8">
            <h3 className="text-xl font-playfair font-bold mb-3">Fast Track Security</h3>
            <p className="text-neutral-600">Priority screening and expedited processing</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-8">
            <h3 className="text-xl font-playfair font-bold mb-3">Lounge Access</h3>
            <p className="text-neutral-600">Premium airport lounge privileges</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-8">
            <h3 className="text-xl font-playfair font-bold mb-3">Luggage Assistance</h3>
            <p className="text-neutral-600">Porter service and baggage handling</p>
          </div>
        </div>

        <section className="bg-black text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Book VIP Airport Service
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-black rounded-xl px-8 py-4 font-semibold hover:bg-neutral-100 transition-colors"
          >
            Request Service
          </Link>
        </section>
      </div>
    </div>
  );
}
