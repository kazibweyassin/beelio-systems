import './globals.css';

export const metadata = {
  title: 'Beelio Technologies | WhatsApp Automation for African Businesses',
  description: 'Kampala-based team building WhatsApp chatbots and business automation for African SMEs. Automate replies, bookings, and follow-ups — never lose a sale again.',
  metadataBase: new URL('https://beelio.tech'),
  openGraph: {
    title: 'Beelio Technologies — WhatsApp Automation for African Businesses',
    description: 'Automate your WhatsApp replies, bookings, and follow-ups. Built in Kampala for African businesses.',
    url: 'https://beelio.tech',
    siteName: 'Beelio Technologies',
    images: [
      {
        url: '/interface.jpg',
        width: 1200,
        height: 630,
        alt: 'Beelio Technologies — WhatsApp automation dashboard',
      },
    ],
    locale: 'en_UG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beelio Technologies — WhatsApp Automation for African Businesses',
    description: 'Automate your WhatsApp replies, bookings, and follow-ups. Built in Kampala.',
    images: ['/interface.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-navy text-white">
        {children}
      </body>
    </html>
  );
}
