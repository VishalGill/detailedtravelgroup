'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 border-b border-white/10 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-[1800px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-2xl font-serif font-bold tracking-tight text-white">
              DETAILED
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/70 font-mono group-hover:text-white transition-colors">
              NYC / PRIVATE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            <Link href="/services" className="text-xs font-mono uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/membership" className="text-xs font-mono uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors">
              Membership
            </Link>
            <Link href="/contact" className="text-xs font-mono uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors">
              Contact
            </Link>
            <Link 
              href="/login" 
              className="text-xs font-mono uppercase tracking-[0.25em] text-white border border-white/30 px-6 py-2 hover:bg-white hover:text-black transition-all duration-300"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-serif font-bold text-white">DETAILED</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {['Services', 'Membership', 'Contact', 'Login'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-serif text-white hover:text-white/70 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-white/10 pt-8">
              <div className="flex flex-col gap-4 font-mono text-xs text-white/50 tracking-widest">
                <p>NEW YORK, NY</p>
                <a href="tel:+18884200177">+1 (888) 420-0177</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

