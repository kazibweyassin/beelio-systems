import './globals.css';

export const metadata = {
  metadataBase: new URL('https://beelio.tech'),
  title: {
    default: 'Beelio Technologies | Custom Software, WhatsApp Automation & AI for African Businesses',
    template: '%s | Beelio Technologies',
  },
  description: 'Kampala-based software company building WhatsApp chatbots, business automation, web apps and mobile apps for African SMEs. Fast delivery, affordable pricing, built for how African businesses work.',
  keywords: [
    'WhatsApp chatbot Uganda',
    'business automation Kampala',
    'custom software Uganda',
    'web app development Uganda',
    'mobile app development East Africa',
    'AI automation Uganda',
    'SACCO software Uganda',
    'school management system Uganda',
    'clinic management software Uganda',
    'inventory system Uganda',
    'software company Kampala',
    'Beelio Technologies',
  ],
  authors: [{ name: 'Beelio Technologies', url: 'https://beelio.tech' }],
  creator: 'Beelio Technologies',
  publisher: 'Beelio Technologies',
  verification: {
    google: 'TsNyECOtCRf4_M_SnhbTXqwSrmXAEPYp-wt7fuijFlE',
  },
  alternates: {
    canonical: 'https://beelio.tech',
  },
  openGraph: {
    title: 'Beelio Technologies | Custom Software & WhatsApp Automation for African Businesses',
    description: 'WhatsApp chatbots, business automation, web and mobile apps built for African SMEs. Kampala-based, fast delivery, priced for African businesses.',
    url: 'https://beelio.tech',
    siteName: 'Beelio Technologies',
    images: [
      {
        url: '/interface.jpg',
        width: 1200,
        height: 630,
        alt: 'Beelio Technologies, custom software and automation for African businesses',
      },
    ],
    locale: 'en_UG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beelio Technologies | Software & WhatsApp Automation for African Businesses',
    description: 'WhatsApp chatbots, automation, web and mobile apps built for African SMEs. Affordable, fast, Kampala-based.',
    images: ['/interface.jpg'],
    creator: '@beelio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://beelio.tech/#business',
        name: 'Beelio Technologies',
        url: 'https://beelio.tech',
        logo: 'https://beelio.tech/favicon.svg',
        image: 'https://beelio.tech/interface.jpg',
        description: 'Kampala-based software company building WhatsApp chatbots, business automation, web apps and mobile apps for African SMEs.',
        telephone: '+256786367460',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kampala',
          addressCountry: 'UG',
        },
        areaServed: ['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'East Africa'],
        sameAs: [
          'https://tiktok.com/@beelio',
          'https://x.com/beelio',
        ],
        priceRange: 'UGX 2,500,000 – UGX 20,000,000',
        openingHours: 'Mo-Fr 08:00-18:00',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WhatsApp Chatbot Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Process Automation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Web Application Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://beelio.tech/#website',
        url: 'https://beelio.tech',
        name: 'Beelio Technologies',
        publisher: { '@id': 'https://beelio.tech/#business' },
        inLanguage: 'en-UG',
      },
    ],
  };

  return (
    <html lang="en-UG" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-navy text-white">
        {children}
      </body>
    </html>
  );
}
