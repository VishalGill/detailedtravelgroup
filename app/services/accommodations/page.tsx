import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Luxury Accommodations',
  description: 'Curated selection of five-star hotels, private villas, and exclusive properties worldwide.',
};

export default function AccommodationsPage() {
  return (
    <div className="pt-[110px] pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🏨</div>
          <h1 className="text-5xl md:text-6xl font-playfair font-extrabold mb-6">
            Luxury Accommodations
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Stay in the world's finest hotels, villas, and exclusive properties
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-12 mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Exceptional Places to Stay
          </h2>
          <p className="text-lg text-neutral-600">
            We partner with the world's most prestigious hotels and private properties to secure the best accommodations for your journey. From historic palaces to contemporary penthouses, we find your perfect sanctuary.
          </p>
        </div>

        <section className="bg-black text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Book Your Stay
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-black rounded-xl px-8 py-4 font-semibold hover:bg-neutral-100 transition-colors"
          >
            Inquire Now
          </Link>
        </section>
      </div>
    </div>
  );
}
