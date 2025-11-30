import Script from 'next/script';

export const siteConfig = {
  phone: {
    number: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+18884200177',
    display: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '(888) 420-0177',
    sms: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+18884200177',
  },
  booking: {
    alias: process.env.NEXT_PUBLIC_MYLIMOBIZ_ALIAS || 'detailed',
    url: process.env.NEXT_PUBLIC_MYLIMOBIZ_WIDGET_URL || 'https://book.mylimobiz.com/v4/detailed',
  },
  company: {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Detailed Travel Group',
    email: process.env.NEXT_PUBLIC_EMAIL || 'concierge@detailedtravel.com',
    address: '24 Mercer St, New York, NY 10013'
  }
} as const;

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.company.name,
    "url": "https://www.detailedtravelgroup.com",
    "logo": "https://www.detailedtravelgroup.com/logo.png",
    "description": "New York's premier luxury concierge and logistics partner.",
    "telephone": siteConfig.phone.number,
    "email": siteConfig.company.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "24 Mercer St",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10013",
      "addressCountry": "US"
    }
  };

  const membershipSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Detailed Travel Group Membership",
    "description": "Tiered luxury concierge membership providing priority access to logistics, lifestyle, and travel services.",
    "brand": {
      "@type": "Brand",
      "name": siteConfig.company.name
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Silver Membership",
        "price": "5000",
        "priceCurrency": "USD",
        "description": "Priority Fleet Access & Account Management"
      },
      {
        "@type": "Offer",
        "name": "Gold Membership",
        "price": "12000",
        "priceCurrency": "USD",
        "description": "Full Lifestyle Integration & Global Access"
      }
    ]
  };

  return (
    <>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="membership-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(membershipSchema) }}
      />
    </>
  );
}
