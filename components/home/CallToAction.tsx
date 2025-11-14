import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-neutral-100 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Elevate Your Travel Experience?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Let our expert concierge team create a personalized travel experience that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-black text-white rounded-xl px-8 py-4 font-semibold hover:bg-neutral-800 transition-colors"
            >
              Get Started Today
            </Link>
            <a
              href="tel:+1-555-DTG-LUXE"
              className="inline-flex items-center space-x-2 bg-white border-2 border-black text-black rounded-xl px-8 py-4 font-semibold hover:bg-neutral-50 transition-colors"
            >
              <svg
                className="w-5 h-5"
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
              <span>Call: +1 (555) DTG-LUXE</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
