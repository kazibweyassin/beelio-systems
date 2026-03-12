import { getAllSlugs } from '@/lib/blog';

export default function sitemap() {
  const base = 'https://beelio.tech';
  const now = new Date().toISOString();

  const blogPosts = getAllSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    { url: base,                          lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/services`,            lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/portfolio`,           lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/pricing`,             lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/how-it-works`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/industries`,          lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,             lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${base}/blog`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    ...blogPosts,
  ];
}
