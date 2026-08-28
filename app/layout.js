import './globals.css';
import Script from 'next/script';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a1020',
};

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

  authors: [
    {
      name: 'Beelio Technologies',
      url: 'https://beelio.tech',
    },
  ],

  creator: 'Beelio Technologies',
  publisher: 'Beelio Technologies',

  verification: {
    google: 'TsNyECOtCRf4_M_SnhbTXqwSrmXAEPYp-wt7fuijFlE',
  },

  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Beelio Technologies | AI Software & FinTech Development',
    description:
      'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets.',
    url: '/',
    siteName: 'Beelio Technologies',
    images: [
      {
        url: '/interface.jpg',
        width: 1200,
        height: 630,
        alt: 'Beelio Technologies AI software and FinTech development',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Beelio Technologies | AI Software & FinTech Development',
    description:
      'AI-powered software, FinTech platforms, and enterprise automation for emerging markets.',
    images: ['/interface.jpg'],
    creator: '@beeliotech',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
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
        name: 'Beelio Technologies',
        url: 'https://beelio.tech',
        logo: 'https://beelio.tech/favicon-32x32.png',
        image: 'https://beelio.tech/interface.jpg',
        description:
          'Beelio Technologies builds AI-powered software and FinTech platforms for emerging markets.',
        foundingDate: '2023',
        founder: {
          '@type': 'Person',
          name: 'Yassin Kazibwe',
        },
        sameAs: [
          'https://www.linkedin.com/company/beelio/',
          'https://x.com/beeliotech',
        ],
        areaServed: [
          {
            '@type': 'Country',
            name: 'Uganda',
          },
          {
            '@type': 'Country',
            name: 'Kenya',
          },
          {
            '@type': 'Place',
            name: 'Africa',
          },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Business Development',
          email: 'info@beelio.tech',
          availableLanguage: ['English'],
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://beelio.tech/#localbusiness',
        name: 'Beelio Technologies',
        url: 'https://beelio.tech',
        image: 'https://beelio.tech/interface.jpg',
        parentOrganization: {
          '@id': 'https://beelio.tech/#organization',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kampala',
          addressCountry: 'UG',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://beelio.tech/#website',
        url: 'https://beelio.tech',
        name: 'Beelio Technologies',
        publisher: {
          '@id': 'https://beelio.tech/#organization',
        },
        inLanguage: 'en-GB',
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18032748570"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'AW-18032748570');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}