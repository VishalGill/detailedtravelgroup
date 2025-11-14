import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Black Car Service',
  description: 'Premium chauffeur-driven black car service for business and leisure travel. Professional drivers, luxury vehicles, 24/7 availability.',
};

export default function BlackCarPage() {
  return (
    <div className="pt-[110px] pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🚗</div>
          <h1 className="text-5xl md:text-6xl font-playfair font-extrabold mb-6">
            Black Car Service
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Experience the ultimate in luxury ground transportation with our premium black car service
          </p>
        </div>

        {/* Overview */}
        <section className="mb-20">
          <div className="bg-white border border-neutral-200 rounded-2xl p-12">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              Luxury Transportation, Perfected
            </h2>
            <p className="text-lg text-neutral-600 mb-4">
              Our black car service delivers an unparalleled transportation experience, combining sophisticated vehicles with professional chauffeurs who understand the importance of discretion, punctuality, and service excellence.
            </p>
            <p className="text-lg text-neutral-600">
              Whether you need airport transfers, corporate transportation, or a full-day chauffeur service, our fleet of premium vehicles and experienced drivers ensure you arrive in style and comfort.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-playfair font-bold mb-12 text-center">
            Service Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold mb-3">
                Professional Chauffeurs
              </h3>
              <p className="text-neutral-600">
                Experienced, vetted drivers with impeccable service standards and local knowledge.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold mb-3">
                Premium Fleet
              </h3>
              <p className="text-neutral-600">
                Latest model luxury sedans and SUVs maintained to the highest standards.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold mb-3">
                24/7 Availability
              </h3>
              <p className="text-neutral-600">
                Round-the-clock service for early morning flights or late-night events.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold mb-3">
                Flight Tracking
              </h3>
              <p className="text-neutral-600">
                Real-time flight monitoring ensures your chauffeur is there when you land.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold mb-3">
                Meet & Greet
              </h3>
              <p className="text-neutral-600">
                Personalized airport pickup with assistance for luggage and navigation.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold mb-3">
                Corporate Accounts
              </h3>
              <p className="text-neutral-600">
                Streamlined billing and reporting for business travel management.
              </p>
            </div>
          </div>
        </section>

        {/* Fleet */}
        <section className="mb-20 bg-neutral-50 rounded-3xl p-12">
          <h2 className="text-3xl font-playfair font-bold mb-12 text-center">
            Our Fleet
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Executive Sedan
              </h3>
              <p className="text-neutral-600 mb-4">
                Mercedes-Benz S-Class, BMW 7 Series
              </p>
              <p className="text-sm text-neutral-500">Capacity: 1-3 passengers</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Luxury SUV
              </h3>
              <p className="text-neutral-600 mb-4">
                Cadillac Escalade, Range Rover
              </p>
              <p className="text-sm text-neutral-500">Capacity: 1-6 passengers</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Executive Van
              </h3>
              <p className="text-neutral-600 mb-4">
                Mercedes-Benz Sprinter
              </p>
              <p className="text-sm text-neutral-500">Capacity: 1-14 passengers</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Book Your Black Car Service
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Experience luxury transportation with professional service and attention to detail.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-black rounded-xl px-8 py-4 font-semibold hover:bg-neutral-100 transition-colors"
          >
            Request a Quote
          </Link>
        </section>
      </div>
    </div>
  );
}
