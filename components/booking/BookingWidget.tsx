'use client';

import Script from 'next/script';

interface BookingWidgetProps {
  alias?: string;
  redirectUrl?: string;
  className?: string;
}

export function BookingWidget({ 
  alias = process.env.NEXT_PUBLIC_MYLIMOBIZ_ALIAS || 'detailed',
  redirectUrl,
  className = ''
}: BookingWidgetProps) {
  return (
    <div className={`relative bg-white p-1 shadow-[0_0_100px_rgba(255,255,255,0.1)] ${className}`}>
      <div className="bg-white p-4 h-full">
        {/* Widget Link - MyLimoBiz transforms this */}
        <a
          href={`https://book.mylimobiz.com/v4/${alias}`}
          data-ores-widget="quickres"
          data-ores-alias={alias}
          data-redirect-url={redirectUrl || ''}
          className="block w-full h-full min-h-[400px] flex items-center justify-center text-black font-mono text-xs uppercase tracking-widest border border-black/10"
          id="mylimobiz-widget"
        >
          Loading Reservation System...
        </a>
        
        {/* Load Widget Script - Use lazyOnload for performance */}
        <Script
          src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"
          strategy="lazyOnload"
          onLoad={() => {
            console.log('MyLimoBiz widget loaded');
          }}
        />
      </div>
    </div>
  );
}

