'use client';

import { Header } from '@/components/layout/Header';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <h1 className="font-serif text-[12rem] leading-none text-white/10 select-none">
            404
          </h1>
          <div className="space-y-6 -mt-12 relative z-10">
            <h2 className="font-serif text-4xl">Destination Unknown</h2>
            <p className="font-sans text-white/60 font-light">
              The page you requested does not exist or has been moved to a secure location.
            </p>
            <div className="flex flex-col gap-4 pt-8">
              <Link 
                href="/"
                className="bg-white text-black px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-white/90 transition-colors"
              >
                Return Home
              </Link>
              <Link 
                href="/contact"
                className="text-white/50 text-xs font-mono uppercase tracking-widest hover:text-white transition-colors"
              >
                Report Issue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
