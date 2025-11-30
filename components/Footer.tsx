import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black pt-20 pb-10 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link href="/" className="flex flex-col group mb-6">
            <span className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
              NYC / PRIVATE
            </span>
            <span className="mt-4 font-mono text-xs tracking-widest uppercase max-w-xs text-black/70">
              Precision logistics for the C-Suite. Privacy as a standard, not an option.
            </span>
          </Link>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest-xl border-b border-black pb-2 mb-6">Sitemap</h4>
          <ul className="space-y-4 font-sans text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/services/transportation" className="hover:underline">The Fleet</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/membership" className="hover:underline">Membership</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest-xl border-b border-black pb-2 mb-6">Contact</h4>
          <ul className="space-y-2 font-mono text-xs text-black/70">
            <li><a href="mailto:concierge@detailedtravel.com" className="hover:text-black transition-colors">concierge@detailedtravel.com</a></li>
            <li><a href="tel:+18884200177" className="hover:text-black transition-colors">+1 (888) 420-0177</a></li>
            <li className="pt-4">24 Mercer St<br />New York, NY 10013</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-black flex flex-col md:flex-row justify-between items-center font-mono text-[10px] uppercase tracking-widest-xl text-black/60">
        <p>&copy; {currentYear} Detailed Travel Group. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-black transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-black transition-colors">Terms</Link>
          <span>Designed in NYC</span>
        </div>
      </div>
    </footer>
  );
}
