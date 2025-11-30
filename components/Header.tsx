'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/10 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-[1800px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="font-serif text-2xl font-bold tracking-tight text-white">
            DETAILED
          </span>
          <span className="ml-3 font-mono text-[10px] tracking-widest-xl uppercase text-white/50 border border-white/20 px-2 py-1 rounded-sm">
            PRIVATE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12">
          {['Transportation', 'Events', 'Lifestyle', 'Membership'].map((item) => (
            <Link
              key={item}
              href={item === 'Transportation' ? '/services/transportation' : item === 'Events' ? '/services/events' : item === 'Lifestyle' ? '/services/lifestyle' : '/membership'}
              className="font-mono text-xs uppercase tracking-widest-xl text-white/70 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
          
          <Link
            href="/contact"
            className="font-mono text-xs uppercase tracking-widest-xl border border-white/30 px-6 py-2 hover:bg-white hover:text-black transition-all duration-300"
          >
            Inquire
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-8 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-8 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-8 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['Transportation', 'Events', 'Lifestyle', 'Membership', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Contact' ? '/contact' : item === 'Transportation' ? '/services/transportation' : item === 'Events' ? '/services/events' : item === 'Lifestyle' ? '/services/lifestyle' : '/membership'}
              className="font-serif text-4xl text-white hover:text-white/70 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
