import inter from '../lib/font';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`bg-navy text-white ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
