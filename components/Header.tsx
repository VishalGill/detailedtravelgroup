'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-playfair font-bold text-black">
              Detailed Travel Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-neutral-700 hover:text-black transition-colors font-medium"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-neutral-700 hover:text-black transition-colors font-medium flex items-center space-x-1">
                <span>Services</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[400px] bg-white rounded-xl shadow-lg border border-neutral-200 py-4">
                  <Link
                    href="/services/black-car"
                    className="flex items-start space-x-4 px-6 py-3 hover:bg-neutral-50 transition-colors"
                  >
                    <span className="text-2xl">🚗</span>
                    <div>
                      <div className="font-semibold text-black">Black Car Service</div>
                      <div className="text-sm text-neutral-600">
                        Luxury chauffeur-driven vehicles
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/services/private-jets"
                    className="flex items-start space-x-4 px-6 py-3 hover:bg-neutral-50 transition-colors"
                  >
                    <span className="text-2xl">✈️</span>
                    <div>
                      <div className="font-semibold text-black">Private Jet Charters</div>
                      <div className="text-sm text-neutral-600">
                        Exclusive air travel solutions
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/services/vip-airport"
                    className="flex items-start space-x-4 px-6 py-3 hover:bg-neutral-50 transition-colors"
                  >
                    <span className="text-2xl">🛂</span>
                    <div>
                      <div className="font-semibold text-black">VIP Airport Service</div>
                      <div className="text-sm text-neutral-600">
                        Meet & greet, fast track security
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/services/restaurants"
                    className="flex items-start space-x-4 px-6 py-3 hover:bg-neutral-50 transition-colors"
                  >
                    <span className="text-2xl">🍽️</span>
                    <div>
                      <div className="font-semibold text-black">Restaurant Reservations</div>
                      <div className="text-sm text-neutral-600">
                        Access to exclusive dining experiences
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/services/concierge"
                    className="flex items-start space-x-4 px-6 py-3 hover:bg-neutral-50 transition-colors"
                  >
                    <span className="text-2xl">🎩</span>
                    <div>
                      <div className="font-semibold text-black">Concierge Services</div>
                      <div className="text-sm text-neutral-600">
                        Personalized travel assistance
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-neutral-700 hover:text-black transition-colors font-medium"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-neutral-700 hover:text-black transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="tel:+1-555-DTG-LUXE"
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-neutral-800 transition-colors"
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
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-neutral-700 hover:text-black transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services/black-car"
                className="text-neutral-700 hover:text-black transition-colors font-medium pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                🚗 Black Car Service
              </Link>
              <Link
                href="/services/private-jets"
                className="text-neutral-700 hover:text-black transition-colors font-medium pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✈️ Private Jet Charters
              </Link>
              <Link
                href="/services/vip-airport"
                className="text-neutral-700 hover:text-black transition-colors font-medium pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                🛂 VIP Airport Service
              </Link>
              <Link
                href="/services/restaurants"
                className="text-neutral-700 hover:text-black transition-colors font-medium pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                🍽️ Restaurant Reservations
              </Link>
              <Link
                href="/services/concierge"
                className="text-neutral-700 hover:text-black transition-colors font-medium pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                🎩 Concierge Services
              </Link>
              <Link
                href="/about"
                className="text-neutral-700 hover:text-black transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-neutral-700 hover:text-black transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+1-555-DTG-LUXE"
                className="inline-flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-xl font-semibold"
              >
                <span>Call Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
