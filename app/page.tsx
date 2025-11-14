import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Features from '@/components/home/Features';
import CallToAction from '@/components/home/CallToAction';
import { organizationSchema, localBusinessSchema, websiteSchema } from '@/lib/structured-data';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <Hero />
      <Services />
      <Features />
      <CallToAction />
    </>
  );
}
