import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Detailed Travel Group | NYC Luxury Concierge & Logistics",
  description: "New York's premier luxury concierge and logistics partner. Executive transportation, major event access, and lifestyle management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="bg-white text-black antialiased selection:bg-black selection:text-white">
        <div className="grain-overlay fixed inset-0 pointer-events-none z-[9999] opacity-[0.05]" />
        {children}
      </body>
    </html>
  );
}
