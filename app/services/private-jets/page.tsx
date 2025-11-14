import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Private Jet Charters',
  description: 'Exclusive private jet charter services for domestic and international travel. Access to global fleet, personalized service, on-demand availability.',
};

export default function PrivateJetsPage() {
  return (
    <div className="pt-[110px] pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">✈️</div>
          <h1 className="text-5xl md:text-6xl font-playfair font-extrabold mb-6">
            Private Jet Charters
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Fly on your schedule with exclusive access to a global fleet of private aircraft
          </p>
        </div>

        {/* Overview */}
        <section className="mb-20">
          <div className="bg-white border border-neutral-200 rounded-2xl p-12">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              The Ultimate in Air Travel
            </h2>
            <p className="text-lg text-neutral-600 mb-4">
              Skip the lines, the delays, and the inconvenience of commercial air travel. Our private jet charter service provides access to thousands of aircraft worldwide, allowing you to fly when and where you want with complete privacy and luxury.
            </p>
            <p className="text-lg text-neutral-600">
              From light jets for short trips to ultra-long-range aircraft for international travel, we match you with the perfect aircraft for your journey, budget, and requirements.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-playfair font-bold mb-12 text-center">
            Why Choose Private Aviation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold mb-3">
                Time Savings
              </h3>
              <p className="text-neutral-600">
                Arrive 15 minutes before departure and avoid security lines and crowds.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold mb-3">
                Flexible Scheduling
              </h3>
              <p className="text-neutral-600">
                Fly on your timetable, not the airline's. Change plans with minimal notice.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold mb-3">
                Access More Airports
              </h3>
              <p className="text-neutral-600">
                Land closer to your destination using thousands of private terminals.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold mb-3">
                Complete Privacy
              </h3>
              <p className="text-neutral-600">
                Conduct business meetings or relax in complete confidentiality.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold mb-3">
                Luxury Amenities
              </h3>
              <p className="text-neutral-600">
                Gourmet catering, premium beverages, and customized cabin experience.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold mb-3">
                Pet-Friendly
              </h3>
              <p className="text-neutral-600">
                Travel with your pets without the stress of commercial airline restrictions.
              </p>
            </div>
          </div>
        </section>

        {/* Aircraft Types */}
        <section className="mb-20 bg-neutral-50 rounded-3xl p-12">
          <h2 className="text-3xl font-playfair font-bold mb-12 text-center">
            Aircraft Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Light Jets
              </h3>
              <p className="text-neutral-600 mb-4">
                Perfect for short trips and small groups
              </p>
              <p className="text-sm text-neutral-500">6-8 passengers</p>
              <p className="text-sm text-neutral-500">1,500-2,000 miles</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Midsize Jets
              </h3>
              <p className="text-neutral-600 mb-4">
                Comfortable cross-country travel
              </p>
              <p className="text-sm text-neutral-500">8-9 passengers</p>
              <p className="text-sm text-neutral-500">2,000-3,000 miles</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Super Midsize
              </h3>
              <p className="text-neutral-600 mb-4">
                Transcontinental capability
              </p>
              <p className="text-sm text-neutral-500">8-10 passengers</p>
              <p className="text-sm text-neutral-500">3,000-4,000 miles</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Heavy Jets
              </h3>
              <p className="text-neutral-600 mb-4">
                Long-range international flights
              </p>
              <p className="text-sm text-neutral-500">10-16 passengers</p>
              <p className="text-sm text-neutral-500">5,000+ miles</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Request Your Private Jet Charter
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Get a personalized quote for your next journey and experience the freedom of private aviation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-black rounded-xl px-8 py-4 font-semibold hover:bg-neutral-100 transition-colors"
          >
            Get a Quote
          </Link>
        </section>
      </div>
    </div>
  );
}
