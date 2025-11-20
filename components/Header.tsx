'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome
      ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
      : 'bg-transparent py-6'
    }`;

  const textClass = isScrolled || !isHome ? 'text-primary' : 'text-white';
  const hoverClass = isScrolled || !isHome ? 'hover:text-secondary' : 'hover:text-white/80';

  return (
    <header className={headerClass}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className={`text-2xl font-playfair font-bold tracking-tight ${textClass}`}>
              DETAILED
            </span>
            <span className={`text-[10px] tracking-[0.3em] uppercase ${textClass} group-hover:text-secondary transition-colors`}>
              Travel Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className={`text-xs font-medium tracking-widest uppercase border-r pr-8 mr-4 ${isScrolled || !isHome ? 'border-neutral-200 text-neutral-400' : 'border-white/30 text-white/70'}`}>
              NYC <span className="mx-2">|</span> Global
            </div>

            <Link href="/" className={`text-sm font-medium tracking-wide uppercase transition-colors ${textClass} ${hoverClass}`}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className={`text-sm font-medium tracking-wide uppercase transition-colors flex items-center space-x-1 ${textClass} ${hoverClass}`}>
                <span>Services</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-sm shadow-xl border border-neutral-100 py-6 grid grid-cols-2 gap-2 px-6">
                  <Link href="/aviation" className="p-4 hover:bg-neutral-50 transition-colors group/item">
                    <div className="font-playfair font-bold text-primary group-hover/item:text-secondary">Private Aviation</div>
                    <div className="text-xs text-neutral-500 mt-1">Jet Charters & Helicopter Transfers</div>
                  </Link>
                  <Link href="/security" className="p-4 hover:bg-neutral-50 transition-colors group/item">
                    <div className="font-playfair font-bold text-primary group-hover/item:text-secondary">Security</div>
                    <div className="text-xs text-neutral-500 mt-1">Executive Protection & Secure Transport</div>
                  </Link>
                  <Link href="/lifestyle" className="p-4 hover:bg-neutral-50 transition-colors group/item">
                    <div className="font-playfair font-bold text-primary group-hover/item:text-secondary">Lifestyle</div>
                    <div className="text-xs text-neutral-500 mt-1">Dining, Events & Personal Shopping</div>
                  </Link>
                  <Link href="/services" className="p-4 hover:bg-neutral-50 transition-colors group/item">
                    <div className="font-playfair font-bold text-primary group-hover/item:text-secondary">View All</div>
                    <div className="text-xs text-neutral-500 mt-1">Explore our full suite of services</div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/membership" className={`text-sm font-medium tracking-wide uppercase transition-colors ${textClass} ${hoverClass}`}>
              Membership
            </Link>

            <Link href="/contact" className={`text-sm font-medium tracking-wide uppercase transition-colors ${textClass} ${hoverClass}`}>
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/membership"
              className={`px-6 py-2.5 text-xs font-bold tracking-widest uppercase border transition-all duration-300 ${isScrolled || !isHome
                  ? 'border-primary text-primary hover:bg-primary hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-primary'
                }`}
            >
              Apply
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${textClass}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-100 shadow-lg py-8 px-6 flex flex-col space-y-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-playfair font-bold text-primary">Home</Link>
            <Link href="/aviation" onClick={() => setMobileMenuOpen(false)} className="text-lg font-playfair font-bold text-primary">Aviation</Link>
            <Link href="/security" onClick={() => setMobileMenuOpen(false)} className="text-lg font-playfair font-bold text-primary">Security</Link>
            <Link href="/lifestyle" onClick={() => setMobileMenuOpen(false)} className="text-lg font-playfair font-bold text-primary">Lifestyle</Link>
            <Link href="/membership" onClick={() => setMobileMenuOpen(false)} className="text-lg font-playfair font-bold text-primary">Membership</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-playfair font-bold text-primary">Contact</Link>
            <Link href="/membership" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-3 bg-primary text-white text-sm font-bold tracking-widest uppercase">Apply for Membership</Link>
          </div>
        )}
      </div>
    </header>
  );
}
