import './globals.css';

export const metadata = {
  metadataBase: new URL('https://beelio.tech'),
  title: {
    default: 'Beelio | WhatsApp Automation for Global Service Businesses',
    template: '%s | Beelio',
  },
  description:
    'Beelio automates WhatsApp replies, bookings, payments, and customer engagement for salons, clinics, and retailers in the UK, US, EU, and beyond.',
  keywords: [
    'WhatsApp automation UK',
    'WhatsApp chatbot US',
    'AI booking system EU',
    'enterprise WhatsApp bot',
    'clinic appointment automation',
    'retail WhatsApp automation',
    'salon WhatsApp bot',
    'Stripe WhatsApp integration',
    'global WhatsApp automation',
    'customer engagement automation',
    'Beelio',
    'business process automation',
    'multi-location booking system',
    'SaaS WhatsApp bot',
  ],
  authors: [{ name: 'Beelio', url: 'https://beelio.tech' }],
  creator: 'Beelio',
  publisher: 'Beelio',
  verification: {
    google: 'TsNyECOtCRf4_M_SnhbTXqwSrmXAEPYp-wt7fuijFlE',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  alternates: {
    canonical: 'https://beelio.tech',
  },
  openGraph: {
    title: 'Beelio | WhatsApp Automation for Global Service Businesses',
    description:
      'WhatsApp chatbots, business automation, web and mobile apps built for global SMEs.',
    url: 'https://beelio.tech',
    siteName: 'Beelio',
    images: [
      {
        url: '/interface.jpg',
        width: 1200,
        height: 630,
        alt: 'Beelio, WhatsApp automation for global businesses',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beelio | WhatsApp Automation for Global Businesses',
    description:
      'WhatsApp chatbots, automation, web and mobile apps built for global SMEs.',
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
        '@type': 'Organization',
        '@id': 'https://beelio.tech/#organization',
        name: 'Beelio',
        url: 'https://beelio.tech',
        logo: 'https://beelio.tech/favicon.svg',
        image: 'https://beelio.tech/interface.jpg',
        description:
          'Beelio automates WhatsApp replies, bookings, payments, and customer engagement for global service businesses.',
        sameAs: ['https://tiktok.com/@beelio', 'https://x.com/beelio'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://beelio.tech/#website',
        url: 'https://beelio.tech',
        name: 'Beelio',
        publisher: { '@id': 'https://beelio.tech/#organization' },
        inLanguage: 'en',
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
