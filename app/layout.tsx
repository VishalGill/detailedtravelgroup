import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Detailed Travel Group",
    default: "Detailed Travel Group - Luxury Travel & Concierge Services",
  },
  description: "Premier luxury travel concierge offering black car service, private jet charters, restaurant reservations, VIP airport services, and personalized travel experiences.",
  keywords: ["luxury travel", "concierge service", "private jet", "black car service", "VIP airport service", "restaurant reservations", "luxury transportation"],
  openGraph: {
    title: "Detailed Travel Group - Luxury Travel & Concierge Services",
    description: "Premier luxury travel concierge offering black car service, private jet charters, restaurant reservations, VIP airport services, and personalized travel experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Detailed Travel Group - Luxury Travel & Concierge Services",
    description: "Premier luxury travel concierge offering black car service, private jet charters, restaurant reservations, VIP airport services, and personalized travel experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
