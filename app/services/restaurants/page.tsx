import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restaurant Reservations',
  description: 'Secure reservations at the world\'s most exclusive restaurants and gain access to exceptional dining experiences.',
};

export default function RestaurantsPage() {
  return (
    <div className="pt-[110px] pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🍽️</div>
          <h1 className="text-5xl md:text-6xl font-playfair font-extrabold mb-6">
            Restaurant Reservations
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Access the world's finest dining establishments with our exclusive reservation service
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-12 mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Culinary Excellence Awaits
          </h2>
          <p className="text-lg text-neutral-600">
            Our restaurant concierge service opens doors to Michelin-starred restaurants, chef's tables, and exclusive dining experiences that are typically impossible to book. We leverage our relationships with the world's top establishments to secure your perfect table.
          </p>
        </div>

        <section className="bg-black text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Make a Reservation
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-black rounded-xl px-8 py-4 font-semibold hover:bg-neutral-100 transition-colors"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
}
