import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black pt-20 pb-10 border-t border-black">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col group mb-6">
              <span className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
                NYC / PRIVATE
              </span>
            </Link>
            <p className="font-mono text-xs max-w-sm text-black/60 tracking-wide uppercase leading-relaxed">
              Precision logistics for the C-Suite.
              <br />
              Privacy as a standard, not an option.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest border-b border-black pb-2 mb-6">Sitemap</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="font-sans text-sm hover:underline">Home</Link></li>
              <li><Link href="/services" className="font-sans text-sm hover:underline">Services</Link></li>
              <li><Link href="/membership" className="font-sans text-sm hover:underline">Membership</Link></li>
              <li><Link href="/corporate" className="font-sans text-sm hover:underline">Corporate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest border-b border-black pb-2 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:concierge@detailedtravel.com" className="font-sans text-sm hover:underline block">
                  concierge@detailedtravel.com
                </a>
              </li>
              <li>
                <a href="tel:+18884200177" className="font-sans text-sm hover:underline block">
                  +1 (888) 420-0177
                </a>
              </li>
              <li className="font-mono text-xs text-black/50 mt-4">
                24 Mercer St
                <br />
                New York, NY 10013
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-[10px] uppercase tracking-widest">
          <p>&copy; {currentYear} DETAILED TRAVEL GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-black/60">PRIVACY</Link>
            <Link href="/terms" className="hover:text-black/60">TERMS</Link>
            <span>DESIGNED IN NYC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

