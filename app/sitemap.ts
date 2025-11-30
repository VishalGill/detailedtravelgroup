import type { MetadataRoute } from 'next';

const baseUrl = 'https://detailedtravel.com'; // Update with actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/contact',
    '/membership',
    '/services',
    '/services/lifestyle',
    '/services/security',
    '/services/specialized',
    '/services/transportation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const servicePages = [
    '/services/transportation/chauffeur-services',
    '/services/transportation/airport-concierge',
    '/services/transportation/private-aviation',
    '/services/events/major-events',
    '/services/lifestyle/dining-reservations',
    '/services/lifestyle/entertainment-access',
    '/services/lifestyle/personal-shopping',
    '/services/lifestyle/wellness-spa',
    '/services/security/executive-protection',
    '/services/security/secure-transportation',
    '/services/security/event-security',
    '/services/specialized/relocation-services',
    '/services/specialized/pet-concierge',
    '/services/specialized/gift-sourcing',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
