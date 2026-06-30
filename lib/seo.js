export const SITE_URL = 'https://beelio.tech';
export const SITE_NAME = 'Beelio Technologies';
export const DEFAULT_OG_IMAGE = '/interface.jpg';

export function pageMetadata({
  title,
  description,
  path = '',
  keywords,
  type = 'website',
  noIndex = false,
  absoluteTitle = false,
  publishedTime,
  modifiedTime,
}) {
  const url = path ? `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}` : SITE_URL;

  const openGraph = {
    title,
    description,
    url,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${title} — ${SITE_NAME}`,
      },
    ],
    locale: 'en_GB',
    type,
  };

  if (type === 'article' && publishedTime) {
    openGraph.publishedTime = publishedTime;
    if (modifiedTime) openGraph.modifiedTime = modifiedTime;
  }

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
      creator: '@beelio',
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href.startsWith('http') ? item.href : `${SITE_URL}${item.href}`,
    })),
  };
}

export function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    inLanguage: 'en',
  };
}