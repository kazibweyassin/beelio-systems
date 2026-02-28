import './globals.css';

export const metadata = {
  title: 'Beelio Technologies | Intelligent Software for Africa',
  description: 'Custom software and AI systems for African businesses. Fast, affordable, and built for your needs.',
  openGraph: {
    title: 'Beelio Technologies',
    description: 'Custom software and AI systems for African businesses.',
    url: 'https://your-domain.com',
    siteName: 'Beelio Technologies',
    images: [
      {
        url: 'https://your-domain.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Beelio Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beelio Technologies',
    description: 'Custom software and AI systems for African businesses.',
    images: ['https://your-domain.com/og-image.png'],
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
