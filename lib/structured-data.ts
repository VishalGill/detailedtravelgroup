export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Detailed Travel Group",
  description: "Premier luxury travel concierge offering black car service, private jet charters, restaurant reservations, VIP airport services, and personalized travel experiences.",
  url: "https://detailedtravelgroup.com",
  telephone: "+1-555-DTG-LUXE",
  email: "concierge@detailedtravelgroup.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  sameAs: [
    "https://facebook.com/detailedtravelgroup",
    "https://instagram.com/detailedtravelgroup",
    "https://linkedin.com/company/detailedtravelgroup",
  ],
  priceRange: "$$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "40.7128",
      longitude: "-74.0060",
    },
    geoRadius: "50000",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LuxuryService",
  name: "Detailed Travel Group",
  image: "https://detailedtravelgroup.com/og-image.jpg",
  "@id": "https://detailedtravelgroup.com",
  url: "https://detailedtravelgroup.com",
  telephone: "+1-555-DTG-LUXE",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Detailed Travel Group",
  url: "https://detailedtravelgroup.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://detailedtravelgroup.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
