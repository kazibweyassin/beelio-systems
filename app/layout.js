import './globals.css';

export const metadata = {
  metadataBase: new URL('https://beelio.tech'),
  title: {
    default: 'Beelio Technologies | AI Software & FinTech Development',
    template: '%s | Beelio Technologies',
  },
  description:
    'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets. Custom intelligent systems, financial infrastructure, and enterprise automation.',
  keywords: [
    'AI software',
    'FinTech development',
    'emerging markets',
    'financial technology Africa',
    'AI agents',
    'enterprise software',
    'custom software development',
    'business automation',
    'financial infrastructure',
    'Beelio Technologies',
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
    title: 'Beelio Technologies | AI Software & FinTech Development',
    description:
      'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets. Custom intelligent systems, financial infrastructure, and enterprise automation.',
    url: 'https://beelio.tech',
    siteName: 'Beelio',
    images: [
      {
        url: '/interface.jpg',
        width: 1200,
        height: 630,
        alt: 'Beelio Technologies AI Software and FinTech Development',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beelio Technologies | AI Software & FinTech Development',
    description:
      'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets. Custom intelligent systems, financial infrastructure, and enterprise automation.',
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
          'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets.',
        sameAs: ['https://www.linkedin.com/company/beelio/?viewAsMember=true', 'https://x.com/beeliotech'],
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
